import {useState} from 'react'

const Clickeable = () => {
    const[count, setCount]=useState(0);
    const[timestamp, setTimestamp]=useState(new Date());

    function updateCount(){
        setCount(count+1);
        setTimestamp(new Date());
    }


    return (
        <div>
            <span>Clicks: {count}, ultimo click: {timestamp.toString()}</span>
            <button type="button" onClick={updateCount}>contador</button>
        </div>
    )
}

export default Clickeable;
