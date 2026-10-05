# SJE Tech — Aulas de Aprendizagem de Máquina

Site estático em HTML e CSS puro (sem MkDocs, sem build).

## Estrutura

```
index.html              página inicial
aulas/kmeans-rfm.html   aula de K-Means
css/style.css           design system
js/script.js            botão "Copiar" e destaque do menu (opcional)
assets/img/             gráficos da aula
downloads/              kmeans_rfm.ipynb e compras.csv
```

## Testar no computador

Dê dois cliques no `index.html`, ou rode `python -m http.server` na pasta e abra `http://localhost:8000`.

## Publicar no GitHub Pages

1. Apague do repositório antigo: `docs/`, `mkdocs.yml`, `requirements.txt`, `GUIA-RAPIDO.md` e `.github/workflows/`.
2. Copie o conteúdo desta pasta para a raiz do repositório.
3. `git add . && git commit -m "Site em HTML e CSS" && git push`
4. Em Settings > Pages: Source = Deploy from a branch, Branch = main, pasta / (root).

## Mudar o endereço do site

O endereço vem do nome do repositório. Em Settings > General > Repository name, troque
`aula-aprendizagem-de-maquina` por `aulas-ml` e o site passa a ser
`https://luccasalencar.github.io/aulas-ml/`.

Se escolher outro nome, troque também o link "Abrir no Colab" em `aulas/kmeans-rfm.html`.
