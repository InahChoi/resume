import { Header } from './components/layout/Header'
import { SideNav } from './components/layout/SideNav'
import { SnapSection } from './components/layout/SnapSection'
import { Hero } from './components/Hero'
import { Introduce } from './components/Introduce'
import { Skills } from './components/Skills'
import { ExperienceList } from './components/ExperienceList'
import { ProjectGrid } from './components/ProjectGrid'
import { EducationEtc } from './components/EducationEtc'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const { activeId, scrollToSection } = useActiveSection()

  return (
    <>
      <Header />
      <SideNav activeId={activeId} onNavigate={scrollToSection} />

      <main>
        <SnapSection id="hero" align="center">
          <Hero />
        </SnapSection>

        <SnapSection id="introduce">
          <Introduce />
        </SnapSection>

        <SnapSection id="skills">
          <Skills />
        </SnapSection>

        <SnapSection id="experience">
          <ExperienceList />
        </SnapSection>

        <SnapSection id="projects">
          <ProjectGrid />
        </SnapSection>

        <SnapSection id="education">
          <EducationEtc />
        </SnapSection>
      </main>
    </>
  )
}

export default App
