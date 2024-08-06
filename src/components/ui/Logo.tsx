"use client";

import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      <svg
        width="35"
        height="28"
        viewBox="0 0 35 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46.6873 21.726C46.6873 33.4753 38.1367 43 27.4658 43C16.7948 43 8.24422 33.4753 8.24422 21.726C8.24422 9.97662 16.7948 0.452026 27.4658 0.452026C38.1367 0.452026 46.6873 9.97662 46.6873 21.726Z"
          fill={theme === "light" ? "#F38C4C" : "#C0FF72"} // Change the fill color based on theme
        />
        <g filter="url(#filter0_d_2_25)">
          <ellipse
            cx="27.4658"
            cy="21.726"
            rx="9.12317"
            ry="15.7536"
            fill={theme === "light" ? "#FFFFFF" : "#000000"}
          />
        </g>
        <path
          d="M9.4372 25.5178C-0.714 25.8029 3.01 21.8599 6.34 19.7281C5.06 20.4012 2.62 21.726 1.28 23.2962C0.15 25.0465 0.0191 25.7871 2.35 27.0989C7.91 28.5473 14.9546 26.8643 19.4941 26.3257C33.4117 23.7674 45.2628 18.9202 49.8361 16.0253C53.3647 13.7578 53.4769 12.0532 53.2165 11.1107C52.2147 8.28315 44.9111 9.14791 45.8133 9.36031C55.4455 9.76425 48.1489 14.5441 46.9985 15.2847C45.2628 16.3619 28.5466 24.3733 9.4372 25.5178Z"
          fill={theme === "light" ? "#F38C4C" : "#C0FF72"} // Change the fill color based on theme
          stroke={theme === "light" ? "#F38C4C" : "#C0FF72"} // Change the stroke color based on theme
        />
        <circle
          cx="36.5563"
          cy="20.3123"
          r="4.60127"
          fill={theme === "light" ? "#FFFFFF" : "#000000"}
        />
        <circle
          cx="36.6235"
          cy="20.2449"
          r="3.07184"
          fill={theme === "light" ? "#F38C4C" : "#C0FF72"} // Change the fill color based on theme
        />
        <path
          d="M32.1237 21.1874L34.2979 20.5815L35.4351 22.3319L32.9194 23.0724L32.2574 22.1973L32.1237 21.1874Z"
          fill={theme === "light" ? "#F38C4C" : "#C0FF72"} // Change the fill color based on theme
          stroke={theme === "light" ? "#F38C4C" : "#C0FF72"} // Change the stroke color based on theme
          strokeWidth="0.5"
        />
        <defs>
          <filter
            id="filter0_d_2_25"
            x="16.3426"
            y="5.97251"
            width="22.2441"
            height="35.5071"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_25"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_25"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export { Logo };
