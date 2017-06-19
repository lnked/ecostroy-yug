<?php

class Shopping
{
    use Tools;
    
    private $user    = [];
    private $words    = [];

    private $db = [
                'users'        => '#__shop_customer',
                'orders'    => '#__shop_orders',
                'storage'    => '#__shop_storage',
                'address'    => '#__shop_address',
                'catalog'    => '#__shop_catalog',
                'category'    => '#__shop_category',
                'discount'    => '#__shop_discount',
                'settings'    => '#__shop_settings'
            ];
    
    public function __construct()
    {
        if (!empty($_SESSION['userinf'])) {
            $this->user = $_SESSION['userinf'];
        }
    }

    public function getSettings()
    {
        return Q("SELECT * FROM `" . $this->db['settings'] . "` ORDER BY `ord`")->all();
    }

    public function getOrders($page = 0, $limit = 12)
    {
        $orders = Q("SELECT * FROM `" . $this->db['orders'] . "` ORDER BY `date` DESC LIMIT ?i, ?i", [ $page, $limit ])->all();

        if (!empty($orders)) {
            foreach ($orders as &$order) {
                $order['date'] = $this->dateFormat($order['date'], 'd.m.Y H:i');
            }
        }
        
        return $orders;
    }

    public function getOrderItem($id = 0)
    {
        $order = [];

        if ($id) {
            $order = Q("SELECT * FROM `" . $this->db['orders'] . "` WHERE `id`=?i LIMIT 1", [ $id ])->row();

            if (!empty($order)) {
                $order['date'] = $this->dateFormat($order['date'], 'd.m.Y H:i');
                $order['user'] = $this->getUser($order['user']);
                $order['address'] = $this->getAddressItem($order['address']);
                $order['purchase'] = $this->getPurchase($order['purchase']);
            }
        }

        return $order;
    }

    public function deleteOrder($id = 0)
    {
        if ($id !== 0) {
            Q("DELETE FROM `" . $this->db['orders'] . "` WHERE `id`=?i LIMIT 1", [ $id ]);
        }
    }

    public function getPurchase($json = '')
    {
        $products = [];

        if (!empty($json)) {
            $products = json_decode($json, true);
        }

        return $products;
    }

    public function tagsList($page = 0, $limit = 10)
    {
    }

    public function categoryOrder($pid = 0, $nid = 10)
    {
        $ord = 0;

        $min = Q("SELECT MIN(`ord`) as `ord` FROM `" . $this->db['category'] . "` WHERE `pid`=?i LIMIT 1", [ $pid ])->row('ord');

        Q("UPDATE `" . $this->db['category'] . "` SET `ord`=(`ord` - ?i + 10) WHERE `pid`=?i", [ $min, $pid ]);

        if ($nid == 0) {
            $ord = Q("SELECT (MAX(`ord`) + 5) as `ord` FROM `" . $this->db['category'] . "` WHERE `pid`=?i LIMIT 1", [ $pid ])->row('ord');
        } else {
            $ord = Q("SELECT (`ord` - 5) as `ord` FROM `" . $this->db['category'] . "` WHERE `id`=?i LIMIT 1", [ $nid ])->row('ord');
        }

        return $ord;
    }
    
    public function categoryUpdate($pid = 0, $ord = 0, $oid = 0)
    {
        Q("UPDATE `" . $this->db['category'] . "` SET `pid`=?i, `ord`=?i WHERE `id`=?i LIMIT 1", [
            $pid, $ord, $oid
        ]);
    }

    protected function queryPart($words = [], $current = 0)
    {
        if ($current == (count($words) - 1)) {
            return Qb("SELECT DISTINCT `id` FROM `?e` AS `t?i` WHERE (`t?i`.`name` LIKE '%?e%')", array(
                $this->db['catalog'],
                $current,
                $current,
                $words[$current]
            ));
        }

        return Qb("SELECT DISTINCT `id` FROM `?e` AS `t?i` WHERE (`t?i`.`name` LIKE '%?e%') AND `id` IN (?e)", array(
            $this->db['catalog'],
            $current,
            $current,
            $words[$current],
            $this->queryPart($words, $current + 1)
        ));
    }

