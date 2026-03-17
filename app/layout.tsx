import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const sansFont = localFont({
  src: [
    { path: "../public/fonts/Paperlogy-1Thin.ttf", weight: "100" },
    { path: "../public/fonts/Paperlogy-2ExtraLight.ttf", weight: "200" },
    { path: "../public/fonts/Paperlogy-3Light.ttf", weight: "300" },
    { path: "../public/fonts/Paperlogy-4Regular.ttf", weight: "400" },
    { path: "../public/fonts/Paperlogy-5Medium.ttf", weight: "500" },
    { path: "../public/fonts/Paperlogy-6SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/Paperlogy-7Bold.ttf", weight: "700" },
    { path: "../public/fonts/Paperlogy-8ExtraBold.ttf", weight: "800" },
    { path: "../public/fonts/Paperlogy-9Black.ttf", weight: "900" },
  ],
  variable: "--font-dev-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dev-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "프론트엔드 개발자 이하현",
  description:
    "사용자 경험을 중심으로 생각하는 프론트엔드 개발자의 포트폴리오입니다. React, Next.js, TypeScript 기반의 프로젝트를 확인해보세요.",
  openGraph: {
    title: "프론트엔드 개발자 포트폴리오",
    description:
      "사용자 경험을 중심으로 생각하는 프론트엔드 개발자의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "프론트엔드 개발자 포트폴리오",
    description:
      "사용자 경험을 중심으로 생각하는 프론트엔드 개발자의 포트폴리오입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${sansFont.className} ${sansFont.variable} ${monoFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
