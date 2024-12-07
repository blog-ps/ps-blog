import useWindowSize from '@/hooks/useWindowSize';

const Wave = (props) => {
  const [windowWidth] = useWindowSize();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={windowWidth}
      height={800}
      fill="none"
      {...props}
    >
      <mask
        id="b"
        width={1440}
        height={1024}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill="url(#a)" d="M0 0h1440v1024H0z" />
      </mask>
      <g mask="url(#b)">
        <g
          filter="url(#c)"
          style={{
            mixBlendMode: 'overlay',
          }}
        >
          <path
            fill="url(#d)"
            fillOpacity={0.3}
            d="M1272.9 588c-143.09-63-175.29-157.661-354.404-170.632C739.386 404.397 526 163 381.077 121.095 236.155 79.189 92.884 130.482 0 202v706h1440V650s-24.01 1-167.1-62Z"
          />
        </g>
        <path
          fill="url(#e)"
          fillOpacity={0.8}
          d="M1236.27 562c-163.1-21.734-222.14-164.602-462.287-156-240.15 8.602-350.219-116-531.332-116C61.537 290 0 386 0 386v532h1440V535s-40.63 48.733-203.73 27Z"
          style={{
            mixBlendMode: 'overlay',
          }}
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={1440}
          x2={0}
          y1={546}
          y2={544}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" stopOpacity={0} />
          <stop offset={0.311} stopColor="#D9D9D9" />
          <stop offset={0.721} stopColor="#D9D9D9" />
          <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="d"
          x1={734.125}
          x2={734.125}
          y1={126}
          y2={668.864}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="e"
          x1={757.524}
          x2={757.524}
          y1={290}
          y2={725.905}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
        </linearGradient>
        <filter
          id="c"
          width={1440}
          height={802}
          x={0}
          y={106}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={1} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_23404_662" />
        </filter>
      </defs>
    </svg>
  );
};
export default Wave;
