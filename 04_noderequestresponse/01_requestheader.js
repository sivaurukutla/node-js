const axios =require('axios');  // promise http request

axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>
        {
            const headerDate =res.headers && res.headers.date?res.headers.date:'no response date';
            console.log('Status Code :'+res.status);
            console.log('Date in Response header: ',headerDate);

            const users=res.data;
            for(user of users){
                console.log(`Retrieved User with id: ${user.id}, name: ${user.name} ,age:${user.age}`);
            }
        })
    .catch(err=>{console.log('Error : ',err.message)});  // it throws the error 