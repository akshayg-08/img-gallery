
import one from "../assets/images/img1.jpg"
import two from "../assets/images/img2.jpg"
import three from "../assets/images/img3.jpg"
import four from "../assets/images/img4.jpg"
import five from "../assets/images/img5.jpg"
import six from "../assets/images/img6.jpg"
import seven from "../assets/images/img7.jpg"
import eight from "../assets/images/img8.jpg"


//product comp
function Photo()
{
    return( <div className="container">
        <h1><div className="image">
        <div className="image__one">
            <img src={one} alt="image1"/>
        </div>
        <div className="image__one">
            <img src={two} alt="image1"/>
        </div>
        <div className="image__one">
            <img src={three} alt="image1"/>
        </div>
        <div className="image__one">
            <img src={four} alt="image1"/>
        </div>
        <div className="image__one">
            <img src={five} alt="image1"/>
        </div>
        <div className="image__one">
            <img src={six} alt="image1"/>
        </div>
        <div className="image__one">
            <img src={seven} alt="image1"/>
        </div>
        <div className="image__one">
            <img src={eight} alt="image1"/>
        </div>
        
    </div></h1>
    </div>)
}

export default Photo