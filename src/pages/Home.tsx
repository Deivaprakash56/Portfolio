import { CaseStudies } from '../components/CaseStudies'
import { Contact } from '../components/Contact'
import { CustomerSuccess } from '../components/CustomerSuccess'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { Sites } from '../components/Sites'
import { Skills } from '../components/Skills'

export function Home() {
  return (
    <>
      <Hero />
      <Sites />
      <CaseStudies />
      <Gallery />
      <CustomerSuccess />
      <Journey />
      <Skills />
      <Contact />
    </>
  )
}