    public function prepareQuery($parameters = [], $format = [])
    {
        $ids = [];
        $result = '';

        if (isset($parameters['name'])) {
            $name = str_replace(array('”', '“', '%', '&', '#', '$', '№', '@', '\/', '\\', '(', ')', '}', '{', '^', '[', ']', '|', '+', '<', '>', '«', '»', '`', '\'', '--', '"', "'", ',', '.', '!', '?', ':', ';', '*', '®', '©', '™', '℗', '§', '℠'), ' ', $parameters['name']);
            $this->words = preg_split('/\ +/', $name, -1, PREG_SPLIT_NO_EMPTY);

            $sql = $this->queryPart($this->words);
            $sql = preg_replace('/^SELECT DISTINCT `id`/', 'SELECT DISTINCT `id`', $sql);

            $temp = Q($sql)->all();

            if (!empty($temp)) {
                $ids = array_map(function ($value) {
                    return $value['id'];
                }, $temp);
            }
        }

        if (!empty($ids)) {
            $result .= " `id` IN (".implode(',', $ids).")";
        }

        if (!empty($parameters)) {
            foreach ($parameters as $name => $value) {
                if ($name !== 'name') {
                    if ($result !== '') {
                        $result .= " AND ";
                    }

                    $result .= "`".$name."`";

                    if ($format[$name] === 'i') {
                        $result .= " = ".intval($value);
                    } else {
                        $result .= " LIKE '%".$value."%'";
                    }
                }
            }
        }

        return $result ? '('.$result.')' : '';
    }

    public function mapLinks($products = [])
    {
        if (!empty($products)) {
            foreach ($products as &$product) {
                if (isset($product['category']) && !empty($product['category']['system'])) {
                    $product['link'] = '/'.$product['category']['system'].'/'.$product['id'].'-'.$product['system'];
                }
            }
        }

        return $products;
    }

    public function productClone($id = 0)
    {
        if ($id) {
            $product = $this->productItem($id);
        
            $properties = isset($product['properties']) ? $product['properties'] : [];
            $modification = isset($product['modification']) ? $product['modification'] : [];

            $clone = array_diff_key($product, array_flip([
                'id',
                'gid',
                'uid',
                'photo',
                'article',
                'storage',
                'created',
                'updated',
                'properties',
                'modification'
            ]));

            $query = [];
            
            foreach ($clone as $key => $value) {
                if (is_numeric($value)) {
                    $_buf = " `".$key."`=".trim($value);
                } elseif (is_array($value)) {
                    $_buf = " `".$key."`='".implode($value, ',')."'";
                } else {
                    $_buf = " `".$key."`='".trim($value)."'";
                }

                $query[] = $_buf;
            }

            $time = time();

            $last_id = Q("INSERT INTO `" . $this->db['catalog'] . "` SET ". implode($query, ',') . ", `created`=?i ON DUPLICATE KEY UPDATE `updated`=?i", [
                1,
                $time,
                $time
            ]);

            if ($last_id) {
                $this->_updateProperties($this->_prepareArray($properties), $last_id);
                $this->_updatModifications($this->_prepareArray($modification), $last_id);
            }

            return $last_id;
        }
    }

    public function productList($page = 0, $limit = 10, $q = '', $sort = [])
    {
        $where = '';
        $order = '';

        if ($q !== '') {
            $where = ' AND '.$q.' ';
        }

        if (!empty($sort)) {
            $order = '`'.$sort['name'].'` '.strtoupper($sort['by']);
        } else {
            $order = '`ord`, `id`';
        }

        $products = Q("SELECT `id`, `name`, `system`, `article`, " .
                      "`category`, `balance`, `discount`, `special`, `discount_type`, `infinity`, `price`, " .
                      "`photo`, `file`, `tags`, `manufacturer`, `visible`, `ord` " .
                      "FROM `" . $this->db['catalog'] . "` WHERE `mod_pid`=0 ".$where." ORDER BY ".$order." LIMIT ?i, ?i", [ $page, $limit ])->all();

        if (!empty($products)) {
            $file = new Files();

            $category = $this->categoryList(['id', 'name', 'system']);

            foreach ($products as &$product) {
                if ($product['category'] && !empty($category[$product['category']])) {
                    $product['category'] = $category[$product['category']];
                }

                if ($product['photo']) {
                    $photo = $file->getFilesByGroupCount($product['photo'], ['cp'], 1);
                    $product['photo'] = isset($photo[0]) ? $photo[0] : [];
                }

                $product['modification'] = $this->_getModification($product['id']);
            }
        }

        return $products;
    }

