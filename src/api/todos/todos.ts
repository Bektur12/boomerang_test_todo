import { WithoutId } from '~/types'
import { baseAxios } from '../axios/baseAxios'

export const getTodos = async () => {
	const response = await baseAxios.get('/todos')
	return response.data
}

export const getTodosById = async (id: string) => {
	const response = await baseAxios.get(`/todos/${id}`)
	return response.data
}

export const addTodoItem = async (todo: WithoutId) => {
	const response = await baseAxios.post('/todos', todo)
	return response.data
}

export const updateTodoItem = async (id: number, todo: WithoutId) => {
	const response = await baseAxios.put(`/todos/${id}`, todo)
	return response.data
}

export const deleteTodoItem = async (id: number) => {
	const response = await baseAxios.delete(`/todos/${id}`)
	return response.data
}
