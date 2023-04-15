import generateAliasesResolver from 'esm-module-alias'; 
const aliases = {
    "@controllers": "./app/controllers/index.js",
    "@services": "./app/services/index.js",
    "@utils": "./app/utils/index.js",
};
export const resolve = generateAliasesResolver(aliases);