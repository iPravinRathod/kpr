import PropTypes from "prop-types";

const Footer = (props) => {
	let currentYear = new Date().getFullYear();

	return (
		<p>
			Copyright &copy; {currentYear} - {props.company} All Rights Reserved
		</p>
	);
};

// Define PropTypes
Footer.propTypes = {
	company: PropTypes.string,
};

export default Footer;
