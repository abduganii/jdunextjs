import React from 'react'
import cls from "./AddInput.module.scss"

export default function AddInput({ onChange, label, placeholder, ...other }) {
    return (
        <label className={cls.AddInput}>
            <p className={cls.AddInput__label}>{label}</p>
            <input className={cls.AddInput__input} type="text" placeholder={placeholder} onChange={onChange} />
        </label>
    )
}
