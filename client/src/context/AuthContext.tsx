import { UseMutationResult, useMutation } from '@tanstack/react-query'
import axios, {AxiosResponse} from 'axios'
import {ReactNode, createContext, useContext} from 'react'



const Context = createContext<AuthContext | null>(null)

type AuthContext ={
 signup: UseMutationResult<AxiosResponse, unknown, User>
}
type User = {
    id: string,
    name?: string,
    image?: string
}


export function useAuth(){
    return useContext(Context) as AuthContext
} 


type AuthProviderProps ={
 children: ReactNode
}


export function AuthProvider( {children}:AuthProviderProps){


  const signup = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user)
    }
  })

    return <Context.Provider value={{signup}}>
        {children}DF
    </Context.Provider>

}