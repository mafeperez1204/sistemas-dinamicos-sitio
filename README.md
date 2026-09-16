# Sitio web — Curso Sistemas Dinámicos

Sitio estático (HTML/CSS/JS) para el curso Sistemas Dinámicos, Programa de Ingeniería
Electrónica. Construido a partir de las guías de laboratorio 1-4 y la guía del proyecto final
(Robogol / CDIO).

## Estructura del proyecto

```
index.html              Página de inicio
css/style.css           Hoja de estilos (responsive, un solo archivo)
js/script.js            Menú móvil y submenús táctiles
assets/img/             Iconos SVG propios y gráfico de portada
pages/                  20 subpáginas (4 por cada una de las 5 unidades)
recursos/               PDF descargables de las guías originales
```

Cada una de las 5 unidades (Ecuaciones Diferenciales, Funciones de Transferencia, Diagramas de
Bloques, Espacio de Estados y Proyecto CDIO · Robogol) tiene 4 páginas: Presentación,
Laboratorio (o Etapas/Cronograma para el proyecto), Lección y Bibliografía, enlazadas entre sí
y accesibles desde el menú "Contenido" del encabezado.

## Cómo publicarlo en GitHub Pages (gratis)

1. Crea un repositorio nuevo y público en GitHub (por ejemplo `sistemas-dinamicos`).
2. Sube el **contenido de esta carpeta** (no la carpeta en sí) a la raíz del repositorio:
   arrastra `index.html`, `css/`, `js/`, `assets/`, `pages/` y `recursos/` en la interfaz web de
   GitHub, o bien:
   ```bash
   cd sitio-descomprimido
   git init
   git add .
   git commit -m "Sitio del curso Sistemas Dinámicos"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/sistemas-dinamicos.git
   git push -u origin main
   ```
3. En el repositorio, ve a **Settings → Pages**.
4. En "Branch", selecciona `main` y la carpeta `/root`, luego guarda.
5. Espera uno o dos minutos: GitHub te dará la URL pública, con este formato:
   `https://TU_USUARIO.github.io/sistemas-dinamicos/`

También puedes publicarlo igual de fácil arrastrando esta misma carpeta a
[Netlify Drop](https://app.netlify.com/drop) si prefieres una alternativa sin usar Git.

## Notas técnicas

- Las fórmulas matemáticas se renderizan con MathJax (CDN), por lo que el sitio necesita
  conexión a internet para mostrarlas correctamente; esto es normal y no afecta el resto del
  sitio si no hay conexión.
- Las tipografías (IBM Plex Sans / IBM Plex Mono) se cargan desde Google Fonts.
- El sitio fue validado con HTML Tidy (sin errores ni warnings) y se verificó que ningún enlace
  interno esté roto.
