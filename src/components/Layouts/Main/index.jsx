'use client'

import Header from 'components/UL/header'
import SideBar from 'components/UL/sidebar'
import { usePathname, } from 'next/navigation'
import React from 'react'
import cls from "./Main.module.scss"

export default function MainLayout({ children }) {
    const router = usePathname()
    console.log(router)
    const allowNav = [
        '/auth/login',
        '/auth/register'
    ]
    return (
        <div>
            {!allowNav.includes(router) && <Header />}
            <div className={cls.MainLayout__content}>
                {!allowNav.includes(router) && <SideBar />}
                {children}
            </div>
        </div>
    )
}
