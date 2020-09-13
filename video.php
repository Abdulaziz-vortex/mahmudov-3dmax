<?php
$name = $_GET['vide_name'];
$category = $_GET['category'];

if(count(glob("video_kurs/".$category."/*.png")[0])>0){
	$poster = glob("video_kurs/".$category."/*.png")[0];
}else{
	$poster = glob("video_kurs/".$category."/*.jpg")[0];
}


?>
<!DOCTYPE html>
<html>
<head>
	<title>portfolio</title>
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<link rel="stylesheet" type="text/css" href="./css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="./css/pages.css">
    <link rel="stylesheet" type="text/css" href="./components/galery/css/style.css">
	<link rel="stylesheet" type="text/css" href="./components/preloader/css/style.css">
	<meta name="viewport" content="width=device-width">
</head>
<body>
	 <header class="top_mobile_header">
	 	<div class="header_mobile_wrapper row">
	 		<div class="mobile_logo col-6"><img src="./img/logos/1.png"></div>
	 		<div class="burger_icon col-6">
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve" class="burger_svg">
<g>
	<g id="Menu_1_">
		<path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
		<path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"/>
		<path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
			c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

	 		</div>
	 	</div>
	 </header>
	 <div class="MAIN_HEAD">
	 <header class="top_header_fixed" id="fixed_head">
	 	<div class="header_wrapper fixed row">
	 		<div class="logo col-1"><img src="./img/logos/1.png"></div>
	 		<div class="menu col-7">
	 			<nav>
	 				<ul>
	 					<li><a href="index.php">Asosiy sahifa</a></li>
	 					<li class="top_menu_li_active"><a href="#">Portfolio</a></li>
	 					<li><a href="lessons.php">Darsliklar</a></li>
	 					<li><a href="progrmms.php">Programmalar</a></li>
	 					<li><a href="about.php">Biz haqimizda</a></li>
	 					<li><a href="#">Contactlar</a></li>
	 				</ul>
	 			</nav>
	 		</div>
	 	    <div class="phone_space col-4">
	 	    		<div class="inner_phone">
			 			<img src="./img/icons/phone.png">
			 			<p><span>+99893</span>417-08-86</p>
			 			<span class="slash">/</span>
			 			<p><span>+99893</span>417-08-86</p>
			 		</div>
	 	</div>
	 	</div>
	 </header>
	 <header class="top_header">
	 	<div class="header_wrapper row">
	 		<div class="logo col-1"><img src="./img/logos/2.png"></div>
	 		<div class="menu col-7">
	 			<nav>
	 				<ul>
	 					<li><a href="index.php">Asosiy sahifa</a></li>
	 					<li class="top_menu_li_active"><a href="#">Portfolio</a></li>
	 					<li><a href="lessons.php">Darsliklar</a></li>
	 					<li><a href="programms">Programmalar</a></li>
	 					<li><a href="about.php">Biz haqimizda</a></li>
	 					<li><a href="#">Contactlar</a></li>
	 				</ul>
	 			</nav>
	 		</div>
	 	    <div class="phone_space col-4">
	 	    		<div class="inner_phone">
			 			<img src="./img/icons/phone2.png">
			 			<p><span>+99893</span>417-08-86</p>
			 			<span class="slash">/</span>
			 			<p><span>+99893</span>417-08-86</p>
			 		</div>
	 	</div>
	 	</div>
	 </header>
</div>
	 <section class="page_head">
	 	<div class="section_wrapper row">
		 	<div class="page_head_text col-lg-12"><h1>vide kurs</h1></div>
		 	<div class="page_head_his col-lg-12"><span>Asosiy sahifa</span> / <span>Portfolio</span></div>
	 	</div>
	 </section>

<section class="lessons" style="padding: 50px 0px;">
	<div class="section_wrapper row">
		<div class="section_wrapper video_player row">
			<div class="port_col col-lg-8" style="margin-bottom: 0px;">
				<div class="port_item">
					<div class="port_img">
						<video controls width="100%" poster="<?php echo $poster; ?>" style="min-height: 400px;">	
							<source src="<?php echo $name; ?>" type="">
						</video>
					</div>
					<div class="port_text">
						<div class="port_details">
							<span><img src="./img/icons/date.png">Dec 12 2019</span>
							<span><img src="./img/icons/category.png">3d max</span>
						</div>
						<h3><?php echo $name; ?></h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor</p>
					</div>
				</div>
			</div>
			<div class="other_videos col-lg-4">
				<nav>
					<ul>
						<li class="other_videos_list_heading"><h3><img src="./img/icons/watch2.png">videolar</h3></li>
						<hr class="mt-0">
						<?php  
						$dir = glob("video_kurs/".$category."/*.mp4"); 
							  foreach($dir as $filename){
							  	echo "
						<li><a href=\"#\">
							<div class=\"other_videos_img\">
							<img src=\"".$poster."\"></div>
							<div class=\"other_videos_text\">
								<h4>".$filename."</h4>
							</div>
						</a></li>";
						  }
						?>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</section>

