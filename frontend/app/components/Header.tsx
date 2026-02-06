import {sanityFetch} from '@/sanity/lib/live'
import {navSettingsQuery} from '@/sanity/lib/queries'
import NavBar from '@/app/components/NavBar'

export default async function Header() {
  const {data: settings} = await sanityFetch({
    query: navSettingsQuery,
  })

  return <NavBar settings={settings} />
}
