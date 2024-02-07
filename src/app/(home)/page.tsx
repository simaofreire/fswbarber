import { BarberShop } from '@prisma/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import BookingItem from '../_components/booking-item';
import Header from '../_components/header';
import { db } from '../_lib/prisma';
import BarbershopItem from './_components/barbershop-item';
import Search from './_components/search';

export default async function Home() {
	const date = format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR });
	const barbershops = (await db.barberShop.findMany()) as BarberShop[];

	return (
		<div>
			<Header />

			<div className="px-5 pt-5">
				<h2 className="text-xl font-bold">Olá Simão</h2>
				<p className="capitalize text-sm">{date}</p>
			</div>

			<div className="px-5 mt-6">
				<Search />
			</div>

			<div className="px-5 mt-6">
				<h2 className="text-xs text-gray-400 font-bold uppercase mb-3">Agendamentos</h2>
				<BookingItem />
			</div>

			<div className="mt-6 mb-[4.5rem]">
				<h2 className="px-5 text-xs text-gray-400 font-bold uppercase mb-3">Recomendados</h2>
				<div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
					{barbershops.map((barbershop) => (
						<BarbershopItem key={barbershop.id} barbershop={barbershop} />
					))}
				</div>
			</div>
		</div>
	);
}
