import { Header } from '@components/layout';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactElement;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
