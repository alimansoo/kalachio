<?php
class Randome
{
    static function GenerateNumber($lengh=1){
        $str='1234567890';
        $strlenght = strlen($str);
        $out = '';
        for ($i=0; $i < $lengh; $i++) {
            $randnum = rand(0,$strlenght-1);
            $char = substr($str,$randnum,1);
            $out.= $char;
        }
        return $out;
    }
    static function GenerateParse($lengh=1){
        $str='1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $strlenght = strlen($str);
        $out = '';
        for ($i=0; $i < $lengh; $i++) {
            $randnum = rand(0,$strlenght-1);
            $char = substr($str,$randnum,1);
            $out.= $char;
        }
        return $out;
    }
}