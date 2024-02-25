'use client'
import React, { useEffect } from 'react'
import { TodoDetails } from '../Details/TodoDetails'
import { FormProvider, useForm } from 'react-hook-form'
import { Todo } from '~/types'
import { useTodosByIdQuery, useUpdateTodoMutation } from '~/hooks/queries'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { getServerError } from '~/utils/helpers/error.helper'

export const TodoEditForm = () => {
	const { todoId } = useParams<{ todoId: string }>()
	const methods = useForm<Todo>()
	const router = useRouter()

	const updateTodo = useUpdateTodoMutation(todoId)

	const { data: todo } = useTodosByIdQuery(todoId)

	const onSubmit = async (formData: Todo) => {
		try {
			await updateTodo.mutateAsync({ todo: { ...formData } }).then(() => {
				router.push('/todo')
				toast.success('Успешно изменен')
			})
		} catch (e) {
			toast.error(getServerError(e))
		}
	}

	useEffect(() => {
		if (todo) {
			methods.setValue('description', todo.description)
			methods.setValue('title', todo.title)
		}
	}, [todoId, todo])

	return (
		<FormProvider {...methods}>
			<TodoDetails title='Edit Todo' onSubmit={onSubmit} />
		</FormProvider>
	)
}
