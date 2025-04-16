import Link from 'next/link'

export default function maze() {
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
          <h1 className="text-4xl font-bold text-yellow-400 text-center">(주)MAZE 기업협업 프로젝트</h1>
        </div>
        <span className="tracking-wide mb-12 text-xs underline underline-offset-8">
          코드 관련 내용이나 전체적인 화면은 대외비라 적을 수 없는 점 양해 부탁드립니다.
        </span>
      </div>

      {/* 개발 기간 */}
      <section className="mb-12">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-yellow-400">협업 기간</h3>
          <p className="mt-2 text-gray-300 text-lg">2023.02 ~ 2023.03 (1개월)</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400">기업협업 내용</h2>
        <div className="mt-4 overflow-hidden border border-gray-500 rounded-lg">
          <table className="w-full text-left text-gray-300">
            <tbody>
              {[
                '워크샵에 참가하여 아나콘다 가상환경 프로그램을 이용하여 AI 레이블링과 딥러닝에 참여',
                '`Master of Cafe` 대회 심사위원 버전 QA 참여',
                '`Master of Cafe` 대회 심사위원 페이지 로그인 고도화',
                'Apache ECharts를 이용하여 심사위원 디브리핑 자료 차트 만들기',
              ].map((item, index) => (
                <tr key={index} className="border-t border-gray-600">
                  <td className="px-6 py-3">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">기술 스택</h2>
        <div className="overflow-hidden border border-gray-500 rounded-lg">
          <h3 className="bg-gray-800 text-white text-xl font-bold px-6 py-3">Front-end</h3>
          <table className="w-full text-left text-gray-300">
            <tbody>
              <tr className="border-t border-gray-600">
                <td className="px-6 py-3">React</td>
              </tr>
              <tr className="border-t border-gray-600">
                <td className="px-6 py-3">Apache ECharts</td>
              </tr>
              <tr className="border-t border-gray-600">
                <td className="px-6 py-3">Axios</td>
              </tr>
              <tr className="border-t border-gray-600">
                <td className="px-6 py-3">Mantine UI</td>
              </tr>
            </tbody>
          </table>
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
          src="/bar_chart.png"
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
