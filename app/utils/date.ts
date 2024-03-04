export const formatDate = (date: string, language: string = "en") => {
  return new Date(date).toLocaleDateString(language, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
};
