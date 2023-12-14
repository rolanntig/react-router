import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contacts = () => {
  return (
    <div>
      <Modal />
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/alex" className="ui header">Alex</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          dolor, tenetur aperiam, corrupti rerum fugit dignissimos ducimus
          commodi ratione est corporis ab earum laboriosam! Qui architecto
          doloribus nihil corrupti ducimus!
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/freddy" className="ui header">Freddy</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          dolor, tenetur aperiam, corrupti rerum fugit dignissimos ducimus
          commodi ratione est corporis ab earum laboriosam! Qui architecto
          doloribus nihil corrupti ducimus!
        </p>
      </div>
    </div>
  );
};

export default Contacts;
