import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => (
  distanceInWordsToNow(date, {
    addSuffix: true,
    locale: ruLocale
  })
);

Time.propTypes = {
  date: PropTypes.string
};

export default Time;
