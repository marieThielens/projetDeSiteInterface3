$(document).ready(function(){
    
      
    var marieParle = new Audio();
    marieParle.src = "./sons/presentationMarie.mp3";
                                         
                          
                          
    $("#mariePhoto").hover(function(){
        marieParle.play();
    },
    
     function(){
        marieParle.pause();
        marieParle.load(); // Ou my_soundJouer.currentTime = 0; ?                      
    });
    
      
    
//    icone guitare
    
$("#sound").click(function(event) {
      event.preventDefault();
      });
     
      var arraySound= new Array(marieParle);
      console.log(arraySound); 
     
      var imgSound=$("#sound").attr("src");
              
      if(imgSound=="images/icones/iconeSonDroite0.svg" || imgSound=="./images/icones/iconeSonDroite0.svg"){
          for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=0;
           }
       }
              
   $("#sound").click(function(){
     
       var imgSound= $(this).attr("src");
       console.log(imgSound);
       
       
       if(imgSound=="images/icones/iconeSonDroite0.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite1.svg");
           for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=0.5;
           }
          
       }else if(imgSound=="./images/icones/iconeSonDroite1.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite2.svg");
           for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=1;
           }
       
       }else if(imgSound=="./images/icones/iconeSonDroite2.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite0.svg");
           for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=0;
           }
           
       
       }else if(imgSound=="./images/icones/iconeSonDroite0.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite1.svg");
           for(var i=0; i< arraySound.length; i++){
               arraySound[i].volume=0.5;
           }
       }
      
   }); 

 });                 

/* Changement de texte au survol(Horaires) */    
$(document).ready(function() {
    $(".containerRond").hover(function(){
        
    
        
        $(".containerRond p").html("Infos<br/>sur<br/>demande");
        $(".containerRond p").css("text-align", "center");
        $(".containerRond").css("background color", "#2EA6DD");
         $(".containerRond").css("background color", "#ffffff");
    }, function() {
        $(".containerRond p").html("Stages !<br/>pendant<br/>les vacances");
        $(".containerRond p").css("color", "#2EA6DD");
        $(".containerRond").css("background color", "#ffffff");
    });
});

/* Changement de texte au survol(Tarifs) */
$(document).ready(function() {
    
    var textMauve1= $(".mauve1 p").html();
    var textMauve2= $(".mauve2 p").html();
    var textMauve3= $(".mauve3 p").html();
    
    $(".mauve1").hover(function() {
        $(".mauve1 p").html("GRATUIT !");
        $(".mauve1 p").css("color", "#867BB8");
        $(".mauve1").css("padding-top", "3.7rem");
        
    }, function(){
        $(".mauve1 p").html(textMauve1);
        $(".mauve1 p").css("color", "#ffffff");
        $(".mauve1").css("padding-top", "2.6rem");
    });
    $(".mauve2").hover(function() {
        $(".mauve2 p").html("250€<br/>30h<br/>2/3 éléves");
        $(".mauve2 p").css("color", "#867BB8");
        $(".mauve2").css("padding-top", "2.2rem");
    }, function() {
        $(".mauve2 p").html(textMauve2);
        $(".mauve2 p").css("color", "#ffffff");
        $(".mauve2").css("padding-top", "3.5rem");
    });
    $(".mauve3").hover(function() {
        $(".mauve3 p").html("200€<br/>5 Jours");
        $(".mauve3 p").css("color", "#867BB8");
        $(".mauve3").css("padding-top", "3rem");
    }, function() {
        $(".mauve3 p").text(textMauve3);
        $(".mauve3 p").css("color", "#ffffff");
        $(".mauve3").css("padding-top", "4.3rem");
    });
});