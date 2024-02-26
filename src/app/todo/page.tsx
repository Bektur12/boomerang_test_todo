'use client'
import React from 'react'
import { TodoList } from '~/components/Todo/TodoList'
import { Error } from '~/components/UI/ErrorText/Error'
import { useTodosQuery } from '~/hooks/queries'

const TodoPages: React.FC = () => {
	const { data, isLoading, isError } = useTodosQuery()

	const renderPage = () => {
		if (isLoading) {
			return <Error>Loading...</Error>
		}

		if (isError) {
			return <Error>Что-то пошло не так</Error>
		}

		return <TodoList todos={data || []} />
	}

	return (
		<div className='flex flex-col items-center p-20 pt-40 h-screen'>
			{renderPage()}
		</div>
	)
}

export default TodoPages
