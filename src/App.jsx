import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './layouts/Navbar';
import SectionFirst from './components/SectionFirst';
import SectionSecond from './components/SectionSecond';
import SectionThird from './components/SectionThird';
import SectionFourth from './components/SectionFourth';
import SectionFifth from './components/SectionFifth';
import SectionSixth from './components/SectionSixth';
import Footer from './layouts/Footer';
import { getServices } from './redux/services';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getServices());
	}, [dispatch]);

	const services = useSelector((state) => state.services.services);

	return (
		<>
			<Navbar />

			{services && (
				<main>
					<SectionFirst services={services} />
					<SectionSecond services={services} />
					<SectionThird services={services} />
					<SectionFourth services={services} />
					<SectionFifth services={services} />
					<SectionSixth services={services} />
				</main>
			)}

			<Footer />
		</>
	);
}

export default App;
