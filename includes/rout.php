<?php
class Rout
{
    static function redirect_to($path){
        if (is_null($path)) {
            return;
        }
        header("Location:$path");
    }
    static function redirect_to_url($path)
    {
        Rout::redirect_to(
            Rout::full_url($path)
        );
    }
    static function url($path = null)
    {
        if (!isset(PAGE_URLS[$path])) {
            return;
        }
        if (is_null($path)) {
            return PAGE_URLS['home']['url'];
        }
        return PAGE_URLS[$path]['url'];
    }
    static function full_url($path = null)
    {
        if (!isset(PAGE_URLS[$path])) {
            return;
        }
        if (is_null($path)) {
            return SITE_URL.PAGE_URLS['home']['url'];
        }
        return SITE_URL.PAGE_URLS[$path]['url'];
    }
}
