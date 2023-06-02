import { LeftIcon } from 'components/UL/icons'
import React from 'react'
import cls from "./BackBtn.module.scss"

export default function BackBtn({ onClick, ...other }) {
    return (
        <div className={cls.BackBtn} onClick={onClick} {...other}>
            <LeftIcon />Back
        </div>
    )
}
