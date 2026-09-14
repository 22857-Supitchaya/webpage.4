/* ================================= */
/* MY OCEAN - MAIN JAVASCRIPT */
/* ================================= */


/* ================================= */
/* PAGE LOADER */
/* ================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loaded");

    }, 900);

});


/* ================================= */
/* DAY / NIGHT MODE */
/* ================================= */

const themeButton =
    document.getElementById("theme-toggle");


const savedTheme =
    localStorage.getItem("myOceanTheme");


if (savedTheme === "day") {

    document.body.classList.add("day");

}


function updateThemeButton() {

    if (!themeButton) return;

    if (
        document.body.classList.contains("day")
    ) {

        themeButton.textContent = "🌙";

        themeButton.title =
            "Switch to Night Mode";

    } else {

        themeButton.textContent = "☀️";

        themeButton.title =
            "Switch to Day Mode";

    }

}


updateThemeButton();


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle("day");

            const isDay =
                document.body.classList.contains("day");

            localStorage.setItem(
                "myOceanTheme",
                isDay ? "day" : "night"
            );

            updateThemeButton();

            createBubbleBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }
    );

}


/* ================================= */
/* MOUSE TRACKING */
/* ================================= */

let mouseX =
    window.innerWidth / 2;

let mouseY =
    window.innerHeight / 2;


document.addEventListener(
    "mousemove",
    (event) => {

        mouseX = event.clientX;

        mouseY = event.clientY;

        document.documentElement.style.setProperty(
            "--mouse-x",
            mouseX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            mouseY + "px"
        );


        updateRadar(
            mouseX,
            mouseY
        );

    }
);


/* ================================= */
/* RADAR CURSOR */
/* ================================= */

function updateRadar(x, y) {

    const radar =
        document.getElementById(
            "radar-cursor"
        );

    if (!radar) return;


    const rx =
        Math.max(
            10,
            Math.min(
                90,
                (x / window.innerWidth) * 100
            )
        );


    const ry =
        Math.max(
            10,
            Math.min(
                90,
                (y / window.innerHeight) * 100
            )
        );


    radar.style.left =
        rx + "%";

    radar.style.top =
        ry + "%";

}


/* ================================= */
/* CLICK BUBBLE BURST */
/* ================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            event.target.closest(
                "a, button"
            )
        ) {

            createBubbleBurst(
                event.clientX,
                event.clientY,
                4
            );

            return;

        }


        createBubbleBurst(
            event.clientX,
            event.clientY,
            9
        );

    }
);


function createBubbleBurst(
    x,
    y,
    amount = 8
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const bubble =
            document.createElement(
                "span"
            );

        bubble.className =
            "click-bubble";


        bubble.style.left =
            x + "px";

        bubble.style.top =
            y + "px";


        const angle =
            Math.random()
            * Math.PI
            * 2;


        const distance =
            25 +
            Math.random() * 100;


        bubble.style.setProperty(
            "--bubble-x",
            Math.cos(angle)
            * distance
            + "px"
        );


        bubble.style.setProperty(
            "--bubble-y",
            Math.sin(angle)
            * distance
            - 40
            + "px"
        );


        const size =
            4 +
            Math.random() * 10;


        bubble.style.width =
            size + "px";

        bubble.style.height =
            size + "px";


        document.body.appendChild(
            bubble
        );


        setTimeout(() => {

            bubble.remove();

        }, 1400);

    }

}


/* ================================= */
/* BACKGROUND BUBBLES */
/* ================================= */

function createBackgroundBubbles() {

    const layer =
        document.querySelector(
            ".bubble-layer"
        );

    if (!layer) return;


    for (
        let i = 0;
        i < 24;
        i++
    ) {

        const bubble =
            document.createElement(
                "span"
            );

        bubble.className =
            "bubble";


        bubble.style.left =
            Math.random() * 100 + "%";


        bubble.style.setProperty(
            "--size",
            4 +
            Math.random() * 22
            + "px"
        );


        bubble.style.setProperty(
            "--duration",
            7 +
            Math.random() * 12
            + "s"
        );


        bubble.style.setProperty(
            "--delay",
            -Math.random() * 15
            + "s"
        );


        bubble.style.setProperty(
            "--drift",
            (
                Math.random() * 140
                - 70
            )
            + "px"
        );


        layer.appendChild(
            bubble
        );

    }

}


createBackgroundBubbles();


/* ================================= */
/* PARTICLES */
/* ================================= */

function createParticles() {

    const layer =
        document.querySelector(
            ".particle-layer"
        );

    if (!layer) return;


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );

        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100
            + "%";


        particle.style.top =
            Math.random() * 100
            + "%";


        particle.style.animationDuration =
            8 +
            Math.random() * 20
            + "s";


        particle.style.animationDelay =
            -Math.random() * 20
            + "s";


        particle.style.opacity =
            0.15 +
            Math.random() * 0.65;


        layer.appendChild(
            particle
        );

    }

}


createParticles();


/* ================================= */
/* RANDOM FISH METEOR */
/* ================================= */

const fishTypes = [
    "🐟",
    "🐠",
    "🐡"
];


