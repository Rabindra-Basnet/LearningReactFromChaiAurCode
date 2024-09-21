// import { useEffect, useState } from 'react'

// function Github() {

//   const [data, setData ] = useState([])
//   useEffect( ()=>
//   {
//     fetch("https://api.github.com/users/Rabindra-Basnet")
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data)
        
//       })
//     }, [])

  

//   return (
//     <div className='flex justify-center align-middle bg-gray-600'>
//       <img
//       className='mx-1 my-3 h-10'
//         src={data && data.avatar_url ? data.avatar_url : ''} alt="Github profile" />
//       <p className='text-center  text-white mx-2 p-0.5 text-xlg'>
//       Github Followers: {Number(data && data.followers ? data.followers: "")}
//       </p>
//     </div>
//   )
// }

// export default Github


 
import { useLoaderData } from 'react-router-dom';


function Github() {

  const data = useLoaderData()
       

  

  return (
    <div className='flex justify-center align-middle bg-gray-600'>
      <img
      className='mx-1 my-3 h-10'
        src={data && data.avatar_url ? data.avatar_url : ''} alt="Github profile" />
      <p className='text-center  text-white mx-2 p-0.5 text-xlg'>
      Github Followers: {Number(data && data.followers ? data.followers: "")}
      </p>
    </div>
  )
}

export default Github


 export async function GithubLoaderInfo() {
     const response = await fetch("https://api.github.com/users/Rabindra-Basnet");
   return response.json();
};
 