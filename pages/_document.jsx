import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head/>
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
