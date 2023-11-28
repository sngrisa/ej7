import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="footer-top text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="widget company-intro-widget text-center">
                                    <div className="text-center"><img src={`/assets/contacto.png`} alt="logo" className="logo-footer logo"/></div>
                                        <h5><i className="bi bi-person-lines-fill"></i> Contacto:</h5>
                                    <ul>
                                        <li>
                                            <p><i className="bi bi-envelope-at-fill"></i> Email: <a href="mailto:prosapshop@gmail.com">  prosapshop@gmail.com</a></p>
                                        </li>
                                        <li>
                                            <p><i className="bi bi-telephone-fill"></i> Telefono: <small>(+54) 0800-446-4789</small></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="widget course-links-widget">
                                    <h5 className="widget-title"><i className="bi bi-person-rolodex"></i> Páginas amigas:</h5>
                                    <ul className="courses-link-list box">
                                        <li><a href="https://www.mercadolibre.com.ar"><img src={"/assets/mercadolibre.png"} className="aImage"/></a></li>
                                        <li><a href="https://es.aliexpress.com/"><img src={"/assets/aliexpress.png"} className="aImage"/></a></li>
                                        <li><a href="https://spanish.alibaba.com/g/argentina.html"><img src={"/assets/alibaba.png"} className="aImage"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center mt-3">
                                <span className="copy-right-text">© 2023 SiG Software. Todos los derechos Reservados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

