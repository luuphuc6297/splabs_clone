export const scrollSection = (id) => {
    const section = document?.querySelector(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
        });
    }
};
