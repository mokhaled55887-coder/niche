const data = {
  Giza: ["Pyramids", "Sphinx"],
  Alexandria: ["Library", "Qaitbay Citadel"],
  Luxor: ["Karnak Temple", "Valley of the Kings"]
};

let cart = [];

function selectGov(gov) {
  document.getElementById("attractions").classList.remove("hidden");
  document.getElementById("gov-title").innerText = gov;

  let placesDiv = document.getElementById("places");
  placesDiv.innerHTML = "";

  data[gov].forEach(place => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h3>${place}</h3>
      <button onclick="addToCart('${place}')">Add</button>
    `;
    placesDiv.appendChild(div);
  });
}

function addToCart(place) {
  cart.push(place);
  document.getElementById("cart").classList.remove("hidden");

  let list = document.getElementById("cartList");
  let li = document.createElement("li");
  li.innerText = place;
  list.appendChild(li);
}

function goToBooking() {
  document.getElementById("booking").classList.remove("hidden");
}

function confirmBooking() {
  let name = document.getElementById("name").value;
  alert("Booking confirmed for " + name + " ✅");
}