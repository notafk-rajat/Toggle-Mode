var toggled = false;

$('#toggle').click(function(){


 // $("h1").toggleClass("color-white");
 // $("body").toggleClass("bck-color");

	if(!toggled){

		$('body').addClass('bck-color');
		$('h1:first').addClass('color-white');
		$("#circle").css("margin-left","73%");

		toggled = true;

	}
	else
	{
		$('body').removeClass('bck-color');
		$('h1:first').removeClass('color-white');
		$("#circle").css("margin-left","1px");

		toggled = false;

	}

}

);