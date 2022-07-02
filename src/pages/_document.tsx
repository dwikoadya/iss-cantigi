import Document, {
  Html, Head, Main, NextScript,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" role="document">
        <Head>
          <link href="/favicon.ico" rel="icon" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap&family=Titillium+Web:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
