<?php

class sliderModule extends Module
{
    public function index()
    {
        $cache = 'module.slider.list';

        if (!$this->mcache_enable || ($this->caching == 1 && !($slider = $this->getCache())))
        {
            $group_id = Q("SELECT `slides` FROM `#_mdd_slider` WHERE `visible`=1 LIMIT 1")->row('slides');

            $slider = [];

            if (!empty($group_id))
            {
                $files = new Files();

                $slider = $files->getFilesByGroup($group_id, [ 'preview', 'original' ], [ 'id', 'file' ], true);
            }

            $this->setCache($cache, $slider);
        }

        return [
            'slider'            =>  $slider,
            'template'          =>  'slider'
        ];
    }
}