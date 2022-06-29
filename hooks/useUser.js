import {useEffect, useState} from "react";

/// Hook para el manejo del usuario logueado
export function useUser() {
    /// User state
    const [user, setUser] = useState();

    /// Effect para setear el user guardado en el LocalStorage si existe
    useEffect(()=>{
       const initialUser = JSON.parse(window.localStorage.getItem('user'));
       setUser(initialUser)
    }, [setUser])


    function userChanged(user) {
        /// Si el usuario es null se considera como un LogOut.
        setUser(user);
        user
            ? window.localStorage.setItem("user", JSON.stringify(user))
            : window.localStorage.removeItem("user");
    }

    return [user, userChanged];
}
