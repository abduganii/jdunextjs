import Container from 'components/UL/container'
import TopStudents from 'components/UL/topStudents'
import Image from 'next/image'
import React from 'react'
import cls from "./homePage.module.scss"

export default function HomePage() {
    return (
        <>
            <div className={cls.HomePage} >
                <Container className={cls.HomePage__container} >
                    <h2 className={cls.HomePage__title}>Employer Workbook</h2>
                    <p className={cls.HomePage__text}>Create the company manual. Add everything about the company Create the company manual. Add everything about the company</p>
                    <div className={cls.HomePage__img}>
                        <Image
                            src={'/Image/image1.png'}
                            alt='img'
                            objectFit='cover'
                            width={269}
                            height={197}
                        />
                    </div>
                </Container>
            </div>
            <TopStudents />
        </>
    )
}
