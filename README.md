# 🎨 Portfolio Dewelopera - Jan Ogiński

Nowoczesna, responsywna strona portfolio stworzona według najlepszych praktyk web development. Projekt został zbudowany w oparciu o przewodnik "Kompletny Przewodnik po Generowaniu Portfolio Dewelopera za Pomocą AI".

## ✨ Funkcje

- 🌓 **Dark/Light Mode** - Pełna obsługa trybów jasnego i ciemnego z płynnym przełączaniem
- 🎭 **Zaawansowane Animacje** - Wykorzystanie Framer Motion do scroll-based animations i mikrointerakcji
- 📱 **Responsive Design** - Optymalizacja dla wszystkich urządzeń
- ⚡ **Wydajność** - Zbudowane z Vite dla błyskawicznego development experience
- 🎯 **TypeScript** - Pełne typowanie dla bezpieczeństwa kodu
- 🎨 **CSS Modules** - Izolowane style dla każdego komponentu
- 📝 **Walidacja Formularza** - React Hook Form z zaawansowaną walidacją

## 🛠️ Stack Technologiczny

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Styling:** CSS Modules
- **Version Control:** Git

## 📁 Struktura Projektu

```
src/
├── assets/          # Obrazy i zasoby statyczne
├── components/
│   ├── ui/         # Komponenty atomowe (Button, Card, Tag, AnimatedHeading)
│   ├── layout/     # Komponenty layoutu (Header, Footer)
│   └── features/   # Komponenty sekcji (Hero, About, Skills, Projects, Contact)
├── context/        # Context API (ThemeContext, ThemeProvider)
├── data/           # Dane statyczne (projekty, umiejętności)
├── hooks/          # Custom hooks (useTheme)
├── pages/          # Strony aplikacji (HomePage)
├── global.css      # Globalne style i zmienne CSS
└── main.tsx        # Punkt wejścia aplikacji
```

## 🚀 Instalacja i Uruchomienie

### Wymagania
- Node.js (v18 lub wyższy)
- npm lub yarn

### Kroki instalacji

1. **Sklonuj repozytorium**
```bash
git clone https://github.com/0GIN/Oginski_wizytowka.git
cd Oginski_wizytowka
```

2. **Zainstaluj zależności**
```bash
npm install
```

3. **Uruchom serwer deweloperski**
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`

4. **Zbuduj wersję produkcyjną**
```bash
npm run build
```

5. **Podgląd wersji produkcyjnej**
```bash
npm run preview
```

## 🎨 Personalizacja

### 1. Dane osobowe
Edytuj pliki w folderze `src/components/features/`:
- `HeroSection.tsx` - Główny nagłówek i tytuł
- `AboutSection.tsx` - Sekcja "O mnie"

### 2. Projekty
Otwórz `src/data/projects.ts` i zaktualizuj dane swoich projektów:
```typescript
{
  id: 1,
  title: 'Nazwa projektu',
  description: 'Opis projektu...',
  technologies: ['React', 'TypeScript', ...],
  imageUrl: 'ścieżka/do/obrazka',
  liveUrl: 'https://link-do-demo',
  repoUrl: 'https://github.com/...'
}
```

### 3. Umiejętności
Edytuj `src/data/skills.ts` aby dodać swoje technologie:
```typescript
{
  category: 'Frontend',
  skills: ['React', 'TypeScript', ...]
}
```

### 4. Kolory i Styling
Wszystkie zmienne kolorystyczne znajdują się w `src/global.css`:
- `:root` - Kolory dla light mode
- `.dark` - Kolory dla dark mode

### 5. Linki społecznościowe
Zaktualizuj linki w `src/components/layout/Footer.tsx` i `Header.tsx`

## 📦 Wdrożenie

### Vercel (Zalecane)
1. Zaloguj się do [Vercel](https://vercel.com)
2. Zaimportuj repozytorium z GitHub
3. Vercel automatycznie wykryje Vite i skonfiguruje build
4. Twoja strona będzie dostępna w kilka minut!

### Netlify
1. Zaloguj się do [Netlify](https://netlify.com)
2. Przeciągnij folder `dist` po wykonaniu `npm run build`
3. Lub połącz z GitHub dla continuous deployment

### GitHub Pages
1. Zainstaluj `gh-pages`: `npm install -D gh-pages`
2. Dodaj do `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Uruchom: `npm run deploy`

## 🎯 Najlepsze Praktyki Zastosowane

- ✅ **Atomic Design** - Hierarchiczna struktura komponentów
- ✅ **Single Responsibility** - Każdy komponent ma jedną odpowiedzialność
- ✅ **TypeScript** - Pełne typowanie dla bezpieczeństwa
- ✅ **Accessibility** - Semantyczny HTML i ARIA labels
- ✅ **Performance** - Lazy loading, optymalizacja obrazów
- ✅ **SEO Ready** - Meta tagi i semantic HTML
- ✅ **Mobile First** - Responsive design od najmniejszych ekranów

## 📚 Dokumentacja Uzupełniająca

Ten projekt został stworzony w oparciu o szczegółowy przewodnik zawierający:
- Analizę trendów wizualnych 2024
- Strategię treści dla rekruterów
- Architekturę aplikacji
- Dekonstrukcję promptów dla AI

## 🤝 Kontakt

- **Email:** jan.oginski@example.com
- **LinkedIn:** [linkedin.com/in/jan-oginski](https://linkedin.com/in/jan-oginski)
- **GitHub:** [github.com/0GIN](https://github.com/0GIN)

## 📄 Licencja

Ten projekt jest udostępniony na licencji MIT. Możesz go swobodnie używać jako szablonu dla swojego portfolio.

---

**Wskazówka:** Pamiętaj, aby zastąpić wszystkie przykładowe dane swoimi rzeczywistymi informacjami przed wdrożeniem!
Test repository 
