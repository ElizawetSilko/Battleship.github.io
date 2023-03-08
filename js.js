var randomLoc = Math.floor(Math.random() * 6);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var location4 = location3 + 1;
var location5 = location4 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false) {
	guess = prompt("Доброго времени суток😉! Это мини игра морской бой⚓ Представь, что в 10 ячейках по горизонтали •••••••••• (от одного до десяти) расположен 4-ёх палубный корабль противника. Твоя задача потопить его за меньшее кол-во попыток. Огооооонь! (введи число 1-10):");
	if (guess < 1 || guess > 10) {
		alert("Введи валидное значение 1-10");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3 || guess == location4 || guess == location5) {
			alert("Есть пробитие");
			hits = hits + 1;
			if (hits == 4) {
				isSunk = true;
				alert("Корабль потоплен, враги бегут");
			}
		} else {
			alert("Мимо цели");
		}
	}
}

var stats = 'Поздравляю с победой!'

var button = document.querySelector('button');

button.addEventListener('click', function() {
	alert('Морские сражения ждут тебя, Капитан!')
})