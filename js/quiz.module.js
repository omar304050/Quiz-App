export class Quiz {
    
    constructor(category , amount , difficulty){
    
     this.category = category;
     this.amount = amount;
     this.difficulty = difficulty;
     this.score = 0

}



async getQuiz(){
    
 let res =  await fetch(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}`);
 let data = await res.json();
 
 
 
 return data.results ;
}




}





