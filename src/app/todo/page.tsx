'use client'
import React from 'react'
import { TodoList } from '~/components/Todo/TodoList'
import { useTodosQuery } from '~/hooks/queries'

const TodoPages: React.FC = () => {
	const { data, isLoading, isError } = useTodosQuery()

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Что-то пошло не так</div>
	}

	return (
		<div className='flex flex-col items-center p-20 pt-40'>
			<TodoList todos={data || []} />
		</div>
	)
}

export default TodoPages
