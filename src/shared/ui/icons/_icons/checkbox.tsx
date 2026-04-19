import Svg, { Path } from "react-native-svg";

export function CheckboxChecked({ color = "#aa9ea9", size = 20, strokeWidth = 2, ...props }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M13.75 6.875l-5.25 6.25-2.25-2.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.625 2.5H4.375C3.339 2.5 2.5 3.34 2.5 4.375v11.25c0 1.035.84 1.875 1.875 1.875h11.25c1.035 0 1.875-.84 1.875-1.875V4.375c0-1.036-.84-1.875-1.875-1.875z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
