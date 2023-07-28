var res = fetch("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].tags);
        var div = document.createElement("div");
        div.innerHTML=  
`<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
    <h5 class="card-title">Title: ${data1[i].title.rendered}</h5>
    <h6 class="card-subtitle mb-2 text-muted">ID: ${data1[i].id}</h6>
    <p class="card-text">Quote: <b>${data1[i].content.rendered}</b></p>
    
    <a href="${data1[i].guid.rendered}" class="card-link"><u>Refference</u></a>
    </div>
  </div>
</div>
</div>`
      document.body.append(div);
    
    }
    
});

      
