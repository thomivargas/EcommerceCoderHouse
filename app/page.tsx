import Categoria from "@/components/Categoria/categoria";
import Compartir from "@/components/Compartir/compartir";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/hero";
import NavBar from "@/components/NavBar/navBar";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto my-5">
        <NavBar/>
      </div>
      <Hero/>
      <Categoria/>
      <Compartir/>
      <Footer/>
    </main>
  )
}
