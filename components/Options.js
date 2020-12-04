import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import AddProfile from '../AddProfile'
import ProfileOptions from './ProfileOptions'
import SwitchProfile from './SwitchProfile'
// Menu + 3 others components
// Swich will live here

// Profile options
// Switch Profile
// add profile/ user Account
function Options() {
    return (
        <div>
            <Link to="/options">Options</Link>
            <Link to="/options/switch">Switch Profile</Link>
            <Link to="/options/add">Add Account </Link>

            <Switch>
                <Route exact path="/options">
                    <ProfileOptions />
                </Route>
                <Route path="/options/switch">
                    <SwitchProfile />
                </Route>
                <Route path="/options/add">
                    <AddProfile />
                </Route>
            </Switch>

        </div>
    )
}

export default Options
