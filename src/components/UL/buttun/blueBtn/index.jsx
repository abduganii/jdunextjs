'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import cls from "./BlueButtun.module.scss"


export default function BlueButtun({ children, className, onClick, OnSubmit, ...other }) {
    const router = useRouter()

    return (
        <button className={`${cls.BlueButtun}  ${className && className}`} onClick={onClick} onSubmit={OnSubmit} {...other} >
            {children}
        </button >
    )
}
