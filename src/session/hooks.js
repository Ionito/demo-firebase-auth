import React from 'react';

import SessionContext from './context';

export function useUser(){
    const {
        state: {user}
    } = React.useContext(SessionContext)
    return user;
}

export function useLogout(){
    const {
        actions: {signOut}
    } = React.useContext(SessionContext)
    return signOut;
}