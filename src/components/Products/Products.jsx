import React, { useEffect, useState } from "react";
import "./Products.css";
import { getProducts } from "../../services/FakeStoreAPI";



let Products = () => {

    let [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, [])

    return (
        <>
            <div className="container">
                <h4>{String("Ultimos Productos!").toUpperCase()}</h4>
                <section id="products" className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                        {
                            products.slice(7, 19).map((product) => {
                                return (
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center mb-5" key={product.id}>
                                        <a>
                                            <a href={`/products/${product.id}`}>
                                                <div className="card">
                                                    <img className="card-img-top" src={product.image} alt={product.title} />
                                                    <div className="card-body mb-3">
                                                        <h6 className="card-title"><i className="bi bi-bag"></i> {product.title}</h6>
                                                    </div>
                                                    <div className="card-footer text-center">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <h6><i className="bi bi-tag"></i> Price: <i className="bi bi-currency-dollar"></i><b>{product.price}</b> </h6>
                                                            </div>
                                                            <div className="col-6">
                                                                <h6><i className="bi bi-basket3"></i> Stock: <b>{Math.floor(Math.random() * 5) + 1}</b></h6>
                                                            </div>
                                                        </div>
                                                        <hr></hr>
                                                        <div>
                                                            <a className="btn btn-block btn-primary mb-3" href={`/products/${product.id}`}><i className="bi bi-cart"></i> Comprar Ahora</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>)
};


export default Products;