    public function productsPager($query = '', $search = [], $limit = 10)
    {
        $pager = [];

        $where = '';
        $addurl = '';
        $pager['limit'] = $limit;

        if (!empty($search)) {
            foreach ($search as $k => $name) {
                if ($k !== 'page') {
                    $addurl .= '&'.$k.'='.$name;
                }
            }
        }

        if ($query !== '') {
            $where = 'WHERE '.$query.' ';
        }

        $pager['curr_page'] = isset($_GET['page']) ? intval($_GET['page']) : 0;
        $pager['all_items']    = Q("SELECT COUNT(`id`) AS `count` FROM `".$this->db['catalog']."` ".$where." LIMIT 1")->row('count');
        $pager['start_item'] = $pager['limit'] * $pager['curr_page'];
        $pager['page_count'] = ceil($pager['all_items'] / $pager['limit']);

        $prn_limit = 12;

        if ($pager['page_count'] > 30) {
            if ($pager['all_items'] > $pager['limit']) {
                $pager['advanced'] = 1;
                $pager['arr_pages'] = [];

                $pager['first_page'] = '/' . ADMIN_DIR . '/shopping/catalog/?page=0';
                $pager['last_page'] = '/' . ADMIN_DIR . '/shopping/catalog/?page=' . ($pager['page_count'] - 1);

                $first_pager = $pager['curr_page'] - $prn_limit;
                $last_pager = $first_pager + $prn_limit * 2;

                if ($first_pager <= 0) {
                    $first_pager = 0;
                    $last_pager = $first_pager + $prn_limit + ($prn_limit / 2);
                }

                if ($last_pager >= $pager['page_count']) {
                    $last_pager = $pager['page_count'] - 1;
                    $first_pager = $last_pager - $prn_limit - ($prn_limit / 2);
                }

                for ($i = $first_pager; $i <= $last_pager; $i++) {
                    $pager['arr_pages'][] = [
                        'point'     =>    $i,
                        'qstring'   =>    '/' . ADMIN_DIR . '/shopping/catalog/?page=' . $i . $addurl
                    ];
                }
            }
        } else {
            if ($pager['all_items'] > $pager['limit']) {
                $pager['arr_pages'] = [];
                
                for ($i = 0; $i < $pager['page_count']; $i++) {
                    $pager['arr_pages'][] = [
                        'point'     =>    $i,
                        'qstring'   =>    '/' . ADMIN_DIR . '/shopping/catalog/?page=' . $i . $addurl
                    ];
                }
            }
        }

        return $pager;
    }

    public function productItem($id = 0)
    {
        $item = [];

        if ($id !== 0) {
            $item = Q("SELECT * FROM `" . $this->db['catalog'] . "` WHERE `id`=?i LIMIT 1", [ $id ])->row();
            $item['meta_robots'] = preg_split('/\,+/', $item['meta_robots'], -1, PREG_SPLIT_NO_EMPTY);

            $item['storage'] = $this->_getStorage($id);
            $item['modification'] = $this->_getModification($id);
        }

        return $item;
    }
    
    public function addProduct($data = [])
    {
        if (!empty($data)) {
            $sql = "";
            $slice = [];

            $properties = $data['properties'];
            $modification = $data['modification'];

            unset($data['properties'], $data['modification']);

            $index = 0;
            $length = count($data);

            $_query = '';
            $_value = [];

            foreach ($data as $key => $value) {
                $_t = explode(':', $key);
                $_f = $_t[0];
                $_n = $_t[1];

                if ($_query !== '') {
                    $_query .= ', ';
                }

                if (in_array($_f, ['ls', 'li'])) {
                    $_f = 's';
                    $value = implode(',', $value);
                }

                $_query .= '`'.$_n.'`=?'.$_f;

                $_value[] = $value;
            }

            $sql = ", `updated`=" . time() . ", `uid`=" . $this->user['id'] . ", `gid`=" . $this->user['gid'];

            $last_id = Q("INSERT INTO `" . $this->db['catalog'] . "` SET " . $_query . $sql . " ON DUPLICATE KEY UPDATE `updated`=" . time(), $_value);

            if ($last_id) {
                $this->_updateProperties($this->_prepareArray($properties), $last_id);
                $this->_updatModifications($this->_prepareArray($modification), $last_id);
            }

            return $last_id;
        }

        return false;
    }

