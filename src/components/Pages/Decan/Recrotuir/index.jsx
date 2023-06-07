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
import cls from "./Recruitor.module.scss"

export default function RecruitorPage() {
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
                    Add Recruitor
                </BlueButtun>
            </div>

            <TopList text={["Recruitor", "Recruitor ID", "Group", "Number", "E-mail", "Actions"]} />

            {Student && Student?.map(e => (
                <PersonList
                    onClick={() => router.push(`/decan/recruitors/${e?.id}`)}
                    key={e?.id} img={e?.avater}
                    id={e?.id} name={e?.name}
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
                    role={'recruitor'}
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
