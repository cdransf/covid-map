import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="scroll-smooth">
                <Head>
                    <title>COVID occurrence map</title>
                    <meta
                        name="description"
                        content="COVID occurence map by location."
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
