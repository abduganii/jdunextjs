'use client'
import BlueButtun from 'components/UL/buttun/blueBtn'
import Filter from 'components/UL/filter'
import { PlusIcon } from 'components/UL/icons'
import TopList from 'components/UL/list/TopList'
import React from 'react'

import cls from "./StudentPage.module.scss"

import { Student } from "./data"
import PersonList from 'components/UL/list/personList'
import { useRouter } from 'next/navigation'

export default function StudentPage() {
    const router = useRouter()
    return (
        <div className={cls.StudentPage}>
            <div className={cls.StudentPage__filter}>
                <Filter />
                <BlueButtun>
                    <PlusIcon />
                    Add Student
                </BlueButtun>
            </div>

            <TopList text={["Student", "Student ID", "Group", "Rate", "Skills", "Actions"]} />

            {Student && Student?.map(e => (
                <PersonList
                    onClick={() => router.push(`/decan/students/${e?.id}`)}
                    key={e?.id} img={e?.avater}
                    id={e?.id} name={e?.name}
                    gruop={"gruop"}
                    rate={e?.progress}
                    skill={e?.skills} />
            ))}
        </div>
    )
}
