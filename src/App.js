import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import LightGalleryStream from "./LightGalleryStream";
import Carousel from "react-bootstrap/Carousel";
import SliderOne from "./slider/SliderOne";
import SliderSecond from "./slider/SliderSecond";
import SliderThird from "./slider/SliderThird";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <LightGalleryStream />
        <lord-icon
          onclick='document.getElementById("startlightgallery").click()'
          src="https://cdn.lordicon.com/vixtkkbk.json"
          trigger="loop"
          delay="1000"
          colors="primary:#916f10,secondary:#e8b730"
          class="icon open"
        ></lord-icon>
        <div className="flower-container">
          <Container fluid="sm" className="pt-4">
            <Row>
              <div className="text-center text-uppercase top-text">
                the best
                <br />
                day of our lives
                <hr className="vertical-line" />
              </div>
              <div className="col-12 custom-logo text-center">
                Oliver & Camellia
              </div>
              <div className="col-12 light-text text-center">
                Donec rutrum congue leo eget malesuada. Curabitur arcu erat,
                accumsan id imperdiet et, porttitor at sem.
              </div>
            </Row>
          </Container>
          <Carousel controls={false} interval={5000} indicators={false}>
            <Carousel.Item>
              <SliderOne />
            </Carousel.Item>
            <Carousel.Item>
              <SliderSecond />
            </Carousel.Item>
            <Carousel.Item>
              <SliderThird />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
