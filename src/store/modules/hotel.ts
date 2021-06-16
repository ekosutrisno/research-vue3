import { Module } from "vuex";
import { State } from "..";
import { EstateProperty } from "../../types/InterfaceType";


interface StoreHotel {
   hotels: EstateProperty[],
   isLoading: boolean,
}

const store: Module<StoreHotel, State> = {
   namespaced: true,
   state() {
      return {
         hotels: [
            {
               id: "85fcd619-2a6c-41e5-982a-3c7dbfb0816c",
               propertyBuildingName: "One Dor Village",
               propertyBuildingAddress: "NY",
               propertyBuildingPrice: "1 280",
               status: true,
               badroom: 6,
               bathroom: 3,
               sizeSquare: 324,
               isLike: true,
               isRare: true,
               isSuperHost: false,
               imageUrl:
                  "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
               id: "0e9080b5-0e95-4a74-b27a-8e2eec42c705",
               propertyBuildingName: "Tranquil Garden Studio",
               propertyBuildingAddress: "NY",
               propertyBuildingPrice: "800",
               status: true,
               badroom: 3,
               bathroom: 1,
               sizeSquare: 170,
               isLike: false,
               isRare: false,
               isSuperHost: true,
               imageUrl:
                  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
               id: "359b0493-28de-4996-8138-bebc24ffef88",
               propertyBuildingName: "Nevaloon Group",
               propertyBuildingAddress: "NY",
               propertyBuildingPrice: "1 600",
               status: true,
               badroom: 4,
               bathroom: 2,
               sizeSquare: 200,
               isLike: true,
               isRare: true,
               isSuperHost: false,
               imageUrl:
                  "https://images.unsplash.com/photo-1494526585095-c41746248156?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
               id: "cd105e13-7aa4-44f4-8792-f55ee5f35d7d",
               propertyBuildingName: "Sawah Undur",
               propertyBuildingAddress: "Bali, IDN",
               propertyBuildingPrice: "112",
               status: false,
               badroom: 1,
               bathroom: 2,
               sizeSquare: 134,
               isLike: true,
               isRare: true,
               isSuperHost: false,
               imageUrl:
                  "https://images.unsplash.com/photo-1547291195-54d2471ae3b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaSUyMGluZG9uZXNpYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
         ],
         isLoading: false
      }
   },
   mutations: {
      setText(state: StoreHotel, payload: AnyObject) {

      }
   },
   actions: {
      setText(context, payload: AnyObject) {

      }
   },
   getters: {
      getText(state: StoreHotel) {

      }
   }
}

export default store;