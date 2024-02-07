'use client';
import { Button } from '@/app/_components/ui/button';
import { BarberShop } from '@prisma/client';
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BarbershopInfoProps {
	barbershop: BarberShop;
}

export default function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
	const router = useRouter();
	function handleBackClick() {
		router.back();
	}

	return (
		<div>
			<div className="h-[250px] w-full relative">
				<Button className="z-50 absolute top-4 left-4" size="icon" variant="outline" onClick={handleBackClick}>
					<ChevronLeftIcon />
				</Button>
				<Button className="z-50 absolute top-4 right-4" size="icon" variant="outline">
					<MenuIcon />
				</Button>
				<Image
					src={barbershop.imageUrl}
					alt={barbershop.name}
					fill
					style={{ objectFit: 'cover' }}
					className="opacity-75"
				/>
			</div>
			<div className="px-5 pt-3 pb-6 border-solid border-secondary border-b">
				<h1 className="text-xl font-bold">{barbershop.name}</h1>
				<div className="flex items-center gap-2 mt-2">
					<MapPinIcon className="text-primary" size={18} />
					<p className="text-sm">{barbershop.address}</p>
				</div>
				<div className="flex items-center gap-1 mt-2">
					<StarIcon className="text-primary" size={18} />
					<p className="text-sm">5,00 (899 avaliações)</p>
				</div>
			</div>
		</div>
	);
}
