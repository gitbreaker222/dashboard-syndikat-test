import React from 'react'
//import { Format } from '../components/format/Format'
import css from './ObjectDetails.module.css'


export function ObjectDetails(props) {
  const {
    objectData = null,
    onClose,
  } = props

  return (
    <div className={'ObjectDetails ' + css.root}>
      <header className={css.box}>
        <div className="title">
          header {!objectData && '(no data)'}
        </div>

        <div className="time -info">
          <i>clock</i>
          2020-20-20
          <span className="-remaining">
            Noch x Wochen
          </span>
        </div>
        <div className="time -meter"></div>

        <button className="close"
          onClick={onClose}
        >
          <i>X</i>
        </button>
      </header>

      <div className={`${css.box} ${css.a1}`}>
        a1
      </div>
      <div className={`${css.box} ${css.a2}`}>
        a2
      </div>
      <div className={`${css.box} ${css.a3}`}>
        a3
      </div>
      <div className={`${css.box} ${css.a4}`}>
        a4
      </div>

      <div className={`${css.box} ${css.diagram}`}>
        D
      </div>

      <div className={`${css.box} ${css.customers}`}>
        C
      </div>

      <footer className={css.box}>footer </footer>
    </div>
  )
}