'use client'

import Link from 'next/link'

/**
 * Navigation Component
 * @returns 
 */
const Navigation = () => {
  return (
    <header className="border-b border-gray-600 py-5">
      <div className="container max-w-screen-xl mx-auto relative flex justify-center items-center">
        <Link href="/" className=" font-bold text-xl cursor-pointer text-white">
          Sample Generative AI App
        </Link>

        <div className="absolute right-5">
          <Link href="post/new">
            <div className="text-white bg-yellow-500 hover:brightness-110 rounded py-1 px-8">
              画像生成
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navigation