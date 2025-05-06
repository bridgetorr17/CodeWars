function invertHash(hash){
    for (let prop in hash){
        let placeholder = hash[prop];
        hash[placeholder] = prop;
        delete hash[prop];
    }
    return hash;
}