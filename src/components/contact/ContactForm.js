import React, { Component } from "react";
import { Form, Image, Button } from "react-bootstrap";
import "./contactform.scss";

class ContactForm extends Component {
  render() {
    return (
      <>
        <div className='contact-main'>
          <h2>Write to us, </h2>
          <div className='form mt-3'>
            <Form className='form'>
              <Form.Group className='mb-4'>
                <Form.Control size='lg' type='text' placeholder='Full name' />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Control
                  controlId='formBasicEmail'
                  size='lg'
                  type='email'
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Control size='lg' type='number' placeholder='Phone' />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Control
                  as='textarea'
                  rows={5}
                  placeholder='Your message here'
                  className='mb-4'
                />
              </Form.Group>
              <Button variant='primary' type='submit' className='float-right'>
                Submit
              </Button>
            </Form>
          </div>
          <div className='details'>
            <div>
              <h3> Contact </h3>
              <h4> +1 (415) 359 456 9 </h4>
              <br />
            </div>
            <div>
              <h3> Email </h3>
              <h4> contact@sayitsocial.co </h4>
              <br />
            </div>
            <div>
              <h3> Follow us on </h3>
              <div className='d-flex mt-3'>
                <Image
                  className='contact-icons mr-3'
                  src={process.env.PUBLIC_URL + "/contact/linkedin.png"}
                />
                <Image
                  className='contact-icons mr-3'
                  src={process.env.PUBLIC_URL + "/contact/instagram.png"}
                />
                <Image
                  className='contact-icons mr-3'
                  src={process.env.PUBLIC_URL + "/contact/facebook.png"}
                />
              </div>
            </div>
          </div>
          <div className='lady'>
            <img
              src={process.env.PUBLIC_URL + "/contact/03.png"}
              alt='lady'
              width='500px'
              height='900px'
            ></img>
          </div>
        </div>
      </>
    );
  }
}

export default ContactForm;
