import React, { useEffect } from 'react';
import './App.css';

interface QqUserProps {
  qq: string,
  name: string,
  qlogo: string,
  code: number,
  msg?: string,
}

function QqUser(props: QqUserProps) {
  if (props.code === 1) {
    return (
      <div className='qq-box'>
        <img className='qq-avatar' src={props.qlogo} alt={props.name} />
        <div className='qq-info'>
          <div className='qq-name'>{props.name}</div>
          <div className='qq-number'>{props.qq}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='qq-error'>{props.msg}</div>
    );
  }

}

function Loading() {
  return (
    <div className='loading-box'>
      <div className='loading-icon'></div>
      <div className='loading-text'>加载中...</div>
    </div>
  );
}

function App() {
  const [qq, setQq] = React.useState('');
  const [qqUser, setQqUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    async function fetchQqUser() {
      const response = await fetch(`https://api.uomg.com/api/qq.info?qq=${qq}`);
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
