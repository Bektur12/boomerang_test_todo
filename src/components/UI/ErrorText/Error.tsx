import React, { ReactNode } from 'react'

type ErrorType = {
	children: ReactNode
}
export const Error: React.FC<ErrorType> = ({ children }) => {
	return <h1 className='text-center flex items-center'>{children}</h1>
}
