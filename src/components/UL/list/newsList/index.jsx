import { ClockIcon } from 'components/UL/icons'
import Image from 'next/image'
import React from 'react'

import cls from "./newsList.module.scss"

export default function NewsList({ img, category, text, createAt, onClick }) {
    return (
        <div className={cls.NewsList} >
            <div className={cls.NewsList__img}>
                <Image
                    src={img}
                    width={324}
                    height={196}
                    objectFit={"cover"}
                    alt="img"
                />
            </div>
            <div className={cls.NewsList__content} onClick={onClick}>
                <div className={cls.NewsList__top}>
                    <p className={cls.NewsList__category} style={{ border: "1px solid #932F46", color: "#932F46" }}>{category}</p>
                    <p className={cls.NewsList__date}><ClockIcon /> {createAt}</p>
                </div>
                <p className={cls.NewsList__text}>{text}</p>
            </div>
        </div>
    )
}
