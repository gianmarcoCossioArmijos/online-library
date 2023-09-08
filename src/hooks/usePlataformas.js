import { db } from '../services/firebase';
import { getDocs, addDoc, collection, query } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

export const usePlataformas = () => {

    const reference = collection(db, "librosPlataforma");

    const getPlataformas = async() => {

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

    const setPlataformas = async(libro) => {

        try {
            
            const response = await addDoc(reference, libro);
        } catch (error) {

            return error;
        }
    }

    return {
        getPlataformas,
        setPlataformas
    }
}