import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  CustomBorderLR12:
    "rounded-bl-[0] rounded-br-[12px] rounded-tl-[0] rounded-tr-[12px]",
};
const variants = {
  FillPurple900: "bg-purple_900 text-white_A700",
  FillGray100: "bg-gray_100 text-purple_900",
  OutlinePurple900: "border-2 border-purple_900 border-solid text-purple_900",
  FillLightblue300: "bg-light_blue_300 text-bluegray_900",
  FillBluegray300: "bg-bluegray_300 text-white_A700",
};
const sizes = { sm: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8", "CustomBorderLR12"]),
  variant: PropTypes.oneOf([
    "FillPurple900",
    "FillGray100",
    "OutlinePurple900",
    "FillLightblue300",
    "FillBluegray300",
  ]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillPurple900",
  size: "sm",
};

export { Button };
