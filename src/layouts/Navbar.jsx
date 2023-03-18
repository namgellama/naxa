import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<>
			<header id="header" className="bg-gray-800 py-8">
				<div className="lg:w-[1300px] mx-auto px-4 py-10">
					<img src={Logo} alt="logo" className="w-[130px] mb-12" />
					<h2 className="text-[#ffab00] mb-6 font-semibold tracking-wider">
						SERVICES
					</h2>
					<h1 className="md:w-[85%] mb-10 text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-justify">
						At <span className="text-[#124af4]">NAXA</span>, we work on{' '}
						<span className="text-[#124af4]">ideas</span>; ideas that can
						provide <span className="text-[#124af4]">simple solutions</span> to{' '}
						<span className="text-[#124af4]">complex problems.</span>
					</h1>
					<p className="md:w-[68%] text-xl font-medium tracking-wide text-justify">
						We work as a team to generate, explore, build and validate ideas. We
						also contextualize innovations around the world to find the best
						fitting solutions to local problems.
					</p>
				</div>
			</header>
			<nav
				name="navbar"
				className="lg:w-[1400px] mx-auto bg-white text-black p-3 mt-[-2.5rem] font-medium"
				style={{ boxShadow: '-1px 3px 20px -2px rgba(0,0,0,0.75)' }}
			>
				<ul className="flex flex-col lg:flex-row items-center px-3 justify-between">
					<li className="hover:opacity-70 cursor-pointer mx-4 my-2 lg:my-0">
						<Link to="section-1" smooth={true} duration={500}>
							Software & Apps Development
						</Link>
					</li>
					<li className="hover:opacity-70 cursor-pointer mx-4 my-2 lg:my-0">
						<Link to="section-2" smooth={true} duration={500}>
							GIS Mapping & Analysis
						</Link>
					</li>
					<li className="hover:opacity-70 cursor-pointer mx-4 my-2 lg:my-0">
						<Link to="section-3" smooth={true} duration={500}>
							Data Collection & Visualization
						</Link>
					</li>
					<li className="hover:opacity-70 cursor-pointer mx-4 my-2 lg:my-0">
						<Link to="section-4" smooth={true} duration={500}>
							ICT & Digital Development Research
						</Link>
					</li>
					<li className="hover:opacity-70 cursor-pointer mx-4 my-2 lg:my-0">
						<Link to="section-5" smooth={true} duration={500}>
							Frontier Technologies{' '}
						</Link>
					</li>
					<li className="hover:opacity-70 cursor-pointer mx-4 my-2 lg:my-0">
						<Link to="section-6" smooth={true} duration={500}>
							Training & Capacity building
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
