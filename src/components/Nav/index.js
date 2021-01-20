import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'
import avatar from '../Nav/avatar.jpg'
import IconBar from './icons/IconBar'
import IconMobile from './IconMobile'

const navItems = [
    {id: 1, link: '/', text: 'About'},
    {id: 2, link: '/resume', text: 'Resume'},
    {id: 3, link: '/portfolio', text: 'Portfolio'},
    {id: 4, link: '/contacts', text: 'Contacts'},
]

function Nav() {
    const [active,setActive] = React.useState(false)

    return (
        <div className={style['container']}>
            <div className={style['block-main-info']}>
                <div className={style['container_avatar']}>  
                    <img className={style['avatar-navbar']}  src={avatar}/>
                </div>
                <h1 className={style['nav-name']}>Kolitvinova Christina</h1>
                <button className={style.menu} onClick={()=>setActive(!active)}>
                        <IconMobile className={style.dropdown}/>
                    </button>
            </div>
            <div className={style['cont-link']}>
            <div className={!active ? style['navItems--hidden'] : ''}>
                    {  
                        navItems.map(item => (
                            <NavLink className={active}
                            activeClassName={style.activeLink}
                            className={style['nav-icon']}
                            exact
                            key={item.id}
                            to={item.link}
                            >
                            {item.text}
                            </NavLink>
                        ))
                    }
            </div>
        </div>
        <div className={style['social']}> 
            <IconBar />
        </div>
        </div>
    )
}

export default Nav