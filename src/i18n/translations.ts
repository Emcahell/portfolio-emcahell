export type TranslationKey = keyof typeof translations.en;

type Translations = {
  [lang: string]: { [key in TranslationKey]?: string };
};

export const translations: Translations = {
  en: {
    downloadCV: "Download CV",
    greeting: "I'm a",
    projects: "My Projects",
    projectStatistics: "An SPA to get the average and percentage of attendance of the monthly school enrollment.",
    projectStatesVzla: "Know the states of Venezuela and their relevant data, search by state and save your favorites.",
    projectDistrictsPanem: 'Web site to know the 12 districts of Panem, their location, their industry and their victors.',
    projectTop: 'Web site with information about Twenty One Pilots, their origin, albums (with their eras), lore and some interesting facts about their members.',
    projectKefren: 'Portfolio for Kefren Art, a digital artist. It shows his work, his social networks and contact information.',
    skills: 'My Skills',
  },
  es: {
    downloadCV: "Descargar CV",
    greeting: "Soy un",
    projects: "Mis Proyectos",
    projectStatistics: "Una SPA para obtener el promedio y porcentaje de asistencia de la matricula escolar mensual.",
    projectStatesVzla: "Conoce los estados de Venezuela y sus datos relevantes, busca por estado y guarda tus favoritos.",
    projectDistrictsPanem: 'Sitio Web para conocer a los 12 distritos de Panem, su ubicación, su industria y sus vencedores.',
    projectTop: 'Sitio Web con información sobre Twenty One Pilots, origen de la banda, albums (con sus eras), lore y algunas curiosidades sobre sus integrantes.',
    projectKefren: 'Portafolio para Kefren Art, un artista digital. Muestra sus trabajos, sus redes sociales e información de contacto.',
    skills: 'Mis Habilidades',
  },
};
