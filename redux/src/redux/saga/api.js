export const api = async(data)=>{
   
console.log("Api called  ",data);

let {userId, pswd}=data?.payload;
let email= userId ;
let password=pswd;

   console.log("Email and password ", email,password)
   
   let cred={email,password}
    
    try{
        const url="https://reqres.in/api/login";
        const res=await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(cred)
                     
          });

    data = await res.json();
   console.info("Response ", typeof data,data); 
   return data;
  }catch(err){
  console.log(err);
    }
};
