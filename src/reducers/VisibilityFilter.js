const VisibilityFilter = ( state=[],action)=>{
    switch(action.type){
         
        case 'ALL':
            return state

        case 'MY_POSTS':
            return state.filter(NewPost => NewPost.email !== action.value.email)
        
            
        default:
            return state
    }
}
     
    export default VisibilityFilter