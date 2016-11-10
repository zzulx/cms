;(function($){
	$.fn.extend({
		"tab":function(ha,ha1){
			this.each(function(index,elem1){
					$(this).click(function(){
					$(this).addClass(ha).siblings().removeClass(ha);
					var num=$(this).index();
					$(ha1).eq(num).show().siblings().hide();
				})
			})
			
		}
	})
})(jQuery);
;(function($){
	$.fn.extend({
		"navac" : function(navc,navc1){
			this.each(function(index,elem1){
				$(this).click(function(){
					$(this).addClass(navc).siblings().removeClass(navactive);
				})
			})
		}
	})
})(jQuery);