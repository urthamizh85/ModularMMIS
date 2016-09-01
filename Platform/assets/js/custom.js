/*
 var myScroll;

 myScroll = new IScroll('#iscroll_wrapper', {
 scrollX : false,
 scrollbars : 'custom'
 });

 $('#iscroll_wrapper').on('touchmove', function(e) {
 e.preventDefault();
 });*/

$(document).ready(function() {

	jsKeyboard.init("virtualKeyboard");

	//first input focus
	var $firstInput = $(':input').first().focus();
	jsKeyboard.currentElement = $firstInput;
	jsKeyboard.currentElementCursorPosition = 0;

	var time = 0, providerStatus = true;
	var counter = 0, counter1 = 0, counter2 = 0, counter3 = 0, counter4 = 0, counter5 = 0, counter6 = 0, counter7 = 0;
	var catergoryOwl = $("#categories");
	catergoryOwl.owlCarousel({
		items : 5,
		navigation : true,
		pagination : false,
		navigationText : ['<i aria-hidden="true" class="fa fa-chevron-circle-left"></i>', '<i aria-hidden="true" class="fa fa-chevron-circle-right"></i>'],
		autoWidth : false,
		scrollPerPage : true,
		slideSpeed : 1000,
		slideBy : 3,
		loop : true
	});

	/************************ jQuery UI Drag used : Saravanan **************************/

	var tooltipJSON = {
		'module1' : {
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'title' : 'Managed Care Compliance Tracking',
			'description' : "Given the size and complexity of Managed Care contracts, States would benefit immensely from an Automated tool that tracks the performance of Health Plans against Contract requirements. CNSI's MC-Track accomplishes this function by combining multiple components.",
			'Contract Setup':"The Contract Setup component of MC-Track enables intuitive and efficient upload and maintenance of Managed Care Medicaid contract documents and the performance requirements enshrined in them – related to Quality of Service, Health Outcome and Timely reporting of Data and several other such categories.",
			'Reporting':"The Reporting component of MC-Track provides multi-level executive views of Health Plans’ compliance to contract requirements - to enable sound decision-making.",
			'Compliance Processing':"The Compliance Processing component of MC-Track is a powerful Processing Engine that processes real-word performance data in multiple formats, and compares them against the requirements specified in the contract to identify the extent of compliance/non-compliance to contract requirements."
		},
		'module3' : {
			'title' : 'Consumer Engagement',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "Today's healthcare technology must be equipped with consumer engagement channels so that consumers feel more empowered with regard to their healthcare information and Decisions. CNSI's  Consumer Engagement product suite accomplishes this via our Web Portal & Mobile App.",
			'Member Web Portal':"CNSI's myHealthPortal allows Medicaid Members to access a wide gamut of information related to their Healthcare and Coverage, through a Web Portal. The solution allows contains value-adding features such as 'Find  a Doctor' and 'Health Tracker'.",
			'Member Mobile App':"CNSI's myHealthButton® is the native mobile application counterpart of myHealthPortal that allows health care beneficiaries to securely access their health information."
		},
		'module2' : {
			'title' : 'Provider Management Information System',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "A Provider Management Information system helps address the State’s needs across the lifecycle of a Provider – from Enrollment to Performance tracking. CNSI’s PMIS covers each of these aspects through proprietary solutions. ",
			'Provider Enrollment':"CNSI’S Provider Enrollment solution includes an easy-to-use self-service portal for enrollment and data maintenance and combines this with a comprehensive administrative framework to manage enrollment, disenrollment, and provider information maintenance.",
			'Provider Credentialing':'The Affordable Care Act (ACA) mandates screening procedures for providers looking to take part in Medicare and State Medicaid programs. CNSI’s PMIS is integrated with the PCS™ solution to meet the ACA screening mandate. PCS™ comprises pre and post-enrollment screening processes integrated with a real-time credentialing service.',
			'Site Visit Tracking':"Impromptu visits by State workers to Provider sites is a common practice to ensure that the right sevices are being performed with the requisite standards. CNSI's Site Visit Pro™ is a mobile application that facilitates this process. It uses real-time data directly from the Medicaid Provider Enrollment system, reducing surplus data entry."
		},
		'module4' : {
			'title' : 'Core Claims and Managed Care',
			'submodule' : "Identification of improper billing patterns in claims prior to payment, provides the opportunity to prevent excess payments. CNSI's ClaimsSure is a real-time, prepayment improper billing detection system that prevents providers from making excess payments and highlights potentially fraudulent cases, with a predictive probability analysis.",
			'description' : "Core Claims and Managed Care form the heart of any MMIS. CNSI's Core Claims and Manages Care module  is a fully services-oriented module designed specifically to meet the volume and performance requirements of large-scale claims processing applications. ",
			'Improper Billing':"Identification of improper billing patterns in claims prior to payment, provides the opportunity to prevent excess payments. CNSI's ClaimsSure is a real-time, prepayment improper billing detection system that prevents providers from receiving excess payments and highlights potentially fraudulent cases, with a predictive probability analysis.",
			'Utilization Management':"Utilization Management helps identify fraudulent practices among Providers and Members, thereby enabling corrective action against them. CNSI's Audit Studio™ accomplishes this by employing Predictive Analytics on paid claims to help identify and recoup excess payments.",
			'Claims/Encounters - Core Processing':"This Module Set comprises of all the modules that are necessary to make Claims/Encounters processing possible. Removing even one of these modules would hamper the Claims/Encounters processing function."
		},
		'module5' : {
			'title' : 'EHR Incentive Payment Program',
			'submodule' : "Making Value-based reimbursement profitable is an enormous task, and CNSI's eMIPP helps in this regard. It is a modular solution to manage the Electronic Health Records Medicaid Incentive Payment Program. It offers a comprehensive and configurable solution to measure and demonstrate the EHR superior outcomes as outlined by CMS.",
			'description' : "Making Value-based reimbursement profitable is an enormous task, and CNSI's eMIPP helps in this regard. It is a modular solution to manage the Electronic Health Records Medicaid Incentive Payment Program. It offers a comprehensive and configurable solution to measure and demonstrate the EHR superior outcomes as outlined by CMS.",
		},
		'module6' : {
			'title' : 'Medicaid Eligibility',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "As laid out in MITA 3.0, Medicaid Eligiblity systems should now be viewed as an integral part of the MMIS ecosystem. CNSI's eMEDS  provides the end-to-end functionality needed to facilitate the Medicaid Eligibility process.",
			'App Intake':"The App Intake component of eMEDS is a UX 2014 compliant Web portal solution that allows the entry of application data for various Medicaid-affiliated programs, viewing of the Eligibility Determination results and the selection of plans.",
			'Service Portal':"This portal is an integral part of eMEDS and allows Case Workers to track and resolve Service Requests related to ongoing Eligibility Determinations.",
			'Eligibility Determination':"eMEDS contains a core Eligibility Determination engine that supports all the Business Validations required to process the Application data and accurately determine whether or not the applicant is eligible for the program(s) applied."
		},
		'module7' : {
			'title' : 'Medicaid Analytics',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "The Medicaid Enterprise has a mind boggling volume of data that can be mined to generate deep insights. CNSI’s Medicaid Analytics Module is a robust framework to extract, analyze and report data from diverse business processes.",
			'Operational Data Store':"CNSI's Operational Data Store is a centralized data repository that provides self-service business intelligence capabilities.",
			'System Monitoring':"CNSI's HealthBeat™ is a centralized enterprise service view of MMIS systems that enables near real-time access to workload and system performance information and provides transparency to IT operations management and the enterprise-wide business."
		},
		'module8' : {
			'title' : 'Adapters & Connectors',
			'submodule' : 'The Provider Management Information system is an integral part of the MMIS - with the Provider Enrolment functionality generally being the first to go-live as part of any MMIS implementation.',
			'description' : "Several Adapters & Connectors - not related to core MMIS functionality - add immense value to the Medicaid Enterprise by providing commonly required capabilities that facilitate business operations.",
			'Document Management':"An Integrated solution that provides documentation management functionality, including uploading claims attachments.",
			'Correspondence':"An Integrated solution that supports creating, managing and sending provider and customer correspondence.",
			'Call Center':"The Call Center is an integrated and flexible application that manages calls and claims-related issues. The system offers a case management functionality (priority-based escalation rules and auto-assignment of cases).",
			'IVR':"The Interactive Voice Recognition is a single number with skill-based routing, voice-enabled responses, and speech recognition.",
			'Reports':"The Reports module provides end-to-end visibility in the Medicaid organization and real-time monitoring and management of business operations."
		}
	};

	function createTooltip(self, mod) {
		var loc_module = 'module' + mod, loc_title = tooltipJSON[loc_module].title, loc_submodule = tooltipJSON[loc_module].submodule, loc_desc = tooltipJSON[loc_module].description;
		$('.tooltip-title-text', '.tooltip-desc.tooltip-main').html(loc_title);
		$('.tooltip-desc-text', '.tooltip-main').html(loc_desc);
		if(self.hasClass("lego-drag")){
			$('.tooltip-title-text', '.tooltip-submodule').html(self.attr("title"));
			$('.tooltip-desc-text', '.tooltip-submodule').text(tooltipJSON[loc_module][self.attr("title")]);

		}
		
		if(self.hasClass("base-block")){
		$('.tooltip-submodule').hide();
		}
		// else if(self.hasClass("tooltip-sub")){
		// 		$('.tooltip-desc-text', '.tooltip-main').text(loc_submodule);
		// }else if(self.hasClass("mobule-box")){
		// 	$('.tooltip-title-text', '.tooltip-desc.tooltip-main').html(loc_title);
		// 	$('.tooltip-desc-text', '.tooltip-main').html(loc_desc);
		// }
		if(self.hasClass("core-claim-tooltip")){
			$('.tooltip-title-text', '.tooltip-submodule').html(self.attr("title"));
			$('.tooltip-desc-text', '.tooltip-submodule').text(tooltipJSON[loc_module][self.attr("title")]);
				$('.tooltip-submodule').fadeIn('slow');
		}
	}


	$('[data-module]').on('click', function() {
		time = 1000;
		var self = $(this), loc_module = self.attr('data-module');
		createTooltip(self, loc_module);
		$('.tooltip-main').fadeIn('slow');
		$('.tooltip-submodule').fadeOut('fast');
		if(loc_module == "4"){
			legoDrag(loc_module);
		}
		if (!self.hasClass('completed') && !self.hasClass('active') && !self.hasClass('clicked')) {
			$('.owl-item').removeClass('active');
			$('[data-module].active').removeClass('active');
			self.addClass('active').addClass("clicked");
			self.parent().addClass('active');
			$('.block-container-overlay').hide();
			$('[data-block-module].active').removeClass('active');
			$('[data-block-module="' + loc_module + '"]').addClass('active');
			autoLocateBase(Number(loc_module));
		}

		if (self.hasClass('clicked')) {
			$('.owl-item').removeClass('active');
			$('[data-module].active').removeClass('active');
			self.addClass('active').removeClass('completed');
			self.parent().addClass('active');
			$('.block-container-overlay').hide();
			$('[data-block-module].active').removeClass('active');
			$('[data-block-module="' + loc_module + '"]').addClass('active');
		}
		if (loc_module == 5) {
			$('.owl-item').removeClass('active');
			$('[data-module="' + loc_module + '"]').parent().addClass('active');
			$('[data-module="' + loc_module + '"]').addClass('active');
			if($('[data-module="' + loc_module + '"]').children().hasClass("dropped")){
					$('[data-module="' + loc_module + '"]').addClass("completed");
			}
			console.log($('[data-module="' + loc_module + '"]'));
		}
		if ($('img', '[data-block-module="' + loc_module + '"]').length === $('img.dropped', '[data-block-module="' + loc_module + '"]').length) {
			self.addClass('completed');
		}
	});

function legoBlockTooltip(){
		$('.lego-drag.dropped:not(".tooltip-sub")').on('click', function() {
			var self = $(this), loc_module = self.closest('[data-block-module]').attr('data-block-module');
			createTooltip(self, loc_module);
		//	$('.tooltip-main').fadeOut('slow');
			$('.tooltip-submodule').fadeIn('slow');
		});
}

	$('.tooltip-sub').on('click', function() {
		var self = $(this), loc_module = self.closest('[data-block-module]').attr('data-block-module');
		createTooltip(self, loc_module);
		$('.tooltip-main').fadeIn('slow');
		// //$('.tooltip-submodule').fadeOut('slow');
	});

	$('.tooltip-close').on('click', function() {
		var self = $(this), loc_parent = self.closest('.tooltip-desc');
		loc_parent.fadeOut('slow');
	});

	$('.tooltip-desc').on('click', function() {
		var self = $(this);
		self.fadeOut('slow');
	});

	function autoLocateBase(currentCategory) {
		var loc_module = $('[data-block-module="' + currentCategory + '"]'), loc_baseBlock = $('.base-block:not(".dropped")', loc_module), loc_childBlock = $('.lego-drag', loc_module);
		if (currentCategory == 4) {
			loc_baseBlock = $('img:not(".dropped")', '.core-claims-blocks');
		}
		if (currentCategory == 5) {
			loc_baseBlock = $('.lego-drag', '[data-block-module="5"]');
		}
		$(loc_baseBlock).removeClass('lengthy');
		var winWidth = $(window).width(), baseWidth = $('#basePlatform img').width(), baseHeight = $('#basePlatform img').height(), baseTopPos = $('#basePlatform img').offset().top, leftPos, topPos, blockWidth = $(loc_baseBlock).width(), blockHeight = $(loc_baseBlock).height(), whiteSpace = (winWidth - baseWidth) / 2;

		if ($(loc_baseBlock).length) {
			if (currentCategory == 1) {
				leftPos = whiteSpace + baseWidth - blockWidth - $(loc_baseBlock).offset().left;
				topPos = baseTopPos + 223 + 192 - $(loc_baseBlock).offset().top - ($(loc_baseBlock).height() * 0.625);

			} else if (currentCategory == 2) {
				leftPos = whiteSpace + (baseWidth / 2) + 29 - blockWidth - $(loc_baseBlock).offset().left + 68;
				topPos = baseTopPos + baseHeight - 83 - blockHeight - $(loc_baseBlock).offset().top - (blockHeight * 0.01);
			} else if (currentCategory == 3) {
				leftPos = whiteSpace + (baseWidth / 2) + 29 - blockWidth - $(loc_baseBlock).offset().left + 115 + (260 / 1.6);
				topPos = baseTopPos + baseHeight - 99 - blockHeight - $(loc_baseBlock).offset().top - (blockHeight * 0.01) - (128 / 2.8);
			} else if (currentCategory == 4) {
				console.log(loc_baseBlock);
				for(var j = 0;j<loc_baseBlock.length;j++){
						var baseBlocks = loc_baseBlock[j];
						if(j==0){
							leftPos = whiteSpace + (baseWidth / 2) - $(baseBlocks).offset().left - 84;
							topPos = baseTopPos + 223 - $(baseBlocks).offset().top - 30 - 132 - blockHeight;
							$(baseBlocks).css({
								'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
								'transition' : 'all 1s ease 0s'
							}).addClass('dropped').removeAttr('data-html2canvas-ignore');
						}else{
							leftPos = whiteSpace + (baseWidth / 2) - $(baseBlocks).offset().left - 84;
							topPos = baseTopPos + 223 - $(baseBlocks).offset().top - 225 - (38 * 7.85);
							$(baseBlocks).css({
								'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
								'transition' : 'all 1s ease 0s'
							}).addClass('dropped').removeAttr('data-html2canvas-ignore');
						}
						$(baseBlocks).parent().removeAttr('data-html2canvas-ignore');
				}

			} else if (currentCategory == 5) {
				leftPos = whiteSpace + 239 - $(loc_baseBlock).offset().left;
				topPos = baseTopPos + 679 - 165 - $(loc_baseBlock).offset().top - blockHeight;

			} else if (currentCategory == 6) {
				leftPos = whiteSpace - $(loc_baseBlock).offset().left;
				topPos = baseTopPos + 234 + 176 - $(loc_baseBlock).offset().top - (blockHeight * 0.7);
			} else if (currentCategory == 7) {
				leftPos = whiteSpace + 271 - $(loc_baseBlock).offset().left;
				topPos = baseTopPos + 223 + 5 - $(loc_baseBlock).offset().top;
				$(loc_baseBlock).removeAttr('data-html2canvas-ignore');
			} else if (currentCategory == 8) {
				leftPos = whiteSpace + 196 - $(loc_baseBlock).offset().left;
				topPos = baseTopPos + 223 + 117 - (blockHeight * 0.65) - $(loc_baseBlock).offset().top;
			}
			if(currentCategory !== 4){
				$(loc_baseBlock).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s'
				}).addClass('dropped').removeAttr('data-html2canvas-ignore');
			}


			/*
			 if (currentCategory == 4 && !$('[data-module="2"]').hasClass('clicked')) {
			 setTimeout(function() {
			 $('[data-module="2"]').trigger('click');
			 }, 2500);
			 }*/

			if (currentCategory == 5) {
				var m5 = legoDrag(loc_baseBlock);
				$('[data-module="' + currentCategory + '"]').addClass('completed').removeClass('active');
				m5();
			}
		}

	}

	function legoDrag(blocks) {

		var winWidth, baseTopPos, baseWidth, baseHeight, whiteSpace;
		winWidth = $(window).width(), baseWidth = document.getElementById('basePlatform_img').width;
		baseTopPos = $('#basePlatform img').offset().top, baseHeight = $('#basePlatform img').height();
		whiteSpace = (winWidth - baseWidth) / 2;

		var timeInterval = 0;

		if(blocks == "4"){
			var providerModule = $("[data-module='2']"), providerLegoBlocks = $("[data-block-module='2']").children("img.lego-drag");
			var legoBlock = {};
			if(!providerModule.hasClass("completed")){
				autoLocateBase(2);
				setTimeout(function() {
					for (var z = 0; z < providerLegoBlocks.length; z++) {

						legoBlock.helper = providerLegoBlocks[z];
						if(!$(legoBlock.helper).hasClass("dropped") && !$(legoBlock.helper).hasClass("dropped-once")){
							legoBlocksAutodrag(legoBlock);
						}

					}
				}, timeInterval);
				timeInterval = timeInterval + 1000;
				providerModule.addClass("clicked");
			}
		}
		var resetPosition = function() {
			$(document).off("dblclick", ".dropped:not('.base-block')").on("dblclick", ".dropped:not('.base-block')", function(e) {
				var self = $(this), ml = $('[data-step]', $(this).parent()), cur = self.attr("data-step"), mn = self.parent().attr("data-block-module"), loc_module_left = $("[data-module='" + mn + "']").offset().left;
				console.log(self, 'self');
				var hgt;
				if (mn == 1) {
					counter--;
					hgt = 42;
				} else if (mn == 2) {
					counter1--;
					hgt = 45;
				} else if (mn == 3) {
					counter2--;
					hgt = 48;
				} else if (mn == 4) {
					counter4--;
					hgt = 38;

				} else if (mn == 5) {
					counter2--;
					hgt = 48;

				} else if (mn == 6) {
					counter5--;
					hgt = 42;

				} else if (mn == 7) {
					counter6--;
					hgt = 43;

				} else if (mn == 8) {
					counter7--;
					hgt = 42;
				}

				$('.tooltip-desc').fadeOut('slow');
				self.removeAttr("style");
				if (mn != 5) {
					self.removeAttr("data-step");
				}
				self.css({
					'transition' : 'all 1s ease 0s'
				});
				self.removeClass("dropped");
				$('.owl-item').removeClass('active');
				$('[data-module].active').removeClass('active');
				$("[data-module='" + mn + "']").removeClass("completed").addClass('active');
				$("[data-module='" + mn + "']").parent().addClass('active');
				$('.block-container-overlay').hide();
				$('[data-block-module].active').removeClass('active');
				$('[data-block-module="' + mn + '"]').addClass('active');
				if (loc_module_left < 0 || loc_module_left > winWidth) {
					catergoryOwl.trigger('owl.next');
				}
				if (mn != 4) {

					for (var i = parseInt(mn == 5 ? 0 : cur) + 1; i < ml.length; i++) {
						var c = $("[data-step='" + i + "']", '[data-block-module="' + mn + '"]');
						var lp = $(c).css("transform").split(',')[4];
						var tp = $(c).css("transform").split(',')[5];
						$(c).css({
							'transform' : 'translate(' + parseFloat(lp) + 'px, ' + (parseFloat(tp) + hgt) + 'px)',
							'z-index' : (i == 0) ? 3 : i + 3
						}).attr("data-step", (i - 1));
						if (mn == 1 || mn == 2 || mn == 3 || mn == 6 || mn == 7) {
							$(c).css({
								'z-index' : (i == 0) ? 3 : i
							});
						} else if (mn == 8) {
							$(c).css({
								'z-index' : (i == 0) ? 3 : i + 2
							});

						}

					};
				}

				//$('.tooltip-main').fadeOut('slow');
				//$('.tooltip-submodule').fadeOut('slow');
				setTimeout(function() {
					self.attr('style', 'position:relative').attr('data-html2canvas-ignore', 'true');
					self.draggable("enable").addClass('dropped-once');
				}, 1000);
			});
		};

		$(".lego-drag").draggable({
			start : function() {
			//	$('.tooltip-main').fadeOut('slow');
			//	$('.tooltip-submodule').fadeOut('slow');
			},
			snap : "#basePlatform",
			stop : function(event, ui) {
				var droppingTime = 500, block = {}, siblingBlocks = $(ui.helper).siblings(".lego-drag"), _thisModule = $(ui.helper).parent().attr("data-block-module");
				console.log(!$(ui.helper).hasClass('dropped-once'));
				console.log(!(_thisModule == '4'));
				if (!$(ui.helper).hasClass('dropped-once') && !(_thisModule == '4') && !(_thisModule == '8')) {
					legoBlocksAutodrag(ui);
					setTimeout(function() {
						for (var k = 0; k < siblingBlocks.length; k++) {
							console.log(siblingBlocks[k]);
							block.helper = siblingBlocks[k];
							legoBlocksAutodrag(block);
						}
					}, droppingTime);
					droppingTime = droppingTime + 1000;
				} else {
					legoBlocksAutodrag(ui);
				}
			}
		});

		function legoBlocksAutodrag(ui) {
			var loc_module = $(ui.helper).closest('.block-container').attr('data-block-module');
			var blockWidth = $(ui.helper).width(), blockHeight = $(ui.helper).height();
			var blockCount = $('.lego-drag', '[data-block-module="' + Number(loc_module) + '"]').length;
			var droppedCount = $('.dropped', '[data-block-module="' + Number(loc_module) + '"]').length;
			if (loc_module == "1") {
				var leftPos = ((winWidth - baseWidth) / 2) + baseWidth - $('.base-block', '[data-block-module="' + Number(loc_module) + '"]').width() - $(ui.helper).offset().left, topPos = baseTopPos + 223 + 192 - $(ui.helper).offset().top - ($(ui.helper).height() * 1.175) - (42 * counter);
				$(ui.helper).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter + 1
				}).addClass('dropped').attr("data-step", counter).draggable('disable').removeAttr('data-html2canvas-ignore');
				counter++;
				resetPosition();
			}
			if (loc_module == "2") {
				var leftPos = whiteSpace + (baseWidth / 2) + 29 - blockWidth - $(ui.helper).offset().left + 68;
				topPos = baseTopPos + baseHeight - 83 - blockHeight - $(ui.helper).offset().top - (blockHeight * 0.01) - (45 * (counter1 + 1));
				$(ui.helper).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter1 + 1
				}).addClass('dropped').attr("data-step", counter1).draggable('disable').removeAttr('data-html2canvas-ignore');
				counter1++;
				resetPosition();
			}
			if (loc_module == "3") {
				var leftPos = whiteSpace + (baseWidth / 2) + 29 - blockWidth - $(ui.helper).offset().left + 115 + (260 / 1.6) - 69, topPos = baseTopPos + baseHeight - 99 - blockHeight - $(ui.helper).offset().top - (blockHeight * 0.24) - (128 / 2.8) - (48 * (counter2 + 1));
				$(ui.helper).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter2 + 1
				}).addClass('dropped').attr("data-step", counter2).draggable('disable').removeAttr('data-html2canvas-ignore');
				counter2++;
				resetPosition();
			}
			if (loc_module == "4") {
				var loc_droppedSib = $(ui.helper).siblings('.dropped');
				if (counter4 === 0) {
					var leftPos = whiteSpace + (baseWidth / 2) - $(ui.helper).offset().left - 84, topPos = baseTopPos + 223 - $(ui.helper).offset().top - 225 - (38 * (counter4 + 1));
				} else if (counter4 === 1) {
					var leftPos = whiteSpace + (baseWidth / 2) - $(ui.helper).offset().left - 84 + 417 - blockWidth + 1, topPos = baseTopPos + 223 - $(ui.helper).offset().top - 233 - (38 * (counter4 - 1)) + 41;
				}
				if (loc_droppedSib.length) {
					var loc_sibLeft = loc_droppedSib.offset().left, loc_coreLeft = $('img', '.core-claims-blocks').offset().left;
					if (loc_sibLeft <= loc_coreLeft) {
						var leftPos = whiteSpace + (baseWidth / 2) - $(ui.helper).offset().left - 84 + 417 - blockWidth + 1, topPos = baseTopPos + 223 - $(ui.helper).offset().top - 233 - (38 * (counter4 - 1)) + 41;
					} else {
						var leftPos = whiteSpace + (baseWidth / 2) - $(ui.helper).offset().left - 84, topPos = baseTopPos + 223 - $(ui.helper).offset().top - 225 - (38 * (counter4 + 1)) + 41;
					}
				}

				$(ui.helper).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter4 + 1
				}).addClass('dropped').attr("data-step", counter4).draggable('disable').removeAttr('data-html2canvas-ignore');
				counter4++;
				resetPosition();

				blockCount = $('.lego-drag', '[data-block-module="' + Number(loc_module) + '"]').length;
				droppedCount = $('.dropped', '[data-block-module="' + Number(loc_module) + '"]').length;
			}
			if (loc_module == "5") {
				var leftPos = whiteSpace + 239 - $(ui.helper).offset().left, topPos = baseTopPos + 679 - 165 - $(ui.helper).offset().top - blockHeight;
				$(ui.helper).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter2 + 1
				}).addClass('dropped').attr("data-step", counter2).draggable('disable').removeAttr('data-html2canvas-ignore');
				if(	$(ui.helper).hasClass("dropped")){
					$("[data-module='5']").addClass("completed");
				}

				counter2++;
				resetPosition();
			}
			if (loc_module == "6") {
				var leftPos = whiteSpace - $(ui.helper).offset().left, topPos = baseTopPos + 234 + 176 - $(ui.helper).offset().top - (blockHeight * 0.835) - (42 * (counter5 + 1));
				$(ui.helper).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter5 + 1
				}).addClass('dropped').attr("data-step", counter5).draggable('disable').removeAttr('data-html2canvas-ignore');
				counter5++;
				resetPosition();
			}
			if (loc_module == "7") {
				var leftPos = whiteSpace + 271 - $(ui.helper).offset().left, topPos = baseTopPos + 234 - (blockHeight * 0.04) - $(ui.helper).offset().top - (43 * (counter6 + 1));
				$(ui.helper).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter6 + 1
				}).addClass('dropped').attr("data-step", counter6).draggable('disable').removeAttr('data-html2canvas-ignore');
				counter6++;
				resetPosition();
			}
			if (loc_module == "8") {
				leftPos = whiteSpace + 196 - $(ui.helper).offset().left;
				topPos = baseTopPos + 223 + 117 - (blockHeight * 0.63) - $(ui.helper).offset().top - (42 * (counter7 + 1));
				$(ui.helper).css({
					'transform' : 'translate(' + leftPos + 'px, ' + topPos + 'px)',
					'transition' : 'all 1s ease 0s',
					'z-index' : counter7 + 3
				}).addClass('dropped').attr("data-step", counter7).draggable('disable').removeAttr('data-html2canvas-ignore');
				counter7++;
				resetPosition();
			}

			if (blockCount === droppedCount && loc_module != "4") {
				$('.owl-item.active').removeClass('active');
				$('[data-module="' + Number(loc_module) + '"]').removeClass('active').addClass('completed');
			} else {
				if ((blockCount+1) === (droppedCount - 1) && loc_module == "4") {
					$('.owl-item.active').removeClass('active');
					$('[data-module="' + Number(loc_module) + '"]').removeClass('active').addClass('completed');
				}
			}

			//$('.tooltip-main').fadeOut('slow');
			//$('.tooltip-submodule').fadeOut('slow');
			legoBlockTooltip();
		}


		return resetPosition;
	}

	function getTopZindex(ele) {
		var array = [];
		$(ele).each(function() {
			array.push($(this).css("z-index"));
		});
		var index_highest = Math.max.apply(Math, array);
		return index_highest;
	}

	setTimeout(function() {
		$('.preloader').fadeOut('slow');
		legoDrag();
	}, 3000);

	$('#registration_modal').on('shown.bs.modal', function(event) {
		var modal = $(this), loc_focusField = $('input:text', modal).eq(0);
		setTimeout(function(){
			loc_focusField.focus();
		}, 1000);
	});

	$('[data-domain]').on('click', function() {
		var self = $(this), loc_domain = self.attr('data-domain'), loc_emailField = $('#email'), loc_email = loc_emailField.val();
		if(loc_email != "") {
			var email_string_array = loc_email.split("@"),
			final_domain = (email_string_array[1] !== undefined) ? email_string_array[1].split(".") : "";

			if(final_domain[0] !== undefined) {
				loc_emailField.val(email_string_array[0]+'@'+final_domain[0]+loc_domain);
			}

		}
	});
});
