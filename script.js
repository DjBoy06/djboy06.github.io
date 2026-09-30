```javascript
/* =========================
   MOBILE NAVIGATION
========================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});


/* Close mobile menu after clicking a link */

const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
    });
});


/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-button");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        const filter =
            button.dataset.filter;


        projectCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform =
                        "translateY(0)";
                }, 10);

            } else {

                card.style.opacity = "0";
                card.style.transform =
                    "translateY(10px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 200);
            }

        });

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .devlog-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =========================
   CURRENT YEAR
========================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const year =
        new Date().getFullYear();

    copyright.textContent =
        `© ${year} DJ. Built with curiosity.`;
}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("main section");

const navLinks =
    document.querySelectorAll(".navbar nav a");


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {
                        link.classList.remove("active");
                    });


                    const activeLink =
                        document.querySelector(
                            `.navbar nav a[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {
                        activeLink.classList.add("active");
                    }

                }

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(section => {
    sectionObserver.observe(section);
});
```
