function solve() {
  let text = document.getElementById('input');
  let output = document.getElementById('output');
  let textArray = text.value.split('.');


  if(textArray[textArray.length -1]===''){
    textArray.pop();
  }

  textArray= textArray.map(p=> p.trimStart());
   console.log(textArray)
  let area = [];
  textArray.forEach(element =>{


    area.push(element);
    if (area.length===3){
      let paragraph = document.createElement('p')
      paragraph.textContent = `${area.join('.')}`+ '.';
      output.appendChild(paragraph);

      area = [];

    }
  })
  if(area.length !== 0){
    let paragraph = document.createElement('p')
      paragraph.textContent = `${area.join('.')}`+'.';
      output.appendChild(paragraph);
  }

}