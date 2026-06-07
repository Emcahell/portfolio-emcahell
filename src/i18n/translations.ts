export type TranslationKey = keyof typeof translations.en;

type Translations = {
  [lang: string]: { [key in TranslationKey]?: string };
};

export const translations: Translations = {
  en: {
    downloadCV: "Download CV",
    greeting: "I'm a",
    projects: "My Projects",
    aboutMe:
      "I'm a self-taught web developer with a passion for learning and creating. I enjoy working on projects that allow me to solve problems and create something useful for others.",
    projectStatistics:
      "An SPA to get the average and percentage of attendance of the monthly school enrollment.",
    projectStatesVzla:
      "This is an website for finding information about Venezuela's current states and relevant data, you can search by state and save your favorites.",
    projectDistrictsPanem:
      "Web site with information about the 12 districts of Panem and their location, industry, and winner.",
    projectTop:
      "Web site with information about Twenty One Pilots, their origin, albums (with their eras), lore and some interesting facts about their members.",
    projectKefren:
      "Portfolio for Kefren Art, a digital artist. It shows his work, his social networks and contact information.",
    projectOneStarlink:
      "A landing page that has been created for One Starlink, provides information about products and services  offered.",
    projectChatIaEmma:
      "Chatbot with an artificial intelligence capable of responding in Venezuelan dialect.",
    projectOptimizeImage:
      "Page Web for optimizing images, compressing them, and changing their format to WebP.",
    projectWhatsaiup:
      "Web to chat with AI models through api key, inspired by WhatsApp with style of Material Symbols.",
    projectCountdownSOTR:
      "Countdown to the premiere of The Hunger Games: Dawn on Harvest.",
    skills: "My Skills",
  },
  es: {
    downloadCV: "Descargar CV",
    greeting: "Soy un",
    projects: "Mis Proyectos",
    aboutMe:
      "Soy un desarrollador web autodidacta con pasión por aprender y crear. Disfruto trabajando en proyectos que me permiten crear algo útil para los demás.",
    projectStatistics:
      "SPA que obtiene el promedio y porcentaje de asistencia de la matricula escolar mensual.",
    projectStatesVzla:
      "Web para conocer los estados de Venezuela y sus datos relevantes, puedes buscar por estado y guardar a tus favoritos.",
    projectDistrictsPanem:
      "Sitio Web con información sobre los 12 distritos de Panem, su ubicación, su industria y sus vencedores.",
    projectTop:
      "Sitio Web con información sobre Twenty One Pilots, origen de la banda, albums (con sus eras), lore y algunas curiosidades sobre sus integrantes.",
    projectKefren:
      "Portafolio para Kefren Art, un artista digital. Muestra sus trabajos, sus redes sociales e información de contacto.",
    projectOneStarlink:
      "Landing Page hecha para One Starlink, muestra información sobre productos y servicios que ofrecen.",
    projectChatIaEmma:
      "Chatbot con inteligencia artificial que responde con dialecto venezolano.",
    projectOptimizeImage:
      "Pagina Web para optimizar imágenes, comprimiendolas y cambiando su formato a WebP.",
    projectWhatsaiup:
      "Web para chatear con modelos de IA mediante api key, inspirada en WhatsApp con estilo de Material Symbols.",
    projectCountdownSOTR:
      "Cuenta regresiva para el estreno de Los Juegos del Hambre: Amanecer en la Cosecha.",
    skills: "Mis Habilidades",
  },
};
