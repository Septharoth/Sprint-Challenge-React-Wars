// Write your Character component here

import React from "react"
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap"


const Character = props => {
    //const [open, set] = useState(false)
    //const toggle = () => set(!open)

    return (
        <div className="character">
            <Card style={{width: "80%", margin: "0 auto", backgroundColor: "grey"}}>
                <CardImg top width="100%" src={props.image} alt={props.name} />
                <CardBody>
                    <CardTitle>{props.id}. {props.name}</CardTitle>    
                    <CardText>Status: {props.status}</CardText>
                    <CardText>Species: {props.species}</CardText>
                    <CardText>Gender: {props.gender}</CardText>
                    <CardText>Origin: {props.origin}</CardText>
                    <CardText>Location: {props.location}</CardText>
                    <CardText><a href={props.url}>Character URL</a></CardText>
                </CardBody>
            </Card>
        </div>
    )

}

export default Character