import { auth, firestore } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export const useGetUserOnCourse = (courseId: string) => {
    const [data, setData] = useState({
        enrolled: false,
        saved: false,
    });
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getUserOnCourse = async () => {
            const userRef = doc(firestore, 'users', user!.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const data = userSnap.data();
                const { enrolledCourse, savedCourse } = data;
                setData({
                    enrolled: enrolledCourse.includes(courseId),
                    saved: savedCourse.includes(courseId),
                });
            }
        };

        if (user) getUserOnCourse();
        return () => {
            setData({
                enrolled: false,
                saved: false,
            });
        };
    }, [courseId, user]);

    return { ...data, setData };
};
