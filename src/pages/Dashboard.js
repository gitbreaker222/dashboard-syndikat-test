import React, { useState, useEffect } from 'react';
import { queryData } from '../service/data'
import { Format } from '../components/format/Format'

const cleanupPlaceholder = () => { }

export function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      const result = queryData()
      setData(result)
      console.log(result);

    }
    return cleanupPlaceholder
  }, [data]);

  return (
    <div className="Dashboard">
      <header className="App-header">
        {data && (
          <Format json>{data}</Format>
        )}
      </header>
    </div>
  );
}

