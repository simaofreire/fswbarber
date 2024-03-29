import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './_components/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-intes' });

export const metadata: Metadata = {
	title: 'FSW barber'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${inter.variable} dark`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
