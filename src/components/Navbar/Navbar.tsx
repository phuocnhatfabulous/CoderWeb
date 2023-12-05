import { authModalState } from '@/atoms/authModalAtom';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex items-center justify-between px-2 sm:px-12 md:px-24">
      <Link href="/" className="flex h-20 items-center justify-center">
        {/* <Image src="/hero.png" alt="ITUTC2" height={200} width={200} /> */}
      </Link>
    </div>
  );
};
export default Navbar;
