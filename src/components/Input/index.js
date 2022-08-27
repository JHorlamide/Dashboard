import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray301: "border-2 border-gray_301 border-solid",
  OutlineGray300: "bg-gray_50 border-2 border-gray_300 border-solid",
};
const shapes = {
  RoundedBorder12: "rounded-radius12",
  CustomBorderTL12:
    "rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[0]",
  RoundedBorder8: "rounded-radius8",
};
const sizes = {
  sm: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  md: "lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pt-[15px] xl:pt-[17px] pt-[20px] 3xl:pt-[24px] lg:px-[15px] xl:px-[17px] px-[20px] 3xl:px-[24px]",
  lg: "lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[17px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px]",
  xl: "lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px] lg:pt-[27px] xl:pt-[31px] pt-[35px] 3xl:pt-[42px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder12",
    "CustomBorderTL12",
    "RoundedBorder8",
  ]),
  variant: PropTypes.oneOf(["OutlineGray301", "OutlineGray300"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder12",
  variant: "OutlineGray300",
  size: "sm",
};

export { Input };
