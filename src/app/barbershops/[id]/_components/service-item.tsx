import { Button } from '@/app/_components/ui/button';
import { Card, CardContent } from '@/app/_components/ui/card';
import { Service } from '@prisma/client';
import Image from 'next/image';

interface ServiceItemProps {
	service: Service;
}

export default function ServiceItem({ service }: ServiceItemProps) {
	return (
		<Card>
			<CardContent className="p-3">
				<div className="flex gap-4 items-center w-full">
					<div className="relative h-[110px] w-[110px] min-h-[110px] min-w-[110px]">
						<Image
							src={service.imageUrl}
							fill
							style={{ objectFit: 'contain' }}
							alt={service.name}
							className="rounded-lg"
						/>
					</div>

					<div className="flex flex-col w-full">
						<h2 className="font-bold">{service.name}</h2>
						<div className="text-sm text-gray-400">{service.description}</div>

						<div className="flex items-center justify-between mt-3">
							<p className="text-primary font-bold text-sm">
								{Intl.NumberFormat('pt-BR', {
									style: 'currency',
									currency: 'BRL'
								}).format(service.price)}
							</p>
							<Button className="text-primary" variant="secondary">
								Reservar
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
