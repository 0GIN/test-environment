# ✅ CHECKLIST PERSONALIZACJI PORTFOLIO

## 📝 Dane Osobowe

### 1. Hero Section
- [ ] Zmień "Jan Ogiński" na swoje imię i nazwisko
  - Plik: `src/components/features/HeroSection.tsx`
  - Linia: `<AnimatedHeading text="Cześć, jestem Jan Ogiński" />`
  
- [ ] Zmień tytuł zawodowy
  - Plik: `src/components/features/HeroSection.tsx`
  - Linia: `Frontend Developer | React & TypeScript Specialist`

### 2. About Section
- [ ] Dodaj swoje zdjęcie
  - Umieść plik w: `src/assets/images/`
  - Zaktualizuj ścieżkę w: `src/components/features/AboutSection.tsx`
  - Zastąp: `https://placehold.co/300x300/...`
  
- [ ] Napisz własny tekst "O mnie"
  - Plik: `src/components/features/AboutSection.tsx`
  - 3 paragrafy opisujące twoją historię

---

## 💼 Projekty

### 3. Dodaj swoje projekty
- [ ] Otwórz: `src/data/projects.ts`
- [ ] Dla każdego projektu zmień:
  - [ ] `title` - Nazwa projektu
  - [ ] `description` - Szczegółowy opis (struktura: Problem → Rozwiązanie → Wynik)
  - [ ] `technologies` - Twoje technologie
  - [ ] `imageUrl` - Zrzut ekranu projektu (umieść w `src/assets/images/`)
  - [ ] `liveUrl` - Link do działającej wersji (opcjonalny)
  - [ ] `repoUrl` - Link do repozytorium GitHub

**Wskazówka:** Opisuj projekty jako case study:
- Jaki problem rozwiązywałeś?
- Jakie decyzje techniczne podjąłeś?
- Co osiągnąłeś / Czego się nauczyłeś?

---

## 🛠️ Umiejętności

### 4. Zaktualizuj technologie
- [ ] Otwórz: `src/data/skills.ts`
- [ ] Kategoria "Frontend":
  - [ ] Dodaj/usuń technologie, które znasz
  - [ ] Zachowaj tylko te, z którymi pracowałeś
  
- [ ] Kategoria "Backend & Database":
  - [ ] Dostosuj do swojego stacku
  
- [ ] Kategoria "Narzędzia & Inne":
  - [ ] Dodaj narzędzia, których używasz

---

## 🎨 Styling i Kolory

### 5. Zmień paletę kolorów
- [ ] Otwórz: `src/global.css`
- [ ] **Light Mode** (`:root`):
  - [ ] `--color-bg-primary` - Główne tło
  - [ ] `--color-accent` - Kolor akcentu (przyciski, linki)
  - [ ] Pozostałe zmienne według potrzeb
  
- [ ] **Dark Mode** (`.dark`):
  - [ ] Te same zmienne dla trybu ciemnego

**Narzędzie pomocnicze:** [Coolors.co](https://coolors.co/) do generowania palet

### 6. Zmień czcionki (opcjonalnie)
- [ ] W `src/global.css` zmień `font-family` w sekcji `body`
- [ ] Dodaj import z Google Fonts w `index.html` jeśli potrzebne

---

## 🔗 Linki Społecznościowe

### 7. Header (Logo)
- [ ] Otwórz: `src/components/layout/Header.tsx`
- [ ] Zmień `JO` na swoje inicjały lub logo

### 8. Footer
- [ ] Otwórz: `src/components/layout/Footer.tsx`
- [ ] Zmień:
  - [ ] `Jan Ogiński` na swoje imię
  - [ ] Link GitHub: `https://github.com/yourusername`
  - [ ] Link LinkedIn: `https://linkedin.com/in/yourusername`
  - [ ] Email: `your.email@example.com`

---

## 📧 Formularz Kontaktowy

### 9. Integracja (opcjonalnie)
Domyślnie formularz tylko loguje dane do konsoli.

**Opcje integracji:**
- [ ] **EmailJS** - Darmowe wysyłanie emaili
- [ ] **Formspree** - Prosty backend dla formularzy
- [ ] **Netlify Forms** - Jeśli hostingujesz na Netlify
- [ ] **Własny backend** - Node.js + nodemailer

Plik do modyfikacji: `src/components/features/ContactSection.tsx`

---

## 🚀 Przed Wdrożeniem

### 10. Meta Tags (SEO)
- [ ] Otwórz: `index.html`
- [ ] Zmień:
  - [ ] `<title>Portfolio - Deweloper Frontend</title>`
  - [ ] Dodaj meta description
  - [ ] Dodaj Open Graph tags dla social media

### 11. Favicon
- [ ] Wygeneruj favicon (np. na [Favicon.io](https://favicon.io/))
- [ ] Umieść w: `public/`
- [ ] Zaktualizuj link w `index.html`

### 12. Analytics (opcjonalnie)
- [ ] Dodaj Google Analytics
- [ ] Lub Plausible Analytics (bardziej privacy-friendly)

---

## 📸 Obrazy

### 13. Optymalizacja
- [ ] Zmniejsz rozmiar zdjęć (max 300KB dla projektów)
- [ ] Użyj formatu WebP dla lepszej kompresji
- [ ] Narzędzia: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)

### 14. Responsywność
- [ ] Przetestuj na różnych urządzeniach
- [ ] Sprawdź w Chrome DevTools (Responsive Mode)

---

## 🧪 Testy Końcowe

### 15. Przed publikacją sprawdź:
- [ ] Wszystkie linki działają
- [ ] Obrazy się ładują
- [ ] Formularz działa (przynajmniej logowanie)
- [ ] Dark/Light mode przełącza się
- [ ] Animacje działają płynnie
- [ ] Nie ma błędów w konsoli przeglądarki
- [ ] Strona działa na mobile
- [ ] Czas ładowania < 3 sekundy

---

## 🌐 Wdrożenie

### 16. GitHub
- [ ] Stwórz nowe repozytorium
- [ ] Push kodu: 
  ```bash
  git add .
  git commit -m "Initial portfolio commit"
  git push origin main
  ```

### 17. Vercel (zalecane)
- [ ] Zaloguj się na [Vercel.com](https://vercel.com)
- [ ] Import repozytorium z GitHub
- [ ] Deploy automatycznie wykryje Vite
- [ ] Gotowe! 🎉

### 18. Domena (opcjonalnie)
- [ ] Kup domenę (np. [Namecheap](https://www.namecheap.com/))
- [ ] Połącz z Vercel w ustawieniach projektu

---

## 🎯 Wskazówki Końcowe

### Jakość > Ilość
- Lepiej 3-4 dopracowane projekty niż 10 półśrodków
- Każdy projekt powinien pokazywać unikalną umiejętność

### Storytelling
- Nie tylko "co zrobiłem", ale "dlaczego" i "jak"
- Pokaż proces myślowy i rozwiązywanie problemów

### Aktualność
- Regularnie aktualizuj portfolio (co 2-3 miesiące)
- Usuwaj stare projekty, dodawaj nowe

### Feedback
- Poproś znajomych o opinię
- Testuj na prawdziwych użytkownikach
- Iteruj i ulepszaj

---

**Powodzenia z portfolio! 🚀**

_Jeśli masz pytania, sprawdź README.md lub WERYFIKACJA.md dla szczegółów technicznych._
