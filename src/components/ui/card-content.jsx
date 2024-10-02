import React from 'react';
import PropTypes from 'prop-types';

/**
 * CardContent component represents the content area within a Card.
 * It provides consistent padding and layout.
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Elements to be rendered inside the content area
 * @param {string} [props.className] - Additional CSS classes
 */
const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`card-content ${className}`} {...props}>
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CardContent;