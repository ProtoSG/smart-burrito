import Svg, { Path, SvgProps } from "react-native-svg";

export function HistoryIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-history"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M12 8v4l2 2" />
      <Path d="M3.05 11a9 9 0 11.5 4m-.5 5v-5h5" />
    </Svg>
  )
}
