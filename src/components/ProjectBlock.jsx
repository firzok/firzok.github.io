import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    UncontrolledTooltip
} from "reactstrap";


function ProjectBlock(props) {

    return (
        <Card className="card-coin card-background shadow-10 card-min-height">
            <CardTitle className="content-center text-center">
                <div className="space-30" />
                <h2>{props.title}</h2>
                <h4>{props.date ? props.date : ""}</h4>
                <div className="space-10" />
            </CardTitle>
            <CardBody>
                <span>Details</span>
                <h5>
                    {props.description ? props.description : ""}
                </h5>
            </CardBody>
            {
                props.github ?
                    <CardFooter className="text-center">
                        <Button
                            className="btn-info btn-round btn-sm"
                            color="primary"
                            id={"project" + props.id}
                            href={props.github}
                        >
                            <i className="fab fa-github-square project-icon" />
                        </Button>
                        <UncontrolledTooltip placement="top" target={"project" + props.id} delay={0}>
                            View on GitHub
                        </UncontrolledTooltip>
                    </CardFooter>
                    :
                    ""
            }

        </Card>

    )

}

export default ProjectBlock