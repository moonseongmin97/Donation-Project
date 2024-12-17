import { useEffect } from 'react';
import { useSearchParams ,useNavigate } from 'react-router-dom';
import ApiCall from '../Common/ApiCall';


const KakaoRedirect = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      // 인가 코드를 백엔드로 전달
         ApiCall({
          url: '/api/auth/kakao',
          method: 'post',
          payload: { code },
          onSuccess: sucessHandle,
          //onError: {},
        });


    }
  }, [code]);

  const sucessHandle = function(data){
    console.log('사용자 정보:', data);
    navigate('/home');

  }

  return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoRedirect;
