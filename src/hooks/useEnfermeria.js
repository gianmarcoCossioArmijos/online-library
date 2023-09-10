import { db } from '../services/firebase';
import { getDocs, addDoc, collection, query } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

export const useEnfermeria = () => {

    const reference = collection(db, "librosEnfermeria");

    const getEnfermeria = async() => {

        try {
            
            const q = query(reference);
            const data = await getDocs(q);
            const results = []

            data.forEach(doc => {
                
                results.push({
                    id: doc.id,
                    ...doc.data()
                })
            });

            return results;
        } catch (error) {

            return error;
        }
    }

    const setEnfermeria = async(libro) => {

        try {
            
            const response = await addDoc(reference, libro);
            return response;
        } catch (error) {

            return error;
        }
    }

    return {
        getEnfermeria,
        setEnfermeria
    }
}