    public function editProduct($data = [], $id = 0)
    {
        if (!empty($data) && $id !== 0) {
            $sql = '';
            $slice = [];
            
            $this->_updateProperties($this->_prepareArray($data['properties']), $id);
            $this->_updatModifications($this->_prepareArray($data['modification']), $id);

            unset($data['properties'], $data['modification']);

            $index = 0;
            $length = count($data);

            $_query = '';
            $_value = [];

            foreach ($data as $key => $value) {
                $_t = explode(':', $key);
                $_f = $_t[0];
                $_n = $_t[1];

                if ($_query !== '') {
                    $_query .= ', ';
                }

                if (in_array($_f, ['ls', 'li'])) {
                    $_f = 's';
                    $value = implode(',', $value);
                }

                $_query .= '`'.$_n.'`=?'.$_f;

                $_value[] = $value;
            }

            $sql = ", `updated`=" . time() . ", `uid`=" . $this->user['id'] . ", `gid`=" . $this->user['gid'];

            Q("UPDATE `" . $this->db['catalog'] . "` SET " . $_query . $sql . " WHERE `id`=".$id." LIMIT 1", $_value);
        }
    }

    public function update($name = '', $value = '', $id = '')
    {
        if ($name && $id && $value !== '') {
            Q("UPDATE `" . $this->db['catalog'] . "` SET `?e`=?i, `updated`=?i WHERE `id`=?i LIMIT 1", [
                $name,
                $value,
                time(),
                $id
            ]);
        }
    }

    public function getProductsOrd()
    {
        return Q("SELECT (MAX(`ord`) + 10) AS `ord` FROM `" . $this->db['catalog'] . "` LIMIT 1")->row('ord');
    }
    
    public function getCategoryOrd()
    {
        return Q("SELECT (MAX(`ord`) + 10) AS `ord` FROM `" . $this->db['category'] . "` LIMIT 1")->row('ord');
    }

    public function structureCategory()
    {
        return Q("SELECT `id`, `name`, `system`, `pid`, `visible` FROM `" . $this->db['category'] . "` ORDER BY `pid`, `ord`, `id`")->all();
    }

    public function catalogFields($id = 0)
    {
        $list        = [];
        $fields    = [];
        $settings    = [];
        $group_id    = '';

        if ($id !== 0) {
            $catalog_item = Q("SELECT * FROM `" . $this->db['catalog'] . "` WHERE `id`=?i", [ $id ])->row();

            if (isset($catalog_item['photo'])) {
                $group_id = $catalog_item['photo'];
                
                $file = new Files();
                $list = $file->getFilesByGroup($group_id, ['cp']);
            }
        }

        if ($id == 0 || $group_id == '') {
            $group_id = 'file_' . substr(str_replace('.', '_', uniqid()), 0, 5) . '_' . str_replace('.', '_', uniqid());
        }

        foreach ($list as &$_li) {
            $_li['uuid'] = $_li['id'];
            $_li['name'] = $_li['title'];
            $_li['size'] = $_li['bsize'];
            $_li['thumbnailUrl'] = $_li['file'];
        }

        $fields['name'] = 'photo';
        $fields['value'] = $group_id;
        $fields['action'] = 'shopping/fileUpload';
        $fields['list'] = $list;
        $fields['json']= json_encode($list, 64 | 256);

        $settings = [
            [
                'prefix'    => 'preview',
                'width'     => 560,
                'height'    => 560,
                'method'    => 'resize'
            ],
            [
                'prefix'    => 'market',
                'width'     => 500,
                'height'    => 500,
                'method'    => 'resize'
            ],
            [
                'prefix'    => 'cp',
                'width'     => 112,
                'height'    => 112,
                'method'    => 'resize'
            ]
        ];

        $settings['json'] = json_encode($settings);

        $fields['settings'] = $settings;

        return $fields;
    }

    public function categoryItem($id = 0)
    {
        $item = [];

        if ($id !== 0) {
            $item = Q("SELECT * FROM `" . $this->db['category'] . "` WHERE `id`=?i LIMIT 1", [ $id ])->row();

            $item['meta_robots'] = preg_split('/\,+/', $item['meta_robots'], -1, PREG_SPLIT_NO_EMPTY);
        }

        return $item;
    }

