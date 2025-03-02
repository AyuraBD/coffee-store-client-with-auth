import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react'
import Auth from '../Firebase/Firebase.config';
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user,  setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders