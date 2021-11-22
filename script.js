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

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

var a = true;
var b = false;

let loada = () => {
  if (a) {
    one.classList.add("active");
    first1.classList.add("active");
    firstImg.src = "./image/Website.gif";
    one.addEventListener("animationend", () => {
      one.classList.remove("active");
      two.classList.add("active");
      first.classList.remove("active");
      third.classList.remove("active");
      second.classList.add("active");
      first1.classList.remove("active");
      third3.classList.remove("active");
      second2.classList.add("active");
      firstImg.style.display = "none";
      secondImg.style.display = "block";
      thirdImg.style.display = "none";
      secondImg.src = "./image/vid.gif";
      firstImg.src = "#";
    });
    two.addEventListener("animationend", () => {
      two.classList.remove("active");
      three.classList.add("active");
      third.classList.add("active");
      second.classList.remove("active");
      first1.classList.remove("active");
      third3.classList.add("active");
      second2.classList.remove("active");
      firstImg.style.display = "none";
      secondImg.style.display = "none";
      thirdImg.style.display = "block";
      thirdImg.src = "./image/Web-design.gif";
      if (window.innerWidth < 900) {
        thirdImg.src = "./image/design.gif";
      }
      secondImg.src = "#";
    });
    three.addEventListener("animationend", () => {
      three.classList.remove("active");
      one.classList.add("active");
      first.classList.add("active");
      second.classList.remove("active");
      third.classList.remove("active");
      first1.classList.add("active");
      second2.classList.remove("active");
      third3.classList.remove("active");
      firstImg.style.display = "block";
      secondImg.style.display = "none";
      thirdImg.style.display = "none";
      firstImg.src = "./image/Website.gif";
      if (window.innerWidth < 1100) {
        firstImg.src = "./image/website2.gif";
      }
      thirdImg.src = "#";
    });
  }
};

const oneClick = () => {
  one.classList.add("active");
  three.classList.remove("active");
  two.classList.remove("active");
  first.classList.add("active");
  second.classList.remove("active");
  third.classList.remove("active");
  first1.classList.add("active");
  second2.classList.remove("active");
  third3.classList.remove("active");
  firstImg.style.display = "block";
  secondImg.style.display = "none";
  thirdImg.style.display = "none";
  firstImg.src = "./image/Website.gif";
  if (window.innerWidth < 1100) {
    firstImg.src = "./image/website2.gif";
  }
  thirdImg.src = "#";
  secondImg.src = "#";
};

const twoClick = () => {
  one.classList.remove("active");
  three.classList.remove("active");
  two.classList.add("active");
  first.classList.remove("active");
  third.classList.remove("active");
  second.classList.add("active");
  first1.classList.remove("active");
  third3.classList.remove("active");
  second2.classList.add("active");
  firstImg.style.display = "none";
  secondImg.style.display = "block";
  thirdImg.style.display = "none";
  secondImg.src = "./image/vid.gif";
  thirdImg.src = "#";
  firstImg.src = "#";
};

const threeClick = () => {
  two.classList.remove("active");
  one.classList.remove("active");
  three.classList.add("active");
  third.classList.add("active");
  second.classList.remove("active");
  first.classList.remove("active");
  first1.classList.remove("active");
  third3.classList.add("active");
  second2.classList.remove("active");
  firstImg.style.display = "none";
  secondImg.style.display = "none";
  thirdImg.style.display = "block";
  thirdImg.src = "./image/Web-design.gif";
  if (window.innerWidth < 900) {
    thirdImg.src = "./image/design.gif";
  }
  firstImg.src = "#";
  secondImg.src = "#";
};

