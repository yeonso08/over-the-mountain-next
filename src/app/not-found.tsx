// app/not-found.tsx

import Link from 'next/link'

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
          <h1 className="mb-4 text-5xl font-bold">
            404 - 페이지를 찾을 수 없습니다
          </h1>
          <p className="mb-8">
            죄송합니다. 찾고 계신 페이지가 존재하지 않습니다.
          </p>
          <a href="/">홈으로 가기</a>
        </div>
      </body>
    </html>
  )
}
