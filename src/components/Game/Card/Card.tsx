import Image from 'next/image'
import React, { FC } from 'react'

export interface Icard {
	icon: string
	isFound: boolean
	isActive: boolean
}
interface CardProps extends Icard {
	onClick(): void
}

const SIZE = {
	width: 50,
	height: 50,
}

const Card: FC<CardProps> = ({ icon, isActive, isFound, onClick }) => {
	if (isFound) {
		return (
			<div className='w-full h-full rounded-lg cursor-pointer'>
				<div className='bg-found rounded-lg h-full w-full flex items-center justify-center'>
					<Image
						src={icon}
						alt='card-icon'
						width={SIZE.width}
						height={SIZE.height}
					/>
				</div>
			</div>
		)
	}

	return (
		<div
			className={`w-full h-full rounded-lg cursor-pointer transform ${
				isActive ? 'rotate-y-180' : ''
			} transition-transform duration-500`}
			onClick={onClick}
		>
			{!isActive && (
				<Image
					src='https://img.icons8.com/ios/50/000000/question-mark--v1.png'
					alt='question-icon'
					width={SIZE.width}
					height={SIZE.height}
					className='absolute inset-0 m-auto object-cover'
				/>
			)}
			{isActive && (
				<div className='bg-active rounded-lg h-full w-full flex items-center justify-center'>
					<Image
						src={icon}
						alt='card-icon'
						width={SIZE.width}
						height={SIZE.height}
						className='object-cover'
					/>
				</div>
			)}
		</div>
	)
}

export default Card
