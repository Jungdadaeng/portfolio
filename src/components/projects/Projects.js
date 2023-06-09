import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function Project(){
    const projects = [
        {
            title: '싸이월드 프로젝트',
            contents: `React의 상태관리 방법 중 하나인 Redux를 사용하여 할일 목록을 관리할 수 있는 웹페이지를 개발하였습니다.
            할일추가,수정,삭제,히스토리 조회 기능이 있습니다.`,
            src: '/images/cyworld.png',
        },
        {
            title: 'ToDoList Project',
            contents: `React의 상태관리 방법 중 하나인 Redux를 사용하여 할일 목록을 관리할 수 있는 웹페이지를 개발하였습니다.
            할일추가,수정,삭제,히스토리 조회 기능이 있습니다.`,
            src: '/images/todos.png',
        },
        {
            title: 'Sports Challenge Project',
            contents: `React의 상태관리 방법 중 하나인 Redux를 사용하여 할일 목록을 관리할 수 있는 웹페이지를 개발하였습니다.
            할일추가,수정,삭제,히스토리 조회 기능이 있습니다.`,
            src: '/images/wait.png',
        },
        {
            title: '카카오 지도 API 연동 프로젝트',
            contents: `React의 상태관리 방법 중 하나인 Redux를 사용하여 할일 목록을 관리할 수 있는 웹페이지를 개발하였습니다.
            할일추가,수정,삭제,히스토리 조회 기능이 있습니다.`,
            src: '/images/wait.png',
        },
    ]
    return(
        <div className='wrapper'>
            <Row xs={1} md={3} className="g-4">
                {projects.map((project, idx) => (
                    <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src={project.src} />
                        <Card.Body>
                        <Card.Title style={{textAlign:'left'}}>{project.title}</Card.Title>
                        <Card.Text style={{paddingLeft:'10px', whiteSpace:'pre-line'}}>
                            {project.contents}
                        </Card.Text>
                        <Button style={{paddingLeft:'13px'}} variant="primary">자세히 보기 ▶ README</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}