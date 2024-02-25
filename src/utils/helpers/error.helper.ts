import { isAxiosError } from 'axios'

export const getServerError = (error: unknown): string => {
	if (isAxiosError(error)) {
		return error.response?.data.message
	}
	if (error instanceof Error) {
		return error.message
	}
	return 'Something went wrong'
}
