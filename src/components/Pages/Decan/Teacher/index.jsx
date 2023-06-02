import BlueButtun from 'components/UL/buttun/blueBtn'
import Filter from 'components/UL/filter'
import { PlusIcon } from 'components/UL/icons'
import PersonList from 'components/UL/list/personList'
import TopList from 'components/UL/list/TopList'
import { useRouter } from 'next/router'
import React from 'react'
import { Student } from './data'
import cls from "./Teacher.module.scss"

export default function TeacherPage() {
    const router = useRouter()
    return (
        <div className={cls.TeacherPage}>
            <div className={cls.TeacherPage__filter}>
                <Filter />
                <BlueButtun>
                    <PlusIcon />
                    Add Student
                </BlueButtun>
            </div>

            <TopList text={["Teacher", "Teacher ID", "Group", "Number", "E-mail", "Actions"]} />

            {Student && Student?.map(e => (
                <PersonList
                    onClick={() => router.push(`/decan/teachers/${e?.id}`)}
                    key={e?.id} img={e?.avater}
                    id={e?.id} name={e?.name}
                    gruop={"gruop"}
                    phone={"999999999999"}
                    email={"email"} />
            ))}
        </div>
    )
}
