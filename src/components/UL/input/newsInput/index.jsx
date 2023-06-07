import { UploadNewIcon } from 'components/UL/icons'
import React from 'react'
import cls from "./newsInput.module.scss"

export default function NewsInput({ label, type, placeholder, onChange, ...other }) {
    return (
        <label className={`${cls.NewsInput} ${type == "file" ? cls.NewsInputFile : ""}`} {...other}>
            <p className={cls.NewsInput__label}>{label}</p>
            {
                type == "textarea" ?
                    <textarea className={`${cls.NewsInput__input} ${cls.NewsInput__textarae}`} placeholder={placeholder}></textarea>
                    :
                    type == "file" ?
                        <div className={cls.NewsInput__file}>
                            <input type="file" />
                            <div className={cls.NewsInput__file__top}>
                                <p className={cls.NewsInput__file__imgtext}>NO IMAGE</p>
                            </div>
                            <div className={cls.NewsInput__file__btm}>
                                <div className={cls.NewsInput__file__blue}>
                                    <UploadNewIcon color={"white"} />
                                </div>
                                <div className={cls.NewsInput__file__content}>
                                    <h4 className={cls.NewsInput__file__title}>Upload Photo</h4>
                                    <p className={cls.NewsInput__file__text}>.jpg .png. tif</p>
                                </div>
                            </div>
                        </div> :
                        <input
                            className={cls.NewsInput__input}
                            type={type} placeholder={placeholder}
                            onChange={onChange}
                        />
            }
        </label >
    )
}
