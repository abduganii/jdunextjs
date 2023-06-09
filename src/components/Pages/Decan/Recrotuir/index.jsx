'use client'
import BlueButtun from 'components/UL/buttun/blueBtn'
import Filter from 'components/UL/filter'
import { PlusIcon } from 'components/UL/icons'
import AddInput from 'components/UL/input/AddInput'
import AvatarInput from 'components/UL/input/AvatarInput'
import PersonList from 'components/UL/list/personList'
import TopList from 'components/UL/list/TopList'
import AddMadal from 'components/UL/madals/AddMadal'
import DeleteMadel from 'components/UL/madals/deleteModel'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Student } from './data'
import cls from "./Recruitor.module.scss"
import toast, { Toaster } from 'react-hot-toast';
export default function RecruitorPage() {
    const [personId, setPersonId] = useState(false)
    const oneStuednt = Student.find(e => e.id === personId)
    const router = useRouter()
    const [openMadal, setOpenMadal] = useState(false)


    return (
        <div className={cls.TeacherPage}>
            <div className={cls.TeacherPage__filter}>
                <Filter />
                <BlueButtun onClick={() => setOpenMadal(true)}>
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
                    update={() => {
                        setOpenMadal(true)
                        setPersonId(false)
                    }}
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
                    remove={() => {
                        toast("Recruitor deleted")
                        setPersonId(false)
                    }}
                    className={personId ? cls.openMadal : ''}
                    close={() => setPersonId(false)}
                />
            }
            {openMadal &&
                <AddMadal
                    role={"recruitors"}
                    OnSubmit={() => {
                        setOpenMadal(false)
                        toast("Recruitor created")
                    }}
                    closeMadal={() => setOpenMadal(false)}>
                    <AvatarInput onChange={(e) => console.log(e)} style={{ marginBottom: '43px' }} />
                    <div className={cls.TeacherPage__addInputs}>
                        <AddInput type={"text"} label={"Firstname"} placeholder={"Firstname"} />
                        <AddInput type={"text"} label={"Lastname"} placeholder={"Lastname"} />
                        <AddInput type={"text"} label={"Company name"} placeholder={"Company name"} />
                        <AddInput type={"text"} label={"Specialisation"} placeholder={"Specialisation"} />
                        <AddInput type={"text"} label={"Phone number"} placeholder={"Phone number"} />
                        <AddInput type={"text"} label={"E-mail"} placeholder={"E-mail"} />
                        <AddInput type={"textarea"} label={"Bio"} placeholder={"Bio"} />
                    </div>
                </AddMadal>
            }
            <Toaster />
        </div>
    )
}
