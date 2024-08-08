'use server'

import { cookies } from 'next/headers';

export const getIsAuth = async () => {
    return cookies().get('auth_token');
}