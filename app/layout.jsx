// app/layout.jsx
import '../styles/global.css'; // or adjust path as needed

export const metadata = {
  title: 'Frontend Scroll Task',
  description: 'Scroll-based dynamic rendering',
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
