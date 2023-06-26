import React from 'react'
import Form from "react-bootstrap/Form";
function ChildrenComp({todo , setTodo}) {
  return (
    <div>
      {todo.map((e, index) => (
        <div key={index}>
          <h1>Contact Info</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="?">
              {e.name}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="?">
              {e.email}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="?">
              {e.phone}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Messenger</Form.Label>
            <Form.Control type="text" placeholder="?">
              {e.mess}
            </Form.Control>
          </Form.Group>
        </div>
      ))}

      <i class="fab fa-facebook-f"></i>

      <i class="fab fa-instagram"></i>

      <i class="fab fa-twitter"></i>

      <i class="fa-brands fa-youtube"></i>
    </div>
  );
}

export default ChildrenComp