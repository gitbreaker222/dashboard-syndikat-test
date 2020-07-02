import React, { useState, useEffect } from 'react';
import { cssIf } from '../service/util'
import { queryData } from '../service/data'
import { ObjectDetails } from '../components/objectDetails/ObjectDetails'
import './Dashboard.css';

const cleanupPlaceholder = () => { }

export function Dashboard() {
  const [data, setData] = useState(null);
  const [detailsId, setDetailsId] = useState(null)

  const selectObject = (event) => {
    event.stopPropagation()
    const { id } = event.currentTarget.dataset
    setDetailsId(id)
  }

  useEffect(() => {
    if (!data) {
      queryData().then(setData)
    }
    return cleanupPlaceholder
  }, [data]);

  return (
    <div className="Dashboard">
      <main className={`
        ${cssIf(detailsId, '--isDetailsOpen')}
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
      {!!detailsId && (
        <ObjectDetails objectData={detailsId}
          onClose={() => { setDetailsId(null) }}
        />
      )}
    </div>
  );
}

