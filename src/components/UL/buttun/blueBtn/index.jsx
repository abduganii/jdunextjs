import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import cls from "./BlueButtun.module.scss"


export default function BlueButtun({ children, className, onClick, OnSubmit, ...other }) {
    const router = useRouter()

    return (
        <button className={`${cls.BlueButtun}  ${className}`} onClick={onClick} onSubmit={OnSubmit} {...other} >
            {children}
        </button >
    )
}
