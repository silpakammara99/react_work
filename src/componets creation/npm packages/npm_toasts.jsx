
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toasters=()=>{
const notify=()=>{
    toast.success("Success Notification !", {
        position: "top-center"
      });
}

return(
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
)

}
export default Toasters