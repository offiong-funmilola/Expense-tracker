import Sidebar from "@/components/sidebar"
import Welcome from "@/components/welcome"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="w-full h-screen grid grid-cols-12 ">
        <div className="col-span-1 border-r border-gray-400">
          <Sidebar/>
        </div>
        <div className="col-start-2 col-end-13 grid grid-rows-8">
          <div className="row-span-1">
            <Welcome/>
          </div>
          <main className="row-start-2 row-end-9">
            {children}
          </main>
        </div>
      </div>
    )
  }