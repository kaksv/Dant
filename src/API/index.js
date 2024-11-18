export const  getOrders = async() =>{
    return (
  await  fetch('https://dummyjson.com/carts/1')
//   fetch('https://dummyjson.com/carts/') .............For the RecentOrders function 
    .then(res => res.json())
    .then(res =>{
        console.log("data :",res);
        return res
    })
    // .then(console.log)
);

}

export const getRevenue = async() =>{
    return await fetch("https://dummyjson.com/carts/1").then(res => res.json());
    
}

export const getInventory = async() => {
    return fetch('https://dummyjson.com/carts/1')
    .then(res => res.json())
    // .then(console.log);
}

export const getCustomers=()=>{
   return fetch('https://dummyjson.com/users')
.then(res => res.json())
// .then(console.log);
}

export const getComments = async() => {
    return fetch('https://dummyjson.com/comments')
    .then(res => res.json())
    // .then(console.log);
}