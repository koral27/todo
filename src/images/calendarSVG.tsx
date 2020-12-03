import React, { FC } from 'react';
import { Svg } from '../types';

const CalendarSVG: FC<Svg> = ({ className }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className={`bi bi-calendar4-event ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
      ></path>
      <rect width="2" height="2" x="11" y="7" rx=".5"></rect>
    </svg>
  );
};

export default CalendarSVG;
