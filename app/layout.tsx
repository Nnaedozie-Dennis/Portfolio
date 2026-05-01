import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Nnaedozie Chukwuneta Dennis | Full-Stack Developer & Data Analyst",
//   description: "Portfolio of Nnaedozie Dennis -  Developer and Data Analyst",
// };

export const metadata: Metadata = {
  title: {
    default: "Nnaedozie Chukwuneta Dennis",
    template: "%s | Nnaedozie Dennis",
  },

  description:
    "Nnaedozie Dennis is a Full Stack Developer and Data Analyst skilled in React, Next.js, TypeScript, Node.js and modern web technologies.",

  keywords: [
    "Nnaedozie Dennis",
    "Nnaedozie Chukwuneta Dennis",
    "dennyblaze",
    "Dennyblaze_Nation",
    "Full Stack Developer",
    "Frontend Developer Nigeria",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Data Analyst",
    "Web Developer Lagos",
    "Web Developer Canada",
    "Web Developer Remote",
    "Software Engineer",
  ],

  authors: [{ name: "Nnaedozie Dennis" }],

  creator: "Nnaedozie Dennis",

  // metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Nnaedozie Chukwuneta Dennis",
    description:
      "Portfolio of Nnaedozie Dennis - Full Stack Developer and Data Analyst.",
    // url: "https://yourdomain.com",
    siteName: "Nnaedozie Dennis Portfolio",
    locale: "en_US",
    type: "website",
  },


  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
      </head> */}
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}





