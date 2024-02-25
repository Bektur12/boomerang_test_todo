'use client'
import React, { useEffect, useState } from 'react'
import { shuffleArray } from '~/utils/helpers/shuffleArray'
import Card, { Icard } from '~/components/Game/Card/Card'
import { CARDS } from '~/utils/constants/constants'

interface ISelectedCard extends Icard {
	index: number
}

interface selectedCardState {
	first: ISelectedCard | null
	second: ISelectedCard | null
}

const Game = () => {
	const [count, setCount] = useState({ attempts: 0, correct: 0 })
	const [cards, setCards] = useState(shuffleArray<Icard>(CARDS))
	const [selectedCards, setSelectedCards] = useState<selectedCardState>({
		first: null,
		second: null,
	})

	const onSelectCard = (card: Icard, index: number) => {
		if (selectedCards.first?.index === index) return

		const newCards = [...cards]
		if (!selectedCards.first) {
			newCards[index].isActive = true
			setCards(newCards)
			return setSelectedCards({
				...selectedCards,
				first: { ...card, index },
			})
		}
		if (!selectedCards.second) {
			newCards[index].isActive = true
			setCards(newCards)
			setCount({ ...count, attempts: count.attempts + 1 })
			return setSelectedCards({
				...selectedCards,
				second: { ...card, index },
			})
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			const newCards = [...cards]

			if (selectedCards.first && selectedCards.second) {
				const indexOfFirst = selectedCards.first.index
				const indexOfSecond = selectedCards.second.index
				if (selectedCards.first.icon === selectedCards.second.icon) {
					newCards[indexOfFirst].isActive = false
					newCards[indexOfFirst].isFound = true

					newCards[indexOfSecond].isActive = false
					newCards[indexOfSecond].isFound = true
					setCount({
						correct: count.correct + 1,
						attempts: count.attempts + 1,
					})
					setSelectedCards({ first: null, second: null })
					setCards(newCards)
				} else {
					newCards[indexOfFirst].isActive = false
					newCards[indexOfSecond].isActive = false
					setCards(newCards)
					setSelectedCards({ first: null, second: null })
				}
			}
		}, 800)

		if (count.correct + 1 === 7) {
			clearTimeout(timer)
			alert(
				`OMG You have passed this game with ${
					count.attempts + 1
				} attempts!!!`,
			)
		}

		return () => clearTimeout(timer)
	}, [cards, selectedCards, count])

	return (
		<div className='flex justify-center w-590 flex-col mt-80'>
			<h1 className='text-center'>Memory Game</h1>
			<div className='h-36 p-20  grid grid-cols-4 grid-rows-4 justify-center gap-20'>
				{cards.map((card, i) => {
					return (
						<Card
							key={i}
							onClick={() => onSelectCard(card, i)}
							{...card}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Game
