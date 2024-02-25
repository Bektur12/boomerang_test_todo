import React, { FC } from 'react'
import Header from '~/layout/Header'

import { LayoutProps } from '~/types'
import '../styles/globals.scss'
import { Toaster } from '~/components/UI/Sonner/sonner'
import ReactQueryRegistry from '~/appConfig/providers/react-query.registry'

const RootLayout: FC<LayoutProps> = ({ children }) => {
	return (
		<html>
			<head>
				<title>Todo App</title>
			</head>
			<body>
				<ReactQueryRegistry>
					<Toaster />
					<main>
						<Header />
						{children}
					</main>
				</ReactQueryRegistry>
			</body>
		</html>
	)
}

export default RootLayout
