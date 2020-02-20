let toggleLocal = 0;
let toggleCommRapid = 0;
let toggleSpecRapid = 0;

let stnExcSpecRapid = document.getElementsByClassName("freq-exc-specRapid")[0];
let stnLocal = document.getElementsByClassName("freq-local")[0];

let specRapid = document.getElementsByClassName("table-line-specRapid")[0];
let commRapid = document.getElementsByClassName("table-line-commRapid")[0];
let local = document.getElementsByClassName("table-line-local")[0];


// BUTTON - Local
function togglerButtonLocal() {
	console.log("bruh");
}

// BUTTON - Commuter Rapid
function togglerButtonCommRapid() {
	console.log("duh");
}

// BUTTON - Special Rapid
function togglerButtonSpecRapid() {
	toggleLocal = 0;
	toggleCommRapid = 0;

	if (toggleSpecRapid === 0) {
		commRapid.classList.remove("freq-visible");
		commRapid.classList.add("freq-invisible");

		local.classList.remove("freq-visible");
		local.classList.add("freq-invisible");

		stnExcSpecRapid.classList.remove("freq-visible");
		stnExcSpecRapid.classList.add("freq-invisible");

		stnLocal.classList.remove("freq-visible");
		stnLocal.classList.add("freq-invisible");

		toggleSpecRapid++;
	} else {
		commRapid.classList.remove("freq-invisible");
		commRapid.classList.add("freq-visible");

		local.classList.remove("freq-invisible");
		local.classList.add("freq-visible");		

		stnExcSpecRapid.classList.remove("freq-invisible");
		stnExcSpecRapid.classList.add("freq-visible");

		stnLocal.classList.remove("freq-invisible");
		stnLocal.classList.add("freq-visible");		

		toggleSpecRapid = 0;
	}

	console.log(toggleSpecRapid);
}