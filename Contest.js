//Fetch API
let url="https://kontests.net/api/v1/all"
let response =fetch(url)
response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests)
    ihtml=""
    for(item in contests){
        console.log(contests[item])
        ihtml+=`
         <div class="card" style="width: 23rem;" >
        <img src="https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/lg-leverage-of-coding.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">status is ${contests[item].status} and site is ${contests[item].site} </p>
          <p class="card-text">In 24 hours? ${contests[item].in_24_hours}</p>
          <p>Stats at:${contests[item].start_time}</p>
          <p>Ends at:${contests[item].end_time}</p>
          
        
          <a href="${contests[item].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        
       `
    }
    
    cardcontainer.innerHTML=ihtml
})