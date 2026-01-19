import { useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../../../../components'
import { TableRow } from '../table-row/table-row'
import { PROP_TYPE } from '../../../../constants'
import styled from 'styled-components'
import { request } from '../../../../utils'

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId)
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value))
	}

	const onRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
			setInitialRoleId(newUserRoleId)
		})
	}

	const isSaveButtonDisabled = selectedRoleId === initialRoleId

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registed-at-column">{registeredAt}</div>
				<div>
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<div className="save-role-button">
						<Icon
							id="fa-floppy-o"
							disabled={isSaveButtonDisabled}
							margin="0 0 0 10px"
							onClick={() => onRoleSave(id, selectedRoleId)}
						/>
					</div>
				</div>
			</TableRow>
			<Icon id="fa-trash-o" margin=" 0 0 0 10px" onClick={onUserRemove} />
		</div>
	)
}

export const UserRow = styled(UserRowContainer)`
	display: flex;
	align-items: center;
	margin-top: 5px;

	& select {
		font-size: 15px;
		padding: 0 5px;
	}
`
UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.ROLE_ID.isRequired,
	roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
}
