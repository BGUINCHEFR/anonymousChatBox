var anonymousChatBoxConnectionError=false;var anonymousChatBoxSendError=false;$(function($)
{$.fn.anonymousChatBox=function(cssMode,chatUrl,phpSend,lang)
{$(this).load('http://localhost/dev/chatBoxAnonymous/anonymousChatBox.html',function()
{switch(cssMode)
{case"night":$('style#styleAnonymousChatBox').load('css/anonymousChatBox-night.css');break;case"light":$('style#styleAnonymousChatBox').load('css/anonymousChatBox-light.css');break;case"dark":$('style#styleAnonymousChatBox').load('css/anonymousChatBox-dark.css');break;case"orange":$('style#styleAnonymousChatBox').load('css/anonymousChatBox-orange.css');break;case"bigchef":$('style#styleAnonymousChatBox').load('css/anonymousChatBox-bigchef.css');break;case"issou":$('style#styleAnonymousChatBox').load('css/anonymousChatBox-issou.css');break;default:$('style#styleAnonymousChatBox').load('css/anonymousChatBox-night.css');break;}
if(chatUrl===undefined)
{chatUrl="http://localhost/dev/chatBoxAnonymous/derniersMessages.htm";}
if(phpSend===undefined)
{phpSend="anonymousChatBox.php";}
anonymousChatBox={afficher:function()
{$('div#anonymousChatBox div#viewChat').load(chatUrl);},envoyer:function()
{$('div#anonymousChatBox input#pseudo').attr({disabled:'disabled'});let pseudo=$('div#anonymousChatBox input#pseudo').val();let message=$('div#anonymousChatBox input#message').val();$('div#anonymousChatBox input#message').val("");$('div#anonymousChatBox div#viewChat').prepend('<p class="messageEnvoye">'+pseudo+" : "+message+'</p>');$('div#anonymousChatBox div#viewChat p.messageEnvoye').css('opacity','0.8').css('margin','0px');$.post(phpSend,{nom:pseudo,message:message})}}
anonymousChatBox.afficher();setInterval(function(){anonymousChatBox.afficher()},4000);$(document).ajaxError(function(ev,req,option,erreur)
{if(option.url===chatUrl&&option.type==="GET")
{if(!anonymousChatBoxConnectionError)
{anonymousChatBoxConnectionError=true;$('div#anonymousChatBox div#viewChat').append('<p class="connectionError">Erreur de connection au serveur, voulliez vérifier votre connection internet.</p><br/>');console.log(erreur);}}
else if(option.url===phpSend&&option.type==="POST")
{if(!anonymousChatBoxSendError)
{console.log(erreur)
anonymousChatBoxSendError=true;$('div#anonymousChatBox div#viewChat p.messageEnvoye:first').css('color','#ff6666');$('div#anonymousChatBox input#message, div#anonymousChatBox button').attr({disabled:'disabled',opacity:'1'})}}})
$(document).ajaxSuccess(function(ev,req,option)
{if(option.url===chatUrl&&option.type==="GET")
{if(anonymousChatBoxConnectionError)
{anonymousChatBoxConnectionError=true;$('div#anonymousChatBox div#viewChat p.messageEnvoye:first').css('color','white');$('div#anonymousChatBox input#message, div#anonymousChatBox button').attr({disabled:'enabled',opacity:'1'});}}
else if(option.url===phpSend&&option.type==="POST")
{if(anonymousChatBoxSendError)
{$('div#anonymousChatBox div#viewChat p.messageEnvoye').css('opacity','1');anonymousChatBoxConnectionError=true;}}})
$('div#anonymousChatBox button').click(function()
{if(!anonymousChatBoxSendError)
{anonymousChatBox.envoyer();}});$('div#anonymousChatBox input, div#anonymousChatBox button').keydown(function(e)
{if(e.which===13)
{if(!anonymousChatBoxSendError)
{anonymousChatBox.envoyer();}}});});}})