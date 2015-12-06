<?php 

$output = null;
exec('wmic cpu get loadpercentage', $output);

echo ($output[1]);

?>