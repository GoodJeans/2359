import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
export default function Panel() {
    return (
        <Container>
            <Row>
                <Col xs lg="2" >
                    Gallery<span className="galleryeasy">easy</span>
                </Col>
                <Link to='/Search'><Col xs lg="4" >
                    Search
  </Col>
                </Link>
                <Link to='/Favourites'><Col xs lg="4" >
                    Favourites
  </Col>
                </Link>
            </Row>
        </Container>
    )
}
