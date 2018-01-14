 

$(document).ready(function(){
 
    
  
    
  $(".loader").show(100).delay(2000).hide(0);
  $(".anim").show(100).delay(2000).hide(0);
    
        
// Loader fabriqué de façon artisanale ! Pour cacher une saute de l'écran que générait le css un peu compliqué de la page (body en flex avec height: 100%)         
    
    
//            préloader les gifs et les icônes pour éviter sautes d'image et de son !
//            http://www.thonky.com/javascript-and-css-guide/javascript-image-preload
              
            var my_image = new Image();
            my_image.src = './images/gif/gifRose.gif';
            var my_image2 = new Image();
            my_image2.src = './images/gif/gifMauveMarie.gif';
              
            
            var my_soundJouer = new Audio();
            my_soundJouer.src = './sons/guitarJouerLong.mp3';
              
            var my_soundInformer = new Audio();
            my_soundInformer.src = './sons/guitarInformerOk.mp3';
    
    
       
//prévenir le comportement par défaut du lien qui se trouve sur l'icône guitare
              
   $("header a #sound").click(function(event) {
  event.preventDefault();
});
         
//modif icône son et contrôle son
//avant le click : muted
              
      var imgSound=$("header a #sound").attr("src");
              
        if(imgSound=="images/icones/iconeSonGauche0.svg" || imgSound=="./images/icones/iconeSonGauche0.svg"){
            my_soundJouer.volume=0;
            my_soundInformer.volume=0;
        }
              
   $("header a #sound").click(function(){
     
       var imgSound=$(this).attr("src");
//       
//       console.log(imgSound);
       
       if(imgSound=="images/icones/iconeSonGauche0.svg"){
           $(this).attr("src", "./images/icones/iconeSonGauche1.svg");
           my_soundJouer.volume=0.5;
           my_soundInformer.volume=0.5;
              
       }else if(imgSound=="./images/icones/iconeSonGauche1.svg"){
           $(this).attr("src", "./images/icones/iconeSonGauche2.svg");
           my_soundJouer.volume=1;
           my_soundInformer.volume=1; 
       }else if(imgSound=="./images/icones/iconeSonGauche2.svg"){
           $(this).attr("src", "./images/icones/iconeSonGauche0.svg");
           my_soundJouer.volume=0;
           my_soundInformer.volume=0;
       }else if(imgSound=="./images/icones/iconeSonGauche0.svg"){
           $(this).attr("src", "./images/icones/iconeSonGauche1.svg");
           my_soundJouer.volume=0.5;
           my_soundInformer.volume=0.5;
       }
      
   }); 

  
              
              
	
//		       Afficher les gif et mettre du son au survol/et au click pour la version tablette
                 
              $("#menuJouer img").hover(function(){
                  $(this).attr("src", "./images/gif/gifRose.gif");
                  my_soundJouer.play();
                  my_soundJouer.addEventListener('ended', function(){
                  my_soundJouer.play()}, false);   
              }, 
                  function(){
                  $(this).attr("src", "./images/gif/imageFixeMonstreRose.png");
                  my_soundJouer.pause();
                  my_soundJouer.load(); // Ou my_soundJouer.currentTime = 0; ?
              });
              
               $("#menuInformer img").hover(function(){
                  $(this).attr("src", "./images/gif/gifMauveMarie.gif");
                   my_soundInformer.play();
                   my_soundInformer.addEventListener('ended', function(){
                   my_soundInformer.play()}, false);   
              }, 
                  function(){
                  $(this).attr("src", "./images/gif/imageFixeMonstreMauve.png");
                  my_soundInformer.pause();
                  my_soundInformer.load();
              });
    
              $("#menuJouer img").click(function(){
                   var image= $(this).attr("src");
    
                  
                  if (image == "images/gif/imageFixeMonstreRose.png" || image == "./images/gif/imageFixeMonstreRose.png"){
                  $(this).attr("src", "./images/gif/gifRose.gif");
                  my_soundJouer.play();
                  my_soundJouer.addEventListener('ended', function(){
                  my_soundJouer.play()}, false);   
                  }
                  
                  if (image == "./images/gif/gifRose.gif") {
                  $(this).attr("src", "./images/gif/imageFixeMonstreRose.png");
                  my_soundJouer.pause();
                  my_soundJouer.load();
                  }
              }); 
                  
                   $("#menuInformer img").click(function(){
                   var image= $(this).attr("src");
    
                  
                  if (image == "./images/gif/imageFixeMonstreMauve.png" || image == "./images/gif/imageFixeMonstreMauve.png"){
                  $(this).attr("src", "./images/gif/gifMauveMarie.gif");
                  my_soundInformer.play();
                  my_soundInformer.addEventListener('ended', function(){
                  my_soundInformer.play()}, false);   
                  }
                  
                  if (image == "./images/gif/gifMauveMarie.gif") {
                  $(this).attr("src", "./images/gif/imageFixeMonstreMauve.png");
                  my_soundInformer.pause();
                  my_soundInformer.load();
                  }
              }); 
//              

              
///*Changer le texte des ronds au survol et au click sur tablette*/                                           $("#menuJouer a").hover(function(){
//                  $("#menuJouer a").html("Par ici des jeux <br/> pour les enfants <br/> de 7 à 77 ans !");
//                 $("#menuJouer a").css({"padding":"25%", "padding-left":"5%", "padding-right":"5%", "font-size":"1.3rem", "font-family":"myriad pro, sans serif", "line-height": "1.5"});
//              }, 
//                  function(){
//                  $("#menuJouer a").text("JOUER");
//                  $("#menuJouer a").css({"padding-top":"30%", "font-size":"2rem"});
//                  
//              });
//              
//                  $("#menuInformer a").hover(function(){
//                  $("#menuInformer a").html("horaires, tarifs etc. : <br/> toutes les infos </br> sont là");
//                  $("#menuInformer a").css({"padding":"25%", "padding-left":"5%",     "padding-right":"5%", "font-size":"1.3rem", "font-family":"myriad pro, sans serif", "line-height": "1.5"});
//             }, 
//                  function(){
//                  $("#menuInformer a").text("S'INFORMER");
//                  $("#menuInformer a").css({"padding-top":"30%", "font-size":"2rem"});
//                  
//              });
              
                 
});  