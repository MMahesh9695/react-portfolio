import logo from "./logo.svg";
import "./App.css";
import SelectedPage from "./SelectedPage/SelectedPage";

function App() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Maheshwaran Portfolio" />
        <meta property="og:image" content="./images/page-thumbnail.png" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:url"
          content="https://maheshwaran-portfolio.netlify.app/"
        />
        <title>Maheshwaran</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="./images/computer-businessman-icon.svg"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
        <link href="/profile.css" rel="stylesheet" type="text/css" />
        <script src="./profile.js"></script>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </head>
      <body class="body-wrapper">
        <SelectedPage/>
      </body>
    </>
  );
}

export default App;
