document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalImg = modal.querySelector(".ProjectModal-img");
    const modalTitle = modal.querySelector(".ProjectModal-title");
    const modalNumber = modal.querySelector(".ProjectModal-number");
    const closeBtn = modal.querySelector(".ProjectModal-close");
    const projectItems = document.querySelectorAll(".Project-item");

    const openModal = (e) => {
        // Prevent opening if user is dragging the swiper
        // Swiper adds 'swiper-slide-active' etc but we can check if the movement was minimal
        const item = e.currentTarget;
        const img = item.querySelector(".Project-item-img");
        const title = item.querySelector(".Project-item-content-title");
        const number = item.querySelector(".Project-item-content-number");

        modalImg.src = img.src;
        modalTitle.textContent = title.textContent;
        modalNumber.textContent = number.textContent;

        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    };

    const closeModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Restore scrolling
    };

    projectItems.forEach(item => {
        item.addEventListener("click", openModal);
        item.style.cursor = "pointer"; // Clarify it's clickable
    });

    closeBtn.addEventListener("click", closeModal);

    // Close on click outside content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });
});
