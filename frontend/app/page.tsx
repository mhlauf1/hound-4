import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {homePageQuery} from '@/sanity/lib/queries'
import {HomePageQueryResult} from '@/sanity.types'

export default async function Page() {
  const {data: page} = await sanityFetch({
    query: homePageQuery,
  })

  if (!page?._id) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-section">Welcome</h1>
          <p className="mt-4 text-body text-muted">
            Create a page with slug &ldquo;home&rdquo; in Sanity Studio to get started.
          </p>
        </div>
      </div>
    )
  }

  return <PageBuilderPage page={page as HomePageQueryResult} />
}
