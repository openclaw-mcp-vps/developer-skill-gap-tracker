import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillGap Tracker — Close the Gap Between You and Your Dream Job",
  description:
    "Compare your current skills against real job postings, get AI-generated learning roadmaps, and track your progress toward landing your next developer role."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="909c82d9-5173-4abf-ac89-846d3f7efb39"
        />
      </head>
      <body className="min-h-screen bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
