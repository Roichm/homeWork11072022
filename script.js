//1.
// let zeroContainer = window.document.getElementById("zero");
// console.log(zeroContainer);

// zeroContainer.innerHTML = `<div id="first" class="bg-success p-2 text-dark bg-opacity-25 rounded-pill" >div1</div>
// <div id="second" class="bg-success p-2 text-dark bg-opacity-50 rounded-pill">div2</div>
// <div id="third" class="bg-success p-2 text-dark bg-opacity-75 rounded-pill">div3</div>
// <div id="fourth" class="bg-success p-2 text-dark bg-opacity-90 rounded-pill">div4</div>`;
//1.
let firstContainer = window.document.getElementById("first");
console.log(firstContainer);

firstContainer.className = `bg-success p-2 text-dark bg-opacity-25 rounded-pill`;
//2.
let secondContainer = window.document.getElementById("second");
console.log(secondContainer);
secondContainer.innerHTML = `<ul>
<li>Asya</li>
<li>Roichman</li>
<li>42</li>
<li>Rehovot</li>
</ul>`;
secondContainer.className = `bg-success p-2 text-dark bg-opacity-10 rounded-pill`;
//3.
let myCar = {
  title: "car",
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
};
let thirdContainer = window.document.getElementById("third");
console.log(thirdContainer);

thirdContainer.innerHTML =
  `<div class="card" style="width: 18rem;">
<div class="card-header">` +
  myCar.title +
  `</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"> Yad:` +
  myCar.hand +
  `</li>
  <li class="list-group-item"> KM:` +
  myCar.km +
  `</li>
  <li class="list-group-item"> Price: ` +
  myCar.price +
  `</li>
  <li class="list-group-item"> Year: ` +
  myCar.year +
  `</li>
</ul>
</div>`;
//4.
let fourthContainer = window.document.getElementById("fourth");
console.log(fourthContainer);
fourthContainer.className = `bg-danger`;
