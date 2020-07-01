import React from 'react';

export function Format(props) {
  console.log(props);

  const {
    children,
    json = false,
  } = props

  let result = '(<Format> has no flag)'

  if (json) {
    result = JSON.stringify(children, '', 2)
    result = <pre>{result}</pre>
  }

  return (
    <div className="Format">{result}</div>
  )
}