import * as React from 'react'
import { cn } from '~/lib/utils'
import { FieldError } from 'react-hook-form'
import Label from './Label'
import ErrorText from '../ErrorText/error-text'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError
	label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, label, error, ...props }, ref) => {
		return (
			<div className='flex flex-col gap-1'>
				{label && <Label>{label}</Label>}
				<input
					type={type}
					className={cn(
						'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
						className,
					)}
					ref={ref}
					{...props}
				/>
				{error && <ErrorText error={error} />}
			</div>
		)
	},
)

Input.displayName = 'Input'

export { Input }
