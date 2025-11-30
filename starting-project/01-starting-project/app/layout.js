import "./globals.css";
//This is reserve name for head tag
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};
//children content ejected in body tag
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
