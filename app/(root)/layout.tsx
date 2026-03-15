// Components
import Navbar from '@/components/Navbar';

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className={`flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black`}>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout