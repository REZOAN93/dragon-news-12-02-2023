import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import BrandCarousal from "../../../BrandCarousal/BrandCarousal";

const Rightsidenave = () => {
  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button className="mb-2" variant="outline-success">
            {" "}
            <FaGoogle /> Login with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub /> Login with GitHub
          </Button>
        </ButtonGroup>
      </div>
      <div className="mt-5">
        <h5>Find us on:</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twiter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin /> Linked In
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            {" "}
            <FaMailBulk /> Gmail
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-5">
        <BrandCarousal></BrandCarousal>
      </div>
    </div>
  );
};

export default Rightsidenave;
