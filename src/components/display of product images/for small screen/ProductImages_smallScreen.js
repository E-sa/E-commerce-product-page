
import Carousel from 'react-bootstrap/Carousel';
import { Images } from "../ImportOfAllImages";


export default function ProductImages_smallScreen() {
  return (


    <Carousel fade variant="dark" className="d-md-none d-lg-none mt-5">

      {[...Array(4)].map((elementInArray, index) => {
        return (

          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={Images[index]}
              alt="First slide"
            />
          </Carousel.Item>
        )
      })}

    </Carousel>
  )
}