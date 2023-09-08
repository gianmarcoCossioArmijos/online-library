import { db } from '../services/firebase';
import { getDocs, addDoc, collection, query } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

export const useProduccion = () => {

    const reference = collection(db, "librosProduccion");

    const getProduccion = async() => {

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
    }

    const setProduccion = async(libro) => {

        try {
            
            const response = await addDoc(reference, libro);
        } catch (error) {

            return error;
        }
    }

    return {
        getProduccion,
        setProduccion
    }
}