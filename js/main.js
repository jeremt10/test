$('document').ready(function(){
	$("#link_logo").click(function(){
		$('.ecommerce').hide();
		$('.vitrine').hide();
		$('.newsletter').hide();
		$('.propgraphique').hide();
		$('#nav_ecommerce a').css("background","none");
		$('#nav_vitrine a').css("background","none");
		$('#nav_newsletter a').css("background","none");
		$('#nav_propgraphique a').css("background","none");
	})
	$("#nav_ecommerce").click(function(){
		$('.ecommerce').fadeIn();
		$('.vitrine').hide();
		$('.newsletter').hide();
		$('.propgraphique').hide();
		$('#nav_ecommerce a').css("background","grey");
		$('#nav_vitrine a').css("background","none");
		$('#nav_newsletter a').css("background","none");
		$('#nav_propgraphique a').css("background","none");
	})
	$("#nav_vitrine").click(function(){
		$('.vitrine').fadeIn();
		$('.ecommerce').hide();
		$('.newsletter').hide();
		$('.propgraphique').hide();
		$('#nav_vitrine a').css("background","grey");
		$('#nav_ecommerce a').css("background","none");
		$('#nav_newsletter a').css("background","none");
		$('#nav_propgraphique a').css("background","none");
	})
	$("#nav_newsletter").click(function(){
		$('.newsletter').fadeIn();
		$('.vitrine').hide();
		$('.ecommerce').hide();
		$('.propgraphique').hide();
		$('#nav_newsletter a').css("background","grey");
		$('#nav_ecommerce a').css("background","none");
		$('#nav_vitrine a').css("background","none");
		$('#nav_propgraphique a').css("background","none");

	})
	$("#nav_propgraphique").click(function(){
		$('.propgraphique').fadeIn();
		$('.vitrine').hide();
		$('.newsletter').hide();
		$('.ecommerce').hide();
		$('#nav_propgraphique a').css("background","grey");
		$('#nav_ecommerce a').css("background","none");
		$('#nav_newsletter a').css("background","none");
		$('#nav_vitrine a').css("background","none");
	})
})

