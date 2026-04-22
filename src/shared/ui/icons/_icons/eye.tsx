import Svg, { Path, type SvgProps } from "react-native-svg";

export function Eye(props: SvgProps) {
    return (
        <Svg width="19" height="14" viewBox="0 0 19 14" fill="none" {...props}>
            <Path d="M1 6.83333C1 6.83333 3.5 1 9.33333 1C15.1667 1 17.6667 6.83333 17.6667 6.83333C17.6667 6.83333 15.1667 12.6667 9.33333 12.6667C3.5 12.6667 1 6.83333 1 6.83333Z" stroke="#543C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M9.33333 9.33333C10.714 9.33333 11.8333 8.21404 11.8333 6.83333C11.8333 5.45262 10.714 4.33333 9.33333 4.33333C7.95262 4.33333 6.83333 5.45262 6.83333 6.83333C6.83333 8.21404 7.95262 9.33333 9.33333 9.33333Z" stroke="#543C52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
}