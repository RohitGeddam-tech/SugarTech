const firstComp = document.getElementById("firstComp");
const first = document.getElementById("1");
const second = document.getElementById("2");
const third = document.getElementById("3");
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

// console.warn("left bound: ",leftDiv.getBoundingClientRect().top);
window.addEventListener("scroll", () => {
  //   console.log("last img", thirdImg.getBoundingClientRect().top);
  //   console.log(document.body.scrollHeight);
  //   console.log("top", document.documentElement.scrollTop);
  console.log("top", window.scrollY);

  if (window.pageYOffset < 5) {
    first.classList.add("active");
    second.classList.remove("active");
    third.classList.remove("active");
    firstImg.style.display="block";
    secondImg.style.display='none';
    thirdImg.style.display='none';
    // console.warn("firstImg active");
  }
  if (window.pageYOffset > 10) {
    first.classList.remove("active");
    third.classList.remove("active");
    second.classList.add("active");
    firstImg.style.display="none";
    secondImg.style.display='block';
    thirdImg.style.display = "none";
    // console.warn("secondImg active");
  }
  if (window.pageYOffset > 30) {
    third.classList.add("active");
    second.classList.remove("active");
    firstImg.style.display="none";
    secondImg.style.display='none';
    thirdImg.style.display='block';
    // console.warn("secondImg active");
  }
  if (window.pageYOffset > 40) {
    leftDiv.style.opacity = "0";
  } else {
    leftDiv.style.opacity = "1";
  }
  if (window.pageYOffset > 40) {
    aDiv.style.opacity = "1";
    aDiv.style.zIndex = "90";
  } else {
    aDiv.style.opacity = "0";
    aDiv.style.zIndex = "70";
  }
  if (window.pageYOffset > 1100) {
    scrolled.style.opacity = "0";
    leftDiv.style.position = "absolute";
  } else {
    scrolled.style.opacity = "1";
    leftDiv.style.position = "fixed";
  }
  if (window.pageYOffset > 1315) {
    digit.style.display = "block";
    digit.classList.add("active");
    here.style.display = "none";
  } else {
    digit.style.display = "none";
    digit.classList.remove("active");
    here.style.display = "block";
  }
  // leftDiv.style.top = `${window.pageYOffset}`;
});

if ((digit.style.display = "block")) {
  setTimeout(() => {
    shade.classList.add("active");
    // here.style.display = "none";
  }, 300);
} else {
  shade.classList.remove("active");
  // here.style.display = "block";
}