    public function categoryTree($pid = 0)
    {
        $tree = Q("SELECT `id`, `name`, `system`, `pid`, `visible` FROM `" . $this->db['category'] . "` ORDER BY `pid`, `ord`, `id`", [ $pid ])->all();

        return $this->makeTree($tree, $pid);
    }
    
    public function categoryList($list = ['id', 'pid', 'name', 'system'], $pid = null)
    {
        $where = "";

        if (!is_null($pid)) {
            $where = " WHERE `pid`=?i ";
        }

        return Q("SELECT `" . implode("`, `", $list) . "` FROM `" . $this->db['category'] . "` " . $where . " ORDER BY `ord` DESC, `name`", [ $pid ])->all('id');
    }

    public function deleteUser($id = 0)
    {
        if ($id) {
            Q("DELETE FROM `" . $this->db['users'] . "` WHERE `id`=?i LIMIT 1", [ $id ]);
        }
    }

    public function getUser($id = 0, $format = false)
    {
        $user = [];

        if ($id) {
            $user = Q("SELECT * FROM `" . $this->db['users'] . "` WHERE `id`=?i LIMIT 1", [ $id ])->row();

            if ($format) {
                $user['birthday'] = date('d.m.Y', $user['birthday']);
            }

            $user['address'] = $this->getAddress($id);
        }

        return $user;
    }

    public function getUsers($page = 0, $limit = 10)
    {
        $start = $page * $limit;

        $users = Q("SELECT * FROM `" . $this->db['users'] . "` LIMIT ?i, ?i", [ $start, $limit ])->all();

        foreach ($users as &$user) {
            if ($user['phone']) {
                $user['phone'] = $this->formatPhone($user['phone']);
            }

            if ($user['birthday']) {
                $user['birthday'] = $this->dateFormat($user['birthday']);
            }
        }

        return $users;
    }

    public function getAddress($uid = 0)
    {
        $address = [];

        if ($uid) {
            $address = Q("SELECT * FROM `" . $this->db['address'] . "` WHERE `uid`=?i", [ $uid ])->all('id');
        }

        return $address;
    }

    public function getAddressItem($id = 0)
    {
        $address = [];

        if ($id) {
            $address = Q("SELECT * FROM `" . $this->db['address'] . "` WHERE `id`=?i LIMIT 1", [ $id ])->row();
        }

        return $address;
    }

    public function addBuyers($data = [])
    {
        if (!empty($data)) {
            $sql = "";
            $slice = [];
            
            $index = 0;
            $address = $data['address'];
            unset($data['address']);
        
            $length = count($data);

            foreach ($data as $key => $value) {
                $index ++;

                $type = 's';

                if (strstr($key, ':')) {
                    $_t = explode(':', $key);

                    $sql .= "`" . $_t[1] . "`=";

                    if ($_t[0] == 's') {
                        if (!$value) {
                            $value = '';
                        }

                        $sql .= "'" . $value . "'";
                    } elseif ($_t[0] == 'i') {
                        if (!$value) {
                            $value = 0;
                        }

                        $sql .= $value;
                    } elseif (in_array($_t[0], ['ls', 'li'])) {
                        $sql .= "'" . implode(',', $value) . "'";
                    }
                }

                if ($length > $index) {
                    $sql .= ", ";
                }
            }
            
            $sql .= ", `created`=" . time();

            $id = Q("INSERT INTO `" . $this->db['users'] . "` SET " . $sql);

            $this->updateAddress($address, $id);

            return $id;
        }
    }

    public function editBuyers($data = [], $id = 0)
    {
        if (!empty($data) && $id !== 0) {
            $sql = "";
            $slice = [];
            
            $index = 0;
            $address = $data['address'];
            unset($data['address']);
            
            $length = count($data);

            foreach ($data as $key => $value) {
                $index ++;
                $type = 's';

                if (strstr($key, ':')) {
                    $_t = explode(':', $key);

                    $sql .= "`" . $_t[1] . "`=";

                    if ($_t[0] == 's') {
                        $sql .= "'" . $value . "'";
                    } elseif ($_t[0] == 'i') {
                        $sql .= $value;
                    } elseif (in_array($_t[0], ['ls', 'li'])) {
                        $sql .= "'" . implode(',', $value) . "'";
                    }
                }

                if ($length > $index) {
                    $sql .= ", ";
                }
            }

            $sql .= ", `updated`=" . time();

            Q("UPDATE `" . $this->db['users'] . "` SET " . $sql . " WHERE `id`=?i LIMIT 1", [ $id ]);

            $this->updateAddress($address, $id);
        }
    }

