
import Container from 'components/UL/container'
import Filter from 'components/UL/filter'
import StudentList from 'components/UL/list/studentList'
import TopStudents from 'components/UL/topStudents'
import React from 'react'
import cls from "./StudentsPage.module.scss"

import { Student } from "./data"

export default function StudentsPage({ selected }) {
    return (
        <>
            <Container style={{ paddingTop: "100px" }}>
                <Filter />
                <ul className={cls.StudentsPage__top}>
                    <li className={cls.StudentsPage__top__item}>Students</li>
                    <li className={cls.StudentsPage__top__item}>Skills</li>
                    <li className={cls.StudentsPage__top__item}>Skills</li>
                </ul>
                <ul>
                    {Student?.map(e => {
                        if (selected) {
                            if (e.isSelcted === true) {
                                return (
                                    <StudentList key={e?.id} name={e?.name} id={e?.id} avatar={e?.avater} skills={e?.skills} rate={e?.progress} isSelcted={e?.isSelcted} />
                                )
                            }
                        } else {
                            return (
                                <StudentList key={e?.id} name={e?.name} id={e?.id} avatar={e?.avater} skills={e?.skills} rate={e?.progress} isSelcted={e?.isSelcted} />
                            )
                        }
                    })}
                </ul>
            </Container>
            <TopStudents />
        </>
    )
}
