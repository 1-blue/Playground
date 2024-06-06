import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react/components/ThemeModeScript";

import "#fe/css/tailwind.css";


export const metadata: Metadata = {};

const RootLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="ko">
      <head>
        <ThemeModeScript />
      </head>
      <body className="m-10">{children}</body>
    </html>
  );
};

export default RootLayout;
