import Footer from "@/components/InicioComponents/Footer/footer"
import FooterIconos from "@/components/InicioComponents/Footer/footerIconos"


const ContactoLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <section>
      {children}
      <FooterIconos/>
      <Footer/>
    </section>
  )
}

export default ContactoLayout