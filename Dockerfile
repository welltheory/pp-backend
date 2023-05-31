# Node16 should be used until https://github.com/prisma/prisma/issues/10649 is resolved
FROM node:16 AS server
ENV NODE_ENV=production
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL
WORKDIR /app
COPY package*.json /
COPY . .
RUN echo "NODE ENV: $NODE_ENV"
RUN echo "DATABASE URL: $DATABASE_URL"
RUN npm ci --ignore-scripts --include=dev
RUN npx prisma generate
RUN npm run build


FROM node:16-slim as app
RUN apt-get update -y && apt-get install -y openssl
COPY --from=server /app/node_modules ./node_modules
COPY --from=server /app/package*.json ./
COPY --from=server /app/dist ./dist
COPY --from=server /app/prisma ./prisma
COPY --from=server /app/public ./dist/public
WORKDIR /app
EXPOSE 3030
CMD ["npm", "start"]
