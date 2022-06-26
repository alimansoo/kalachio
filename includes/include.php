<?php

$files = glob('includes/*.php');
$files = array_diff($files,array('includes/include.php'));
foreach ($files as $file) {
    include $file;
}
include "model/include.php";