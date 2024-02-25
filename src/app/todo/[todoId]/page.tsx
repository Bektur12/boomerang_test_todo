'use client'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Button } from '~/components/UI/Button/Button'
import { useDeleteTodoMutation, useTodosByIdQuery } from '~/hooks/queries'
import { getServerError } from '~/utils/helpers/error.helper'

const Page = () => {
	const router = useRouter()
	const { todoId } = useParams()

	const { data: todo = {} } = useTodosByIdQuery(todoId as string)

	const deleteTodo = useDeleteTodoMutation()

	const handleDeleteTodo = () => {
		try {
			deleteTodo.mutateAsync(Number(todoId)).then(() => {
				router.back()
				toast.success('Успешно удален!')
			})
		} catch (e) {
			toast.error(getServerError(e))
		}
	}

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className={`w-96 mb-2 p-5 rounded-md border border-gray-300 `}>
				<div className='flex justify-between items-center gap-2 mb-4'>
					<div className='text-lg'>Title: {todo.title}</div>
				</div>
				<p className='text-sm mb-2'>Description: {todo.description}</p>
				<div className='flex justify-end gap-10'>
					<Button size={'sm'} onClick={handleDeleteTodo}>
						Удалить
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Page
