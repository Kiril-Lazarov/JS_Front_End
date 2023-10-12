function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let bestRestaurant = {
      name: '',
      averageSalary: 0,
      people: []
   }
   function onClick() {
      let data = document.getElementsByTagName('textarea')[0].value;
      let restaurantObjects = [];
      let dataList = JSON.parse(data);
      let temporaryNames = [];
      for(let element of dataList){
         console.log(element);
         let [name, workers] = element.split(' - ');
         if(!temporaryNames.includes(name)){
            temporaryNames.push(name);
            restaurantObjects[name] = workers;
         }
         else{
            restaurantObjects[name] += `, ${workers}`;
         }

      }
      console.log(restaurantObjects)
      let entries = Object.entries(restaurantObjects);
      console.log(entries);
      for (element of entries) {
         let totalSalary = 0;
         let workersArray = [];
         let [name, workers] = element;
         let workersEntries = workers.split(', ');

         for (let el of workersEntries) {
            let [worker, salary] = el.split(' ');
            totalSalary += Number(salary);
            workersArray.push([worker, salary]);
         }
         let averageTotal = totalSalary/workersArray.length;
         if (averageTotal > bestRestaurant.averageSalary) {
            bestRestaurant.averageSalary = (averageTotal).toFixed(2);
            bestRestaurant.name = name;
            bestRestaurant.people = workersArray.sort((a, b) => {
               return b[1] - a[1];
            })            
         }
      }
      let w = bestRestaurant.people;
      let bestRestaurantOutput = document.querySelector('#bestRestaurant > p');
 
      bestRestaurantOutput.textContent= `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${Number(w[0][1]).toFixed(2)}`;
      let workersOutput = document.querySelector('#workers > p');
      
    
      let message = '';
      w.forEach(element =>{
     
         message += `Name: ${element[0]} With Salary: ${element[1]} `
      })
      workersOutput.textContent = message.trimEnd();
   }
}
