var A1w = document.getElementById("A1weight");
var A1p = document.getElementById("A1points");
var A1t = document.getElementById("A1total");
var A1per = document.getElementById("A1per");

var A2w = document.getElementById("A2weight");
var A2p = document.getElementById("A2points");
var A2t = document.getElementById("A2total");
var A2per = document.getElementById("A2per");

var A3w = document.getElementById("A3weight");
var A3p = document.getElementById("A3points");
var A3t = document.getElementById("A3total");
var A3per = document.getElementById("A3per");

var A4w = document.getElementById("A4weight");
var A4p = document.getElementById("A4points");
var A4t = document.getElementById("A4total");
var A4per = document.getElementById("A4per");

var meanB = document.getElementById("meanB");
var weightB = document.getElementById("weightB");
var resetB = document.getElementById("resetB");
var result = document.getElementById("result");


A1p.addEventListener('keyup', updatePer1);
A1t.addEventListener('keyup', updatePer1);

A2p.addEventListener('keyup', updatePer2);
A2t.addEventListener('keyup', updatePer2);

A3p.addEventListener('keyup', updatePer3);
A3t.addEventListener('keyup', updatePer3);

A4p.addEventListener('keyup', updatePer4);
A4t.addEventListener('keyup', updatePer4);

function updatePer1() {
	if (isNaN(A1p.value) || A1p.value === "" || A1p.value < 0 || isNaN(A1t.value) || A1t.value <= 0) {
		A1per.innerHTML = "";
	}
	else {
		var percent = (A1p.value / A1t.value) * 100;
		percent = +percent.toFixed(2);
		A1per.innerHTML = percent + "%";
	}
}

function updatePer2() {
	if (isNaN(A2p.value) || A2p.value === "" || A2p.value < 0 || isNaN(A2t.value) || A2t.value <= 0) {
		A2per.innerHTML = "";
	}
	else {
		var percent = (A2p.value / A2t.value) * 100;
		percent = +percent.toFixed(2);
		A2per.innerHTML = percent + "%";
	}
}

function updatePer3() {
	if (isNaN(A3p.value) || A3p.value === "" || A3p.value < 0 || isNaN(A3t.value) || A3t.value <= 0) {
		A3per.innerHTML = "";
	}
	else {
		var percent = (A3p.value / A3t.value) * 100;
		percent = +percent.toFixed(2);
		A3per.innerHTML = percent + "%";
	}
}

function updatePer4() {
	if (isNaN(A4p.value) || A4p.value === "" || A4p.value < 0 || isNaN(A4t.value) || A4t.value <= 0) {
		A4per.innerHTML = "";
	}
	else {
		var percent = (A4p.value / A4t.value) * 100;
		percent = +percent.toFixed(2);
		A4per.innerHTML = percent + "%";
	}
}


meanB.onclick = calcMean;

function calcMean() {
	var percent = 0;
	var count = 0;
	
	if (!(isNaN(A1p.value) || A1p.value === "" || A1p.value < 0 || isNaN(A1t.value) || A1t.value <= 0)) {
		percent += (A1p.value / A1t.value);
		count++;
	}
	if (!(isNaN(A2p.value) || A2p.value === "" || A2p.value < 0 || isNaN(A2t.value) || A2t.value <= 0)) {
		percent += (A2p.value / A2t.value);
		count++;
	}
	if (!(isNaN(A3p.value) || A3p.value === "" || A3p.value < 0 || isNaN(A3t.value) || A3t.value <= 0)) {
	    percent += (A3p.value / A3t.value);
		count++;
	}
	if (!(isNaN(A4p.value) || A4p.value === "" || A4p.value < 0 || isNaN(A4t.value) || A4t.value <= 0)) {
		percent += (A4p.value / A4t.value);
		count++;
	}
	
	var mean =  percent / count * 100;
	mean = +mean.toFixed(3);
	
	result.innerHTML = mean + "%";
}


weightB.onclick= calcWeight;

function calcWeight() {
	var percent = 0;
	var count = 0;
	
	if (!(isNaN(A1p.value) || A1p.value === "" || A1p.value < 0 || isNaN(A1t.value) || A1t.value <= 0)) {
		if (!(isNaN(A1w.value) || A1w.value < 0)) {
			percent += (A1p.value / A1t.value) * eval(A1w.value);
			count += eval(A1w.value);
		}

	}
	if (!(isNaN(A2p.value) || A2p.value === "" || A2p.value < 0 || isNaN(A2t.value) || A2t.value <= 0)) {
		if (!(isNaN(A2w.value) || A2w.value < 0)) {
			percent += (A2p.value / A2t.value)  * eval(A1w.value);
			count += eval(A1w.value);
		}
	}
	if (!(isNaN(A3p.value) || A3p.value === "" || A3p.value < 0 || isNaN(A3t.value) || A3t.value <= 0)) {
		if (!(isNaN(A3w.value) || A3w.value < 0)) {
			percent += (A3p.value / A3t.value) * eval(A1w.value);
			count += eval(A1w.value);
		}
	}
	if (!(isNaN(A4p.value) || A4p.value === "" || A4p.value < 0 || isNaN(A4t.value) || A4t.value <= 0)) {
		if (!(isNaN(A4w.value) || A4w.value < 0)) {
			percent += (A4p.value / A4t.value)  * eval(A1w.value);
			count += eval(A1w.value);
		}
	}
	
	var weight =  percent / count * 100;
	weight = +weight.toFixed(3);
	
	result.innerHTML = weight + "%";
}


resetB.onclick = resetInputs;

function resetInputs() {
	A1w.value = "";
	A2w.value = "";
	A3w.value = "";
	A4w.value = "";
	
	A1p.value = "";
	A2p.value = "";
	A3p.value = "";
	A4p.value = "";
	
	A1t.value = "";
	A2t.value = "";
	A3t.value = "";
	A4t.value = "";
	
	A1per.innerHTML = "";
	A2per.innerHTML = "";
	A3per.innerHTML = "";
	A4per.innerHTML = "";
	
	result.innerHTML = "";
}