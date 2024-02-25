import { Todo } from '~/types'
import { TodoCard } from './TodoCard'

interface Props {
	todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos = [] }) => {
	return (
		<div className='flex flex-wrap gap-3 w-full'>
			{todos.map((todo) => (
				<TodoCard key={todo.id} todo={todo} />
			))}
		</div>
	)
}
