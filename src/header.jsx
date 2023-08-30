import { useEffect, useRef, useState } from "react"
import {NavLink} from "react-router-dom"
import {v4 as uuidv4} from "uuid"

export default function Header({links}){
    const isMobile = window.matchMedia("(max-width:600px)")
    const nav = useRef(null)
    let navState = false

    function showNav(isOpened){
        nav.current.classList.toggle("showen", isOpened)
        navState=isOpened
    }
    
    let [navBtn, setNavBtn] = useState(isMobile.matches)
    isMobile.addEventListener("change", ()=>{
        setNavBtn(isMobile.matches)
    })

    useEffect(()=>{
        showNav(navState)
    })
    return(
        <header className="Header" >
            <h1 className="logo">THE PLANETS</h1>

            <nav ref={nav} className={Boolean(navBtn)?"forMobile":"forElse"}>
                {links.map(per=>{
                    return(
                        <NavLink key={uuidv4()} to={`planets/${per.name}`} className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                        }
                        >
                            {per.name}

                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={6}
                                height={10}
                                viewBox="0 0 6 10"
                                fill="none"
                            >
                                <path opacity={0.4} d="M1 1l4 4-4 4" stroke="#fff" />
                            </svg>
                        </span>
                            
                        </NavLink>
                    )
                })}
            </nav>
            <div className="hummbergur" style={{display:Boolean(navBtn)?"block":"none"}} onClick={e=>{
                showNav(!navState)

            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={17}
                    viewBox="0 0 24 17"
                    fill="none"
                >
                    <path fill="#fff" d="M0 0H24V3H0z" />
                    <path fill="#fff" d="M0 7H24V10H0z" />
                    <path fill="#fff" d="M0 14H24V17H0z" />
                </svg>
            </div>
        </header>
    )

}
