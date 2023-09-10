import { db } from '../services/firebase';
import { getDocs, collection, query, where } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

export const useLogin = () => {

    const reference = collection(db, "usuarios");

    const getLogin = async( dni, clave) => {

        try {
            
            const q = query(reference, where("dni", "==", dni));
            const data = await getDocs(q);
            const results = [];

            data.forEach(doc => {
                
                results.push({
                    ...doc.data()
                })
            });

            results.map(user => (user.clave === clave) ? localStorage.setItem('auth', JSON.stringify(true)) : localStorage.setItem('auth', JSON.stringify(false)) );
        } catch (error) {
            return error;
        }
    }

    const Logout = () => {

        localStorage.setItem('auth', JSON.stringify(false));
    }

    return {
        getLogin,
        Logout
    }
}