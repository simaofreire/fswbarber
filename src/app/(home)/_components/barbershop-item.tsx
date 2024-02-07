'use client';
import { Badge } from '@/app/_components/ui/badge';
import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { BarberShop } from '@prisma/client';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BarbershopItemProps {
	barbershop: BarberShop;
}

export default function BarbershopItem({ barbershop }: BarbershopItemProps) {
	const router = useRouter();
	return (
		<Card className="min-w-[167px] max-w-[167px] rounded-2xl">
			<CardContent className="px-1 py-0">
				<div className="relative w-full h-[159px]">
					<div className="absolute top-2 left-2 z-50">
						<Badge variant="secondary" className="opacity-90 flex items-center justify-center gap-1 top-3 left-3">
							<StarIcon size={12} className="fill-primary text-primary" />
							<span className="text-xs">5,00</span>
						</Badge>
					</div>
					<Image
						src={barbershop.imageUrl}
						height={0}
						width={0}
						sizes="100vw"
						className="rounded-2xl"
						style={{ objectFit: 'cover' }}
						alt={barbershop.name}
						fill
					/>
				</div>

				<div className="px-2 pb-0">
					<h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
					<p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
					<Link href={`barbershops/${barbershop.id}`} prefetch={true}>
						<Button className="mt-3 mb-3 w-full" variant="secondary">
							Reservar
						</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
