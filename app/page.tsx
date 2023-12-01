import Categoria from "@/components/InicioComponents/Categoria/categoria";
import Compartir from "@/components/InicioComponents/Compartir/compartir";
import Footer from "@/components/InicioComponents/Footer/footer";
import Hero from "@/components/InicioComponents/Hero/hero";


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