<footer class="footer">
	<div class="section_wrapper row">
		<div class="logo col-lg-2 col-ms-12 col-xs-12"><img src="./img/logos/1.png"></div>
		<div class="footer_menu col-lg-2 col-ms-12 col-xs-12 mr-4">
			<h4>Menu</h4>
			<ul>
				<li><a href="#"><img src="./img/icons/home3.png">Asosiy sahifa</a></li>
				<li><a href="#"><img src="./img/icons/home3.png">Portfolio</a></li>
				<li><a href="#"><img src="./img/icons/home3.png">Darsliklar</a></li>
				<li><a href="#"><img src="./img/icons/download_white.png">Programmalar</a></li>
				<li><a href="#"><img src="./img/icons/1.png">Biz haqimizda</a></li>
				<li><a href="#"><img src="./img/icons/phone.png">Kontactlar</a></li>
			</ul>
		</div>
		<div class="footer_menu col-lg-4 col-ms-12 col-xs-12 mr-4">
			<h4>Biz haqimizda</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation</p>

			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation</p>
		</div>
		<div class="footer_menu col-lg-3 col-ms-12 col-xs-12">
			<h4>Contactlar</h4>
			<ul>
				<li><a href="#"><img src="./img/icons/phone.png">+998 93 417-08-86</a></li>
				<li><a href="#"><img src="./img/icons/phone.png">+998 93 417-08-86</a></li>
				<li><a href="#"><img src="./img/icons/phone.png">+998 93 417-08-86</a></li>
			</ul>
		</div>
	</div>
	<div class="footer_copy section_wrapper row">
		<div class="col-12">
			<p>(C) Copyright <?php  echo date('Y');?> MAHMUDOV computer user</p>
		</div>
	</div>
</footer>

</div>
<?php include './components/galery/galery.php';?>
	 <header class="top_mobile_header">
	 	<div class="header_mobile_wrapper row">
	 		<div class="mobile_logo col-6"><img src="./img/logos/1.png"></div>
	 		<div class="burger_icon col-6" id="burger">
			<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve" class="burger_svg">
			<g>
				<g id="Menu_1_">
					<path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
						c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
					<path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
						S379.58,180.455,372.939,180.455z"/>
					<path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
						c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				</svg>
	 		</div>
	 	</div>
	 </header>
<section class="side_menu" id="side">
	<div class="side_menu_wrapper mt-4">
		<div class="side_logo"><img src="./img/logos/1.png"></div>
		<nav>
			<ul>
				<li><a href="index.php"><img src="./img/icons/home3.png">Asosiy sahifa</a></li>
				<li><a href="portfolio.php"><img src="./img/icons/port2.png">Portfolio</a></li>
				<li><a href="lessons.php"><img src="./img/icons/play2.png">Darsliklar</a></li>
				<li><a href="programms.php"><img src="./img/icons/download_white.png">Programmalar</a></li>
				<li><a href="about.php"><img src="./img/icons/user.png">Biz haqimizda</a></li>
				<li><a href="#"><img src="./img/icons/phone.png">Kontaktlar</a></li>
			</ul>
		</nav>
	</div>
</section>
<?php include './components/preloader/preloader.php' ?>
<script type="text/javascript" src="./slider/js/slider.js" defer></script>
<script type="text/javascript" src="./SVE7/SVE7.js" defer></script>
<script type="text/javascript" src="./js/script.js" defer></script>
<script type="text/javascript" src="./js/page.js" defer></script>
<script type="text/javascript" src="./components/galery/js/script.js" defer></script>
<script type="text/javascript" src="./js/jquery.js" defer></script>
<script type="text/javascript" src="./js/bootstrap.js" defer></script>
<script type="text/javascript" src="./js/bootstrap.min.js" defer></script>
<script type="text/javascript" src="./js/scripter.js" defer></script>
</body>
</html>