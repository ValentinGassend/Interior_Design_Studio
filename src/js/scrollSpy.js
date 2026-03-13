document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".Header-nav--item");

    const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Detects when section is roughly in the middle 20% of screen
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                // Update URL hash without jumping
                if (history.replaceState) {
                    history.replaceState(null, null, `#${id}`);
                } else {
                    location.hash = `#${id}`;
                }

                // Optional: Update active state in navigation
                navItems.forEach((item) => {
                    item.classList.remove("active");
                    if (item.getAttribute("href").includes(`#${id}`)) {
                        item.classList.add("active");
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));
});
