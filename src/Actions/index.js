import {store} from '../index'
import * as db from '../Reducers/firebaseDB';


export const updateStore = (database=db) => {
  store.dispatch({
      type:'UPDATE_OWNER',
          owner1 : {
              name: database.owners.owner1.name,
              phone : database.owners.owner1.phone,
              email : database.owners.owner1.email,
              address1 : database.owners.owner1.address1,
              address2 : database.owners.owner1.address2
          },
          owner2 : {
            name: database.owners.owner2.name,
            phone : database.owners.owner2.phone,
            email : database.owners.owner2.email,
            address1 : database.owners.owner2.address1,
            address2 : database.owners.owner2.address2
          }
  })
}

export const initDB = () => {
    updateStore()
}
