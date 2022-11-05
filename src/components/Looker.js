import { useEffect, useState } from 'react';
import JsonWidget from './JsonWidget';
import Spinner from './Spinner';
import { getMyIP, getIpData } from '../service/data';

function Looker() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  // in bigger project all the data handling logic will be moved to state manager
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getMyIP()
      .then(({ ipAddress }) => setInput(ipAddress))
      .catch((err) => console.error('Could not get self IP address.', err));
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    getIpData(input)
      .then((data) => {
        setErrors(null);
        setResult(data)
      })
      .catch((err) => setErrors(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-gray-700 p-6 rounded-md font-mono">
      <form className="flex items-center p-4 border border-slate-500 rounded mb-5" autoComplete="off" onSubmit={submitForm}>
        <input type="text" className="w-full bg-transparent focus:outline-none font-bold text-gray-100 tracking-widest"
          value={input} onChange={(e) => setInput(e.target.value)}>
        </input>
        <button type="submit">
          <svg className="text-gray-100" width="22" height="22" strokeWidth="3">
            <use href="#search-glass"></use>
          </svg>
        </button>
      </form>
      <div className='min-h-[300px]'>
        {
          loading
            ? <Spinner loading={loading} />
            : (errors ? <p className="text-red-500">{errors.message}</p> : <JsonWidget data={result}></JsonWidget>)
        }
      </div>
    </div >
  );
}

export default Looker;
