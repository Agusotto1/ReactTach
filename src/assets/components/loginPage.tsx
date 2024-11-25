import { useAuthStore } from "../../store/auth.store"

export function LoginPage(){
    
    const authStatus = useAuthStore(state => state.status)

    
    return(
        <>
        <h2>Login :)</h2>
        <h3>{authStatus}</h3>
        </>
    )
}