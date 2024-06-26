// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона и возвращает новое здоровье игрока. Здоровье не может быть меньше 0.

function combat(health, damage) {
	health = health - damage

	if (health <= 0) {
		health = 0
		return `${health}, Health cannot go below 0`
	}
	
	return health	
}

console.log(combat(0, 30))