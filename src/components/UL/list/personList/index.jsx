import DoteBtn from 'components/UL/buttun/doteBtn'
import IdBtn from 'components/UL/buttun/idBtn'
import PlusBtn from 'components/UL/buttun/plusBtn'
import SkillBtn from 'components/UL/buttun/skill'
import ListModal from 'components/UL/madals/listMadal'
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import cls from "./personlist.module.scss"

export default function PersonList({ id, img, name, gruop, rate, phone, skill = [], email, remove, update, onClick }) {
    const [useId, setIseId] = useState()
    const x = useRef()
    return (
        <div className={cls.PersonList}>
            <div className={cls.PersonList__fillname} onClick={onClick}>
                <Image
                    src={img}
                    width={48}
                    height={48}
                    alt={"img"}
                    objectFit={"cover"}
                />
                <p className={cls.PersonList__name}>{name}</p>
            </div>
            <div className={cls.PersonList__id}>
                <IdBtn>ID:{id}</IdBtn>
            </div>
            <p className={cls.PersonList__Gruop}>{gruop}</p>
            {rate && <div className={cls.PersonList__progres}>
                <progress className={cls.PersonList__progres__progress} value={rate} max="100">70 %</progress>
                <p className={cls.PersonList__progres__text}>{rate}%</p>
            </div>
            }
            {phone && <p className={cls.PersonList__phone}>{phone}</p>}
            {skill.length !== 0 && <div className={cls.PersonList__skill}>
                {skill.slice(0, 3).map(e => (
                    <SkillBtn name={e} color={'#E44D26'} backround={'rgba(241, 101, 41, 0.1)'} />
                ))}
                <PlusBtn lenght={skill.length - 3} />
            </div>}
            {email && <p className={cls.PersonList__email}>{email}</p>}
            <DoteBtn style={{ marginLeft: "40px" }} onClick={() => setIseId(true)} />
            <ListModal
                remove={() => {
                    setIseId(false)
                    remove()
                }
                }
                update={update}
                onClick={onClick}
                style={useId ? { display: "block" } : { display: "none" }}
            />
            <div
                ref={x}
                onClick={e => {
                    if (e.target == x.current) {
                        setIseId(false)
                    }
                }}
                style={useId ? { display: "block" } : { display: "none" }}
                className={cls.backround}
            ></div>
        </div>
    )
}
