import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function Project(){
    const onClickDetail = (url) => {
        console.log(url);
        window.location.href = url;
    }
    const projects = [
        {
            url: 'https://dayoonyicyworld.vercel.app/',
            title: 'Cyworld Project',
            contents: `html,css,javascript,react.js를 사용하여 싸이월드를 재현해 보았습니다.
            홈화면에는 유튜브 동영상이 재생되며 게임탭에 끝말잇기 게임과 로또 랜덤 번호 뽑기 게임 기능을 구현하였습니다.`,
            src: '/images/cyworld.png',
        },
        {
            url: 'https://dayoonyi-todolist.vercel.app/',
            title: 'ToDoList Project',
            contents: `React,styled-components를 사용하여 할일 목록을 관리할 수 있는 웹페이지를 개발하였습니다.
            할일 목록 조회,할일 완료,추가,삭제 기능이 있습니다.
            완료한 항목은 클릭 시, 완료되어 할일 목록에서 완료된 처리가 된 것을 확인할 수 있습니다.`
            ,
            src: '/images/todos.png',
        },
        {
            url: '',
            title: 'Sports Challenge Project',
            contents: `React의 상태관리 방법 중 하나인 Redux를 사용하여 스쿼트 개수를 관리할 수 있는 웹페이지를 개발하였습니다.
            스쿼트 실행, 취소, 히스토리 조회 기능이 있습니다.`,
            src: '/images/wait.png',
        },
        {
            url: '',
            title: '맛집찾기 Project',
            contents: `React,KakaoMap API를 사용하여 맛집을 마크할 수 있는 웹페이지를 개발하였습니다.
            맛집추가,수정,삭제,히스토리 조회 기능이 있습니다.`,
            src: '/images/wait.png',
        },
    ]
    return(
        <div className='wrapper'>
            <Row xs={1} md={3} className="g-4">
                {projects.map((project, idx) => (
                    <Col key={idx}>
                    <Card style={{height: '100%'}}>
                        <Card.Img variant="top" src={project.src} />
                        <Card.Body>
                        <Card.Title style={{textAlign:'left'}}>{project.title}</Card.Title>
                        <Card.Text style={{paddingLeft:'10px', whiteSpace:'pre-line'}}>
                            {project.contents}
                        </Card.Text>
                        <Button style={{paddingLeft:'13px'}} variant="primary" onClick={()=>{onClickDetail(project.url)}}>자세히 보기 ▶ README</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}