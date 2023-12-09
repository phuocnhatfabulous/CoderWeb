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
import UserMenu from '../Navbar/UserMenu';

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
    <nav className="fixed top-0 left-0 z-50 mb-5 flex w-full shrink-0 select-none items-center bg-dark-blue px-5 py-2 text-dark-gray-7 shadow-md shadow-white-blue-400">
      <div className={`flex w-full items-center justify-between ${!problemPage ? 'mx-auto max-w-[1200px]' : ''}`}>
        <Link href="/" className="flex items-center">
          <Image src="/itcoder-logo.svg" alt="Logo" height={200} width={200} />
        </Link>
        {problemPage && (
          <div className="flex flex-1 items-center justify-center gap-4">
            <div
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-white-blue-200 hover:bg-dark-fill-2"
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
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-white-blue-400 hover:bg-dark-fill-2"
              onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}
        <div className="flex items-center justify-start space-x-6">
          <div>
            <Link
              href="/courses"
              rel="noreferrer"
              className="
              cursor-pointer 
              select-none 
              rounded 
              py-1.5 
              px-3 
              text-brand-orange
              hover:bg-dark-fill-2
              "
            >
              Khóa học
            </Link>
          </div>
          <div>
            <Link
              href="/practices"
              rel="noreferrer"
              className="cursor-pointer select-none rounded py-1.5 px-3 text-brand-orange hover:bg-dark-fill-2"
            >
              Luyện tập
            </Link>
          </div>
          <div>
            <Link
              href="/homeworks"
              rel="noreferrer"
              className="cursor-pointer select-none rounded py-1.5 px-3 text-brand-orange hover:bg-dark-fill-2"
            >
              Bài tập
            </Link>
          </div>
          <div>
            <Link
              href="/contests"
              rel="noreferrer"
              className="cursor-pointer select-none rounded py-1.5 px-3 text-brand-orange hover:bg-dark-fill-2"
            >
              Cuộc thi
            </Link>
          </div>
          <div>
            <Link
              href="/ranks"
              rel="noreferrer"
              className="cursor-pointer select-none rounded py-1.5 px-3 text-brand-orange hover:bg-dark-fill-2"
            >
              Xếp hạng
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-start space-x-4">
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
              <button className="bg-white-blue-400k cursor-pointer rounded-full bg-dark-fill-3 py-1 px-4 text-white-blue hover:bg-brand-orange hover:text-white ">
                Đăng nhập
              </button>
            </Link>
          )}
          {user && problemPage && <Timer />}
          {user && <UserMenu />}
          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};
export default Topbar;
