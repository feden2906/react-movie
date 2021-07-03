const imageUrlCreator = (width, imageUrl) => {
    if (imageUrl) {
        return `https://image.tmdb.org/t/p/w${ width }${ imageUrl }`;
    }
};

export {
    imageUrlCreator
}