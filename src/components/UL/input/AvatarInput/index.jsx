import { UploadNewIcon } from 'components/UL/icons'
import React from 'react'
import cls from "./AvatarInput.module.scss"

export default function AvatarInput({ onChange, ...other }) {
    return (
        <div className={cls.AvatarInput}  {...other} >
            <label >
                <input type="file" onChange={onChange} />
                <div className={cls.AvatarInput__avatar}>
                    <UploadNewIcon color={"#5627DC"} />
                </div>
                <p className={cls.AvatarInput__avatar__text}>avatar</p>
            </label>
            <p className={cls.AvatarInput__text}>The photo must be 3x4 in size and no larger than 524kb.</p>
        </div>
    )
}
