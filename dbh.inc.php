<?php

$conn = mysqli_connect('localhost', 'root', '', 'comments');

if (!$conn) {
  die("Connection failed: ".mysqli_connect_error());
}

?>
