import React from 'react'
//import { Format } from '../components/format/Format'
import './ObjectDetails.css'


export function ObjectDetails(props) {
  const {
    objectData = null
  } = props

  return (
    <div className="ObjectDetails">
      <header className="box">
        header {!objectData && '(no data)'}
      </header>

      <div className="box -a-1">a1</div>
      <div className="box -a-2">a2</div>
      <div className="box -a-3">a3</div>
      <div className="box -a-4">a4</div>

      <div className="box -diagram">D</div>

      <div className="box -customers">C</div>

      <footer className="box">footer </footer>
    </div>
  )
}