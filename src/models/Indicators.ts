import PropTypes from 'prop-types';
import LinkType from './Link';

type IndicatorsProps = {
  links: LinkType[];
  role?: string;
  label?: string;
  gap?: string;
  visible?: boolean;
  underlineGap?: string;
  className?: string;
};

export const IndicatorShape = {
  to: PropTypes.string.isRequired,
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export const IndicatorsShape = {
  label: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(IndicatorShape)).isRequired,
  gap: PropTypes.string,
  visible: PropTypes.bool,
  role: PropTypes.string,
  underlineGap: PropTypes.string,
  className: PropTypes.string,
};

export default IndicatorsProps;
