import { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

AuthProvider.propTypes = { children: PropTypes.node.isRequired }

export default AuthProvider