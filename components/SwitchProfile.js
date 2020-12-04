import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

function SwitchProfile() {
    const { state, dispatch } = useContext(GlobalContext)
    const { users, currentUser } = state
    const userOptions = users.map(user => (
        <option key={user.userId} value={user.userId}>
            {user.userName}
        </option>))

    function switchAccount(e) {
        e.preventDefault()
        const newUserId = e.target.value
        dispatch({ type: "NEW_USER_ACCOUNT", newUserId })
    }

    return (
        <form onSubmit={switchAccount}>
            <select value={currentUser} onChange={switchAccount}>
                {userOptions}
            </select>
            <button>
                Save
            </button>
        </form>
    )
}

export default SwitchProfile
