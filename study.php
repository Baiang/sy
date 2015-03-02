<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>学习炒股</title>
	<link rel="stylesheet" href="css/study.css" />
	<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>	
	<script src="js/base.js"></script>
</head>
<body>
<!-- 文档 -->
<div class="g-doc">
	<!-- 工具栏 -->
	<?php include 'library/_header-tool.php';?>

	<div class="g-bd z-juzhon">
		<!-- 导航 -->
		<div class="m-hd">
			<?php include 'library/_header.php';?>
		</div>
		<div class="m-content f-cb">
			<!-- 主栏 -->
			<div class="m-main w703 f-cb  f-fl">
				<div class="crumbs"><i class="home"></i> <a href="">首页</a> &gt; <span>虚拟炒股</span></div>
				<img class="mt15" src="images/12.jpg" height="460" width="704">
				<div class="introduction">
					<h3>简介</h3>
					<div class="inon-bt f-cb">
						<img class="f-fl" src="images/13.jpg" height="168" width="228">
						<div class="inon-fr f-fl">
							<p class='hr'>模拟炒股</p>
							<p class="content">简介：在虚拟的社区中模拟真实的股票交易。为你和你的好友之间架起一座相互学习
和交流股票投资经验的桥梁。支持沪深A股和创业板的实时交易。赶快和你的好友一
比高下吧，看看水次啊是真正的股神！</p>
							<ul class="inon-list f-cb">
								<li><img src="images/14.jpg" height="60" width="78"></li>
								<li><img src="images/14.jpg" height="60" width="78"></li>
								<li><img src="images/14.jpg" height="60" width="78"></li>
								<li><img src="images/14.jpg" height="60" width="78"></li>
							</ul>
						</div>
						<!--高速版，加载速度快，使用前需测试页面的兼容性-->
<div id="SOHUCS"></div>
<script>
  (function(){
    var appid = 'cyrE6hJEf',
    conf = 'prod_3f6af328b059b58bf40e4682bc2d6368';
    var doc = document,
    s = doc.createElement('script'),
    h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
    s.type = 'text/javascript';
    s.charset = 'utf-8';
    s.src =  'http://assets.changyan.sohu.com/upload/changyan.js?conf='+ conf +'&appid=' + appid;
    h.insertBefore(s,h.firstChild);
    window.SCS_NO_IFRAME = true;
  })()
</script>  
					</div>
				</div>
			</div>
			<!-- 侧栏 -->
			<?php include 'library/_list.php';?>
		</div>
		
	</div>
	<!-- 页脚 -->
	<?php include 'library/_footer.php';?> 
</div>
</body>
</html>