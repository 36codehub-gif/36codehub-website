document.addEventListener("DOMContentLoaded", () => {
    
    // Mobile Navigation Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close Nav Menu on Link Click
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // Animated Counter
    const counters = document.querySelectorAll(".counter");
    let animated = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const increment = target / 50;

            const updateCounter = () => {
                const current = +counter.innerText;
                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCounter();
        });
    };

    // Scroll Trigger for Counter Animation
    window.addEventListener("scroll", () => {
        const statsSection = document.querySelector(".stats-section");
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !animated) {
            startCounters();
            animated = true;
        }
    });

    // Contact Form Submission (WhatsApp Integration)
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("clientName").value;
        const contact = document.getElementById("clientContact").value;
        const service = document.getElementById("serviceType").value;
        const message = document.getElementById("projectMessage").value;

        // WhatsApp Direct Redirect Message
        const whatsappMessage = `*New Website Inquiry for 36CodeHub*%0A%0A*Name:* ${name}%0A*Contact:* ${contact}%0A*Service Required:* ${service}%0A*Project Details:* ${message}`;
        
        const phoneNumber = "919111717276";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        alert(`Thank you ${name}! Opening WhatsApp to process your request directly.`);
        window.open(whatsappUrl, '_blank');

        contactForm.reset();
    });
});
