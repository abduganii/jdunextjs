'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import cls from "./sideBarBtn.module.scss"


export default function SideBarBtn({ children, link, className }) {
    const router = useRouter()

    return (
        <button className={`${cls.SideBarBtn}  ${className}`} onClick={(e) => {
            router.push(link)
        }} >
            {children}
        </button >
    )
}
