import React from "react";

export const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M5.92428 12.541L13.9243 4.8743C15.0847 3.76225 16.9153 3.76225 18.0757 4.8743L26.0757 12.541C26.6662 13.1068 27 13.8892 27 14.7069V25C27 26.6569 25.6569 28 24 28H22H19H16H13H10H8C6.34315 28 5 26.6569 5 25V14.7069C5 13.8892 5.33385 13.1068 5.92428 12.541Z"
      stroke="url(#paint0_linear_202_269)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_202_269"
        x1="16"
        y1="1.5"
        x2="16"
        y2="29"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111827" />
        <stop offset="1" stopColor="#6B7280" />
      </linearGradient>
    </defs>
  </svg>
);

export const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} fill="none">
    <path
      stroke="#4B5563"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.81 25.577 4.683-8.362C26.556 11.745 22.603 5 16.333 5c-6.269 0-10.222 6.745-7.16 12.215l4.684 8.362c1.084 1.936 3.87 1.936 4.953 0Z"
    />
    <circle
      cx={16.333}
      cy={13}
      r={2}
      stroke="#4B5563"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} fill="none">
    <path
      stroke="#4B5563"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.916 7.369a1 1 0 0 0 1.501 0 7 7 0 0 1 10.83 8.858l-6.06 8a7 7 0 0 1-11.2-.054l-5.94-8a7 7 0 0 1 10.869-8.804Z"
    />
  </svg>
);

export const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
    <path
      stroke="#4B5563"
      strokeWidth={2}
      d="M3 24.98c0-4.337 4.152-7.468 8.322-6.277l3.465.99a4.414 4.414 0 0 0 2.426 0l3.465-.99c4.17-1.191 8.322 1.94 8.322 6.278C29 27.2 27.2 29 24.98 29H7.02A4.02 4.02 0 0 1 3 24.98Z"
    />
    <circle cx={16} cy={9} r={6} stroke="#4B5563" strokeWidth={2} />
    <path
      fill="#4B5563"
      d="M15 9a1 1 0 1 0 2 0 1 1 0 1 1 2 0 3 3 0 1 1-6 0 1 1 0 1 1 2 0Z"
    />
  </svg>
);

export const Searchsvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none">
    <path
      fill="#000"
      d="M31.51 28.51h-1.58l-.56-.54c1.96-2.28 3.14-5.24 3.14-8.46 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.22 0 6.18-1.18 8.46-3.14l.54.56v1.58l10 9.98 2.98-2.98-9.98-10Zm-12 0c-4.98 0-9-4.02-9-9s4.02-9 9-9 9 4.02 9 9-4.02 9-9 9Z"
      opacity={0.2}
    />
  </svg>
);
