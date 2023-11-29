import React, { useCallback, useEffect, useState } from 'react';
import Avatar from '../Topbar/Avatar';
import MenuItem from './MenuItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';

const UserMenu = () => {
  const [user, setUser] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div onClick={toggleOpen} className="">
      <Avatar />
      {isOpen && (
        <div className="absolute top-14 divide-y-0 divide-solid overflow-hidden rounded-xl bg-white text-sm font-bold shadow-xl">
          <div className=" p-3 text-xl">{user ? user.displayName : ''}</div>
          <div className=" relative flex cursor-pointer flex-col text-sm">
            <>
              <MenuItem onClick={() => {}} label="Hồ sơ" />
              <MenuItem onClick={() => {}} label="Lớp học" />
              <MenuItem onClick={() => {}} label="Thống kê" />
              <MenuItem onClick={() => {}} label="Ghi chú" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
