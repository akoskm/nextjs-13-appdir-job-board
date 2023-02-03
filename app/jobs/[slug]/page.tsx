import Link from 'next/link'
import styles from '../../page.module.css'
import { getJobs } from '../../../db/data-store';

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const jobs = await getJobs();

  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function Job({ params }: Props) {
  const [job] = await getJobs(params.slug);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {job.title}
        </h1>
        <div style={{ marginBottom: '50px'}}>
          {job.description}
        </div>
        <Link href={'/'}>Go Back</Link>
      </main>
    </div>
  )
}
