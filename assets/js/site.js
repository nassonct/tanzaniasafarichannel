(function () {
  function initializeActiveNavigation() {
    var activePath = document.body.dataset.activePath;
    if (!activePath) {
      return;
    }

    document
      .querySelectorAll("#main-nav a[data-path]")
      .forEach(function (link) {
        if (link.getAttribute("data-path") === activePath) {
          if (activePath === "car-rentals.html") {
            link.classList.add("text-secondary-fixed-dim", "font-semibold");
          } else if (activePath === "honeymoon.html") {
            link.classList.add(
              "text-secondary",
              "font-semibold",
              "border-b-2",
              "border-secondary-container",
            );
            link.classList.remove("text-on-surface");
          } else {
            link.classList.add(
              "text-secondary-fixed-dim",
              "border-b-2",
              "border-secondary-container",
              "font-semibold",
              "pb-1",
            );
            link.classList.remove("text-on-surface");
          }
        }
      });
  }

  function initializeAboutPage() {
    if (!document.querySelector(".reveal-on-scroll")) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".reveal-on-scroll").forEach(function (element) {
      observer.observe(element);
    });

    var nav = document.getElementById("main-nav");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        nav.classList.add("bg-primary", "shadow-lg");
        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-primary", "shadow-lg");
      }
    });

    var firstAccordion = document.querySelector(".group.cursor-pointer");
    if (firstAccordion) {
      firstAccordion.classList.add("active");
    }
  }

  function initializeDestinationPage() {
    if (!document.querySelector(".safari-grid-card")) {
      return;
    }

    var nav = document.getElementById("main-nav");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        nav.classList.add("bg-primary", "shadow-lg");
        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.remove("bg-primary", "shadow-lg");
        nav.classList.add("bg-transparent");
      }
    });

    document.querySelectorAll(".safari-grid-card").forEach(function (card) {
      var image = card.querySelector("img");
      if (!image) {
        return;
      }
      card.addEventListener("mouseenter", function () {
        image.style.transform = "scale(1.1)";
      });
      card.addEventListener("mouseleave", function () {
        image.style.transform = "scale(1)";
      });
    });
  }

  function initializeHomePage() {
    var searchInput = document.getElementById("destination-search-input");
    if (!searchInput) {
      return;
    }

    searchInput.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") {
        return;
      }

      var query = searchInput.value.trim().toLowerCase();
      if (query.includes("zanzibar") || query.includes("beach")) {
        window.location.href = "honeymoon.html";
      } else if (
        query.includes("car") ||
        query.includes("4x4") ||
        query.includes("rental")
      ) {
        window.location.href = "car-rentals.html";
      } else if (query.includes("tour") || query.includes("kilimanjaro")) {
        window.location.href = "foreigner-tours.html";
      } else {
        var destinations = document.getElementById("destinations");
        if (destinations) {
          destinations.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }

  function initializeInquiryPage() {
    window.handleSafariSubmit = function () {
      var form = document.getElementById("safari-inquiry-form");
      var successBlock = document.getElementById("inquiry-success");
      var refNumber = "TZ-" + Math.floor(10000 + Math.random() * 90000);
      var refElement = document.getElementById("success-ref");

      if (refElement) {
        refElement.textContent = refNumber;
      }

      if (form && successBlock) {
        form.classList.add("hidden");
        successBlock.classList.remove("hidden");
        successBlock.classList.add("flex");
        successBlock.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    var resetButton = document.getElementById("reset-inquiry-btn");
    if (resetButton) {
      resetButton.addEventListener("click", function () {
        var form = document.getElementById("safari-inquiry-form");
        var successBlock = document.getElementById("inquiry-success");
        if (form && successBlock) {
          form.reset();
          successBlock.classList.add("hidden");
          successBlock.classList.remove("flex");
          form.classList.remove("hidden");
          form.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }

  function initializeKilimanjaroPage() {
    if (document.body.dataset.page !== "kilimanjaro") {
      return;
    }

    var nav = document.getElementById("main-nav");
    if (!nav) {
      return;
    }

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        nav.classList.add("bg-white", "shadow-sm");
        nav.classList.remove("bg-transparent");
        nav.querySelectorAll("a").forEach(function (link) {
          if (!link.classList.contains("text-secondary-container")) {
            link.classList.add("text-primary");
            link.classList.remove("text-white");
          }
        });
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-white", "shadow-sm");
        nav.querySelectorAll("a").forEach(function (link) {
          if (!link.classList.contains("text-secondary-container")) {
            link.classList.add("text-white");
            link.classList.remove("text-primary");
          }
        });
      }
    });
  }

  function initializeNgorongoroPage() {
    if (document.body.dataset.page !== "ngorongoro") {
      return;
    }

    var nav = document.getElementById("main-nav");
    if (!nav) {
      return;
    }

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        nav.classList.add("bg-primary/95", "backdrop-blur-sm", "py-4");
        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-primary/95", "backdrop-blur-sm", "py-4");
      }
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("stagger-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll("section h2, section p, section .group")
      .forEach(function (element) {
        element.style.opacity = "0";
        observer.observe(element);
      });
  }

  function initializeSerengetiPage() {
    if (document.body.dataset.page !== "serengeti") {
      return;
    }

    var nav = document.getElementById("main-nav");
    if (!nav) {
      return;
    }

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        nav.classList.add("sticky-nav-active");
        nav.classList.remove("bg-transparent");
        nav.querySelector("nav").classList.remove("py-6");
        nav.querySelector("nav").classList.add("py-3");
      } else {
        nav.classList.remove("sticky-nav-active");
        nav.classList.add("bg-transparent");
        nav.querySelector("nav").classList.add("py-6");
        nav.querySelector("nav").classList.remove("py-3");
      }
    });

    window.addEventListener("scroll", function () {
      document.querySelectorAll(".bg-fixed").forEach(function (element) {
        element.style.backgroundPositionY = window.pageYOffset * 0.4 + "px";
      });
    });
  }

  function initializeZanzibarPage() {
    var nav = document.getElementById("top-nav");
    if (!nav) {
      return;
    }

    window.addEventListener("scroll", function () {
      var links = nav.querySelectorAll("a");
      if (window.scrollY > 50) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("bg-white/95", "backdrop-blur-sm", "shadow-sm");
        links.forEach(function (link) {
          if (!link.classList.contains("text-secondary-container")) {
            link.classList.remove("text-white");
            link.classList.add("text-primary");
          }
        });
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-white/95", "backdrop-blur-sm", "shadow-sm");
        links.forEach(function (link) {
          if (!link.classList.contains("text-secondary-container")) {
            link.classList.add("text-white");
            link.classList.remove("text-primary");
          }
        });
      }
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("section").forEach(function (section) {
      section.classList.add(
        "transition-all",
        "duration-1000",
        "opacity-0",
        "translate-y-10",
      );
      observer.observe(section);
    });
  }

  function initializeSite() {
    initializeActiveNavigation();
    initializeAboutPage();
    initializeDestinationPage();
    initializeHomePage();
    initializeInquiryPage();
    initializeKilimanjaroPage();
    initializeNgorongoroPage();
    initializeSerengetiPage();
    initializeZanzibarPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSite);
  } else {
    initializeSite();
  }
})();
