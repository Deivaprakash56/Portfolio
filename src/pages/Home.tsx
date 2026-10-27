import { CaseStudies } from '../components/CaseStudies'
import { Contact } from '../components/Contact'
import { CustomerSuccess } from '../components/CustomerSuccess'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { Skills } from '../components/Skills'

export function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <CustomerSuccess />
      <Journey />
      <Skills />
      <Contact />
    </>
  )
}
