import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const {locale} = this.props.__NEXT_DATA__ 
        const dir = locale === 'ar' ? 'rtl' : 'ltr';
        return (
            <Html dir={dir} lang={locale}>
                <Head>
                    <link 
                        rel="icon" 
                        type="image/png" 
                        href="/images/favicon.png"
                    ></link>
                    <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap" rel="stylesheet"/>
                    </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;