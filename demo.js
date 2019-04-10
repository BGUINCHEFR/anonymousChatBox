lang = "fr";
$(function(){
	mode = 
	{
		night: function()
		{
			$('body').css('background-color', '#d9d9d9');
			$('aside#chatDemo').anonymousChatBox("night", undefined, "../anonymousChatBox");
			$('div#banniere').css('background-color', "#262626")
			.css('color', 'white');
			$('div#banniere h1').text("AnonymousChatBox - Night");
		},
		light: function()
		{
			$('body').css('background-color', 'white');
			$('aside#chatDemo').anonymousChatBox("light", undefined, "../anonymousChatBox");
			$('div#banniere').css('background-color', '#d9d9d9')
			.css('color', 'black');
			$('div#banniere h1').text("AnonymousChatBox - Light");
		},
		dark: function()
		{
			$('body').css('background-color', 'white');
			$('aside#chatDemo').anonymousChatBox("dark", undefined, "../anonymousChatBox");
			$('div#banniere').css('background-color', "#262626")
			.css('color', 'white');
			$('div#banniere h1').text("AnonymousChatBox - Dark");
		},
		bigchef: function()
		{
			$('body').css('background-color','white');
			$('aside#chatDemo').anonymousChatBox("bigchef", undefined, "../anonymousChatBox");
			$('div#banniere').css('background-color', "#000099")
			.css('color', 'white');
			$('div#banniere h1').text("anonymousChatBox - BigChef");
		},
		orange: function()
		{
			$('body').css('background-color', 'white');
			$('aside#chatDemo').anonymousChatBox("orange", undefined, "../anonymousChatBox");
			$('div#banniere').css('background-color', '#ff8000')
			.css('color', 'white');
			$('div#banniere h1').text("anonymousChatBox - Orange");
		}
	}
	mode.night();
	$('.night').click(function()
	{
		mode.night();
	});
	$('.light').click(function()
	{
		mode.light();
	});
	$('.dark').click(function()
	{
		mode.dark();
	})
	$('.bigchef').click(function()
	{
		mode.bigchef();
	})
	$('.orange').click(function()
	{
		mode.orange();
	})
});