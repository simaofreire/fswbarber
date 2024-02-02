export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<div className="w-full bg-secondary py-6 px-5">
			<p className="text-xs text-gray-400 font-bold opacity-75">© {year} Copyright FSW Barber</p>
		</div>
	);
}
