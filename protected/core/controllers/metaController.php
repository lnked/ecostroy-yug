<?php

final class metaController extends cpLoader
{
    use Singleton;
    // private $dispatch   = null;
    private $user   = null;
    private $meta   = null;
    private $mdd    = null;

    public function __construct()
    {
        parent::__construct();

        $this->user = new Person();
        
        if (is_numeric($this->element)) {
            $this->meta = new Meta($this->element);
        }

        $this->mdd = new Mdd();
        // $this->dispatch = new Dispatch();
    }

    public function index()
    {
        if ($this->user->getAdminAccess() && !isset($this->path[2])) {
            redirect($this->base_path . '/module');
        }
    }

    public function lists()
    {
        if ($this->method == "add") {
            $info['mdd_list'] = $this->mdd->getLists();
        } elseif ($this->method == "edit") {
            $info['mdd_list'] = $this->mdd->getLists($this->element);
        } elseif ($this->method == "del") {
            $this->mdd->delLists($this->element);
            redirect($this->base_path. "/index/");
        } else {
            $info['mdd_list'] = $this->mdd->getLists();
        }

        return $info;
    }

    public function module()
    {
        $_backuri = '';

        if (isset($_GET['backuri'])) {
            $_backuri = base64_decode($_GET['backuri']);
        }

        $filter = false;

        if (isset($_COOKIE['module_sorted_'.$this->element])) {
            $filter = true;
        }

        if (isset($_COOKIE['module_limit_'.$this->element]) && $_COOKIE['module_limit_'.$this->element] != 10) {
            $filter = true;
        }

        if ($this->method !== 'del' && $this->element) {
            $info['module_id']      = $this->element;
            $info['types']          = getfl('type');
            $info['is_recursive']   = $this->mdd->is_recursive;
            $info['meta_enable']    = $this->meta->metaEnable($this->element, $this->argument);
            $info['meta_module']    = $this->meta->loadModule();
            
            $info['time']           = md5(uniqid() . rand(1110, 10000));
            $info['meta_fields']    = $this->meta->getFields($this->element, true);
            
            if ($this->mdd->is_recursive) {
                $info['meta_list_tree'] = $this->meta->treeModule($info['meta_fields']);
            }
        }

        if ($this->method == 'add') {
            $info['rec_field']          = $this->mdd->rec_field;
            $info['meta_item']          = $this->meta->itemModule($this->argument, $info['meta_fields']);
            $info['meta_next_ord']      = $this->meta->getNextOrd($info['meta_module']['name'], $this->meta->is_recursive);
        } elseif ($this->method == 'clearfilter') {

            if (isset($_COOKIE['module_sorted_'.$this->element])) {
                setcookie('module_sorted_'.$this->element, null, -1, '/');
            }

            if (isset($_COOKIE['module_limit_'.$this->element])) {
                setcookie('module_limit_'.$this->element, 10, time() + 60 * 60 * 24 * 30, '/');
            }

            if ($_backuri) {
                redirect($_backuri);
            }
        } elseif ($this->method == 'edit') {
            $info['meta_item'] = $this->meta->itemExtend($this->meta->itemModule($this->argument, $info['meta_fields']));
        } elseif ($this->method == 'del') {
            $this->meta->deleteData($this->argument);

            if ($_backuri) {
                redirect($_backuri);
            } else {
                redirect($this->base_path . '/module/list/' . $this->element);
            }
        } elseif ($this->method == "visible") {
            if ($this->element && $this->argument) {
                $sys_name = Q("SELECT `sys_name` FROM `#__mdd_modules` WHERE `id`=?i LIMIT 1", array( $this->element ))->row('sys_name');
                
                Q("UPDATE `#_mdd_".$sys_name."` SET `visible`=IF(`visible`!=1, 1, 0) WHERE `id`=?i LIMIT 1", array( $this->argument ));

                return array(
                    'status' => true
                );
            }
        } elseif ($this->element) {
            // $info['check_dispatch'] = $this->dispatch->checkModule($this->element);
            $module_list            = $this->meta->listModule($info['meta_fields']);

            $info['meta_list']      = $module_list['result'];
            $info['pager_info']     = $module_list['pager'];
            $info['meta_sort']      = $this->meta->sortModule($this->element, $info['meta_fields']);
            $info['meta_filter']    = $this->meta->filterModule($this->element, $info['meta_fields']);
            $info['meta_cookie']    = [];
            $info['filter'] = $filter;

            if (!isset($_COOKIE['module_limit_'.$this->element])) {
                setcookie('module_limit_'.$this->element, 10, time() + 60 * 60 * 24 * 30, '/');
            }

            if (!empty($_COOKIE['module_sorted_'.$this->element])) {
                $meta_cookie = unserialize(from_base($_COOKIE['module_sorted_'.$this->element]));

                if (isset($meta_cookie[$this->element])) {
                    $info['meta_cookie'] = $meta_cookie[$this->element];
                }
            }
        } else {
            $result = $this->mdd->getGroupModules($this->mdd->getModules(0, true), $this->mdd->getGroup());
            
            $info['groups']  = $result['groups'];
            $info['modules'] = $result['modules'];
        }

        return $info;
    }

