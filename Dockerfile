FROM node:26-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
# Payload peers graphql@^16; project uses graphql@17 (see task-1 --legacy-peer-deps).
RUN npm ci --legacy-peer-deps

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_SERVER_URL=http://localhost:3011
ARG NEXT_PUBLIC_API_URL=http://localhost:4000
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache libc6-compat \
  && addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs \
  && mkdir -p /app/media \
  && chown nextjs:nodejs /app/media

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/build/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/build/static ./build/static

USER nextjs

EXPOSE 3011

ENV PORT=3011
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
