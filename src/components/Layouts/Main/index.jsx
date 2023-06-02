import Header from 'components/UL/header'
import SideBar from 'components/UL/sidebar'
import { useRouter } from 'next/router'
import React from 'react'
import cls from "./Main.module.scss"

export default function MainLayout({ children }) {
    const router = useRouter()
    const allowNav = [
        '/auth/login',
        '/auth/register'
    ]
    return (
        <div>
            {!allowNav.includes(router.pathname) && <Header />}
            <div className={cls.MainLayout__content}>
                {!allowNav.includes(router.pathname) && <SideBar />}
                {children}
            </div>
        </div>
    )
}
