import PropTypes from "prop-types";

export default function Clock({ color, time }) {
    return (
        <h1 style={{ color: color }}>
            {time}
        </h1>
    );
}

Clock.propTypes = {
    color: PropTypes.string,
    time: PropTypes.instanceOf(Date)
};
