import React from 'react';
import css from './Format.module.css';

const _pipes = {
  JSON: 'JSON',
  CURRENCY: 'CURRENCY',
  CUSTOMERS: 'CUSTOMERS',
  PERCENT: 'PERCENT',
  AVERAGE: 'AVERAGE',
  TIMESPAN: 'TIMESPAN',
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

  let prefix = '';
  let postfix = '';
  const result = pipes.reduce((result, flag) => {
    flag = flag.toUpperCase();
    const region = 'de';
    const currency = 'EUR';

    switch (flag) {
      case _pipes.JSON:
        result = JSON.stringify(children, '', 2)
        result = <pre>{result}</pre>
        break;

      case _pipes.CURRENCY:
        result = result.toLocaleString(region, { style: 'currency', currency });
        break;

      case _pipes.CUSTOMERS:
        result = result + ' '
        postfix = <img
          src="/icons/user-solid.svg"
          alt="user-icon"
          className={css.icon}
        />;
        break;

      case _pipes.PERCENT:
        result = result.toPrecision(3);
        postfix = ' %'
        break;

      case _pipes.AVERAGE:
        prefix = 'Ø '
        break;

      case _pipes.TIMESPAN:
        const oneDay = 86400000
        let unit = 'Stunden'
        result = children / 1000 / 60 / 60
        if (children > oneDay) {
          result = result / 24
          unit = 'Tage'
        }
        if (children > oneDay * 7) {
          result = result / 7
          unit = 'Wochen'
        }
        if (children > oneDay * 30) {
          result = result * 7 / 30
          unit = 'Monate'
        }
        if (children > oneDay * 365) {
          result = result * 30 / 365
          unit = 'Monate'
        }
        result = result.toLocaleString(undefined, { maximumFractionDigits: 1 })
        result = `${result} ${unit}`
        break;

      default:
        break;
    }
    return result
  }, children)

  return (
    <span className={`Format ${pipes.join(' ')} ${classNames}`}>
      {prefix}{result}{postfix}
    </span>
  )
}