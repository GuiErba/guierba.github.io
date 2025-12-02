import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { RichText } from '@/app/components/rich-text'
import Image from 'next/image'

type ProjectDetailsProps = {
  project: Project
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="container py-12 md:py-20">
      <div className="max-w-[640px] mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors mb-8"
        >
          <HiArrowNarrowLeft size={20} />
          Back to projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
          {project.title}
        </h1>

        <p className="text-zinc-400 mb-8 leading-relaxed">
          <RichText content={project.description.raw} />
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techs.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} />
          ))}
        </div>

        <div className="flex items-center gap-3 flex-col sm:flex-row">
          {project?.githubUrl && (
            <a href={project.githubUrl} target="_blank">
              <Button className="inline-flex items-center justify-center gap-2">
                <TbBrandGithub size={20} />
                Repository
              </Button>
            </a>
          )}

          {project?.liveProjectUrl && (
            <a href={project.liveProjectUrl} target="_blank">
              <Button className="inline-flex items-center justify-center gap-2">
                <FiGlobe size={20} />
                Project
              </Button>
            </a>
          )}
        </div>
      </div>

      <div className="w-full">
        <Image
          width={1080}
          height={672}
          className="w-full aspect-auto object-cover rounded-lg shadow-2xl"
          src={project.pageThumbnail.url}
          alt={`Thumbnail of project ${project.title}`}
          unoptimized
        />
      </div>
    </section>
  )
}
