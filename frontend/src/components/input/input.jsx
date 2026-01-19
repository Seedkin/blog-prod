import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import styled from 'styled-components'

export const InputContainer = forwardRef(({ className, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />
})

export const Input = styled(InputContainer)`
	height: 40px;
	width: ${({ width = '100%' }) => width};
	margin: 0 0 10px;
	padding: 10px;
	border: 1px solid #000;
	font-size: 18px;
`

Input.propTypes = {
	width: PropTypes.string,
}
