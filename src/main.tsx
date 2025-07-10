import { createRoot } from 'react-dom/client'
import './assets/styles/main.scss'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
const isProd = import.meta.env.MODE === 'production'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={isProd ? '/red-cube-factory' : '/'}>
        <App />
    </BrowserRouter>,
)
