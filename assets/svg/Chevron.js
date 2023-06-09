import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 448 512" {...props}>
      <Path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </Svg>
  );
}
