
import "./globals.css";

export const metadata = {
  title: " todo list",
  description: "Adarsh todo list app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
