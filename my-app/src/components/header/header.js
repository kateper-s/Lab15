import {Link} from 'react-router-dom';
import './header.css';

export function Header() {
    return (
        <div className="header">
            <nav>
            <Link to="/news">Новости</Link>
            <Link to="/about">О проекте</Link>
            <Link to="/contacts">Контакты</Link>
        </nav>
        </div>
    )
}