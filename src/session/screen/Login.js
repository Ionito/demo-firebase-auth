import React from 'react';

const LoginScreen = ({ signIn, status}) => {
    return (<div>
        {status === 'init' && <span>Intentando restaurar session...</span>}
        {status === 'restored' && <button onClick={signIn}>Iniciar sesión en google</button>}
    </div>)
}
export default LoginScreen