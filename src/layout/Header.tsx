import React, { FC } from 'react'
import Link from 'next/link'
import { Button } from '~/components/UI/Button/Button'

const Header: FC = () => {
	return (
		<header className='bg-black py-5 fixed w-full top-0 z-40'>
			<div className='layout text-white flex items-center justify-between'>
				<h2 className='text-2xl'>
					<Link href='/'>Todos App</Link>
				</h2>
				<div className='flex gap-4'>
					<Button variant='secondary' size='sm'>
						<Link href='/todo'>Todos</Link>
					</Button>
					<Button variant='secondary' size='sm' asChild>
						<Link href='/todo/create'>Create Todo</Link>
					</Button>
				</div>
			</div>
		</header>
	)
}

export default Header
