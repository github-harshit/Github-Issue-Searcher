class Github{
    constructor(){
        this.clientId="9d4301ea395db71a6e95"
        this.clientSecret="5e139f4fdcc8c868340a47162a4f1bc686c9fc37"
    }
    async getResponse(org, rep){
        const data = await fetch(`https://api.github.com/repos/${org}/${rep}/issues`);
        const result= await data.json();
        return result;
        
    

    }
    async getLanguage(org, rep){
        const data= await fetch(`https://api.github.com/repos/${org}/${rep}/languages`);
        const result= await data.json();
        return result;
    }
}
