'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import cls from "./header.module.scss"

export default function Header() {
    const [roles, setRoles] = useState("")

    useEffect(() => {

        const role = JSON.parse(localStorage.getItem("role"))
        if (role == "decan") {
            setRoles("Decan")
        }
        if (role == "recruitor") {
            setRoles("Employer")
        }

    }, []);
    return (
        <header className={cls.Header}>
            <h3 className={cls.Header__logo}>{roles} Panel</h3>
            <div className={cls.Header__left}>
                <input className={cls.Header__search} type="text" placeholder="Search" />
                <div className={cls.Header__clock}>
                    <div className={cls.Header__clock__japon}>
                        <p className={cls.Header__clock__title}>Japan</p>
                        <p className={cls.Header__clock__text}>08:30</p>
                    </div>
                    <div className={cls.Header__clock__center}>
                        <div className={cls.Header__clock__line}></div>
                        <Image
                            className={cls.Header__clock__img}
                            src={'/Image/line.png'}
                            width={15}
                            height={5}
                            objectFit="cover"
                            alt={"img"}
                        />
                        <div className={cls.Header__clock__line2}></div>
                    </div>
                    <div className={cls.Header__clock__japon}>
                        <p className={cls.Header__clock__title1}>Uzbekistan</p>
                        <p className={cls.Header__clock__text1}>12:30</p>
                    </div>
                </div>
                <div className={cls.Header__profil}>
                    <Image
                        className={cls.Header__profil__img}
                        src={'/Image/person.png'}
                        width={44}
                        height={44}
                        alt={"img"}
                    />

                    <div>
                        <p className={cls.Header__profil__name}>Jerome Bell</p>
                        <p className={cls.Header__profil__id}>ID: 123957</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
