'use client'
import BackBtn from 'components/UL/buttun/backBtn'
import Container from 'components/UL/container'
import { ClockIcon } from 'components/UL/icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import cls from "./OnNewsPage.module.scss"

const data = {
    id: 0,
    createAt: '09:41 Monday',
    title: "Digital product design news, articles, and resources delivered straight to your inbox.",
    categore: "Japan",
    image: '/Image/Rectangle502.png',
    text: "Digital product design news, articles, and resources delivered straight to your inbox."
}

export default function OnNewsPage() {
    const router = useRouter()
    return (
        <Container className={cls.OnNewsPage__container}>
            <BackBtn onClick={() => router.back()} />
            <div className={cls.OnNewsPage__top}>
                <p className={cls.OnNewsPage__category} style={{ border: "1px solid #932F46", color: "#932F46" }}>{data.categore}</p>
                <p className={cls.OnNewsPage__date}><ClockIcon /> {data.createAt}</p>
            </div>
            <h3 className={cls.OnNewsPage__title}>{data.title}</h3>
            <Image
                src={data?.image}
                width={690}
                height={380}
                alt="img"
            />
            <p className={cls.OnNewsPage__text}>{data.text}</p>
        </Container>
    )
}
