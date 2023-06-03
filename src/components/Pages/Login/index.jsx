'use client'
import ButtunLogin from 'components/UL/buttun/loginButtun'
import LoginInput from 'components/UL/input/loginInput'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'
import cls from './Login.module.scss'

const users = [
    {
        id: 1,
        IDname: "Decan",
        password: "111",
        role: "decan"
    },
    {
        id: 1,
        IDname: "Recruitor",
        password: "111",
        role: "recruitor"
    }
]

export default function Login() {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()
    const handleSubmit = () => {
        const filter = users.find(e => e.IDname === name && e.password === password)
        if (filter) {
            if (filter?.role == "recruitor") {
                window.localStorage.setItem("role", JSON.stringify(filter?.role))
                router.push('/recruitor/home')
            }
            if (filter?.role == "decan") {
                window.localStorage.setItem("role", JSON.stringify(filter?.role))
                router.push('/decan/home')
            }
        } else {
            alert("login faild")
        }
    }
    return (
        <div className={cls.Login}>
            <div className={cls.Login__content}>
                <div className={cls.Login__content__top}>
                    <Image
                        src='/logo.svg'
                        width={70}
                        height={70}
                        objectFit='cover'
                        alt='img'
                    />
                    <div>
                        <h3 className={cls.Login__content__title}>Welcome back</h3>
                        <p className={cls.Login__content__text}>Please enter your details. </p></div>
                </div>

                <div className={cls.Form}>
                    <p className={cls.Form__idtext}>Your ID</p>
                    <LoginInput
                        type={'text'}
                        placeholder={"Enter your ID"}
                        onChange={(e) => setName(e.target.value)}
                        style={{ backgroundImage: "url('/Image/inutIcons.png')", marginBottom: "21px" }}

                    />
                    <LoginInput
                        type={'password'}
                        placeholder={"Enter your password"}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ backgroundImage: "url('/Image/Iconsinpt.png')" }}
                    />
                    <div className={cls.Form__bottom}>
                        <label className={cls.Form__label}>
                            <input className={cls.Form__chechbox} type="checkbox" />
                            Remember
                        </label>
                        <p className={cls.Form__forget}>Forgot password</p>
                    </div>
                    <ButtunLogin onChange={handleSubmit}>Log in</ButtunLogin>
                </div>
            </div>
            <div className={cls.Login__img}>
                <Image
                    src='/Image/photo_login.png'
                    layout='fill'
                    objectFit='cover'
                    alt='img'
                />
            </div>
        </div>
    )
}
