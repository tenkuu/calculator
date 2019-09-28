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
			if (!(isNaN(weight[i].value) || weight[i].value < 0 || weight[i].value === "")) {
				per += (points[i].value / total[i].value) * eval(weight[i].value);
				count += eval(weight[i].value);
			}
		}
	}
	
	if (count != 0) {
		var wei =  per / count * 100;
		wei = +wei.toFixed(3);
	
		result.innerHTML = wei + "%";
	}
	else {
		result.innerHTML = "";
	}
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



function addRow() {
	numRows++;
	
	var tab = document.getElementById("mainTable");
	var row = tab.insertRow(-1);
	
	var name = row.insertCell(0);
	name.innerHTML = "Activity " + numRows;
	
	var sname = row.insertCell(1);
	sname.innerHTML = "A" + numRows;
	
	var weig = row.insertCell(2);
	weig.innerHTML = "<input class='weight' type='text'></input>";
	
	var grade = row.insertCell(3);
	grade.innerHTML = "<input class='points' style='margin-bottom: 5px;'></input> / <br> <input class='total'></input>";
	
	var perc = row.insertCell(4);
	perc.classList.add("percent");
	
	updateEventListener();
	
	window.scrollTo(0,document.body.scrollHeight);
}
addRowB.onclick = addRow;
