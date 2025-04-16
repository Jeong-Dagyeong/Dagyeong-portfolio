import Link from 'next/link'

export default function recyclechatbot() {
  function getMethodStyle(method: string) {
    switch (method.toLowerCase()) {
      case 'get':
        return 'text-green-400'
      case 'post':
        return 'text-yellow-400'
      case 'patch':
        return 'text-orange-400'
      case 'delete':
        return 'text-red-400'
      default:
        return 'text-white'
    }
  }

  return (
    <div className="max-w-screen-lg mx-auto px-8 py-12 text-white">
      <div className="relative w-full">
        <Link
          href="https://dagyeong-portfolio.vercel.app"
          className="absolute right-0 text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit"
        >
          메인으로
        </Link>
      </div>

      {/* 제목 */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-between w-full max-w-xs mb-1">
          <h1 className="text-4xl font-bold text-yellow-400 text-center">Recycle ChatBot</h1>
        </div>
        <span className="tracking-wide mb-12 text-xs underline underline-offset-8">
          2024년 「미래내일 일경험사업」 우수사례 공모전 - 프로젝트 분야 본선진출한 개발물 입니다.
        </span>
      </div>

      {/* 프로젝트 추진 배경 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">프로젝트 추진 배경</h2>
        <h2 className="text-xl font-bold mb-4 text-yellow-300">아이디어 발전과정</h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          현재 많은 시청과 구청에서 자주 들어오는 민원과 행사 정보를 안내하는 챗봇을 제공하고 있음을 확인하였습니다.
          그중 익산시의 ‘폐기물 민원 안내 챗봇’이 폐기물 관련 정보를 효과적으로 제공하는 점에 착안하여, 재활용품
          지원정책에 특화된 챗봇을 기획하게 되었습니다.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          익산시 챗봇은 일반 민원 처리는 어렵지만, 재활용품 지원정책 및 폐기물 관련 정보를 보다 쉽게 확인할 수 있다는
          장점이 있음을 파악하였습니다. 특히, 지역마다 수거 품목과 보상 기준이 달라 주민들이 직접 구청 홈페이지에서
          확인해야 하는 불편함을 줄이기 위해 챗봇을 통해 정보를 제공하는 방식이 효과적이라고 판단하였습니다.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          이에 따라, 시민들이 우유팩, 페트병, 폐건전지 등을 제출하면 보상받을 수 있는 ‘재활용품 지원정책’을 쉽게
          안내하는 챗봇을 개발하고자 하였습니다.
        </p>
      </section>

      <section className="mb-12">
        {/* 개발 기간 */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-yellow-400">개발 기간</h3>
          <p className="mt-2 text-gray-300 text-lg">2024.07.08 ~ 2024.09.13 (10주)</p>
        </div>

        {/* 팀원 및 역할 분담 */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-yellow-400">팀원 및 역할 분담</h3>
          <div className="mt-4 overflow-hidden border border-gray-500 rounded-lg">
            <table className="w-full text-left text-gray-300">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-3">이름</th>
                  <th className="px-6 py-3">담당</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: '김채린(팀장)', role: 'PM(Product Manager)' },
                  { name: '정다경', role: 'Front-end & UX & UI' },
                  { name: '김지현', role: 'Back-end & AI' },
                  { name: '유주아', role: 'Back-end' },
                ].map((member, index) => (
                  <tr key={index} className="border-t border-gray-600">
                    <td className="px-6 py-3">{member.name}</td>
                    <td className="px-6 py-3">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 일정 관리 */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">일정 관리</h2>
        <div className="mt-6">
          <p className="mt-4 text-gray-300 leading-relaxed">
            주 2회 정기적인 회의를 하면서 <span className="font-semibold text-yellow-300">노션</span>을 이용하여
            회의록을 작성하였고,
            <span className="font-semibold text-yellow-300"> 보드 기능</span>을 활용하여 Jira처럼 PM, Front-end,
            Back-end와 일정을 공유하였습니다.
          </p>
        </div>
        <div className="mt-6 flex gap-4">
          <img src="/plan1.png" alt="일정관리1" className="w-1/2 rounded-lg shadow-lg" />
          <img src="/plan2.png" alt="일정관리2" className="w-1/2 rounded-lg shadow-lg" />
        </div>
      </section> */}

      {/* 주요 기능 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">주요 기능</h2>
        <div className="mt-4 overflow-hidden border border-gray-500 rounded-lg">
          <table className="w-full text-left text-gray-300">
            <tbody>
              {[
                '지역별로 상이한 재활용품 수거 품목과 기준, 보상품 정보를 안내',
                '이미지 첨부 시 대형폐기물의 수수료 정보를 간편하게 제공',
                'React-Chatbotify(오픈소스 라이브러리)를 활용한 프론트엔드 개발',
                'react-image-file-resizer 라이브러리를 사용한 이미지 처리',
                'Netlify를 이용한 프론트엔드 배포',
              ].map((item, index) => (
                <tr key={index} className="border-t border-gray-600">
                  <td className="px-6 py-3">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 개발 도구 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">개발 도구</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Front-end 테이블 */}
          <div className="overflow-hidden border border-gray-500 rounded-lg">
            <h3 className="bg-gray-800 text-white text-xl font-bold px-6 py-3">Front-end</h3>
            <table className="w-full text-left text-gray-300">
              <tbody>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">React Chatbotify (오픈소스 라이브러리)</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">React</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Typescript</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">CSS</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Netlify</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Back-end 테이블 */}
          <div className="overflow-hidden border border-gray-500 rounded-lg">
            <h3 className="bg-gray-800 text-white text-xl font-bold px-6 py-3">Back-end</h3>
            <table className="w-full text-left text-gray-300">
              <tbody>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Flast</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Python 및 Google Colab</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">AWS</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">YOLO 모델</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* API 명세 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">API 명세</h2>
        <div className="mt-6 overflow-hidden border border-gray-500 rounded-lg">
          <table className="w-full text-left text-gray-300">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3">기능</th>
                <th className="px-6 py-3">Method</th>
                <th className="px-6 py-3">URL</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: '재활용 정책', method: 'post', url: '/chatbot/policy' },
                { feature: '사진 업로드', method: 'post', url: '/chatbot/upload' },
                { feature: '사용자 입력', method: 'post', url: '/chatbot/chat' },
              ].map((api, index) => (
                <tr key={index} className="border-t border-gray-600">
                  <td className="px-6 py-3">{api.feature}</td>
                  <td className={`px-6 py-3 font-bold uppercase ${getMethodStyle(api.method)}`}>{api.method}</td>
                  <td className="px-6 py-3 text-blue-400">{api.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 챗봇 디자인 */}
      <section className="mb-12">
        <div className="flex">
          <h2 className="text-3xl font-bold text-yellow-400">와이어 프레임</h2>
        </div>
        <div>
          <img src="/wireframe.jpeg" alt="와이어프레임" className="mt-4 w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* 개발 결과물 */}
      <section className="mb-12">
        <div className="flex">
          <p className="text-3xl font-bold text-yellow-400">개발 결과물 및 트러블슈팅</p>
          <Link
            href="https://greenseoulbot.netlify.app/"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            Recycle ChatBot (Web)
          </Link>
          <Link
            href="https://github.com/Jeong-Dagyeong/RecycleChatBot_frontend"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            Recycle ChatBot (Github)
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=Rp4eszgGWuE"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            Recycle ChatBot (영상)
          </Link>
        </div>
        {/* 챗봇 사용방법 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full max-w-6xl mx-auto p-6 text-gray-300">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src="/recycle/recycle_main.png" alt="챗봇 메인" className="w-[350px] h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">챗봇 메인 및 사용방법</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                챗봇의 메인 화면에는 ‘사용방법’, ‘재활용품 지원 정책’, ‘이미지로 대형폐기물 수수료 알아보기’라는 세 가지
                버튼을 만들어 사용자가 선택 할 수 있도록 구현하였습니다.
              </li>
              <li>
                새로고침 버튼을 추가하는 대신, 답변이 출력된 후에는 처음으로 돌아갈 수 있는 ‘처음으로’ 버튼이 항상
                나타나도록 만들어 사용자가 쉽게 조작할 수 있도록 구현하였습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full max-w-6xl mx-auto p-6 text-gray-300">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src="/recycle/recycle_use.png" alt="챗봇 사용설명" className="w-[350px] h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                ‘사용방법’ 버튼은 챗봇에 대한 설명이 더 필요한 사용자에게 제공되며, 서울시 각 구의 재활용품 지원정책을
                알고 싶은 사용자는 ‘재활용품 지원 정책’ 버튼을, 폐기가 필요한 대형 폐기물의 수수료를 알고싶은 사용자는
                ‘이미지로 대형폐기물 수수료 알아보기’ 버튼을 통해 필요한 정보를 제공받을 수 있도록 구현하였습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full max-w-6xl mx-auto p-6 text-gray-300">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src="/recycle/recycle_districts.png" alt="구 선택" className="w-[350px] h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">재활용품 지원정책 안내 기능</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>서울시의 모든 구를 나타내기 위해서 체크박스로 선택할 수 있도록 구현하였습니다.</li>
              <li>구를 선택하지 않으면 다음 기능으로 넘어가지 않도록 구현하였습니다.</li>
              <li>선택한 구는 setForm에 담겨 백엔드와 통신합니다.</li>
              <li>결과값으로는 그에 맞는 재활용 정책과 선택한 구 홈페이지 바로가기 정보를 제공합니다.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full max-w-6xl mx-auto p-6 text-gray-300">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/recycle/recycle_districts_result.png"
              alt="정책정보 결과"
              className="w-[350px] h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="list-disc pl-5 space-y-3">
              <li>‘재활용품 지원정책’ 버튼을 누르면 district_name:성동구 라는 JSON 형태로 서버에 전송됩니다.</li>
              <li>
                백엔드는 RAG(Retrieval-Augmented Generation) 기술을 사용하여 PM에게 미리 제공받은 정보와 벡터DB를
                이용하여 GPT 모델이 정보를 검색할 수 있는 데이터 저장소를 구축하고 그 안에서 정보를 검색한 후, 이를
                기반으로 답변을 생성합니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full max-w-6xl mx-auto p-6 text-gray-300">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src="/recycle/recycle_input.png" alt="유저 인풋" className="w-[350px] h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              사용자 입력(User Input)을 통한 재활용품 지원정책 안내 기능
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                모든 상황에서 채팅을 활성화 시키기 위해 제일 상단의 컴포넌트에 user input 관련 코드를 구현하였습니다.
              </li>
              <li>
                채팅창은 구 선택, 이미지 첨부 할 때를 제외하곤 모두 활성화 되어있어, 사용자가 원하는 정보를 얻은 후에도
                채팅 형식으로 다른 구의 재활용품 정책 정보를 추가로 얻을 수 있도록 구현하였습니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full max-w-6xl mx-auto p-6 text-gray-300">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/recycle/recycle_image_result.png"
              alt="유저 인풋"
              className="w-[350px] h-auto rounded-lg shadow-lg"
            />
            {/* <img
              src="/recycle/recycle_image_result1.png"
              alt="유저 인풋"
              className="w-[350px] h-auto rounded-lg shadow-lg"
            /> */}
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">이미지 처리를 통한 대형폐기물 수수료 안내 기능</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                사용자가 구 선택 후 대형 폐기물 이미지를 첨부하면, 해당 이미지는 규격 가로, 세로 640px 크기의 JPEG
                파일로 변환되며, base64형태로 출력된다. 그리고 formData 형식으로 백엔드에 전달하게 됩니다.
              </li>
              <li>
                사용자가 첨부한 사이즈와 형식을 조절하기 위해 이미지 리사이징 라이브러리인 react-image-file-resizer를
                사용하였습니다.
              </li>
              <li>
                결과는 백엔드에서 보내주는 이미지 판별 결과에 따라 대형 폐기물 수수료 정보와 선택한 구의 구청 홈페이지
                및 URL 정보가 함께 제공됩니다.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full max-w-6xl mx-auto p-6 text-gray-300">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/recycle/recycle_image_result1.png"
              alt="유저 인풋"
              className="w-[350px] h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            {/* <h2 className="text-xl font-bold mb-4 text-yellow-300">이미지 처리를 통한 대형폐기물 수수료 안내 기능</h2> */}
            {/* <ul className="list-disc pl-5 space-y-3">
              <li>
                사용자가 구 선택 후 대형 폐기물 이미지를 첨부하면, 해당 이미지는 규격 가로, 세로 640px 크기의 JPEG
                파일로 변환되며, base64형태로 출력된다. 그리고 formData 형식으로 백엔드에 전달하게 됩니다.
              </li>
              <li>
                사용자가 첨부한 사이즈와 형식을 조절하기 위해 이미지 리사이징 라이브러리인 react-image-file-resizer를
                사용하였습니다.
              </li>
              <li>
                결과는 백엔드에서 보내주는 이미지 판별 결과에 따라 대형 폐기물 수수료 정보와 선택한 구의 구청 홈페이지
                및 URL 정보가 함께 제공됩니다.
              </li>
            </ul> */}
          </div>
        </div>
        {/* 트러블 슈팅 섹션 */}
        <div className="mt-8 text-left">
          <p className="text-2xl font-semibold text-yellow-300 mb-4">문제해결 과정 및 트러블 슈팅</p>
          <p className="text-xl font-semibold text-yellow-300">이미지 처리 방향성 변경</p>
          <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
            <p className="text-l font-semibold text-yellow-200">[문제점]</p>
            <p>
              초기에는 사용자가 이미지를 보내면 해당 쓰레기의 배출 방법을 안내하는 기능을 기획했습니다. 그러나 이 기능은
              기술 적용 자체에 초점이 맞춰졌고, 실제 사용자에게 필요한 기능은 아니었습니다.
            </p>
            <p className="text-l font-semibold text-yellow-200">[해결]</p>
            <p>
              회의를 통해 기능의 방향성을 재조정하였고, 제가 겪었던 실제 불편을 바탕으로 대형 폐기물 정보 제공 기능으로
              전환하였습니다. 지역별로 다른 폐기물 규정과 수수료 정보를 챗봇이 안내하도록 변경하고, 일부 지역과 품목에
              대해 AI 기반 이미지 인식 모델도 적용하였습니다.
            </p>
            <p className="text-l font-semibold text-yellow-200">[회고]</p>
            <p>
              기능은 기술보다 사용자의 필요에 기반해야 한다는 점을 배웠습니다. 목적이 불분명한 기술 적용은 오히려 서비스
              품질을 저하시킬 수 있으며, 앞으로는 문제 해결 중심의 기획을 우선시하겠습니다.
            </p>
          </div>
          <hr className="mt-4" />
          <p className="text-xl font-semibold text-yellow-300 mt-4">이미지 변환</p>
          <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
            <p className="text-l font-semibold text-yellow-200">[문제점]</p>
            <p>
              이미지 전송 및 분석 기능 구현 과정에서, 사진을 그대로 전송하거나 base64로 인코딩해 전달할 경우 2개 이상의
              이미지 처리 시 pending 오류가 발생하였고, AWS CPU 사용률이 90% 이상 급등하는 문제가 있었습니다.
            </p>
            <p className="text-l font-semibold text-yellow-200">[해결]</p>
            <p>
              백엔드와 협업하여 다양한 방식으로 테스트를 진행한 끝에, 프론트엔드에서 react-image-file-resizer
              라이브러리를 활용해 이미지 용량을 줄여 전송하는 방식을 적용했습니다. 이미지 크기 최적화와 전송 방식 개선을
              통해 백엔드 부하를 줄이고 처리 안정성을 확보할 수 있었습니다.
            </p>
            <p className="text-l font-semibold text-yellow-200">[회고]</p>
            <p>
              기능 구현 시 성능 문제를 함께 고려하는 것이 중요하다는 점을 배웠습니다. 단순히 작동하는 것에 그치지 않고,
              서비스의 안정성과 자원 효율성까지 고민하는 태도가 필요함을 실감했습니다.
            </p>
          </div>
          <hr className="mt-4" />
          <p className="text-xl font-semibold text-yellow-300 mt-4">User Input(채팅) 처리 방식 변경</p>
          <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
            <p className="text-l font-semibold text-yellow-200">[문제점]</p>
            <p>
              처음에는 각 컴포넌트에서 채팅 관련 로직을 분산해 관리했지만, 유지보수가 어렵고 비효율적이라는 판단 하에
              상위 컴포넌트에서 사용자 입력을 처리하도록 구조를 변경하였습니다. 이후 말풍선이 두 번씩 출력되거나, 입력이
              전송되지 않는 등 다양한 채팅 입력 오류가 발생했으며, 이는 return 누락, 상태관리(setState)의 불일치 등으로
              인한 것이었습니다.
            </p>
            <p className="text-l font-semibold text-yellow-200">[해결]</p>
            <p>
              문제의 원인을 함수 흐름과 상태관리 방식에서 찾았고, params와 useState를 혼용하던 구조를 setForm으로
              통일하여 상태 불일치를 해소하였습니다. 또한, 채팅 전송 구조를 리팩토링하여, 사용자 입력을 저장한 후 API
              호출 시 함께 전송하고 초기화하는 방식으로 구현하여 안정적인 전송 흐름을 확보했습니다.
            </p>
            <p className="text-l font-semibold text-yellow-200">[회고]</p>
            <p>
              이 경험을 통해 함수의 흐름과 상태관리 일관성의 중요성을 실감했습니다. 공식 문서의 권장 방식을 따르되, 실제
              서비스 흐름에 맞는 구조를 스스로 고민하고 구현해야 한다는 점을 배웠습니다.
            </p>
          </div>
        </div>
      </section>
      <div className="relative w-full">
        <Link
          href="https://dagyeong-portfolio.vercel.app/greenseoulbot"
          className="absolute right-0 text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit"
        >
          Next (Green Seoul Bot)
        </Link>
      </div>
    </div>
  )
}
