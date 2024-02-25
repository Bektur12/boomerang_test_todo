import { Todo } from '~/types'
import { Button } from '../UI/Button/Button'
import Link from 'next/link'

interface Props {
	todo: Todo
}

export const TodoCard: React.FC<Props> = ({ todo }) => {
	return (
		<div className={`w-full mb-5 p-5 rounded-md border border-gray-300 `}>
			<div className='flex justify-between gap-2 mb-4'>
				<div className='text-lg'>{todo.title}</div>
			</div>
			<div className='text-sm mb-2'>{todo.description}</div>
			<div className='flex justify-end'>
				<Button variant='link'>
					<Link href={`todo/${todo.id}`}>Подробнее</Link>
				</Button>
				<Button variant={'outline'}>
					<Link href={`todo/update/${todo.id}`}>Редактировать</Link>
				</Button>
			</div>
		</div>
	)
}
