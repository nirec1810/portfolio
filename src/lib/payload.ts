import { mockData } from './mock-data'

interface FetchCollectionParams {
  collection: string
  depth?: number
  limit?: number
  where?: Record<string, unknown>
  sort?: string
}

function applyFilters<T>(data: T[], params: FetchCollectionParams): T[] {
  let result = [...data]

  if (params.where) {
    for (const [key, condition] of Object.entries(params.where)) {
      const cond = condition as Record<string, unknown>
      if (cond.equals !== undefined) {
        result = result.filter(
          (item: any) => item[key] === cond.equals,
        )
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
  limit = 100,
  where,
  sort,
}: FetchCollectionParams): Promise<T[]> {
  const mock = (mockData[collection] ?? []) as T[]
  return applyFilters(mock, { collection, where, sort, limit })
}

export async function fetchBySlug<T>(
  collection: string,
  slug: string,
): Promise<T | null> {
  const docs = await fetchCollection<T>({
    collection,
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] ?? null
}