'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
          <h1 className="mb-4 text-4xl font-bold">문제가 발생했습니다.</h1>
          <p className="mb-6 text-lg">
            페이지를 불러오는 중 에러가 발생했습니다.
          </p>
          <button
            onClick={() => reset()}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  )
}
