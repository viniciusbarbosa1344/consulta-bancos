## Como rodar a API

Passo 1: Entrar na pasta da API
```bash
cd api
```

Passo 2: Instalar as dependências
```bash
npm install
```

Passo 3: Criar um arquivo .env na raiz do projeto com as seguintes informações
```python
PORT=3000
DATABASE_URL="postgresql://admin:admin@localhost:5432/revgas?schema=public"
```

Passo 03: Rodar o conteiner Docker (PostgreSQL)
```bash
docker compose up -d
```

Passo 04: Rodar as migrations do PrismaORM 
```bash
npx prisma migrate dev
```

Passo 05: Rodar o script de seeds para popular o banco
```bash
npm run seed
```

Passo 06: Rodar a API
```bash
npm run start
```
