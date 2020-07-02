import React from 'react';

const _pipes = {
  JSON: 'JSON',
  CURRENCY: 'CURRENCY',
  CUSTOMERS: 'CUSTOMERS',
  PERCENT: 'PERCENT',
  AVERAGE: 'AVERAGE'
}

export function Format(props) {
  const {
    children,
    pipes = [],
    classNames = '',
  } = props

  if (!pipes || !pipes.length) {
    console.debug('available pipes:', _pipes);
  }
  /* --- */

  const result = pipes.reduce((result, flag) => {
    flag = flag.toUpperCase();
    const region = 'de';
    const currency = 'EUR';

    switch (flag) {
      case _pipes.JSON:
        //expect object
        result = JSON.stringify(children, '', 2)
        result = <pre>{result}</pre>
        break;

      case _pipes.CURRENCY:
        //expect number
        result = result.toLocaleString(region, { style: 'currency', currency });
        break;

      case _pipes.CUSTOMERS:
        //expect number
        result = result + ' Ω';
        break;

      case _pipes.PERCENT:
        //expect number
        result = result.toPrecision(3);
        result = result + ' %'
        break;

      case _pipes.AVERAGE:
        //expect number or string
        result = 'Ø ' + result

      default:
        break;
    }
    return result
  }, children)

  return (
    <span className={`Format ${pipes.join(' ')} ${classNames}`}>
      {result}
    </span>
  )
}