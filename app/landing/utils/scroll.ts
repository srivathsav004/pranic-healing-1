export const handleScrollToId = (id: string) => {
  const item = document.getElementById(id);
  if (item) {
    item.scrollIntoView({ behavior: 'smooth' });
  }
};
