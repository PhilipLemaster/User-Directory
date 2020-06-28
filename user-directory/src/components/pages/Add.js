import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Add = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="full-name">Full Name</Label>
        <Input type="text" name="fullName" id="fullName" placeholder="Bjarne Stroustrup" />
      </FormGroup>
      <FormGroup>
        <Label for="title">Select</Label>
        <Input type="select" name="title" id="title">
          <option>Manager</option>
          <option>Engineer</option>
          <option>Intern</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="email">email</Label>
        <Input type="email" name="email" id="email" placeholder="codeg33k@gmail.com" />
      </FormGroup>
      <Button onClick={addEmp}>Submit</Button>
    </Form>
  );
}


function addEmp(res) {

  let fullName = document.getElementById('fullName').value;
  let title = document.getElementById('title').value;
  let email = document.getElementById('email').value;
  
  const emp = {
    name: fullName,
    title: title,
    email: email
  }

  console.log(emp)
}

export default Add;