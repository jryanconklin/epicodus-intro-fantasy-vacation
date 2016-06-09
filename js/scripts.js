$(document).ready(function(){
  $("form#vacation").submit(function(event){
    var hogwarts = 0;
    var ds9 = 0;
    var shire = 0;
    var mordor = 0;
    var heirloom = $("input:radio[name=heirloom]:checked").val();
    var item = $("input:radio[name=item]:checked").val();
    var profession = $("input:radio[name=profession]:checked").val();
    var problem = $("input:radio[name=problem]:checked").val();
    var destination = $("input:radio[name=destination]:checked").val();

    if ( heirloom === "yes" ) {
      hogwarts += 1;
      mordor += 1;
    } else if ( heirloom === "no" ) {
      shire += 1;
      ds9 += 1;
    } else if ( heirloom === "maybe" ) {
      ds9 += 2;
    }

    if ( item === "ring" ) {
      mordor += 2;
    } else if ( item === "cloak" ) {
      hogwarts += 2;
    } else if ( item === "phaser"  ) {
      ds9 += 2;
    } else if ( item === "fishing" ) {
      shire += 2;
    }

    if ( profession === "student"  ) {
      hogwarts += 1;
    } else if ( profession === "starfleet" ) {
      ds9 += 1;
    } else if ( profession === "heir" ) {
      hogwarts += 1;
      mordor += 1;
    } else if ( profession === "self" ) {
      shire += 2;
    }

    if ( problem === "love"  ) {
      hogwarts += 3;
    } else if ( problem === "science" ) {
      ds9 += 3;
    } else if ( problem === "avoid" ) {
      shire += 3;
    } else if ( problem === "fellowship" ) {
      mordor += 3;
    }

    if ( destination === "wasteland"  ) {
      mordor += 2;
      ds9 += 1;
    } else if ( destination === "castle" ) {
      hogwarts += 2;
    } else if ( destination === "space" ) {
      ds9 += 2;
    } else if ( destination === "homey" ) {
      shire += 2;
    }

    if ( hogwarts >= ds9 && hogwarts >= shire && hogwarts >= mordor ) {
      $("#hogwarts").fadeIn();
      window.scrollTo( 0, 0 );
      $(".mainSection").fadeOut();
      $(".quizSection").fadeOut();
      $("#ds9").hide();
      $("#mordor").hide();
      $("#shire").hide();
    }


    event.preventDefault();
  });
});
