import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function Header() {
	return (
		<Card>
			<CardContent className="p-5 justify-between items-center flex flex-row">
				<Image src="/Logo.svg" width={120} height={18} alt="fsw barber" />
				<Button variant="outline" size="icon" className="h-8 w-8">
					<MenuIcon size={16} />
				</Button>
			</CardContent>
		</Card>
	);
}
