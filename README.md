---
# README – FRONTEND (Angular SPA)

# Fintech Frontend – Dashboard de Transacciones

Aplicación **SPA** desarrollada en **Angular Standalone**, encargada de consumir la API del backend y mostrar la información de transacciones.
---

## Tecnologías usadas

- Angular (Standalone Components)
- TypeScript
- RxJS
- HTML / CSS
- Docker
- Nginx

---

## Arquitectura básica

- **Features**: módulos funcionales (transacciones).
- **Services**: comunicación con el backend.
- **Routing**: Angular Router (SPA).

---

## Ejecución en local (modo desarrollo)

```bash
npm install
npm run start
```

## Ejecución con Docker

## Ejecución en local (modo desarrollo)

docker build -t fintech-front .
docker run -p 4200:80 fintech-front

## Acceso a la aplicación

http://localhost:4200
