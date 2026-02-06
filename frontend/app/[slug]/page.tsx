import type {Metadata} from 'next'
import {notFound} from 'next/navigation'

import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {getPageQuery, pagesSlugs} from '@/sanity/lib/queries'
import {GetPageQueryResult} from '@/sanity.types'

type Props = {
  params: Promise<{slug: string}>
}

export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: pagesSlugs,
    perspective: 'published',
    stega: false,
  })
  return data
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params,
    stega: false,
  })

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata
}

export default async function Page(props: Props) {
  const params = await props.params
  const [{data: page}] = await Promise.all([sanityFetch({query: getPageQuery, params})])

  if (!page?._id) {
    notFound()
  }

  return (
    <div>
      {page.heading && (
        <div className="container py-12 lg:py-24">
          <div className="pb-6 border-b border-dark/10">
            <div className="max-w-3xl">
              <h1 className="text-section">{page.heading}</h1>
              {page.subheading && (
                <p className="mt-4 text-body text-muted">{page.subheading}</p>
              )}
            </div>
          </div>
        </div>
      )}
      <PageBuilderPage page={page as GetPageQueryResult} />
    </div>
  )
}
