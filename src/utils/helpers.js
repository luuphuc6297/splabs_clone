export const scrollSection = (id) => {
  const section = document.querySelector(`${id}`);
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
