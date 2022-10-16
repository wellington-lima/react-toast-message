import { createContext, useCallback, useState } from 'react';
import ToastNotification from "../components/ToastNotification";
import { v4 as uuidv4 } from 'uuid';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'danger' | 'warning' | 'info';
  title?: string;
  description: string;
  duration?: number;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider =({ children }: any) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ type, title, description, duration }: Omit<ToastMessage, 'id'>) => {
    const id = uuidv4();

    const toast = {
      id,
      type,
      title,
      description,
    };
    
    setMessages((state) => [...state, toast]);
  }, []);
  
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return(
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastNotification toastList= {messages} />
    </ToastContext.Provider>
  );
}

export { ToastProvider }

export default ToastContext;