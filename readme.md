C'est un plugin jquery qui permet de générer un chat en Js
Infos concernant le chat:
** HTML
Le code HTML est dans "anonymousChatBox.html"
** Serveur
Le serveur qui traite les données est "anonymousChatBox.php"
et la base de données est "derniersMessages.htm"
Le refresh a lieu toutes les 4 secondes

** Comment s'en servir ?
avec la méthode .anonymousChatBox();
/!/ Attention cela demande d'intégrer jquery /!/. Pour cela il suffit d'intégrer le code suivant dans votre page html avant anonymousChatBox: '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'
Première chose intégrer le chat: 
C'est simple, il suffit de mettre le script juste après le jquery:
'<script type="text/javascript" src="anonymousChatBox.js"></script>'
Vous devriez éxécuter votre code comme ceci:
$(function()
{
  $('sel').anonymousChatBox('style', 'urlChat', 'UrlPHP', 'langue')
}
sel: selecteur css (tuto : 'https://developer.mozilla.org/fr/docs/Web/CSS/S%C3%A9lecteurs_CSS')
.anonymousChatBox: methode pour faire afficher le chat
style: vous avez plusieurs choix de style:
-night, par défaut un mode nuit (aperçu 'https://i.imgur.com/YaB343f.png')
-light, mode jour (aperçu 'https://i.imgur.com/YZWXims.png')
-dark, mode jour avec du noir (aperçu 'https://i.imgur.com/5XD4wIl.png')
-bigchef, bleu/blanc, aux couleurs du créateur(aperçu 'https://i.imgur.com/t2wIVvL.png')
-orange, orange/blanc (aperçu'https://i.imgur.com/9ynUeog.png')
-secret, a vous de le trouver !(celui qui le trouve en premier à le droit à l'implantation gratuitre sur son site.)
urlChat: url du chat, par défaut: 'derniersMessages.htm'
!/! Attention, si vous mettez pas un type de requête (http par exemple), sa n'actualiseras pas en direct.
UrlPHP: par défaut 'anonymousChatBox.php', normalement il y a pas besoin de changer, sa fonctionne très bien a moins que vous voulliez faire le traitement vous même
langue: Il en existe plusieurs disponibles:
-fr (français)
-en (anglais non disponible)
-es (espagnol non disponible)
-bzh (breton non disponible)
** Infos du créateur | Pour me contacter
Matheo GUINCHE
07 81 94 12 27        Si je reponds pas, laissez moi un message
matheoguinche-dev@hotmail.com
Discord: BigChef#8943            Envoyez moi un mp
