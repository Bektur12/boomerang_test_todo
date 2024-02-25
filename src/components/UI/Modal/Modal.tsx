'use client'

import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	showModal: boolean
	openLabel: string
	setShowModal: (isShow: boolean) => void
}

export const Modal: React.FC<Props> = ({
	children,
	openLabel,
	showModal,
	setShowModal,
}) => {
	return (
		<>
			<button
				className='py-3 px-6 rounded-md border border-gray-300'
				onClick={() => setShowModal(true)}
			>
				{openLabel ?? 'Открыть'}
			</button>
			{showModal && (
				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div
						className='fixed inset-0 w-full h-full bg-black opacity-40'
						onClick={() => setShowModal(false)}
					></div>
					<div className='flex items-center min-h-screen px-4 py-8'>
						х
						<div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg dark:bg-slate-900 dark:text-white'>
							<div className='mt-3'>{children}</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
