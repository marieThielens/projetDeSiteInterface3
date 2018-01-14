$(document).ready(function(){

    var sonMim = new Audio ();
    sonMim.src = "./sons/accordMim.mp3";
    
    var sonDo = new Audio ();
    sonDo.src = "./sons/accordDo.mp3";
    
    var sonFa = new Audio ();
    sonFa.src = "./sons/accordFa.mp3";
    
 $("#tete").click(function(){
     $("#teteZoom").css("display","block");
     $("#mancheZoom").css("display","none");
     $("#caisseZoom").css("display","none");
     $("#lapin").css("display", "none");
     sonMim.play();
     });
     
$("#manche").click(function(){
    $("#mancheZoom").css("display","block");
     $("#teteZoom").css("display","none");
    $("#caisseZoom").css("display","none");
    $("#lapin").css("display", "none");
    sonDo.play();
 });
    
$("#caisse").click(function(){
    $("#caisseZoom").css("display","block"); 
    $("#teteZoom").css("display","none");
    $("#mancheZoom").css("display","none");
    $("#lapin").css("display", "none");
    sonFa.play();
    
 });    
  
      
      $("#sound").click(function(event) {
      event.preventDefault();
      });
    
     var imgSound=$("#sound").attr("src");
    
      var arraySound= new Array(sonMim, sonDo, sonFa);
      console.log(arraySound); 
     
      
              
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

