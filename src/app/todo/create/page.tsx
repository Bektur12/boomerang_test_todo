'use client'
import React, { FC } from 'react'
import { TodoCreateForm } from '~/components/Todo/Form/TodoCreateForm'

const Page: FC = () => {
	return (
		<div className='wrapper'>
			<TodoCreateForm />
		</div>
	)
}

export default Page