    public function updateAddress($address = [], $id = 0)
    {
        if (!empty($address)) {
            $address = $this->_prepareArray($address);
            
            if ($id !== 0) {
                $keys = array_keys($address);
                $keys = array_filter($keys, function ($k) use ($keys) {
                    return $keys[$k] > 0;
                }, ARRAY_FILTER_USE_KEY);

                $inner = Q("SELECT `id` FROM `" . $this->db['address'] . "` WHERE `uid`=?i", [ $id ])->all('id');

                if (!empty($inner)) {
                    $remove = array_diff(array_keys($inner), $keys);

                    if (!empty($remove)) {
                        Q("DELETE FROM `" . $this->db['address'] . "` WHERE `id` IN (?li)", [ $remove ]);
                    }
                }
            }

            foreach ($address as $key => $addr) {
                if ($this->validate($addr, 'address')) {
                    $addr['uid'] = $id;

                    ksort($addr);

                    if ($key > 0) {
                        $addr['id'] = $key;

                        Q("UPDATE `" . $this->db['address'] . "` SET " .
                            "`area`=?s, " .
                            "`city`=?s, " .
                            "`country`=?s, " .
                            "`flat`=?s, " .
                            "`house`=?s, " .
                            "`postal_code`=?i, " .
                            "`region`=?s, " .
                            "`settlement`=?s, " .
                            "`street`=?s, `uid`=?i WHERE `id`=?i LIMIT 1", $addr
                        );
                    } else {
                        Q("INSERT INTO `" . $this->db['address'] . "` SET " .
                            "`area`=?s, " .
                            "`city`=?s, " .
                            "`country`=?s, " .
                            "`flat`=?s, " .
                            "`house`=?s, " .
                            "`postal_code`=?i, " .
                            "`region`=?s, " .
                            "`settlement`=?s, " .
                            "`street`=?s, `uid`=?i", $addr
                        );
                    }
                }
            }
        }
    }

    public function addCategory($data = [])
    {
        if (!empty($data)) {
            $sql = "";
            $slice = [];
            
            $index = 0;
            $length = count($data);

            foreach ($data as $key => $value) {
                $index ++;

                $type = 's';

                if (strstr($key, ':')) {
                    $_t = explode(':', $key);

                    $sql .= "`" . $_t[1] . "`=";

                    if ($_t[0] == 's') {
                        if (!$value) {
                            $value = '';
                        }

                        $sql .= "'" . $value . "'";
                    } elseif ($_t[0] == 'i') {
                        if (!$value) {
                            $value = 0;
                        }

                        $sql .= $value;
                    } elseif (in_array($_t[0], ['ls', 'li'])) {
                        $sql .= "'" . implode(',', $value) . "'";
                    }
                }

                if ($length > $index) {
                    $sql .= ", ";
                }
            }

            $sql .= ", `created`=" . time() . ", `uid`=" . $this->user['id'] . ", `gid`=" . $this->user['gid'];
            
            return Q("INSERT INTO `" . $this->db['category'] . "` SET " . $sql);
        }
    }
    
    public function editCategory($data = [], $id = 0)
    {
        if (!empty($data) && $id !== 0) {
            $sql = "";
            $slice = [];
            
            $index = 0;
            $length = count($data);

            foreach ($data as $key => $value) {
                $index ++;

                $type = 's';

                if (strstr($key, ':')) {
                    $_t = explode(':', $key);

                    $sql .= "`" . $_t[1] . "`=";

                    if ($_t[0] == 's') {
                        $sql .= "'" . $value . "'";
                    } elseif ($_t[0] == 'i') {
                        $sql .= $value;
                    } elseif (in_array($_t[0], ['ls', 'li'])) {
                        $sql .= "'" . implode(',', $value) . "'";
                    }
                }

                if ($length > $index) {
                    $sql .= ", ";
                }
            }

            $sql .= ", `updated`=" . time() . ", `uid`=" . $this->user['id'] . ", `gid`=" . $this->user['gid'];

            Q("UPDATE `" . $this->db['category'] . "` SET " . $sql . " WHERE `id`=?i LIMIT 1", [ $id ]);
        }
    }

