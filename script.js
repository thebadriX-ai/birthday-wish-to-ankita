/* ==================================
   PAGE SWITCHING
================================== */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    setTimeout(() => {

        document.getElementById(pageId).classList.add("active");

    }, 100);
}


/* ==================================
   MUSIC
================================== */

const music = document.getElementById("birthdayMusic");

function startMusic() {

    music.play().catch(() => {
        // Browser may block autoplay until user interaction.
    });

}


/* ==================================
   BALLOONS
================================== */

const balloons = document.querySelectorAll("[data-balloon]");

let balloonsLeft = balloons.length;

const balloonCount =
    document.getElementById("balloonCount");


balloons.forEach(balloon => {

    balloon.addEventListener("click", () => {

        if (balloon.classList.contains("popped")) {
            return;
        }

        startMusic();

        balloon.classList.add("popped");

        balloonsLeft--;

        balloonCount.textContent =
            balloonsLeft + " balloons left 🎈";


        createConfetti(
            balloon.getBoundingClientRect().left +
            balloon.offsetWidth / 2,

            balloon.getBoundingClientRect().top +
            balloon.offsetHeight / 2
        );


        if (balloonsLeft === 0) {

            balloonCount.textContent =
                "You did it! ✨";

            setTimeout(() => {

                showPage("cakePage");

            }, 1200);

        }

    });

});


/* ==================================
   CANDLES
================================== */

const candles = document.querySelectorAll("[data-candle]");

let candlesLeft = candles.length;

const candleCount =
    document.getElementById("candleCount");


candles.forEach(candle => {

    candle.addEventListener("click", () => {

        if (candle.classList.contains("off")) {
            return;
        }

        candle.classList.add("off");

        candlesLeft--;

        candleCount.textContent =
            candlesLeft + " candles glowing 🕯️";


        if (candlesLeft === 0) {

            candleCount.textContent =
                "Make your wish... ✨";

            setTimeout(() => {

                showPage("birthdayPage");

                createFullConfetti();

            }, 1200);

        }

    });

});


/* ==================================
   CONTINUE TO WISH
================================== */

const continueBtn =
    document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    showPage("wishPage");

});


/* ==================================
   REPLAY
================================== */

const replayBtn =
    document.getElementById("replayBtn");

replayBtn.addEventListener("click", () => {

    /* reset balloons */

    balloons.forEach(balloon => {
        balloon.classList.remove("popped");
    });

    balloonsLeft = balloons.length;

    balloonCount.textContent =
        "7 balloons left 🎈";


    /* reset candles */

    candles.forEach(candle => {
        candle.classList.remove("off");
    });

    candlesLeft = candles.length;

    candleCount.textContent =
        "5 candles glowing 🕯️";


    /* return to beginning */

    showPage("balloonPage");

});


/* ==================================
   CONFETTI
================================== */

function createConfetti(x, y) {

    for (let i = 0; i < 15; i++) {

        const piece =
            document.createElement("div");

        piece.style.position = "fixed";

        piece.style.left = x + "px";
        piece.style.top = y + "px";

        piece.style.width = "8px";
        piece.style.height = "8px";

        piece.style.borderRadius = "2px";

        piece.style.background =
            ["#ff69b4", "#ffd166", "#7bdff2", "#b8f2e6", "#ffffff"]
            [Math.floor(Math.random() * 5)];

        piece.style.pointerEvents = "none";

        piece.style.zIndex = "9999";

        document.body.appendChild(piece);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            50 + Math.random() * 100;


        const xMove =
            Math.cos(angle) * distance;

        const yMove =
            Math.sin(angle) * distance;


        piece.animate(
            [
                {
                    transform: "translate(0,0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${xMove}px, ${yMove}px) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 800,
                easing: "ease-out"
            }
        );


        setTimeout(() => {
            piece.remove();
        }, 850);

    }

}


/* ==================================
   BIG CONFETTI
================================== */

function createFullConfetti() {

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {

            createConfetti(
                Math.random() * window.innerWidth,

                Math.random() * window.innerHeight
            );

        }, i * 15);

    }

}/* =========================================
   FLOATING HEARTS
========================================= */

const heartContainer =
    document.getElementById("floating-hearts");

const heartTypes = [
    "💗",
    "💕",
    "💖",
    "💓",
    "💞",
    "❤️"
];

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className = "floating-heart";

    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() * heartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        12 + Math.random() * 22 + "px";

    const duration =
        7 + Math.random() * 7;

    heart.style.animationDuration =
        duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


/* Create hearts continuously */

setInterval(
    createFloatingHeart,
    700
);


/* =========================================
   FLOATING SPARKLES
========================================= */

const sparkleContainer =
    document.getElementById("floating-sparkles");

const sparkleTypes = [
    "✨",
    "✦",
    "✧",
    "⭐"
];

function createFloatingSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "floating-sparkle";

    sparkle.textContent =
        sparkleTypes[
            Math.floor(
                Math.random() * sparkleTypes.length
            )
        ];

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 100 + "%";

    sparkle.style.animationDuration =
        2 + Math.random() * 3 + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 5000);
}


/* Create sparkles */

setInterval(
    createFloatingSparkle,
    500
);document.getElementById("personalWish").textContent = `
Happy Birthday to you, Nani 🎂❤️

Sadhai khusi hunu, dukhi nahunu. God bless you sadhai.
Dherai padhnu, gyani xau, ajhai gyani hunu.
Ramro kura haru ma dharai dhyan dinu ani nahuni kura ma dharai dhyan na dinu.

Sadhai dai lai support garnu, even galat nai bhayepani ❤️
Gift party bhanne kura bhai rahanxa, samaye aayepaxi heramla.
Ahile chai sadhai khusi hunu.

Kahile kai mattinw bhayena, kai garo paryo, wa kunai kura le aftyaro paryo bhane,
malai afnai sathi, afnai bhai, afnai dai j sochera bhayeni bhannu hai.
Ma harek kura ma help garne try garxu. ❤️

Tai ho Nani, sadhai khusi hunu, hasirakhnu
ani ramro sanga agadi badhirakhnu.

Once again, Happy Birthday to you, Nani! 🎂🎉❤️
`;