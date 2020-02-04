const GetPosts = ( state=[],action)=>{
    switch(action.type){
        case 'GET_POSTS':
           /// return an array that has the origional array with
           /// an added object - ...state is the origional array
           /// { id: text: clicked: is the new object being added }
            return [
                ...state, {
                    data: action.posts,
                }
            ]
            //map over each NewPost and change clicked value
        
        default:
            return state
    }
}

export default GetPosts