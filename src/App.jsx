import Sedans from "./components/Sedans.jsx"
import Suvs from "./components/Suvs.jsx"
import Luxuosos from "./components/Luxuosos.jsx"

export default function App() {
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
      <section className="lg:flex max-w-[920px]">
        <Sedans />

        <Suvs />

        <Luxuosos />
      </section>
    </main>
  )
}