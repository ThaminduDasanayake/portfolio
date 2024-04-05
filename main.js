/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*================ scroll section active link ================*/

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar =====================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*============= remove toggle icon and navbar ============*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*============= scroll reveal ============*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .projects-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*============= contact form ============*/

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emailSubject = document.getElementById("emailSubject").value;
    var message = document.getElementById("message").value;

    //Validation checks
    if (
      fullName === "" ||
      email === "" ||
      mobileNumber === "" ||
      emailSubject === "" ||
      message === ""
    ) {
      event.preventDefault(); // Prevent form submission
      alert("Please fill out all fields.");
      return;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      event.preventDefault(); // Prevent form submission
      alert("Please enter a valid email address.");
      return;
    }

    // Mobile number validation
    var mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobileNumber)) {
      event.preventDefault(); // Prevent form submission
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // List of multiple email addresses separated by commas
    var email = ["thamindudasanayake@gmail.com"];

    // Construct mailto URL with multiple email addresses
    var mailtoUrl =
      "mailto:" +
      email +
      "?subject=" +
      encodeURIComponent(emailSubject) +
      "&body=" +
      encodeURIComponent(
        "Name: " +
          fullName +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "Mobile Number: " +
          mobileNumber +
          "\n" +
          "Message: " +
          message
      );

    // Open the mail client
    window.location.href = mailtoUrl;
  });
