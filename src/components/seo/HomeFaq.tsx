import { HOME_FAQS } from '@/lib/seo/organizationSchema';

export function HomeFaq() {
  return (
    <section
      aria-labelledby="faq-heading"
      style={{
        backgroundColor: '#F7FAFC',
        borderRadius: '12px',
        padding: '2rem',
      }}
    >
      <h2
        id="faq-heading"
        style={{
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
          color: '#1A202C',
        }}
      >
        Veelgestelde vragen
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {HOME_FAQS.map((faq) => (
          <article key={faq.question}>
            <h3
              style={{
                fontSize: '1.125rem',
                marginBottom: '0.5rem',
                color: '#1A202C',
              }}
            >
              {faq.question}
            </h3>
            <p style={{ color: '#2D3748', lineHeight: 1.6, margin: 0 }}>
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
