import './EmailViewer.css';

export default function EmailViewer({ email }) {
    if (!email) {
        return (
            <div className="emailviewer-container">
            <h2 className="emailviewer-title">Nenhum e-mail selecionado</h2>
            <p className="emailviewer-text">Clique em um e-mail na barra lateral para ler o conteúdo.</p>
        </div>
        );
    }

    return (
        <div className="emailviewer-container">
            <h2 className="emailviewer-title">{email.assunto}</h2>
            <div className="emailviewer-metadata">
                <span><strong>De:</strong> {email.remetente}</span>
                <span><strong>Data:</strong> {email.data}</span>
            </div>
            
            <div className="emailviewer-text">
                {email.corpo}
            </div>
        </div>
    );
}   