import React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';

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

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

export default Card;