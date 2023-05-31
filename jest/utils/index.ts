// @ts-nocheck
import prisma, { listModelsKeys} from '$prisma/client';

export default {
  resetDatabase: async () => {
    const models = listModelsKeys();
    for (const model of models) {
      await prisma[model].deleteMany();
    }
    return true;
  },
  express: (data = {}) => {
    const request = {};
    request.params = {};
    request.query = {};
    request.body = {};
    request.headers = {};
    request.cookies = {};
    if (data.request) Object.assign(request, data.request);
    
    const response = {};
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn().mockReturnValue(response);
    response.send = jest.fn().mockReturnValue(response);

    const next = jest.fn();
    return { request, response, next };
  },
};
