import { useState } from 'react';
import styles from './GptDemoPage.module.css';

const EXAMPLE_PROMPT = `Napisz nowoczesną, responsywną stronę landingową dla produktu SaaS "FlowWrite" — krótki nagłówek, 3 korzyści, wywołanie do akcji i przyjazne microcopy.`;

export function GptDemoPage() {
  const [prompt, setPrompt] = useState(EXAMPLE_PROMPT);
  const [preview, setPreview] = useState<string>('');
  const [loading, setLoading] = useState(false);

  function runDemo() {
    setLoading(true);
    // Fake async to simulate model thinking — no network calls.
    setTimeout(() => {
      const generated = generateFakeWebsite(prompt);
      setPreview(generated);
      setLoading(false);
    }, 700);
  }

  return (
    <section className={styles.gptDemoPage} aria-labelledby="gpt-demo-title">
      <div className={styles.card}>
        <div className={styles.headerRow}>
          <div>
            <h2 id="gpt-demo-title" className={styles.title}>GPT-5 mini — Demo tworzenia stron</h2>
            <p className={styles.subtitle}>Pokaż pełny potencjał pisania stron bez wysiłku. Wpisz prompt i zobacz podgląd.</p>
          </div>
          <div className={styles.exampleTag}>GPT-5 mini</div>
        </div>

        <div className={styles.demoArea}>
          <div>
            <label className={styles.smallNote}>Prompt (edytowalny):</label>
            <div className={styles.promptBox} contentEditable onInput={(e) => setPrompt((e.target as HTMLElement).innerText)} role="textbox" aria-label="prompt">
              {prompt}
            </div>

            <div className={styles.controls}>
              <button className={styles.btn} onClick={runDemo} aria-busy={loading}>{loading ? 'Generuję…' : 'Generuj podgląd'}</button>
              <button className={styles.btn} onClick={() => { setPrompt(EXAMPLE_PROMPT); setPreview(''); }}>Przywróć przykładowy</button>
            </div>
            <p className={styles.smallNote}>Ten demo działa offline i generuje w czasie rzeczywistym stylizowany podgląd HTML/CSS (fałszywy model) — to pokaz wizualny możliwości.</p>
          </div>

          <div>
            <div className={styles.preview} aria-live="polite">
              {preview ? (
                <div dangerouslySetInnerHTML={{ __html: preview }} />
              ) : (
                <div style={{ color: 'rgba(255,255,255,0.6)' }}>Podgląd pojawi się tutaj po wygenerowaniu.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function generateFakeWebsite(prompt: string) {
  // Very small deterministic fake generator to simulate output.
  const title = extractTitle(prompt) || 'FlowWrite — pisz szybciej, publikuj pięknie';
  const bullets = [
    'Automatyzuj przepływ treści i skróć czas publikacji',
    'Inteligentne szablony dopasowane do Twojej marki',
    'Eksportuj gotowe strony i artykuły jednym kliknięciem',
  ];

  return `
    <div style="font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial; color:#e6eef8;">
      <header style="padding:24px 0;">
        <h1 style="margin:0;font-size:28px;color:#fff">${escapeHtml(title)}</h1>
        <p style="margin:8px 0 0;color:rgba(230,238,248,0.85)">Szybkie tworzenie treści i stron — gotowe komponenty, SEO i responsywność.</p>
      </header>
      <main style="display:flex;gap:16px;margin-top:18px;flex-wrap:wrap;">
        <section style="flex:1;min-width:220px;">
          <ul style="padding-left:18px;margin:0;">
            ${bullets.map(b => `<li style="margin-bottom:10px;color:#dbeafe">${escapeHtml(b)}</li>`).join('')}
          </ul>
        </section>
        <aside style="width:220px;background:linear-gradient(180deg,#0b1220,#061021);border-radius:10px;padding:12px;">
          <button style="width:100%;background:#7c3aed;color:#fff;border:none;padding:10px;border-radius:8px;font-weight:700;">Wypróbuj za darmo</button>
        </aside>
      </main>
      <footer style="margin-top:18px;color:rgba(255,255,255,0.6)">Wygenerowano lokalnie — symulacja GPT-5 mini.</footer>
    </div>
  `;
}

function extractTitle(prompt: string) {
  const m = prompt.match(/stron[yi] ([A-Za-z"'\s\-\u0100-\u017F]+)/i);
  return m ? m[1].trim() : null;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
