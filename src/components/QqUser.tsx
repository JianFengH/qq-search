import React from 'react';
import './QqUser.css';

enum QqCode {
  Success = 1,
  ServerException = 201702,
}

export interface QqUserProps {
  code: QqCode,
  msg?: string,
  qq?: string,
  name?: string,
  qlogo?: string,
}

function QqUser(props: QqUserProps) {
  if (props.code === QqCode.Success) {
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

export default QqUser;