// Generated by CoffeeScript 1.6.2
/*

Using the element of Form in Creative Coding by using Grids. Based on example 2.1.2 in Generative Design. (http://www.generative-gestaltung.de/P_2_1_2_02)
*/


(function() {
  var coffee_draw;

  coffee_draw = function(p5) {
    var actRandomSeed, backColor, moduleColorBackground, moduleColorForeground, moduleRadiusBackground, moduleRadiusForeground, tileCount, yRot, yRotInc;

    tileCount = 4;
    actRandomSeed = 0;
    backColor = p5.color(255);
    moduleColorBackground = p5.color(127);
    moduleColorForeground = p5.color(0);
    moduleRadiusBackground = 150;
    moduleRadiusForeground = 100;
    yRot = 0.0;
    yRotInc = 0.001;
    p5.setup = function() {
      return p5.size($(window).width(), $(window).height(), p5.OPENGL);
    };
    p5.draw = function() {
      var gridX, gridY, gridZ, posX, posY, posZ, shiftX, shiftY, _i, _j, _k, _l, _ref, _ref1, _ref2, _ref3, _results;

      p5.translate(0, 0, -300);
      p5.translate(p5.width / 2, p5.height / 2, 0);
      p5.rotateX(yRot += yRotInc);
      p5.rotateY(yRot);
      p5.rotateZ(yRot);
      p5.rectMode(p5.CENTER);
      p5.translate(-p5.width / 2, -p5.height / 2, 0);
      p5.translate(p5.width / tileCount / 2, p5.height / tileCount / 2);
      p5.colorMode(p5.HSB, 360, 100, 100, 100);
      p5.background(backColor);
      p5.randomSeed(actRandomSeed);
      for (gridY = _i = 0, _ref = tileCount - 1; _i <= _ref; gridY = _i += 1) {
        for (gridX = _j = 0, _ref1 = tileCount - 1; _j <= _ref1; gridX = _j += 1) {
          for (gridZ = _k = 0, _ref2 = tileCount - 1; _k <= _ref2; gridZ = _k += 1) {
            posX = p5.width / tileCount * gridX;
            posY = p5.height / tileCount * gridY;
            posZ = p5.height / tileCount * gridZ * 2;
            p5.fill(moduleColorForeground);
            p5.pushMatrix();
            p5.translate(posX, posY, -posZ);
            p5.box(moduleRadiusForeground);
            p5.popMatrix();
          }
        }
      }
      p5.translate(0, 0, -moduleRadiusForeground * 1.2);
      _results = [];
      for (gridY = _l = 0, _ref3 = tileCount - 1; _l <= _ref3; gridY = _l += 1) {
        _results.push((function() {
          var _m, _ref4, _results1;

          _results1 = [];
          for (gridX = _m = 0, _ref4 = tileCount - 1; _m <= _ref4; gridX = _m += 1) {
            _results1.push((function() {
              var _n, _ref5, _results2;

              _results2 = [];
              for (gridZ = _n = 0, _ref5 = tileCount - 1; _n <= _ref5; gridZ = _n += 1) {
                posX = p5.width / tileCount * gridX;
                posY = p5.height / tileCount * gridY;
                posZ = p5.height / tileCount * gridZ * 2;
                shiftX = p5.random(-1, 1) * p5.mouseX / 20;
                shiftY = p5.random(-1, 1) * p5.mouseY / 20;
                p5.fill(moduleColorBackground);
                p5.pushMatrix();
                p5.translate(posX + shiftX, posY + shiftY, -posZ);
                p5.box(moduleRadiusBackground);
                _results2.push(p5.popMatrix());
              }
              return _results2;
            })());
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