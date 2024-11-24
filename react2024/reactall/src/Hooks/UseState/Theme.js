import React, { useState } from 'react';

function Theme() {
const [darktheme, setDarktheme]=useState(false);
    const theme={
        darktheme:{
backgroundColor: 'black',
color: 'white',
padding: '20px'
        },
        lighttheme:{
            backgroundColor: 'white',
color: 'black',
padding: '20px'
        }
    }
  return (
    <>
      Enable Dark Theme: <input type='checkbox' onChange={()=>setDarktheme(prevtheme=>!prevtheme)}/>
      <div style={darktheme?theme.darktheme:theme.lighttheme}>
        <h1>This is Heading</h1>
        <p>this is paragraph for the new theme</p>
      </div>
    </>
  );
}

export default Theme;
