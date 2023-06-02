import React from 'react'
import cls from "./LoginButtun.module.scss"

export default function ButtunLogin({ children, onChange }) {
    return (
        <button className={cls.ButtunLogin} onClick={onChange}>
            {children}
        </button>
    )
}
