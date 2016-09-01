$(document).ready(function() {
	var time = 0, providerStatus = true;
	var counter = 0, counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0, counter5 = 0, counter6 = 0, counter7 = 0;
	$("#categories").owlCarousel({
		items : 5,
		navigation : true,
		pagination : false,
		navigationText : ['<i aria-hidden="true" class="fa fa-chevron-circle-left"></i>', '<i aria-hidden="true" class="fa fa-chevron-circle-right"></i>'],
		autoWidth : false,
		scrollPerPage : true,
		slideSpeed : 1000
	});

	/************************ jQuery UI Drag used : Saravanan **************************/

	var tooltipJSON = {
		'module1' : {
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'title' : 'Compliance Tracking',
			'description' : "CNSI's Site Visit ProTM is a portable Site Visit Tracking application that can be taken directly to provider sites to perform unannounced site visits. The application is mobile enabled for tablets, eliminating the need for paper forms. Additionally, it supports organizations in performing site visits using real-time provider information directly from the Medicaid Provider Enrollment system, eliminating redundant data entry."
		},
		'module3' : {
			'title' : 'Consumer Engagement',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "CNSI's Site Visit ProTM is a portable Site Visit Tracking application that can be taken directly to provider sites to perform unannounced site visits. The application is mobile enabled for tablets, eliminating the need for paper forms. Additionally, it supports organizations in performing site visits using real-time provider information directly from the Medicaid Provider Enrollment system, eliminating redundant data entry."
		},
		'module2' : {
			'title' : 'Provider Management',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "CNSI's Site Visit ProTM is a portable Site Visit Tracking application that can be taken directly to provider sites to perform unannounced site visits. The application is mobile enabled for tablets, eliminating the need for paper forms. Additionally, it supports organizations in performing site visits using real-time provider information directly from the Medicaid Provider Enrollment system, eliminating redundant data entry."
		},
		'module4' : {
			'title' : 'Core Claims and Managed Care',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "CNSI's Site Visit ProTM is a portable Site Visit Tracking application that can be taken directly to provider sites to perform unannounced site visits. The application is mobile enabled for tablets, eliminating the need for paper forms. Additionally, it supports organizations in performing site visits using real-time provider information directly from the Medicaid Provider Enrollment system, eliminating redundant data entry."
		},
		'module5' : {
			'title' : 'EHR Incentive',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "CNSI's Site Visit ProTM is a portable Site Visit Tracking application that can be taken directly to provider sites to perform unannounced site visits. The application is mobile enabled for tablets, eliminating the need for paper forms. Additionally, it supports organizations in performing site visits using real-time provider information directly from the Medicaid Provider Enrollment system, eliminating redundant data entry."
		},
		'module6' : {
			'title' : 'Eligibility Portal',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "CNSI's Site Visit ProTM is a portable Site Visit Tracking application that can be taken directly to provider sites to perform unannounced site visits. The application is mobile enabled for tablets, eliminating the need for paper forms. Additionally, it supports organizations in performing site visits using real-time provider information directly from the Medicaid Provider Enrollment system, eliminating redundant data entry."
		},
		'module7' : {
			'title' : 'Medicaid Analytics',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "CNSI's Site Visit ProTM is a portable Site Visit Tracking application that can be taken directly to provider sites to perform unannounced site visits. The application is mobile enabled for tablets, eliminating the need for paper forms. Additionally, it supports organizations in performing site visits using real-time provider information directly from the Medicaid Provider Enrollment system, eliminating redundant data entry."
		},
		'module8' : {
			'title' : 'Adapters and Converters',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "CNSI's Site Visit ProTM is a portable Site Visit Tracking application that can be taken directly to provider sites to perform unannounced site visits. The application is mobile enabled for tablets, eliminating the need for paper forms. Additionally, it supports organizations in performing site visits using real-time provider information directly from the Medicaid Provider Enrollment system, eliminating redundant data entry."
		}
	};

	function createTooltip(mod) {
		var loc_module = 'module' + mod, loc_title = tooltipJSON[loc_module].title, loc_submodule = tooltipJSON[loc_module].submodule, loc_desc = tooltipJSON[loc_module].description;
		$('.tooltip-title-text', '.tooltip-desc').html(loc_title);
		$('.tooltip-desc-text', '.tooltip-main').html(loc_desc);
		$('.tooltip-desc-text', '.tooltip-submodule').text(loc_submodule);
	}


	$('[data-module]').on('click', function() {
		time = 1000;
		var self = $(this), loc_module = self.attr('data-module');
		autoLocateBase(Number(loc_module));

	});

	$('.tooltip-sub').on('click', function() {
		var self = $(this), loc_module = self.closest('[data-block-module]').attr('data-block-module');
		createTooltip(loc_module);
		$('.tooltip-main').fadeOut('slow');
		$('.tooltip-submodule').fadeIn('slow');
	});

	$('.tooltip-close').on('click', function() {
		var self = $(this), loc_parent = self.closest('.tooltip-desc');
		loc_parent.fadeOut('slow');
	});

	function autoLocateBase(currentCategory) {
		var time1 = 0
		var loc_module = $('[data-block-module="' + currentCategory + '"]'), loc_childBlock = $('.lego-drag', loc_module);
		console.log(loc_childBlock);
		console.log(loc_childBlock.length);
		setTimeout(function() {

			for (var i = 0; i < loc_childBlock.length; i++) {

				legoDrag(loc_childBlock[i]);
			}
		}, time1);
		time1 = time1 + 1000;

	}

	function legoDrag(blocks) {

		var winWidth, baseTopPos, baseWidth, baseHeight, whiteSpace;
		winWidth = $(window).width(), baseWidth = document.getElementById('basePlatform_img').width;
		baseTopPos = $('#basePlatform img').offset().top, baseHeight = $('#basePlatform img').height();
		whiteSpace = (winWidth - baseWidth) / 2;

		var _this_ele = blocks;

		setTimeout(function() {
			var loc_module = $(_this_ele).closest('.block-container').attr('data-block-module');
			var blockWidth = $(_this_ele).width(), blockHeight = $(_this_ele).height();
			var blockCount = $('.lego-drag', '[data-block-module="' + Number(loc_module) + '"]').length;
			var droppedCount = $('.dropped', '[data-block-module="' + Number(loc_module) + '"]').length;
			if (loc_module == "6") {
				if ($(_this_ele).hasClass("base-block")) {
					var leftPos = whiteSpace + baseWidth - blockWidth - $(_this_ele).offset().left, topPos = baseTopPos + 223 + 192 - $(_this_ele).offset().top - ($(_this_ele).height() * 0.625);
				} else {
					var leftPos = ((winWidth - baseWidth) / 2) + baseWidth - $('.base-block', '[data-block-module="' + Number(loc_module) + '"]').width() - $(_this_ele).offset().left, topPos = baseTopPos + 223 + 192 - $(_this_ele).offset().top - ($(_this_ele).height() * 1.175) - (42 * (counter - 1));
				}

				$(_this_ele).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter + 1
				}).addClass('dropped');
				counter++;
			}
			if (loc_module == "1") {
				if ($(_this_ele).hasClass("base-block")) {
					var leftPos = whiteSpace + (baseWidth / 2) + 29 - blockWidth - $(_this_ele).offset().left + 68, topPos = baseTopPos + baseHeight - 83 - blockHeight - $(_this_ele).offset().top - (blockHeight * 0.01);
				} else {
					var leftPos = whiteSpace + (baseWidth / 2) + 29 - blockWidth - $(_this_ele).offset().left + 68;
					topPos = baseTopPos + baseHeight - 83 - blockHeight - $(_this_ele).offset().top - (blockHeight * 0.01) - (45 * (counter1 ));
				}
				$(_this_ele).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter1 + 1
				}).addClass('dropped');
				counter1++;
			}
			if (loc_module == "3") {
				if ($(_this_ele).hasClass("base-block")) {
					var leftPos = whiteSpace + (baseWidth / 2) + 29 - blockWidth - $(_this_ele).offset().left + 115 + (260 / 1.6), topPos = baseTopPos + baseHeight - 99 - blockHeight - $(_this_ele).offset().top - (blockHeight * 0.01) - (128 / 2.8);
				} else {
					var leftPos = whiteSpace + (baseWidth / 2) + 29 - blockWidth - $(_this_ele).offset().left + 115 + (260 / 1.6) - 69, topPos = baseTopPos + baseHeight - 99 - blockHeight - $(_this_ele).offset().top - (blockHeight * 0.24) - (128 / 2.8) - (48 * (counter2 ));
				}
				$(_this_ele).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter2 + 1
				}).addClass('dropped');
				counter2++;
			}
			if (loc_module == "2") {
				if ($(_this_ele).hasClass("base-block")) {
					var leftPos = whiteSpace + (baseWidth / 2) - $(_this_ele).offset().left - 84, topPos = baseTopPos + 223 - $(_this_ele).offset().top - 30 - 132 - blockHeight;
				} else {
					if (counter4 === 2) {
						var leftPos = whiteSpace + (baseWidth / 2) - $(_this_ele).offset().left - 84, topPos = baseTopPos + 223 - $(_this_ele).offset().top - 225 - (38 * (counter4 - 1));
					} else if (counter4 === 1) {
						var leftPos = whiteSpace + (baseWidth / 2) - $(_this_ele).offset().left - 84 + 417 - blockWidth + 1, topPos = baseTopPos + 223 - $(_this_ele).offset().top - 233 - (38 * (counter4 - 1)) + 41;
					}
				}

				$(_this_ele).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter4 + 1
				}).addClass('dropped');
				counter4++;

				//	blockCount = $('.lego-drag', '[data-block-module="' + Number(loc_module) + '"]').length;
				//	droppedCount = $('.dropped', '[data-block-module="' + Number(loc_module) + '"]').length;
			}
			if (loc_module == "8") {
				if ($(_this_ele).hasClass("base-block")) {
					var leftPos = whiteSpace + 239 - $(_this_ele).offset().left, topPos = baseTopPos + 679 - 165 - $(_this_ele).offset().top - blockHeight;
				} else {
					var leftPos = whiteSpace + 239 - $(_this_ele).offset().left, topPos = baseTopPos + baseHeight - 83 - blockHeight - $(_this_ele).offset().top - (blockHeight * 0.24) - (128 / 2.8) - (48 * (counter2 ));
				}
				$(_this_ele).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter2 + 1
				}).addClass('dropped');
				counter2++;
			}
			if (loc_module == "5") {
				if ($(_this_ele).hasClass("base-block")) {
					var leftPos = whiteSpace - $(_this_ele).offset().left, topPos = baseTopPos + 234 + 176 - $(_this_ele).offset().top - (blockHeight * 0.7);
				} else {
					var leftPos = whiteSpace - $(_this_ele).offset().left, topPos = baseTopPos + 234 + 176 - $(_this_ele).offset().top - (blockHeight * 0.835) - (42 * (counter5));
				}
				$(_this_ele).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter5 + 1
				}).addClass('dropped');
				counter5++;
			}
			if (loc_module == "4") {
				if ($(_this_ele).hasClass("base-block")) {
					var leftPos = whiteSpace + 271 - $(_this_ele).offset().left, topPos = baseTopPos + 223 + 5 - $(_this_ele).offset().top;
				} else {
					var leftPos = whiteSpace + 271 - $(_this_ele).offset().left, topPos = baseTopPos + 234 - (blockHeight * 0.04) - $(_this_ele).offset().top - (43 * (counter6));
				}
				$(_this_ele).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter6 + 1
				}).addClass('dropped');
				counter6++;
			}
			if (loc_module == "7") {
				if ($(_this_ele).hasClass("base-block")) {
					var leftPos = whiteSpace + 196 - $(_this_ele).offset().left, topPos = baseTopPos + 223 + 117 - (blockHeight * 0.65) - $(_this_ele).offset().top;
				} else {
					leftPos = whiteSpace + 196 - $(_this_ele).offset().left;
					topPos = baseTopPos + 223 + 117 - (blockHeight * 0.63) - $(_this_ele).offset().top - (42 * (counter7));
				}
				$(_this_ele).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter7 + 1
				}).addClass('dropped');
				counter7++;

				var src = $(_this_ele).attr("src");
				if (src == "assets/img/SVG/Common Services/Reports.png") {
					setTimeout(function() {
						var i = 0, lt = Object.keys(tooltipJSON).length;
						function loopSleep() {
						i++;
						if( i < lt ){
						setTimeout( loopSleep, 500 );
						}
						$('[data-block-module="' + i + '"] .dropped').attr("style", "transition : all 1s ease 0s").removeClass("dropped");
						}
						loopSleep();
						//$(".dropped").attr("style", "transition : all 1s ease 0s");
						//$(".dropped").removeClass("dropped");
						//location.reload();
						setTimeout(function() {
							time = 0, providerStatus = true;
							counter = 0, counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0, counter5 = 0, counter6 = 0, counter7 = 0;
							$('.preloader').fadeOut('slow');
							$('[data-module="1"]').trigger("click");
							for (var j = 1; j < Object.keys(tooltipJSON).length; j++) {
								$('[data-module="' + (j + 1) + '"]').trigger("click");
							}
						}, 3000);
					}, 10000);
				}
			};

			if (blockCount === droppedCount) {
				$('[data-module="' + Number(loc_module) + '"]').removeClass('active').addClass('completed');
			}
		}, time);
		time = time + 1000;

	}

	setTimeout(function() {
		$('.preloader').fadeOut('slow');
		$('[data-module="1"]').trigger("click");
		for (var j = 1; j < Object.keys(tooltipJSON).length; j++) {
			$('[data-module="' + (j + 1) + '"]').trigger("click");
		}
	}, 3000);

});
