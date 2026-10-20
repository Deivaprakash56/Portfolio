import { About } from '../components/About'
import { CaseStudies } from '../components/CaseStudies'
import { Contact } from '../components/Contact'
import { CustomerSuccess } from '../components/CustomerSuccess'
import { Hero } from '../components/Hero'
import { Impact } from '../components/Impact'
import { Journey } from '../components/Journey'
import { Leadership } from '../components/Leadership'
import { Philosophy } from '../components/Philosophy'
import { Recognition } from '../components/Recognition'
import { Skills } from '../components/Skills'
import { Writing } from '../components/Writing'

export function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <Journey />
      <CaseStudies />
      <CustomerSuccess />
      <Skills />
      <Recognition />
      <Writing />
      <Philosophy />
      <Leadership />
      <About />
      <Contact />
    </>
  )
}
