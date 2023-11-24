import { app } from "./firebase";

import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut, GoogleAuthProvider} from 'firebase/auth' 
import {addDoc, collection, query, getDocs, where} from 'firebase/firestore' 

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const loginWithEmailAndPassword = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error){
        console.log(error)
    }
}

const registerWithEmailAndPassword = async (name, email, password) => { 
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db), "users", {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error){
        //    
    }
    
}

const logout = () => {
    signOut(auth)
}

export const entrarWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider)
        const user = res.user
        const q = query(collection(db, "users"), where("uid", "==", user.uid ))
        const docs = await getDocs(q)

        if(docs.docs.length === 0){
            await addDoc(collection(db), "users", {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            })
        }
    } catch (err){
        //
    }
}

export {
    auth,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    
}