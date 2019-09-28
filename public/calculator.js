var points = document.getElementsByClassName("points");
var total = document.getElementsByClassName("total");
var percent = document.getElementsByClassName("percent");
var weight = document.getElementsByClassName("weight");

var meanButton = document.getElementById("meanB");
var weightButton = document.getElementById("weightB");
var resetButton = document.getElementById("resetB");
var addRowButton = document.getElementById("addRowB");
var numRows = 4;



// Adds an event listener to every created row
function updateEventListener() {
	for (var i = 0; i < numRows; i++) {
		points[i].addEventListener('keyup', updatePer);
		total[i].addEventListener('keyup', updatePer);
	}
}
updateEventListener();



function updatePer() {
	for (var i = 0; i < numRows; i++) {
		// Check if input isn't a number, is empty, the number is negative (or 0 for total)
		// Clear percent cell if it is
		if (isNaN(points[i].value) || points[i].value === "" || points[i].value < 0 || isNaN(total[i].value) || total[i].value <= 0) {
			percent[i].innerHTML = "";	
		}
		else {
			var per = (points[i].value / total[i].value) * 100;
			per = +per.toFixed(3);
			percent[i].innerHTML = per + "%";
		}
	}
}



function calcMean() {
	var per = 0;
	var count = 0;
	var errorr = false;
	
	for (var i = 0; i < numRows; i++) {
		// Skip to next row if empty
		if (points[i].value === "" && total[i].value === "" && weight[i].value === "") {
			continue;
		}
		else {
			// Check if input isn't a number, is empty, the number is negative (or 0 for total)
			// Flip error flag if it is
			if (isNaN(points[i].value) || points[i].value === "" || points[i].value < 0 || isNaN(total[i].value) || total[i].value <= 0) {
				errorr = true;
			}
			else {
				per += (points[i].value / total[i].value);
				count++;
			}
		}
	}
	
	if (count != 0 && errorr == false) {
		var mean =  per / count * 100;
		mean = +mean.toFixed(3);
	
		result.innerHTML = mean + "%";
	}
	else {
		result.innerHTML = "Invalid input. Please check your input.";
	}
}
meanButton.onclick = calcMean;



// Throws an error if one of the fields is empty but the other are filled (in the same row)
// e.g. valid points and total but weight is empty.
function calcWeight() {
	var per = 0;
	var count = 0;
	var errorr = false;
	
	for (var i = 0; i < numRows; i++) {
		// Skip to next row if completely empty
		if (points[i].value === "" && total[i].value === "" && weight[i].value === "") {
			continue;
		}
		else {
			// Check if input isn't a number, is empty, the number is negative (or 0 for total)
			// Flip error flag if it is
			if (isNaN(points[i].value) || points[i].value === "" || points[i].value < 0 || isNaN(total[i].value) || total[i].value <= 0) {
				errorr = true;
			}
			else {
				// Check if weight field isn't a number, is empty, or is negative
				// Flip error flag if it is
				if (isNaN(weight[i].value) || weight[i].value < 0 || weight[i].value === "") {
					errorr = true;
				}
				else {
					per += (points[i].value / total[i].value) * eval(weight[i].value);
					count += eval(weight[i].value);
				}
			}
		}
	}
	
	if (count != 0 && errorr == false) {
		var wei =  per / count * 100;
		wei = +wei.toFixed(3);
	
		result.innerHTML = wei + "%";
	}
	else {
		result.innerHTML = "Invalid input. Please check your input.";
	}
}
weightButton.onclick= calcWeight;



function resetInputs() {
	for (var i = 0; i < numRows; i++) {
		points[i].value = "";
		total[i].value = "";
		percent[i].innerHTML = "";
		weight[i].value = "";
	}
	result.innerHTML = "";
}
resetButton.onclick = resetInputs;



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
addRowButton.onclick = addRow;
