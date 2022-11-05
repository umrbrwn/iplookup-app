import { useEffect, useState } from 'react';
import { getUsageCount } from '../service/data';

function Usage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getUsageCount()
      .then(({ usage }) => setCount(usage))
      .catch((err) => console.error('Failed to fetch usage stats', err));
  }, []);

  return (
    <p className="text-xl"><span className="text-5xl text-bold">{count}</span> IP lookup requests served</p>
  );
}

export default Usage;
