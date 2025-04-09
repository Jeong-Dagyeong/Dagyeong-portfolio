import Link from 'next/link'

export default function greenseoulbot() {
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
      <div className="flex flex-col items-center mb-12">
        <div className="flex flex-col items-center justify-between w-full  mb-2">
          <h1 className="text-4xl font-bold text-yellow-400 text-center">멍멍냥냥 프로젝트</h1>
        </div>
      </div>

      {/* 프로젝트 추진 배경 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">프로젝트 추진 배경</h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          멍멍냥냥 프로젝트는 건국대학교 ESG 일경험지원 프로그램을 통해서 만들어진 개발물 입니다.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          반려견, 반려묘에 관심이 많은 팀원들이 모였고, 3주라는 시간안에 가장 완벽하게 해낼 수 있는 개발물은 어떤것이
          있을까 고민한 결과
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          멍멍냥냥 웹커뮤니티를 만들자는 의견을 토대로 만들어지게 되었습니다.
        </p>
      </section>

      {/* 개발 기간 */}
      <section className="mb-12">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-yellow-400">협업 기간</h3>
          <p className="mt-2 text-gray-300 text-lg">2024.06.05 ~ 2023.06.28 (약 3주)</p>
        </div>
      </section>

      {/* 팀원 및 역할 분담 */}
      <section className="mb-12">
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
                  { name: '정다경(팀장)', role: 'Front-end & UX & UI' },
                  { name: '김채연', role: 'Front-end' },
                  { name: '장윤경', role: 'Front-end & Back-end' },
                  { name: '이희민', role: 'Back-end' },
                  { name: '장은영', role: 'Back-end' },
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

      {/* 주요 기능 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">주요 기능</h2>
        <div className="mt-4 overflow-hidden border border-gray-500 rounded-lg">
          <table className="w-full text-left text-gray-300">
            <tbody>
              {['회원가입 & 로그인', '게시판 글쓰기, 수정, 삭제', '댓글 등록'].map((item, index) => (
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
                  <td className="px-6 py-3">React</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Javascript</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Tailwind CSS</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Axios</td>
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
                  <td className="px-6 py-3">Node.js</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">Express</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">-</td>
                </tr>
                <tr className="border-t border-gray-600">
                  <td className="px-6 py-3">-</td>
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
                { feature: '회원가입', method: 'post', url: '/signup' },
                { feature: '로그인', method: 'post', url: '/login' },
                { feature: '게시판 글 작성', method: 'post', url: '/posts' },
                { feature: '글 목록 조회', method: 'get', url: '/posts' },
                { feature: '게시판 특정 글 조회', method: 'get', url: '/posts/:postId' },
                { feature: '게시판 글 수정', method: 'put', url: '/posts/:postId' },
                { feature: '게시판 글 삭제', method: 'delete', url: '/posts/:postId' },
                {
                  feature: '댓글 작성',
                  method: 'post',
                  url: '/posts/:postId/comments',
                },
                {
                  feature: '댓글 목록 조회',
                  method: 'get',
                  url: '/posts/:postId/comments',
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
          <h2 className="text-3xl font-bold text-yellow-400">디자인</h2>
          <Link
            href="https://www.figma.com/proto/B8ARSxqs9pJSA8tqXIpZm1/Wagzag?node-id=0-1&t=QOXFiOrQYFS4scwX-1"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            Figma
          </Link>
        </div>
        <div>
          <img src="/dogncat_figma.png" alt="멍멍냥냥 피그마" className="mt-4 w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* 개발 결과물 */}
      <section className="mb-12">
        <div className="flex">
          <p className="text-3xl font-bold text-yellow-400">개발 결과물 및 트러블슈팅</p>
          <Link
            href="https://github.com/Jeong-Dagyeong/BowWow2mew-frontend"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            멍멍냥냥 프로젝트 (Github)
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=F3nKIW4-jlI"
            target="/_blank"
            className="text-xs border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-1.5 ml-2"
          >
            멍멍냥냥 프로젝트 (영상)
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">프로젝트 협업내용</h2>
        <div className="mt-4 overflow-hidden border border-gray-500 rounded-lg">
          <table className="w-full text-left text-yellow-300 text-2xl">
            <tbody className="text-xl">
              {[
                {
                  title: '로그인 방식 변경',
                  description:
                    '기존의 cookie를 이용한 로그인 방식이 보안에 취약하다고 생각되어 Axios Interceptors 기능을 활용하여 로그인하는 방식으로 변경',
                },
                {
                  title: '마이페이지 핸드폰 인증 코드 에러 수정',
                  description:
                    '핸드폰 인증번호 발송 후 인증 번호를 인증하려 하면 Undefined 이슈 발생 → 데이터 구조 확인 후 수정 → 정상작동  ',
                },
                {
                  title: '`Master of Cafe` 대회 심사위원 디프리핑 자료 차트 만들기',
                  description: 'Apache ECharts 오픈소스를 이용한 심사위원 디브리핑 자료 구현',
                },
              ].map((item, index) => (
                <tr key={index} className="border-t border-gray-600">
                  <td className="px-6 py-3">
                    <div>
                      <div>{item.title}</div>
                      {item.description && <div className="mt-1 text-l text-gray-400">{item.description}</div>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <img
          src="/dogncat_signup&login.gif"
          alt="심사위원 디브리핑 바차트"
          className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
        />
        <img
          src="/changed_name.png"
          alt="심사위원 디브리핑 레이더 차트"
          className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <img
          src="/pasted_graphic.png"
          alt="심사위원 디브리핑 퍼렐 차트"
          className="w-[90%] md:w-[50%] rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  )
}
