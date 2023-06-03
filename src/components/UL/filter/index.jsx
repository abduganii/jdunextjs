'use client'
import Image from 'next/image'
import React from 'react'
import { FilterIcon } from '../icons'
import cls from "./filter.module.scss"

import { filterRate } from './data.js'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function Filter() {
    const router = useRouter()


    const x = useRef()
    return (
        <div className={cls.Filter}>
            <button className={cls.Filter__btn}>
                <FilterIcon />
                Filter
            </button>
            <div className={cls.Filter__Select}>
                <p className={cls.Filter__Select__p}>Skills</p>
                <Image
                    src={'/Image/icons.svg'}
                    width={16}
                    height={16}
                    objectFit="contain"
                />
            </div>
            <div className={cls.Filter__Select} onClick={() => x.current.classList.toggle('displayBlock')}>
                <p className={cls.Filter__Select__p} >Rate</p>
                <Image
                    src={'/Image/icons.svg'}
                    width={16}
                    height={16}
                    objectFit="contain"
                />
                <div ref={x} className={cls.Filter__Select__dropdown}>
                    {filterRate?.map(e => (
                        <p
                            key={e?.id}
                            className={`${cls.Filter__Select__dropdown__text} `}
                            onClick={() => router({ rate: e.link })}
                        >
                            {e.text}
                        </p>
                    ))}

                </div>
            </div>
            <div className={cls.Filter__Select}>
                <p className={cls.Filter__Select__p}>Year</p>
                <Image
                    src={'/Image/icons.svg'}
                    width={16}
                    height={16}
                    objectFit="contain"
                />

            </div>
        </div>
    )
}
