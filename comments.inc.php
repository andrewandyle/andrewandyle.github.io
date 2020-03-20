<head>
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<?php

function setComments($conn) {
  if (isset($_POST['commentSubmit'])) {
    $uid = $_POST['uid'];
    $date = $_POST['date'];
    $message = $_POST['message'];

    $sql = "INSERT INTO comments (uid, date, message) VALUES ('$uid', '$date', '$message')";
    $result = $conn->query($sql);
  }
}

function getComments($conn) {
  $sql = "SELECT * FROM comments";
  $result = $conn->query($sql);
  while ($row = $result->fetch_assoc()) {
    echo "<div class='comment-box'><p id='comment-info' style='text-align:left;'>";
      echo $row['uid']."<span style='float:right'>";
      echo $row['date']." CT</span></p><p>";
      echo nl2br($row['message']);
    echo "</p></div>";
  }
}

?>
