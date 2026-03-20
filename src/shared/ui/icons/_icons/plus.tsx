import Svg, { Path, type SvgProps } from "react-native-svg";

export function Plus(props: SvgProps) {
	return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            {...props}
            >
            <Path
                d="M14.063 8.654h-5.41v5.409a1.082 1.082 0 01-2.163 0v-5.41H1.082a1.082 1.082 0 010-2.163H6.49V1.082a1.082 1.082 0 012.164 0V6.49h5.409a1.082 1.082 0 010 2.164z"
                fill="#543C52"
            />
        </Svg>
	);
}