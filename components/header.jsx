import React from "react";
import Link from "next/link";

class AppHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPathName: null,
        };
    }

    componentDidMount() {
        this.setState({
            currentPathName: window.location.pathname,
        });
    }

    render() {
        let logo = this.state.currentPathName == "/" ? "logo.png" : "logo2.png";
        let whiteArea = this.state.currentPathName == "/" ? "" : "white-header"
        let menuItems = [
            {
                href: "/",
                pathname: "/",
                label: "Home",
                className:
                    "nav-item" +
                    (this.state.currentPathName == "/" ? " active" : ""),
            },
            {
                href: "/about",
                pathname: "/about",
                label: "About",
                className:
                    "nav-item" +
                    (this.state.currentPathName == "/about" ? " active" : ""),
            },
            {
                href: "#",
                pathname: "#",
                label: "Pages",
                className:
                    "nav-item submenu dropdown" +
                    (this.state.currentPathName == "/pages" ? " active" : ""),
                sub: [
                    {
                        href: "/course",
                        pathname: "/course",
                        label: "Courses",
                    },
                    {
                        href: "/course-detail",
                        pathname: "/course-detail",
                        label: "Course Details",
                    },
                    {
                        href: "/element",
                        pathname: "/element",
                        label: "Elements",
                    },
                ],
            },
            {
                href: "#",
                pathname: "#",
                label: "Blog",
                className:
                    "nav-item submenu dropdown" +
                    (this.state.currentPathName == "/blog" ? " active" : ""),
                sub: [
                    {
                        href: "/blog",
                        pathname: "/blog",
                        label: "Blog",
                    },
                    {
                        href: "/blog-detail",
                        pathname: "/blog-detail",
                        label: "Blog Details",
                    },
                ],
            },
            {
                href: "/contact",
                pathname: "/contact",
                label: "Contact",
                className:
                    "nav-item" +
                    (this.state.currentPathName == "/contact" ? " active" : ""),
            },
            {
                href: "#",
                pathname: "#",
                label: "search",
                className: "nav-item",
            },
        ];

        return (
            // <!--================ Start Header Menu Area =================-->
            <header className={`header_area ${whiteArea}`}>
                <div className="main_menu">
                    <div className="search_input" id="search_input_box" style={{display: "none"}}>
                        <div className="container">
                            <form
                                className="d-flex justify-content-between"
                                method=""
                                action=""
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    id="search_input"
                                    placeholder="Search Here"
                                />
                                <button type="submit" className="btn"></button>
                                <span
                                    className="ti-close"
                                    id="close_search"
                                    title="Close Search"
                                ></span>
                            </form>
                        </div>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                            <a
                                className="navbar-brand logo_h"
                                href="index.html"
                            >
                                <img src={`/static/img/${logo}`} alt="" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar"></span>{" "}
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div
                                className="collapse navbar-collapse offset"
                                id="navbarSupportedContent"
                            >
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    
                                    {menuItems.map((menu, i) => {
                                        let subMenus = "";
                                        let idSearch = "";
                                        let subStyle = (<a
                                            className="nav-link"
                                            href={menu.href}
                                            id={idSearch}
                                        >
                                            {menu.label}
                                        </a>);
                                        if (menu.label === "search") {
                                            idSearch = "search";
                                            menu.label = (
                                                <i className="ti-search"></i>
                                            );
                                            subStyle = (
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    href={menu.href}
                                                    id={idSearch}
                                                >
                                                    {menu.label}
                                                </a>
                                            );
                                        }
                                        if (menu.sub) {
                                            subMenus = (
                                                <ul className="dropdown-menu">
                                                    {menu.sub.map((sm, i) => {
                                                        return (
                                                            <li
                                                                className="nav-item"
                                                                key={i}
                                                            >
                                                                <Link
                                                                    as={sm.href}
                                                                    href={{
                                                                        pathname:
                                                                            sm.pathname,
                                                                    }}
                                                                >
                                                                    <a
                                                                        className="nav-link"
                                                                        href={
                                                                            sm.href
                                                                        }
                                                                    >
                                                                        {
                                                                            sm.label
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            );
                                        }

                                        return (
                                            <li
                                                className={menu.className}
                                                key={i}
                                            >
                                                <Link
                                                    as={menu.href}
                                                    href={{
                                                        pathname: menu.pathname,
                                                    }}
                                                >
                                                    {subStyle}
                                                </Link>
                                                {subMenus}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default AppHeader;
