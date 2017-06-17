<?php

class actionModule extends Module
{
    public function index()
    {
        return [
            // 'action'    =>  $action,
            'template'  =>  'action'
        ];
    }

    public function listMethod()
    {
        # Пагинация
        #
        $pager = $this->pager($this->countItem(), $this->limit);
        
        $cache = 'module.action.list';

        # Получение списка
        #
        if (!$this->mcache_enable || ($this->caching == 1 && !($action = $this->getCache())))
        {
            $action = Q("SELECT * FROM `#_mdd_action` WHERE `visible`=1 ORDER BY STR_TO_DATE(`date`, '%d.%m.%Y') DESC, `ord` DESC")->all();

            if (!empty($action))
            {
                foreach ($action as &$action_item)
                {
                    $action_item['date'] = Dates($action_item['date'], $this->locale);
                }
            }

            $this->setCache($cache, $action);
        }

        # Мета теги
        #
        $meta = $this->metaData($action);

        return [
            'meta'              =>  $meta,
            'pager'             =>  $pager,
            'action'         =>  $action,
            'template'          =>  'list'
        ];
    }
}