import {useEffect, useState} from "react";

/// Hook para el manejo del usuario logueado
export function useUser() {
    const [user, setUser] = useState();
    useEffect(()=>{
       const initialUser = JSON.parse(window.localStorage.getItem('user'));
       setUser(initialUser)
    }, [setUser])
    /// Recupero el usuario del LocalStorage si existe

    /// State para el usuario


    function userChanged(user) {
        /// Si el usuario es null se considera como un LogOut.
        setUser(user);
        user
            ? window.localStorage.setItem("user", JSON.stringify(user))
            : window.localStorage.removeItem("user");
    }

    return [user, userChanged];
}
