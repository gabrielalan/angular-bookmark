<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

// sleep to see how the view works with lag
sleep(1);

echo file_get_contents('./list.json');