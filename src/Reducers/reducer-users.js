import * as db from './firebaseDB';

const initialState = db.owners

const UserReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_OWNER':
      return {...state, 
        owner1:{
            name: action.owner1.name,
            phone: action.owner1.phone,
            email: action.owner1.email,
            address1: action.owner1.address1,
            address2: action.owner1.address2
        },
        owner2:{
            name: action.owner2.name,
            phone: action.owner2.phone,
            email: action.owner2.email,
            address1: action.owner2.address1,
            address2: action.owner2.address2
        }
    }
    default:
      return state
  }
}

export default UserReducer;