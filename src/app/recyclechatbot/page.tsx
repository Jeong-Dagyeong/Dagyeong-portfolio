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
          href="/dk_portfolio"
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
                'React-Chatbotify(오픈소스 라이브러리)를 활용한 프론트엔드 개발',
                'Flask(플라스크)를 활용한 사용자 요청처리',
                'YOLO모델을 활용한 실식간 이미지 분류',
                'AWS EC2서버를 활용한 서버관리 및 서비스 배포',
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
            <p>
              챗봇을 처음 기획할 때, 사용자가 이미지를 보내면 해당 쓰레기의 배출 방법을 알려주는 방식으로 이미지 첨부
              기능을 구현하였습니다. 예를 들어, 사용자가 플라스틱 병뚜껑 이미지를 보내면 이를 분석하여 배출 방법을
              안내하는 구조였습니다.
            </p>
            <p>
              그러나 이는 `챗봇이 텍스트 출력 외에도 AI로 이미지 처리를 할 수 있도록 해보자`는 목적에서 출발하였고, 기능
              자체의 목적이 명확하지 않았습니다. 결국, 서비스가 제공해야 할 기능보다는 적용하고 싶은 ‘기술’에 집중하게
              된 것이 문제였습니다. 기능의 방향성이 잘못되었다는 점을 깨닫고, 회의를 통해 이미지 첨부 기능의 역할을
              변경하였습니다.
            </p>
            <p>
              일반적인 재활용품은 종류가 다양하고 많은 사람들이 어느 정도 배출 방법을 알고 있다고 판단하였습니다. 이에
              팀원 중 한 명이 대형 폐기물을 버리는 과정에서 실제로 겪었던 불편함을 바탕으로 개선 방향을 설정하였고,
              지역구마다 폐기물의 기준(규격 등)과 수수료가 다르다는 점을 고려하여, 챗봇을 통해 대형 폐기물 정보를
              제공하도록 변경하였습니다.
            </p>
            <p>
              최종적으로 AI를 활용하여 대형 폐기물 이미지를 처리하는 방향으로 결정하였으며, 일부 지역과 폐기물을
              대상으로 샘플 모델을 제작하여 적용하였습니다. 이 경험을 통해 기획 단계에서 기능의 존재 이유와 근거가
              명확해야 하며, 그렇지 않으면 단순히 기술을 적용하기 위한 개발로 이어져 서비스 품질이 저하될 수 있다는 점을
              크게 깨닫게 되었습니다.
            </p>
          </div>
          <p className="text-xl font-semibold text-yellow-300 mt-4">이미지 변환</p>
          <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
            <p>이미지 변환 과정에서 백엔드 팀원들과 많은 논의를 거쳤으며, 다양한 시도를 진행하였습니다.</p>
            <p>
              처음에는 프론트엔드에서 사진 파일을 그대로 백엔드로 전송한 후, 백엔드에서 해당 사진을 가공하여 데이터를
              반환하는 방식을 사용하였습니다. 그러나 이 방식에서는 한 개 이상의 사진을 전송할 때마다 pending 오류가
              발생하는 문제가 있었습니다.
            </p>
            <p>
              두 번째 방법으로, 프론트엔드에서 이미지 파일을 base64로 인코딩한 후 formData로 변환하여 백엔드로 전송하는
              방식을 시도하였습니다. 이 방식에서는 백엔드가 해당 이미지를 받아 디코딩한 후, YOLO 모델을 활용하여 처리한
              결과를 프론트엔드로 반환하는 구조였습니다.
            </p>
            <p>
              그러나 이 방식에서도 동일하게 2개 이상의 이미지를 전송할 경우 pending 오류가 발생하였으며, AWS CPU
              사용률이 90% 이상 치솟는 문제가 확인되었습니다. 이에 따라, 보다 효율적인 해결 방법을 모색하였습니다.
            </p>
            <p>
              마지막으로 시도한 방법은 프론트엔드에서 이미지 파일의 용량을 줄여 전송하는 방식이었습니다.
              react-image-file-resizer라는 이미지 리사이징 라이브러리를 사용하였는데, 이 라이브러리는 이미지 크기를
              조절할 뿐만 아니라 출력 타입을 blob 또는 base64로 변환하여 전송할 수 있다는 장점이 있었습니다.
            </p>
            <p>
              최종적으로 해당 방식을 적용한 결과, CPU 사용률이 30% 이내로 현저히 감소하였으며, pending 오류 또한 해결할
              수 있었습니다.
            </p>
          </div>
          <p className="text-xl font-semibold text-yellow-300 mt-4">User Input(채팅) 처리 방식 변경</p>
          <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
            <p>
              처음에는 각각의 컴포넌트에서 채팅 관련 코드를 개별적으로 관리하였습니다. 그러나 이 방식이 비효율적이라고
              판단하였고, 공식 문서를 참고하여 상위 컴포넌트에서 사용자 입력(input)을 처리하는 방식으로 변경하였습니다.
            </p>
            <p>
              이후 채팅을 입력할 때 말풍선이 두 번씩 전송되는 문제가 발생하였습니다. 멘토님과 함께 코드를 확인한 결과,
              함수의 마지막에 return을 적지 않은 것이 원인이었으며, 이를 통해 return의 중요성을 다시 한번 깨닫게
              되었습니다.
            </p>
            <p>
              그러나 이후 일부 구간에서는 채팅이 정상적으로 한 번만 전송되었지만, 다른 구간에서는 아예 전송이 되지 않는
              문제가 발생하였습니다. 확인해 본 결과, 이전 입력된 채팅 내용이 중복 전송되거나, 빈 값이 전송되거나, 두
              번째 입력만 전송되는 등 다양한 문제가 발생하고 있었습니다.
            </p>
            <p>
              처음에는 내장 매개변수 params와 useState의 setForm을 혼용하여 채팅 input을 저장하였으나, 이를 모두
              setForm을 사용하여 저장하는 방식으로 통일하였습니다.
            </p>
            <p>
              기존 코드에서는 공식 문서의 flow를 참고하여 message를 통해 API와 통신하고 채팅을 처리하였으나, 새로운
              방식에서는 함수를 활용하여 채팅 내용을 저장하고, 이후 컴포넌트를 활용하여 통신 시 채팅 데이터를 함께
              전송한 후 초기화하는 방식으로 구현하였습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
