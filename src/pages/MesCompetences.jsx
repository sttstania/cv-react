import { Container, ProgressBar } from "react-bootstrap";

function Competences() {
    const competences = [
        { label: 'HTML5', value: 90, color: 'danger' },
        { label: 'CSS3', value: 80, color: 'info' },
        { label: 'JAVASCRIPT', value: 70, color: 'warning' },
        { label: 'PHP', value: 60, color: 'success' },
        { label: 'REACT', value: 50, color: 'primary' },
    ];

    return (
        <Container>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Mes compétences</h3>
            {competences.map((competence, index) => (
                <div key={index} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                    <label style={{ fontWeight: 'bold', flex: 1 }}>
                        {competence.label}
                    </label>
                    <span style={{ marginLeft: '10px', fontWeight: 'bold', flex: 0 }}>
                        {competence.value}%
                    </span>
                    <ProgressBar
                        now={competence.value}
                        variant={competence.color}
                        style={{ height: '25px', borderRadius: '30px', flex: 2, marginLeft: '10px' }}
                    />
                </div>
            ))}
        </Container>
    );
}

export default Competences;
