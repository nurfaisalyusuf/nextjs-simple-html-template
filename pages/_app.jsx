// import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My new cool app</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta charset="utf-8" />
                    {/* <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    /> */}
                    <link
                        rel="icon"
                        href="/static/img/favicon.png"
                        type="image/png"
                    />
                    {/* <title>Edustage Education</title> */}
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
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
