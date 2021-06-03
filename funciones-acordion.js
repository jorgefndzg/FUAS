var Func = {
    OtrosSitios: function(){
        $('.otros-sitios ul a').attr({
            target: '_blank'
        });
        $('.otros-sitios').hover(function(){
            $(this).find('a').stop(true, true).addClass('acti').next('div').show();
        }, function(){
            $(this).find('a').stop(true, true).removeClass('acti').next('div').fadeOut('200');
        });
    },
    Busc: function(){
        $('.BuscText').focus(function(){
            if ($(this).val() == $(this)[0].title) {
                $(this).val('');
            }
        });
        $('.BuscText').blur(function(){
            if ($(this).val() === '') {
                $(this).val($(this)[0].title);
            }
        });
        $('.BuscText').blur();
    },
	Tabs: function(){
		$('.tabsMenu li').click(function() {
			$('.tabsMenu li').removeClass('active');
			$(this).addClass('active');
			$('.reports-list').hide();
			var Panel = $(this).find('a').attr('href');
			$(Panel).show();
			return false;
		});
	},
	Slide: function(){	
		$('.SL').addClass('SL-Off');
		$('.SL').next('.SL-Cont').hide();
		$('.SL').bind('click', function(){
			$(this).next('.SL-Cont').slideToggle('normal').siblings('.SL-Cont:visible').slideUp('normal');
			$(this).toggleClass('SL-On');
			$(this).siblings('.SL').removeClass('SL-On');			
		});
	}
};
$(function(){
    $('.remove').remove();
    $('.hide').hide();
    $('.show').show();
	
	Func.OtrosSitios();
    Func.Busc();
    if ($('#tabs').length > 0){Func.Tabs();};
	if ($('#eventcarrouhome').length > 0){
		$('#mycarousel').jcarousel({
        	scroll: 1
		});
	};
	if ($('#eventcarrou').length > 0){
		$('#mycarousel').jcarousel({
			vertical: true,
        	scroll: 4
		});
	};
	Func.Slide();
	$('a[href$=pdf]').attr({ target: "_blank" });
});