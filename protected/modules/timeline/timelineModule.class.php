<?php

class timelineModule extends Module
{
    public function index()
    {
        $cache = 'module.timeline.list';

        # Получение списка
        #
        if (!$this->mcache_enable || ($this->caching == 1 && !($timeline = $this->getCache())))
        {
            $tabs = [];
            $sample = Q("SELECT `id`, `date`, `photo` FROM `#_mdd_timeline` WHERE `visible`=1 ORDER BY `ord` DESC")->all();
            $timeline = [];

            if (!empty($sample))
            {
                $months = [
                    1 => 'Январь',
                    2 => 'Февраль',
                    3 => 'Март',
                    4 => 'Апрель',
                    5 => 'Май',
                    6 => 'Июнь',
                    7 => 'Июль',
                    8 => 'Август',
                    9 => 'Сентябрь',
                    10 => 'Октябрь',
                    11 => 'Ноябрь',
                    12 => 'Декабрь'
                ];

                $files = new Files();

                foreach ($sample as $timeline_item)
                {
                    $photo = $files->getFilesByGroup($timeline_item['photo'], [ 'preview', 'original' ], [ 'id', 'file', 'title', 'ord' ], true);
                    $timestamp = strtotime($timeline_item['date']);

                    if (!empty($photo)) {
                        $m = date('n', $timestamp);
                        $y = date('Y', $timestamp);

                        $tabs['years'][$y] = $y;

                        $tabs['months'][$y][$m] = [
                            'id' => $m,
                            'name' => $months[$m]
                        ];

                        $_photo = [];

                        foreach($photo as $item) {
                            if (isset($item['preview'])) {
                                $_photo[] = [
                                    'preview' => $item['preview']['file'],
                                    'original' => $item['original']['file']
                                ];   
                            }
                        }
                        
                        $timeline[$y][$m] = $_photo;
                    }
                }

                if (isset($tabs['years']))
                {
                    $current_y = max(array_keys($tabs['years']));
                    $current_m = max(array_keys($tabs['months'][$current_y]));

                    $tabs['y'] = $current_y;
                    $tabs['m'] = $current_m;

                    if (!empty($tabs['years'])) {
                        rsort($tabs['years']);
                    }

                    if (!empty($tabs['months'])) {
                        foreach ($tabs['months'] as &$month) {
                            rsort($month);
                        }
                    }
                }
            }

            $this->setCache($cache, $timeline);
        }

        $json = json_encode($timeline, 64 | 256);

        return [
            'tabs' => $tabs,
            'json' => $json,
            'timeline' => $timeline,
            'template' => 'timeline'
        ];
    }
}