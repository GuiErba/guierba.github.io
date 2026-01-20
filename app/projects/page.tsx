import { PageIntroduction } from '../components/pages/projects/page-introduction'
import { ProjectsList } from '../components/pages/projects/projects-list'
import { GithubContributions } from '../components/pages/projects/github-contributions'
import { ProjectsPageData } from '../types/page-info'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'

export const metadata = {
  title: 'Projects | Guilherme Erba',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
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
    console.error('Error fetching projects:', error)
    return { projects: [] }
  }
}

export default async function Projects() {
  const data = await getPageData()
  const projects = data?.projects || []

  return (
    <>
      <PageIntroduction />
      <GithubContributions />
      <ProjectsList projects={projects} />
    </>
  )
}
