
document.addEventListener("DOMContentLoaded", function() {

	// var over = 0;
	// var tour = 1;
	// var Plateau = document.getElementById('plateau');
	// var Cases = document.getElementsByClassName('case');
	// var Info = document.getElementById('info');

	// function newGame() {
	// 	for(var i = 0; i < 9; i++)
	// 		Cases[i].innerHTML = "";
	// 	tour = 1;
	// 	Info.innerText = "C'est au joueur 1 !";
	// 	over = 0;
	// }

	// function isEmpty(id) {
	// 	return(document.getElementById(id).innerHTML);
	// }

	// function putSymbol(id) {
	// 	document.getElementById(id).innerText = (tour == 1)?"O":"X";
	// }


	// function testColonne(n) {
	// 	var player1 = 0;
	// 	var player2 = 0;

	// 	for(var i = 0; i < 9; i++) {
	// 		if(i >= (n-1)*3 && i < (n*3)) {
	// 			if(Cases[i].innerText == "O")
	// 				player1++;
	// 			if(Cases[i].innerText == "X")
	// 				player2++;
	// 		}
	// 	}
	// 	if(player1 == 3 || player2 == 3)
	// 		return(1);
	// 	return(0);
	// }


	// function testDiagonale(n) {
	// 	var player1 = 0;
	// 	var player2 = 0;


	// 	if(n == 1) {
	// 		player1 += (document.getElementById('A1').innerText == "O")?1:0;
	// 		player2 += (document.getElementById('A1').innerText == "X")?1:0;

	// 		player1 += (document.getElementById('B2').innerText == "O")?1:0;
	// 		player2 += (document.getElementById('B2').innerText == "X")?1:0;

	// 		player1 += (document.getElementById('C3').innerText == "O")?1:0;
	// 		player2 += (document.getElementById('C3').innerText == "X")?1:0;

	// 		if(player1 == 3 || player2 == 3)
	// 			return(1);
	// 	}

	// 	if(n == 2) {
	// 		player1 += (document.getElementById('A3').innerText == "O")?1:0;
	// 		player2 += (document.getElementById('A3').innerText == "X")?1:0;

	// 		player1 += (document.getElementById('B2').innerText == "O")?1:0;
	// 		player2 += (document.getElementById('B2').innerText == "X")?1:0;

	// 		player1 += (document.getElementById('C1').innerText == "O")?1:0;
	// 		player2 += (document.getElementById('C1').innerText == "X")?1:0;

	// 		if(player1 == 3 || player2 == 3)
	// 			return(1);
	// 	}
	// 	return(0);
	// }


	// function testLigne(n) {
	// 	var player1 = 0;
	// 	var player2 = 0;

	// 	for(var i = 0; i < 9; i++) {
	// 		if(i % 3 == n-1) {
	// 			if(Cases[i].innerText == "O")
	// 				player1++;
	// 			if(Cases[i].innerText == "X")
	// 				player2++;
	// 		}
	// 	}
	// 	if(player1 == 3 || player2 == 3)
	// 		return(1);
	// 	return(0);
	// }


	// function isFull() {
	// 	for (var i = 0; i < 9; i++) {
	// 		if(Cases[i].innerHTML == "")
	// 			return(0);
	// 	}
	// 	return(1);
	// }

	// function isOver() {
	// 	if(isFull() == 1)
	// 		return(1);
	// 	for(var i = 0; i < 3; i++) {
	// 		if(testLigne(i) == 1 || testColonne(i) == 1 || testDiagonale(i) == 1)
	// 			return(1);
	// 	}
	// 	return(0);
	// }

	// function controller(monThis) {
	// 	if(over == 0) {
	// 		var id = monThis.id;
	// 		if(isEmpty(id) != "")
	// 			return(0);
	// 		putSymbol(id);
	// 		if(isOver() == 1) {
	// 			Info.innerText = "Victoire du joueur "+tour+" !";
	// 			over = 1;
	// 		}
	// 		else {
	// 			tour = (tour == 1)?2:1;
	// 			Info.innerText = "C'est au joueur "+tour+" !";
	// 		}
	// 	}
	// }


});