import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
 
export default function CreateProductForm() {
    // const [name,setName]=useState("");
    // const [category,setCategory]=useState("");
    // const [description,setDescription]=useState("");
    // const [price,setPrice]=useState("");
    // const [rating,setRating]=useState("");
    // const [count,setCount]=useState("");
    // function saveUser() {
    //     console.warn(name,category,description,price,rating,count);
    //     let data={name,category,description,price,rating,count}
    //     fetch('https://fakestoreapi.com/products',{
    //         method:"POST",
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-type':'application/json'
    //         },
    //         body:JSON.stringify(data)
    //     }).then((result)=>{
    //         console.warn("result",result);
    //     })
    // }

    //Last code start
    // State to store form data
    const initialPost = {
        name: '',
        category: '',
        description: '',
        price: '',
        rating: '',
        count: '',
    }
    const [post, setPost] = useState(initialPost);
 
     //Function to handle form input changes
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]:e.target.value});
    };

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('https://fakestoreapi.com/products', post)
        .then(response => {
            if (response.status === 200) {
                console.log("Product created successfully!");
                alert("Product created successfully!");
                setPost(initialPost);
            } else {
                console.log("Failed to create product. Status:", response.status);
            }
        })
        .catch(err => console.error("Error:", err));
        // .then(response => console.log(response))
        // .catch(err => console.log(err))
        setPost(initialPost)
    }
    //last code end    
    return (
        <div className='product-form-wrapper'>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter Title"
                                    value={post.name}
                                    // onChange={(e)=>{setName(e.target.value)}}
                                    onChange={handleChange}
                                    required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="category"
                                    placeholder="Enter Category"
                                    value={post.category}
                                    // onChange={(e)=>{setCategory(e.target.value)}}
                                    onChange={handleChange}
                                    required 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    placeholder="Description Here"
                                    style={{ height: '50px' }}
                                    value={post.description}
                                    // onChange={(e)=>{setDescription(e.target.value)}}
                                    onChange={handleChange}
                                    required 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    value={post.price}
                                    // onChange={(e)=>{setPrice(e.target.value)}}
                                    onChange={handleChange}
                                    required 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formRating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="rating"
                                    placeholder="Rating"
                                    value={post.rating}
                                    // onChange={(e)=>{setRating(e.target.value)}}
                                    onChange={handleChange}
                                    required 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCount">
                                <Form.Label>Count</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="count"
                                    placeholder="Count"
                                    value={post.count}
                                    // onChange={(e)=>{setCount(e.target.value)}}
                                    onChange={handleChange}
                                    required 
                                />
                            </Form.Group>
                            <Button className='btn common-btn' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}