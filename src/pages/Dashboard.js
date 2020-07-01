import React, { useState, useEffect } from 'react';
import { cssIf } from '../service/util'
import { queryData } from '../service/data'
import { ObjectDetails } from '../components/objectDetails/ObjectDetails'
import './Dashboard.css';

const cleanupPlaceholder = () => { }

export function Dashboard() {
  const [data, setData] = useState(null);
  const [detailsData, setDetailsData] = useState({ id: 0 })

  useEffect(() => {
    if (!data) {
      queryData()
        .then(setData)
    }
    return cleanupPlaceholder
  }, [data]);

  return (
    <div className="Dashboard">
      <main className={`
        ${cssIf(detailsData, '--isDetailsOpen')}
        `}>
        dashboard with list of objects
      </main>
      {!!detailsData && (
        <ObjectDetails objectData={detailsData} />
      )}
    </div>
  );
}

