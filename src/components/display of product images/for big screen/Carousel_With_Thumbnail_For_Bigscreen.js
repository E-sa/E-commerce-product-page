//when user clicks on an image this component appears.
//it goes when user clicks cross-mark

import Carousel from 'react-bootstrap/Carousel';
import { Images } from "../ImportOfAllImages";

export default function Carousel_With_Thumbnail_For_Bigscreen(params) {


    return (

        <Carousel variant="dark" fade className="col-3 p-0">

            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={Images[0]}
                    alt="First slide"
                />
            </Carousel.Item>


            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={Images[1]}
                    alt="Second slide"
                />
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Images[2]}
                    alt="Third slide"
                />
            </Carousel.Item>


            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Images[3]}
                    alt="Forth slide"
                />
            </Carousel.Item>

        </Carousel>
    )
}