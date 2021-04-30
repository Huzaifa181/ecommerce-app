import React,{useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Products'
import axios from 'axios'
const HomeScreen = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        const fetchProduct=async()=>{
            const {data}=await axios.get('/api/products')
            console.log(data)
            setProducts(data)
        }
        fetchProduct()
    },[])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {
                    products?.map(product=>{
                        return(
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        )
                    })
                }
        </Row>
        </>
    )
}

export default HomeScreen