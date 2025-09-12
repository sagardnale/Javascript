function toSnakeCase(str){
    return str.replace(/\s+/g,'_').toLowerCase();
}
console.log(toSnakeCase('Welcome to india'));