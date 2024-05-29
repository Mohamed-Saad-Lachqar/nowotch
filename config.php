<?php
$host = $_SERVER['HTTP_HOST'];

if ($host == 'localhost') {
    define('BASE_URL', 'http://localhost/nowotch.ma');
} else {
    define('BASE_URL', 'http://nowotch.ma.local');
}
define('img_path',BASE_URL."/common/img/");
define('maintenance_path',BASE_URL."/maintenance");
define('path_4G',BASE_URL."/4G");
define('boxtv_path',BASE_URL."/boxtv");
define('network_path',BASE_URL."/network");
define('home_path',BASE_URL."/");

?>