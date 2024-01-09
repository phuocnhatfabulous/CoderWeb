import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebase/firebase';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';

type AuthPageProps = {
    teacherPage?: boolean;
    studentPage?: boolean;
};

export const useSetUserRole = () => {
    const [user, loading, error] = useAuthState(auth);
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const fetchUserRole = async () => {
            if (user) {
                const q = query(
                    collection(firestore, 'roles'),
                    where('uid', '==', user.uid)
                );
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const userData = querySnapshot.docs[0].data();
                    setUserRole(userData.role);
                }
                console.log(userRole);
            }
        };

        fetchUserRole();
    });

    return userRole;
};
