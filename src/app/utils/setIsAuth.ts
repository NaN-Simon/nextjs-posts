'use server'

import { cookies } from 'next/headers';

export const setIsAuth = async () => {
    cookies().set('auth_token', 'true');
}