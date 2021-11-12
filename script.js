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
const here = document.getElementById("here");
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

  if (window.innerWidth > 1100) {
    window.addEventListener("scroll", () => {
      // console.log("last img", leftDiv.getBoundingClientRect().bottom);
      //   console.log(document.body.scrollHeight);
      //   console.log("top", document.documentElement.scrollTop);
      // console.log("top", window.scrollY);
      // console.log("top", window.pageYOffset);

      if (window.pageYOffset < 1140) {
        app.classList.add("black");
        app.classList.remove("white");
      }

      if (window.pageYOffset > 1140 && window.pageYOffset < 1535) {
        app.classList.add("white");
        app.classList.remove("black");
      }

      if (window.pageYOffset > 1535 && window.pageYOffset < 4680) {
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

      if (window.pageYOffset > 4680 && window.pageYOffset < 5350) {
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

      if (window.pageYOffset > 5350 && window.pageYOffset < 5960) {
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
      if (window.pageYOffset > 5960) {
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
      // if (window.pageYOffset > 1535) {
      //   digit.style.display = "block";
      //   digit.classList.add("active");
      //   here.style.display = "none";
      // }
      // if (window.pageYOffset < 1535) {
      //   digit.style.display = "none";
      //   digit.classList.remove("active");
      //   here.style.display = "block";
      // }
      // leftDiv.style.top = `${window.pageYOffset}`;
    });
  } else {
    myFunction3();
    myFunction();
    myFunction2();
    // ipadPro(app,junc, junc1, junc2, watt2, watt1, watt, safe, safe1, safe2, digit, here);
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", () => {
        // console.log(900);
        // console.log("top", window.pageYOffset);

        if (window.pageYOffset < 1380) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1380 && window.pageYOffset < 1875) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1875 && window.pageYOffset < 5680) {
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

        if (window.pageYOffset > 5680 && window.pageYOffset < 6210) {
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

        if (window.pageYOffset > 6210 && window.pageYOffset < 6560) {
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
        if (window.pageYOffset > 6560) {
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

        // if (window.pageYOffset > 1875) {
        //   digit.style.display = "block";
        //   digit.classList.add("active");
        //   here.style.display = "none";
        // }
        // if (window.pageYOffset < 1875) {
        //   digit.style.display = "none";
        //   digit.classList.remove("active");
        //   here.style.display = "block";
        // }
      });
    }
    if (window.innerWidth < 900) {
      window.addEventListener("scroll", () => {
        // console.log(900);
        // console.log(window.innerWidth);
        // console.log("top", window.scrollY);

        if (window.pageYOffset < 1280) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1280 && window.pageYOffset < 1855) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1855 && window.pageYOffset < 7310) {
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

        if (window.pageYOffset > 7310 && window.pageYOffset < 8210) {
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

        if (window.pageYOffset > 8210 && window.pageYOffset < 9210) {
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
        if (window.pageYOffset > 9210) {
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

        // if (window.pageYOffset > 1855) {
        //   digit.style.display = "block";
        //   digit.classList.add("active");
        //   here.style.display = "none";
        // }
        // // setTimeout(function () {
        // if (window.pageYOffset < 1855) {
        //   digit.style.display = "none";
        //   digit.classList.remove("active");
        //   here.style.display = "block";
        // }
        // }, 1000);
      });
    }
    if (window.innerWidth < 600) {
      thirdImg.src = "./image/design.gif";
      window.addEventListener("scroll", () => {
        // console.log(600);
        // console.log(window.innerWidth);
        // console.log("top", window.scrollY);
        // if (window.pageYOffset > 1470) {
        //   digit.style.display = "block";
        //   digit.classList.add("active");
        //   here.style.display = "none";
        // }
        // // setTimeout(function () {
        // if (window.pageYOffset < 1470) {
        //   digit.style.display = "none";
        //   digit.classList.remove("active");
        //   here.style.display = "block";
        // }
        // }, 1000);

        if (window.pageYOffset < 1000) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1000 && window.pageYOffset < 1470) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1470 && window.pageYOffset < 6440) {
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

        if (window.pageYOffset > 6440 && window.pageYOffset < 7210) {
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

        if (window.pageYOffset > 7210 && window.pageYOffset < 8010) {
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
        if (window.pageYOffset > 8010) {
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
        // console.log(400);
        // console.log(window.innerWidth);
        // console.log("top", window.scrollY);
        // if (window.pageYOffset > 1320) {
        //   digit.style.display = "block";
        //   digit.classList.add("active");
        //   here.style.display = "none";
        // }
        // // setTimeout(function () {
        // if (window.pageYOffset < 1320) {
        //   digit.style.display = "none";
        //   digit.classList.remove("active");
        //   here.style.display = "block";
        // }
        // }, 1000);
        if (window.pageYOffset < 1000) {
          app.classList.add("black");
          app.classList.remove("white");
        }

        if (window.pageYOffset > 1000 && window.pageYOffset < 1320) {
          app.classList.add("white");
          app.classList.remove("black");
        }

        if (window.pageYOffset > 1320 && window.pageYOffset < 6340) {
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

        if (window.pageYOffset > 6340 && window.pageYOffset < 7110) {
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

        if (window.pageYOffset > 7110 && window.pageYOffset < 7910) {
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
        if (window.pageYOffset > 7910) {
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

  if ((digit.style.display = "block")) {
    setTimeout(() => {
      shade.classList.add("active");
      // here.style.display = "none";
    }, 300);
  } else {
    shade.classList.remove("active");
    // here.style.display = "block";
  }

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
  var offsets = [1320, 1470, 1855, 1875, 1535];

  windowSizes.forEach(function (eachSize, index) {
    if (isBetween(eachSize)) {
      resultIndex = index;
    }
  });

  return offsets[resultIndex];
}

// function widthToOffset() {
//   //   Hard coding px width & px yOffset values is a bad practice
//   var resultIndex;
//   var windowSizes = [
//     [0, 400],
//     [401, 600],
//     [601, 900],
//     [901, 1100],
//     [1100, 2600],
//   ];
//   var offsets = [1320, 1470, 1855, 1875, 1535];

//   windowSizes.forEach(function (eachSize, index) {
//     if (isBetween(eachSize)) {
//       resultIndex = index;
//     }
//   });

//   return offsets[resultIndex];
// }

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
  // white: () => {
  //   app.classList.add("white");
  //   app.classList.remove("black");
  // },
  // black: () => {
  //   app.classList.remove("white");
  //   app.classList.add("black");
  // },
};

function yOffsetHandler() {
  if (window.pageYOffset > changeOffset) {
    animate.in();
  } else {
    animate.out();
  }
}

var changeOffset;

window.addEventListener("load", function () {
  changeOffset = widthToOffset();
});

window.addEventListener("resize", function () {
  changeOffset = widthToOffset();
});

window.addEventListener("scroll", function (e) {
  yOffsetHandler();
});
