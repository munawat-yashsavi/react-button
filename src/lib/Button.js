import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

import classNames from "classnames";

/**
 * Primary UI Button  component for user interaction
 */

export const Button = ({
                         disabled,
                         type,
                         iconLeft,
                         iconRight,
                         size,
                         label,
                         ...props
                       }) => {
  const isDisabled = disabled ? true : false;
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={classNames("xor-button", {
        [`xor-button__${type}`]: true,

        [`xor-button__${size}`]: true,
      })}
      {...props}
    >
      {iconLeft && (
        <span className="xor-button__IconLeft">
          {iconLeft}
        </span>
      )}
      <span>{label}</span>
      {iconRight && (
        <span className="xor-button__IconRight"> {iconRight}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the action on the page?
   */
  type: PropTypes.oneOf(["primary", "secondary", "text"]),

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "regular", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

  /**
   * Icon left and Icon right type component
   **/
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,

  /**
   * Icon left and Icon right type component
   **/
  onClick: PropTypes.func,

  /**Disabled button  */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "primary",
  label: "Button",
  size: "regular",
  onClick: undefined,
};
