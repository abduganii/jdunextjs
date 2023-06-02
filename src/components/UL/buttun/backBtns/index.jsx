import { LeftIcon } from 'components/UL/icons'
import React from 'react'

import cls from "./backBtns.module.scss"

export default function BackBtn2({ onClick }) {
    return (
        <button className={cls.BackBtn2} onClick={onClick}>
            <LeftIcon />Back
        </button>
    )
}
