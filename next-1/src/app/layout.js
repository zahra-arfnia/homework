import Header from '../components/Header';
import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="This is my app description." />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
