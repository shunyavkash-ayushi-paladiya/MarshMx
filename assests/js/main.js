document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".privacy-left-a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

                document.querySelectorAll(".privacy-left-a").forEach(anchor => {
                    anchor.classList.remove("active-link");
                });

                this.classList.add("active-link");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openReportsBtn = document.getElementById("openModals");
    const reportModal = document.getElementById("report-modals");
    const closeReportsBtn = document.querySelector(".close-icon");
    const body = document.body;

    if (openReportsBtn && reportModal && closeReportsBtn) {
        openReportsBtn.addEventListener("click", function () {
            reportModal.classList.add("show");
            body.style.overflow = "hidden";
        });

        closeReportsBtn.addEventListener("click", function () {
            reportModal.classList.remove("show");
            body.style.overflow = "auto";
        });

        reportModal.addEventListener("click", function (e) {
            if (e.target === reportModal) {
                reportModal.classList.remove("show");
                body.style.overflow = "auto";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
       
    const openModalBtn = document.getElementById('openModal');
    const myModal = document.getElementById('myModal');
    const closeModalBtn = myModal?.querySelector('.close'); 

    if (openModalBtn && myModal && closeModalBtn) {
        openModalBtn.addEventListener('click', function() {
            myModal.style.display = 'flex';
            $("body").css('overflow', "hidden");
        });
        closeModalBtn.addEventListener('click', function() {
            myModal.style.display = 'none';
            $("body").css('overflow', "auto");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const valueBikeForm = document.getElementById("value-bike-form");

    document.getElementById("contact-form-tab").addEventListener("change", function () {
        contactForm.style.display = "block";
        valueBikeForm.style.display = "none";
    });

    document.getElementById("value-bike-tab").addEventListener("change", function () {
        contactForm.style.display = "none";
        valueBikeForm.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openReportsBtn = document.getElementById("open-Modals");
    const reportModal = document.getElementById("cart-modals");
    const closeReportsBtn = document.querySelector(".cart-close-icon");
    const body = document.body;

    if (openReportsBtn && reportModal && closeReportsBtn) {
        openReportsBtn.addEventListener("click", function () {
            reportModal.classList.add("show");
            body.style.overflow = "hidden";
        });

        closeReportsBtn.addEventListener("click", function () {
            reportModal.classList.remove("show");
            body.style.overflow = "auto";
        });

        reportModal.addEventListener("click", function (e) {
            if (e.target === reportModal) {
                reportModal.classList.remove("show");
                body.style.overflow = "auto";
            }
        });
    }
});

