import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link
                        rel="icon"
                        href="/static/img/favicon.png"
                        type="image/png"
                    />
                    <title>Edustage Education</title>
                    {/* <!-- Bootstrap CSS --> */}
                    <link rel="stylesheet" href="/static/css/bootstrap.css" />
                    <link rel="stylesheet" href="/static/css/flaticon.css" />
                    <link
                        rel="stylesheet"
                        href="/static/css/themify-icons.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/static/vendors/owl-carousel/owl.carousel.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/static/vendors/nice-select/css/nice-select.css"
                    />
                    <link rel="stylesheet" href="/static/css/style.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* <!-- Optional JavaScript --> */}
                    {/* <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
                    <script src="/static/js/jquery-3.2.1.min.js"></script>
                    <script src="/static/js/popper.js"></script>
                    <script src="/static/js/bootstrap.min.js"></script>
                    <script src="/static/vendors/nice-select/js/jquery.nice-select.min.js"></script>
                    <script src="/static/vendors/owl-carousel/owl.carousel.min.js"></script>
                    <script src="/static/js/owl-carousel-thumb.min.js"></script>
                    <script src="/static/js/jquery.ajaxchimp.min.js"></script>
                    <script src="/static/js/mail-script.js"></script>
                    {/* <!--gmaps Js--> */}
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
                    <script src="/static/js/gmaps.min.js"></script>
                    <script src="/static/js/theme.js"></script>
                </body>
            </Html>
        );
        Í;
    }
}

export default MyDocument;
