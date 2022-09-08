var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var enemy1 = createSprite(350, 50, 10, 10);
var enemy2 = createSprite(50, 50, 10, 10);
var enemy3 = createSprite(50, 350, 10, 10);
var enemy4 = createSprite(350, 350, 10, 10);
var shoth1 = createSprite(200, 390, 5, 5);
shoth1.shapeColor=(rgb(255, 255, 100));
var shoth2 = createSprite(200, 390, 5, 5);
shoth2.shapeColor=(rgb(255, 255, 100));
var shoth3 = createSprite(200, 390, 5, 5);
shoth3.shapeColor=(rgb(255, 255, 100));
var shoth4 = createSprite(200, 390, 5, 5);
shoth4.shapeColor=(rgb(255, 255, 100));
enemy1.shapeColor=rgb(255, 0, 0);
enemy2.shapeColor=rgb(255, 0, 0);
enemy3.shapeColor=rgb(255, 0, 0);
enemy4.shapeColor=rgb(255, 0, 0);
var player = createSprite(200, 200, 10, 10);
var game = "start";
var points = 0;
var shoth1_ = "v";
var shoth2_ = "v";
var shoth3_ = "v";
var shoth4_ = "v";






createEdgeSprites();
function draw() {//=-=-=-=-=-=-=-=-=-=-=-=-=--=-==-=-=--=-=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-= 
  if(game == "play"){
    if(keyDown("s")){
      player.y=player.y+4,5;
    }
    if(keyDown("w")){
      player.y=player.y-4,5;
    }
    if(keyDown("d")){
      player.x=player.x+4,5;
    }
    if(keyDown("a")){
      player.x=player.x-4,5;
    }
    if(enemy1.y<player.y){
      enemy1.y=enemy1.y+(randomNumber(1.5, 3,5));
    }
    if(enemy1.y>player.y){
      enemy1.y=enemy1.y-(randomNumber(1.5, 3,5));
    }
    if(enemy1.x<player.x){
      enemy1.x=enemy1.x+(randomNumber(1.5, 3,5));
    }
    if(enemy1.x>player.x){
      enemy1.x=enemy1.x-(randomNumber(1.5, 3,5));
    }
    if(enemy2.y<player.y){
      enemy2.y=enemy2.y+(randomNumber(1.5, 3,5));
    }
    if(enemy2.y>player.y){
      enemy2.y=enemy2.y-(randomNumber(1.5, 3,5));
    }
    if(enemy2.x<player.x){
      enemy2.x=enemy2.x+(randomNumber(1.5, 3,5));
    }
    if(enemy2.x>player.x){
      enemy2.x=enemy2.x-(randomNumber(1.5, 3,5));
    }
    if(enemy3.y<player.y){
      enemy3.y=enemy3.y+(randomNumber(1.5, 3,5));
    }
    if(enemy3.y>player.y){
      enemy3.y=enemy3.y-(randomNumber(1.5, 3,5));
    }
    if(enemy3.x<player.x){
      enemy3.x=enemy3.x+(randomNumber(1.5, 3,5));
    }
    if(enemy3.x>player.x){
      enemy3.x=enemy3.x-(randomNumber(1.5, 3,5));
    }
    if(enemy4.y<player.y){
      enemy4.y=enemy4.y+(randomNumber(1.5, 3,5));
    }
    if(enemy4.y>player.y){
      enemy4.y=enemy4.y-(randomNumber(1.5, 3,5));
    }
    if(enemy4.x<player.x){
      enemy4.x=enemy4.x+(randomNumber(1.5, 3,5));
    }
    if(enemy4.x>player.x){
      enemy4.x=enemy4.x-(randomNumber(1.5, 3,5));
    }
  }
  if(shoth1_ == "v"){
    shoth1.x=player.x;
    shoth1.y=player.y;
  }
  if(shoth2_ == "v"){
    shoth2.x=player.x;
    shoth2.y=player.y;
  }
  if(shoth3_ == "v"){
    shoth3.x=player.x;
    shoth3.y=player.y;
  }
  if(shoth4_ == "v"){
    shoth4.x=player.x;
    shoth4.y=player.y;
  }
  background("blue");
  if((game == "start")||(game == "play")){
    textSize(20);
    text("SCORE: " + points, 150, 20);
  }
  if(game == "start"){
    if(keyDown("space")){
      game = "play";
    }
    stroke("orange");
    fill("red");
    textSize(20);
    text("PRESS (SPACE) TO START", 75, 155);
    textSize(16);
    text("USE (W,A,S,D) TO MOVE AND ARROWS TO SHOT", 13.5, 300);
  }
  if((player.isTouching(enemy1)||
  player.isTouching(enemy2)||
  player.isTouching(enemy3)||
  player.isTouching(enemy4))&&(game == "play")){
    game = "end";
  }
  if(game =="end"){
    stroke("yellow");
    fill("green");
    textSize(20);
    text("LOSER", player.x-32.5, player.y-50);
    fill(rgb(100, 100, 255));
    stroke("red");
    text("POINTS: " + points, player.x-50, player.y-30);
    shoth1.velocityX=0;
    shoth1.velocityY=0;
    shoth2.velocityY=0;
    shoth3.velocityX=0;
    shoth3.velocityY=0;
    shoth4.velocityX=0;
    shoth4.velocityY=0;
  }
  if(game == "play"){
    if(keyDown("up")){
     shoth1_ = "f";
     shoth1.velocityY=-7.8;
    }
    if(keyDown("left")){
      shoth2_ = "f";
      shoth2.velocityX=-7.8;
   }
   if(keyDown("right")){
      shoth3_ = "f";
      shoth3.velocityX=+7.8;
   }
   if(keyDown("down")){
      shoth4_ = "f";
      shoth4.velocityY=+7.8;
   }
  }
  if(game == "play"){
    if((shoth1.isTouching(enemy1))||(shoth3.isTouching(enemy2))||(shoth1.isTouching(enemy3))||(shoth1.isTouching(enemy4))){
      points = points+1;
      shoth1_ = "v";
    }
    if((shoth2.isTouching(enemy1))||(shoth2.isTouching(enemy2))||(shoth2.isTouching(enemy3))||(shoth2.isTouching(enemy4))){
      points = points+1;
      shoth2_ = "v";
    }
    if((shoth3.isTouching(enemy1))||(shoth1.isTouching(enemy2))||(shoth3.isTouching(enemy3))||(shoth3.isTouching(enemy4))){
      points = points+1;
      shoth3_ = "v";
    }
    if((shoth4.isTouching(enemy1))||(shoth4.isTouching(enemy2))||(shoth4.isTouching(enemy3))||(shoth4.isTouching(enemy4))){
      points = points+1;
      shoth4_ = "v";
    }
  }
  if(shoth1.isTouching(edges)){
    shoth1_ = "v";
  }
  if(shoth2.isTouching(edges)){
    shoth2_ = "v";
  }
  if(shoth3.isTouching(edges)){
    shoth3_ = "v";
  }
  if(shoth4.isTouching(edges)){
    shoth4_ = "v";
  }
  if(enemy1.isTouching(shoth1)||enemy1.isTouching(shoth2)||enemy1.isTouching(shoth3)||enemy1.isTouching(shoth4)){
    enemy1.x=350;
    enemy1.y=50;
  }
  if(enemy2.isTouching(shoth1)||enemy2.isTouching(shoth2)||enemy2.isTouching(shoth3)||enemy2.isTouching(shoth4)){
    enemy2.x=50;
    enemy2.y=50;
  }
  if(enemy3.isTouching(shoth1)||enemy3.isTouching(shoth2)||enemy3.isTouching(shoth3)||enemy3.isTouching(shoth4)){
    enemy3.x=50;
    enemy3.y=350;
  }
  if(enemy4.isTouching(shoth1)||enemy4.isTouching(shoth2)||enemy4.isTouching(shoth3)||enemy4.isTouching(shoth4)){
    enemy4.x=350;
    enemy4.y=350;
  }
  player.bounceOff(edges);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
