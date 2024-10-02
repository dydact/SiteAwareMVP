import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component serves as a container with consistent styling.
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Elements to be rendered inside the card
 * @param {string} [props.className] - Additional CSS classes
 */
const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;