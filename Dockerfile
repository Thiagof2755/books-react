# Usar uma imagem de tempo de execução Node oficial como imagem pai
FROM node:14

# Definir o diretório de trabalho para /app
WORKDIR /app

# Copiar package.json e package-lock.json para /app
COPY package*.json ./ 

# Instalar as dependências do aplicativo
RUN npm install

# Copiar o conteúdo do diretório atual para /app
COPY . . 

# Tornar a porta 3000 disponível para o mundo fora do contêiner
EXPOSE 3000

# Definir a variável de ambiente
ENV REACT_APP_API_URL=http://localhost:3001

# Executar o aplicativo quando o contêiner for iniciado
CMD ["npm", "start"]
