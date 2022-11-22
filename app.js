const section = document.querySelector("section");
let lives = document.querySelector("span");
let playerLives = 20;

lives.textContent = playerLives;

// Generate cards
const getData = () => [
  { imgSrc: "./images/beatles.jpeg", name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", name: "fletwood" },
  { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", name: "fletwood" },
  { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
  //   { imgSrc: "./images/kart1.png", name: "kart1" },
];

// Random
const randomize = () => {
  const cardData = getData();
  return cardData.sort(() => Math.random() - 0.5);
};

// Card Generator Function
const cardGenerator = () => {
  const cardData = randomize();
  // HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // Attach info
    card.setAttribute("name", item.name);
    face.src = item.imgSrc;
    back.src = "./images/test2.svg";
    // Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toogleCard");
      check(e);
    });
  });
};

// Check Cards
const check = (e) => {
  const clicked = e.target;
  clicked.classList.add("flipped");

  flipped = document.querySelectorAll(".flipped");

  if (flipped.length === 2) {
    if (flipped[0].getAttribute("name") === flipped[1].getAttribute("name")) {
      flipped.forEach((flip) => {
        flip.classList.remove("flipped");
        flip.style.pointerEvents = "none";
      });
    } else {
      flipped.forEach((flip) => {
        flip.classList.remove("flipped");
        setTimeout(() => flip.classList.remove("toogleCard"), 1500);
      });
      playerLives -= 1;
      lives.textContent = playerLives;

      setTimeout(() => {
        if (playerLives === 0) {
          restart("KAYBETTIN XD");
        }
      }, 1500);
    }
  }
  toggle = document.querySelectorAll(".toogleCard");
  // WON OR NOT
  if (toggle.length === 16) {
    setTimeout(() => {
      restart("KAZANDIN XD");
    }, 1500);
  }
};

// Restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toogleCard");
    // randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 20;
  lives.textContent = playerLives;
  setTimeout(() => {
    window.alert(text);
  }, 100);
};

cardGenerator();
