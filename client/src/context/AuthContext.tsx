import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import {ReactNode, createContext, useContext} from 'react'

const Context = createContext<AuthContext | null>(null)

type AuthContext {

}
type User = {
    id: string,
    name: string,
    image?: string
}


export function useAuth(){
    return useContext(Context )
} 


type AuthProviderProps {
 children: ReactNode
}


function AuthProvider( {children}:AuthProviderProps){
   
    const signup = useMutation({
        mutationFn: (user: User) => {
         return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user)
        }

    })
    return <Context.Provider value={{}}>
        {children}
    </Context.Provider>

}