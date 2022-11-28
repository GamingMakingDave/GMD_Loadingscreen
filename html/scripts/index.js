var isMediaStopped = false
var player;
document.getElementById('LoadingVideo').setAttribute("src", "media/" + GMDLoadingscreen.BackgroundVideoFile);


window.addEventListener('DOMContentLoaded', () => {
  if (window.nuiHandoverData.gmdloadingscreen = "steam") {
    let getJson = JSON.parse(window.nuiHandoverData.json).response.players[0];
    $(".steamid").html(getJson.personaname);
  }
});
if (GMDLoadingscreen.AutoSnow) {
  $('#snow').show()
} else {
  $('#snow').hide()
}
if (GMDLoadingscreen.UseLogoIMG) {
  $('.logo').show()
} else {
  $('.logo').hide()
}
if (GMDLoadingscreen.BackgroundDots) {
  $('#dot').show()
} else {
  $('#dot').hide()
}
if (GMDLoadingscreen.UseBackground) {
  $('body').show()
  $('body').css("background-image", "url(media/" + GMDLoadingscreen.BackgroundIMG + ")");
} else {
  $('#LoadingVideo').show()
  $('body').css("background-image", "url(media/GMD-LoadingscreenError.jpg");
}
if (GMDLoadingscreen.UseLoadingTextandDots) {
  $('.box').show()

} else {
  $('.box').hide()
}
if (GMDLoadingscreen.DotsSwing) {
  $('.DotsSwing').show()

} else {
  $('.DotsSwing').hide()
}
if (GMDLoadingscreen.DotsPulseDots) {
  $('.PulseDots').show()

} else {
  $('.PulseDots').hide()
}
if (GMDLoadingscreen.DotsStyleJumping) {
  $('.dots-bars-4').show()

} else {
  $('.dots-bars-4').hide()
}
if (GMDLoadingscreen.UseBackgroundVideo) {
  $('#LoadingVideo').show()
} else {
  $('#LoadingVideo').hide()
}
if (GMDLoadingscreen.UseLoadingcycle) {
  $('.Loadingcontainer').show()
} else {
  $('.Loadingcontainer').hide()
}
if (GMDLoadingscreen.UseCourserIMG) {
  $('#cursor').show()
} else {
  $('#cursor').hide()
}
if (GMDLoadingscreen.UseSteamWelcomeText) {
  $('.Steamcontainer').show()
} else {
  $('.Steamcontainer').hide()
}
if (GMDLoadingscreen.UseButton) {
  $('.button').show()
} else {
  $('.button').hide()
}
if (GMDLoadingscreen.UseVolumeslider) {
  $('.slider').show()
} else {
  $('.slider').hide()
}
$('#stage').hide()
var pointer = $('#cursor');
$(document).on('mousemove', function (event) {
  pointer.css({
    top: event.pageY + 'px',
    left: event.pageX + 'px'
  });
});


$.getJSON("https://api.ipify.org/?format=json", function (e) { $(".characterinfo") });
$("audio").attr("src", "media/" + GMDLoadingscreen.Music);
$("#cursor").css("background", "url(media/" + GMDLoadingscreen.CourserIMG + ")");
$("#cursor").attr("src", "media/" + GMDLoadingscreen.CourserIMG);
$("#LoadingVideo").attr("src", "media/" + GMDLoadingscreen.BackgroundVideoFile);
$("span.welcometext").html(GMDLoadingscreen.SteamWelcomeText1);
//Logo
$(".logo img").attr("src", "media/" + GMDLoadingscreen.LogoIMG);
$(".logo").css('left', GMDLoadingscreen.LogoIMGPositionLeft);
$(".logo").css('top', GMDLoadingscreen.LogoIMGPositionTop);
$(".logo img").css('width', GMDLoadingscreen.LogoIMGSizeWidth);
$(".logo img").css('height', GMDLoadingscreen.LogoIMGSizeHeight);
//Box
$(".box .swap li").css('color', GMDLoadingscreen.LoadingTextColor);
$(".box").css('color', GMDLoadingscreen.LoadingTextColor);
$(".box").css('top', GMDLoadingscreen.LoadingTextandDotsPositionTop);
$(".box").css('right', GMDLoadingscreen.LoadingTextandDotsPosisitionRight);
//Volumeslider
$(".slider").css('top', GMDLoadingscreen.UseVolumesliderPositionTop);
$(".slider").css('left', GMDLoadingscreen.UseVolumesliderPositionLeft);
//Loadingcontainer
$(".loading-box").css('width', GMDLoadingscreen.LoadingCycleWidth);
$(".loading-box").css('height', GMDLoadingscreen.LoadingCycleHeight);
$(".Loadingcontainer").css('top', GMDLoadingscreen.LoadingCyclePositionTop);
$(".Loadingcontainer").css('left', GMDLoadingscreen.LoadingCyclePositionLeft);
$(".loading-box").css('border-color', GMDLoadingscreen.LoadingCycleColorBackLine);
$(".loading").css('border-color', GMDLoadingscreen.LoadingCycleColorInner);
//Steamcontainer
$("h2").css('color', GMDLoadingscreen.SteamWelcomeText1Color);
$("h2").css('font-size', GMDLoadingscreen.SteamWelcomeText1FontSize);
$("span.steamid").css('color', GMDLoadingscreen.SteamWelcomeText2Color);
$("span.steamid").css('font-size', GMDLoadingscreen.SteamWelcomeText2FontSize);
$(".Steamcontainer").css('top', GMDLoadingscreen.SteamWelcomePositionTop);
$(".Steamcontainer").css('left', GMDLoadingscreen.SteamWelcomePositionLeft);
$(".fa-steam").css('color', GMDLoadingscreen.SteamWelcomeIconColor);
//Dots
$(".dots-bars-4").css('color', GMDLoadingscreen.LoadingDotsColor);
$(".DotsSwing").css('color', GMDLoadingscreen.LoadingDotsSwingColor);
//Button
$(".button").css('width', GMDLoadingscreen.UseButtonWidht);
$(".button").css('height', GMDLoadingscreen.UseButtonHight);
$(".button").css('top', GMDLoadingscreen.UseButtonPositionTop);
$(".button").css('left', GMDLoadingscreen.UseButtonPositionLeft);
$(".button").css('background', GMDLoadingscreen.ButtonColorHex);
$(".button").css('color', GMDLoadingscreen.ButtonIconColorHex);

