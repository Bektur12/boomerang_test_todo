'use client'
import React, { FC } from 'react'
import { TodoForm } from '~/components/Todo/Form/TodoForm'

const Page: FC = () => {
	return (
		<div className='flex  items-center  h-screen justify-center w-full'>
			<TodoForm />
		</div>
	)
}

export default Page
