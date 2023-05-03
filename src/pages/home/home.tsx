import Footer from "@/presentation/components/footer/footer";
import Header from "@/presentation/components/header/header";
import About from "@/presentation/components/home/about/about";
import Contact from "@/presentation/components/home/contact/contact";
import Hero from "@/presentation/components/home/hero/hero";
import Service from "@/presentation/components/home/service/service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
