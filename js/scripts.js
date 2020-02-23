// Triggers.
let toggleLocal = 0;
let toggleCommRapid = 0;
let toggleSpecRapid = 0;

// Stations with frequencies categorised.
let stnSpecRapid = document.getElementsByClassName("freq-specRapid");
let stnCommRapid = document.getElementsByClassName("freq-exc-specRapid");
let stnLocal = document.getElementsByClassName("freq-local");

// Objects of rail lines on map.
let specRapid = document.getElementsByClassName("table-line-specRapid")[0];
let commRapid = document.getElementsByClassName("table-line-commRapid")[0];
let local = document.getElementsByClassName("table-line-local")[0];

// Button objects of rail line togglers.
let btnSpecRapid = document.getElementsByClassName("buttonSpecRapid")[0];
let btnCommRapid = document.getElementsByClassName("buttonCommRapid")[0];
let btnLocal = document.getElementsByClassName("buttonLocal")[0];


/*********************** SPEC RAPID ***********************/

// FUNC - Hides SPEC RAPID stations.
function hidesSpecRapid() {
	for (let cSR = 0; cSR < stnSpecRapid.length; cSR++) {
		stnSpecRapid[cSR].classList.remove("freq-visible");
		stnSpecRapid[cSR].classList.add("freq-invisible");
	}
}

// FUNC - Shows SPEC RAPID stations.
function unhidesSpecRapid() {
	for (let cSR = 0; cSR < stnSpecRapid.length; cSR++) {
		stnSpecRapid[cSR].classList.remove("freq-invisible");
		stnSpecRapid[cSR].classList.add("freq-visible");
	}
}

// FUNC - Hides SPEC RAPID lines.
function hidesSpecRapidLine() {
	specRapid.classList.remove("freq-visible");
	specRapid.classList.add("freq-invisible");
}

// FUNC - Unhides SPEC RAPID lines.
function unhidesSpecRapidLine() {
	specRapid.classList.remove("freq-invisible");
	specRapid.classList.add("freq-visible");
}

// FUNC - Disables SPEC RAPID buttons.
function disablesSpecRapidBtn() {
	btnSpecRapid.disabled = true;
	btnSpecRapid.classList.remove("freq-visible");
	btnSpecRapid.classList.add("freq-invisible");
}

// FUNC - Enables SPEC RAPID buttons.
function enablesSpecRapidBtn() {
	btnSpecRapid.classList.remove("freq-invisible");
	btnSpecRapid.classList.add("freq-visible");
	btnSpecRapid.disabled = false;
}


/*********************** COMM RAPID ***********************/

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

// FUNC - Hides COMM RAPID lines.
function hidesCommRapidLine() {
	commRapid.classList.remove("freq-visible");
	commRapid.classList.add("freq-invisible");
}

// FUNC - Unhides COMM RAPID lines.
function unhidesCommRapidLine() {
	commRapid.classList.remove("freq-invisible");
	commRapid.classList.add("freq-visible");
}

// FUNC - Disables COMM RAPID buttons.
function disablesCommRapidBtn() {
	btnCommRapid.disabled = true;
	btnCommRapid.classList.remove("freq-visible");
	btnCommRapid.classList.add("freq-invisible");
}

// FUNC - Enables COMM RAPID buttons.
function enablesCommRapidBtn() {
	btnCommRapid.classList.remove("freq-invisible");
	btnCommRapid.classList.add("freq-visible");
	btnCommRapid.disabled = false;	
}


/*********************** LOCAL ***********************/

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

// FUNC - Hides LOCAL lines.
function hidesLocalLine() {
	local.classList.remove("freq-visible");
	local.classList.add("freq-invisible");
}

// FUNC - Unhides LOCAL lines.
function unhidesLocalLine() {
	local.classList.remove("freq-invisible");
	local.classList.add("freq-visible");	
}

// FUNC - Disables LOCAL buttons.
function disablesLocalBtn() {
	btnLocal.disabled = true;
	btnLocal.classList.remove("freq-visible");
	btnLocal.classList.add("freq-invisible");
}

// FUNC - Enables LOCAL buttons.
function enablesLocalBtn() {
	btnLocal.classList.remove("freq-invisible");
	btnLocal.classList.add("freq-visible");
	btnLocal.disabled = false;
}


/*********************** BUTTONS ***********************/

// BUTTON - Local
function togglerButtonLocal() {
	toggleCommRapid = 0;
	toggleSpecRapid = 0;

	if (toggleLocal === 0) {
		disablesSpecRapidBtn();
		disablesCommRapidBtn();
		hidesSpecRapidLine();
		hidesCommRapidLine();
		toggleLocal++;
	} else {
		unhidesCommRapidLine();
		unhidesSpecRapidLine();
		enablesSpecRapidBtn();
		enablesCommRapidBtn();
		toggleLocal = 0;
	}
}

// BUTTON - Commuter Rapid
function togglerButtonCommRapid() {
	toggleLocal = 0;
	toggleSpecRapid = 0;

	if (toggleCommRapid === 0) {
		disablesSpecRapidBtn();
		disablesLocalBtn();
		hidesSpecRapidLine();
		hidesLocalLine();
		hidesLocal();
		toggleCommRapid++;
	} else {
		unhidesLocal();
		unhidesLocalLine();
		unhidesSpecRapidLine();
		enablesSpecRapidBtn();
		enablesLocalBtn();
		toggleCommRapid = 0;
	}
}

// BUTTON - Special Rapid
function togglerButtonSpecRapid() {
	toggleLocal = 0;
	toggleCommRapid = 0;

	if (toggleSpecRapid === 0) {
		disablesCommRapidBtn();
		disablesLocalBtn();
		hidesCommRapidLine();
		hidesLocalLine();
		hidesCommRapid();
		hidesLocal();
		toggleSpecRapid++;
	} else {
		enablesCommRapidBtn();
		enablesLocalBtn();
		unhidesCommRapidLine();
		unhidesLocalLine();
		unhidesCommRapid();
		unhidesLocal();
		toggleSpecRapid = 0;
	}
}