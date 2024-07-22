import React from 'react';
import { GoogleTagManagerProps } from './types';

const GoogleTagManagerBody: React.FC<GoogleTagManagerProps> = ({ gtmId }) => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height='0'
        width='0'
        className='hidden invisible'></iframe>
    </noscript>
  );
};

export default GoogleTagManagerBody;
