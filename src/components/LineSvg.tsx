"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import React, { useRef } from "react";

const LineSvg = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.3", "1 0.8"],
  });
  const scale = useSpring(scrollYProgress, { stiffness: 400, damping: 50 });
  return (
    <figure ref={ref} className="h-fit w-full relative">
      <svg
        viewBox="0 0 900 3200"
        className="bg-light lg:w-[1024px] aspect-[9/32] w-full"
      >
        <g filter="url(#filter0_d_0_1)">
          <path
            d="M397.868 1C458.086 56.4239 554.579 188.858 458.811 275.202C339.102 383.133 -24.3785 403.552 458.811 654.418C942.001 905.284 994.238 1173.65 513.225 1439.1C32.2113 1704.56 -237.678 2191.7 304.278 2673.01C737.842 3058.06 885.411 3185.44 905 3201"
            fill="transparent"
            className="stroke-[1px] stroke-slate-500/50"
            strokeDasharray={10}
            strokeLinecap="round"
          />
          <motion.path
            d="M397.868 1C458.086 56.4239 554.579 188.858 458.811 275.202C339.102 383.133 -24.3785 403.552 458.811 654.418C942.001 905.284 994.238 1173.65 513.225 1439.1C32.2113 1704.56 -237.678 2191.7 304.278 2673.01C737.842 3058.06 885.411 3185.44 905 3201"
            fill="transparent"
            className="stroke-[3px] stroke-primary"
            style={{
              pathLength: scale,
            }}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_0_1"
            x="0.499457"
            y="0.632107"
            width="908.811"
            height="3208.76"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </figure>
  );
};

export default LineSvg;
