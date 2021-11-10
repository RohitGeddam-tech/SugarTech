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
      if (window.pageYOffset > 1535) {
        digit.style.display = "block";
        digit.classList.add("active");
        here.style.display = "none";
      }
      if (window.pageYOffset < 1535) {
        digit.style.display = "none";
        digit.classList.remove("active");
        here.style.display = "block";
      }
      // leftDiv.style.top = `${window.pageYOffset}`;
    });
  } else {
    myFunction3();
    myFunction();
    myFunction2();
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", () => {
        // console.log("top", window.scrollY);
        if (window.pageYOffset > 1875) {
          digit.style.display = "block";
          digit.classList.add("active");
          here.style.display = "none";
        }
        if (window.pageYOffset < 1875) {
          digit.style.display = "none";
          digit.classList.remove("active");
          here.style.display = "block";
        }
      });
    }
    if (window.innerWidth < 900) {
      window.addEventListener("scroll", () => {
        // console.log("top", window.scrollY);
        if (window.pageYOffset > 1855) {
          digit.style.display = "block";
          digit.classList.add("active");
          here.style.display = "none";
        }
        if (window.pageYOffset < 1855) {
          digit.style.display = "none";
          digit.classList.remove("active");
          here.style.display = "block";
        }
      });
    }
    if (window.innerWidth < 600) {
      thirdImg.src = "./image/design.gif";
      window.addEventListener("scroll", () => {
        // console.log("top", window.scrollY);
        if (window.pageYOffset > 1500) {
          digit.style.display = "block";
          digit.classList.add("active");
          here.style.display = "none";
        }
        if (window.pageYOffset < 1500) {
          digit.style.display = "none";
          digit.classList.remove("active");
          here.style.display = "block";
        }
      });
    }
    if (window.innerWidth < 400) {
      thirdImg.src = "./image/design.gif";
      window.addEventListener("scroll", () => {
        // console.log("top", window.scrollY);
        if (window.pageYOffset > 1320) {
          digit.style.display = "block";
          digit.classList.add("active");
          here.style.display = "none";
        }
        if (window.pageYOffset < 1320) {
          digit.style.display = "none";
          digit.classList.remove("active");
          here.style.display = "block";
        }
      });
    }
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
