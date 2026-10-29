const drawBtn = document.querySelector("#drawBtn");
const cardArea = document.querySelector("#cardArea");

function makeCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <div class="card-inner">
    <div class="card-back"><img src="images/back.svg" alt="카드 뒷면" /></div>
    <div class="card-front">
      <img src="${item.img}" alt="${item.title}" />
      <div class="card-text">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </div>
  </div>
  `;
  card.addEventListener("click", function () {
    card.classList.toggle("flipped");
  });
  cardArea.appendChild(card);
}

function startCard() {
  const deckName = document.body.dataset.deck;
  const deck = [...decks[deckName]];
  deck.sort(() => Math.random() - 0.5);
  const picked = deck.slice(0, 3);

  cardArea.innerHTML = "";
  picked.forEach(function (item) {
    makeCard(item);
  });
}

drawBtn.addEventListener("click", startCard);
