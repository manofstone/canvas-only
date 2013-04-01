// Generated by CoffeeScript 1.6.2
(function() {
  var coffee_draw;

  coffee_draw = function(p5) {
    var myBangs;

    myBangs = new Array();
    p5.setup = function() {
      var bang, i, _i, _results;

      p5.size($(window).width(), $(window).height());
      p5.rectMode(p5.CENTER);
      _results = [];
      for (i = _i = 1; _i <= 3; i = _i += 1) {
        bang = new window.UISimple.UIBang(p5, {
          x: p5.width / 2 + 100 * i - 200,
          y: 50,
          width: 30,
          height: 30,
          color: p5.color(127),
          name: "bang" + i
        });
        _results.push(myBangs.push(bang));
      }
      return _results;
    };
    p5.draw = function() {
      var b, size, _i, _len, _results;

      p5.background(200);
      size = 200 + p5.sin(p5.frameCount / 100) * 100;
      p5.noStroke();
      p5.fill(127, 127);
      p5.rect(p5.width / 2, p5.height / 2, size, size);
      _results = [];
      for (_i = 0, _len = myBangs.length; _i < _len; _i++) {
        b = myBangs[_i];
        _results.push(b.display());
      }
      return _results;
    };
    return p5.mousePressed = function() {
      var b, _i, _len, _results;

      _results = [];
      for (_i = 0, _len = myBangs.length; _i < _len; _i++) {
        b = myBangs[_i];
        if (b.within(p5.mouseX, p5.mouseY)) {
          switch (b.name) {
            case "bang1":
              _results.push(b.color = p5.color(255, 0, 0));
              break;
            case "bang2":
              _results.push(b.color = p5.color(0, 255, 0));
              break;
            case "bang3":
              b.color = p5.color(0, 0, 255);
              _results.push(b.loc.y += 50);
              break;
            default:
              _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
  };

  /* do not edit below
  */


  $(window).resize(function() {
    return processing.size($(window).width(), $(window).height());
  });

  $(document).ready(function() {
    window.canvas = document.getElementById("p5canvas");
    return window.processing = new Processing(canvas, coffee_draw);
  });

}).call(this);