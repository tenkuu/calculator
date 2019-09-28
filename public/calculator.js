var points = document.getElementsByClassName("points");
var total = document.getElementsByClassName("total");
var percent = document.getElementsByClassName("percent");
var weight = document.getElementsByClassName("weight");
var numRows = 4;



function updateEventListener() {
	for (var i = 0; i < numRows; i++) {
		points[i].addEventListener('keyup', updatePer);
		total[i].addEventListener('keyup', updatePer);
	}
}
updateEventListener();



function updatePer() {
	for (var i = 0; i < numRows; i++) {
		if (isNaN(points[i].value) || points[i].value === "" || points[i].value < 0 || isNaN(total[i].value) || total[i].value <= 0) {
			points[i].innerHTML = "";	
		}
		else {
			var per = (points[i].value / total[i].value) * 100;
			per = +per.toFixed(2);
			percent[i].innerHTML = per + "%";
		}
	}
}



function calcMean() {
	var per = 0;
	var count = 0;
	
	for (var i = 0; i < numRows; i++) {
		if (!(isNaN(points[i].value) || points[i].value === "" || points[i].value < 0 || isNaN(total[i].value) || total[i].value <= 0)) {
			per += (points[i].value / total[i].value);
			count++;
		}	
	}
	
	var mean =  per / count * 100;
	mean = +mean.toFixed(3);
	
	result.innerHTML = mean + "%";
}
meanB.onclick = calcMean;



function calcWeight() {
	var per = 0;
	var count = 0;
	
	for (var i = 0; i < numRows; i++) {
		if (!(isNaN(points[i].value) || points[i].value === "" || points[i].value < 0 || isNaN(total[i].value) || total[i].value <= 0)) {
			if (!(isNaN(weight[i].value) || weight[i].value < 0)) {
				per += (points[i].value / total[i].value) * eval(weight[i].value);
				count += eval(weight[i].value);
			}
		}
	}
	
	var wei =  per / count * 100;
	wei = +wei.toFixed(3);
	
	result.innerHTML = wei + "%";
}
weightB.onclick= calcWeight;



function resetInputs() {
	for (var i = 0; i < numRows; i++) {
		points[i].value = "";
		total[i].value = "";
		percent[i].innerHTML = "";
	}
	result.innerHTML = "";
}
resetB.onclick = resetInputs;
