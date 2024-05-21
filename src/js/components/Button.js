import '../../scss/components/Button.scss';
import { CLASS_NAMES } from '../classNames';

const DEFAULTS = Object.freeze({
	tagName: 'button',
	text: 'I am Button',
	href: null,
});

const TAG_NAMES = Object.freeze({
	button: 'button',
	anchor: 'anchor',
});

// TODO: Find out how to pass in params
export default function Button(attributes) {
	console.log('[Button]', { attributes });

	const { text = DEFAULTS.text, href = DEFAULTS.href, className: classes = '' } = attributes;

	if (href) {
		return (
			// <a className={CLASS_NAMES.button} href={href}>
			<a className={`btn ${classes}`} href={href}>
				{text}
			</a>
		);
	}
	// return <button className={CLASS_NAMES.button}>{text}</button>;
	return <button className={`btn ${classes}`}>{text}</button>;
}
