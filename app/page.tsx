import Hero from "@/components/Hero/hero";
import NavBar from "@/components/NavBar/navBar";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto my-5">
        <NavBar/>
      </div>
      <Hero/>
    </main>
  )
}
