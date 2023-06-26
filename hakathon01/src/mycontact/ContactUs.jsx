import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./ContactUs.css";
import ChildrenComp from "./ChildrenComp";

function BasicExample() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [todo, setTodo] = useState([])
  
  const [newText, setNewText] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newMess, setNewMess] = useState("");
  
  const handleInputChange = (e) => {
     setNewText(e.target.value)
     
  }
  const { name, email, phone, messenger } = todo;

  const addText = () => {
    if (newText.trim() !== "") {
      setTodo([...todo, newText]);
    


      setNewText("");
    } else if(newEmail !== "") {
      setTodo([...todo, newEmail]);
      setNewEmail("")
    }

  };
  return (
    <div className="main">
      <div className="main1">
        <ChildrenComp todo={todo} setTodo={setTodo} />
      </div>
      <div className="main2">
        <h1>Contact Us</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter name"
              required
              pattern="[a-zA-Z\s]+"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              placeholder="Enter phone"
              required
              pattern="[0-9]{10,}"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
Please enter a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Label>Messenger</Form.Label>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              pattern="[a-zA-Z\s]+"
              value={messenger}
              onChange={handleInputChange}
            />
          </FloatingLabel>

          <Button
            onClick={addText}
            className="btn"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BasicExample;