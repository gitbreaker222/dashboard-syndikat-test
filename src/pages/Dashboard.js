import React, { useState, useEffect } from 'react';
import { cssIf } from '../service/util'
import { queryData } from '../service/data'
import { Format } from '../components/format/Format'
import { CircleDiagram } from '../components/circleDiagram/CircleDiagram'
import { ObjectDetails } from '../components/objectDetails/ObjectDetails'
import './Dashboard.css';

const cleanupPlaceholder = () => { }

export function Dashboard() {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState(null)

  const selectObject = async (event) => {
    event.stopPropagation()
    const { id } = event.currentTarget.dataset
    const staticData = await queryData(`{
      objects(filter: {id: ${id}}) {
        id
        name
        date_until
        revenue
        revenue_percent
        processed_old_revenue_percent
        processed_old_revenue_n1
        processed_old_revenue_n2
        customers_percent
        customers {
          id
        }
        customers_new {
          id
        }
        customers_pop {
          id
        }
        customers_increase {
          id
        }
        customers_decrease {
          id
        }
        customers_clearingissue {
          id
        }
        revenue_target
        revenue_until_old
        customer_target
        customer_until_old
        customer_open
        online_n
        online_n_customercount
        online_n_percent
        omp_n
        omp_n_customer_count
        omp_n_percent
        customer_per_week_av
        customer_per_week_av_revenue
        customer_per_week_av_target
        customer_per_week_av_target_revenue
      }
    }`)

    setDetails(staticData.objects.find(item => {
      console.log(item.id, id);

      return item.id.toString() === id
    }))
  }

  useEffect(() => {
    if (!data) {
      queryData().then(result => {
        setData(result);
      })
    }
    return cleanupPlaceholder
  }, [data]);

  return (
    <div className="Dashboard">
      <aside>
        <div className="greeting">
          HALLO FRAU BEISER
        </div>

        <div className="highlight-info">
          Ihr umsatz diese Woche:

          <h3>
            <Format pipes={['currency']}>
              {20000}
            </Format>
          </h3>
        </div>
      </aside>

      <main className={`
        ${cssIf(details, '--isDetailsOpen')}
        `}
      >
        <div className="weekly-revenue">
          <h4>Wochenumsatz</h4>
        </div>

        <div className="messages">
          <h4>Nachrichten</h4>
        </div>

        <div className="objects-box">
          <h4>Ihre Objekte</h4>
          <div className="legend">
            <div>Verarbeiteter Altumsatz</div>
            <div>Kunden</div>
            <div>Umsatz</div>
          </div>
          <div className="object-list">
            {data && data.objects && data.objects.map(_object => (
              <button className="pure-button"
                onClick={selectObject}
                data-id={_object.id}
                key={_object.id}
              >
                <CircleDiagram
                  c1Percent={_object.processed_old_revenue_percent}
                  c2Percent={_object.customers_percent}
                  c3Percent={_object.revenue_percent}
                />
                <div className="object-name">
                  {_object.name}
                </div>
                <span className="date">
                  {_object.date_until}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>
      {!!details && (
        <ObjectDetails data={details}
          onClose={() => { setDetails(null) }}
        />
      )}
    </div>
  );
}

