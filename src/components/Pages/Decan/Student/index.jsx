'use client'
import BlueButtun from 'components/UL/buttun/blueBtn'
import Filter from 'components/UL/filter'
import { PlusIcon } from 'components/UL/icons'
import TopList from 'components/UL/list/TopList'
import React, { useState } from 'react'

import cls from "./StudentPage.module.scss"

import { Student } from "./data"
import PersonList from 'components/UL/list/personList'
import { useRouter } from 'next/navigation'
import DeleteMadel from 'components/UL/madals/deleteModel'
import AddMadal from 'components/UL/madals/AddMadal'
import AvatarInput from 'components/UL/input/AvatarInput'
import AddInput from 'components/UL/input/AddInput'

export default function StudentPage() {
    const router = useRouter()
    const [personId, setPersonId] = useState(false)
    const [openMadal, setOpenMadal] = useState(false)
    const oneStuednt = Student.find(e => e.id === personId)

    return (
        <div className={cls.StudentPage}>
            <div className={cls.StudentPage__filter}>
                <Filter />
                <BlueButtun onClick={() => setOpenMadal(true)}>
                    <PlusIcon />
                    Add Student
                </BlueButtun>
            </div>
            <TopList text={["Student", "Student ID", "Group", "Rate", "Skills", "Actions"]} />

            {Student && Student?.map(e => (
                <PersonList
                    onClick={() => router.push(`/decan/students/${e?.id}`)}
                    id={e?.id}
                    key={e?.id}
                    name={e?.name}
                    img={e?.avater}
                    gruop={"gruop"}
                    skill={e?.skills}
                    rate={e?.progress}
                    remove={() => setPersonId(e?.id)}
                />
            ))}
            {
                personId && <DeleteMadel
                    id={oneStuednt?.id}
                    name={oneStuednt?.name}
                    avater={oneStuednt?.avater}
                    role={'student'}
                    progress={oneStuednt?.progress}
                    years={"2years"}
                    remove={() => console.log('delete')}
                    className={personId ? cls.openMadal : ''}
                    close={() => setPersonId(false)}
                />
            }
            {openMadal &&
                <AddMadal role={"student"} closeMadal={() => setOpenMadal(false)}>
                    <AvatarInput onChange={(e) => console.log(e)} style={{ marginBottom: '43px' }} />
                    <div className={cls.StudentPage__addInputs}>
                        <AddInput type={"text"} label={"Firstname"} placeholder={"Firstname"} />
                        <AddInput type={"text"} label={"Lastname"} placeholder={"Lastname"} />
                        <AddInput type={"text"} label={"ID"} placeholder={"ID"} />
                        <AddInput type={"text"} label={"Specialisation"} placeholder={"Specialisation"} />
                        <AddInput type={"text"} label={"Group"} placeholder={"Group"} />
                        <AddInput type={"text"} label={"Course number"} placeholder={"Course number"} />
                    </div>
                </AddMadal>}

        </div>
    )
}
