import { QUERY_KEY } from '~/utils/constants/constants'
import {
	addTodoItem,
	deleteTodoItem,
	getTodos,
	getTodosById,
	updateTodoItem,
} from '../api/todos/todos'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Todo, TodoItem } from '~/types'

export const useTodosQuery = () =>
	useQuery({
		queryKey: [QUERY_KEY],
		queryFn: () => getTodos(),
		refetchOnWindowFocus: false,
	})

export const useTodosByIdQuery = (todoId: string) =>
	useQuery({
		queryKey: [QUERY_KEY, todoId],
		queryFn: () => getTodosById(todoId),
		refetchOnWindowFocus: false,
	})

export const useUpdateTodoMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: { todo: Todo; todoId: string }) =>
			updateTodoItem(Number(data.todoId), data.todo),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})
}

export const useDeleteTodoMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (todoId: number) => deleteTodoItem(todoId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})
}

export const useCreateTodoMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (body: TodoItem) => addTodoItem(body),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
		},
	})
}
