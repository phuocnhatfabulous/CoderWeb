import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import Timer from '../Timer/Timer';
import { useRouter } from 'next/router';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';

type TopbarProps = {
  problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const router = useRouter();

  const handleProblemChange = (isForward: boolean) => {
    const { order } = problems[router.query.pid as string] as Problem;
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
      router.push(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find((key) => problems[key].order === Object.keys(problems).length);
      router.push(`/problems/${lastProblemKey}`);
    } else {
      router.push(`/problems/${nextProblemKey}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 mb-5 flex z-10 w-full shrink-0 items-center px-5 py-2 bg-dark-blue shadow-md shadow-white-blue-400 text-dark-gray-7">
      <div className={`flex w-full items-center justify-between ${!problemPage ? 'max-w-[1200px] mx-auto' : ''}`}>
        <Link href="/" className="flex items-center">
          <Image src="/itcoder-logo.svg" alt="Logo" height={200} width={200} />
        </Link>
        {problemPage && (
          <div className="flex items-center gap-4 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>
            {/* <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>Problem List</p>
            </Link> */}
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}
        <div className="flex items-center space-x-6 justify-start">
          <div>
            <Link
              href="/courses"
              rel="noreferrer"
              className="
              py-1.5 
              px-3 
              cursor-pointer 
              rounded 
              text-brand-orange 
              hover:bg-dark-fill-2
              select-none
              "
            >
              Khóa học
            </Link>
          </div>
          <div>
            <Link
              href="/practices"
              rel="noreferrer"
              className="py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2 select-none"
            >
              Luyện tập
            </Link>
          </div>
          <div>
            <Link
              href="/homeworks"
              rel="noreferrer"
              className="py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2 select-none"
            >
              Bài tập
            </Link>
          </div>
          <div>
            <Link
              href="/contests"
              rel="noreferrer"
              className="py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2 select-none"
            >
              Cuộc thi
            </Link>
          </div>
          <div>
            <Link
              href="/ranking"
              rel="noreferrer"
              className="py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2 select-none"
            >
              Xếp hạng
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 justify-start">
          {!user && (
            <Link
              href="/auth"
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  isOpen: true,
                  type: 'login',
                }))
              }
            >
              <button className="hover:bg-brand-orange hover:text-white text-white-blue bg-white-blue-400k bg-dark-fill-3 py-1 px-4 cursor-pointer rounded-full ">
                Đăng nhập
              </button>
            </Link>
          )}
          {user && problemPage && <Timer />}
          {user && (
            <div className="cursor-pointer group relative">
              <Image src="/avatar.svg" alt="Avatar" width={30} height={30} className="rounded-full" />
              <div
                className="
                absolute 
                top-10 
                left-2/4 
                -translate-x-2/4  
                mx-auto 
                bg-dark-layer-1 
                text-brand-orange 
                p-2 
                rounded 
                shadow-lg 		
                z-40 
                group-hover:scale-100 
                scale-0 			
                transition-all
                duration-300 
                ease-in-out"
              >
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          )}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
