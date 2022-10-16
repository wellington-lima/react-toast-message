import { useContext, useEffect } from "react";
import { FiAlertCircle, FiCheckCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";
import { AiFillCloseCircle }from "react-icons/ai";
import ToastContext, { ToastMessage } from "../context/toast";
import "./styles.css";

interface ToastProps {
  toastList: ToastMessage[];
}

const Toast = ({ toastList }: ToastProps) => {
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toastList) {
        if (toastList.length) {
          removeToast(toastList[0].id);
        }
      }
    }, (3000));

    return () => {
      clearTimeout(timer);
    }
  }, [toastList, removeToast]);

  const icons = {
    success: <FiCheckCircle size={20} />,
    danger: <FiAlertCircle size={20} />,
    info: <FiInfo size={20} />,
    warning: <FiAlertTriangle size={20} />,
  }

  const backgroundColor = {
    success: "#5cb85c",
    danger: "#d9534f",
    info: "#5bc0de",
    warning: "#f0ad4e",
  }

  return (
    <div className="container position">
      {
        toastList.map((toast) => (
          <div
            key={toast.id}
            className="notification toast position"
            style={{ backgroundColor: backgroundColor[toast.type || 'info'] }}
          >
            <button onClick={() => removeToast(toast.id)}>
              <AiFillCloseCircle size={24} />
            </button>

            <div>
              <p className="title">{icons[toast.type || 'info']}{toast.title}</p>
              <p className="description">{toast.description}</p>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Toast;