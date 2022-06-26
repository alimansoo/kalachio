<?php 
class App
{
    static public function render()
    {
        if (function_exists('is_admin_panel') and is_admin_panel()) {
            Template::IncludePage("AdminPage");
        }
        elseif (function_exists('user_panel') and user_panel()) {
            Template::IncludePage("UserPanel");
        }else{
            Template::IncludePage("MainPage");
        }
    }
}
