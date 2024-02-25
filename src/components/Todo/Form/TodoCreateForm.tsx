'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { Todo } from '~/types'
import { TodoDetails } from '../Details/TodoDetails'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { getServerError } from '~/utils/helpers/error.helper'
import { useCreateTodoMutation } from '~/hooks/queries'

interface Props {}

export const TodoCreateForm: React.FC<Props> = ({}) => {
	const createTodo = useCreateTodoMutation()
	const router = useRouter()

	const submitHandler = (formData: Todo) => {
		try {
			createTodo.mutateAsync({ ...formData }).then(() => {
				router.push('/todo')
				toast.success('Успешно добавлен')
			})
		} catch (e) {
			toast.error(getServerError(e))
		}
	}

	return <TodoDetails title='Create Todo' onSubmit={submitHandler} />
}
