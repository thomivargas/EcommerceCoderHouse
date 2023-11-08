import Categoria from "@/components/Categoria/categoria";
import Compartir from "@/components/Compartir/compartir";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/hero";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Categoria/>
      <Compartir/>
      <Footer/>
    </main>
  )
}
