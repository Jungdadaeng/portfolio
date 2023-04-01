import { Container } from 'react-bootstrap';

export default function Footer(){
  return(
    <footer style={{backgroundColor:'black', width: '100%', height: '80px'}}>
      <Container>
        <div style={{textAlign:'center', padding: '20px'}}>
            © 2023. Jung Da Yoon. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
