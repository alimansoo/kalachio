<?php
class Data
{
    static function get($index,$array){
        if (!is_string($index) or !is_array($array)) {
            return;
        }
        return trim(htmlspecialchars($array[$index]));
    }
}
