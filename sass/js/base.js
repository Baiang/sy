/* 
*作者：杨韦韦
*时间：2015-2-4
*需要结合jquery一起使用
----------------------------------------------------------*/
(function() {
	var YWW = {
		//返回当前时间
		t: function() {
			return $.d().getTime();
		},
		//返回当前时间对象
		d: function(t) {
			if (t) return new Date(t);
			return new Date()
		},
		//替换最后一个边框样式
		borderBottom: function(obj) {
			var $obj = $(obj);
			for (var i = 0; i < $obj.length; i++) {
				$obj.eq(i).find('> div:last()').css('border-bottom', '1px solid #e7e7e7');
			}
		},
		//收藏网站
		fav: function() {
			var u = 'http://www.onecapital.com'
			var n = '鹏生股票学习网';
			try {
				external.addFavorite(u, n);
			} catch (e) {
				try {
					sidebar.addPanel(n, u, '');
				} catch (e) {
					alert("请使用 Ctrl+D 收藏本站");
				}
			}
		},
		// 复制网址
		copyToClipBoard: function() {
			var clipBoardContent = "";
			clipBoardContent += window.location.href;
			if(window.clipboardData){
				window.clipboardData.setData("Text", clipBoardContent);
				alert("复制成功，请粘贴到你的QQ/MSN上推荐给你的好友");
			}else{
				alert("复制失败，您的浏览器不支持次操作");
			}
		}
	};

	// 文字切换
	YWW.inputTxt = function(obj, title, dc, rc, ffs, fn1, fn2) {
		var dfs;
		if (!dc) dc = '#333';
		if (!rc) rc = '#999';
		if (ffs) dfs = $(obj).css('fontSize');

		$(obj).bind({
			focus: function() {

				var str = $(this).val();
				str = str.replace(/\s+/g, '');
				if (str == title) {
					$(this).val('');
				}
				$(this).css('color', dc);
				if (ffs) $(this).css('fontSize', ffs);
				fn1 && fn1.call($(this));
			},
			blur: function() {
				var str = $(this).val();

				str = str.replace(/\s+/g, '');
				if (!str) {
					$(this).val(title);
					$(this).css('color', rc);
					if (dfs) $(this).css('fontSize', dfs);
				}

				fn2 && fn2.call($(this), title);
			}
		})
	};

	// 清除margin边距(在布局中慎用)
	YWW.removeMargin = function(obj, n) {
		var $obj = $(obj);
		for (var i = 0; i < $obj.length; i++) {
			if (i % n == n - 1) {
				$obj.eq(i).css('marginRight', '0');
			}
		}

	};

	// /Tab控制选项卡
	YWW.tabs = function(tabClass, event) {
		var $tabItem = $(tabClass);
		var $oA = $(tabClass).find('a:not(".not")');
		$tabItem.time = null;

		$oA.bind({
			mouseenter: function() {
				var _index = $(this).parent().index();
				var _this = $(this);
				if ($(this).parents('.tab-tr').find('li:eq(0)').is('.tr-first')) {
					_index = _index - 1;
				}
				var $list = $(this).parents('.tab-tr').next();
				$tabItem.time = setTimeout(function() {
					_this.addClass('z-current').parent().siblings().find('a').removeClass('z-current');
					$list.find("> *").eq(_index).addClass('z-crt').siblings().removeClass('z-crt');
				}, 300)
			},
			mouseleave: function() {
				clearTimeout($tabItem.time);
			}
		});

	};

	// 滚动
	YWW.slider = {
		speed: 2,
		timeId: null,
		init: function(obj) {
			this.obj = $(obj);
			var $oLi = this.obj.find('li');
			var _this = this;
			this.w = $oLi.outerWidth(true) * $oLi.length;
			this.obj.width(this.w * 2);
			this.obj.append(this.obj.html());

			this.timeId = setInterval(function() {
				_this.start()
			}, 30);
			this.stop();
		},
		start: function() {

			if (this.obj.css('left') == -this.w + 'px') {
				this.obj.css('left', 0);
			}
			this.obj.css('left', '-=' + this.speed + 'px');
		},
		stop: function() {
			var _this = this;
			this.obj.bind({
				mouseenter: function() {
					clearInterval(_this.timeId);
				},
				mouseleave: function() {
					_this.timeId = setInterval(function() {
						_this.start()
					}, 30);
				}
			})
		}
	};

	window.YWW = YWW;
})();