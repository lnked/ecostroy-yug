<?php

class plansModule extends Module
{
    public function index()
    {
        $tabs = [];
        $cache = 'module.plans.list';

        # Получение списка
        #
        if (!$this->mcache_enable || ($this->caching == 1 && !($plans = $this->getCache())))
        {
            $plans = [];
            $sample = Q("SELECT `id`, `liter`, `floor`, `image` FROM `#_mdd_plans` WHERE `visible`=1 ORDER BY `ord` DESC")->all();

            if (!empty($sample))
            {
                $files = new Files();

                foreach ($sample as $item)
                {
                    $id = $item['id'];
                    $floor = $item['floor'];
                    $liter = $item['liter'];

                    $item['image'] = $files->getFilesByGroupCount($item['image'], [ 'original' ], [ 'file', 'title' ], 1);

                    unset($item['id'], $item['floor'], $item['liter']);

                    $tabs[$liter][] = $floor;

                    $plans[$liter][$floor] = $item['image'];
                }
            }

            $this->setCache($cache, $plans);
        }

        return [
            'tabs' => $tabs,
            'plans' => $plans,
            'template' => 'plans'
        ];
    }
}