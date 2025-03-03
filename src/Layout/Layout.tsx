import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      <header className="bg-slate-100 border-b-1">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-800 text-center md:text-left">
            Administrador de Productos
          </h1>
        </div>
      </header>
      <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow">
        <Outlet />
      </main>
    </>
  )
}