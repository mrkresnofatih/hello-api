## Init Node Server App

This is just a documentation of create-node-ts-server application routine.

### Steps:

1. `npm init -y` : to create the `package.json`.
2. `yarn add -D typescript ts-node-dev` : to add typescript & its live-compiler to project as development dependency
3. `npx tsc --init` : to generate `tsconfig.json`.
4. Set `"outDir": "./dist"` in the `tsconfig.json` to compile all typescript files to `dist` directory.
5. Create folder named `src` and create `index.ts` inside it. This serves as primary entry file
6. Set `"main": "dist/index.js"` in the `package.json`

7. Add scripts as follows:
```json
{
  "main": "dist/index.js",
  "scripts": {
    "start": "tsc && node dist/index.js",
    "develop": "ts-node-dev --respawn src/index.ts"
  }
}
```

8. `yarn add express` & `yarn add -D @types/express` : to add library `express` server application.

9. create `.gitignore` file with the following:
```gitignore
dist
node_modules
.idea
```

11. create `Dockerfile` as follows:
```dockerfile
FROM node:16.13-alpine

WORKDIR /app

COPY . .

RUN npm install yarn
RUN rm -rf package-lock.json
RUN yarn install

CMD ["yarn", "start"]

EXPOSE 5000
```
12. Make sure to make `express` listen to port `5000` and adjust `node` version in the `Dockerfile`
