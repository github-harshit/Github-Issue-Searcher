const  github = new Github;
var  count=0;
const output = document.getElementById('show');
var language="";

const  submit= document.getElementById('btn');
submit.addEventListener('click', function(e){
    const orgName= document.getElementById('org').value;
    const  repoName= document.getElementById('repo').value;
    if(orgName!="" && repoName!=""){
        github.getLanguage(orgName, repoName).then(function(out){
           
            var max=0; 
            console.log(out)
            for(var key in out ){
               
                if(out.hasOwnProperty(key)){
                    if(out[key]>max){
                        max=key
                    }
                    
                }
            }
            console.log(max);
            language=max;
        })


        github.getResponse(orgName, repoName).then(function(res){
            
            
           res.forEach(function(value){
            count=count+1;
              if(value.state==="open"){
                  let assignee="";
                  if(value.assignee==null){
                      assignee="no-one";
                  }
                  if(value.labels.length==0){
                      output.innerHTML += `
                                        <p>  <a href="https://github.com/${orgName}/${repoName}/issues/${value.number}">  Issue ${count}: ${value.title}</a>
                                       
                                        <br>
                                            label : no-label attached 
                                            
                                            Assigned to ${assignee};<br>
                                            Language ${language};
                                            <p>
                                        `
                  }else{
                    output.innerHTML += `
                    <p>  <a href="https://github.com/${orgName}/${repoName}/issues/${value.number}">  Issue ${count}: ${value.title}</a>
                   
                    <br>
                        ${value.labels[0].name}  :   ${value.labels[0].description}
                        <br>
                        Assigned to ${assignee};<br>
                        Language ${language};
                        <p>
                    `
                      

                  }
                  
                                       

                  
                  
               
            
                 
                  console.log(value.title);
                 
              }
           })
            output.innerHTML+=`<h3>Total no of active issues are : ${count}</h3>`
           
          
         
        });
    }

    
})