    public function deleteDiscount($id = 0)
    {
        if ($id) {
            Q("DELETE FROM `" . $this->db['discount'] . "` WHERE `id`=?i LIMIT 1", [ $id ]);
        }
    }

    public function getDiscountItem($id = 0, $format = false)
    {
        $discount = [];

        if ($id) {
            $discount = Q("SELECT * FROM `" . $this->db['discount'] . "` WHERE `id`=?i LIMIT 1", [ $id ])->row();

            if ($format) {
                $discount['date_start'] = date('d.m.Y', $discount['date_start']);
                $discount['date_end'] = date('d.m.Y', $discount['date_end']);
            }
        }

        return $discount;
    }

    public function getDiscountList($page = 0, $limit = 10)
    {
        $start = $page * $limit;

        $discounts = Q("SELECT * FROM `" . $this->db['discount'] . "` LIMIT ?i, ?i", [ $start, $limit ])->all();

        foreach ($discounts as &$discount) {
            if ($discount['date_start']) {
                $discount['date_start'] = $this->dateFormat($discount['date_start']);
            }

            if ($discount['date_end']) {
                $discount['date_end'] = $this->dateFormat($discount['date_end']);
            }
        }

        return $discounts;
    }

    public function addDiscount($data = [])
    {
        if (!empty($data)) {
            $sql = "";
            $slice = [];
            
            $index = 0;
            $length = count($data);

            foreach ($data as $key => $value) {
                $index ++;

                $type = 's';

                if (strstr($key, ':')) {
                    $_t = explode(':', $key);

                    $sql .= "`" . $_t[1] . "`=";

                    if ($_t[0] == 's') {
                        if (!$value) {
                            $value = '';
                        }

                        $sql .= "'" . $value . "'";
                    } elseif ($_t[0] == 'i') {
                        if (!$value) {
                            $value = 0;
                        }

                        $sql .= $value;
                    } elseif (in_array($_t[0], ['ls', 'li'])) {
                        $sql .= "'" . implode(',', $value) . "'";
                    }
                }

                if ($length > $index) {
                    $sql .= ", ";
                }
            }

            $sql .= ", `created`=" . time();
            
            return Q("INSERT INTO `" . $this->db['discount'] . "` SET " . $sql);
        }
    }

    public function editDiscount($data = [], $id = 0)
    {
        if (!empty($data) && $id !== 0) {
            $sql = "";
            $slice = [];
            
            $index = 0;
            $length = count($data);

            foreach ($data as $key => $value) {
                $index ++;

                $type = 's';

                if (strstr($key, ':')) {
                    $_t = explode(':', $key);

                    $sql .= "`" . $_t[1] . "`=";

                    if ($_t[0] == 's') {
                        $sql .= "'" . $value . "'";
                    } elseif ($_t[0] == 'i') {
                        $sql .= $value;
                    } elseif (in_array($_t[0], ['ls', 'li'])) {
                        $sql .= "'" . implode(',', $value) . "'";
                    }
                }

                if ($length > $index) {
                    $sql .= ", ";
                }
            }

            $sql .= ", `updated`=" . time();

            Q("UPDATE `" . $this->db['discount'] . "` SET " . $sql . " WHERE `id`=?i LIMIT 1", [ $id ]);
        }
    }

    public function deleteProduct($id = 0, $recursive = false)
    {
        if ($id !== 0) {
            if ($recursive) {
                $mod = Q("SELECT `id` FROM `" . $this->db['catalog'] . "` WHERE `mod_pid`=?i", [ $id ])->all();

                if (!empty($mod)) {
                    Q("DELETE FROM `" . $this->db['catalog'] . "` WHERE `mod_pid`=?i", [ $id ]);
                }
            }

            Q("DELETE FROM `" . $this->db['storage'] . "` WHERE `pid`=?i AND `list`=?s", [ $id, 'properties' ]);
            Q("DELETE FROM `" . $this->db['catalog'] . "` WHERE `id`=?i LIMIT 1", [ $id ]);
        }
    }