function RandomBackground() {
  var images = GMDLoadingscreen.RandomIMG
  var randomImage = Math.floor((Math.random() * images.length));
  $("body").css("background-image", "url('media/" + images[randomImage] + "')");
}

if (GMDLoadingscreen.RandomBackground) {
  setInterval(RandomBackground, 3 * GMDLoadingscreen.RandomBackgroundTime);
}

var canvasDots = function () {
  var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    colorDot = '#CECECE',
    color = '#CECECE';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  ctx.fillStyle = colorDot;
  ctx.lineWidth = .2;
  ctx.strokeStyle = color;

  var mousePosition = {
    x: 30 * canvas.width / 100,
    y: 30 * canvas.height / 100
  };

  var dots = {
    nb: 150,
    distance: 100,
    d_radius: 200,
    array: []
  };

  function Dot() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();

    this.radius = Math.random();
  }

  Dot.prototype = {
    create: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },

    animate: function () {
      for (i = 0; i < dots.nb; i++) {

        var dot = dots.array[i];

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vx = dot.vx;
          dot.vy = - dot.vy;
        }
        else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = - dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    },

    line: function () {
      for (i = 0; i < dots.nb; i++) {
        for (j = 0; j < dots.nb; j++) {
          i_dot = dots.array[i];
          j_dot = dots.array[j];

          if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance) {
            if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius) {
              ctx.beginPath();
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }
  };

  function createDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < dots.nb; i++) {
      dots.array.push(new Dot());
      dot = dots.array[i];

      dot.create();
    }

    dot.line();
    dot.animate();
  }

  window.onmousemove = function (parameter) {
    mousePosition.x = parameter.pageX;
    mousePosition.y = parameter.pageY;
  }

  mousePosition.x = window.innerWidth / 2;
  mousePosition.y = window.innerHeight / 2;

  setInterval(createDots, 1000 / 80);
};

window.onload = function () {
  canvasDots();
};

function aud_play_pause() {
  var myAudio = document.getElementById("music");
  myAudio.volume = GMDLoadingscreen.MusicVolume;
  if (isMediaStopped) {
    myAudio.play();
    isMediaStopped = false;
    document.getElementById('button123').className = 'fa-solid fa-pause';
    play = false;
  } else {
    myAudio.pause();
    isMediaStopped = true;
    document.getElementById('button123').className = 'fa-solid fa-play';
  }
}

function loop($swap) {
  var next = $swap.find("li.visible").removeClass("visible").index() + 0;
  var randomTimer = Math.round(Math.random() * 10);
  if (next >= $swap.find("li").length) {
    next = Math.round(Math.random() * 1);
  }

  $swap.width($($swap.find("li").get(next)).addClass("visible").outerWidth());
  $swap.css({ "transform": "translateY(-" + next * 0 + "rem)" });

  setTimeout(function () { loop($swap); }, randomTimer * 1000);
};

$(function () {
  $(".swap").each(function () {
    var $this = $(this);

    $this.find("li").each(function () {
      $(this).css({ top: $(this).index() * 0 + "rem" });
    });

    loop($this);
  });
});




$("input").on("change mousemove", function () {
  var value = $(this).val();
  $("#volume").text(value + "%");
});

let volume = document.getElementById('rngVolume');
var myAudio = document.getElementById("music");
myAudio.volume = GMDLoadingscreen.MusicVolume;
volume.addEventListener("change", function (e) {
  myAudio.volume = e.currentTarget.value / 100;
})




function function1() { // die function für dich
  var ul = document.getElementsByClassName("swap");
  for (let i = 0; i < GMDLoadingscreen.LoadingTexts.length; i++) {
    var li = document.createElement("li"); /// element erstellen
    li.setAttribute("class", "LadetextLI")
    li.appendChild(document.createTextNode(GMDLoadingscreen.LoadingTexts[i])); // name
    ul[0].appendChild(li); // element anhängen

  }
}
function1()