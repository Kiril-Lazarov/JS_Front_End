function solve() {
  let questions = Array.from(document.getElementsByClassName('answer-text'));
  let hiddenSections = Array.from(document.getElementsByTagName('section'));

  let posibleAnswers = [
    ['onclick', 'onmouseclick',0],
    ['JSON.toString()', 'JSON.stringify()',1],
    ['A programming API for HTML and XML documents',
    'The DOM is your source HTML',0]
  ];

  let rightAnswers=0;
  questions.forEach(element => {
    element.addEventListener('click', checkAnswers);

  });


  function checkAnswers(event){
    let currAnswer = event.currentTarget;
    let parent;
    
 
        if(posibleAnswers[0].includes(currAnswer.textContent)){
        
          if(currAnswer.textContent===posibleAnswers[0][posibleAnswers[0][2]]){
              rightAnswers+=1;
            }
   
            parent = currAnswer.parentElement.parentElement.parentElement.parentElement;
            parent.style.display = 'none';
            hiddenSections.shift();
            posibleAnswers.shift()
            if(hiddenSections.length !==0){
                let nextSection = hiddenSections[0];
                nextSection.style.display = 'block';
             }
        }
    

    
     if(hiddenSections.length===0){
      let results = document.querySelector('#results');
      results.style.display = 'block';
      let finalTextArea = results.children[0].children[0];
      if(rightAnswers===3){
        finalTextArea.textContent = "You are recognized as top JavaScript fan!";   
     }
     else{
      finalTextArea.textContent = `You have ${rightAnswers} right answers`
     }
    }
  
     
      
  

}
}
