import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { data1, data2 } from './contexttest';


function Tas() {
  // const [showpara,setshowpara] = useState(false);
  const [status, setstatus] = useState('online');
  const [btnstatus, setbtnstatus] = useState('offline');
  const [btnvariant, setbtnvariant] = useState('danger');

  // setInterval(() => {
  //     if (showpara === false) {
  //         setshowpara(true);
  //         console.log("0");
  //     }
  //     else{
  //         setshowpara(false);
  //         console.log("1");
  //     }
  // }, 2000);

  const servstate = () => {
    if (status === 'online') {
      setstatus('offline');
      setbtnstatus('Go online')
      setbtnvariant('success')
    }
    else {
      setstatus('online');
      setbtnstatus('Go offline')
      setbtnvariant('danger')
    }
  }

  const name = useContext(data1);
  const server = useContext(data2);

  return (
    <div>
      <div className='App'>
        {/* {showpara && <p>i am, para</p>} */}
        {/* <button onClick={togpara}>Togglr mr</button> */}
      </div>
      <div className='text-center'>
        {/* context test */}
        <h1>{name} is {status} at {server}</h1>
        <Button onClick={servstate} variant={btnvariant}>{btnstatus}</Button>
      </div>
    </div>
  );

}

export default Tas;