import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AdminApp from './admin/AdminApp';
import './index.css';

const isAdmin = window.location.pathname.replace(/\/+$/, '') === '/admin';
createRoot(document.getElementById('root')!).render(isAdmin ? <AdminApp /> : <App />);
