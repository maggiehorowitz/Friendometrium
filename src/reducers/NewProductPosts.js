let nextId = 0
const NewProductPosts = ( state=[],action)=>{
    switch(action.type){
        
        case 'REMOVE_PR_POST':
            return state.filter(NewProductPost => NewProductPost.id !== action.id)
        
        case 'FETCH_PR_POSTS':
            return [...state, {
                id: nextId++,
                title: action.value.title,
                body: action.value.body,
                email: action.value.u_email,
                timestamp: action.value.timestamp 
            }
        ]
        case 'CLEAR_PR':
            return state = []
            
        default:
            return state
    }
}
 
export default NewProductPosts