import { db } from '@/app/_lib/prisma';
import { Service } from '@prisma/client';
import BarbershopInfo from './_components/barbershop-info';
import ServiceItem from './_components/service-item';

interface BarberShopDetailsPageParams {
	params: { id?: string };
}

export default async function BarbershopDetailsPage({ params }: BarberShopDetailsPageParams) {
	if (!params.id) return null;

	const barbershop = await db.barberShop.findUnique({ where: { id: params.id }, include: { service: true } });

	if (!barbershop) return null;

	return (
		<>
			<BarbershopInfo barbershop={barbershop} />
			<div className="px-5 flex flex-col gap-4 py-6">
				{barbershop.service.map((service: Service) => (
					<ServiceItem key={service.id} service={service} />
				))}
			</div>
		</>
	);
}
