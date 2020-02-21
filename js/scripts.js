// Triggers.
let toggleLocal = 0;
let toggleCommRapid = 0;
let toggleSpecRapid = 0;

// Stations with frequencies categorised.
let stnCommRapid = document.getElementsByClassName("freq-exc-specRapid");
let stnLocal = document.getElementsByClassName("freq-local");

// Objects of rail lines on map.
let specRapid = document.getElementsByClassName("table-line-specRapid")[0];
let commRapid = document.getElementsByClassName("table-line-commRapid")[0];
let local = document.getElementsByClassName("table-line-local")[0];

// Button objects of rail line togglers.
let btnCommRapid = document.getElementsByClassName("buttonCommRapid")[0];
let btnLocal = document.getElementsByClassName("buttonLocal")[0];

// FUNC - Hides COMM RAPID stations.
function hidesCommRapid() {
	for (let cCR = 0; cCR < stnCommRapid.length; cCR++) {
		stnCommRapid[cCR].classList.remove("freq-visible");
		stnCommRapid[cCR].classList.add("freq-invisible");
	}
}

// FUNC - Shows COMM RAPID stations.
function unhidesCommRapid() {
	for (let cCR = 0; cCR < stnCommRapid.length; cCR++) {
		stnCommRapid[cCR].classList.remove("freq-invisible");
		stnCommRapid[cCR].classList.add("freq-visible");
	}	
}

//FUNC - Hides LOCAL stations.
function hidesLocal() {
	for (let cL = 0; cL < stnLocal.length; cL++) {
		stnLocal[cL].classList.remove("freq-visible");
		stnLocal[cL].classList.add("freq-invisible");
	}
}

// FUNC - Unhides LOCAL stations.
function unhidesLocal() {
	for (let cL = 0; cL < stnLocal.length; cL++) {
		stnLocal[cL].classList.remove("freq-invisible");
		stnLocal[cL].classList.add("freq-visible");
	}
}

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
		// Disables LOCAL and COMM RAPID button.
		btnLocal.disabled = true;
		btnCommRapid.disabled = true;
		btnLocal.classList.remove("freq-visible");
		btnCommRapid.classList.remove("freq-visible");
		btnCommRapid.classList.add("freq-invisible");
		btnLocal.classList.add("freq-invisible");

		// Hides COMM RAPID and LOCAL lines on map.
		commRapid.classList.remove("freq-visible");
		commRapid.classList.add("freq-invisible");
		local.classList.remove("freq-visible");
		local.classList.add("freq-invisible");

		hidesCommRapid();
		hidesLocal();

		// Increases trigger value.
		toggleSpecRapid++;
	} else {
		// Enables LOCAL and COMM RAPID button.
		btnCommRapid.classList.remove("freq-invisible");
		btnLocal.classList.remove("freq-invisible");
		btnLocal.classList.add("freq-visible");
		btnCommRapid.classList.add("freq-visible");
		btnLocal.disabled = false;
		btnCommRapid.disabled = false;

		// Unhides COMM RAPID and LOCAL lines on map.
		commRapid.classList.remove("freq-invisible");
		commRapid.classList.add("freq-visible");
		local.classList.remove("freq-invisible");
		local.classList.add("freq-visible");		

		unhidesCommRapid();
		unhidesLocal();
		
		// Revert trigger to beginning.
		toggleSpecRapid = 0;
	}

	console.log(toggleSpecRapid);
}