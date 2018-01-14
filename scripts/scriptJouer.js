 $(document).ready(function(){
    
//On crée les sons
     
  var sonAmbiance = new Audio();
  sonAmbiance.src = './sons/guitarJouerLong.mp3';
   
   sonAmbiance.play();
   sonAmbiance.addEventListener('ended', function(){
   sonAmbiance.play()}, false);   
//modif icône son et contrôle son
//avant le clic, par défaut : muted
    
      $("#sound").click(function(event) {
      event.preventDefault();
      });
     
      var imgSound=$("#sound").attr("src");
              
      if(imgSound=="images/icones/iconeSonDroite0.svg" || imgSound=="./images/icones/iconeSonDroite0.svg"){
               sonAmbiance.volume=0;
       }
              
      $("#sound").click(function(){
     
       var imgSound= $(this).attr("src");
       console.log(imgSound);
       
       
       if(imgSound=="images/icones/iconeSonDroite0.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite1.svg");
               sonAmbiance.volume=0.5;
          
       }else if(imgSound=="./images/icones/iconeSonDroite1.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite2.svg");
               sonAmbiance.volume=1;
       
       }else if(imgSound=="./images/icones/iconeSonDroite2.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite0.svg");
               sonAmbiance.volume=0;
           
           
       
       }else if(imgSound=="./images/icones/iconeSonDroite0.svg"){
           $(this).attr("src", "./images/icones/iconeSonDroite1.svg");
               sonAmbiance.volume=0.5;
       }
      
   }); 

  
              


});
