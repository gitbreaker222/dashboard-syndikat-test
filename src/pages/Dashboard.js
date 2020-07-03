import React, { useState, useEffect } from 'react';
import { cssIf } from '../service/util'
import { queryData } from '../service/data'
import { Format } from '../components/format/Format'
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

          <Format pipes={['currency']}>
            {20000}
          </Format>
        </div>
      </aside>

      <main className={`
        ${cssIf(details, '--isDetailsOpen')}
        `}>
        {data && data.objects && data.objects.map(_object => (
          <button className="pure-button"
            onClick={selectObject}
            data-id={_object.id}
            key={_object.id}
          >
            {_object.name}
          </button>
        ))}
      </main>
      {!!details && (
        <ObjectDetails data={details}
          onClose={() => { setDetails(null) }}
        />
      )}
    </div>
  );
}

