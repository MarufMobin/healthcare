import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () =>{
    
    // const [ users, setUsers ] = useState([])
    
    const auth = getAuth();
    
    const signInUsingGoogle = () =>{
        
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
           
            const user = result.user;
            console.log(user)
            // setUsers(user)
        }).catch((error) => {
            console.log(error.massage)
        });

    }

    return {
        signInUsingGoogle,
        // user
        // user
    }

}

export default useFirebase;