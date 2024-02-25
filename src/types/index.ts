import { ReactNode } from 'react'

export type Todo = {
	title: string
	description: string
	id: number
}

export type WithoutId = Omit<Todo, 'id'>

export type LayoutProps = {
	children: ReactNode
}
