# Casa Mop+ · Site

Site estático (HTML + CSS + JS puro, sem build).

## Rodar local
```bash
cd Site && python3 -m http.server 5173
```

## Deploy
- **Vercel:** importe a pasta `Site` como projeto (Framework: *Other*, sem build command, output = raiz).
- **cPanel:** envie o conteúdo da pasta `Site` para `public_html`.

## Editar
- Preços, kits, links de checkout e WhatsApp: `js/config.js`
- Imagens: troque os `<div class="ph" data-label="...">` por `<img>` (coloque os arquivos em `assets/img/`).
