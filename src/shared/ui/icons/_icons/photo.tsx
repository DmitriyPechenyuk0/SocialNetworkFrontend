import Svg, { Path } from "react-native-svg"

export function Photo() {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
    >
      <Path
        d="M.833 4.167A3.333 3.333 0 014.167.833h10A3.334 3.334 0 0117.5 4.167v10a3.333 3.333 0 01-3.333 3.333h-10a3.333 3.333 0 01-3.334-3.333v-10z"
        stroke="#543C52"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
      <Path
        d="M6.25 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166zM11.272 9.684L4.167 17.5h10.11a3.222 3.222 0 003.223-3.223v-.11c0-.389-.145-.538-.408-.825l-3.358-3.663a1.668 1.668 0 00-2.462.005z"
        stroke="#543C52"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={1}
      />
    </Svg>
  )
}