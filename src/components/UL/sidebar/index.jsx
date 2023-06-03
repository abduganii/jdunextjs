'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import SideBarBtn from '../buttun/sideBatbtn'

import cls from "./sidebar.module.scss"

import { decanLink, navLinks, recruitorLink, settingLinks } from './data'
import { LogOutIcon } from '../icons'
import { usePathname, useRouter } from 'next/navigation'
import CancelBtn from '../buttun/cancel'
import BlueButtun from '../buttun/blueBtn'
import { useEffect } from 'react'
import { useState } from 'react'

export default function SideBar() {
    const router = useRouter()
    const pashName = usePathname()
    const x = useRef()
    const [rout, setRout] = useState("")
    const [Link, setLink] = useState([])

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("role"));
        if (stored == "recruitor") {
            setRout("recruitor");
            setLink(recruitorLink)
        }
        if (stored == "decan") {
            setRout("decan");
            setLink(decanLink)
        }
    }, []);


    return (
        <div className={cls.SideBar}>
            <div>
                <p className={cls.SideBar__text}>General </p>
                {navLinks?.map(e => {
                    if (Link.includes(e.label)) {
                        return (
                            <>
                                <SideBarBtn
                                    className={`${pashName.includes(`/${rout}` + e?.link) ? cls.SideBar__active : ""}`}
                                    key={e?.id}
                                    link={`/${rout}${e?.link}`}
                                >
                                    {e?.icon(`${pashName.includes(`/${rout}` + e?.link) ? "#FFFFFF" : "black"}`)} {e?.label}
                                </SideBarBtn>
                            </>
                        )
                    }
                    if (e.link == '/news') {
                        return (
                            <SideBarBtn
                                className={`${pashName.includes(e?.link) ? cls.SideBar__active : ""}`}
                                key={e?.id}
                                link={e?.link + "?categoryNew=All"}
                            >
                                {e?.icon(`${pashName.includes(e?.link) ? "white" : "black"}`)} {e?.label}
                            </SideBarBtn>
                        )
                    }
                })}
                <p className={cls.SideBar__text} style={{ marginTop: "50px" }}>Preferances </p>
                {settingLinks?.map(e => (
                    <SideBarBtn
                        className={`${pashName.includes(e?.link) ? cls.SideBar__active : ""}`}
                        key={e?.id}
                        link={e.link}
                    >
                        {e?.icon(`${pashName.includes(e?.link) ? "white" : "black"}`)}
                        {e?.label}
                    </SideBarBtn>
                ))}
            </div>

            <button className={cls.SideBar__logout} onClick={() => x.current.classList.add("displayBlock")}><LogOutIcon /> Logout</button>
            <div className={cls.SideBar__logout2} ref={x}>
                <p className={cls.SideBar__logout2__text}>
                    Do you want to Logout?
                </p>
                <div>
                    <CancelBtn onClick={() => router.push('/auth/login')}>
                        Yes
                    </CancelBtn>
                    <BlueButtun onClick={() => x.current.classList.remove("displayBlock")} style={{ paddingLeft: "30px" }}  >No</BlueButtun>
                </div>
            </div>
        </div>
    )
}
