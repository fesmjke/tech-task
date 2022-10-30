export const dbConnection = (db : {url : string, port : string, app : string}) => {
    return `${db.url}:${db.port}/${db.app}`;
}