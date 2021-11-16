const firstComp = document.getElementById("firstComp");
const first = document.getElementById("1");
const second = document.getElementById("2");
const third = document.getElementById("3");
const first1 = document.getElementById("a");
const second2 = document.getElementById("b");
const third3 = document.getElementById("c");
// const last = document.getElementById("last");
const firstImg = document.getElementById("firstImg");
const secondImg = document.getElementById("secondImg");
const thirdImg = document.getElementById("thirdImg");
const fourthImg = document.getElementById("fourthImg");
const leftDiv = document.getElementById("left");
const aDiv = document.getElementById("parta");
const scrolled = document.getElementById("bottomScroll");
const digit = document.getElementById("digit");
const shade = document.getElementById("shade");
// const here = document.getElementById("here");
const white = document.getElementById("whiteBtn");
const white2 = document.getElementById("whiteBtn2");
const blackBtn = document.getElementById("blackBtn");
const text = document.getElementById("text");
const btext = document.getElementById("btext");
const ctext = document.getElementById("ctext");
const contain = document.getElementById("contain");
const app = document.getElementById("app");
const watt = document.getElementById("watt");
const safe = document.getElementById("safe");
const junc = document.getElementById("junc");
const watt1 = document.getElementById("watt1");
const safe1 = document.getElementById("safe1");
const junc1 = document.getElementById("junc1");
const watt2 = document.getElementById("watt2");
const safe2 = document.getElementById("safe2");
const junc2 = document.getElementById("junc2");
const last2 = document.getElementById("secondLast");

var here = document.getElementById("cerckleAnimMain");
var rightBoxesRef = document.getElementById("rightBoxesRef");
var leftBoxesRef = document.getElementById("leftBoxesRef");
var blackCerckle = document.getElementById("blackCerckle");

