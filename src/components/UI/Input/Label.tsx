import React, { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLLabelElement>
const Label: FC<Props> = ({ ...props }) => {
	return <label {...props} />
}

export default Label
