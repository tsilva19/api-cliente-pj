FROM node:12.11-alpine

WORKDIR /usr/src/app  

COPY src/. src/.

COPY package.json .

RUN npm install

RUN apk add --no-cache bash

ENTRYPOINT [ "npm", "run", "dev" ]

# const filtro = { cliente_br: '3M' }
# { cliente_br: { contains: '3' } } = 3M .. ABC 123

# find(filtro)

# > db.cliente.find({ cliente_br: '3M' })