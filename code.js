var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eebab056-101b-4af8-a456-02ddd71e5a66","7645bcab-12b7-43d6-b705-f45eb353755c"],"propsByKey":{"eebab056-101b-4af8-a456-02ddd71e5a66":{"name":"pera","frameCount":1,"frameSize":{"x":206,"y":300},"looping":true,"frameDelay":2,"categories":["food"],"jsonLastModified":"2021-01-12 02:54:39 UTC","pngLastModified":"2021-01-12 02:54:40 UTC","version":"HjLCaZjSSdIw3Y4vGKCyeEhMN9RGDqWD","sourceUrl":"assets/api/v1/animation-library/gamelab/HjLCaZjSSdIw3Y4vGKCyeEhMN9RGDqWD/category_food/pear.png","sourceSize":{"x":206,"y":300},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/HjLCaZjSSdIw3Y4vGKCyeEhMN9RGDqWD/category_food/pear.png"},"7645bcab-12b7-43d6-b705-f45eb353755c":{"name":"cobra","categories":["animals"],"frameCount":1,"frameSize":{"x":397,"y":360},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:22:43 UTC","pngLastModified":"2021-01-05 18:22:44 UTC","version":"DHUr9pQX3Hts6iuS8VMOwyysxYwEGrl5","sourceUrl":"assets/api/v1/animation-library/gamelab/DHUr9pQX3Hts6iuS8VMOwyysxYwEGrl5/category_animals/cobra.png","sourceSize":{"x":397,"y":360},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/DHUr9pQX3Hts6iuS8VMOwyysxYwEGrl5/category_animals/cobra.png"}}};
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

var cobra = createSprite(200,200,20,20);
cobra.setAnimation("cobra");
cobra.scale = 0.08;

var comida = createSprite(200,100,20,20);
comida.setAnimation("pera");
comida.scale = 0.08;

var parede1 = createSprite(200,0,400,1);
parede1.shapeColor = "white";
var parede2 = createSprite(200,400,400,1);
parede2.shapeColor = "white";
var parede3 = createSprite(0,200,1,400);
parede3.shapeColor = "white";
var parede4 = createSprite(400,200,1,400);
parede4.shapeColor = "white";

var placar = 0;
var tempo = 0;
function draw() {
  background("white");
  
  tempo = World.frameCount;
  if(cobra.isTouching(parede1)||cobra.isTouching(parede2)||cobra.isTouching(parede3)||cobra.isTouching(parede4)){
    cobra.x = 200;
    cobra.y = 200;
    placar = 0;
  }
  
  mover();
  if(cobra.isTouching(comida)){
    comida.x = Math.round(random(3,397));
    comida.y = Math.round(random(3,397));
    placar = placar+1;
  }
  fill(0);
  text("Pontuação: "+placar,50,50);
  text("Tempo: "+tempo,50,30);
  drawSprites();
}
function mover(){
  if(keyDown("up")){
    cobra.y =cobra.y-6;
  }
  if(keyDown("down")){
    cobra.y = cobra.y+6;
  }
  if(keyDown("left")){
    cobra.x = cobra.x-6;
  }
  if(keyDown("right")){
    cobra.x = cobra.x+6;
  }
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
