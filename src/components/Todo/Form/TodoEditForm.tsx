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
	const router = useRouter()

	const updateTodo = useUpdateTodoMutation()

	const { data: todo } = useTodosByIdQuery(todoId)

	const onSubmit = (formData: Todo) => {
		try {
			updateTodo
				.mutateAsync({ todo: { ...formData }, todoId })
				.then(() => {
					router.push('/todo')
					toast.success('Успешно изменен')
				})
		} catch (e) {
			toast.error(getServerError(e))
		}
	}

	return <TodoDetails title='Edit Todo' onSubmit={onSubmit} todo={todo} />
}
