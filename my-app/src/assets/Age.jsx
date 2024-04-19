import PropTypes from "prop-types";

export default function Age({ years }) {
    return (
        <strong>
            You are {years} !
        </strong>
    );
}

Age.propTypes = {
    years: PropTypes.number
};