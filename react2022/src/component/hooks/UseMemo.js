import React,{useState, useMemo} from 'react'

export default function UseMemo() {

    const [count, setcount] = useState(0);
    const [item, setItem] = useState(0);

    const multiCountUsememo= useMemo(function multiCount(){

      return count*5

    }, [count])

// function multiCount(){
// return count*5
// }

  return (
    <div>
        <h2>Count: {count}</h2>
        <h2>{multiCountUsememo}</h2>
        <button onClick={setcount(count+1)}>Count</button>
        <button onClick={setcount(count*5)}>Multiply</button>
    </div>
  )
}
