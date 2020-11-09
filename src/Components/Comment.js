import React from 'react'
import {Card , Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Comment = (props) => {
    return (
      <div style={{
              display: "flex",
              flexWrap: "wrap",

              justifyContent: "space-around",
            }}>
        {props.ListComments.filter(
          (comment) => comment.postId === Number(props.match.params.id)
        ).map((comment, i) => (
          <Card
             border="primary"
          style={{ width: "18rem" }}
            className="text-center"
          >
            <Card.Header>{comment.email}</Card.Header>
            <Card.Body>
              <Card.Title>{comment.name}</Card.Title>
              <Card.Text>{comment.body}</Card.Text>
              <Link to="/">
                <Button variant="primary">Go Home</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}

export default Comment
