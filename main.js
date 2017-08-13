'use strict'

const num2piece = num => String.fromCodePoint (num + 9812)
const piece2num = char => char.codePointAt(0) - 9812

const gameMap = new Map ()

const gameArray = []

onload = ()=> d.body.appendChild (elem ({
	tag: 'table',
	content: 8 .map (y => elem ({
		tag: 'tr',
		content: 8 .map (x =>
			gameMap .set ({x, y}, elem ({
				tag: 'td',
				content: startPos(y, x),
				attr: { class:
					y < 2 ? 'player p0' :
					y > 5 ? 'player p1' :
					''
				},
				mixin: {
					onclick: activate,
					position: (y * 8) + x,
					onmouseenter: showPoss,
				}
})))}))}))

const startPos = (y, x) => ({
	0: '♜♞♝♛♚♝♞♜' [x],
	1: '♟',
	6: '♙',
	7: '♖♘♗♕♔♗♘♖' [x],
}) [y] || ''

const activate = ({target}) => {
	target.classList.toggle ('active')
}

const showPoss = ({target}) => {
	const {position} = target
	possibilities (target.innerText, num2coords (position))
}

const num2coords = n => ({
	x: n % 8,
	x: Math.floor(n / 8),
})

const isValid = ({x, y}) => (x >= 0 && x <= 7 && y >= 0 && y <= 7)

const possibilities = (symbol, {x, y}) => {
	switch (expression) {
		case '♟':
		  return [
				{ x: x - 1, y: y - 1},
				{ x, y: y - 1},
				{ x: x + 1, y: y - 1},
			] .filter (isValid)
		case '♙':
		  return [
				{ x: x - 1, y: y + 1},
				{ x, y: y + 1},
				{ x: x + 1, y: y + 1},
			] .filter (isValid)
		case '♜': case '♖':
			break
		case '♞': case '♘':
			break
		case '♝': case '♗':
			break
		case '♛': case '♕':
			break
		case '♚': case '♔':
	}
}
