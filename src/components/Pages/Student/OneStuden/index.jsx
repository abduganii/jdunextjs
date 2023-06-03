'use client'
import BackBtn from 'components/UL/buttun/backBtn'
import Container from 'components/UL/container'
import Person from 'components/UL/person'
import RateTest from 'components/UL/RateTest'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import cls from "./OneStudent.module.scss"

const data = {
    id: 0,
    name: "Annette Black",
    skills: ['html', 'scss', 'java', 'node'],
    avater: '/Image/Ellipse08.png',
    progress: '98',
    rate: 4.7,
    isSelcted: true,
    year: "2 year",
    text: "Dynamic, innovative with 2+ years of highly valuable hands-on experience in handling multiple simultaneous creative design projects, concept creation, graphic design, animations and visual conceptualization. Ability to leverage skills gained in the creative industry, identify opportunities, overcome objections, build long-term mutually beneficial relationships with vendors, labor, and clients, and increase brand awareness by establishing a successful and profitable firm."
}

export default function OneStudent() {
    const router = useRouter()
    return (
        <Container className={cls.OneStudent__container}>
            <BackBtn onClick={(e) => router.back()} style={{ marginBottom: "40px" }} />
            <Person id={data.id} name={data.name} rate={data.rate} avatar={data.avater} year={data.year} />
            <div className={cls.OneStudent__content}>
                <h3 className={cls.OneStudent__title}>Introduce yourself</h3>
                <p className={cls.OneStudent__text}>{data.text}</p>
                <p className={cls.OneStudent__title}>Gallery</p>
                <div className={cls.OneStudent__imgs}>
                    <Image
                        src={'/Image/Rectangle502.png'}
                        width={223}
                        height={160}
                        alt='img'
                    />
                </div>
                <h3 className={cls.OneStudent__title1}>Japan Language tests</h3>
                <RateTest title={"JLPT"} text={"N4"} Listening={45} writing={65} Reading={85} />
                <RateTest title={"NAT"} text={"Q2"} Listening={85} writing={65} Reading={45} />
                <p className={cls.OneStudent__title}>IT qualification</p>
                <p className={cls.OneStudent__text2}>Soft Skills Percentage </p>
                {
                    data.skills.map(e => (
                        <>
                            <p className={cls.OneStudent__skills}>{e}</p>
                            <progress className={cls.OneStudent__skills__progress} value={data.progress} max="100"></progress>
                            <p className={cls.OneStudent__skills__text}>{data.progress}%</p>
                        </>
                    ))
                }
                <p className={cls.OneStudent__text3}>Dynamic, innovative with 2+ years of highly valuable hands-on experience in handling multiple simultaneous creative design projects, concept creation, graphic design, animations and visual conceptualization. Ability to leverage skills gained in the creative industry, identify opportunities, overcome objections, build long-term mutually beneficial relationships with vendors, labor, and clients, and increase brand awareness by establishing a successful and profitable firm.</p>
            </div>
        </Container>
    )
}
