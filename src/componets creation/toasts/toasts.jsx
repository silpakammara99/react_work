// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line no-unused-vars
import { errorToasts, successToasts } from './toast-helpers';

const CustomToasts=(prop)=>{
  const {message}=prop
    const notify = () => {
       // errorToasts("i am error","top-right")
        successToasts(message,"top-right")
        // }catch(err){
            
        // }

      };
    return(
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    )
}

export default CustomToasts