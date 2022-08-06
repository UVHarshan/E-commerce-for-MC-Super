import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import logger from 'use-reducer-logger';
//import data from "../data";
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
import Product from "../components/Product";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

function HomeScreen() {

    // useReducer Hook ......... Refer About this?????
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });

    //const [products, setProducts] = useState([]); // useState Hook

    // Using useEffect Hook ( Like life cycle methods in class components)
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }

            //console.log(result);
            //setProducts(result.data);
        };
        fetchData();
    }, []);


    return (
        <div>
            <h1> Featured Products </h1>
            <div className="products">
                {
                    loading ? (
                        <div> loading..... </div>
                    ) : error ? (
                        <div> {error} </div>
                    ) : (
                        <Row>
                            {
                                products.map(product => (
                                    <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                                       <Product product={product} />
                                    </Col>
                                ))
                            }
                        </Row>
                    )
                }
            </div>

        </div>
    )
}

export default HomeScreen;