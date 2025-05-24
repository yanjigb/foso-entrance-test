import Home from "@/components/business/home";

import { DefaultPageProps } from '@/@types/locales'
import { getDictionary } from '@/dictionaries/get-dictionary'

async function HomePage({ params }: Readonly<DefaultPageProps>) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return <Home dictionary={dictionary} />
}

export default HomePage
