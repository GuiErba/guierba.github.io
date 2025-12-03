import { ProjectSection } from '@/app/types/projects'
import Image from 'next/image'

type ProjectSectionsProps = {
  sections: ProjectSection[]
}

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container py-12 md:py-20 flex flex-col gap-16 md:gap-24">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-8 md:gap-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100">
            {section.title}
          </h2>

          <Image
            width={1080}
            height={672}
            className="w-full aspect-auto object-cover rounded-lg shadow-2xl"
            src={section.image.url}
            alt={`Thumbnail of project ${section.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