window.addEventListener("load", () => {
  // console.warn("left bound: ",leftDiv.getBoundingClientRect().top);

  function myFunction3() {
    first1.classList.add("active");
    third3.classList.remove("active");
    second2.classList.remove("active");
    firstImg.src = "./image/website2.gif";
  }

  function myFunction() {
    setTimeout(function () {
      first1.classList.remove("active");
      third3.classList.remove("active");
      second2.classList.add("active");
      firstImg.style.display = "none";
      secondImg.style.display = "block";
      thirdImg.style.display = "none";
    }, 5000);
  }

  function myFunction2() {
    setTimeout(function () {
      third3.classList.add("active");
      first1.classList.remove("active");
      second2.classList.remove("active");
      firstImg.style.display = "none";
      secondImg.style.display = "none";
      thirdImg.style.display = "block";
    }, 10000);
  }

  window.addEventListener("scroll", () => {
    var scaleAsp =
      document.documentElement.scrollTop -
      here.getBoundingClientRect().top -
      900;
    if (
      document.documentElement.scrollTop >
      cerckleAnimMain.getBoundingClientRect().top + 300
    ) {
      leftBoxesRef.style.transform =
        "translateY(" + here.getBoundingClientRect().top * 2 + "px)";
      rightBoxesRef.style.transform =
        "translateY(-" + here.getBoundingClientRect().top * 2 + "px)";
    }
    if (
      document.documentElement.scrollTop >
      here.getBoundingClientRect().top + 900
    ) {
      blackCerckle.style.transform =
        "scale(" + scaleAsp + ", " + scaleAsp + ")";
    } else {
      blackCerckle.style.transform = "scale(0,0)";
    }
  });

  if (window.innerWidth > 1100) {
    window.addEventListener("scroll", () => {
      // console.log("last img", leftDiv.getBoundingClientRect().bottom);
      //   console.log(document.body.scrollHeight);
      //   console.log("top", document.documentElement.scrollTop);
      // console.log("top", window.scrollY);
      // console.log("top", window.pageYOffset);

      // if (scaleAsp > window.innerWidth + 40) {
      //   blackCerckle.style.opacity = "0";
      // } else {
      //   blackCerckle.style.opacity = "1";
      // }

      if (window.pageYOffset < 1140) {
        app.classList.add("black");
        app.classList.remove("white");
      }

      if (window.pageYOffset > 1140 && window.pageYOffset < 2035) {
        app.classList.add("white");
        app.classList.remove("black");
      }

      if (window.pageYOffset > 2035 && window.pageYOffset < 5680) {
        app.classList.add("black");
        app.classList.remove("white");
        junc.classList.add("inactive");
        junc.classList.remove("aactive");
        junc1.classList.remove("blackbord");
        junc1.classList.add("whitebord");
        junc2.classList.remove("blackbord");
        junc2.classList.add("whitebord");
        watt.classList.add("inactive");
        watt.classList.remove("aactive");
      }

      if (window.pageYOffset > 5680 && window.pageYOffset < 5950) {
        app.classList.add("white");
        app.classList.remove("black");
        junc.classList.add("aactive");
        junc.classList.remove("inactive");
        watt.classList.add("aactive");
        watt.classList.remove("inactive");
        junc1.classList.add("blackbord");
        junc1.classList.remove("whitebord");
        watt1.classList.add("blackbord");
        watt1.classList.remove("whitebord");
        safe1.classList.add("blackbord");
        safe1.classList.remove("whitebord");
        junc2.classList.remove("whitebord");
        junc2.classList.add("blackbord");
        watt2.classList.add("blackbord");
        watt2.classList.remove("whitebord");
        safe2.classList.add("blackbord");
        safe2.classList.remove("whitebord");
      }

      if (window.pageYOffset > 5950 && window.pageYOffset < 6760) {
        app.classList.add("black");
        app.classList.remove("white");
        junc.classList.add("aactive");
        junc.classList.remove("inactive");
        watt.classList.add("inactive");
        watt.classList.remove("aactive");
        safe.classList.add("inactive");
        safe.classList.remove("aactive");
        junc1.classList.remove("blackbord");
        junc1.classList.add("whitebord");
        watt1.classList.remove("blackbord");
        watt1.classList.add("whitebord");
        safe1.classList.remove("blackbord");
        safe1.classList.add("whitebord");
        junc2.classList.remove("blackbord");
        junc2.classList.add("whitebord");
        watt2.classList.remove("blackbord");
        watt2.classList.add("whitebord");
        safe2.classList.remove("blackbord");
        safe2.classList.add("whitebord");
      }
      if (window.pageYOffset > 6760) {
        app.classList.add("white");
        app.classList.remove("black");
        safe.classList.add("aactive");
        safe.classList.remove("inactive");
        safe1.classList.add("blackbord");
        safe1.classList.remove("whitebord");
        safe2.classList.add("blackbord");
        safe2.classList.remove("whitebord");
      }

      if (window.pageYOffset < 20) {
        first.classList.add("active");
        second.classList.remove("active");
        third.classList.remove("active");
        firstImg.style.display = "block";
        secondImg.style.display = "none";
        thirdImg.style.display = "none";
        // console.warn("firstImg active");
      }
      if (window.pageYOffset > 20) {
        first.classList.remove("active");
        third.classList.remove("active");
        second.classList.add("active");
        firstImg.style.display = "none";
        secondImg.style.display = "block";
        thirdImg.style.display = "none";
        // console.warn("secondImg active");
      }
      if (window.pageYOffset > 40) {
        third.classList.add("active");
        second.classList.remove("active");
        firstImg.style.display = "none";
        secondImg.style.display = "none";
        thirdImg.style.display = "block";
        // console.warn("secondImg active");
      }
      if (window.pageYOffset > 90) {
        leftDiv.style.opacity = "0";
        leftDiv.style.position = "absolute";
      } else {
        leftDiv.style.opacity = "1";
        leftDiv.style.position = "fixed";
      }
      if (window.pageYOffset > 90) {
        aDiv.style.opacity = "1";
        aDiv.style.zIndex = "90";
      } else {
        aDiv.style.opacity = "0";
        aDiv.style.zIndex = "70";
      }
      if (window.pageYOffset > 100) {
        scrolled.style.opacity = "0";
      } else {
        scrolled.style.opacity = "1";
      }
    });
  } else {
    myFunction3();
    myFunction();
    myFunction2();
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset < 1380) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1380 && window.pageYOffset < 2505) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 2505 && window.pageYOffset < 6280) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("inactive");
          junc.classList.remove("aactive");
          junc1.classList.remove("blackbord");
          junc1.classList.add("whitebord");
          junc2.classList.remove("blackbord");
          junc2.classList.add("whitebord");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          watt1.classList.remove("blackbord");
          watt1.classList.add("whitebord");
          watt2.classList.remove("blackbord");
          watt2.classList.add("whitebord");
        }

        if (window.pageYOffset > 6280 && window.pageYOffset < 6710) {
          app.classList.add("white");
          app.classList.remove("black");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("aactive");
          watt.classList.remove("inactive");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
          junc1.classList.add("blackbord");
          junc1.classList.remove("whitebord");
          watt1.classList.add("blackbord");
          watt1.classList.remove("whitebord");
          safe1.classList.add("blackbord");
          safe1.classList.remove("whitebord");
          junc2.classList.remove("whitebord");
          junc2.classList.add("blackbord");
          watt2.classList.add("blackbord");
          watt2.classList.remove("whitebord");
          safe2.classList.add("blackbord");
          safe2.classList.remove("whitebord");
        }

        if (window.pageYOffset > 6710 && window.pageYOffset < 7260) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          safe.classList.add("inactive");
          safe.classList.remove("aactive");
          junc1.classList.remove("blackbord");
          junc1.classList.add("whitebord");
          watt1.classList.remove("blackbord");
          watt1.classList.add("whitebord");
          safe1.classList.remove("blackbord");
          safe1.classList.add("whitebord");
          junc2.classList.remove("blackbord");
          junc2.classList.add("whitebord");
          watt2.classList.remove("blackbord");
          watt2.classList.add("whitebord");
          safe2.classList.remove("blackbord");
          safe2.classList.add("whitebord");
          last2.classList.add("inactive");
          last2.classList.remove("aactive");
        }
        if (window.pageYOffset > 7260) {
          app.classList.add("white");
          app.classList.remove("black");
          safe.classList.add("aactive");
          watt1.classList.add("blackbord");
          watt1.classList.remove("whitebord");
          watt2.classList.add("blackbord");
          watt2.classList.remove("whitebord");
          safe.classList.remove("inactive");
          safe1.classList.add("blackbord");
          safe1.classList.remove("whitebord");
          safe2.classList.add("blackbord");
          safe2.classList.remove("whitebord");
          last2.classList.remove("inactive");
          last2.classList.add("aactive");
        }
      });
    }
    if (window.innerWidth < 900) {
      window.addEventListener("scroll", () => {
        console.log(window.pageYOffset);
        if (window.pageYOffset < 1280) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1280 && window.pageYOffset < 1855) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1855 && window.pageYOffset < 7610) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("inactive");
          junc.classList.remove("aactive");
          junc1.classList.remove("blackbord");
          junc1.classList.add("whitebord");
          junc2.classList.remove("blackbord");
          junc2.classList.add("whitebord");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          watt1.classList.remove("blackbord");
          watt1.classList.add("whitebord");
          watt2.classList.remove("blackbord");
          watt2.classList.add("whitebord");
        }

        if (window.pageYOffset > 7610 && window.pageYOffset < 8610) {
          app.classList.add("white");
          app.classList.remove("black");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("aactive");
          watt.classList.remove("inactive");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
          junc1.classList.add("blackbord");
          junc1.classList.remove("whitebord");
          watt1.classList.add("blackbord");
          watt1.classList.remove("whitebord");
          safe1.classList.add("blackbord");
          safe1.classList.remove("whitebord");
          junc2.classList.remove("whitebord");
          junc2.classList.add("blackbord");
          watt2.classList.add("blackbord");
          watt2.classList.remove("whitebord");
          safe2.classList.add("blackbord");
          safe2.classList.remove("whitebord");
        }

        if (window.pageYOffset > 8610 && window.pageYOffset < 9610) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          safe.classList.add("inactive");
          safe.classList.remove("aactive");
          junc1.classList.remove("blackbord");
          junc1.classList.add("whitebord");
          watt1.classList.remove("blackbord");
          watt1.classList.add("whitebord");
          safe1.classList.remove("blackbord");
          safe1.classList.add("whitebord");
          junc2.classList.remove("blackbord");
          junc2.classList.add("whitebord");
          watt2.classList.remove("blackbord");
          watt2.classList.add("whitebord");
          safe2.classList.remove("blackbord");
          safe2.classList.add("whitebord");
          last2.classList.add("inactive");
          last2.classList.remove("aactive");
        }
        if (window.pageYOffset > 9610) {
          app.classList.add("white");
          app.classList.remove("black");
          safe.classList.add("aactive");
          watt1.classList.add("blackbord");
          watt1.classList.remove("whitebord");
          watt2.classList.add("blackbord");
          watt2.classList.remove("whitebord");
          safe.classList.remove("inactive");
          safe1.classList.add("blackbord");
          safe1.classList.remove("whitebord");
          safe2.classList.add("blackbord");
          safe2.classList.remove("whitebord");
          last2.classList.remove("inactive");
          last2.classList.add("aactive");
        }
      });
    }
    if (window.innerWidth < 600) {
      thirdImg.src = "./image/design.gif";
      window.addEventListener("scroll", () => {
        if (window.pageYOffset < 1000) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1000 && window.pageYOffset < 1670) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1670 && window.pageYOffset < 6840) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("inactive");
          junc.classList.remove("aactive");
          junc1.classList.remove("blackbord");
          junc1.classList.add("whitebord");
          junc2.classList.remove("blackbord");
          junc2.classList.add("whitebord");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          watt1.classList.remove("blackbord");
          watt1.classList.add("whitebord");
          watt2.classList.remove("blackbord");
          watt2.classList.add("whitebord");
        }

        if (window.pageYOffset > 6840 && window.pageYOffset < 7610) {
          app.classList.add("white");
          app.classList.remove("black");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("aactive");
          watt.classList.remove("inactive");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
          junc1.classList.add("blackbord");
          junc1.classList.remove("whitebord");
          watt1.classList.add("blackbord");
          watt1.classList.remove("whitebord");
          safe1.classList.add("blackbord");
          safe1.classList.remove("whitebord");
          junc2.classList.remove("whitebord");
          junc2.classList.add("blackbord");
          watt2.classList.add("blackbord");
          watt2.classList.remove("whitebord");
          safe2.classList.add("blackbord");
          safe2.classList.remove("whitebord");
        }

        if (window.pageYOffset > 7610 && window.pageYOffset < 8410) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          safe.classList.add("inactive");
          safe.classList.remove("aactive");
          junc1.classList.remove("blackbord");
          junc1.classList.add("whitebord");
          watt1.classList.remove("blackbord");
          watt1.classList.add("whitebord");
          safe1.classList.remove("blackbord");
          safe1.classList.add("whitebord");
          junc2.classList.remove("blackbord");
          junc2.classList.add("whitebord");
          watt2.classList.remove("blackbord");
          watt2.classList.add("whitebord");
          safe2.classList.remove("blackbord");
          safe2.classList.add("whitebord");
          last2.classList.add("inactive");
          last2.classList.remove("aactive");
        }
        if (window.pageYOffset > 8410) {
          app.classList.add("white");
          app.classList.remove("black");
          safe.classList.add("aactive");
          watt1.classList.add("blackbord");
          watt1.classList.remove("whitebord");
          watt2.classList.add("blackbord");
          watt2.classList.remove("whitebord");
          safe.classList.remove("inactive");
          safe1.classList.add("blackbord");
          safe1.classList.remove("whitebord");
          safe2.classList.add("blackbord");
          safe2.classList.remove("whitebord");
          last2.classList.remove("inactive");
          last2.classList.add("aactive");
        }
      });
    }
    if (window.innerWidth < 400) {
      thirdImg.src = "./image/design.gif";
      window.addEventListener("scroll", () => {
        if (window.pageYOffset < 1000) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1000 && window.pageYOffset < 1620) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1620 && window.pageYOffset < 6740) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("inactive");
          junc.classList.remove("aactive");
          junc1.classList.remove("blackbord");
          junc1.classList.add("whitebord");
          junc2.classList.remove("blackbord");
          junc2.classList.add("whitebord");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          watt1.classList.remove("blackbord");
          watt1.classList.add("whitebord");
          watt2.classList.remove("blackbord");
          watt2.classList.add("whitebord");
        }

        if (window.pageYOffset > 6740 && window.pageYOffset < 7510) {
          app.classList.add("white");
          app.classList.remove("black");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("aactive");
          watt.classList.remove("inactive");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
          junc1.classList.add("blackbord");
          junc1.classList.remove("whitebord");
          watt1.classList.add("blackbord");
          watt1.classList.remove("whitebord");
          safe1.classList.add("blackbord");
          safe1.classList.remove("whitebord");
          junc2.classList.remove("whitebord");
          junc2.classList.add("blackbord");
          watt2.classList.add("blackbord");
          watt2.classList.remove("whitebord");
          safe2.classList.add("blackbord");
          safe2.classList.remove("whitebord");
        }

        if (window.pageYOffset > 7510 && window.pageYOffset < 8310) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          safe.classList.add("inactive");
          safe.classList.remove("aactive");
          junc1.classList.remove("blackbord");
          junc1.classList.add("whitebord");
          watt1.classList.remove("blackbord");
          watt1.classList.add("whitebord");
          safe1.classList.remove("blackbord");
          safe1.classList.add("whitebord");
          junc2.classList.remove("blackbord");
          junc2.classList.add("whitebord");
          watt2.classList.remove("blackbord");
          watt2.classList.add("whitebord");
          safe2.classList.remove("blackbord");
          safe2.classList.add("whitebord");
          last2.classList.add("inactive");
          last2.classList.remove("aactive");
        }
        if (window.pageYOffset > 8310) {
          app.classList.add("white");
          app.classList.remove("black");
          safe.classList.add("aactive");
          watt1.classList.add("blackbord");
          watt1.classList.remove("whitebord");
          watt2.classList.add("blackbord");
          watt2.classList.remove("whitebord");
          safe.classList.remove("inactive");
          safe1.classList.add("blackbord");
          safe1.classList.remove("whitebord");
          safe2.classList.add("blackbord");
          safe2.classList.remove("whitebord");
          last2.classList.remove("inactive");
          last2.classList.add("aactive");
        }
      });
    }
  }

  if (window.innerWidth > 1510) {
    const container = contain.getBoundingClientRect();
    console.log(container.left);
    leftDiv.style.left = `${container.left}px`;
  }

  // if ((digit.style.opacity = "1")) {
  //   setTimeout(() => {
  //     shade.classList.add("active");
  //     // here.style.display = "none";
  //   }, 2000);
  // } else {
  //   shade.classList.remove("active");
  //   // here.style.display = "block";
  // }

  white.addEventListener("mouseenter", () => {
    text.innerHTML = "";
    text.appendChild(document.createElement("img")).src =
      "./image/blackMail.png";
  });

  white.addEventListener("mouseleave", () => {
    text.innerHTML = "Get in touch";
  });

  white2.addEventListener("mouseenter", () => {
    ctext.innerHTML = "";
    ctext.appendChild(document.createElement("img")).src =
      "./image/blackMail.png";
  });

  white2.addEventListener("mouseleave", () => {
    ctext.innerHTML = "Get in touch";
  });

  blackBtn.addEventListener("mouseenter", () => {
    btext.innerHTML = "";
    btext.appendChild(document.createElement("img")).src =
      "./image/whiteMail.png";
  });

  blackBtn.addEventListener("mouseleave", () => {
    btext.innerHTML = "Get in touch";
  });

  // if (window.addEventListener)
  //   window.addEventListener("DOMMouseScroll", wheel, false);
  // window.onmousewheel = document.onmousewheel = wheel;

  // function wheel(event) {
  //   var delta = 0;
  //   if (event.wheelDelta) delta = event.wheelDelta / 120;
  //   else if (event.detail) delta = -event.detail / 3;

  //   handle(delta);
  //   if (event.preventDefault) event.preventDefault();
  //   event.returnValue = false;
  // }

  // function handle(delta) {
  //   var time = 1000;
  //   var distance = 300;

  //   $("html, body")
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $(window).scrollTop() - distance * delta,
  //       },
  //       time
  //     );
  // }
});

