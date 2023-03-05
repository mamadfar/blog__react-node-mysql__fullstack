1. npm init --y
2. npm i -D ts-node-dev nodemon
3. npm i express @types/express @types/node mysql @types/mysql typescript
4. npx tsc --init
5. change rooDir and outDir
6. add these to `package.json`
```json
  "scripts": {
    "dev": "ts-node-dev --respawn --watch \"src/**\" src/index.ts",
    "start": "node dist/index.js",
    "build": "tsc -p ."
  }
```
7. npm i dotenv cors @types/cors morgan @types/morgan cookie-parser @types/cookie-parser jsonwebtoken @types/jsonwebtoken bcryptjs @types/bcryptjs
8. cat cotrollers routes
9. `npm i multer @types/multer` to handle file in node