import { ClockIcon, RightIcon } from 'components/UL/icons'
import React from 'react'
import cls from "./TopNews.module.scss"

export default function TopNewsList({ createAt, text }) {
    return (
        <div className={cls.TopNewsList} >
            <div className={cls.TopNewsList__top}>
                <p className={cls.TopNewsList__top__text}><ClockIcon /> {createAt}</p>
                <RightIcon />
            </div>
            <p className={cls.TopNewsList__text}>{text}</p>
        </div>
    )
}
