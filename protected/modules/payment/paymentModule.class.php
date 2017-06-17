<?php

class paymentModule extends Module
{
    public function index()
    {
        $tabs = [];
        $cache = 'module.payment.list';

        # Получение списка
        #
        if (!$this->mcache_enable || ($this->caching == 1 && !($payment = $this->getCache())))
        {
            $payment = Q("SELECT `id`, `name`, `system`, `active`, `logos`, `content` FROM `#_mdd_payment` WHERE `visible`=1 ORDER BY `ord`")->all();

            if (!empty($payment))
            {
                $files = new Files();

                foreach ($payment as &$payment_item)
                {
                    $tabs[$payment_item['system']] = [
                        'name' => $payment_item['name'],
                        'active' => $payment_item['active']
                    ];

                    if ($payment_item['logos']) {
                        $payment_item['logos'] = $files->getFilesByGroup($payment_item['logos'], [ 'preview', 'original' ], [ 'id', 'file', 'title' ], false);
                    }
                }
            }

            $this->setCache($cache, $payment);
        }

        return [
            'tabs'      =>  $tabs,
            'payment'   =>  $payment,
            'template'  =>  'payment'
        ];
    }
}