    public function deleteCategory($id = 0, $recursive = false)
    {
        if ($id !== 0) {
            if ($recursive) {
                $this->_removeTree($id);
            } else {
                Q("DELETE FROM `" . $this->db['category'] . "` WHERE `id`=?i LIMIT 1", [ $id ]);
            }
        }
    }

    protected function _prepareArray($array = [], $id = 0)
    {
        $result = [];

        if (is_array($array)) {
            foreach ($array as $key => $arr) {
                if (is_array($arr)) {
                    foreach ($arr as $k => $v) {
                        $result[$k][$key] = $v;
                    }
                }
            }
        }

        return $result;
    }

    protected function _updateProperties($data = [], $id = 0)
    {
        if (!empty($data) && $id !== 0) {
            Q("DELETE FROM `" . $this->db['storage'] . "` WHERE `list`=?s AND `pid`=?i", [ 'properties', $id ]);

            if (!empty($data)) {
                $ord = 0;

                foreach ($data as $key => $arr) {
                    $ord += 10;
                    Q("INSERT INTO `" . $this->db['storage'] . "` SET `pid`=?i, `list`=?s, `name`=?s, `value`=?s, `ord`=?i", [ $id, 'properties', $arr['name'], $arr['value'], $ord ]);
                }
            }
        }
    }
    
    protected function _updatModifications($data = [], $id = 0)
    {
        if (!empty($data) && $id !== 0) {
            $product = Q("SELECT `id`, `name`, `system` FROM `" . $this->db['catalog'] . "` WHERE `id`=?i LIMIT 1", [ $id ])->row();
            
            $modifications = Q("SELECT `id`, `mod_name`, `article`, `price`, `balance`, `infinity`, `visible` FROM `" . $this->db['catalog'] . "` WHERE `mod_pid`=?i", [ $id ])->all('id');

            array_walk($modifications, function (&$item, $key) {
                unset($item['id']);
            });

            foreach ($data as $key => $item) {
                $system = $product['system'] . '-' . transliterate($item['mod_name']);

                if (isset($modifications[$key])) {
                    $difference = array_diff_assoc($item, $modifications[$key]);
                    
                    if (!empty($difference)) {
                        $update = '';
                        
                        foreach ($difference as $uk => $uv) {
                            $update .= "`". $uk . "`='" . $uv . "', ";
                        }

                        $update .= "`system`=?s";

                        Q("UPDATE `" . $this->db['catalog'] . "` SET " . $update . " WHERE `id`=?i LIMIT 1", [ $system, $key ]);
                    }
                } else {
                    $insert = '';
                    
                    foreach ($item as $ik => $iv) {
                        $insert .= "`". $ik . "`='" . $iv . "', ";
                    }

                    $insert .= "`system`=?s, `mod_pid`=?i";

                    Q("INSERT INTO `" . $this->db['catalog'] . "` SET " . $insert . "", [ $system, $id ]);
                }
            }
        }
    }

    protected function _getModification($pid = 0)
    {
        $result = [];

        if ($pid !== 0) {
            $result = Q("SELECT `id`, `name`, `mod_name`, `system`, `article`, `balance`, `price`, `discount`, `discount_type`, `photo`, `visible`, `infinity`, `ord` FROM `" . $this->db['catalog'] . "` WHERE `mod_pid`=?i ORDER BY `ord`", [ $pid ])->all();
        }

        return $result;
    }

    protected function _getStorage($pid = 0)
    {
        $result = [];

        if ($pid !== 0) {
            $list = Q("SELECT `id`, `list`, `name`, `value`, `ord` FROM `" . $this->db['storage'] . "` WHERE `pid`=?i ORDER BY `ord`", [ $pid ])->all();

            if (!empty($list)) {
                foreach ($list as $_item) {
                    $result[$_item['list']][$_item['id']] = [
                        'name'    =>    $_item['name'],
                        'value'    =>    $_item['value'],
                        'ord'    =>    $_item['ord']
                    ];
                }
            }
        }

        return $result;
    }

    protected function _removeTree($pid = 0)
    {
        $tree = Q("SELECT * FROM `" . $this->db['category'] . "` WHERE `pid`=?i", [ $pid ])->all();

        if (!empty($tree)) {
            foreach ($tree as $item) {
                $this->_removeTree($item['id']);
            }
        }
        
        Q("DELETE FROM `" . $this->db['category'] . "` WHERE `id`=?i LIMIT 1", [ $pid ]);
    }
}
