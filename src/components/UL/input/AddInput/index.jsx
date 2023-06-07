import React from 'react'
import cls from "./AddInput.module.scss"

export default function AddInput({ onChange, label, placeholder, type, ...other }) {
    return (
        <label className={`${cls.AddInput} ${type === "textarea" && cls.widthFull}`} {...other}>
            <p className={cls.AddInput__label}>{label}</p>
            {type === "textarea" ? <textarea className={cls.AddInput__textArea} placeholder={placeholder}>
            </textarea> : <input className={cls.AddInput__input} type={type} placeholder={placeholder} onChange={onChange} />}
        </label>
    )
}