digit.classList.remove("active");

function isBetween(range) {
  var screenWidth = window.innerWidth;
  var min = Math.min.apply(screenWidth, range);
  var max = Math.max.apply(screenWidth, range);
  return screenWidth > min && screenWidth < max;
}

//link ka color baat kr.
//animation to black and white background.

function widthToOffset() {
  //   Hard coding px width & px yOffset values is a bad practice
  var resultIndex;
  var windowSizes = [
    [0, 400],
    [401, 600],
    [601, 900],
    [901, 1100],
    [1100, 2600],
  ];
  var offsets = [1720, 1870, 2255, 2475, 2135];

  windowSizes.forEach(function (eachSize, index) {
    if (isBetween(eachSize)) {
      resultIndex = index;
    }
  });

  return offsets[resultIndex];
}

function shadeOffset() {
  //   Hard coding px width & px yOffset values is a bad practice
  var resultIndex;
  var windowSizes = [
    [0, 400],
    [401, 600],
    [601, 900],
    [901, 1100],
    [1100, 2600],
  ];
  var offsets = [1720, 1970, 2355, 2775, 2335];

  windowSizes.forEach(function (eachSize, index) {
    if (isBetween(eachSize)) {
      resultIndex = index;
    }
  });

  return offsets[resultIndex];
}

var animate = {
  in: function () {
    digit.classList.remove("hide");
    digit.classList.add("on");
    here.classList.add("hide");
    here.classList.remove("on");
  },
  out: function () {
    digit.classList.add("hide");
    digit.classList.remove("on");
    here.classList.remove("hide");
    here.classList.add("on");
  },
  shade_in: function () {
    shade.classList.add("active");
  },
  shade_out: function () {
    shade.classList.remove("active");
  },
};

function yOffsetHandler() {
  if (window.pageYOffset > changeOffset) {
    animate.in();
  } else {
    animate.out();
  }
  if (window.pageYOffset > activeOffset) {
    animate.shade_in();
  } else {
    animate.shade_out();
  }
}

var changeOffset;

window.addEventListener("load", function () {
  changeOffset = widthToOffset();
});

window.addEventListener("resize", function () {
  changeOffset = widthToOffset();
});

window.addEventListener("load", function () {
  activeOffset = shadeOffset();
});

window.addEventListener("resize", function () {
  activeOffset = shadeOffset();
});

window.addEventListener("scroll", function (e) {
  yOffsetHandler();
});
