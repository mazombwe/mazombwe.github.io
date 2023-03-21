"use strict";

class service {
    #choise;
    #time;

    constructor(choise, time) {
        this.#choise = choise;
        this.#time = time
    }

    toString() {
        return `${this.choise} ${this.#time}`;
    }
}

window.onload = function(){
	let service1 = new service("manicure", 10);

	let title = document.getElementById("main-title");
	console.log(title);

	let dice = document.getElementById("coin-result");

	let fs = 4;

	let frowBtn = document.getElementById("frow");
	frowBtn.addEventListener("click", (e) => {
		dice.innerText = Math.ceil(Math.random() * 2);
		dice.style.fontSize = `${fs}px`
		fs += 2;
	});

	let addBtn = document.getElementById("add-btn");
	addBtn.addEventListener("dblclick", (e) => {
		let list = document.querySelector(".list-div");
		let p = document.createElement("p");
		p.innerText = "MERCI D'AVOIR ESSAYER";
		list.appendChild(p);
	});
	let subimitBtn = document.getElementById("submit");
	addBtn.addEventListener("mouseover", (e) => {
		let list = document.querySelector(".send");
		let p = document.createElement("p");
		p.innerText = "message envoyer";
		list.appendChild(p);
	});
	let expandBtn = document.getElementById("expand-btn");
	expandBtn.addEventListener("click", (e) => {
		document.getElementById("coinne-card")
			.classList.toggle("coins");
		expandBtn.classList.toggle("rotated");
	});
	


};

