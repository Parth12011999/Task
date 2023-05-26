function slideBottom() {
    var slideInBottom = document.querySelectorAll(".slide-in-bottom");
  
    for (var i = 0; i < slideInBottom.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slideInBottom[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        slideInBottom[i].classList.add("active");
      } else {
        slideInBottom[i].classList.remove("active");
      }
    }
  }

  function slideLeft() {
    var slideInLeft = document.querySelectorAll(".slide-in-left");
  
    for (var i = 0; i < slideInLeft.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slideInLeft[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        slideInLeft[i].classList.add("active1");
      } else {
        slideInLeft[i].classList.remove("active1");
      }
    }
  }
  
  function slideRight() {
    var slideInRight = document.querySelectorAll(".slide-in-right");
  
    for (var i = 0; i < slideInRight.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slideInRight[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        slideInRight[i].classList.add("active2");
      } else {
        slideInRight[i].classList.remove("active2");
      }
    }
  }
  window.addEventListener("scroll", slideBottom);
  window.addEventListener("scroll", slideLeft);
  window.addEventListener("scroll", slideRight);