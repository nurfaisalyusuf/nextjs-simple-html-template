import React, { Component } from "react";
import Layout from "../../components/layout";

export class CourseDetailPage extends Component {
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
                                        <h2>Course Details</h2>
                                        <div className="page_link">
                                            <a href="index.html">Home</a>
                                            <a href="courses.html">Courses</a>
                                            <a href="course-details.html">
                                                Courses Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================End Home Banner Area =================--> */}
                {/* <!--================ Start Course Details Area =================--> */}
                <section className="course_details_area section_gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 course_details_left">
                                <div className="main_image">
                                    <img
                                        className="img-fluid"
                                        src="/static/img/courses/course-details.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="content_wrapper">
                                    <h4 className="title">Objectives</h4>
                                    <div className="content">
                                        When you enter into any new area of
                                        science, you almost always find yourself
                                        with a baffling new language of
                                        technical terms to learn before you can
                                        converse with the experts. This is
                                        certainly true in astronomy both in
                                        terms of terms that refer to the cosmos
                                        and terms that describe the tools of the
                                        trade, the most prevalent being the
                                        telescope.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodoconsequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum. Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum.
                                    </div>
                                    <h4 className="title">Eligibility</h4>
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodoconsequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum. Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum.
                                    </div>
                                    <h4 className="title">Course Outline</h4>
                                    <div className="content">
                                        <ul className="course_list">
                                            <li className="justify-content-between d-flex">
                                                <p>Introduction Lesson</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between d-flex">
                                                <p>Basics of HTML</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between d-flex">
                                                <p>Getting Know about HTML</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between d-flex">
                                                <p>Tags and Attributes</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between d-flex">
                                                <p>Basics of CSS</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between d-flex">
                                                <p>Getting Familiar with CSS</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between d-flex">
                                                <p>Introduction to Bootstrap</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between d-flex">
                                                <p>Responsive Design</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between d-flex">
                                                <p>Canvas in HTML 5</p>
                                                <a
                                                    className="primary-btn text-uppercase"
                                                    href="#"
                                                >
                                                    View Details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 right-contents">
                                <ul>
                                    <li>
                                        <a
                                            className="justify-content-between d-flex"
                                            href="#"
                                        >
                                            <p>Trainer’s Name</p>
                                            <span className="or">
                                                George Mathews
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="justify-content-between d-flex"
                                            href="#"
                                        >
                                            <p>Course Fee </p>
                                            <span>$230</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="justify-content-between d-flex"
                                            href="#"
                                        >
                                            <p>Available Seats </p>
                                            <span>15</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="justify-content-between d-flex"
                                            href="#"
                                        >
                                            <p>Schedule </p>
                                            <span>2.00 pm to 4.00 pm</span>
                                        </a>
                                    </li>
                                </ul>
                                <a
                                    href="#"
                                    className="primary-btn2 text-uppercase enroll rounded-0 text-white"
                                >
                                    Enroll the course
                                </a>

                                <h4 className="title">Reviews</h4>
                                <div className="content">
                                    <div className="review-top row pt-40">
                                        <div className="col-lg-12">
                                            <h6 className="mb-15">
                                                Provide Your Rating
                                            </h6>
                                            <div className="d-flex flex-row reviews justify-content-between">
                                                <span>Quality</span>
                                                <div className="star">
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star"></i>
                                                    <i className="ti-star"></i>
                                                </div>
                                                <span>Outstanding</span>
                                            </div>
                                            <div className="d-flex flex-row reviews justify-content-between">
                                                <span>Puncuality</span>
                                                <div className="star">
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star"></i>
                                                    <i className="ti-star"></i>
                                                </div>
                                                <span>Outstanding</span>
                                            </div>
                                            <div className="d-flex flex-row reviews justify-content-between">
                                                <span>Quality</span>
                                                <div className="star">
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star checked"></i>
                                                    <i className="ti-star"></i>
                                                    <i className="ti-star"></i>
                                                </div>
                                                <span>Outstanding</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feedeback">
                                        <h6>Your Feedback</h6>
                                        <textarea
                                            name="feedback"
                                            className="form-control"
                                            cols="10"
                                            rows="10"
                                        ></textarea>
                                        <div className="mt-10 text-right">
                                            <a
                                                href="#"
                                                className="primary-btn2 text-right rounded-0 text-white"
                                            >
                                                Submit
                                            </a>
                                        </div>
                                    </div>
                                    <div className="comments-area mb-30">
                                        <div className="comment-list">
                                            <div className="single-comment single-reviews justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img
                                                            src="/static/img/blog/c1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="desc">
                                                        <h5>
                                                            <a href="#">
                                                                Emilly Blunt
                                                            </a>
                                                            <div className="star">
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star"></span>
                                                                <span className="ti-star"></span>
                                                            </div>
                                                        </h5>
                                                        <p className="comment">
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list">
                                            <div className="single-comment single-reviews justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img
                                                            src="/static/img/blog/c2.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="desc">
                                                        <h5>
                                                            <a href="#">
                                                                Elsie Cunningham
                                                            </a>
                                                            <div className="star">
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star"></span>
                                                                <span className="ti-star"></span>
                                                            </div>
                                                        </h5>
                                                        <p className="comment">
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list">
                                            <div className="single-comment single-reviews justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img
                                                            src="/static/img/blog/c3.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="desc">
                                                        <h5>
                                                            <a href="#">
                                                                Maria Luna
                                                            </a>
                                                            <div className="star">
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star checked"></span>
                                                                <span className="ti-star"></span>
                                                                <span className="ti-star"></span>
                                                            </div>
                                                        </h5>
                                                        <p className="comment">
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipisicing elit,
                                                            sed do eiusmod
                                                            tempor incididunt ut
                                                            labore et dolore.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================ End Course Details Area =================--> */}
            </Layout>
        );
    }
}

export default CourseDetailPage;
