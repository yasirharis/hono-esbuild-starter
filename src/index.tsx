import { Hono } from 'hono/tiny'
import { HomePage } from '@/pages/home'
import { ContactPage } from '@/pages/contact'
import { AboutPage } from '@/pages/about'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <HomePage />
  )
})

app.get('/about', (c) => {
  return c.html(
    <ContactPage />
  )
})

app.get('/contact', (c) => {
  return c.html(
    <AboutPage />
  )
})

export default app