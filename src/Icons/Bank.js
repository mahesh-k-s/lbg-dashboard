
import React from 'react';

const Bank = ({ size, fill }) => (
  <svg
    height={size ? `${size}px` : `24px`}
    width={size ? `${size}px` : `24px`}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill ? `${fill}` : `#666666`}
      d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"
    />
  </svg>
);

export default Bank;