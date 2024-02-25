'use client'
import React, { FC, useState } from 'react'
import Header from '~/layout/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { LayoutProps } from '~/types'
import '../styles/globals.scss'
import { Toaster } from '~/components/UI/sonner'

const RootLayout: FC<LayoutProps> = ({ children }) => {
	const [client] = useState(new QueryClient())

	return (
		<QueryClientProvider client={client}>
			<html>
				<head>
					<title>Todo App</title>
				</head>
				<body>
					<Toaster />
					<main>
						<Header />
						{children}
					</main>
				</body>
			</html>
		</QueryClientProvider>
	)
}

export default RootLayout
