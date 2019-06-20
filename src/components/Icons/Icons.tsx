import styled from "@emotion/styled";
import React, { SFC } from "react";

type SvgProps = {
  size?: number;
  color?: string;
  role?: string;
  xmlns?: string;
  viewBox?: string;
};

const Svg: SFC<SvgProps> = styled.svg`
  width: ${props => (props.size ? props.size : 30)}px;
  height: ${props => (props.size ? props.size : 30)}px;
  stroke: ${props => (props.color ? props.color : "#0070ff")};
  stroke-width: 1.2857142857142858;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  color: ${props => (props.color ? props.color : "#0070ff")};
`;

const Play: SFC<{size?: number, fill?: string}> = ({size, fill})=> (
  <Svg size={size} color={fill} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title id="videoIconTitle">Video</title>
    <polygon points="18 12 9 16.9 9 7" />
    <circle cx="12" cy="12" r="10" />
  </Svg>
);

const Pause: SFC<{size?: number, fill?: string}> = ({size, fill})=> (
  <Svg size={size} color={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title id="pauseCircleIconTitle">Pause</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    />
    <path fillRule="evenodd" clipRule="evenodd" d="M8 8V16H10V8H8Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M14 8V16H16V8H14Z" />
  </Svg>
);

const Next: SFC<{size?: number, fill?: string}> = ({size, fill}) => (
  <Svg size={size} color={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title id="nextIconTitle">Next</title>
    <path d="M17 11.5L6 18V5z" />
    <path d="M18 18V5" />
  </Svg>
);

const Prev: SFC<{size?: number, fill?: string}> = ({size, fill}) => (
  <Svg  size={size} color={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title id="previousIconTitle">Previous</title>
    <path d="M7 11.5L18 18V5z" />
    <path d="M6 18V5" />
  </Svg>
);

const Volume: SFC<{size?: number, fill?: string}> = ({size, fill}) => (
  <Svg size={size} color={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title id="volumeLoudIconTitle">Volume Loud</title>
    <path d="M13 5v14l-5-4H3V9h5z" />
    <path strokeLinecap="round" d="M13 14c1.5-1 1.5-3 0-4" />
    <path d="M16 16C18.0858253 13.9141747 18.0858253 10.0858253 16 8M18 19C21.98552 15.01448 22.0076803 9.00768033 18 5" />
  </Svg>
);

const Add: SFC<{size?: number, fill?: string}> = ({size, fill}) => (
  <Svg size={size} color={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title id="addIconTitle">Add</title>
    <path d="M17 12L7 12M12 17L12 7"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </Svg>
);

const Remove: SFC<{size?: number, fill?: string}> = ({size, fill}) => (
  <Svg size={size} color={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title id="removeIconTitle">Remove</title>
    <path d="M17,12 L7,12"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </Svg>
);

export { Play, Pause, Next, Prev, Volume, Add, Remove };

