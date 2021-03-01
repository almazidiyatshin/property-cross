export const createPages = (totalPages, currentPage) => {
  const pages = [];

  if (totalPages > 9 && currentPage > 4) {
    for (let i = currentPage - 4; i <= currentPage + 4; i += 1) {
      pages.push(i);
      if (i === totalPages) {
        break;
      }
    }
  }

  if (totalPages > 9 && currentPage <= 4) {
    for (let i = 1; i <= 9; i += 1) {
      pages.push(i);
    }
  }

  if (totalPages <= 9) {
    for (let i = 1; i <= totalPages; i += 1) {
      pages.push(i);
    }
  }

  return pages;
};
