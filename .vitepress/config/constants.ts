const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://windicss.netlify.app' : 'http://localhost:3000'

export const metaData = {
  title: 'Windi CSS 🌬',
  description: 'Next generation Tailwind CSS compiler.',
  site,
  image: `${site}/assets/banner.png`,
}
