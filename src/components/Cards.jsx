import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';


function Cards(props) {
    console.log(props)
    return (
        <div style={{ background: props.dark === true ? "black" : "white", display: "flex", flexDirection: "column", justifyContent: "center", gap: "50px", marginTop: "0.5%", backgroundColor: "spacegrey" }}>
            {
                props.movies.map((film) =>
                    <div key={film.id} style={{ display: "flex", gap: "50px", alignItems: "center", justifyContent: "center",height:"300px" }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{ height: "300px" }} variant="top" src={film.poster} />
                            <Card.Body>
                                <Card.Title>{film.title}</Card.Title>
                                <Card.Text>
                                    year:{film.year} <br />
                                    description:{film.description} <br />
                                    director:{film.director} <br />

                                </Card.Text>


                                <ReactStars
                                    count={10}
                                    value={film.rating}
                                    size={24}
                                    color2={'red'} />


                            </Card.Body>
                        </Card>
                        <iframe width={560} height={314} src={film.trailer} frameBorder="0"></iframe>
                    </div>)

            }

        </div>

    );
}

export default Cards;
