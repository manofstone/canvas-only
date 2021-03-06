// Generated by CoffeeScript 1.6.2
/*

Using the element of Form in Creative Coding by using Grids. Based on example 2.1.2 in Generative Design. (http://www.generative-gestaltung.de/P_2_1_2_02)
*/


(function() {
  var coffee_draw;

  coffee_draw = function(p5) {
    var actRandomSeed, backColor, moduleAlphaBackground, moduleAlphaForeground, moduleColorBackground, moduleColorForeground, moduleRadiusBackground, moduleRadiusForeground, tileCount;

    tileCount = 10;
    actRandomSeed = 0;
    backColor = p5.color(255);
    moduleColorBackground = p5.color(0);
    moduleColorForeground = p5.color(255);
    moduleAlphaBackground = 100;
    moduleAlphaForeground = 100;
    moduleRadiusBackground = 30;
    moduleRadiusForeground = 15;
    p5.setup = function() {
      return p5.size($(window).width(), $(window).height());
    };
    p5.draw = function() {
      var gridX, gridY, posX, posY, shiftX, shiftY, _i, _j, _k, _results;

      p5.translate(p5.width / tileCount / 2, p5.height / tileCount / 2);
      p5.colorMode(p5.HSB, 360, 100, 100, 100);
      p5.background(backColor);
      p5.smooth();
      p5.noStroke();
      p5.randomSeed(actRandomSeed);
      for (gridY = _i = 0; _i <= tileCount; gridY = _i += 1) {
        for (gridX = _j = 0; _j <= tileCount; gridX = _j += 1) {
          posX = p5.width / tileCount * gridX;
          posY = p5.height / tileCount * gridY;
          shiftX = p5.random(-1, 1) * p5.mouseX / 20;
          shiftY = p5.random(-1, 1) * p5.mouseY / 20;
          p5.fill(moduleColorBackground, moduleAlphaBackground);
          p5.ellipse(posX + shiftX, posY + shiftY, moduleRadiusBackground, moduleRadiusBackground);
        }
      }
      _results = [];
      for (gridY = _k = 0; _k <= tileCount; gridY = _k += 1) {
        _results.push((function() {
          var _l, _results1;

          _results1 = [];
          for (gridX = _l = 0; _l <= tileCount; gridX = _l += 1) {
            posX = p5.width / tileCount * gridX;
            posY = p5.height / tileCount * gridY;
            p5.fill(moduleColorForeground, moduleAlphaForeground);
            _results1.push(p5.ellipse(posX, posY, moduleRadiusForeground, moduleRadiusForeground));
          }
          return _results1;
        })());
      }
      return _results;
    };
    return p5.mousePressed = function() {
      return actRandomSeed = p5.floor(p5.random(100000));
    };
  };

  /* do not edit below
  */


  $(window).resize(function() {
    return processing.size($(window).width(), $(window).height());
  });

  $(document).ready(function() {
    var canvas;

    canvas = document.getElementById("p5canvas");
    return window.processing = new Processing(canvas, coffee_draw);
  });

}).call(this);
