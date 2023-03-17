const SectionFirst = ({ services }) => {
	const service = services.find((item) => item.service_order === 1);

	return (
		<section
			name="section-1"
			className="lg:w-[1200px] mx-auto grid grid-cols-1 px-4 lg:grid-cols-2 mt-24"
			id="section-first"
		>
			<div>
				<img src={service.icon} alt={service.title} className="w-[70%]" />
			</div>
			<div className="mt-20 lg:mt-0">
				<img
					src={service.photo}
					alt={service.title}
					className="w-[65px] mb-8"
				/>
				<h1 className="text-3xl font-bold">{service.title}</h1>
				<p className="my-7">
					{service.description1.replaceAll('<p>', '').replaceAll('</p>', '')}
				</p>
				<p className="bg-[#e9ebff] px-6 py-7">
					{service.description2.replaceAll('<p>', '').replaceAll('</p>', '')}
				</p>
			</div>
		</section>
	);
};

export default SectionFirst;
