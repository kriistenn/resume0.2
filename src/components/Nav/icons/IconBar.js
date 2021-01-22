import React from 'react'
import GithubIcon from './GithubIcon'
import InstagramIcon from './InstagramIcon'
import TelegramIcon from './TelegramIcon'
import style from './iconbar.module.css'

function IconBar() {
    return (
        <div className={style['social']}>
            <a
            href="#"
            target="_blank"
            rel="nooperer noreferrer"
            >
                <GithubIcon className={style['icon']}/>
            </a>
            <a
            href="#"
            target="_blank"
            rel="nooperer noreferrer"
            >
                <InstagramIcon className={style['icon']}/>
            </a>
            <a
            href="#"
            target="_blank"
            rel="nooperer noreferrer"
            >
                <TelegramIcon className={style['icon']}/> 
            </a>
        </div>
    )
}

export default IconBar