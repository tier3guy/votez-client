import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>,
);
