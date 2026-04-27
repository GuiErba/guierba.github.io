export const profileQuery = `*[_type == "profile"][0]{
  name, role, location, email, bio, github, linkedin, twitter, footerText
}`;

export const skillsQuery = `*[_type == "skillGroup"] | order(order asc){
  category, skills
}`;

export const experiencesQuery = `*[_type == "experience"] | order(order asc){
  role, company, period, highlights
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc){
  name, description, url, stars
}`;

export const educationQuery = `*[_type == "education"] | order(order asc){
  degree, institution, period
}`;
