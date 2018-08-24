(function() {
  // Define elements
  var contacts = document.querySelector(".contact-content-group");
  var form = document.querySelector("#inline-contact");
  var formControl = document.querySelector(".form-control");
  var skillsdiv = document.querySelector("#skills");
  var skills = document.querySelector(".skills-icons");
  var icons = document.querySelectorAll(".skills-icons i");
  var iconsT = document.querySelector(".skills-icons p");
  var hero = document.querySelector("#hero");
  var burger = document.querySelector(".burger");
  // Helper functions
  function toggleColor(e) {
    if (e.target.tagName === "I") {
      e.target.classList.toggle("colored");
    }
  }
  // Hover events
  skills.addEventListener("mouseover", function(e) {
    toggleColor(e);
  });
  skills.addEventListener("mouseout", function(e) {
    toggleColor(e);
  });
  // Click Events
  contacts.addEventListener("click", function(e) {
    switch (e.target.className) {
      case "contact-content-group-content contact-content-group-content-email":
        form.style.transform = "none";
        break;
    }
  });
  formControl.addEventListener("click", function(e) {
    switch (e.target.className) {
      case "form-control-return":
        form.style.transform = "translate3d(0,-100%,0)";
        break;
    }
  });
  // Scroll events
  window.addEventListener("scroll", function(e) {
    var scrollTop = window.scrollY;
    if (
      scrollTop > skillsdiv.offsetTop - skillsdiv.offsetHeight / 2 &&
      !icons[0].classList.contains("slide-in")
    ) {
      var i = 0;
      icons.forEach(function(icon) {
        setTimeout(function() {
          icon.classList.add("slide-in");
        }, 150 * i++);
      });
    }
  });
})();
