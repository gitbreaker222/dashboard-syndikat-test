import React from 'react'
import { getTimeProgress } from '../../service/util';
import css from './Progress.module.css'

export function Progress(props) {
  const {
    date_start,
    date_until,
  } = props
  return (
    <div className={"Progress " + css.root}
      style={{ "--process": getTimeProgress(date_start, date_until) + "%" }}
    >
    </div>
  )
}