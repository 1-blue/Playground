import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";

import "#fe/css/tailwind.css";
import TRPCProvider from "#fe/providers/TRPCProvider";

export const metadata: Metadata = {};

const RootLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="ko">
      <head>
        <ThemeModeScript />
      </head>
      <body className="m-10">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
};

export default RootLayout;
