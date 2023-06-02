import BackBtn from 'components/UL/buttun/backBtn'
import Container from 'components/UL/container'
import Person from 'components/UL/person'
import React from 'react'
import cls from "./Person.module.scss"
const data = {
    id: 0,
    name: "Annette Black",
    skills: ['html', 'scss', 'java', 'node'],
    avater: '/Image/Ellipse08.png',
    progress: '98',
    rate: 4.7,
    year: "2 year",

}
export default function OnePerson() {
    return (
        <Container className={cls.OnePerson__container}>
            <BackBtn onClick={(e) => router.back()} style={{ marginBottom: "40px" }} />
            <Person id={data.id} name={data.name} avatar={data.avater} year={"Professor"} />
            <h3 className={cls.OnePerson__title}>Bio</h3>
            <p className={cls.OnePerson__text}>Dynamic, innovative with 2+ years of highly valuable hands-on experience in handling multiple simultaneous creative design projects, concept creation, graphic design, animations and visual conceptualization. Ability to leverage skills gained in the creative industry, identify opportunities, overcome objections, build long-term mutually beneficial relationships with vendors, labor, and clients, and increase brand awareness by establishing a successful and profitable firm.</p>
        </Container>
    )
}
