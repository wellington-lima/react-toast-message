import { useContext } from 'react';
import ToastContext from './context/toast';
import './App.css'

function App() {
  const { addToast } = useContext(ToastContext);

  const showToast = (type: string) => {
    switch(type) {
      case "success":
        addToast({
          type: 'success',
          title: 'Toast Success',
          description: 'Description toast success'
        });
        break;

      case "danger":
        addToast({
          type: 'danger',
          title: 'Toast Danger',
          description: 'Description toast danger'
        });
        break;

      case "warning":
        addToast({
          type: 'warning',
          title: 'Toast Warning',
          description: 'Description toast warning'
        });
        break;

      case "info":
        addToast({
          type: 'info',
          title: 'Toast Info',
          description: 'Description toast info'
        });
        break;
    }
  }

  return (
    <>
      <div className="main-container">
        <h1>Toast</h1>

        <div>
          <button className="success" onClick={() => showToast("success")}>Success</button>
          <button className="danger" onClick={() => showToast("danger")}>Danger</button>
          <button className="warning" onClick={() => showToast("warning")}>Warning</button>
          <button className="info" onClick={() => showToast("info")}>Info</button>
        </div>
      </div>
    </>
  )
}

export default App
