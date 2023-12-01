
import './App.css';
import Header from './components/HeaderDemo';
import {Button} from 'reactstrap'
import { ToastContainer,toast } from 'react-toastify';

function App() {
  const notify = () => toast("Wow! notify me");
  const success= () => {
    toast.success("done",{
      position:'bottom-center'
    })
  };

  return (
    <div>
    <hr/>
      <Button color='primary' onClick={notify}>this is first react Button</Button>
      <button onClick={success}>Notify!</button>
      <ToastContainer/>
      <hr/>
        <Header name = "himasnhu" title = "first name"/>
        <hr />
         <h1>this is my React JS application.</h1>
         <p>I am trying to learn react js.</p>
         <p>Becase I want to  learn frontend development.</p>
         <Header name = 'raj' title = "last name" />
    </div>
  
  );
}

export default App;
