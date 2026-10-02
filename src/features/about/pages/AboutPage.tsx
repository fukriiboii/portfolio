import ContactMe from "../../../shared/components/ContactMe"
import AboutHero from "../../about/components/AboutHero"
import Experience from "../components/Experience"
import MyApproach from "../components/MyApproach"
import PersonalPhilosophy from "../components/PersonalPhilosophy"

function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MyApproach />
      <Experience />
      <PersonalPhilosophy />
      <ContactMe />
    </main>
  )
}

export default AboutPage