<?php

$files = glob('plugin/*_plugin.php');
foreach ($files as $file) {
    require $file;
}