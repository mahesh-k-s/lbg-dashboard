
import React from 'react';

const BackArrow = ({ size, fill }) => (
  <svg
    height={size ? `${size}px` : `24px`}
    width={size ? `${size}px` : `24px`}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill ? `${fill}` : `#666666`}
      d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
    />
  </svg>
);

export default BackArrow;