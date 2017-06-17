<?php

final class shoppingController extends cpLoader
{
    use Singleton, Tools;

    private $shopping = null;

    public function __construct()
    {
        parent::__construct();

        $this->shopping = new Shopping();
    }

    private function getSettings($key = '')
    {
        if (!$this->mcache_enable || !($settings = $this->getCache('_shop_settings_')))
        {
            $settings = [];

            $temp = $this->shopping->getSettings();

            if (!empty($temp))
            {
                foreach ($temp as $item)
                {
                    $settings[$item['class']][$item['value']] = $item;
                }
            }

            $this->setCache('_sitemap_', $settings);
        }

        if (isset($key) && isset($settings[$key]))
        {
            return $settings[$key];
        }

        return $settings;
    }

    public function updateStructure()
    {
        $oid = isset($_POST['oid']) ? intval($_POST['oid']) : '';
        $pid = isset($_POST['pid']) ? intval($_POST['pid']) : '';
        $nid = isset($_POST['nid']) ? intval($_POST['nid']) : '';

        $ord = $this->shopping->categoryOrder($pid, $nid);
        
        $this->shopping->categoryUpdate($pid, $ord, $oid);

        exit(
            json_encode(
                array(
                    'status' => true
                ), 64 | 256
            )
        );
    }

    public function getStructure()
    {
        $category = $this->shopping->structureCategory();

        exit(
            json_encode(
                $category, 64 | 256
            )
        );
    }

    private function getUser($id = 0)
    {
        return $this->shopping->getUser($id);
    }

    public function index()
    {
        if ($this->method == 'list')
        {
            redirect($this->base_path . '/orders');
        }
    }

    public function delete()
    {
        if (count($_POST))
        {
            $id = $_POST['id'];

            if ($id)
            {
                $this->shopping->deleteProduct($id, true);
            }
        }
    }

    public function update()
    {
        if (count($_POST))
        {
            $data = $_POST;

            $available = [
                'visible',
                'special',
                'novelty',
                'infinity'
            ];
            
            if (in_array($data['name'], $available)) {
                $this->shopping->update($data['name'], $data['value'], $data['id']);
            }
        }
    }

    public function orders()
    {
        $info = [];
        $settings = $this->getSettings();
        $backuri = isset($_GET['backuri']) ? base64_decode($_GET['backuri']) : '';
        $addurl  = isset($_GET['backuri']) ? '?backuri=' . $_GET['backuri'] : '';
        
        switch ($this->method)
        {
            case 'item':
            case 'print':

                $info['order'] = $this->shopping->getOrderItem($this->element);
                $info['order']['payment'] = $settings['payment'][$info['order']['payment']]['variable'];
                $info['order']['delivery'] = $settings['delivery'][$info['order']['delivery']]['variable'];

            break;

            case 'del':
                $this->shopping->deleteOrder($this->element);

                if ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/orders');
                }
                
            break;

            default:
                $orders = $this->shopping->getOrders(0, 300);

                if (!empty($orders))
                {
                    foreach ($orders as &$rec)
                    {
                        $rec['user']        = $this->getUser($rec['user']);

                        if (isset($settings['payment'][$rec['payment']]['variable']))
                        {
                            $rec['payment'] = $settings['payment'][$rec['payment']]['variable'];
                        }
                        
                        if (isset($settings['delivery'][$rec['delivery']]['variable']))
                        {
                            $rec['delivery'] = $settings['delivery'][$rec['delivery']]['variable'];
                        }

                        if (isset($settings['status_delivery'][$rec['status_delivery']]['variable']))
                        {
                            $rec['status_delivery'] = $settings['status_delivery'][$rec['status_delivery']]['variable'];
                        }
                        
                        if (isset($settings['status_payment'][$rec['status_payment']]['variable'])) {
                            $rec['status_payment'] = $settings['status_payment'][$rec['status_payment']]['variable'];
                        }
                    }
                }

                $info['orders']     = $orders;
                $info['settings']   = $settings;
            break;
        }

