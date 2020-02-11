let nextId = 0
const NewWorkPlacePosts = ( state=[],action)=>{
    switch(action.type){
        
        case 'REMOVE_WP_POST':
            return state.filter(NewWorkPlace => NewWorkPlace.id !== action.id)
        
        case 'FETCH_WP_POSTS':
            return [...state, {
                id: nextId++,
                title: action.value.title,
                body: action.value.body,
                email: action.value.u_email,
                timestamp: action.value.timestamp 
            }
        ]
        case 'CLEAR_WP':
            return state = []
            
        default:
            return state
    }
}
 
export default NewWorkPlacePosts