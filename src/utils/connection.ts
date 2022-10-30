export const dbConnection = (db: {url: string; port: string; app: string}) => `${db.url}:${db.port}/${db.app}`;
