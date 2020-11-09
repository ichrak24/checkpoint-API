import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import imgUser from "./imgUser.png";
import { Link } from "react-router-dom";
function Users({ ListUsers }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {ListUsers.map((user, i) => (
        <Link to={`/posts/${user.id}`}>
          <Card
            style={{
              width: "15rem",
              height: "15rem",
              marginRigth: "30px",
              marginBottom: "20px",
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "transparent",
              boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
            }}
          >
            <Card.Header
              style={{
                borderTopRigthRadius: "8px",
                borderTopLeftRadius: "8px",
                backgroundColor: "#277FA5",
                heigth: "13rem",
              }}
            />
            <Col>
              <Image
                src={imgUser}
                roundedCircle
                style={{
                  heigth: "100px",
                  width: "200px",
                  position: "relative",
                  bottom: "80px",
                  border: "10px solid white",
                  backgroundColor: "transparent",
                }}
              />
            </Col>
            <Card.Body style={{ position: "relative", bottom: "90px" }}>
              <Card.Title style={{ margin: "0", color: "#505151" }}>
                {user.name}
              </Card.Title>
              <Card.Text style={{ fontSize: "small", color: "#4BAED4" }}>
                {user.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Users;
