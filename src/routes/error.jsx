import { useRouteError } from "react-router-dom"

export default function Error(){
    const error = useRouteError()
    return(
        <div class="error">
            <h2>A network problem happened, please refresh the page or navigate to another link from above</h2>
            <p>{error.statusText || error.message}</p>
            <div className="anim">
                <div class="loading">
                    <svg width="64px" height="48px">
                        <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                        <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                    </svg>
                </div>
            </div>
        </div>

    )
}