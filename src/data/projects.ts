import { Project } from './types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'QuizRush',
    description: 'Aplikacja quizowa stworzona jako projekt zaliczeniowy z przedmiotu "Aplikacje Internetowe". System quizów z różnymi kategoriami, systemem punktacji i rankingiem użytkowników. Implementacja backendu w PHP z bazą danych MySQL.',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    imageUrl: 'https://placehold.co/600x400/9b59b6/ffffff?text=QuizRush',
    repoUrl: 'https://github.com/0GIN/QuizRush',
  },
  {
    id: 2,
    title: 'BibliotekaApp',
    description: 'Aplikacja do zarządzania biblioteką stworzona w C# jako projekt zaliczeniowy. System umożliwia zarządzanie książkami, użytkownikami i wypożyczeniami. Wykorzystuje Windows Forms i lokalną bazę danych.',
    technologies: ['C#', 'Windows Forms', '.NET', 'SQL'],
    imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=BibliotekaApp',
    repoUrl: 'https://github.com/0GIN/BibliotekaApp',
  },
  {
    id: 3,
    title: 'Mapmaker Test',
    description: 'Projekt testowy stworzony w TypeScript podczas praktyk w Mapmaker.online. Implementacja interfejsów front-end z wykorzystaniem najnowszych standardów TypeScript. Projekt otrzymał gwiazdkę od społeczności! ⭐',
    technologies: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    imageUrl: 'https://placehold.co/600x400/64ffda/121212?text=Mapmaker',
    repoUrl: 'https://github.com/0GIN/mapmaker_test',
  },
  {
    id: 4,
    title: 'Portfolio Developer',
    description: 'Nowoczesne portfolio programisty z wykorzystaniem React 19, TypeScript 5.7 i Vite 6. Zawiera sekcje Hero, About, Skills, Projects i Contact z animacjami Framer Motion. Responsywne, z systemem motywów (dark/light mode) i walidacją formularza kontaktowego.',
    technologies: ['React 19', 'TypeScript 5.7', 'Vite 6', 'Framer Motion', 'CSS Modules'],
    imageUrl: 'https://placehold.co/600x400/007bff/ffffff?text=Portfolio',
    liveUrl: 'https://oginski-wizytowka.vercel.app',
    repoUrl: 'https://github.com/0GIN/Oginski_wizytowka',
  },
];
