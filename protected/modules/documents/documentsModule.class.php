<?php

class documentsModule extends Module
{
    public function index()
    {
        $cache = 'module.documents.list';

        # Получение списка
        #
        if (!$this->mcache_enable || ($this->caching == 1 && !($documents = $this->getCache())))
        {
            $documents = Q("SELECT `id`, `name`, `docs` FROM `#_mdd_documents` WHERE `visible`=1 ORDER BY `ord` DESC")->all();

            if (!empty($documents))
            {
                $files = new Files();

                foreach ($documents as &$documents_item)
                {
                    $documents_item['docs'] = $files->getFilesByGroup($documents_item['docs'], [ 'preview', 'original' ], [ 'id', 'file', 'title', 'ord' ], true);
                }
            }

            $this->setCache($cache, $documents);
        }

        return [
            'documents' =>  $documents,
            'template'  =>  'documents'
        ];
    }
}