import './Sidebar.css';

export default function Sidebar({ emails, onEmailSelect }) {
    return (
        <div className="sidebar-container">
            <h2 className="sidebar-title">Inbox (.msg)</h2>
            <div className="sidebar-list">
                {emails.map(email => (
                    <div key={email.id}
                    className="sidebar-item"
                    onClick={() => onEmailSelect(email)}>
                        <strong>{email.assunto}</strong>
                        <br />
                        <span>{email.remetente}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}