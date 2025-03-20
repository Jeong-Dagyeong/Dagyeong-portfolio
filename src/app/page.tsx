'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto px-8">
      {/* 프로필 섹션 */}
      <div className="mt-12 flex justify-between items-center">
        <div>
          <p className="text-2xl tracking-wide">
            안녕하세요. <br />
            <span className="font-bold text-3xl text-yellow-400 color-change">긍정의 알고리즘으로 도전을 풀어가는</span>
            <br />
            프론트엔드 개발자 정다경 입니다.
          </p>
          <Link
            href="https://github.com/Jeong-Dagyeong"
            className="inline-flex items-center gap-2 border border-white rounded-full px-4 py-2 mt-6"
          >
            <img className="w-6 h-6" src="/github_icon.png" />
            <span>GitHub</span>
          </Link>
        </div>
        {/* <img className="w-36 h-36 rounded-full" src="/profile.JPG" /> */}
      </div>

      {/* 교육 및 이력 */}
      <div className="mt-16">
        <h2 className="text-yellow-400 text-3xl">교육 및 이력</h2>
        <div className="grid grid-cols-2 gap-10 mt-6">
          {[
            { year: '2023', text: ['wecode 부트캠프 수료'] },
            {
              year: '2024',
              text: [
                '건국대학교 ESG 일경험 프로그램 수료',
                '2024년 「미래내일 일경험사업」 우수사례 공모전 - 프로젝트 분야 본선진출',
                'ICT 이노베이션스퀘어 「피우다 프로젝트」 - 본선진출',
              ],
            },
          ].map((item) => (
            <div
              key={item.year}
              className="w-full h-auto min-h-[180px] flex flex-col items-center justify-start border border-white rounded-xl px-6 
              transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-20 group"
            >
              <span className="text-white text-xl font-bold group-hover:text-yellow-400 mt-4 mb-4">{item.year}</span>
              <div className="mt-2 mb-8 space-y-2 text-white text-center">
                {item.text.map((line, index) => (
                  <p key={index} className="group-hover:text-yellow-300">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 기술 스택 */}
      <div className="mt-16">
        <h2 className="text-yellow-400 text-3xl">기술 스택</h2>
        <div className="flex justify-between mt-6 gap-10">
          {[
            { year: 'Language', text: ['HTML', 'CSS', 'Javascript', 'Typescript'] },
            { year: 'Library & Framework', text: ['React', 'Next.js'] },
            { year: 'Tools', text: ['GitHub', 'Figma', 'Slack', 'Notion', 'Trello'] },
          ].map((item) => (
            <div
              key={item.year}
              className="w-80 h-auto min-h-[180px] flex flex-col items-center justify-start border border-white rounded-xl px-6"
            >
              <span className="mt-4 mb-4 text-white text-xl font-bol text-deep-gold">{item.year}</span>
              {/* 리스트 형식으로 정렬 */}
              <ul className="mt-2 mb-4 space-y-2 text-white text-center">
                {item.text.map((tech, index) => (
                  <li key={index}>• {tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* 프로젝트 */}
      <div className="mt-16">
        <h2 className="text-yellow-400 text-3xl">프로젝트</h2>
        <div className="flex flex-col gap-4 mt-6">
          {[
            {
              title: 'Recycle ChatBot',
              description: '2024년 「미래내일 일경험사업」 우수사례 공모전 - 프로젝트 분야 본선진출한 개발물 입니다.',
              period: '2024.07 ~ 2024.09',
              team: '4명',
              details: [
                '익산시의 폐기물 민원 안내 챗봇은 지역별 수거 품목과 보상 기준 정보를 제공하여 주민 편의를 증진시킨 사례로, 이에 착안하여 Recycle ChatBot을 개발하였습니다.',
                '사용자는 지역별 재활용 품목, 배출 방법, 보상 기준 등을 간편하게 확인하고 궁금증을 즉시 해결할 수 있으며, 이를 통해 자원 순환 활동 참여를 독려하고 정책 접근성을 높이는 것을 목표로 합니다.',
              ],
              imgSrc: '/recycle/recycle_main.png',
              link: '/recyclechatbot',
              stack: ['React', 'Typescript', 'CSS', 'Netlify', 'Axios'],
            },
            {
              title: 'Green Seoul Bot',
              description: 'ICT 이노베이션스퀘어 「피우다 프로젝트」 - 본선진출 개발물 입니다.',
              period: '2024.10 ~ 2024.12',
              team: '3명',
              details: [
                'Green Seoul Bot은 서울시 재활용 정책에 특화된 AI로, 지역별 수거 기준과 보상품, 대형폐기물 수수료 정보를 제공합니다.',
                '배리어프리 환경을 고려해 설계하여, 고대비모드, 음성인식, 확대모드 기능을 추가하였습니다.',
                '정책 관리의 효율성을 높이기 위해 웹 기반의 관리(Admin) 시스템을 도입하였습니다.',
              ],
              imgSrc: '/darkmode.png',
              link: '/greenseoulbot',
              stack: ['Next.js', 'Typescript', 'CSS', 'Material-UI', 'Axios'],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="flex justify-between p-4 rounded-lg bg-[var(--color-bg1)] shadow-md shadow-[rgba(30,58,95,0.6)]"
            >
              {/* 이미지 영역 */}
              <div className="w-60 h-80 flex justify-center items-center mt-3">
                <img src={project.imgSrc} className="w-full h-full object-contain rounded-lg" />
              </div>

              {/* 텍스트 컨텐츠 */}
              <div className="flex flex-col px-4 ml-6 flex-1">
                <span className="text-3xl font-bold mb-1 text-yellow-300">{project.title}</span>
                <span className="tracking-wide mb-2 text-xs">{project.description}</span>
                <span className="text-[var(--color-accent)] mb-2">{project.period}</span>
                <span className="text-[var(--color-accent)] mb-2">팀원 : {project.team}</span>

                {project.details.map((text, i) => (
                  <span key={i} className="tracking-wide mb-4">
                    {text}
                  </span>
                ))}

                {/* 기술 스택 */}
                <span className="flex gap-2">
                  {project.stack.map((item, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 text-white rounded">
                      {item}
                    </span>
                  ))}
                </span>

                {/* 상세보기 버튼 */}
                <Link
                  href={project.link}
                  className="border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-4"
                >
                  상세보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-16">
        <h2 className="text-yellow-400 text-3xl">프로젝트</h2>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex justify-between p-4 rounded-lg bg-[var(--color-bg1)] shadow-md shadow-[rgba(30,58,95,0.6)]">
            <div className="w-72 h-62">
              <img src="/recycle/recycle_main.png" className="rounded-lg" />
            </div>
            <div className="flex flex-col px-4 ml-6">
              <span className="text-3xl text-bold mb-1 text-yellow-300">Recycle ChatBot</span>
              <span className="tracking-wide mb-2 text-xs">
                2024년 「미래내일 일경험사업」 우수사례 공모전 - 프로젝트 분야 본선진출한 개발물 입니다.
              </span>
              <span className="text-[var(--color-accent)] mb-2">2024.07 ~ 2024.09</span>
              <span className="text-[var(--color-accent)] mb-2">팀원 : 4명</span>
              <span className="tracking-wide mb-4">
                익산시의 '폐기물 민원 안내 챗봇'은 지역별 수거 품목과 보상 기준 정보를 제공하여 주민 편의를 증진시킨
                사례로, 이에 착안하여 "Recycle ChatBot"은 재활용품 지원 정책에 특화된 챗봇 서비스를 개발하였습니다.
              </span>
              <span className="tracking-wide mb-4">
                사용자는 지역별 재활용 품목, 배출 방법, 보상 기준 등을 간편하게 확인할 수 있으며, 궁금증을 즉시 해결할
                수 있습니다.
              </span>
              <span className="tracking-wide mb-4">
                이를 통해 자원 순환 활동 참여를 독려하고, 관련 정책 접근성을 높이는 것을 목표로 합니다.
              </span>
              <span className="flex gap-2">
                {['Next.js', 'Typescript', 'CSS', 'Material-UI', 'Axios'].map((item, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded">
                    {item}
                  </span>
                ))}
              </span>
              <Link
                href="/greenseoulbot"
                className="border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-4"
              >
                상세보기
              </Link>
            </div>
          </div>
          <div className="flex justify-between p-4 rounded-lg bg-[var(--color-bg1)] shadow-md shadow-[rgba(30,58,95,0.6)]">
            <div className="w-72 h-62">
              <img src="/darkmode.png" className="rounded-lg" />
            </div>
            <div className="flex flex-col px-4 ml-6">
              <span className="text-3xl text-bold mb-1 text-yellow-300">Green Seoul Bot</span>
              <span className="tracking-wide mb-2 text-xs">
                ICT 이노베이션스퀘어 「피우다 프로젝트」 - 본선진출 개발물 입니다.
              </span>
              <span className="text-[var(--color-accent)] mb-2">2024.10 ~ 2024.12</span>
              <span className="text-[var(--color-accent)] mb-2">팀원 : 3명</span>
              <span className="tracking-wide mb-4">
                Green Seoul Bot은 서울시 재활용 정책에 특화된 AI로, 지역별 수거 기준과 보상품, 대형폐기물 수수료 정보를
                제공합니다.
              </span>
              <span className="tracking-wide mb-4">
                배리어프리 환경을 고려해 설계하여, 고대비모드, 음성인식, 확대모드 기능을 추가하였습니다.
              </span>
              <span className="tracking-wide mb-4">
                정책 관리의 효율성을 높이기 위해 웹 기반의 관리(Admin) 시스템을 도입하였습니다.
              </span>
              <span className="flex gap-2">
                {['Next.js', 'Typescript', 'CSS', 'Material-UI', 'Axios'].map((item, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-700 text-white rounded">
                    {item}
                  </span>
                ))}
              </span>
              <Link
                href="/greenseoulbot"
                className="border border-[var(--color-gold)] text-[var(--color-gold)] inline-flex items-center rounded-full px-3 py-1 size-fit mt-4"
              >
                상세보기
              </Link>
            </div>
          </div>
          <div className="border border-white rounded-lg  bg-[var(--color-bg1)]">
            <p>dddd</p>
          </div>
        </div>
      </div> */}
      <footer>
        <div className="h-24">
          <p></p>
        </div>
      </footer>
    </div>
  )
}
