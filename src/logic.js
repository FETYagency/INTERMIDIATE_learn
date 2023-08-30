async function fetchPlanets(){
    let req = await fetch("https://api.jsonbin.io/v3/b/64ed008a8e4aa6225ed68398")
    let resp = await req.json()
    let data = resp.record
    return data
}
async function getPlanets() {
    let fetch = await fetchPlanets()
    return fetch
}
async function getPlanet(planetName, planetContent){
    let fetch = await fetchPlanets()
    let planetObj;
    for (const ele of fetch) {
        if(planetName===ele.name){
            let {name,rotation, revolution, radius, temperature, images} = ele
            let imgObj;
            switch (planetContent) {
                case "overview":
                    imgObj={svg:images.planet, png:images.geology, pngIsHidden:"none"}
                    break;
                case "structure":
                    imgObj={svg:images.internal, png:images.geology, pngIsHidden:"none"}
                    break;
                case "geology":
                    imgObj={svg:images.planet, png:images.geology, pngIsHidden:"block"}
                    break;
                default:
                    imgObj={svg:images.planet, png:images.geology, pngIsHidden:"none"}
            }
            planetObj={
                text:ele[planetContent]||{content:"false", source:"false"},
                images:imgObj,
                name,
                rotation,
                revolution,
                radius,
                temperature,
            }
            break;
        }else{
            continue;
        }
    }
    
    return planetObj
}


export {getPlanets, getPlanet}