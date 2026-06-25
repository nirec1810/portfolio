import { getData } from './mock-data'
import type { Locale } from '../i18n/index'

interface FetchCollectionParams {
  collection: string
  locale: Locale
  depth?: number
  limit?: number
  where?: Record<string, unknown>
  sort?: string
}

function applyFilters<T>(data: T[], params: { where?: Record<string, unknown>; sort?: string; limit?: number }): T[] {
  let result = [...data]

  if (params.where) {
    for (const [key, condition] of Object.entries(params.where)) {
      const cond = condition as Record<string, unknown>
      if (cond.equals !== undefined) {
        result = result.filter((item: any) => item[key] === cond.equals)
      }
    }
  }

  if (params.sort) {
    const sortField = params.sort.replace(/^-/, '')
    const desc = params.sort.startsWith('-')
    result.sort((a: any, b: any) => {
      const va = a[sortField] ?? 0
      const vb = b[sortField] ?? 0
      return desc ? (va < vb ? 1 : -1) : va > vb ? 1 : -1
    })
  }

  if (params.limit && result.length > params.limit) {
    result = result.slice(0, params.limit)
  }

  return result
}

export async function fetchCollection<T>({
  collection,
  locale,
  limit = 100,
  where,
  sort,
}: FetchCollectionParams): Promise<T[]> {
  const data = getData(locale)
  const collectionData = (data as any)[collection] ?? []
  return applyFilters(collectionData, { where, sort, limit })
}

export async function fetchBySlug<T>(
  collection: string,
  slug: string,
  locale: Locale,
): Promise<T | null> {
  const docs = await fetchCollection<T>({
    collection,
    locale,
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] ?? null
}
