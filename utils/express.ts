export const parsePagination = (query: Record<string, string>) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 25;
  return {
    skip: (page - 1) * limit,
    take: limit,
    page,
    limit,
  };
};

export const parseSearch = (query: Record<string, string>) => {
  const { search } = query;
  if (!search) return undefined;
  return decodeURIComponent(search)
    .split(' ')
    .filter(Boolean)
    .map((r) => r.trim())
    .join(' & ');
};
