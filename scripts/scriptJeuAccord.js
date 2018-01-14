 $(document).ready(function(){
    
//On crée les sons
     
  var my_soundMi = new Audio();
  my_soundMi.src = './sons/accordMim.mp3';
    
  var my_soundDo = new Audio();
  my_soundDo.src = './sons/accordDo.mp3';
    
  var my_soundRe = new Audio();
  my_soundRe.src = './sons/accordRe.mp3';
     
  var my_soundFa = new Audio();
  my_soundFa.src = './sons/accordFa.mp3';
    
  var my_soundLa = new Audio();
  my_soundLa.src = './sons/accordLam.mp3';
    
  var my_soundSol = new Audio();
  my_soundSol.src = './sons/accordSol.mp3';
   
     
//On place les ronds de couleurs et on joue la note au clic
     
  $("#re").click(function(){
      console.log("je clique sur le ré");
      $("#pastilles").css("display","block");
      $("#index").css({"top":"42%", "left":"32%", "transform":"translateY(-50%)"});
      $("#majeur").css({"top":"9%", "left":"32%", "transform":"translateY(-50%)"});
      $("#annulaire").css({"top":"26%", "left":"57%", "transform":"translateY(-50%)"});
      my_soundRe.play();
  });
      
  $("#mi").click(function(){
      $("#pastilles").css("display","block");
      $("#index").css({"top":"42%","left":"8%", "transform":"translateY(-50%)"});
      $("#majeur").css({"top":"74%", "left":"32%", "transform":"translateY(-50%)"});
      $("#annulaire").css({"top":"58%", "left":"32%", "transform":"translateY(-50%)"});
      my_soundMi.play();
  });
       
     
  $("#do").click(function(){
      $("#pastilles").css("display","block");
      $("#index").css({"top":"26%", "left":"8%", "transform":"translateY(-50%)"});
      $("#majeur").css({"top":"58%", "left":"32%", "transform":"translateY(-50%)"});
      $("#annulaire").css({"top":"74%", "left":"57%", "transform":"translateY(-50%)"});
      my_soundDo.play();
  });
    
  $("#la").click(function(){
      $("#pastilles").css("display","block");
      $("#index").css({"top":"26%", "left":"8%", "transform":"translateY(-50%)"});
      $("#majeur").css({"top":"58%", "left":"32%", "transform":"translateY(-50%)"});
      $("#annulaire").css({"top":"42%", "left":"32%", "transform":"translateY(-50%)"});
      my_soundLa.play();
  });
    
  $("#sol").click(function(){
      $("#pastilles").css("display","block");
      $("#index").css({"top":"74%", "left":"32%", "transform":"translateY(-50%)"});
      $("#majeur").css({"top":"90%", "left":"57%", "transform":"translateY(-50%)"});
      $("#annulaire").css({"top":"9%", "left":"57%", "transform":"translateY(-50%)"});
      my_soundSol.play();
  });
    
     
     //Pour le fa on fait apparaître une div = le capo et on fait sursauter le lapin
     
   $("#fa").click(function(){
      $("#pastilles").css("display","block");
      $("#index").css({"top":"42%", "left":"32%", "transform":"translateY(-50%)"});
      $("#majeur").css({"top":"58%", "left":"57%", "transform":"translateY(-50%)"});
      $("#annulaire").css({"top":"74%", "left":"57%", "transform":"translateY(-50%)"});
      my_soundFa.play();
      $("#capo").css("display","block"); $("#lapin").addClass("animation");
  });
    
     
      //On enlève le capo et l'animation du lapin quand on joue les autres notes
     
  $("#re, #mi, #do, #sol, #la").click(function(){
      $("#capo").css("display","none");
      $("#lapin").removeClass("animation");
  });
     
    
      //On change le texte explicatif selon la note jouée
     
     
         
    
                $("#re, #do, #mi, #sol").click(function(){
                
                var explications= ["<p>Les gommettes indiquent</p><p>où les doigts se posent sur le manche</p>", "<p>Un accord c'est quand on joue</p><p>plusieurs notes en même temps</p>", "<p>Bravo !</p><p>Tu joues ta première mélodie</p>"];
                  
                var content= $(".toReplace").html();
                console.log(content);
                    
                console.log(explications[0]);    
                
                if(content == explications[0]){
                $(".toReplace").html(explications[1]);
                }else if(content == explications[1]){
                $(".toReplace").html(explications[2]);
                }else if(content == explications[2]){
                $(".toReplace").html(explications[2]);
                }else{
                $(".toReplace").html(explications[0]); 
                }
               });     
                    
         
     
      $("#fa").click(function(){
          
          $(".toReplace").html("<p>Pour l'accord de fa, on place l'index</p><p>ou un capodastre sur toute la 1ère case<p/>");
        
        });
     
     
      $("#la").click(function(){
          $(".toReplace").html("<p>Cet accord sonne un peu triste</p><p>on dit qu'il est 'mineur'<p/>");     
        });
    
//modif icône son et contrôle son
//avant le clic, par défaut : muted
    
      $("#sound").click(function(event) {
      event.preventDefault();
      });
     
      var arraySound= new Array(my_soundMi, my_soundDo, my_soundRe, my_soundFa, my_soundLa, my_soundSol);
      console.log(arraySound); 
     
      var imgSound=$("#sound").attr("src");
              
      if(imgSound=="images/icones/iconeSonDroite0.svg" || imgSound=="../images/icones/iconeSonDroite0.svg"){
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
