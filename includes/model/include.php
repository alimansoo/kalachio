<?php

$files = glob('includes/model/*.php');
$files = array_diff($files,array('includes/model/include.php','includes/model/Model.php'));
include 'includes/model/Model.php';
foreach ($files as $file) {
    include $file;
}
