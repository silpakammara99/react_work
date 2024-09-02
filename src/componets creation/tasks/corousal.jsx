import { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.44kBtLSUnfJ9ekrM2g4vBQHaE7&pid=Api&P=0&h=180" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.44kBtLSUnfJ9ekrM2g4vBQHaE7&pid=Api&P=0&h=180" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.44kBtLSUnfJ9ekrM2g4vBQHaE7&pid=Api&P=0&h=180" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

