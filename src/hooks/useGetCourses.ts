import { firestore } from '@/firebase/firebase';
import { DBCourse } from '@/utils/types/course';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

export function useGetCourses(
    setLoadingCourses: React.Dispatch<React.SetStateAction<boolean>>
) {
    const [courses, setCourses] = useState<DBCourse[]>([]);

    useEffect(() => {
        const getCourses = async () => {
            // fetching data logic
            setLoadingCourses(true);
            const q = query(
                collection(firestore, 'courses'),
                orderBy('viewCount', 'desc')
            );
            const querySnapshot = await getDocs(q);
            const tmp: DBCourse[] = [];
            querySnapshot.forEach((doc) => {
                tmp.push({ id: doc.id, ...doc.data() } as DBCourse);
            });
            setCourses(tmp);
            setLoadingCourses(false);
        };

        getCourses();
    }, [setLoadingCourses]);
    return courses;
}