function spawnFishMeteor() {

    const layer =
        document.querySelector(
            ".fish-layer"
        );

    if (!layer) return;


    const fish =
        document.createElement(
            "div"
        );


    fish.className =
        "fish-meteor";


    fish.textContent =
        fishTypes[
            Math.floor(
                Math.random()
                * fishTypes.length
            )
        ];


    fish.style.top =
        Math.random() * 75
        + "%";


    fish.style.setProperty(
        "--fish-y",
        (
            Math.random() * 160
            - 80
        )
        + "px"
    );


    fish.style.setProperty(
        "--fish-size",
        (
            18 +
            Math.random() * 32
        )
        + "px"
    );


    fish.style.setProperty(
        "--fish-speed",
        (
            5 +
            Math.random() * 7
        )
        + "s"
    );


    fish.style.setProperty(
        "--fish-rotate",
        (
            Math.random() * 15
            - 7
        )
        + "deg"
    );


    layer.appendChild(
        fish
    );


    setTimeout(() => {

        fish.remove();

    }, 14000);

}


/* สุ่มปลาทุก 2.5–6 วินาที */

function randomFishLoop() {

    spawnFishMeteor();


    const next =
        2500 +
        Math.random() * 3500;


    setTimeout(
        randomFishLoop,
        next
    );

}


randomFishLoop();


/* ================================= */
/* 3D TILT CARDS */
/* ================================= */

const tiltCards =
    document.querySelectorAll(
        ".tilt-card"
    );


tiltCards.forEach(
    (card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX
                    - rect.left;


                const y =
                    event.clientY
                    - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (
                        x - centerX
                    )
                    /
                    centerX
                    * 8;


                const rotateX =
                    (
                        centerY - y
                    )
                    /
                    centerY
                    * 8;


                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    scale(1.01)
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

    }
);


/* ================================= */
/* 360 DEGREE CLICK EFFECT */
/* ================================= */

const spinCards =
    document.querySelectorAll(
        ".spin-card"
    );


spinCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            (event) => {

                if (
                    event.target.closest(
                        "a"
                    )
                ) return;


                card.classList.remove(
                    "spin-now"
                );


                void card.offsetWidth;


                card.classList.add(
                    "spin-now"
                );


                setTimeout(() => {

                    card.classList.remove(
                        "spin-now"
                    );

                }, 900);

            }
        );

    }
);


/* สร้าง Animation 360° */

const spinStyle =
    document.createElement(
        "style"
    );


spinStyle.textContent = `

.spin-now {

    animation:
        cardSpin 0.9s ease-in-out;

}

@keyframes cardSpin {

    0% {

        transform:
            perspective(900px)
            rotateY(0deg);

    }

    50% {

        transform:
            perspective(900px)
            rotateY(180deg)
            scale(1.05);

    }

    100% {

        transform:
            perspective(900px)
            rotateY(360deg);

    }

}

`;


document.head.appendChild(
    spinStyle
);


/* ================================= */
/* SCROLL REVEAL */
/* ================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
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

        revealObserver.observe(
            element
        );

    }
);


/* ================================= */
/* DEPTH METER */
/* ================================= */

function updateDepth() {

    const depthElement =
        document.getElementById(
            "depth-value"
        );


    const scrollTop =
        window.scrollY;


    const maxScroll =
        document.documentElement
            .scrollHeight
        -
        window.innerHeight;


    const progress =
        maxScroll > 0
            ? scrollTop / maxScroll
            : 0;


    const depth =
        Math.round(
            progress * 4500
        );


    if (depthElement) {

        depthElement.textContent =
            depth
            .toString()
            .padStart(4, "0")
            + " M";

    }


    document.documentElement.style.setProperty(
        "--depth",
        progress
    );

}


window.addEventListener(
    "scroll",
    updateDepth
);


updateDepth();


/* ================================= */
/* MAGNETIC BUTTONS */
/* ================================= */

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


magneticButtons.forEach(
    (button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX
                    -
                    rect.left
                    -
                    rect.width / 2;


                const y =
                    event.clientY
                    -
                    rect.top
                    -
                    rect.height / 2;


                button.style.transform =
                    `
                    translate(
                        ${x * 0.12}px,
                        ${y * 0.12}px
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

    }
);


/* ================================= */
/* TEXT SHIMMER */
/* ================================= */

const shimmerElements =
    document.querySelectorAll(
        "h1, h2, h3, .glow-text"
    );


shimmerElements.forEach(
    (element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                element.style.textShadow =
                    `
                    0 0 8px rgba(80,230,255,0.5),
                    0 0 25px rgba(80,230,255,0.3)
                    `;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.textShadow =
                    "";

            }
        );

    }
);


/* ================================= */
/* RESIZE */
/* ================================= */

window.addEventListener(
    "resize",
    () => {

        updateRadar(
            mouseX,
            mouseY
        );

        updateDepth();

    }
);


/* ================================= */
/* EXTRA: PERIODIC BUBBLE BURST */
/* ================================= */

setInterval(
    () => {

        if (
            Math.random() > 0.55
        ) {

            const x =
                Math.random()
                * window.innerWidth;


            const y =
                window.innerHeight
                *
                (
                    0.25
                    +
                    Math.random()
                    * 0.55
                );


            createBubbleBurst(
                x,
                y,
                3
            );

        }

    },
    5000
);


/* ================================= */
/* CONSOLE */
/* ================================= */

console.log(
    "%c🌊 MY OCEAN SYSTEM ONLINE",
    "color:#58e8ff;font-size:18px;font-weight:bold;"
);

console.log(
    "%cDive deeper. Explore more.",
    "color:#88aebd;font-size:12px;"
);
