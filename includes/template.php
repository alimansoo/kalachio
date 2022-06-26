<?php
class Template
{
    static function Include($name,$data=null){
        $filename = TEMPLATE_PATH.$name.'.php';
        if (file_exists($filename)) {
            if ($data!==null and is_array($data)) {
                foreach ($data as $key => $value) {
                    $$key = $value;
                }
            }
            include $filename;
        }
    }
    static function IncludePage($name,$data=null){
        $filename = TEMPLATE_PATH.'page/'.$name.'.php';
        if (file_exists($filename)) {
            include $filename;
        }
    }
    static function IncludePath($name){
        $filename = TEMPLATE_PATH.$name.'.php';
        if (file_exists($filename)) {
            return $filename;
        }
    }
}