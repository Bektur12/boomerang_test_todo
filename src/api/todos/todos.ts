import { Todo, TodoItem } from '~/types'
import { baseAxios } from '../axios/baseAxios'

export const getTodos = async (): Promise<Todo> => {
	const response = await baseAxios.get('/todos')
	return response.data
}

export const getTodosById = async (id: string): Promise<Todo> => {
	const response = await baseAxios.get(`/todos/${id}`)
	return response.data as Todo
}

export const addTodoItem = async (todo: TodoItem): Promise<Todo> => {
	const response = await baseAxios.post('/todos', todo)
	return response.data
}

export const updateTodoItem = async (
	id: number,
	todo: TodoItem,
): Promise<Todo> => {
	const response = await baseAxios.put(`/todos/${id}`, todo)
	return response.data
}

export const deleteTodoItem = async (id: number): Promise<void> => {
	const response = await baseAxios.delete(`/todos/${id}`)
	return response.data
}
