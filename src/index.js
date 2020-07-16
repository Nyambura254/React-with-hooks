import React, {useState} from 'react';
import ReactDOM from 'react-dom';
var App=(props)=>{
  var [count,setState]=useState(props.count)
  var [text,setText]=useState('');

  return(
    <div>
      <h2>
        The current {text || 'count'} is {count}
        </h2>
      <button onClick={()=>setState(count+1)}>+1</button>
      <button onClick={()=>setState(count-1)}>-1</button>
      <button onClick={()=>setState(props.count)}>reset</button>
    <input value={text}
    onChange={(evt)=>setText(evt.target.value)}/>
    </div>
  );
};
App.defaultProps={
  count:0,
};

ReactDOM.render( <App />,document.getElementById('root'));
