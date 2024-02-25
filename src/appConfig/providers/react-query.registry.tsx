'use client'

import React, { FC, ReactNode, useState } from 'react'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

type Props = {
	children: ReactNode
}
const ReactQueryRegistry: FC<Props> = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient())
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}

export default ReactQueryRegistry
