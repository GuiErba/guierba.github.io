import { SkillsTechs } from './components/pages/home/skills-techs'
import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { WorkExperience } from './components/pages/home/work-experience'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'
import { HomePageData } from './types/page-info'

export const metadata = {
  title: 'Guilherme Erba',
  description:
    "I'm Guilherme Erba, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence.",
  openGraph: {
    title: 'Guilherme Erba | Front end Developer',
    description:
      "I'm Guilherme Erba, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence.",
    url: 'https://guihenrique.vercel.app/',
    siteName: 'Guilherme Erba',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/GuiiHenriq/guiihenriq.github.io/main/public/ogimage.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Erba | Front end Developer',
    url: 'https://guihenrique.vercel.app/',
    description:
      "I'm Guilherme Erba, a passionate software developer with more than 6 years of experience, immersed in the exciting universe of web creation, with a strong background in developing and implementing innovative solutions. My journey in this fascinating field has been marked by stimulating challenges and the relentless pursuit of technical excellence.",
    images: [
      'https://raw.githubusercontent.com/GuiiHenriq/guiihenriq.github.io/main/public/ogimage.png',
    ],
  },
}

const getPageData = async (): Promise<HomePageData | null> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        introTechs {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          icon
        }
        skillsTechs {
          icon
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          techs {
            name
          }
        }
      }
      workExperiences(orderBy: createdAt_DESC) {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        techs {
          name
        }
      }
    }
  `

  try {
    return await fetchHygraphQuery(query, 300)
  } catch (error) {
    console.error('Error fetching home page data:', error)
    return null
  }
}

export default async function Home() {
  const data = await getPageData()
  const pageData = data?.page
  const workExperiences = data?.workExperiences || []

  if (!pageData) {
    return (
      <div className="container flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-zinc-100">Loading...</h1>
        <p className="mt-4 text-zinc-400">
          Unable to load page data. Please try again later.
        </p>
      </div>
    )
  }

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <SkillsTechs skills={pageData.skillsTechs || []} />
      <WorkExperience experiences={workExperiences} />
      <HighlightedProjects
        projects={pageData.highlightProjects?.slice(0, 2) || []}
      />
    </>
  )
}
