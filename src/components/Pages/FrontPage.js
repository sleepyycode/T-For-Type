import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function FrontPage() {
  return (
    <>
    <div className='Front Page'>
    <h1 style={{margin: '0', display:'flex', placecontent:'center', textalign:'center', justifyContent:'center', height:'24em', alignItems:'center', top:'50%', left:'50%', transitionDelay:'2s',}}>
        <span style={{ color: 'black', fontWeight: 'bold', fontSize: '40px',}}>
          <Typewriter
            words={['T For ']}
            typeSpeed={180} 
          />
          <span style={{transitionDelay: '22s',}}>
          <Typewriter
            words={['     Tpyr','  Type']}
            cursor
            cursorStyle='|'
            cursorBlinking={true}
            typeSpeed={190} 
          />
          </span>
          </span>
      </h1>
      </div>
    </>
  )
}

export default FrontPage;