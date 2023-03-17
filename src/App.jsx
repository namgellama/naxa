import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServicesFetch } from './servicesState';
import Navbar from './layouts/Navbar';
import SectionFirst from './components/SectionFirst';
import SectionSecond from './components/SectionSecond';
import SectionThird from './components/SectionThird';
import SectionFourth from './components/SectionFourth';
import SectionFifth from './components/SectionFifth';
import SectionSixth from './components/SectionSixth';
import Footer from './layouts/Footer';

function App() {
	const services = useSelector((state) => state.services.services);
	const dispatch = useDispatch();
	// const [services, setServices] = useState([]);

	useEffect(() => {
		dispatch(getServicesFetch());
	}, [dispatch]);

	// useEffect(() => {
	// 	axios
	// 		.get('https://admin.naxa.com.np/api/services')
	// 		.then((res) => setServices(res.data));
	// }, []);

	console.log(services);

	return (
		<>
			<Navbar />

			<main>
				<SectionFirst services={services} />
				<SectionSecond services={services} />
				<SectionThird services={services} />
				<SectionFourth services={services} />
				<SectionFifth services={services} />
				<SectionSixth services={services} />
			</main>

			<Footer />
		</>
	);
}

export default App;
