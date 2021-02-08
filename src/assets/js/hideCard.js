$(function(){
    $('.card-body').hide();
	$('.card').on('click', function(event){
                $(this).children().toggle();
	})
})