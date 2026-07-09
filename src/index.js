// gymos-api · Express HTTP wrapper around gymos-sdk · MIT · AI-Native Solutions
import express from 'express';

const app = express();
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, tool: 'gymos', version: '1.0.0' }));

app.post('/bloomDecompose', async (req, res) => {
  try {
    const { bloomDecompose } = await import('@ai-native-solutions/gymos-sdk');
    const out = typeof bloomDecompose === 'function' ? await bloomDecompose(req.body) : { error: 'bloomDecompose not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/bloomRoute', async (req, res) => {
  try {
    const { bloomRoute } = await import('@ai-native-solutions/gymos-sdk');
    const out = typeof bloomRoute === 'function' ? await bloomRoute(req.body) : { error: 'bloomRoute not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/persist', async (req, res) => {
  try {
    const { persist } = await import('@ai-native-solutions/gymos-sdk');
    const out = typeof persist === 'function' ? await persist(req.body) : { error: 'persist not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/recall', async (req, res) => {
  try {
    const { recall } = await import('@ai-native-solutions/gymos-sdk');
    const out = typeof recall === 'function' ? await recall(req.body) : { error: 'recall not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/goToSection', async (req, res) => {
  try {
    const { goToSection } = await import('@ai-native-solutions/gymos-sdk');
    const out = typeof goToSection === 'function' ? await goToSection(req.body) : { error: 'goToSection not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/toggleMobileNav', async (req, res) => {
  try {
    const { toggleMobileNav } = await import('@ai-native-solutions/gymos-sdk');
    const out = typeof toggleMobileNav === 'function' ? await toggleMobileNav(req.body) : { error: 'toggleMobileNav not callable' };
    res.json(out);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('gymos-api listening on :' + PORT));
