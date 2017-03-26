events.blockBreak( gendanklods );
SKALGENDANNE = "JA"
function gendanklods( event ) {
  var Drone = require('drone');
  playerDrone = new Drone(event.block.location);
  if (SKALGENDANNE == "JA"){
    playerDrone.box(event.block.type,1,1,1);
  }
  if ( event.block.type == "DIAMOND_ORE") {
      echo (event.player, "Du har nu minet en LEGENDDARY BLOCK OMG");
  }
};

exports.triggerGendan = function (){
  if (SKALGENDANNE == "JA") {
    SKALGENDANNE = "NEJ";
  } else {
    SKALGENDANNE = "JA";
  }
}
