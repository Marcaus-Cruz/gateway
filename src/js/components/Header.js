import '../../scss/components/Header.scss';
import Logo from './Logo';
import Button from './Button';
import { CLASS_NAMES } from '../classNames';

const buttonAboutMe = {
	text: 'About Me',
	className: 'about',
};
const buttonExplore = {
	text: 'See more',
	className: 'explore',
};

function Header() {
	return (
		// <div className={CLASS_NAMES.header}>
		<div className="header">
			<Logo />
			<Button attributes={buttonAboutMe} />
			<Button attributes={buttonExplore} />
		</div>
	);
}

export default Header;
