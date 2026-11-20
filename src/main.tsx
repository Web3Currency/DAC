import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AdminApp from './admin/AdminApp';
import './index.css';

const isAdmin = window.location.pathname.replace(/\/+$/, '') === '/admin';
if (isAdmin) {
  document.title = 'Admin | Demola Adetola & Co.';
  let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots); }
  robots.content = 'noindex, nofollow';
}
createRoot(document.getElementById('root')!).render(isAdmin ? <AdminApp /> : <App />);
