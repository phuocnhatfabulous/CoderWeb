import { authModalState } from '@/atoms/authModalAtom';
import { auth, firebase } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import React, { useEffect, useState, ChangeEvent, ClipboardEvent } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  //   const [users, setUser] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = (type: 'login' | 'register' | 'forgotPassword') => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  const googleAuth = new GoogleAuthProvider();
  const githubAuth = new GithubAuthProvider();

  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginGoogle = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    const user = result.user;
    console.log(user);
  };
  const handleLoginGithub = async () => {
    // const result = await signInWithPopup(auth, googleAuth);
    const auth = getAuth();
    signInWithPopup(auth, githubAuth)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(credential);
        // console.log(token);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) return alert('Vui lòng nhập đủ thông tin');
    try {
      const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
      if (!newUser) return;
      router.push('/');
    } catch (error: any) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      });
    }
  };

  useEffect(() => {
    if (error)
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'dark',
      });
  }, [error]);
  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleLogin}>
      <h3 className="text-xl font-medium text-white">Chào mừng đến với ITUTC2 Coder</h3>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          className="
                        block 
                        w-full 
                        rounded-lg 
                        border-2 
                        border-gray-500 
                        bg-slate-300
                        p-2.5 text-white 
                        placeholder-gray-400
                        caret-brand-orange 
                        outline-none
                        focus:border-brand-orange 
                        focus:ring-blue-500 
                        sm:text-sm"
          placeholder="username@gmail.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="
                mb-2 
                block 
                text-sm 
                font-medium 
                text-gray-300"
        >
          Mật khẩu
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          className="
                block 
                w-full 
                rounded-lg 
                border-2 
                border-gray-500 
                bg-slate-300
                p-2.5 text-white 
                placeholder-gray-400 
                caret-brand-orange 
                outline-none
                focus:border-brand-orange 
                focus:ring-blue-500 
                sm:text-sm"
          placeholder="******123*"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-orange px-5 py-2.5
            text-center text-sm font-medium text-white hover:bg-brand-orange-s focus:ring-blue-300
        "
      >
        {loading ? 'Đang tải...' : 'Đăng nhập'}
      </button>

      {/* Login GOOGLE GITHUB */}
      <div className="relative grid gap-5 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
        <button
          onClick={handleLoginGithub}
          type="submit"
          className="w-50  rounded-full bg-white-blue px-5
                    py-2.5 text-center text-sm font-semibold hover:bg-brand-orange-s focus:ring-blue-300
                "
        >
          {loading ? 'Đang tải...' : 'GITHUB'}
        </button>

        <button
          onClick={handleLoginGoogle}
          type="submit"
          className="w-50 rounded-full bg-white-blue px-5 py-2.5
                    text-center text-sm font-semibold text-black hover:bg-brand-orange-s focus:ring-blue-300
                "
        >
          {loading ? 'Đang tải...' : 'GOOGLE'}
        </button>
      </div>

      <button className="flex w-full justify-end" onClick={() => handleClick('forgotPassword')}>
        <a href="#" className="block w-full text-right text-sm text-brand-orange hover:underline">
          Quên mật khẩu
        </a>
      </button>

      <div className="text-sm font-medium text-gray-300">
        Chưa có tài khoản?{' '}
        <a href="#" className="text-blue-700 hover:underline" onClick={() => handleClick('register')}>
          Tạo tài khoản
        </a>
      </div>
    </form>
  );
};
export default Login;