    public function getInitialFiles()
    {
        $initialFiles = [];
        for ($i = 0; $i < 5000; $i++) {
            array_push($initialFiles, array("name" => "name" + $i, uuid => "uuid" + $i, thumbnailUrl => "/test/dev/handlers/vendor/fineuploader/php-traditional-server/fu.png"));
        }
        return $initialFiles;
    }

    public function fileUpload()
    {
        $group_id = $_POST['groupid'];
        $settings = [];

        if (isset($_POST['settings'])) {
            $settings = json_decode($_POST['settings'], true);
        }

        if (!empty($_FILES['file'])) {
            $file = F($_FILES['file'])
                ->upload($group_id)
                ->resize($settings)
                ->getFileId();

            exit(json_encode([
                'id' => $file,
                'uuid' => $_POST['qquuid'],
                'success' => true
            ], 64 | 256));
        }
    }

    public function filedelete()
    {
        $status = false;

        $url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $tokens = explode('/', $url);
        $uuid = $tokens[sizeof($tokens)-1];

        if ($uuid) {
            $f = new Files;
            $status = $f->deleteFile($uuid, true);
        }

        return [
            'status' => $status
        ];
    }
    
    public function filename()
    {
        $id     = __post('id');
        $name   = __post('name');

        $status = false;

        if ($id && $name) {
            Q("UPDATE `#__sys_files` SET `alt`=?s, `title`=?s WHERE `id`=?i OR `fid`=?i", array( $name, $name, $id, $id ));

            $status = true;
        }

        return [
            'status' => $status
        ];
    }

    public function filevisible()
    {
        $id         = __post('id');
        $visible    = __post('visible');

        $status = false;

        if ($id) {
            Q("UPDATE `#__sys_files` SET `visible`=?i WHERE `id`=?i OR `fid`=?i", array( $visible, $id, $id ));

            $status = true;
        }

        return [
            'status' => $status
        ];
    }
    
    public function post()
    {
        $action = __post('form_action');
        $addurl  = isset($_GET['backuri']) ? '&backuri=' . $_GET['backuri'] : '';
        $backuri = isset($_GET['backuri']) ? base64_decode($_GET['backuri']) : '';

        $redirect_url = '?'.substr($addurl, 1);

        if ($action == "add") {
            $last_id = $this->meta->insertData($this->element);

            if (isset($_POST['apply'])) {
                redirect($this->base_path . '/module/edit/' . $this->element . '/' . $last_id . '/?msg=apply' . $addurl);
            } elseif ($backuri) {
                redirect($backuri);
            } else {
                redirect($this->base_path . '/module/list/' . $this->element . $redirect_url);
            }
        } elseif ($action == "edit") {
            $this->meta->updateData($this->element, $this->argument);

            if (isset($_POST['apply'])) {
                redirect($this->base_path . '/module/edit/' . $this->element . '/' . $this->argument . '/?msg=apply' . $addurl);
            } elseif ($backuri) {
                redirect($backuri);
            } else {
                redirect($this->base_path . '/module/list/' . $this->element . $redirect_url);
            }
        } elseif ($action == "add_list") {
            $name       = __post("name");
            $list_name  = __post("list_name");
        
            if (!$name) {
                return false;
            }
            if (!$list_name) {
                return false;
            }

            $this->mdd->addList();
            
            if (isset($_POST['apply'])) {
                redirect($this->base_path. '/lists/edit/' . $list_name . '/?msg=apply' . $addurl);
            } elseif ($backuri) {
                redirect($backuri);
            } else {
                redirect($this->base_path. '/lists/');
            }
        } elseif ($action == 'edit_list') {
            $name       = __post("name");
            $list_name  = __post("list_name");
            $old_list_name  = __get("list_name");
            
            if (!$name) {
                return false;
            }
            if (!$list_name) {
                return false;
            }

            $this->mdd->editList();
            
            if (isset($_POST['apply'])) {
                redirect($this->base_path. '/lists/edit/' . $list_name . '/?msg=apply' . $addurl);
            } elseif ($backuri) {
                redirect($backuri);
            } else {
                redirect($this->base_path. '/lists/');
            }
        }
    }
}
