import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { User: action.payload }
        case 'LOGOUT':
            return { User: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        User: null
    })

    useEffect(() => {
        const User = JSON.parse(localStorage.getItem('User'))

        if (User) {
            dispatch({ type: 'LOGIN', payload: User })
        }
    }, [])

    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}