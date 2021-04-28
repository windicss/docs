const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://windicss.org' : 'http://localhost:3000'

export const metaData = {
  title: 'Windi CSS',
  description: 'Next generation utility-first CSS framework.',
  site,
  image: `${site}/assets/og-image.png`,
}
