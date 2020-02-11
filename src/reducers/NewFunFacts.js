let nextId = 0
const NewFunFacts = ( state=[],action)=>{
    switch(action.type){
        
        case 'REMOVE_FF_POST':
            return state.filter(NewFunFact => NewFunFact.id !== action.id)
        
        case 'FETCH_FF_POSTS':
            return [...state, {
                id: nextId++,
                title: action.value.title,
                body: action.value.body,
                email: action.value.u_email,
                timestamp: action.value.timestamp 
            }
        ]
        case 'CLEAR_FF':
            return state = []
            
        default:
            return state
    }
}
 
export default NewFunFacts