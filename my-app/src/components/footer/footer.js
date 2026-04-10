import "./footer.css";

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <div className="footer">
            <p>© {currentYear} Сайт создан: Пономарева Екатерина Романовна</p>
        </div>
    )
}