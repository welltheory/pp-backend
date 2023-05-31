import { parseSearch, parsePagination } from '$utils/express';

describe('utils', () => {
  describe('express.js', () => {
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
      it('should return default value with no query pagination', async () => {
        const query = {};
        const output = parsePagination(query);
        const expected = { skip: 0, take: 25, page: 1, limit: 25 };
        expect(output).toEqual(expected);
      });
      // TODO:
    });
  });
  
});

export {};