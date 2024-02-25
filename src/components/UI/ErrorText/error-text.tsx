import React, { FC } from 'react'
import { FieldError } from 'react-hook-form'

type Props = {
	error?: FieldError
}
const ErrorText: FC<Props> = ({ error }) => {
	if (!error) return

	return <p className='text-red-600 text-sm mt-0.5'>{error?.message}</p>
}

export default ErrorText
