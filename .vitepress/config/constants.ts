const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://windicss.netlify.app' : 'http://localhost:3000'

export const metaData = {
  title: 'Windi CSS 🌬',
  description: 'Next generation utility-first CSS framework.',
  site,
  image: `${site}/assets/banner.png`,
}
