import styled from 'styled-components';
const ProductsList = ({ children }) => {
  return (
    <SmartCardWrapper>
      <section className="fluid">
        <h2>Products</h2>
        <div className="container">
          <ul>
            <li>
              <a href="#">Air Force 1</a>
            </li>
            <li>
              <a href="#">Air Jordan 1</a>
            </li>
            <li>
              <a href="#">Huarache</a>
            </li>
            <li>
              <a href="#">Dunk</a>
            </li>
            <li>
              <a href="#">Air Max</a>
            </li>
          </ul>
          <div className="holding">
            <div className="scope">
              <div className="holder">
                <div className="box">
                  <img
                    src="https://assets.codepen.io/605876/air-force-1.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/air-jordan-1.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/huarache-1.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/dunks-1.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/air-max-1.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="holder">
                <div className="box">
                  <img
                    src="https://assets.codepen.io/605876/air-force-2.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/air-jordan-2.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/huarache-2.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/dunks-2.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/air-max-2.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                </div>
              </div>
              <div className="holder">
                <div className="box">
                  <img
                    src="https://assets.codepen.io/605876/air-force-3.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/air-jordan-3.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/huarache-3.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/dunks-3.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                  <img
                    src="https://assets.codepen.io/605876/air-max-3.jpeg?width=204&height=153&format=auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        className="bear-link"
        href="https://twitter.com/intent/follow?screen_name=jh3yy"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          className="w-9"
          viewBox="0 0 969 955"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="161.191"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            stroke-width="20"
          ></circle>
          <circle
            cx="806.809"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            stroke-width="20"
          ></circle>
          <circle
            cx="695.019"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
          <circle
            cx="272.981"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
          <path
            d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
            fill="currentColor"
          ></path>
          <rect
            x="310.42"
            y="448.31"
            width="343.468"
            height="51.4986"
            fill="#FF1E1E"
          ></rect>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </SmartCardWrapper>
  );
};
const SmartCardWrapper = styled.div`
  /* @import 'normalize.css' layer(normalize); */
  @import url('https://unpkg.com/normalize.css') layer(normalize);
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

  @layer normalize, base, demo, positioning, anchoring, boxes, tweaks, images, debug;

  @layer debug {
    [data-debug='true'] {
      img {
        --opacity: 0.2;
      }
      .holder {
        outline: 0.1em dashed hsl(10 100% 50% / 0.2);
        outline-offset: 0.1em;
      }
      .box {
        outline: dashed red 0.1em;
      }
      .holding {
        outline: hsl(10 100% 50% / 0.5) dashed 0.1em;
        outline-offset: 0.1em;
      }
      .scope {
        outline: red dashed 0.1em;
        outline-offset: 0em;
      }
    }
  }

  @layer images {
    .box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.2em;
      grid-area: 1 / 1;
      opacity: 0;
      transition: opacity 0.25s 0s;
      mix-blend-mode: plus-lighter;
      box-shadow: 0px 0.2px 0.2px var(--shadow-color),
        0.1px 1.4px 1.6px -0.4px var(--shadow-color),
        0.1px 2.7px 3px -0.7px var(--shadow-color),
        0.2px 4.4px 5px -1.1px var(--shadow-color),
        0.3px 7px 7.9px -1.4px var(--shadow-color),
        0.4px 10.9px 12.3px -1.8px var(--shadow-color),
        0.6px 16.6px 18.7px -2.1px var(--shadow-color),
        0.9px 24.4px 27.5px -2.5px var(--shadow-color);
    }
    .box {
      display: grid;
      isolation: isolate;
    }

    .container:has(li:nth-of-type(1):hover) .box img:nth-of-type(1),
    .container:has(li:nth-of-type(2):hover) .box img:nth-of-type(2),
    .container:has(li:nth-of-type(3):hover) .box img:nth-of-type(3),
    .container:has(li:nth-of-type(4):hover) .box img:nth-of-type(4),
    .container:has(li:nth-of-type(5):hover) .box img:nth-of-type(5) {
      opacity: var(--opacity, 1);
      z-index: 2;
      transition-delay: 0s;
    }
  }

  @layer tweaks {
    :root {
      --elastic-out: linear(
        0 0%,
        0.6832 7.89%,
        0.9171 11.07%,
        1.0251 12.99%,
        1.1058 14.9%,
        1.1619 16.86%,
        1.1945 18.91%,
        1.2024 20.02%,
        1.2043 21.18%,
        1.1907 23.72%,
        1.1598 26.27%,
        1.0604 32.59%,
        1.0172 35.84%,
        0.9839 39.49%,
        0.967 43.26%,
        0.9639 45.77%,
        0.9661 48.59%,
        0.9963 60.54%,
        1.0054 67.42%,
        1 100%
      );
    }
    .box {
      transform: translate(calc(var(--x) * 1%), calc(var(--y) * 1%))
        rotate(calc(var(--r) * 1deg))
        translate(
          calc(var(--px, 0) * var(--prx, 0%)),
          calc(var(--py, 0) * var(--pry, 0%))
        );
      transition: translate 0.2s, scale 0.2s, transform 0.8s var(--elastic-out);
    }
    .holder:nth-of-type(1) .box {
      --prx: -80%;
      --pry: 15%;
    }
    .holder:nth-of-type(2) .box {
      --prx: 25%;
      --pry: -35%;
    }
    .holder:nth-of-type(3) .box {
      --prx: 30%;
      --pry: 35%;
    }
  }

  @layer boxes {
    .holder {
      width: 2lh;
      aspect-ratio: 1;
      position: absolute;
      left: 50%;
      top: 50%;
    }

    .box {
      width: 100%;
      height: 100%;
      scale: 0;
    }

    [data-use-anchor='false'] {
      .holder:nth-of-type(1) {
        --offset-x: calc(-150% - (var(--start-width) * 0.5px));
        translate: var(--offset-x) -50%;
      }

      .holder:nth-of-type(2) {
        --offset-x: calc(50% + (var(--start-width) * 0.5px));
        translate: var(--offset-x) -50%;
      }

      .holder:nth-of-type(3) {
        --offset-x: -50%;
        bottom: 100%;
        top: unset;
        translate: var(--offset-x) -50%;
      }

      .holder:nth-of-type(1) .box {
        --offset-x: calc((var(--active-offset) * -0.5px));
        translate: var(--offset-x) 0%;
      }

      .holder:nth-of-type(2) .box {
        --offset-x: calc(0% + (var(--active-offset) * 0.5px));
        translate: var(--offset-x) 0%;
      }

      .holder:nth-of-type(3) .box {
        --offset-x: 0%;
        translate: var(--offset-x) 0%;
      }
    }

    ul:has(li:is(:hover, :focus-within)) + .holding .box {
      scale: 1;
    }

    @supports (anchor-name: --active) {
      [data-use-anchor='true'] {
        .holder:nth-of-type(1) {
          left: unset;
          right: 100%;
          top: 50%;
          translate: -50% -50%;
        }
        .holder:nth-of-type(2) {
          left: 100%;
          top: 50%;
          translate: 50% -50%;
        }
        .holder:nth-of-type(3) {
          left: 50%;
          bottom: 100%;
          top: unset;
          translate: -50% -50%;
        }
      }
    }
  }

  @layer anchoring {
    @supports (anchor-name: --active) {
      [data-use-anchor='true'] {
        /* We do this in JavaScript land so we get persistence */
        /* li:is(:hover, :focus-within) {
        anchor-name: --active;
      } */
        .holding {
          position-anchor: --active;
          top: anchor(top);
          left: 50%;
          translate: -50% 0;
          width: anchor-size(width);
          transition: top 0.2s, width 0.2s;
        }
      }
    }
  }

  @layer positioning {
    [data-use-anchor='false'] {
      .holding {
        left: 50%;
        translate: -50% 0;
        top: calc(var(--start-index) * 1lh);
        transition: translate var(--translate-speed);
      }
      .scope {
        translate: 0% calc(var(--active-index, 0) * 1lh);
        transition: width 0.2s, translate var(--translate-speed);
      }
    }
  }

  @layer demo {
    :root {
      --elastic: linear(
        0 0%,
        0.2178 2.1%,
        1.1144 8.49%,
        1.2959 10.7%,
        1.3463 11.81%,
        1.3705 12.94%,
        1.3726 13.7%,
        1.3643 14.48%,
        1.3151 16.2%,
        1.0317 21.81%,
        0.941 24.01%,
        0.8912 25.91%,
        0.8694 27.84%,
        0.8698 29.21%,
        0.8824 30.71%,
        1.0122 38.33%,
        1.0357 40.52%,
        1.046 42.71%,
        1.0416 45.7%,
        0.9961 53.26%,
        0.9839 57.54%,
        0.9853 60.71%,
        1.0012 68.14%,
        1.0056 72.24%,
        0.9981 86.66%,
        1 100%
      );
    }
    section {
      --font-level: 4.5;
      font-family: 'Oswald', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      line-height: 1;
    }
    h2 {
      font-size: 0.5em;
      margin-bottom: 1em;
    }
    .container {
      position: relative;
    }
    .holding {
      pointer-events: none;
      width: 100%;
      height: 1lh;
      position: absolute;
      top: 0lh;
    }

    .scope {
      width: 100%;
      height: 100%;
      position: relative;
    }

    ul {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    li {
      display: inline-block;
    }

    ul:has(li:is(:hover, :focus-within)) + .holding {
      opacity: 1;
    }

    li:is(:hover, :focus-within) a {
      opacity: 1;
      scale: 1 1.15;
    }
    li a {
      display: inline-block;
      color: inherit;
      outline-width: 0;
      outline-color: #0000;
      text-decoration: none;
      opacity: 0.3;
      transition-property: opacity, scale;
      transition-duration: 0.2s, 0.875s;
      transition-timing-function: ease, var(--elastic);
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }

  @layer base {
    :root {
      --font-size-min: 16;
      --font-size-max: 20;
      --font-ratio-min: 1.2;
      --font-ratio-max: 1.33;
      --font-width-min: 375;
      --font-width-max: 1500;
    }

    html {
      --shadow-color: light-dark(hsl(0 0% 58% / 0.34), hsl(0 0% 15% / 0.34));
      color-scheme: light dark;
    }

    [data-theme='light'] {
      color-scheme: light only;
    }

    [data-theme='dark'] {
      color-scheme: dark only;
    }

    :where(.fluid) {
      --fluid-min: calc(
        var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0))
      );
      --fluid-max: calc(
        var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0))
      );
      --fluid-preferred: calc(
        (var(--fluid-max) - var(--fluid-min)) /
          (var(--font-width-max) - var(--font-width-min))
      );
      --fluid-type: clamp(
        (var(--fluid-min) / 16) * 1rem,
        ((var(--fluid-min) / 16) * 1rem) -
          (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +
          (var(--fluid-preferred) * var(--variable-unit, 100vi)),
        (var(--fluid-max) / 16) * 1rem
      );
      font-size: var(--fluid-type);
    }

    *,
    *:after,
    *:before {
      box-sizing: border-box;
    }

    body {
      display: grid;
      background-color: light-dark(#fff, #000);
      place-items: center;
      min-height: 100vh;
      font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',
        Helvetica, Arial, sans-serif, system-ui;
    }

    body::before {
      --size: 45px;
      --line: color-mix(in lch, canvasText, transparent 70%);
      content: '';
      height: 100vh;
      width: 100vw;
      position: fixed;
      background: linear-gradient(
            90deg,
            var(--line) 1px,
            transparent 1px var(--size)
          )
          50% 50% / var(--size) var(--size),
        linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
          var(--size) var(--size);
      mask: linear-gradient(-20deg, transparent 50%, white);
      top: 0;
      transform-style: flat;
      pointer-events: none;
      z-index: -1;
    }

    .bear-link {
      color: canvasText;
      position: fixed;
      top: 1rem;
      left: 1rem;
      width: 48px;
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      opacity: 0.8;
    }

    :where(.x-link, .bear-link):is(:hover, :focus-visible) {
      opacity: 1;
    }

    .bear-link svg {
      width: 75%;
    }

    /* Utilities */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }
`;
export { ProductsList };
