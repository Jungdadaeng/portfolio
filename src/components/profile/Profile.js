import './Profile.css'
export default function Profile(){
    return(
        <div>
            <h6>인적사항</h6>
            <table cellPadding={7} >
                <tr>
                    <td rowspan="5" width="100">
                        <img src="/images/profile.png"/>
                    </td>
                    <th>
                        이름
                    </th>
                    <td>
                        정다윤
                    </td>
                    <th >
                        지원분야
                    </th>
                    <td>
                        웹 개발자
                    </td>
                </tr>
                <tr>
                    <th>
                        생년월일
                    </th>
                    <td>
                        1997년 11월 21일
                    </td>
                    <th >
                        나이
                    </th>
                    <td>
                        만 25 세
                    </td>
                </tr>        
                <tr>
                    <th>
                        연락처
                    </th>
                    <td>
                        010-3953-1685
                    </td>
                    <th>
                        경력
                    </th>
                    <td>
                        2년 7개월
                    </td>
                </tr>
                <tr>
                    <th>
                        이메일
                    </th>
                    <td>
                        jungdayoonyi@gmail.com
                    </td>
                    <th >
                        주소
                    </th>
                    <td>
                        서울특별시 서초구 잠원동
                    </td>
                </tr>
            </table>
            <br/>
            <h6>학력사항</h6>
            <table cellPadding={7}>
                <tr>
                    <th>재학기간</th>
                    <th>학교명 및 전공</th>
                    <th>졸업여부</th>
                    <th>학점</th>
                    <th>소재지</th>
                </tr>
                <tr style={{textAlign:'center'}}>
                    <td>2018. 03 ~ 2018. 10</td>
                    <td>학점은행제 경영학</td>
                    <td>졸업</td>
                    <td>3.0 / 4.5</td>
                    <td>서울</td>
                </tr>
                <tr style={{textAlign:'center'}}>
                    <td>2016. 03 ~ 2018. 02</td>
                    <td>부산외국어대학교 한국어문화학부</td>
                    <td>중퇴</td>
                    <td></td>
                    <td>부산</td>
                </tr>     
                <tr style={{textAlign:'center'}}>
                    <td>2013. 03 ~ 2016. 02</td>
                    <td>창원토월고등학교</td>
                    <td>졸업</td>
                    <td></td>
                    <td>창원</td>
                </tr>   
            </table>
            <br/>
            <div style={{display:'flex', alignItems: 'center',}}>
                <h6>경력사항  <span style={{fontSize:'14px'}}>(전체 경력 : 2년 7개월)</span></h6>
            </div>
            <table cellPadding={7}>
                <tr>
                    <th style={{width: '100px'}}>근무기간</th>
                    <th style={{width: '100px'}}>근무회사</th>
                    <th style={{width: '130px'}}>부서</th>
                    <th style={{width: '100px'}}>직위</th>
                    <th style={{width: '250px'}}>담당직무</th>
                </tr>
                <tr style={{textAlign:'center'}}>
                    <td>2020. 03 ~ 2022.10</td>
                    <td>필라넷</td>
                    <td>그룹웨어1팀 </td>
                    <td>주임</td>
                    <td style={{width:"350px"}}>3년차 웹개발자로 그룹웨어 솔루션을 제공하는 IT 전문중소기업에서 웹과 앱 서비스를 개발/배포/운영하였습니다.</td>
                </tr>
            </table>
            <br/>
            <div>
                <h6>교육</h6> 
            </div>
            <table cellPadding={7}>
                <tr>
                    <th>기간</th>
                    <th>과정명</th>
                    <th>교육기관</th>
                </tr>
                <tr style={{textAlign:'center'}}>
                    <td>2019. 05 ~ 2019. 11</td>
                    <td>빅데이터 분석 및 스프링 프레임워크 기반 자바개발자 양성과정</td>
                    <td>아이티윌</td>
                </tr>
            </table>
            <br/>
            <h6>수행 프로젝트</h6>
            <table cellPadding={7}>
                <tr>
                    <th >회사명</th>
                    <td>(주)필라넷</td>
                    <th style={{width:'150px'}}>부서</th>
                    <td style={{width:'150px'}}>그룹웨어1팀</td>
                    <th style={{width:'100px'}}>직급</th>
                    <td style={{width:'100px'}}>주임</td>
                </tr>
                <tr>
                    <th style={{width:'170px'}}>프로젝트명</th>
                    <td style={{width:'500px'}}>[신영증권] 그룹웨어 리뉴얼 프로젝트</td>
                    <th style={{width:'200px'}}>프로젝트 기간</th>
                    <td style={{width:'270px'}}>2022. 03 ~ 2022. 06</td>
                </tr>
                <tr>
                    <th>주요역할 및 담당</th>
                    <td colSpan={4}>
                    - Vue.js, TypeScript를 활용한 그룹웨어 사이트 관리자 페이지,일정 페이지 개발<br/>
                    - 사용자 관점으로 기능을 추가하여 10% MAU 증가<br/>
                    - Vuex를 이용해 상태관리 및 서비스 분리<br/>
                    - REST API를 활용한 CRUD Operation 구현<br/>
                    - Git을 이용한 형상관리
                    </td>
                </tr>
                <tr>
                    <th style={{width:'150px'}}>프로젝트명</th>
                    <td>[이수그룹] 그룹웨어 구축</td>
                    <th style={{width:'150px'}}>프로젝트 기간</th>
                    <td>2021. 06 ~ 2021. 12</td>
                </tr>
                <tr>
                    <th>주요역할 및 담당</th>
                    <td colSpan={4}>
                    - Vue.js, TypeScript를 활용한 웹메일 조직도 페이지 개발<br/>
                    - Vuex를 이용해 상태관리 및 서비스 분리<br/>
                    - REST API를 활용한 CRUD Operation 구현<br/>
                    - Git을 이용한 형상관리
                    </td>
                </tr>
                <tr>
                    <th style={{width:'150px'}}>프로젝트명</th>
                    <td>[KT] EXO 웹메일 프로젝트</td>
                    <th style={{width:'150px'}}>프로젝트 기간</th>
                    <td>2020. 12 ~ 2021. 05</td>
                </tr>
                <tr>
                    <th >주요역할 및 담당</th>
                    <td colSpan={2}>
                    - Vue.js, TypeScript를 활용한 메일파트 개발<br/>
                    - Vuex를 이용해 상태관리 및 서비스 분리<br/>
                    - 전자메일의 exchange 서버 관리<br/>
                    - REST API를 활용한 CRUD Operation 구현
                    </td>
                </tr>
                <tr>
                    <th style={{width:'150px'}}>프로젝트명</th>
                    <td>[OB맥주] 그룹웨어 리뉴얼</td>
                    <th style={{width:'150px'}}>프로젝트 기간</th>
                    <td>2020. 06 ~ 2020. 12</td>
                </tr>
                <tr>
                    <th >주요역할 및 담당</th>
                    <td colSpan={2}>
                    - JQuery, JavaScript Version Upgrade<br/>
                    - ASP.NET, MSSQL을 사용해 페이지 개발<br/>
                    - Git을 이용한 형상관리<br/>
                    - REST API를 활용한 CRUD Operation 구현<br/>
                    </td>
                </tr>
            </table>
        </div>
    )
}