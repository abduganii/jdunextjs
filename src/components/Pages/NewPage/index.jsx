import RightAsideWrapper from 'components/UL/Aside/RightAsideWrapper'
import BlueButtun from 'components/UL/buttun/blueBtn'
import Container from 'components/UL/container'
import { PlusIcon } from 'components/UL/icons'
import TopNewsList from 'components/UL/list/Topnews'
import React from 'react'
import cls from "./NewPage.module.scss"
import { Category, News } from './data'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NewsList from 'components/UL/list/newsList'

export default function NewPage() {
    const router = useRouter()
    const [endex, setInedex] = useState(0)
    console.log(router?.query?.categoryNew)

    return (
        <div className={cls.NewPage}>
            <Container style={{ marginTop: "112px" }}>
                <div className={cls.NewPage__top}>
                    <p
                        className={`${cls.NewPage__top__text} ${"All" === router?.query?.categoryNew ? cls.NewPage__top__textActive : ""} `}
                        onClick={() => {
                            router.push({ query: { categoryNew: 'All' } })
                            setInedex(0)
                        }}
                    >All News</p>
                    {
                        Category?.map((e, i) => (
                            <p
                                onClick={() => {
                                    router.push({ query: { categoryNew: e?.id } })
                                    setInedex(i + 1)
                                }}
                                className={`${cls.NewPage__top__text} ${e.id == router?.query?.categoryNew ? cls.NewPage__top__textActive : ""} `}
                            >{e.text}
                            </p>
                        ))}

                    <div className={cls.NewPage__top__line} style={{ left: 90 * endex }}></div>
                </div>
                {
                    News?.slice(0, 10).map(e => (
                        <NewsList
                            key={e?.id}
                            img={e?.image}
                            category={e?.categore}
                            createAt={e?.createAt}
                            text={e?.title}
                            onClick={() => router.push(`news/${e?.id}`)} />
                    ))
                }

            </Container>
            <div className={cls.NewPage__left}>
                {false ? <div className={cls.NewPage__left__btn}>
                    <BlueButtun >
                        <PlusIcon />Add News
                    </BlueButtun>
                </div> : <></>}
                <RightAsideWrapper style={{ padding: "30px 18px", marginTop: 0 }} >
                    <h3 className={cls.NewPage__left__title}> News</h3>
                    {News.slice(0, 5).map(e => (
                        <TopNewsList key={e.id} text={e?.title} createAt={e?.createAt} />
                    ))}
                </RightAsideWrapper>
            </div>
        </div>
    )
}
