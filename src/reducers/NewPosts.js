let nextId = 0
const NewPosts = ( state=[],action)=>{
    switch(action.type){
        // case 'ADD_NEW_POST':
        //    /// return an array that has the origional array with
        //    /// an added object - ...state is the origional array
        //    /// { id: text: clicked: is the new object being added }
        //     return [
        //         ...state, {
        //             id: nextId++,
        //             title: action.title,
        //             body: action.body,
        //             clicked: false,
        //         }
        //     ]
            //map over each NewPost and change clicked value
        case 'CLICK_POST':
            return state.map(NewPost => 
                (NewPost.id === action.id)
                    ? { ...NewPost, clicked: 
                    !NewPost.clicked} : 
                    NewPost)

        case 'REMOVE_POST':
            return state.filter(NewPost => NewPost.id !== action.id)
        
        case 'FETCH_POSTS':
            return [...state, {
                id: nextId++,
                title: action.value.title,
                body: action.value.body,
                email: action.value.u_email,
                timestamp: action.value.timestamp 
            }
        ]
        case 'CLEAR':
            return state = []
            
        default:
            return state
    }
}
 
export default NewPosts