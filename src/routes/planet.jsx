import { Fragment, useEffect, useState } from "react";
import { getPlanet } from "../logic";
import { NavLink, redirect, useLoaderData, } from "react-router-dom";
export async function loader({params}){
    if(!params.article){
        return redirect(`/planets/${params.name}/overview`)
    }else{
        return await getPlanet(params.name, params.article)
    }
}

export default function Planet(){
    let planetObj = useLoaderData();
    const isMobile = window.matchMedia("(max-width:600px)");
    let [design, setDesign] = useState(isMobile.matches);
    isMobile.addEventListener("change", ()=>{
        setDesign(isMobile.matches)
    })

    return (
        <Fragment>
            
            <article className="planet_article">
                <h2 className="planet-name">{planetObj.name}</h2>
                <p className="content">{planetObj.text.content}</p>
                <span>Source : <a target="_blank" href={planetObj.text.source}>Wikipedia</a></span>
            </article>

            <div className={"links"+ (design?" ofMobile":"")}> 
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? `${planetObj.name} active` : ""
                } 
                to={`/planets/${planetObj.name}/overview`}>{!design&&<span>01</span>}{!design?"overview":"overview"}</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? `${planetObj.name} active` : ""
                }
                to={`/planets/${planetObj.name}/structure`}>{!design&&<span>02</span>}{!design?"Internal Structure":"Structure"}</NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? `${planetObj.name} active` : ""
                }
                to={`/planets/${planetObj.name}/geology`}>{!design&&<span>03</span>}{!design?"Surface Geology":"Geology"}</NavLink>
            </div>

            <div className="sec-image">
                <div className={"images-container " +planetObj.name}>
                    <img src={planetObj.images.svg}/>
                    <div className="popup">
                        <img src={planetObj.images.png} style={{display:planetObj.images.pngIsHidden}}/>
                    </div>
                </div>
            </div>

            <div className="stats">
                <div>
                    <h3>ROTATION TIME</h3>
                    <div className="boldNumber">{planetObj.rotation}</div>
                </div>
                <div>
                    <h3>REVOLUTION TIME</h3>
                    <div className="boldNumber">{planetObj.revolution}</div>
                </div>
                <div>
                    <h3>RADIUS</h3>
                    <div className="boldNumber">{planetObj.radius}</div>
                </div>
                <div>
                    <h3>AVERAGE TEMP</h3>
                    <div className="boldNumber">{planetObj.temperature}</div>
                </div>
            </div>

        </Fragment>
    )
}