import React, { useState, useEffect } from 'react';
import './App.css';
import QqUser from './QqUser';

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
  const [qqUser, setQqUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const _qq = qq.trim();
    if (!_qq) {
      return setQqUser(null);
    }

    let ignore = false;
    setLoading(true);
    async function fetchQqUser() {
      const response = await fetch(`https://api.uomg.com/api/qq.info?qq=${_qq}`);
      const json = await response.json();
      if (!ignore) {
        setLoading(false);
        setQqUser(json);
      }
    }

    fetchQqUser();
    return () => { ignore = true; };
  }, [qq]);

  return (
    <div className='app'>
      <div className='app-header'>
        <span>QQ</span>
        <input className='search-input' placeholder='please input' value={qq} onChange={(e) => {
          setQq(e.target.value);
        }} />
      </div>

      <div className='app-content'>
        {loading ? <Loading /> : qqUser && <QqUser {...qqUser} />}
      </div>
    </div>
  );
}

export default App;
