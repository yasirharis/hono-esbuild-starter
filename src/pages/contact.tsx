import { Layout } from '../components/Layout';

export const ContactPage = () => {
  return (
    <Layout title="Contact - Hono App">
      <div style="padding: 3rem 0; max-width: 600px;">
        <h1>Contact Us</h1>
        <p style="margin-bottom: 2rem; color: var(--text-muted);">
          Send us a message and we'll get back to you shortly.
        </p>

        <form action="/contact" method="post">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>

          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </Layout>
  );
};