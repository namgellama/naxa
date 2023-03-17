import { Link } from 'react-scroll';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className="flex justify-end px-4 fixed bottom-4 right-0">
			<Link to="navbar" smooth={true} duration={500} className="cursor-pointer">
				<BsFillArrowUpCircleFill size={30} />
			</Link>
		</div>
	);
};

export default Footer;
