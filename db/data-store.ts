const jobs = [{
  slug: 'junior-react-dev',
  title: 'Junior Web Developer',
  description: 'Familiar with modern front end development.'
}, {
  slug: 'ios-dev',
  title: 'iOS Developer',
  description: 'Passionate for crafting great mobile experiences',
}, {
  slug: 'python-data-scientist',
  title: 'Data Scientist',
  description: 'Love for big data'
}]

export async function getJobs(slug?: string): Promise<Array<Job>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (slug) {
        const job = jobs.filter(j => j.slug === slug);
        resolve(job);
      } else {
        resolve(jobs);
      }
    }, 1000)
  })
}