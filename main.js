'use strict'

const num2piece = num => String.fromCodePoint (num + 9812)
const piece2num = char => char.codePointAt(0) - 9812

const gameArray = []

onload = ()=> d.body.appendChild (elem ({
	tag: 'table',
	content: 8 .map (row => elem ({
		tag: 'tr',
		content: 8 .map (col =>
			gameArray [(row * 8) + col] = elem ({
				tag: 'td',
				content: startPos(row, col),
				attr: { class:
					row < 2 ? 'player p0' :
					row > 5 ? 'player p1' :
					''
				},
				mixin: {
					onclick: activate,
					position: (row * 8) + col,
					onmouseenter: showPoss,
				}
}))}))}))

const startPos = (row, col) => ({
	0: '♜♞♝♛♚♝♞♜' [col],
	1: '♟',
	6: '♙',
	7: '♖♘♗♕♔♗♘♖' [col],
}) [row] || ''

const activate = ({target}) => {
	target.classList.toggle ('active')
}

const showPoss = ({target}) => {
	const {position} = target
	possibilities (target.innerText, )
}

const possibilities = '♖♘♗♕♔♙'