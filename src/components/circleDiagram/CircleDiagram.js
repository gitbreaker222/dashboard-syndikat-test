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

  const c1_strokeLength = 2 * c1_r * Math.PI
  const c2_strokeLength = 2 * c2_r * Math.PI
  const c3_strokeLength = 2 * c3_r * Math.PI

  const calcLength = (fullLength, percent) => {
    return fullLength * percent / 100
  }

  const style1 = {
    strokeDasharray: calcLength(c1_strokeLength, c1Percent) + 'px'
  }
  const style2 = {
    strokeDasharray: calcLength(c2_strokeLength, c2Percent) + 'px'
  }
  const style3 = {
    strokeDasharray: calcLength(c3_strokeLength, c3Percent) + 'px'
  }

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