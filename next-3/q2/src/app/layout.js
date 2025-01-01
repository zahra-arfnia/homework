
import "../styles/globals.css";
export default function RootLayout({ children,modal }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="This is my app description." />
      </head>
      <body>
        
      <div>{children}</div>
      <div>{modal}</div>
      </body>
    </html>
  );
}
