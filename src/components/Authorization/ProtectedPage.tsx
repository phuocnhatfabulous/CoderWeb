import React, { use, useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import Link from 'next/link';

type AuthPageProps = {
  teacherPage?: React.ReactNode
  studentPage?: React.ReactNode
}

const Authorized: React.FC<AuthPageProps> = ({ teacherPage, studentPage }) => {
  const [user, loading, error] = useAuthState(auth)
  const [userRole, setUserRole] = useState("")

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        const roleRef = query(
          collection(firestore, 'roles'), where('uid', '==', user.uid)
        )

        const roleDoc = await getDocs(roleRef)
        if (roleDoc) {
          roleDoc.forEach((doc) => {
            setUserRole(doc.data().roles)
          })
        }
      }
    }

    fetchUserRole()
  }, [user])

  if (loading) return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
  if (error) return (
    <p className='text-center text-dark-blue text-lg uppercase'>{error.message}</p>
  )

  if (userRole.includes("giangvien")) {
    return <>{teacherPage}</>
  }
  else if (userRole.includes("sinhvien")) {
    return <>{studentPage}</>
  }
  else {
    return (
      <p>Bạn không có quyền truy cập trang này. Quay lại <Link href='/'>Trang chủ</Link></p>
    )
  }
}

export default Authorized