document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       LOADING SCREEN
    ================================= */

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loaded");

            setTimeout(() => {
                loader.style.display = "none";
            }, 900);

        }, 1200);

    }


    /* =================================
       CUSTOM CURSOR
    ================================= */

    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {

        document.documentElement.style.setProperty(
            "--mouse-x",
            e.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            e.clientY + "px"
        );

        if (cursor) {

            cursor.style.left =
                e.clientX + "px";

            cursor.style.top =
                e.clientY + "px";

        }

    });


    if (cursor) {

        document.addEventListener("mousedown", () => {
            cursor.classList.add("clicking");
        });

        document.addEventListener("mouseup", () => {
            cursor.classList.remove("clicking");
        });

    }


    /* =================================
       CURSOR HOVER
    ================================= */

    const hoverTargets = document.querySelectorAll(
        "a, button, .tilt-card, .info-box, .contact-card, .module-card"
    );

    hoverTargets.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            if (cursor) {
                cursor.classList.add("cursor-hover");
            }

        });

        element.addEventListener("mouseleave", () => {

            if (cursor) {
                cursor.classList.remove("cursor-hover");
            }

        });

    });


    /* =================================
       WATER RIPPLE
    ================================= */

    document.addEventListener("click", (e) => {

        const ripple = document.createElement("div");

        ripple.className = "water-ripple";

        ripple.style.left =
            e.clientX + "px";

        ripple.style.top =
            e.clientY + "px";

        document.body.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 900);

    });


    /* =================================
       CLICK BUBBLES
    ================================= */

    document.addEventListener("click", (e) => {

        const amount = 7;

        for (let i = 0; i < amount; i++) {

            const bubble =
                document.createElement("span");

            bubble.className =
                "abyss-bubble";

            const size =
                5 + Math.random() * 14;

            const dx =
                (Math.random() - 0.5) * 100;

            const rise =
                50 + Math.random() * 120;

            bubble.style.left =
                e.clientX +
                (Math.random() - 0.5) * 35 +
                "px";

            bubble.style.top =
                e.clientY +
                (Math.random() - 0.5) * 35 +
                "px";

            bubble.style.setProperty(
                "--bubble-size",
                size + "px"
            );

            /* สำคัญมาก
               CSS ใช้ --dx และ --rise
            */

            bubble.style.setProperty(
                "--dx",
                dx + "px"
            );

            bubble.style.setProperty(
                "--rise",
                rise + "px"
            );

            document.body.appendChild(bubble);

            setTimeout(() => {

                bubble.remove();

            }, 1500);

        }

    });


    /* =================================
       UNDERWATER PARTICLES
    ================================= */

    const particlesContainer =
        document.querySelector(".particles");

    if (particlesContainer) {

        for (let i = 0; i < 80; i++) {

            const particle =
                document.createElement("span");

            particle.className =
                "particle";

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.top =
                Math.random() * 100 + "%";

            particle.style.animationDelay =
                Math.random() * 8 + "s";

            particle.style.animationDuration =
                5 + Math.random() * 8 + "s";

            particlesContainer.appendChild(
                particle
            );

        }

    }


    /* =================================
       FLOATING BUBBLES
    ================================= */

    const bubblesContainer =
        document.querySelector(".bubbles");

    if (bubblesContainer) {

        for (let i = 0; i < 35; i++) {

            const bubble =
                document.createElement("span");

            bubble.className =
                "bubble";

            const size =
                3 + Math.random() * 12;

            bubble.style.left =
                Math.random() * 100 + "%";

            bubble.style.width =
                size + "px";

            bubble.style.height =
                size + "px";

            bubble.style.animationDelay =
                Math.random() * 12 + "s";

            bubble.style.animationDuration =
                7 + Math.random() * 10 + "s";

            bubblesContainer.appendChild(
                bubble
            );

        }

    }


    /* =================================
       FISH SCHOOL
    ================================= */

    const fishContainer =
        document.querySelector(".fish-school");

    if (fishContainer) {

        const fishTypes = [
            "🐠",
            "🐟",
            "🐡",
            "🐠",
            "🐟",
            "🐟"
        ];

        /* เพิ่มจำนวนปลา */

        for (let i = 0; i < 20; i++) {

            const fish =
                document.createElement("span");

            fish.className =
                "fish";

            fish.textContent =
                fishTypes[
                    Math.floor(
                        Math.random() *
                        fishTypes.length
                    )
                ];

            fish.style.top =
                8 + Math.random() * 82 + "%";

            fish.style.fontSize =
                14 + Math.random() * 22 + "px";

            fish.style.animationDelay =
                Math.random() * 18 + "s";

            fish.style.animationDuration =
                10 + Math.random() * 18 + "s";

            fishContainer.appendChild(
                fish
            );

        }

    }


    /* =================================
       FISH METEOR
       ปลาพุ่งเร็วผ่านหน้าจอ
    ================================= */

    function createFishMeteor() {

        const fish =
            document.createElement("div");

        fish.className =
            "fish-meteor";

        const fishTypes = [
            "🐟",
            "🐠",
            "🐡"
        ];

        fish.textContent =
            fishTypes[
                Math.floor(
                    Math.random() *
                    fishTypes.length
                )
            ];

        const y =
            8 + Math.random() * 78;

        const size =
            18 + Math.random() * 28;

        const duration =
            1.8 + Math.random() * 2.2;

        const trail =
            50 + Math.random() * 100;

        /* ส่งตัวแปรให้ CSS */

        fish.style.setProperty(
            "--meteor-y",
            y + "%"
        );

        fish.style.setProperty(
            "--meteor-size",
            size + "px"
        );

        fish.style.setProperty(
            "--meteor-duration",
            duration + "s"
        );

        fish.style.setProperty(
            "--trail",
            trail + "px"
        );

        document.body.appendChild(
            fish
        );

        setTimeout(() => {

            fish.remove();

        }, (duration + 0.5) * 1000);

    }


    /* ปลาพุ่งเป็นช่วง ๆ */

    setInterval(() => {

        createFishMeteor();

    }, 3200);


    /* =================================
       EXTRA CORAL
    ================================= */

    if (!document.querySelector(
        ".abyss-coral-field"
    )) {

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
            <div class="abyss-coral coral-g"></div>
            <div class="abyss-coral coral-h"></div>
            <div class="abyss-coral coral-i"></div>
            <div class="abyss-coral coral-j"></div>
        `;

        document.body.appendChild(
            coralField
        );

    }


    /* =================================
       CORAL HEIGHT
    ================================= */

    const coralElements =
        document.querySelectorAll(
            ".abyss-coral"
        );

    coralElements.forEach((coral) => {

        coral.style.setProperty(
            "--coral-h",
            45 + Math.random() * 90 + "px"
        );

    });


    /* =================================
       SONAR
    ================================= */

    if (!document.querySelector(
        ".abyss-sonar"
    )) {

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

            <div class="sonar-label">
                SONAR // ACTIVE
            </div>
        `;

        document.body.appendChild(
            sonar
        );

    }


    /* =================================
       SONAR CURSOR TRACKING
    ================================= */

    const sonar =
        document.querySelector(
            ".abyss-sonar"
        );

    const sonarDot =
        document.querySelector(
            ".sonar-dot"
        );

    if (sonar && sonarDot) {

        document.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    sonar.getBoundingClientRect();

                /*
                    แปลงตำแหน่งเมาส์
                    ให้เป็นตำแหน่งภายในเรดาร์
                */

                let x =
                    e.clientX -
                    rect.left;

                let y =
                    e.clientY -
                    rect.top;

                /*
                    จำกัดไม่ให้จุดหลุดวงกลม
                */

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const maxDistance =
                    rect.width * 0.40;

                const dx =
                    x - centerX;

                const dy =
                    y - centerY;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );

                if (
                    distance >
                    maxDistance
                ) {

                    const angle =
                        Math.atan2(dy, dx);

                    x =
                        centerX +
                        Math.cos(angle) *
                        maxDistance;

                    y =
                        centerY +
                        Math.sin(angle) *
                        maxDistance;

                }

                sonarDot.style.left =
                    x + "px";

                sonarDot.style.top =
                    y + "px";

            }
        );

    }


    /* =================================
       SCROLL DEPTH
    ================================= */

    const depthNumber =
        document.getElementById(
            "depthNumber"
        );

    const depthFill =
        document.getElementById(
            "depthFill"
        );

    function updateDepth() {

        const maxScroll =
            document.documentElement
                .scrollHeight -
            window.innerHeight;

        if (maxScroll <= 0) {

            if (depthNumber) {
                depthNumber.textContent = "0";
            }

            return;

        }

        const progress =
            Math.min(
                1,
                Math.max(
                    0,
                    window.scrollY /
                    maxScroll
                )
            );

        const depth =
            Math.round(
                progress * 4500
            );

        if (depthNumber) {

            depthNumber.textContent =
                depth;

        }

        if (depthFill) {

            depthFill.style.height =
                progress * 100 + "%";

        }

    }


    window.addEventListener(
        "scroll",
        updateDepth,
        {
            passive: true
        }
    );

    updateDepth();


    /* =================================
       REVEAL
    ================================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );

    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =================================
       3D TILT
    ================================= */

    const tiltCards =
        document.querySelectorAll(
            ".tilt-card"
        );

    tiltCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left;

                const y =
                    e.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) /
                    18;

                const rotateY =
                    (centerX - x) /
                    18;

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


    /* =================================
       MAGNETIC BUTTON
    ================================= */

    const buttons =
        document.querySelectorAll(
            ".btn"
        );

    buttons.forEach((button) => {

        button.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;

                button.style.transform =
                    `
                    translate(
                        ${x * 0.15}px,
                        ${y * 0.15}px
                    )
                    `;

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


    /* =================================
       DAY / NIGHT
    ================================= */

    const themeButton =
        document.getElementById(
            "themeButton"
        );

    function updateThemeButton() {

        if (!themeButton) return;

        if (
            document.body.classList.contains(
                "surface-mode"
            )
        ) {

            themeButton.textContent =
                "☀";

            themeButton.title =
                "Switch to Night Mode";

        } else {

            themeButton.textContent =
                "☾";

            themeButton.title =
                "Switch to Day Mode";

        }

    }


    const savedTheme =
        localStorage.getItem(
            "myOceanTheme"
        );

    if (
        savedTheme === "surface"
    ) {

        document.body.classList.add(
            "surface-mode"
        );

    }


    updateThemeButton();


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "surface-mode"
                );

                const isSurface =
                    document.body.classList.contains(
                        "surface-mode"
                    );

                localStorage.setItem(
                    "myOceanTheme",
                    isSurface
                        ? "surface"
                        : "abyss"
                );

                updateThemeButton();

            }
        );

    }


    /* =================================
       DOUBLE CLICK 360°
    ================================= */

    const spinElements =
        document.querySelectorAll(
            `
            .tilt-card,
            .profile-image-card,
            .info-box,
            .large-panel,
            .contact-card,
            .stat-card,
            .module-card,
            .hobby-card
            `
        );

    spinElements.forEach(
        (element) => {

            element.addEventListener(
                "dblclick",
                (e) => {

                    e.preventDefault();

                    element.classList.remove(
                        "abyss-spin"
                    );

                    void element.offsetWidth;

                    element.classList.add(
                        "abyss-spin"
                    );

                    setTimeout(() => {

                        element.classList.remove(
                            "abyss-spin"
                        );

                    }, 1000);

                }
            );

        }
    );


    /* =================================
       ENERGY EFFECT
    ================================= */

    const energyElements =
        document.querySelectorAll(
            `
            .info-box,
            .module-card,
            .contact-card,
            .hobby-card,
            .stat-card
            `
        );

    energyElements.forEach(
        (element) => {

            element.addEventListener(
                "click",
                () => {

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

                }
            );

        }
    );


    /* =================================
       KEYBOARD EASTER EGG
    ================================= */

    let secretCode = "";

    document.addEventListener(
        "keydown",
        (e) => {

            secretCode +=
                e.key.toLowerCase();

            if (
                secretCode.length > 10
            ) {

                secretCode =
                    secretCode.slice(-10);

            }

            if (
                secretCode.includes(
                    "ocean"
                )
            ) {

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

        }
    );


});
