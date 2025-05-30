import "../App.css"
import Star from "./Star.js"
import ParallaxLayer from "./ParallaxLayer.js"
import { useMemo } from "react"

const starCount = 100;

function Background({isMobile, scale}) {
    const stars = useMemo(() => {
        return new Array(starCount).fill(0).map((_, i) => <Star key={i} />)
    }, []);

    return (
        <div>
            <div className = "backgroundUpper"/>
            <div className = "backgroundLower"/>
            {!isMobile ? (
                <ParallaxLayer scale = {scale} layer = {4} parallaxThreshold={0} className = "backgroundParallax">
                    {stars}
                </ParallaxLayer>
            ) : (
                <div className = "backgroundParallax">
                    {stars}
                </div>
            )}
        </div>
       
    )
}

export default Background