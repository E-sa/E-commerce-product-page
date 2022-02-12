import { useState } from 'react';
import Carousel_With_Thumbnail_For_Bigscreen from './Carousel_With_Thumbnail_For_Bigscreen';
import { ReactComponent as Logo } from "./../../../pictures/icon-close.svg";
import { Images } from "../ImportOfAllImages";


export default function ProductImages_bigScreen() {

    const [isCarousel, setCarousel] = useState(false);

    //by clicking on empty space menu closes.
    const handleClick = (e) => {

        if(e.target.id==="carousel-shadow"){
            setCarousel(!isCarousel)
        }
    
    }

    return (

        <div 
        className="d-lg-flex d-md-flex flex-column align-items-center d-sm-none d-none">

            {/* one big image */}
            <img
             id="main-picture"
             src={Images[0]} 
             alt="main-product-image"
             onClick={() => setCarousel(!isCarousel)} 
            />

            {/* 4 thumbnails */}
            <div className="thumb-nail-container mt-4 d-flex justify-content-between " >

                {[...Array(4)].map((elementInArray, index) => {
                    return (

                        <div
                            key={index + 1}
                            id={`thumb-nail-${index + 1}-container`}
                            onClick={() => setCarousel(!isCarousel)}
                        >
                            <img
                                className="thumb-nail"
                                id={`thumb-nail-${index + 1}`}
                                src={Images[index+3]}
                                alt="product-image-thumbnail"
                                onClick={() => setCarousel(!isCarousel)}
                            >
                            </img>

                        </div>

                    )


                })}

            </div>

            {/* conditional rendering when a photo clicked. */}
            {isCarousel &&

                <div className="carousel-shadow" id="carousel-shadow" onClick={handleClick} >

                    <Logo className='cross__icon' onClick={() => setCarousel(!isCarousel)} />

                    <Carousel_With_Thumbnail_For_Bigscreen   />

                </div>
            }
        </div>
    )
}