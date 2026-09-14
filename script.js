document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       LOADING SCREEN
    ================================= */

    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("loaded");

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }, 1200);
    }


    /* ================================
       CUSTOM CURSOR
    ================================= */

    const cursor = document.querySelector(".custom-cursor");

    if (cursor) {

        document.addEventListener("mousemove", (e) => {

            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            document.documentElement.style.setProperty(
                "--mouse-x",
                e.clientX + "px"
            );

            document.documentElement.style.setProperty(
                "--mouse-y",
                e.clientY + "px"
            );

        });

        document.addEventListener("mousedown", () => {
            cursor.classList.add("clicking");
        });

        document.addEventListener("mouseup", () => {
            cursor.classList.remove("clicking");
        });

    }


    /* ================================
       CLICK WATER RIPPLE
    ================================= */

    document.addEventListener("click", (e) => {

        const ripple = document.createElement("div");

        ripple.className = "water-ripple";

        ripple.style.left = e.clientX + "px";
        ripple.style.top = e.clientY + "px";

        document.body.appendChild(ripple);


        for (let i = 0; i < 10; i++) {

            const particle = document.createElement("span");

            particle.className = "splash-particle";

            particle.style.left = e.clientX + "px";
            particle.style.top = e.clientY + "px";

            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 90;

            particle.style.setProperty(
                "--x",
                Math.cos(angle) * distance + "px"
            );

            particle.style.setProperty(
                "--y",
                Math.sin(angle) * distance + "px"
            );

            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 900);
        }


        setTimeout(() => {
            ripple.remove();
        }, 900);

    });


    /* ================================
       EXTRA CLICK BUBBLES
    ================================= */

    document.addEventListener("click", (e) => {

        for (let i = 0; i < 5; i++) {

            const bubble = document.createElement("span");

            bubble.className = "abyss-bubble";

            bubble.style.left =
                e.clientX + (Math.random() * 40 - 20) + "px";

            bubble.style.top =
                e.clientY + (Math.random() * 30 - 10) + "px";

            bubble.style.setProperty(
                "--bubble-size",
                4 + Math.random() * 12 + "px"
            );

            bubble.style.setProperty(
                "--bubble-x",
                (Math.random() * 100 - 50) + "px"
            );

            document.body.appendChild(bubble);

            setTimeout(() => {
                bubble.remove();
            }, 1800);

        }

    });


    /* ================================
       PARTICLES
    ================================= */

    const particlesContainer =
        document.querySelector(".particles");

    if (particlesContainer) {

        for (let i = 0; i < 80; i++) {

            const particle = document.createElement("span");

            particle.className = "particle";

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.top =
                Math.random() * 100 + "%";

            particle.style.animationDelay =
                Math.random() * 8 + "s";

            particle.style.animationDuration =
                5 + Math.random() * 8 + "s";

            particlesContainer.appendChild(particle);

        }

    }


    /* ================================
       BUBBLES
    ================================= */

    const bubblesContainer =
        document.querySelector(".bubbles");

    if (bubblesContainer) {

        for (let i = 0; i < 35; i++) {

            const bubble = document.createElement("span");

            bubble.className = "bubble";

            bubble.style.left =
                Math.random() * 100 + "%";

            bubble.style.animationDelay =
                Math.random() * 12 + "s";

            bubble.style.animationDuration =
                7 + Math.random() * 10 + "s";

            bubble.style.width =
                3 + Math.random() * 12 + "px";

            bubble.style.height =
                bubble.style.width;

            bubblesContainer.appendChild(bubble);

        }

    }


    /* ================================
       FISH SCHOOL
    ================================= */

    const fishContainer =
        document.querySelector(".fish-school");

    if (fishContainer) {

        const fishTypes = ["🐠", "🐟", "🐡", "🐠", "🐟"];

        for (let i = 0; i < 12; i++) {

            const fish = document.createElement("span");

            fish.className = "fish";

            fish.textContent =
                fishTypes[Math.floor(Math.random() * fishTypes.length)];

            fish.style.top =
                10 + Math.random() * 75 + "%";

            fish.style.animationDelay =
                Math.random() * 15 + "s";

            fish.style.animationDuration =
                12 + Math.random() * 15 + "s";

            fish.style.fontSize =
                14 + Math.random() * 20 + "px";

            fishContainer.appendChild(fish);

        }

    }


    /* ================================
       FISH METEOR
       ปลาพุ่งผ่านหน้าจอแบบเร็ว ๆ
    ================================= */

    function createFishMeteor() {

        const fish = document.createElement("div");

        fish.className = "fish-meteor";

        const fishTypes = [
            "🐟",
            "🐠",
            "🐡",
            "🦈"
        ];

        fish.textContent =
            fishTypes[Math.floor(Math.random() * fishTypes.length)];

        fish.style.top =
            Math.random() * 80 + 10 + "%";

        fish.style.fontSize =
            18 + Math.random() * 25 + "px";

        fish.style.animationDuration =
            2 + Math.random() * 2 + "s";

        document.body.appendChild(fish);

        setTimeout(() => {
            fish.remove();
        }, 5000);

    }


    setInterval(() => {

        if (Math.random() > 0.35) {
            createFishMeteor();
        }

    }, 3500);


    /* ================================
       SCROLL DEPTH
    ================================= */

    const depthNumber =
        document.getElementById("depthNumber");

    const depthFill =
        document.getElementById("depthFill");

    function updateDepth() {

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (maxScroll <= 0) return;

        const progress =
            window.scrollY / maxScroll;

        const depth =
            Math.round(progress * 4500);

        if (depthNumber) {
            depthNumber.textContent = depth;
        }

        if (depthFill) {
            depthFill.style.height =
                progress * 100 + "%";
        }

    }

    window.addEventListener(
        "scroll",
        updateDepth,
        { passive: true }
    );

    updateDepth();


    /* ================================
       REVEAL ON SCROLL
    ================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }


    /* ================================
       3D TILT
    ================================= */

    const tiltCards =
        document.querySelectorAll(".tilt-card");

    tiltCards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 15;

            const rotateY =
                (centerX - x) / 15;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "";

        });

    });


    /* ================================
       MAGNETIC BUTTON
    ================================= */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach((button) => {

        button.addEventListener("mousemove", (e) => {

            const rect =
                button.getBoundingClientRect();

            const x =
                e.clientX - rect.left -
                rect.width / 2;

            const y =
                e.clientY - rect.top -
                rect.height / 2;

            button.style.transform =
                `translate(${x * 0.15}px, ${y * 0.15}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });


    /* ================================
       MOUSE LIGHT
    ================================= */

    document.addEventListener("mousemove", (e) => {

        document.documentElement.style.setProperty(
            "--mouse-x",
            e.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            e.clientY + "px"
        );

    });


    /* ================================
       DAY / NIGHT MODE
    ================================= */

    const themeButton =
        document.getElementById("themeButton");

    function updateThemeButton() {

        if (!themeButton) return;

        if (document.body.classList.contains("surface-mode")) {

            themeButton.textContent = "☀";

        } else {

            themeButton.textContent = "☾";

        }

    }


    const savedTheme =
        localStorage.getItem("myOceanTheme");

    if (savedTheme === "surface") {

        document.body.classList.add("surface-mode");

    }

    updateThemeButton();


    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle(
                "surface-mode"
            );

            const isSurface =
                document.body.classList.contains(
                    "surface-mode"
                );

            localStorage.setItem(
                "myOceanTheme",
                isSurface ? "surface" : "abyss"
            );

            updateThemeButton();

        });

    }


    /* ================================
       EXTRA CORAL FIELD
    ================================= */

    if (!document.querySelector(".abyss-coral-field")) {

        const coralField =
            document.createElement("div");

        coralField.className =
            "abyss-coral-field";

        coralField.innerHTML = `
            <div class="abyss-coral coral-a"></div>
            <div class="abyss-coral coral-b"></div>
            <div class="abyss-coral coral-c"></div>
            <div class="abyss-coral coral-d"></div>
            <div class="abyss-coral coral-e"></div>
            <div class="abyss-coral coral-f"></div>
        `;

        document.body.appendChild(coralField);

    }


    /* ================================
       SONAR RADAR
    ================================= */

    if (!document.querySelector(".abyss-sonar")) {

        const sonar =
            document.createElement("div");

        sonar.className =
            "abyss-sonar";

        sonar.innerHTML = `
            <div class="sonar-circle sonar-circle-1"></div>
            <div class="sonar-circle sonar-circle-2"></div>
            <div class="sonar-circle sonar-circle-3"></div>
            <div class="sonar-line"></div>
            <div class="sonar-dot"></div>
            <div class="sonar-label">SONAR // ACTIVE</div>
        `;

        document.body.appendChild(sonar);


        document.addEventListener("mousemove", (e) => {

            const dot =
                sonar.querySelector(".sonar-dot");

            if (!dot) return;

            const x =
                (e.clientX / window.innerWidth) * 100;

            const y =
                (e.clientY / window.innerHeight) * 100;

            dot.style.left =
                x + "%";

            dot.style.top =
                y + "%";

        });

    }


    /* ================================
       360° CARD SPIN
    ================================= */

    const spinElements =
        document.querySelectorAll(
            ".tilt-card, .profile-image-card, .info-box, .large-panel, .contact-card, .stat-card"
        );

    spinElements.forEach((element) => {

        element.addEventListener("dblclick", () => {

            element.classList.add("abyss-spin");

            setTimeout(() => {

                element.classList.remove(
                    "abyss-spin"
                );

            }, 1100);

        });

    });


    /* ================================
       ENERGY EFFECT
    ================================= */

    document.querySelectorAll(
        ".info-box, .module-card, .contact-card"
    ).forEach((element) => {

        element.addEventListener("click", () => {

            element.classList.remove(
                "abyss-energy"
            );

            void element.offsetWidth;

            element.classList.add(
                "abyss-energy"
            );

            setTimeout(() => {

                element.classList.remove(
                    "abyss-energy"
                );

            }, 900);

        });

    });


    /* ================================
       KEYBOARD EASTER EGG
    ================================= */

    let secretCode = "";

    document.addEventListener("keydown", (e) => {

        secretCode += e.key.toLowerCase();

        if (secretCode.length > 10) {
            secretCode =
                secretCode.slice(-10);
        }

        if (secretCode.includes("ocean")) {

            document.body.classList.add(
                "ocean-secret"
            );

            setTimeout(() => {

                document.body.classList.remove(
                    "ocean-secret"
                );

            }, 3000);

            secretCode = "";

        }

    });


});
