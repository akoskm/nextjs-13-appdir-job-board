import Link from 'next/link'
import styles from './page.module.css'
import { getJobs } from '../db/data-store';

export default async function Home() {
  const jobs = await getJobs();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Job Board
        </h1>
        <div>
          {jobs.map((job) => (
            <div key={job.slug}>
              <div>
                <div><b>{job.title}</b></div>
                <div>{job.description}</div>
              </div>
              <div>
                <Link href={`jobs/${job.slug}`}>View Job</Link>
              </div>
              <hr/>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
