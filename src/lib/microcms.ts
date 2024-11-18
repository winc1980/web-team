//SDK利用準備
import type { MicroCMSQueries } from 'microcms-js-sdk'
import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})

//型定義
export type Work = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  sp_image: string
  pc_image: string
  url: string
  content: string
  contributors: string
  profile: string
  product_category: string
}
export type WorkResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Work[]
}

//APIの呼び出し
export const getWorks = async (queries?: MicroCMSQueries) => {
  return await client.get<WorkResponse>({ endpoint: 'works', queries })
}
export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Work>({
    endpoint: 'works',
    contentId,
    queries,
  })
}

//newsの型定義
export type News = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
}
export type NewsResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: News[]
}

//NewsのAPIの呼び出し
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.get<NewsResponse>({ endpoint: 'news', queries })
}
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
  })
}
