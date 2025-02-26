import { Path, Svg, SvgProps } from "react-native-svg";

export function AlertIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle"
      {...props}
    >
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34M12 15a1 1 0 00-1 1v.01a1 1 0 002 0V16a1 1 0 00-1-1m0-7a1 1 0 00-1 1v4a1 1 0 002 0V9a1 1 0 00-1-1" />
    </Svg>
  )
}
