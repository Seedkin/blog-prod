import { Link } from 'react-router-dom'
import { Icon } from '../../../../components'
import styled from 'styled-components'

const LargeText = styled.div`
	font-weight: 600;
	font-size: 48px;
	line-height: 48px;
	margin-top: 10px;
`

const SmollText = styled.div`
	font-size: 18px;
	font-weight: bold;
`

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon size="70px" margin="0 10px 0 0" id="fa-code" />
		<div>
			<LargeText>Блог</LargeText>
			<SmollText>веб-разработчика</SmollText>
		</div>
	</Link>
)

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -20px;
`
