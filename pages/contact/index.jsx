import React, { Component } from "react";
import Layout from "../../components/layout";

export class ContactPage extends Component {
    render() {
        return (
            <Layout>
                {/* <!--================Home Banner Area =================--> */}
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="banner_content text-center">
                                        <h2>Contact Us</h2>
                                        <div className="page_link">
                                            <a href="index.html">Home</a>
                                            <a href="contact.html">Contact</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================End Home Banner Area =================--> */}

                {/* <!--================Contact Area =================--> */}
                <section className="contact_area section_gap">
                    <div className="container">
                        {/* <div
                            id="mapBox"
                            className="mapBox"
                            data-lat="40.701083"
                            data-lon="-74.1522848"
                            data-zoom="13"
                            data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                            data-mlat="40.701083"
                            data-mlon="-74.1522848"
                        ></div> */}
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="contact_info">
                                    <div className="info_item">
                                        <i className="ti-home"></i>
                                        <h6>California, United States</h6>
                                        <p>Santa monica bullevard</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="ti-headphone"></i>
                                        <h6>
                                            <a href="#">00 (440) 9865 562</a>
                                        </h6>
                                        <p>Mon to Fri 9am to 6 pm</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="ti-email"></i>
                                        <h6>
                                            <a href="#">support@colorlib.com</a>
                                        </h6>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <form
                                    className="row contact_form"
                                    action="contact_process.php"
                                    method="post"
                                    id="contactForm"
                                >
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Enter your name"
                                                required=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Enter email address"
                                                required=""
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                name="subject"
                                                placeholder="Enter Subject"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                id="message"
                                                rows="1"
                                                placeholder="Enter Message"
                                                required=""
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <button
                                            type="submit"
                                            value="submit"
                                            className="btn primary-btn"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================Contact Area =================--> */}
            </Layout>
        );
    }
}

export default ContactPage;
