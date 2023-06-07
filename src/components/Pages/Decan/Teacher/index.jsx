'use client'
import BlueButtun from 'components/UL/buttun/blueBtn'
import Filter from 'components/UL/filter'
import { PlusIcon } from 'components/UL/icons'
import PersonList from 'components/UL/list/personList'
import TopList from 'components/UL/list/TopList'
import DeleteMadel from 'components/UL/madals/deleteModel'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Student } from './data'
import cls from "./Teacher.module.scss"

export default function TeacherPage() {
    const [personId, setPersonId] = useState(false)
    const oneStuednt = Student.find(e => e.id === personId)
    const router = useRouter()
    console.log(personId)
    return (
        <div className={cls.TeacherPage}>
            <div className={cls.TeacherPage__filter}>
                <Filter />
                <BlueButtun>
                    <PlusIcon />
                    Add Teacher
                </BlueButtun>
            </div>
            <TopList text={["Teacher", "Teacher ID", "Group", "Number", "E-mail", "Actions"]} />
            {Student && Student?.map(e => (
                <PersonList
                    onClick={() => router.push(`/decan/teachers/${e?.id}`)}
                    key={e?.id}
                    img={e?.avater}
                    id={e?.id}
                    name={e?.name}
                    gruop={"gruop"}
                    phone={"999999999999"}
                    email={"email"}
                    remove={() => setPersonId(e?.id)}
                />
            ))}
            {
                personId && <DeleteMadel
                    id={oneStuednt?.id}
                    name={oneStuednt?.name}
                    avater={oneStuednt?.avater}
                    role={'teacher'}
                    progress={oneStuednt?.progress}
                    years={"2years"}
                    remove={() => console.log('delete')}
                    className={personId ? cls.openMadal : ''}
                    close={() => setPersonId(false)}
                />
            }
        </div>
    )
}
