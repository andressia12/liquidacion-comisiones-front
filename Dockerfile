FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --silent --no-audit --no-fund

COPY . .
RUN npm run build -- --configuration=production

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# If Angular outputs into a subfolder (e.g. /usr/share/nginx/html/fintech-front),
# move its contents to the document root so nginx can find index.html.
RUN set -eux; \
	for d in /usr/share/nginx/html/*; do \
		if [ -d "$d" ]; then \
			mv "$d"/* /usr/share/nginx/html/ || true; \
			rmdir "$d" || true; \
		fi; \
	done

# Copy custom nginx config (overrides default.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fail fast during image build if no index.html was produced
RUN if ! ls /usr/share/nginx/html/index.html >/dev/null 2>&1; then \
			echo 'ERROR: index.html not found in /usr/share/nginx/html'; \
			ls -la /usr/share/nginx/html || true; \
			exit 1; \
		fi

# Ensure nginx can read the files
RUN chown -R nginx:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
