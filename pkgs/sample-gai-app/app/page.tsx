import { Suspense } from 'react'

import PostList from './components/post/PostList';
import Loading from './components/common/Loading';

/**
 * メインページ Component
 * @returns 
 */
const Page = () => {
  return (
    <div className="h-full">
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore*/}
        <PostList />
      </Suspense>
    </div>
  )
}

export default Page