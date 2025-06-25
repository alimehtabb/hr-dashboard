import "./styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "HR Dashboard",
  description: "AI-Powered Performance System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen bg-background text-foreground">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <TopBar />
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
