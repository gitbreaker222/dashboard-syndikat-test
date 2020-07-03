import React from 'react';
import css from './CircleDiagram.module.css';

export function CircleDiagram(props) {
  const {
    c1Percent = 50,
    c2Percent = 50,
    c3Percent = 50,
  } = props

  const c1_r = 50;
  const c2_r = 42; // ;)
  const c3_r = 34;

  const calcLength = (fullLength, percent) => {
    return fullLength * percent / 100
  }

  const getStyle = (radius, percent) => {
    const strokeLength = 2 * radius * Math.PI
    return {
      strokeDasharray: calcLength(strokeLength, percent) + 'px ' + strokeLength
    }
  }

  const style1 = getStyle(c1_r, c1Percent)
  const style2 = getStyle(c2_r, c2Percent)
  const style3 = getStyle(c3_r, c3Percent)

  return (
    <svg viewBox="0 0 110 110"
      xmlns="http://www.w3.org/2000/svg"
      className={css.root}
    >
      <circle cx="55" cy="55" r={c1_r} style={style1} title={c1Percent} />
      <circle cx="55" cy="55" r={c2_r} style={style2} title={c2Percent} />
      <circle cx="55" cy="55" r={c3_r} style={style3} title={c3Percent} />
    </svg>
  )
}