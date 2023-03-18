const SectionFourth = ({ services }) => {
	const service = services.find((item) => item.service_order === 4);

	return (
		<section
			name="section-4"
			className="lg:w-[1200px] mx-auto grid grid-cols-1 px-4 lg:grid-cols-2 mt-24 gap-16"
			id="section-second"
		>
			<div>
				<img
					src={service.photo}
					alt={service.title}
					className="w-[65px] mb-8"
				/>
				<h1 className="text-3xl font-bold">{service.title}</h1>
				<p className="my-7 text-justify">
					{service.description1.replaceAll('<p>', '').replaceAll('</p>', '')}
				</p>
				<p className="bg-[#e9ebff] px-6 py-7 text-justify">
					{service.description2.replaceAll('<p>', '').replaceAll('</p>', '')}
				</p>
			</div>
			<div className="flex justify-center">
				<img src={service.icon} alt={service.title} className="w-[80%]" />
			</div>
		</section>
	);
};

export default SectionFourth;