const afterLoad = () => {
  loada();

  function myFunction3() {
    firstImg.src = "./image/website2.gif";
  }

  if (window.innerWidth > 900) {
    window.addEventListener("scroll", () => {
      var scaleAsp =
        document.documentElement.scrollTop -
        here.getBoundingClientRect().top -
        1000;
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
        here.getBoundingClientRect().top + 1000
      ) {
        blackCerckle.style.transform =
          "scale(" + scaleAsp + ", " + scaleAsp + ")";
      } else {
        blackCerckle.style.transform = "scale(0,0)";
      }
    });
  } else {
    window.addEventListener("scroll", () => {
      var scaleAsp =
        document.documentElement.scrollTop -
        here.getBoundingClientRect().top -
        1200;
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
        here.getBoundingClientRect().top + 1200
      ) {
        blackCerckle.style.transform =
          "scale(" + scaleAsp + ", " + scaleAsp + ")";
      } else {
        blackCerckle.style.transform = "scale(0,0)";
      }
    });
  }

  if (window.innerWidth > 1100) {
    window.addEventListener("scroll", () => {
      // console.log(window.pageYOffset);
      if (window.pageYOffset < 1140) {
        app.classList.add("black");
        app.classList.remove("white");
      }

      if (window.pageYOffset > 1140 && window.pageYOffset < 2035) {
        app.classList.add("white");
        app.classList.remove("black");
      }

      if (window.pageYOffset > 2035 && window.pageYOffset < 5380) {
        app.classList.add("black");
        app.classList.remove("white");
        junc.classList.add("inactive");
        junc.classList.remove("aactive");
        watt.classList.add("inactive");
        watt.classList.remove("aactive");
      }

      if (window.pageYOffset > 5380 && window.pageYOffset < 5950) {
        app.classList.add("white");
        app.classList.remove("black");
        junc.classList.add("aactive");
        junc.classList.remove("inactive");
        watt.classList.add("aactive");
        watt.classList.remove("inactive");
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
      }
      if (window.pageYOffset > 6760) {
        app.classList.add("white");
        app.classList.remove("black");
        safe.classList.add("aactive");
        safe.classList.remove("inactive");
      }
    });
  } else {
    myFunction3();
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", () => {
        // console.log(window.pageYOffset);
        if (window.pageYOffset < 1380) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1380 && window.pageYOffset < 2055) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 2055 && window.pageYOffset < 5380) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("inactive");
          junc.classList.remove("aactive");
        }

        if (window.pageYOffset > 5380 && window.pageYOffset < 5910) {
          app.classList.add("white");
          app.classList.remove("black");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("aactive");
          watt.classList.remove("inactive");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
        }

        if (window.pageYOffset > 5910 && window.pageYOffset < 6500) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          safe.classList.add("inactive");
          safe.classList.remove("aactive");
          last2.classList.add("inactive");
          last2.classList.remove("aactive");
        }
        if (window.pageYOffset > 6500) {
          app.classList.add("white");
          app.classList.remove("black");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
          last2.classList.remove("inactive");
          last2.classList.add("aactive");
        }
      });
    }
    if (window.innerWidth < 900) {
      window.addEventListener("scroll", () => {
        // console.log(window.pageYOffset);
        if (window.pageYOffset < 1280) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1280 && window.pageYOffset < 1855) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1855 && window.pageYOffset < 7810) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("inactive");
          junc.classList.remove("aactive");
        }

        if (window.pageYOffset > 7810 && window.pageYOffset < 8690) {
          app.classList.add("white");
          app.classList.remove("black");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("aactive");
          watt.classList.remove("inactive");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
        }

        if (window.pageYOffset > 8690 && window.pageYOffset < 9610) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          safe.classList.add("inactive");
          safe.classList.remove("aactive");
          last2.classList.add("inactive");
          last2.classList.remove("aactive");
        }
        if (window.pageYOffset > 9610) {
          app.classList.add("white");
          app.classList.remove("black");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
          last2.classList.remove("inactive");
          last2.classList.add("aactive");
        }
      });
    }
    if (window.innerWidth < 600) {
      // thirdImg.src = "./image/design.gif";
      window.addEventListener("scroll", () => {
        // console.log(window.pageYOffset);
        if (window.pageYOffset < 1000) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1000 && window.pageYOffset < 1870) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1870 && window.pageYOffset < 7240) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("inactive");
          junc.classList.remove("aactive");
        }

        if (window.pageYOffset > 7240 && window.pageYOffset < 7910) {
          app.classList.add("white");
          app.classList.remove("black");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("aactive");
          watt.classList.remove("inactive");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
        }

        if (window.pageYOffset > 7910 && window.pageYOffset < 8710) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          safe.classList.add("inactive");
          safe.classList.remove("aactive");
          last2.classList.add("inactive");
          last2.classList.remove("aactive");
        }
        if (window.pageYOffset > 8710) {
          app.classList.add("white");
          app.classList.remove("black");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
          last2.classList.remove("inactive");
          last2.classList.add("aactive");
        }
      });
    }
    if (window.innerWidth < 400) {
      thirdImg.src = "./image/design.gif";
      window.addEventListener("scroll", () => {
        // console.log(window.pageYOffset);
        if (window.pageYOffset < 1000) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1000 && window.pageYOffset < 1720) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1720 && window.pageYOffset < 7100) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("inactive");
          junc.classList.remove("aactive");
        }

        if (window.pageYOffset > 7100 && window.pageYOffset < 7780) {
          app.classList.add("white");
          app.classList.remove("black");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("aactive");
          watt.classList.remove("inactive");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
        }

        if (window.pageYOffset > 7780 && window.pageYOffset < 8490) {
          app.classList.add("black");
          app.classList.remove("white");
          junc.classList.add("aactive");
          junc.classList.remove("inactive");
          watt.classList.add("inactive");
          watt.classList.remove("aactive");
          safe.classList.add("inactive");
          safe.classList.remove("aactive");
          last2.classList.add("inactive");
          last2.classList.remove("aactive");
        }
        if (window.pageYOffset > 8490) {
          app.classList.add("white");
          app.classList.remove("black");
          safe.classList.add("aactive");
          safe.classList.remove("inactive");
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

  white.addEventListener("mouseenter", () => {
    text.innerHTML = "";
    text.appendChild(document.createElement("img")).src =
      "./image/blackMail.png";
  });

  white.addEventListener("mouseleave", () => {
    text.innerHTML = "Get in touch";
  });

  blackBtn.addEventListener("mouseenter", () => {
    btext.innerHTML = "";
    btext.appendChild(document.createElement("img")).src =
      "./image/whiteMail.png";
  });

  blackBtn.addEventListener("mouseleave", () => {
    btext.innerHTML = "Get in touch";
  });
};

window.addEventListener("load", () => afterLoad());
window.addEventListener("resize", () => afterLoad());

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
  var offsets = [1720, 1870, 2055, 2055, 2035];

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
  var offsets = [1780, 1850, 2155, 2105, 2135];

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
