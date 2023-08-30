import { Outlet, useLoaderData, useNavigation } from 'react-router-dom'

import { getPlanets } from "../logic"

import Header from '../header'

export async function loader(){
    const data = await getPlanets()
    return data
}

function Root() {
    let planets = useLoaderData()
    let navigation = useNavigation()

    return(
        <main>
            <Header links={planets}/>
            <div className="loadingAnim" style={{visibility:navigation.state==='loading'?"visible":"hidden"}}>
                <div class="loader">
                    <li class="ball"></li>
                    <li class="ball"></li>
                    <li class="ball"></li>
                </div>
            </div>
            <section className={'Content' + (navigation.state==='loading'?" loading":"")}>
                <Outlet/>
            </section>
        </main>
    )
}

export default Root
