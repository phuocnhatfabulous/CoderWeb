import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import React, { useEffect, useState, ChangeEvent, ClipboardEvent } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type: 'login' | 'register' | 'forgotPassword') => {
        setAuthModalState((prev) => ({ ...prev, type }));
    };
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
                <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300">
                    Email
                </label>
                <input
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    id="email"
                    className="
                        border-2 
                        outline-none 
                        sm:text-sm 
                        rounded-lg 
                        focus:ring-blue-500 
                        focus:border-brand-orange
                        block w-full 
                        p-2.5
                        bg-slate-300 
                        caret-brand-orange
                        border-gray-500 
                        placeholder-gray-400 
                        text-white"
                    placeholder="username@gmail.com"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="
                        text-sm 
                        font-medium 
                        block 
                        mb-2 
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
                        border-2 
                        outline-none 
                        sm:text-sm 
                        rounded-lg 
                        focus:ring-blue-500 
                        focus:border-brand-orange
                        block w-full 
                        p-2.5 
                        bg-slate-300 
                        caret-brand-orange
                        border-gray-500 
                        placeholder-gray-400 
                        text-white"
                    placeholder="******123*"
                />
            </div>

            <button
                type="submit"
                className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            "
            >
                {loading ? 'Đang tải...' : 'Đăng nhập'}
            </button>

            <button className="flex w-full justify-end" onClick={() => handleClick('forgotPassword')}>
                <a href="#" className="text-sm block text-brand-orange hover:underline w-full text-right">
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
