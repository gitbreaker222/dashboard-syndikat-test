import React from 'react'
import { getTimeDifference } from '../../service/util';
import { Format } from '../format/Format'
import { Progress } from '../progress/Progress'
import { CircleDiagram } from '../circleDiagram/CircleDiagram'
import css from './ObjectDetails.module.css'


export function ObjectDetails(props) {
  const {
    data = null,
    onClose,
  } = props

  const {
    name,
    date_start,
    date_until,
    revenue,
    revenue_percent,
    processed_old_revenue_percent,
    processed_old_revenue_n1,
    processed_old_revenue_n2,
    customers_percent,
    customers,
    customers_new,
    customers_pop,
    customers_increase,
    customers_decrease,
    customers_clearingissue,
    revenue_target,
    revenue_until_old,
    customer_target,
    customer_until_old,
    customer_open,
    online_n,
    online_n_customercount,
    online_n_percent,
    omp_n,
    omp_n_customer_count,
    omp_n_percent,
    customer_per_week_av,
    customer_per_week_av_revenue,
    customer_per_week_av_target,
    customer_per_week_av_target_revenue,
  } = data || {};

  return (
    <div className={'ObjectDetails ' + css.root}>
      <header className={css.box}>
        <div className="title">
          {!data && '(no data)'}
          {name}
        </div>

        <div className="time -info">
          ⏲ {date_until}
          <div className="-remaining">
            Noch&ensp;
            <Format pipes={['timespan']}>
              {getTimeDifference(date_until)}
            </Format>
          </div>
        </div>
        <Progress date_start={date_start}
          date_until={date_until}>
        </Progress>

        <button className="pure-button close"
          onClick={onClose}
        >
          <span role="img" aria-label="close">❎</span>
        </button>
      </header>

      <div className={`${css.box} ${css.a1}`}>
        <div>
          <sub>Umsatzvorgabe</sub>
          <h3>
            <Format pipes={['currency']}>
              {revenue_target}
            </Format>
          </h3>
        </div>
        <div>
          <sub>Bis Altumsatz</sub>
          <h3>
            <Format pipes={['currency']}>
              {revenue_until_old}
            </Format>
          </h3>
        </div>
      </div>
      <div className={`${css.box} ${css.a2}`}>
        <div>
          <sub>Kundenvorgabe</sub>
          <h3>
            <Format pipes={['customers']}>
              {customer_target}
            </Format>
          </h3>
        </div>
        <div>
          <sub>Bis Altkunden</sub>
          <h3>
            {customer_until_old}
          </h3>
        </div>
        <div>
          <sub>Noch offen</sub>
          <h3>
            {customer_open}
          </h3>
        </div>
      </div>
      <div className={`${css.box} ${css.a3}`}>
        <div>
          <sub>Online</sub>
          <h3>
            <Format pipes={['percent']}>
              {online_n_percent}
            </Format>
          </h3>
          <sup>
            <Format pipes={['currency']}>
              {online_n}
            </Format>
            &emsp;|&emsp;
            <Format pipes={['customers']}>
              {online_n_customercount}
            </Format>
          </sup>
        </div>
        <div>
          <sub>OMP</sub>
          <h3>
            <Format pipes={['percent']}>
              {omp_n_percent}
            </Format>
          </h3>
          <sup>
            <Format pipes={['currency']}>
              {omp_n}
            </Format>
            &emsp;|&emsp;
            <Format pipes={['customers']}>
              {omp_n_customer_count}
            </Format>
          </sup>
        </div>
      </div>
      <div className={`${css.box} ${css.a4}`}>
        <div className="-title">Kunden/Woche</div>
        <div>
          <sub>Aktuell</sub>
          <h3>
            <Format pipes={['customer', 'average']}>
              {customer_per_week_av}
            </Format>
          </h3>
          <sup>
            <Format pipes={['currency']}>
              {customer_per_week_av_revenue}
            </Format>
          </sup>
        </div>
        <div>
          <sub>Ideal</sub>
          <h3>
            <Format pipes={['customer', 'average']}>
              {customer_per_week_av_target}
            </Format>
          </h3>
          <sup>
            <Format pipes={['currency']}>
              {customer_per_week_av_target_revenue}
            </Format>
          </sup>
        </div>
      </div>

      <div className={`${css.box} ${css.diagram}`}>
        <div className={css.legend}>
          <div>Umsatz</div>
          <div>Kunden</div>
          <div>Verarbeiteter Altumsatz</div>
          <Format pipes={['currency']}>
            {processed_old_revenue_n1}</Format>
          <Format pipes={['percent']}>
            {processed_old_revenue_n2}</Format>
        </div>
        <div className={css.diagramBox}>
          <CircleDiagram
            c1Percent={processed_old_revenue_percent}
            c2Percent={customers_percent}
            c3Percent={revenue_percent}
          />
          <div className={css.inner}>
            <Format pipes={['currency']}>{revenue}</Format>
            <Format pipes={['customers']}>{customers.length}</Format>
          </div>
        </div>
      </div>

      <div className={`${css.box} ${css.customers}`}>
        <div>
          <sub>Neukunden</sub>
          <h3>
            <Format pipes={['customers']}>
              {customers_new.length}
            </Format>
          </h3>
          <sup>
            <Format pipes={['currency']}>
              {9999}
            </Format>
            &emsp;|&emsp;
            <Format pipes={['customers']}>
              {9999}
            </Format>
          </sup>
        </div>

        <div className="separator"></div>

        <div>
          <sub>Platzer</sub>
          <h3>
            <Format pipes={['customers']}>
              {customers_pop.length}
            </Format>
          </h3>
          <sup>
            <Format pipes={['currency']}>
              {9999}
            </Format>
          </sup>
        </div>

        <div className="separator"></div>

        <div>
          <sub>Erhöhung</sub>
          <h3>
            <Format pipes={['customers']}>
              {customers_increase.length}
            </Format>
          </h3>
          <sup>
            <Format pipes={['currency']}>
              {9999}
            </Format>
          </sup>
        </div>

        <div className="separator"></div>

        <div>
          <sub>Minderung</sub>
          <h3>
            <Format pipes={['customers']}>
              {customers_decrease.length}
            </Format>
          </h3>
          <sup>
            <Format pipes={['currency']}>
              {9999}
            </Format>
          </sup>
        </div>

        <div className="separator"></div>

        <div>
          <sub>Klärfall</sub>
          <h3>
            <Format pipes={['customers']}>
              {customers_clearingissue.length}
            </Format>
          </h3>
        </div>

      </div>

      <footer className={css.box}>footer </footer>
    </div>
  )
}