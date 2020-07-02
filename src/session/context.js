import React from 'react';

import auth from './api';
import Login from './screen/Login';

const SessionContext = React.createContext(null);

const SessionProvider = ({children}) => {
    const [user,setUser] = React.useState(null);
    const [status, setStatus] = React.useState('init');

    React.useEffect(() => {
        auth.onchange(user1=>{
            setUser(user1);
            setStatus('restored')
        })
    },[])

if(!user) return <Login signIn={auth.signIn} status={status} />

    const state = {user};
    const actions = { signOut: auth.signOut, signIn: auth.signIn};

return <SessionContext.Provider value={{state,actions}}>{children}</SessionContext.Provider>;
}
export { SessionProvider as Provider, SessionContext as default}