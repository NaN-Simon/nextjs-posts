'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

import LoginForm from '@/components/forms/login/LoginForm';

import { getIsAuth } from '@/app/utils/getIsAuth';
import { setIsAuth } from '@/app/utils/setIsAuth';
import { checkUserExists } from '@/app/utils/checkUserExists';

import styles from "./login.module.scss";

const Login = () => {
    const router = useRouter()

    useEffect(() => {
        // редирект на главную страницу если пользователь уже авторизован
        const token = getIsAuth();

        token.then(res => {
            if (res?.value) {
                router.push('/');
            }
        })

    }, [])


    const [formState, setFormState] = useState({
        name: '',
        password: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const exists = await checkUserExists(formState.name, formState.password);
        if (exists) {
            await setIsAuth()
            await router.push('/');
        } else {
            alert('Пользователь не найден');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main className={styles['main']}>
            <div className={styles['login__wrapper']}>
                <LoginForm formState={formState} handleSubmit={handleSubmit} handleChange={handleChange} />
            </div>
        </main>
    )
}

export default Login