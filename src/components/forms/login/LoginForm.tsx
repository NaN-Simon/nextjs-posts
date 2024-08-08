'use client'
import React, { FC } from 'react'

import Label from '@/components/ui/label/Label'
import Input from '@/components/ui/input/Input'
import Button from '@/components/ui/button/Button';

import styles from "./loginForm.module.scss";

interface ILoginForm {
  formState: {
    name: string
    password: string
  }
  handleSubmit: (e: React.FormEvent) => Promise<void>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginForm:FC<ILoginForm> = ({formState, handleSubmit, handleChange}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['login__wrapper']}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="name"
            type="text"
            onChange={handleChange}
            value={formState.name}
          />

        </div>
        <div className="mt-4">
          <div>
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={formState.password}
          />
        </div>

        <Button />
      </div>
    </form>
  )
}

export default LoginForm