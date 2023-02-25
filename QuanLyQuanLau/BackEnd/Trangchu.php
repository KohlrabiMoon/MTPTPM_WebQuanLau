<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/QuanLyQuanLau/FontEnd/CSS/TrangChu/TrangChu.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css">
    <link rel="stylesheet" href="/QuanLyQuanLau/FontEnd/CSS/TrangChu/SlideShow.css">
    <script src="/QuanLyQuanLau/FontEnd/JAVASCRIPT/TrangChu/TrangChu.js"></script>
</head>

<body>
    <div w3-include-html="/QuanLyQuanLau/FontEnd/HTML/TrangChu/Header.html"></div> 
        <script>
            includeHTML();
        </script>
    <div class="slideshow">
                <div class="dieuhuong">
                    <i class="fa fa-chevron-circle-left" onclick="Preview()"></i>
                    <i class="fa fa-chevron-circle-right" onclick="Next()"></i>
                </div>
                <div class="chuyen-slide">
                    <img src="https://lauwang.vn/wp-content/uploads/2023/02/silde-web-thang-1-scaled.jpg">
                    <img src="https://jianghu.com.vn/wp-content/uploads/2020/12/banner-footer1.jpg">
                    <img src="https://lauwang.vn/wp-content/uploads/2022/08/DSCF5299-Edit-1-scaled-700x500.jpg">
                </div>
                <script type="text/javascript" src="/QuanLyQuanLau/FontEnd/JAVASCRIPT/TrangChu/SlideShow.js"></script>
            </div>
    <?php  require_once "MySQLConnection.php";
    $sql = "SELECT Tenthucpham FROM thucpham";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
    echo "Tên thực phẩm " . $row["Tenthucpham"];
    }
    } else {
    echo "0 results";
    }
    ?>
    <div w3-include-html="/QuanLyQuanLau/FontEnd/HTML/TrangChu/Footer.html"></div> 
        <script>
            includeHTML();
        </script>
</body>

</html>