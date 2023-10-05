import { parseSearch, parsePagination } from '$utils/express';

describe('parseSearch', () => {
  it('should return "undefined" with no query.search', async () => {
    const query = {};
    const output = parseSearch(query);
    expect(output).toEqual(undefined);
  });
  it('should return proper output with query.search without spaces', async () => {
    const query = {
      search: 'foo',
    };
    const output = parseSearch(query);
    expect(output).toEqual('foo');
  });
  it('should return proper output with query.search with spaces', async () => {
    const query = {
      search: 'foo bar',
    };
    const output = parseSearch(query);
    expect(output).toEqual('foo & bar');
  });
});

describe('parsePagination', () => {
  // TODO:
  // Add tests
});

export {};