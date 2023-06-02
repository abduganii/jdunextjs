import React from 'react'

import cls from "./inputLogin.module.scss"

export default function LoginInput({ onChange, type, placeholder, ...other }) {
    return (
        <input
            className={cls.LoginInput}
            type={type}
            placeholder={placeholder}
            onChange={onChange}

            {...other}
        />
    )
}
