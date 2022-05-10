import React, { useState, useEffect } from 'react';
import './App.css';
import QqUser, { QqUserProps } from '../components/QqUser';

function Loading() {
  return (
    <div className='loading-box'>
      <div className='loading-icon'></div>
      <div className='loading-text'>加载中...</div>
    </div>
  );
}

function App() {
  const [qq, setQq] = useState('');
  const [qqUser, setQqUser] = useState<QqUserProps>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (qq === '') {
      return setQqUser(undefined);
    }

    let ignore = false;
    async function fetchQqUser() {
      setLoading(true);
      const response = await fetch(`https://api.uomg.com/api/qq.info?qq=${qq}`);
      const json = await response.json();
      if (!ignore) {
        setLoading(false);
        setQqUser(json);
      }
    }

    let timer: NodeJS.Timeout;
    if (qq.length >= 5 && qq.length <= 12) {
      timer = setTimeout(() => {
        fetchQqUser();
      }, 500);
    }

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [qq]);

  return (
    <div className='app'>
      <div className='app-header'>
        <span>QQ</span>
        <input className='search-input' placeholder='please input' value={qq} onChange={(e) => {
          setQq(e.target.value.trim());
        }} />
      </div>

      <div className='app-content'>
        {loading ? <Loading /> : qqUser && <QqUser {...qqUser} />}
      </div>
    </div>
  );
}

export default App;
