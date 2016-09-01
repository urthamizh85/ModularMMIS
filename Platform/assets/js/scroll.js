/*//scroll*/
(function($) {

	var methods = {
		init : function(o, options) {
			var self = $(o);
			self.el = self;
			self.opt = $.extend({}, $.fn.pureScroll.setting, options);
			self.resized = false;
			var initiate = function() {
				if (methods.asign(self.el, options.trigger)) {
					methods.scrolling(self.el);
				} else {
					self.css("width", "auto");
					self.css("height", "auto");
					self.content.css("height", "auto");
					$(".scroll-gap",self).css({"width" : "auto" , "margin-right" : "0"});
					self.track.hide();
				}
			};
			initiate();
			if(self.opt.reInitiate){
				setTimeout(function(){
					$(".scroll-gap",self).css({"width" : "auto" , "margin-right" : "0"});
					initiate();
					clearTimeout(this);
				},500);
			}
			$(window).on("resize", function() {
				self.resized = true;
				initiate();
			});
		},
		asign : function(el, trigger) {
			var self = el ,space = 50;
			if ($(".track", self).size()) {
				$(".track", self).remove();
			}
			self.append(self.opt.tracks);
			self.content = $(".scroll-content", self);
			if (!trigger) {
				self.content.height(self.opt.contentHeight);
				self.height(self.opt.contentHeight);
			}
			self.track = $(".track", self);
			self.bar = $(".track .bar", self);
			self.barheight = 50;
			
			//css applying
			self.clicked = false;
			self.inity = "";
			self.content.h = self.content.height();
			self.track.height(self.content.h-2);
			self.sheight = self.content.prop("scrollHeight");
			self.endscroll = self.sheight-self.content.h;
			self.track.h = self.track.height()-(self.barheight);
			//assgning bar height
			self.bar.height(self.barheight);
			self.bar.h = self.bar.height();
			self.maxmove = self.track.h;
			$(".scroll-gap",self).width(self.width()-10);
			if (self.sheight > self.content.h + space) {
				self.content.width(self.width()+20);
				methods.customize(self);
				return true;
			} else {
				return false;
			}
		},
		scrolling : function(el) {
			var self = el;
			self.content.scrollTop(0);
			self.content.on("scroll", function() {
				if (self.track.is(":visible")) {
					if (!self.clicked) {
						var spos = self.content.scrollTop();
						//var delta = Math.abs(spos * (self.content.h / self.sheight));
						var movepos = Math.round(spos/(self.sheight-self.content.h)*100) , scrollmove = Math.round((self.track.h)*movepos/100);
						var delta  = scrollmove;
						self.bar.stop().animate({
							top : Math.round(delta) + "px"
						}, 10);
					}
				}
			});
			methods.drag(self);
		},
		drag : function(el) {
			var self = el;

			self.bar.on("mousedown", function(e) {
				self.clicked = true;
				self.inity = self.bar.position().top - e.pageY;
				self.cnt = 0;
				self.addClass("selection-none");
				// e.preventDefault();
				// e.stopPropagation();
			}).on("mouseup", function() {
				self.clicked = false;
			});

			$(document).on("mouseup", function(e) {
				self.clicked = false;
				self.removeClass("select-none");
				if (self.bar.position().top > self.maxmove) {
					self.bar.animate({
						top : self.maxmove + "px"
					}, "fast");
				}
				if (self.bar.position().top < 0) {
					self.bar.animate({
						top : "0px"
					}, "fast");
				}
			}).on("mousemove", function(e) {
				if (self.clicked) {
					self.on("selectstart", false);
					var spos = self.inity + e.pageY;
					self.bar.css({
						top : spos + "px"
					});
					self.content.scrollTop((self.bar.position().top) * (self.sheight / self.maxmove));
				} else {
					self.off("selectstart");
				}
			});
			self.bar.on('touchstart', function(e) {
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				self.inity = self.bar.position().top - touch.pageY;
			}).on('touchmove', function(e) {
				e.preventDefault();
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				self.on("selectstart", false);
				yPos = self.inity + touch.pageY;
				self.bar.css({
					top : yPos + "px"
				});
				self.content.scrollTop((self.bar.position().top ) * (self.sheight / self.maxmove ));
			}).on('touchend', function(e) {
				self.removeClass("select-none");
				if (self.bar.position().top > self.maxmove) {
					self.bar.animate({
						top : self.maxmove + "px"
					}, "fast");
				}
				if (self.bar.position().top < 0) {
					self.bar.animate({
						top : "0px"
					}, "fast");
				}
				self.on("selectstart", true);
			});

		},
		customize : function(el) {
			var self = el;
			self.content.css({
				//"overflow-y" : "scroll",
				"padding-right" : "20px"
			});
			if (self.opt.trackcss != undefined) {
				self.track.css(self.opt.trackcss);
			}
		}
	};

	$.fn.pureScroll = function(options) {

		return this.each(function() {
			var $this = $(this);
			methods.init($this, options);
			if (navigator.userAgent.match(/android|ipad/ig) == null) {

			} else {
				// $this.css({
				// "height" : $.fn.pureScroll.setting.contentHeight,
				// "overflow-y" : "scroll"
				// });
			}
		});

	};
	$.fn.pureScroll.setting = {
		tracks : '<div  onkeypress="return();" class="track"><div class="bar" aria-controls="scroll-content" aria-valuemin="1" aria-valuemax="300" aria-valuenow="1" role="scrollbar" aria-orientation="vertical"></div></div>', //for screen reader
		//tracks : '<div class="track"><div class="bar" role="button" aria-orientation="vertical"></div></div>', //for screen reader
		contentHeight : "200px",
		trigger : false
	};

})(jQuery);

/*//scroll*/

