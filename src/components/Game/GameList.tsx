import React from 'react'
import Card, { Icard } from './Card/Card'

type GameProps = {
	cards: Icard[]
	onSelectCard: (card: Icard, index: number) => void
}
export const GameList = ({ cards, onSelectCard }: GameProps) => {
	return (
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
	)
}
