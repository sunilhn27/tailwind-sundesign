import AboutMe from '@/Components/AboutMe'
import HeroSection from '@/Components/HeroSection'
import NavBar from '@/Components/NavBar'
import RecentWork from '@/Components/RecentWork'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <NavBar />
      <HeroSection/>
      <AboutMe/>
      <RecentWork/>
    </main>
  )
}
