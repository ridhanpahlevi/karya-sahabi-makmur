document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".site-nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        event.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
