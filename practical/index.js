


function setTime(){
    const element1= `
    <div>
    <h1>Javascript</h1>
    <input type="text"/>
    </div>
    <p>${new Date().toLocaleTimeString()}</p>
    `
    document.getElementById('container1').innerHTML=element1;
    
    const element2= React.createElement('div', null, 
        React.createElement('h1',null, 'React'),
        React.createElement('input', type="text"),
        
        React.createElement('p', null, new Date().toLocaleTimeString())
    );
    
    ReactDOM.render(element2, document.getElementById('container2'));
    
}


setInterval(setTime,1000);




















// function setTime(){
//     const element1=`
//     <div>
//        <h1>Javascript</h1>
//        <input type= "text"/>
//     </div>
//     <p>${new Date().toLocaleTimeString()}</p>
//     `
//     document.getElementById("container1").innerHTML=element1;


//     const element2= 
//     React.createElement(
//       'div',
//       null,
//       React.createElement('h1',null,'React'),
//       React.createElement('input', {type: 'text'}),
//       React.createElement('p',null,new Date().toLocaleTimeString())
//     );
//     ReactDOM.render(element2,document.getElementById('container2'));

// }

// setInterval(setTime,1000);



































// function setTime(){
//     const element1= `
//     <div>
//     <h1>javascript</h1>
//     <input type='text'/>
//     <p>${new Date().toLocaleTimeString()}</p>
//     </div>
//     `;
//     document.getElementById("container1").innerHTML= element1;

//     const element2= React.createElement(
//         'div',
//         null,
//         React.createElement('h1',null, 'React'),
//         React.createElement('div',null, 
//         React.createElement('input', {type: 'text'})
//         ),
//         React.createElement('p',null, new Date().toLocaleTimeString())
//     );
//     ReactDOM.render(element2, document.getElementById('container2'));
   
// }

// setInterval(setTime,1000)

