
# 세팅 순서

프론트는
1. 비쥬얼 스튜디오 설치
2. 깃 설치 
3. 노드 설치
4. 깃 허브 연결
5. 깃배시 입력 해야 커밋푸시 가능->git config --global user.name "moonseongmin97" && git config --global user.email "wja04097@naver.com"
6. 비쥬얼 스튜디오에서 npm install ? 
7. npm run start  >


백엔드 연결 순서
1. 이클립스 다운로드  -> 스프맅부트 설치 (help > 마켓> 스프링 > 젤 인기많은걸로 )
2. jdk 11 설치
3. postsql 설치 
4. postsql jdbc 연결 (프로젝트 우클릭 > 빌드패스> 익스터널 액티브 뭐시기> 자르 추가 후 빌드패스 젤 밑에꺼에서 라이브러리 추가된지 확인)
5. 데이터 복제는 나중에 하자 


#덤프 백업 및 세팅 하는법
덤프 세팅
1. C:\Program Files\PostgreSQL\14\bin  (덤프는 해당 경로로 이동 시켜야함)
-> 관리자 cmd로 pg_restore -U postgres -h localhost -p 5432 -d DONATE_DB1 -c -F c DONATE_DB1_backup.dump
비번 입력1111

덤프 백업
1. C:\Program Files\PostgreSQL\14\bin    (덤프는 내스토리지에 옮겨야함)
->관리자 cmd로 pg_dump -U postgres -h localhost -p 5432 -d DONATE_DB1 -F c -f DONATE_DB1_backup.dump
비번 입력1111




1. 기획

 - 기부사이트

 -후원 금액 전액 기부 (실제로 봉사지로 가 봉사 + 기부물품 전달)

 -개인 수익은 광고
 
 -홍보는 유튜브 개설 + 사이트에 유튜브 영상 올리기(숏츠도 좋을듯?)
 
 -채팅으로 실시간 소통 가능 , 좋은 글귀 등 후원뿐만 아니라 마음이 힘든 사람들도 치유
 
 -추가 기능은 생각
 
- 후원받는데 세금이나? 법적이 규제? 생각해보자


2. 개발
   리액트 (템플릿은 부트스트랩ㅋ)
   자바(jpa 연동)
   mysql
   redis 
   서버는 우선 내 컴퓨터로 세팅해본다(웹서버 , wa서버 ,redis 서버 , db서버 , )
   + 디자이너는... 구해볼까 생각중 프론트앤드로....


4.  향 후 개발 계획
    앱 개발 (aos , ios)
    
   
