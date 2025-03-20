import Link from 'next/link'

export default function GreenSeoulBot() {
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
          <h1 className="text-4xl font-bold text-yellow-400 text-center">Green Seoul Bot</h1>
        </div>
        <span className="tracking-wide mb-12 text-xs underline underline-offset-8">
          ICT 이노베이션스퀘어 「피우다 프로젝트」 - 본선진출 개발물 입니다.
        </span>
      </div>

      {/* 프로젝트 추진 배경 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">프로젝트 추진 배경</h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Green Seoul Bot은 이전의
          <Link href="/recyclechatbot" target="/_blank" className="cursor-pointer">
            <span className="font-semibold text-yellow-300"> Recycle ChatBot</span>
          </Link>
          을 <span className="font-semibold text-yellow-300">리팩토링</span>하여 만든 개발물입니다.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          서울시 재활용 지원 정책에 특화된 AI 기술을 활용해 시민들이 효율적으로 분리배출할 수 있도록 돕습니다.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          또한, 접근성을 고려한 다크모드, 음성인식, 확대 모드를 적용했고, 웹 기반 관리 시스템을 통해 정책 데이터를
          직관적으로 관리할 수 있습니다.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          지역별 재활용 기준, 보상품 정보를 안내하며, 이미지 인식을 통해 대형폐기물 수수료 정보를 제공합니다.
        </p>
      </section>

      <section className="mb-12">
        {/* 개발 기간 */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-yellow-400">개발 기간</h3>
          <p className="mt-2 text-gray-300 text-lg">2024.10.09 ~ 2024.12.03 (55일)</p>
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
                  { name: '정다경(팀장)', role: 'Front-end & UX & UI & PM(Project Manager)' },
                  { name: '김지현', role: 'Back-end & AI' },
                  { name: '김채린', role: 'PM(Product Manager)' },
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
      <section className="mb-12">
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
      </section>

      {/* 주요 기능 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">주요 기능</h2>
        <div className="mt-4 overflow-hidden border border-gray-500 rounded-lg">
          <table className="w-full text-left text-gray-300">
            <tbody>
              {[
                '지역별로 상이한 재활용품 수거 품목과 기준, 보상품 정보를 안내',
                '이미지 첨부 시 대형폐기물의 수수료 정보를 간편하게 제공',
                '고대비 모드(다크모드), 음성인식 기능 등 접근성 강화 기술 적용',
                '배리어프리 환경을 고려한 확대하기 모드 지원',
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
                  <td className="px-6 py-3">Next.js</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Typescript</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">CSS & Material UI</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Vercel</td>
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
                  <td className="px-6 py-3">FastAPI</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">OpenAI Python Library</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">OpenCV</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">LangChain</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Torch(PyTorch)</td>
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
                { feature: '관리자 로그인', method: 'post', url: '/green-seoul-bot-admin/' },
                { feature: '관리자 구 선택', method: 'get', url: 'green-seoul-bot-admin/districts' },
                {
                  feature: '관리자 구별 정책 리스트',
                  method: 'post',
                  url: '/green-seoul-bot-admin/districts?district_name=강남구',
                },
                {
                  feature: '관리자 구별 정책 상세',
                  method: 'get',
                  url: '/green-seoul-bot-admin/districts/list?districtName=강남구',
                },
                {
                  feature: '관리자 구별 정책 수정',
                  method: 'patch',
                  url: '/green-seoul-bot-admin/districts/강남구/update?district_name=강남구',
                },
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
          <h2 className="text-3xl font-bold text-yellow-400">디자인 및 폰트</h2>
          <Link
            href="https://www.figma.com/design/7dJt5U5QbMwwsBoiVEK5f3/Green-Seoul-Bot?node-id=0-1&p=f&t=HalXFx8cM8Df2Qna-0"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            Figma
          </Link>
        </div>
        <div>
          <img src="/design1.png" alt="챗봇 메인 디자인" className="mt-4 w-full rounded-lg shadow-lg" />
          <img src="/design2.png" alt="챗봇 고대비모드 디자인" className="mt-4 w-full rounded-lg shadow-lg" />
          <img src="/design3.png" alt="admin 페이지 디자인" className="mt-4 w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* 개발 결과물 */}
      <section className="mb-12">
        <div className="flex">
          <p className="text-3xl font-bold text-yellow-400">개발 결과물 및 트러블슈팅</p>
          <Link
            href="https://green-seoul-bot.vercel.app/"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            Green Seoul Bot (Web)
          </Link>
          <Link
            href="https://github.com/Jeong-Dagyeong/GreenSeoulBot_frontend"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            Green Seoul Bot (Github)
          </Link>
          <Link
            href="https://github.com/Jeong-Dagyeong/GreenSeoulBot_frontend"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            Green Seoul Bot (영상)
          </Link>
        </div>
        <div className="mb-12">
          <p className="mt-4 text-gray-300 leading-relaxed">
            Green Seoul Bot은 <span className="font-semibold text-yellow-300">Recycle ChatBot</span>을 리팩토링하여 만든
            개발물로 이 페이지에선 리팩토링된 부분을 보여드리겠습니다.
          </p>
          <Link href="/recyclechatbot" target="/_blank" className="cursor-pointer">
            <span className="font-semibold text-yellow-300 underline underline-offset-8">
              Recycle ChatBot 프로젝트를 보려면 여기를 클릭해주세요.
            </span>
          </Link>
        </div>
        <p className="text-xl font-bold text-yellow-300 mb-4">고대비 모드(다크 모드), 음성지원 모드</p>
        <div className="flex flex-col items-center gap-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img src="/main.png" alt="챗봇 메인" className="w-[80%] md:w-[40%] rounded-lg shadow-lg mx-auto" />
            <img
              src="/image1.png"
              alt="다크모드 챗봇 이미지"
              className="w-[80%] md:w-[40%] rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div className="w-full mt-4">
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>
                챗봇 상단의 Green Seoul Bot 옆에
                <span className="font-semibold text-yellow-300"> 스피커 모양의 버튼</span>을 추가하여 버튼 활성화 시
                챗봇의 대화 내용을 음성으로 읽어주는 기능을 구현하였습니다.
              </li>
              <li>
                챗봇 하단의 왼쪽에는 기존의 이미지 파일 첨부 버튼 옆에
                <span className="font-semibold text-yellow-300"> 시각적 접근성 배려자(저시력자, 색맹, 노안)</span>를
                위한
                <span className="font-semibold text-yellow-300"> 고대비 모드(다크 모드)</span> 버튼을 구현하였습니다.
              </li>
              <li>
                <span className="font-semibold text-yellow-300"> 고대비 모드(다크 모드)</span> 를 통해 색 대비를 높여
                시각 장애인, 저시력자, 고령자 등이 텍스트와 화면 요소를 더 쉽게 인식할 수 있도록 접근성을 강화했습니다.
              </li>
              <li>
                대형폐기물의 경우, 답변과 함께 제공된 링크를 통해 구청 사이트에서 복잡한 단계를 거쳐 정보를 찾는 방식을
                개선하여, 유저가 필요한 정보를 보다 빨리 찾을 수 있도록{' '}
                <span className="font-semibold text-yellow-300">각 구청의 대형폐기물 페이지로 이동할 수 있도록</span>{' '}
                만들고, 불필요한 단계를 줄여 보다 직관적으로 정보를 찾을 수 있도록 설계했습니다.
              </li>
            </ul>
          </div>
        </div>

        {/* 2 */}
        <p className="text-xl font-bold text-yellow-300 mb-4 mt-10">챗봇 확대하기 모드, 음성인식 모드</p>
        <div className="flex flex-col items-center gap-8 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img src="/largemode.png" alt="챗봇 확대모드" className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto" />
            <img
              src="/userinput.png"
              alt="챗봇 userinput"
              className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="w-full mt-4">
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>
                챗봇이 처음 실행될 때 <span className="font-semibold text-yellow-300">챗봇 확대하기</span> 버튼을 추가로
                구현하였습니다.
              </li>
              <li>
                챗봇은
                <span className="font-semibold text-yellow-300">
                  가로 400px → 1024px(2.56배), 세로 650px → 700px(1.08배)로 확대
                </span>
                되었으며, 전체적으로 <span className="font-semibold text-yellow-300">약 1.66배(166.04%) </span>
                확대되었습니다.
              </li>
              <li>
                채팅 입력칸 오른쪽에는<span className="font-semibold text-yellow-300"> 음성인식 </span> 기능을 추가하여
                <span className="font-semibold text-yellow-300">
                  {' '}
                  시각·지체 장애인, 고령자, 난독증 사용자 등 손이나 시각 활용이 어려운
                </span>
                이들도 원활하게 서비스를 이용할 수 있도록 접근성을 강화했습니다.
              </li>
              <li>
                이전의 챗봇은 DB가 구축되어 있지 않았고, 답변을 내기 위해서 AI가 인식하고 처리하는 과정에서 1분 이상의
                시간이 소요되었습니다.
              </li>
              <li>
                하지만 이번 Green Seoul Bot은 모든 정책정보가 DB안에 저장되어있기 때문에
                <span className="font-semibold text-yellow-300">
                  {' '}
                  답변 버블이 2초 이내로 만들어 질 수 있도록 속도면에서 향상{' '}
                </span>
                되었습니다.
              </li>
              <li>
                만약, 챗봇 주제에 벗어난 대화일 때에는<span className="font-semibold text-yellow-300"> GPT API</span> 를
                연결하여 GPT가 대답을 할 수 있도록 구현하였습니다.
              </li>
            </ul>

            {/* 트러블 슈팅 섹션 */}
            <div className="mt-8 text-left">
              <p className="text-xl font-semibold text-yellow-300">트러블 슈팅</p>
              <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
                <p>
                  고대비모드(다크모드)와 확대모드를 적용할 때 맞는 방법을 찾지 못해서 일주일 이상의 시간이 소요
                  됐었습니다.
                </p>
                <p>
                  처음엔 챗봇 body 상단에 className 추가 / 삭제 코드를 이용해서 두가지 모드를 적용하고 해지하려 했으나,
                  className 추가 / 삭제는 잘 되었지만, 추가 / 삭제가 되었을 때 함수를 이용하여 css를 적용하려고 했던
                  방식이 잘 되지 않았습니다.
                </p>
                <p>
                  계속 어디에 추가를 하고 삭제를 해야 적용이 잘 될까 고민해보던 중 import를 추가 / 삭제 할 수 있을까에
                  대한 의문이 들었고 찾아보니 동적으로 모듈을 가져오는(Dynamic import) 방식이 존재했습니다.
                </p>
                <p>
                  챗봇 상단에 고대비모드(다크 모드)와 확대모드를 추가 / 삭제 할 수 있는 함수를 만들었고, 적용을 시킨
                  결과 이상없이 잘 적용이 되었습니다.
                </p>
              </div>
            </div>

            {/* Admin */}
            <div className="mt-14">
              <div className="flex">
                <h2 className="text-2xl font-bold text-yellow-400">Admin</h2>
                <Link
                  href="https://github.com/Jeong-Dagyeong/GreenSeoulBot_admin"
                  target="/_blank"
                  className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
                >
                  Green Seoul Bot _ admin (Github)
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=d0QEb5VrHSs"
                  target="/_blank"
                  className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
                >
                  Green Seoul Bot _ admin (영상)
                </Link>
              </div>
              <p className="text-xl font-bold text-yellow-300 mb-4 mt-6">Login</p>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <img
                  src="/admin/admin_login.png"
                  alt="관리자 로그인"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
                <img
                  src="/admin/admin_login1.png"
                  alt="관리자 로그인"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
              </div>
              {/* 트러블 슈팅 섹션 */}
              <div className="mt-8 text-left">
                <span className="text-xl font-semibold text-yellow-300">트러블 슈팅</span>
                <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
                  <p>
                    저희 팀은 cookie 방식으로 로그인을 구현하기로 결정했습니다. Admin 페이지는 담당자만 접근하면 되며,
                    각 구별 25개의 계정을 담당자에게만 공유하는 방식이 적절하다고 판단했기 때문입니다.
                  </p>
                  <p>
                    하지만 개발 과정에서 프론트엔드에서 id와 password는 정상적으로 전달되었으나, cookie가 제대로
                    저장되지 않고 전달되지 않는 문제가 발생했습니다.
                  </p>
                  <p>
                    여러 시도를 했지만 해결책을 찾지 못해, 결국 DB에 각 구별 ID와 비밀번호를 저장하고 검증하는 방식으로
                    변경하였습니다.
                  </p>
                  <p>
                    이 과정이 가장 아쉬운 점으로 남았으며, 개인 프로젝트에서 다시 도전하여 성공하고 싶다는 목표가
                    생겼습니다.
                  </p>
                </div>
              </div>

              {/* 구 선택 */}
              <p className="text-xl font-bold text-yellow-300 mb-4 mt-6">각 구 선택</p>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <img
                  src="/admin/admin_districts.png"
                  alt="관리자 구 목록"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
              </div>
              {/* 트러블 슈팅 섹션 */}
              <div className="mt-8 text-left">
                <span className="text-xl font-semibold text-yellow-300">트러블 슈팅</span>
                <div className="space-y-4 mt-4 text-gray-300 leading-relaxed">
                  <p>
                    Next.js의 폴더 기반 라우팅을 처음 사용하면서 쿼리스트링을 이용해 각 구의 이름을 전달하는 방식을
                    계획했습니다.{' '}
                  </p>
                  <p>
                    하지만 동적 라우팅(Dynamic Routes)의 존재를 모르고 있었고, 모든 경로를 쿼리스트링으로 처리하다 보니
                    URL이 점점 길어졌습니다. 결국, 폴더를 깊게 중첩시키는 방식으로 구현하면서 구조가 복잡해지고 스스로도
                    헷갈리는 상황이 되었습니다.
                  </p>
                  <p>
                    이후 동적 라우팅을 알게 되어 기존 구조를 전부 수정하고, 더 효율적인 URL 형태로 개선할 수 있었습니다.
                  </p>
                  <p>
                    이번 경험을 통해 Next.js의 라우팅 방식에 대한 이해가 깊어졌고, 앞으로는 초기 설계 단계에서 동적
                    라우팅을 적극 활용해야겠다는 교훈을 얻었습니다.
                  </p>
                </div>
              </div>

              {/* 구별 정책정보 리스트 */}
              <p className="text-xl font-bold text-yellow-300 mb-4 mt-6">구별 정책정보 리스트</p>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <img
                  src="/admin/admin_list.png"
                  alt="관리자 정책정보 리스트"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
              </div>

              {/* 구별 정책정보 및 대형폐기물 수수료 상세 페이지 */}
              <p className="text-xl font-bold text-yellow-300 mb-4 mt-6">
                구별 정책정보 및 대형폐기물 수수료 상세 페이지
              </p>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <img
                  src="/admin/admin_districts_info.png"
                  alt="관리자 정책정보 상세"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
                <img
                  src="/admin/admin_huge_info.png"
                  alt="관리자 대형폐기물 수수료 상세"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
              </div>

              {/* 구별 정책정보 수정 페이지 */}
              <p className="text-xl font-bold text-yellow-300 mb-4 mt-6">구별 정책정보 및 대형폐기물 수정 페이지</p>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <img
                  src="/admin/admin_districts_modify.png"
                  alt="관리자 정책정보 수정"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
                <img
                  src="/admin/admin_huge_modify.png"
                  alt="관리자 대형폐기물 수수료 수정"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
              </div>

              {/* 구별 정책정보 삭제 및 결과 */}
              <p className="text-xl font-bold text-yellow-300 mb-4 mt-6">구별 정책정보 삭제 및 결과</p>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <img
                  src="/admin/admin_districts_delete.png"
                  alt="관리자 정책정보 삭제"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
                <img
                  src="/admin/admin_districts_result.png"
                  alt="관리자 정책정보 삭제결과"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
              </div>

              {/* 구별 대형폐기물 수수료 삭제 및 결과 */}
              <p className="text-xl font-bold text-yellow-300 mb-4 mt-6">구별 대형폐기물 수수료 삭제 및 결과</p>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <img
                  src="/admin/admin_huge_delete.png"
                  alt="관리자 대형폐기물 수수료 삭제"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
                <img
                  src="/admin/admin_huge_result.png"
                  alt="관리자 대형폐기물 삭제결과"
                  className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기대효과 및 지속성 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">기대효과 및 지속성</h2>
        <div className="mt-4 overflow-hidden border border-gray-500 rounded-lg">
          <table className="w-full text-left text-gray-300">
            <tbody>
              {[
                '명확한 정책 안내를 통해 사용자가 손쉽게 필요한 정보를 얻을 수 있으며, 기존의 혼란을 방지',
                '챗봇을 통해 통합된 정보를 제공하여 지역별 정보격차 해소',
                '직접 문의나 방문 없이도 사용자가 언제든지 필요한 정보를 얻을 수 있음',
                '잘못된 쓰레기 배출을 줄여 자원 낭비를 줄이고, 고품질 재활용을 촉진',
                '챗봇을 통한 정보 제공 자동화로 담당자의 행정 업무 부담 감소',
              ].map((item, index) => (
                <tr key={index} className="border-t border-gray-600">
                  <td className="px-6 py-3">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
