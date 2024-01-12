import { firestore } from '@/firebase/firebase';
import { DBCourse } from '@/utils/types/course';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useGetCurrentCourse = (courseId: string) => {
    const [currentCourse, setCurrentCourse] = useState<DBCourse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getCurrentCourse = async () => {
            setLoading(true);
            const docRef = doc(firestore, 'courses', courseId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const course = docSnap.data();
                setCurrentCourse({ id: docSnap.id, ...course } as DBCourse);
            }
            setLoading(false);
        };
        getCurrentCourse();
    }, [courseId]);

    return {
        currentCourse,
        loading,
        setCurrentCourse,
    };
};
