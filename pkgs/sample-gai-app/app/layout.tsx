import '../styles/globals.css'
import SupabaseProvider from './components/SupabaseProvider'
import Navigation from './components/Navigation'
import Footer from './components/common/Footer'
import Header from './components/common/Header'

/**
 * Root Layout コンポーネント
 * @param param0 
 * @returns 
 */
const RootLayout = async (
  { children }: { children: React.ReactNode }
) => {
  return (
    <html>
      <Header/>
      <body>
        <SupabaseProvider>
          <div className="flex flex-col min-h-screen bg-[#1C1C1C]">
            {/* ナビゲーションコンポーネント */}
            <Navigation />
            {/* メインコンポーネント */}
            <main className="flex-1 container max-w-[512px] mx-auto px-2 py-10">
              {children}
            </main>
            {/* フッター */}
            <Footer/>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  )
}

export default RootLayout