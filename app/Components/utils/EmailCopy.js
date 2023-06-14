import React from 'react';
import { CopyButton } from './CopyButton';

export const EmailCopy = () => {
  const textToCopy = 'luciosc1798@gmail.com';

  return (
    <div className=''>
    
     <CopyButton  text={textToCopy}  />
      
    </div>
  );
}

