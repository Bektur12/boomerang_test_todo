'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { Todo } from '~/types'
import { TodoDetails } from '../Details/TodoDetails'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { getServerError } from '~/utils/helpers/error.helper'
import { useCreateTodoMutation } from '~/hooks/queries'

interface Props {}

export const TodoForm: React.FC<Props> = ({}) => {
	const methods = useForm<Todo>()
	const createTodo = useCreateTodoMutation()
	const router = useRouter()

	const submitHandler = async (formData: Todo) => {
		try {
			await createTodo.mutateAsync({ ...formData }).then(() => {
				router.push('/todo')
				toast.success('Успешно Добавлен')
			})
		} catch (e) {
			toast.error(getServerError(e))
		}
	}

	return (
		<FormProvider {...methods}>
			<TodoDetails title='Create Todo' onSubmit={submitHandler} />
		</FormProvider>
	)
}
