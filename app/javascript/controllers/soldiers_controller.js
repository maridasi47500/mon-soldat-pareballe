$(function () {
	var myCarousel = document.querySelector('#carouselExample')
	var carousel = new bootstrap.Carousel(myCarousel);
	  $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
		      _renderItem: function( ul, item ) {
			            var li = $( "<li>" ),
				                wrapper = $( "<div>", { text: item.label } );

			            if ( item.disabled ) {
					            li.addClass( "ui-state-disabled" );
					          }

			            $( "<span>", {
					            style: item.element.attr( "data-style" ),
					            "class": "ui-icon " + item.element.attr( "data-class" )
					          }).appendTo( wrapper );

			            return li.append( wrapper ).appendTo( ul );
			          }
		    });

	  $("#CarId2")
	  .iconselectmenu()
	  .iconselectmenu( "menuWidget")
	  .addClass( "ui-menu-icons avatar" );
});
