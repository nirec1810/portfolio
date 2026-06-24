const gradients = [
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-rose-500 to-pink-600',
  'from-violet-500 to-purple-600',
  'from-cyan-500 to-sky-600',
  'from-stone-600 to-stone-800',
  'from-amber-600 to-red-500',
  'from-teal-500 to-cyan-600',
  'from-rose-400 to-amber-500',
  'from-indigo-500 to-violet-600',
] as const

export function getGradientClass(title: string): string {
  let hash = 0
  for (let i = 0; i < title.length; i++) hash = title.charCodeAt(i) + ((hash << 5) - hash)
  return gradients[Math.abs(hash) % gradients.length]
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-MX', { year: 'numeric', month: 'short' })
}

const deviconMap: Record<string, string> = {
  'python': 'devicon-python-plain',
  'c#': 'devicon-csharp-plain',
  'csharp': 'devicon-csharp-plain',
  'javascript': 'devicon-javascript-plain',
  'typescript': 'devicon-typescript-plain',
  'sql': 'devicon-microsoftsqlserver-plain',
  'react.js': 'devicon-react-original',
  'react': 'devicon-react-original',
  'next.js': 'devicon-nextjs-original',
  'nextjs': 'devicon-nextjs-original',
  'html5': 'devicon-html5-plain',
  'html': 'devicon-html5-plain',
  'css3': 'devicon-css3-plain',
  'css': 'devicon-css3-plain',
  'asp.net core': 'devicon-dotnetcore-plain',
  'asp.net core mvc': 'devicon-dotnetcore-plain',
  'asp.net core web api': 'devicon-dotnetcore-plain',
  'node.js': 'devicon-nodejs-plain',
  'nodejs': 'devicon-nodejs-plain',
  'flask': 'devicon-flask-original',
  'entity framework core': 'devicon-dotnetcore-plain',
  'sql server': 'devicon-microsoftsqlserver-plain',
  'postgresql': 'devicon-postgresql-plain',
  'mysql': 'devicon-mysql-plain',
  'mongodb': 'devicon-mongodb-plain',
  'supabase': 'devicon-supabase-plain',
  'microsoft azure': 'devicon-azure-plain',
  'azure': 'devicon-azure-plain',
  'docker': 'devicon-docker-plain',
  'jenkins': 'devicon-jenkins-plain',
  '.net maui': 'devicon-dotnetcore-plain',
  'flutter': 'devicon-flutter-plain',
  'git': 'devicon-git-plain',
  'github': 'devicon-github-original',
  'java': 'devicon-java-plain',
  'spring boot': 'devicon-spring-plain',
  'tailwind css': 'devicon-tailwindcss-plain',
  'tailwind': 'devicon-tailwindcss-plain',
  'vercel': 'devicon-vercel-plain',
  'sqlite': 'devicon-sqlite-plain',
  'unity': 'devicon-unity-plain',
  'shaders': 'devicon-unity-plain',
  'osgi': 'devicon-java-plain',
  'karaf': 'devicon-java-plain',
}

export function getDeviconClass(tech: string): string | null {
  const key = tech.toLowerCase()
  if (deviconMap[key]) return deviconMap[key]
  for (const [k, v] of Object.entries(deviconMap)) {
    if (key.includes(k) || k.includes(key)) return v
  }
  return null
}

const deviconBrandColors: Record<string, string> = {
  'python': 'text-yellow-500 dark:text-yellow-400',
  'c#': 'text-green-600 dark:text-green-400',
  'csharp': 'text-green-600 dark:text-green-400',
  'javascript': 'text-yellow-500 dark:text-yellow-400',
  'typescript': 'text-sky-600 dark:text-sky-400',
  'sql': 'text-red-600 dark:text-red-400',
  'react.js': 'text-sky-500 dark:text-sky-400',
  'react': 'text-sky-500 dark:text-sky-400',
  'next.js': 'text-stone-700 dark:text-stone-300',
  'nextjs': 'text-stone-700 dark:text-stone-300',
  'html5': 'text-orange-600 dark:text-orange-400',
  'html': 'text-orange-600 dark:text-orange-400',
  'css3': 'text-sky-600 dark:text-sky-400',
  'css': 'text-sky-600 dark:text-sky-400',
  'asp.net core': 'text-violet-600 dark:text-violet-400',
  'asp.net core mvc': 'text-violet-600 dark:text-violet-400',
  'asp.net core web api': 'text-violet-600 dark:text-violet-400',
  'node.js': 'text-green-600 dark:text-green-400',
  'nodejs': 'text-green-600 dark:text-green-400',
  'flask': 'text-stone-600 dark:text-stone-400',
  'entity framework core': 'text-violet-600 dark:text-violet-400',
  'sql server': 'text-red-600 dark:text-red-400',
  'postgresql': 'text-blue-600 dark:text-blue-400',
  'mysql': 'text-blue-500 dark:text-blue-400',
  'mongodb': 'text-green-600 dark:text-green-400',
  'supabase': 'text-emerald-500 dark:text-emerald-400',
  'microsoft azure': 'text-blue-600 dark:text-blue-400',
  'azure': 'text-blue-600 dark:text-blue-400',
  'docker': 'text-sky-500 dark:text-sky-400',
  'jenkins': 'text-red-500 dark:text-red-400',
  '.net maui': 'text-violet-600 dark:text-violet-400',
  'flutter': 'text-sky-500 dark:text-sky-400',
  'git': 'text-orange-500 dark:text-orange-400',
  'github': 'text-stone-700 dark:text-stone-300',
  'java': 'text-red-600 dark:text-red-400',
  'spring boot': 'text-green-500 dark:text-green-400',
  'tailwind css': 'text-cyan-500 dark:text-cyan-400',
  'tailwind': 'text-cyan-500 dark:text-cyan-400',
  'vercel': 'text-stone-600 dark:text-stone-300',
  'sqlite': 'text-blue-600 dark:text-blue-400',
  'unity': 'text-stone-600 dark:text-stone-400',
}

export function getDeviconColor(tech: string): string {
  const key = tech.toLowerCase()
  if (deviconBrandColors[key]) return deviconBrandColors[key]
  for (const [k, v] of Object.entries(deviconBrandColors)) {
    if (key.includes(k) || k.includes(key)) return v
  }
  return 'text-stone-500 dark:text-stone-400'
}

const languageColors: Record<string, string> = {
  'typescript': 'bg-sky-100 text-sky-700 ring-sky-200',
  'javascript': 'bg-yellow-100 text-yellow-700 ring-yellow-200',
  'c#': 'bg-violet-100 text-violet-700 ring-violet-200',
  'java': 'bg-red-100 text-red-700 ring-red-200',
  'html/js': 'bg-orange-100 text-orange-700 ring-orange-200',
  'html': 'bg-orange-100 text-orange-700 ring-orange-200',
  'shaderlab': 'bg-teal-100 text-teal-700 ring-teal-200',
  'scss': 'bg-pink-100 text-pink-700 ring-pink-200',
}

export function getLanguageColor(lang: string): string {
  return languageColors[lang.toLowerCase()] || 'bg-stone-100 text-stone-700 ring-stone-200'
}
