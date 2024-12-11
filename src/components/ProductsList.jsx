import styled from 'styled-components';
import { useRef } from 'react';
import { useEffect } from 'react';
import '@/style/productsList.module.css';
const ProductsList = ({ items }) => {
  const containerRef = useRef(null);
  const listRefs = useRef([]);
  const scopeRef = useRef(null);
  const boxRefs = useRef([]);
  const itemPosCache = useRef([]);
  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const config = {
    anchor: false,
    theme: 'system',
    behavior: 'dynamic',
    parallax: true,
    debug: false,
  };
  // const ctrl = new Pane({
  //   title: 'Config',
  //   expanded: true,
  // });
  const update = () => {
    document.documentElement.dataset.theme = config.theme;
    document.documentElement.dataset.useAnchor = config.anchor;
    document.documentElement.dataset.behavior = config.behavior;
    document.documentElement.dataset.parallax = config.parallax;
    document.documentElement.dataset.debug = config.debug;
  };
  const sync = (event) => {
    if (
      !document.startViewTransition ||
      event.target.controller.view.labelElement.innerText !== 'Theme'
    )
      return update();
    document.startViewTransition(() => update());
  };
  const populateCache = () => {
    itemPosCache.current.length = 0;

    const { left, top } = containerRef.current.getBoundingClientRect();
    for (let i = 0; i < listRefs.current.length; i++) {
      const item = listRefs.current[i];
      item.dataset.index = i;

      const { width, height, x, y } = item.getBoundingClientRect();
      itemPosCache.current.push({
        width,
        height,
        initialX: x,
        initialY: y,
        x: x - left,
        y: y - top,
      });
    }
  };

  // generate dynamic box tweaks based on the index hover
  const effectCache = [];
  const generateEffectCache = () => {
    for (let i = 0; i < listRefs.current.length; i++) {
      const settings = [];
      for (let b = 0; b < boxRefs.current.length; b++) {
        // generate translate x/y and rotate for each box
        settings.push([random(-25, 25), random(-25, 25), random(-25, 25)]);
      }
      effectCache.push(settings);
    }
  };
  let listBounds;
  const setParallax = ({ x, y }) => {
    const { x: initialX, y: initialY, width, height } = listBounds;
    for (let b = 0; b < boxRefs.current.length; b++) {
      boxRefs.current[b].style.setProperty(
        '--px',
        (x - initialX) / width - 0.5
      );
      boxRefs.current[b].style.setProperty(
        '--py',
        (y - initialY) / height - 0.5
      );
    }
  };
  useEffect(() => {
    populateCache();
    generateEffectCache();

    // 添加 resize 事件监听器
    window.addEventListener('resize', populateCache);

    // 在组件卸载时移除事件监听器
    return () => {
      window.removeEventListener('resize', populateCache);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeAnchor = async (event) => {
    if (event.currentTarget.tagName === 'LI') {
      const boxAnimations = boxRefs.current[0]
        .getAnimations()
        .filter((t) => t.transitionProperty === 'scale');
      await Promise.allSettled(boxAnimations.map((a) => a.finished));
      if (
        boxAnimations.length &&
        boxAnimations[0].playState === 'finished' &&
        getComputedStyle(boxRefs.current[0]).scale === '0'
      ) {
        if (config.anchor) {
          event.currentTarget.style.removeProperty('anchor-name');
          event.currentTarget.dataset.activeAnchor = 'false';
        } else {
          containerRef.current.dataset.startSet = 'false';
          containerRef.current.style.removeProperty('--start-index');
          containerRef.current.style.removeProperty('--start-width');
          scopeRef.current.style.removeProperty('--active-index');
          scopeRef.current.style.removeProperty('--active-offset');
          containerRef.current.style.removeProperty('--translate-speed');
        }
        if (config.parallax) {
          containerRef.current.dataset.activeParallax = 'false';
          containerRef.current.style.removeProperty('--px');
          containerRef.current.style.removeProperty('--py');
          listBounds = undefined;
          containerRef.current.removeEventListener(
            'pointermove',
            setParallax,
            true
          );
        }
      }
    }
  };
  let startIndex;
  let startWidth;
  const setAnchor = (event) => {
    if (event.currentTarget.tagName === 'LI') {
      const index = Number.parseInt(event.currentTarget.dataset.index, 10);

      // check for an existing anchor
      if (config.anchor) {
        const current = Array.from(listRefs.current).filter(
          (item) => item.dataset.activeAnchor === 'true'
        )[0];
        if (current) {
          current.dataset.activeAnchor = false;
          current.style.removeProperty('anchor-name');
        }
      }
      if (config.anchor) {
        event.currentTarget.dataset.activeAnchor = true;
        event.currentTarget.style.setProperty('anchor-name', '--active');
      } else {
        const bounds = itemPosCache.current[index];
        if (containerRef.current.dataset?.startSet !== 'true') {
          startIndex = index;
          startWidth = bounds.width;
          containerRef.current.dataset.startSet = 'true';
          containerRef.current.style.setProperty('--start-index', index);
          containerRef.current.style.setProperty('--start-width', bounds.width);
        }
        scopeRef.current.style.setProperty(
          '--active-index',
          index - startIndex
        );
        scopeRef.current.style.setProperty(
          '--active-offset',
          bounds.width - startWidth
        );
        // maybe we instead track the start and the current and do Math to calc lh by...
        // NOTE:: You'll have issues where you don't want to translate initially
        // to get around this make a parent instantly transition
        containerRef.current.style.setProperty('--translate-speed', '0.2s');
      }
      // regardless, you need to set the boxRefs.current for the given index
      const tweaks = effectCache[index];

      for (let b = 0; b < boxRefs.current.length; b++) {
        boxRefs.current[b].style.setProperty(
          '--x',
          config.behavior === 'static' ? tweaks[b][0] : random(-25, 25)
        );
        boxRefs.current[b].style.setProperty(
          '--y',
          config.behavior === 'static' ? tweaks[b][1] : random(-25, 25)
        );
        boxRefs.current[b].style.setProperty(
          '--r',
          config.behavior === 'static' ? tweaks[b][2] : random(-25, 25)
        );
      }

      if (
        config.parallax &&
        containerRef.current.dataset.activeParallax !== 'true'
      ) {
        containerRef.current.dataset.activeParallax = 'true';

        listBounds = containerRef.current.getBoundingClientRect();

        containerRef.current.addEventListener('pointermove', setParallax, true);
      }
    }
  };
  // // last controller binds
  // ctrl.addBinding(config, 'anchor', {
  //   label: 'Use anchor',
  //   disabled: !hasAnchorSupport,
  // });
  // ctrl.addBinding(config, 'behavior', {
  //   label: 'Behavior',
  //   options: {
  //     Static: 'static',
  //     Dynamic: 'dynamic',
  //   },
  // });
  // ctrl.addBinding(config, 'parallax', {
  //   label: 'Parallax',
  // });
  // ctrl.addBinding(config, 'debug', {
  //   label: 'Debug',
  // });
  // ctrl.addBinding(config, 'theme', {
  //   label: 'Theme',
  //   options: {
  //     System: 'system',
  //     Light: 'light',
  //     Dark: 'dark',
  //   },
  // });

  // ctrl.on('change', sync);
  update();
  return (
    <SmartCardWrapper>
      <section className="fluid">
        <h2 className="container">Products</h2>
        <div ref={containerRef} className="container">
          <ul>
            {items.map((item, index) => {
              const listItemRef = (el) => {
                if (el && !listRefs.current[index]) {
                  listRefs.current[index] = el; // 只在元素存在时添加
                }
              };
              return (
                <li
                  ref={listItemRef}
                  key={index}
                  onMouseEnter={setAnchor}
                  onMouseLeave={removeAnchor}
                >
                  <a href={item.url}>{item.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="holding">
            <div className="scope" ref={scopeRef}>
              {Array(3)
                .fill(null)
                .map((_, boxIndex) => {
                  let i = boxIndex;
                  const setBoxRef = (el) => {
                    if (el && !boxRefs.current[i]) {
                      boxRefs.current[i] = el; // 只在元素存在时添加
                    }
                  }; // 将 i 设置为当前的 boxIndex
                  return (
                    <div className="holder" key={boxIndex}>
                      <div className="box" ref={setBoxRef}>
                        {items.map((item, index) => {
                          return (
                            <img
                              key={index}
                              src={item[`img${boxIndex + 1}`]}
                            ></img>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </SmartCardWrapper>
  );
};
const SmartCardWrapper = styled.div`
  /* @import 'normalize.css' layer(normalize); */
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

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
  ul:has(li:is(:hover, :focus-within)) + .holding .box {
    scale: 1;
  }

  [data-use-anchor='true'] .holder:nth-of-type(1) {
    position: absolute; /* 确保定位元素 */
    left: auto;
    right: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  [data-use-anchor='true'] .holder:nth-of-type(2) {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(50%, -50%);
  }

  [data-use-anchor='true'] .holder:nth-of-type(3) {
    position: absolute;
    left: 50%;
    bottom: 100%;
    top: auto;
    transform: translate(-50%, -50%);
  }

  [data-use-anchor='true'] .holding {
    position: absolute; /* 确保元素已定位，以便应用 top 和 left */
    top: 0; /* 默认位置 */
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%; /* 根据需求调整宽度 */
    transition: top 0.2s, width 0.2s;
  }

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
    /* margin-bottom: 1em; */
  }
  .container {
    width: 100%;
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

  :root {
    --font-size-min: 16;
    --font-size-max: 20;
    --font-ratio-min: 1.2;
    --font-ratio-max: 1.5;
    --font-width-min: 375;
    --font-width-max: 1800;
  }

  box {
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
`;

export { ProductsList };
