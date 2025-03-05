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
            <div style={{ borderRadius: "15px", overflow: "hidden" }}>
                <img 
                    src="/assets/about.jpg" 
                    alt="photo_about_me"
                    style={{
                        height: "330px",  
                        width: "100%",   
                        objectFit: "cover",  //couvre toute la zone sans déformation
                        objectPosition: "center -20px",  // Décale l'image vers le bas, coupant 20px du bas
                    }} 
                />
            </div>
            <h3 style={{ textAlign: 'left', marginBottom: '20px' }}>Mes compétences</h3>
            {competences.map((competence, index) => (
                <div key={index} style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ fontWeight: 600 }}>
                            {competence.label}
                        </label>
                        <span style={{ fontWeight: 600, marginLeft: '10px' }}>
                            {competence.value}%
                        </span>
                    </div>
                    <ProgressBar
                        now={competence.value}
                        variant={competence.color}
                        style={{ height: '15px', borderRadius: '30px' }}
                    />
                </div>
            ))}
        </Container>
    );
}

export default Competences;
