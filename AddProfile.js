import React, { useContext, useState } from 'react'
import { GlobalContext } from './components/GlobalContext'

function AddProfile() {
    const [userName, setUserName] = useState('')
    const [profilePicture, setProfilePicture] = useState('')
    const [birthday, setBirthday] = useState('')
    const { dispatch } = useContext(GlobalContext)

    function createNewUser() {
        e.preventDefault()
        const newUser = {
            userId: Date.now(),
            userName: userName,
            profilePicture: profilePicture,
            birthdayDate: new Date(birthday),
        }
        dispatch({ type: 'ADD_NEW_USER', newUser })
    }

    return (
        <form onSubmit={createNewUser}>
            <label>Username</label>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

            <label>Profile Pic:</label>
            <input type="text" value={profilePicture} onChange={e => setProfilePicture(e.target.value)} />

            <label>Birthday:</label>
            <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />

            <button> Save</button>
        </form>
    )
}

export default AddProfile
