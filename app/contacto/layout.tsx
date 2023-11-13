import Footer from "@/components/Footer/footer"
import FooterIconos from "@/components/Footer/footerIconos"


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