import type { Metadata } from "next"
import "./globals.css"
import { Raleway } from "next/font/google"

export const metadata: Metadata = {
	title: "Ali Ibrahim Portfolio",
	description: "Created as a portfolio for Blackbox AI"
}

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["300", "400", "700"]
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${raleway.className} antialiased h-screen w-screen bg-orange-300`}>
				{children}
			</body>
		</html>
	)
}