        return $info;
    }

    public function catalog()
    {
        $info = [];
        $backuri = isset($_GET['backuri']) ? base64_decode($_GET['backuri']) : '';
        $addurl  = isset($_GET['backuri']) ? '?backuri=' . $_GET['backuri'] : '';

        switch ($this->method)
        {
            case 'list':

                $query = '';
                $sort = [];
                $search = [];
                $marked = isset($_GET['mark']) ? intval($_GET['mark']) : 0;

                $limit = isset($_COOKIE['module_pages_catalog']) ? intval($_COOKIE['module_pages_catalog']) : 10;

                if (!empty($_GET)) {
                    $format = [
                        'id'        => 'i',
                        'name'      => 's',
                        'category'  => 'i',
                        'special'   => 'i',
                        'visible'   => 'i'
                    ];

                    $search = array_intersect_key($_GET, array_flip([
                        'id',
                        'name',
                        'category',
                        'special',
                        'visible'
                    ]));
                }

                if (isset($_GET['sort'])) {
                    $temp = explode('-', $_GET['sort']);
                    $sort = [
                        'name' => $temp[0],
                        'by' => $temp[1]
                    ];
                }

                if ($search) {
                    $query = $this->shopping->prepareQuery($search, $format);
                }

                $pager = $this->shopping->productsPager($query, $_GET, $limit);

                $category = $this->shopping->categoryTree();
                $products = $this->shopping->productList($pager['start_item'], $pager['limit'], $query, $sort);
                $products = $this->shopping->mapLinks($products);

                $id = isset($_GET['id']) ? $_GET['id'] : '';
                $name = isset($_GET['name']) ? $_GET['name'] : '';
                $selected = isset($_GET['category']) ? intval($_GET['category']) : '';
                $special = isset($_GET['special']) ? intval($_GET['special']) : '';
                $visible = isset($_GET['visible']) ? intval($_GET['visible']) : '';

                $info['sort'] = $sort;
                $info['limit'] = $limit;
                $info['marked'] = $marked;

                $info['search'] = [
                    'id'        => $id,
                    'name'      => $name,
                    'selected'  => $selected,
                    'special'   => $special,
                    'visible'   => $visible
                ];

                $info['products'] = $products;
                $info['category'] = $category[0]['tree'];
                // exit(__($info['category']));

                $info['pager_info'] = $pager;
            break;

            case 'clone':
                $clone_id = $this->shopping->productClone($this->element);
                redirect($this->base_path . '/catalog/edit/'.$clone_id.$addurl);
            break;

            case 'add':

                $products = [];
                $products['ord']   = $this->shopping->getProductsOrd();
                $info['products'] = $products;

                $info['fields'] = $this->shopping->catalogFields();

            break;

            case 'edit':

                $info['product'] = $this->shopping->productItem($this->element);
                $info['fields'] = $this->shopping->catalogFields($this->element);

            break;

            case 'del':
                $this->shopping->deleteProduct($this->element);
                
                if ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/catalog');
                }
                
            break;
        }

        if (in_array($this->method, array('add', 'edit')))
        {
            $info['catalog_tabs'] = [
                'description'           => 'Описание',
                'ingredients'           => 'Ингредиенты',
                'testimony'             => 'Применение',
                'contraindications'     => 'Противопоказания'
            ];

            $info['category_list'] = $this->shopping->categoryTree();
        }

        // exit(__debug($info));

        return $info;
    }

    public function category()
    {
        $info = [];
        $backuri = isset($_GET['backuri']) ? base64_decode($_GET['backuri']) : '';

        if (in_array($this->method, array('add', 'edit')))
        {
            $info['category_list'] = $this->shopping->categoryTree();
        }

        switch ($this->method)
        {
            case 'list':

                $info['category'] = $this->shopping->categoryTree();
                
            break;

            case 'add':

                $category = [];
                $category['photo'] = 'file_' . substr(str_replace('.', '_', uniqid()), 0, 5) . '_' . str_replace('.', '_', uniqid());
                $category['ord']   = $this->shopping->getCategoryOrd();

                $info['category'] = $category;

            break;

            case 'edit':

                $info['item'] = $this->shopping->categoryItem($this->element);

            break;

            case 'del':

                $this->shopping->deleteCategory($this->element, true);
                
                if (!empty($backuri))
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/category');
                }
                
            break;
        }
        
        return $info;
    }
    
    public function discounts()
    {
        $info = [];
        $backuri = isset($_GET['backuri']) ? base64_decode($_GET['backuri']) : '';

        if (in_array($this->method, array('add', 'edit')))
        {
            
        }

        switch ($this->method)
        {
            case 'list':

                $info['discounts'] = $this->shopping->getDiscountList(0, 10);
                
            break;

            case 'add':

            break;

            case 'edit':

                $info['item'] = $this->shopping->getDiscountItem($this->element, true);

            break;

            case 'del':

                $this->shopping->deleteDiscount($this->element, true);

                if (!empty($backuri))
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/discounts');
                }
                
            break;
        }

        return $info;
    }
    
    public function sale()
    {
        
    }

    public function fileUpload()
    {
        $group_id = $_POST['groupid'];
        $settings = [];

        if (isset($_POST['settings']))
        {
            $settings = json_decode($_POST['settings'], true);
        }
        
        if (!empty($_FILES['file']))
        {
            F($_FILES['file'])
                ->upload($group_id)
                ->resize($settings);
        }
    }

    public function cart()
    {
        $info = [];
        $info['fields_type'] = Q("SELECT * FROM `#__mdd_fields_type` WHERE `special`=?i", array( 1 ))->all();

        return $info;
    }

    public function tags()
    {
        $info = [];
        $info['tags'] = Q("SELECT * FROM `#__shop_tags`")->all();

        return $info;
    }

    public function manufacturer()
    {
        $info = [];
        $info['manufacturer'] = Q("SELECT * FROM `#__shop_manufacturer`")->all();

        return $info;
    }

    public function customers()
    {
        $info = [];
        $backuri = isset($_GET['backuri']) ? base64_decode($_GET['backuri']) : '';

        if (in_array($this->method, array('add', 'edit')))
        {
            
        }

        switch ($this->method)
        {
            case 'list':

                $info['users'] = $this->shopping->getUsers(0, 10);
                
            break;

            case 'add':

                $customers = [];
                $customers['photo'] = 'file_' . substr(str_replace('.', '_', uniqid()), 0, 5) . '_' . str_replace('.', '_', uniqid());
                
                $info['customers'] = $customers;

            break;

            case 'edit':

                $info['item'] = $this->shopping->getUser($this->element, true);

            break;

            case 'del':

                $this->shopping->deleteUser($this->element, true);

                if (!empty($backuri))
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/customers');
                }
                
            break;
        }
        
        // exit( __debug( $info, $this->method . ' - ' . $this->element ) );

        return $info;
    }

    public function settings()
    {
        $info = [];
        
        return $info;
    }

    public function post()
    {
        $action  = isset($_POST['form_action']) ? $_POST['form_action'] : '';
        $addurl  = isset($_GET['backuri']) ? '&backuri=' . $_GET['backuri'] : '';
        $backuri = isset($_GET['backuri']) ? base64_decode($_GET['backuri']) : '';

        $data = [];
    
        if (in_array($action, array('add_category', 'edit_category')))
        {
            # meta

            $data['s:meta_title']           = $_POST['meta_title'];
            $data['ls:meta_robots']         = $_POST['meta_robots'];
            $data['s:meta_keywords']        = $_POST['meta_keywords'];
            $data['s:meta_description']     = $_POST['meta_description'];

            # data

            $data['i:pid']                  = $_POST['pid'];
            $data['s:name']                 = $_POST['name'];
            $data['s:system']               = $_POST['system'];
            $data['s:description']          = $_POST['description'];

            # system

            $data['i:ord']                  = $_POST['ord'];
            $data['i:visible']              = $_POST['visible'];
        }

        if (in_array($action, array('add_discount', 'edit_discount')))
        {
            # data

            $data['s:name']                 = $_POST['name'];
            $data['s:code']                 = $_POST['code'];
            $data['i:limit']                = $_POST['limit'];
            $data['s:discount']             = $_POST['discount'];
            $data['i:discount_type']        = $_POST['discount_type'];
            $data['i:date_start']           = $this->timestamp($_POST['date_start']);
            $data['i:date_end']             = $this->timestamp($_POST['date_end']);
            $data['i:active']               = $_POST['active'];
        }

        if (in_array($action, array('add_customers', 'edit_customers')))
        {
            # data

            $data['s:name']                 = $_POST['name'];
            $data['s:photo']                = $_POST['photo'];
            $data['s:email']                = $_POST['email'];
            $data['s:password']             = md5($_POST['password']);
            $data['i:phone']                = $this->phone($_POST['phone']);
            $data['i:birthday']             = $this->timestamp($_POST['birthday']);
            $data['i:balance']              = $_POST['balance'];
            $data['i:bonus']                = $_POST['bonus'];
            $data['i:status']               = $_POST['status'];
            $data['i:active']               = $_POST['active'];
            
            $data['address']                = $_POST['address'];
        }

        if (in_array($action, array('add', 'edit')))
        {
            # meta

            $data['s:meta_title']           = $_POST['meta_title'];
            $data['ls:meta_robots']         = $_POST['meta_robots'];
            $data['s:meta_keywords']        = $_POST['meta_keywords'];
            $data['s:meta_description']     = $_POST['meta_description'];

            # data

            $data['i:price']                = !empty($_POST['price']) ? $_POST['price'] : 0;

            $data['i:discount']             = !empty($_POST['discount']) ? $_POST['discount'] : 0;
            $data['i:discount_type']        = $_POST['discount_type'];

            $data['s:name']                 = trim($_POST['name']);
            $data['s:system']               = $_POST['system'];
            $data['i:category']             = $_POST['category'];
            $data['s:article']              = $_POST['article'];
            $data['s:photo']                = $_POST['photo'];

            $data['i:special']              = isset($_POST['special']) ? $_POST['special'] : 0;
            $data['i:novelty']              = isset($_POST['novelty']) ? $_POST['novelty'] : 0;
            $data['i:infinity']             = isset($_POST['infinity']) ? $_POST['infinity'] : 0;

            $data['s:badge']                = trim($_POST['badge']);

            $data['s:description']          = trim($_POST['description']);
            $data['s:testimony']            = trim($_POST['testimony']);
            $data['s:ingredients']          = trim($_POST['ingredients']);
            $data['s:contraindications']    = trim($_POST['contraindications']);
            
            $data['properties']             = __post('properties');
            $data['modification']           = __post('modification');

            # system
            
            // $data['i:ord']                   = $_POST['ord'];
            $data['i:visible']              = $_POST['visible'];
        }

        switch ($action) {
            /**
             * Каталог
             */

            case 'add':
                
                $last_id = $this->shopping->addProduct($data);

                if (isset($_POST['apply']) && $last_id)
                {
                    redirect($this->base_path . '/catalog/edit/' . $last_id . '/?msg=apply'.$addurl);
                }
                elseif ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/catalog');
                }

            break;

            case 'edit':

                $this->shopping->editProduct($data, $this->element);

                if (isset($_POST['apply']))
                {
                    redirect($this->base_path . '/catalog/edit/' . $this->element . '/?msg=apply'.$addurl);
                }
                elseif ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/catalog');
                }

            break;

            /**
             * Покупатели
             */
            case 'add_customers':

                $last_id = $this->shopping->addBuyers($data);

                if (isset($_POST['apply']) && $last_id)
                {
                    redirect($this->base_path . '/customers/edit/' . $last_id . '/?msg=apply'.$addurl);
                }
                elseif ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/customers');
                }

            break;

            case 'edit_customers':

                $last_id = $this->shopping->editBuyers($data, $this->element);

                if (isset($_POST['apply']))
                {
                    redirect($this->base_path . '/customers/edit/' . $this->element . '/?msg=apply'.$addurl);
                }
                elseif ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/customers');
                }

            break;

            /**
             * Категории
             */ 
            case 'add_category':

                $last_id = $this->shopping->addCategory($data);

                if (isset($_POST['apply']) && $last_id)
                {
                    redirect($this->base_path . '/category/edit/' . $last_id . '/?msg=apply'.$addurl);
                }
                elseif ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/category');
                }

            break;

            case 'edit_category':

                $this->shopping->editCategory($data, $this->element);

                if (isset($_POST['apply']))
                {
                    redirect($this->base_path . '/category/edit/' . $this->element . '/?msg=apply'.$addurl);
                }
                elseif ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/category');
                }
            break;

            /**
             * Промокоды
             */
            case 'add_discount':

                $last_id = $this->shopping->addDiscount($data);

                if (isset($_POST['apply']) && $last_id)
                {
                    redirect($this->base_path . '/discounts/edit/' . $last_id . '/?msg=apply'.$addurl);
                }
                elseif ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/discounts');
                }

            break;

            case 'edit_discount':

                $last_id = $this->shopping->editDiscount($data, $this->element);

                if (isset($_POST['apply']))
                {
                    redirect($this->base_path . '/discounts/edit/' . $this->element . '/?msg=apply'.$addurl);
                }
                elseif ($backuri)
                {
                    redirect($backuri);
                }
                else
                {
                    redirect($this->base_path . '/discounts');
                }

            break;

        }

        // exit(__Debug($data, $this->action));
    }
}