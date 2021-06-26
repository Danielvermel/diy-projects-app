

export default (posts = [], action) => {
    switch (posts.type) {
        case 'FETCH_ALL':   
            return posts.payload;
        
        case 'CREATE':
            return [...posts, action.payload]
      
        default:
            return posts;
    }
}