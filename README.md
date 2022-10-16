# Projeto

O projeto consiste de um blog de notícias, onde o usuário que tem acesso pode criar, editar e excluir notícias. O usuário que não tem acesso pode apenas visualizar as notícias.

### Integrantes
- Fernando Laiser Freire Kon 19.01336-0
- Guilherme Cury Galli 19.00374-9
- Guilherme Samuel de Souza Barbosa 19.00012-0
- Gustavo Consoleti Ramirez de Souza 19.00715-9
- Igor Eiki Ferreira Kubota 19.02466-5
- Matheus dos Santos Galbiati 19.01324-8


### .env necessário
    
```
MONGODB_USER = 
MONGODB_PASSWORD = 
MONGODB_CLUSTER = 
MONGODB_HOST = 
MONGODB_DATABASE = 
```

## Iniciar o microserviço com Docker


### Construir a imagem ``mss-noticias``
```
docker build -t mss-noticias ./noticias
```

### Executar o container
```
docker run -p 3000:3000 mss-noticias
```