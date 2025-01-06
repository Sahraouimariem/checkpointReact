import Carousel from 'react-bootstrap/Carousel';
function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img style={{width:"100%",height:"400px"}} src="https://p1-tt.byteimg.com/origin/tos-cn-i-qvj2lq49k0/91bf3e82f27742f68b808f6a7344d30c.jpg" alt="" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:"100%",height:"400px"}}  src="https://sdavidmiller.com/octo/images/best_of_2018/best_of_2018.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:"100%",height:"400px"}}  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/kevin-hart-rock-dwayne-johnson-movies-ranked.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;