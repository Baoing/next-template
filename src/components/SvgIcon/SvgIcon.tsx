// SVGIcon.tsx
import React from 'react';

import SVGIconMap from './IconMap';

interface SVGIconProps {
  icon: string;
  size?: string | number;
  color?: string;
  className?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  icon,
  size = '20',
  initSize = '20',
  color = '#fff',
  fillColor = 'none',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      fill={fillColor}
      className={className}
    >
      {SVGIconMap[icon](size / initSize, color)}
    </svg>
  );
};

export default SVGIcon;
