<?php

class actionModule extends Module
{
    public function index()
    {
        $cache = 'module.action.list';

        # Получение списка
        #
        if (!$this->mcache_enable || ($this->caching == 1 && !($action = $this->getCache())))
        {
            $action = Q("SELECT `id`, `name`, `dateend`, `description`
                         FROM `#_mdd_actions`
                         WHERE `visible`=1
                         ORDER BY STR_TO_DATE(`dateend`, '%d.%m.%Y') DESC
                         LIMIT 1")->row('1');

            if (!empty($action))
            {
                $action['dateend'] = strtotime($action['dateend']);

                if ($action['dateend'] <= time()) {
                    unset($action['dateend']);
                }
            }

            $this->setCache($cache, $action);
        }

        return [
            'action'    =>  $action,
            'template'  =>  'action'
        ];
    }
}