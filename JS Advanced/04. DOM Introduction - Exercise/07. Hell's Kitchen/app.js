function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const restorantsData = JSON.parse(document.querySelector('div textarea').value);

      const resultData = {};

      for (let restorant of restorantsData) {
         const [name, employeesStr] = restorant.split(' - ');
         const employees = [];

         for (let empData of employeesStr.split(', ')) {
            employees.push(empData.split(' '));
         }

         employees.sort((a, b) => b[1] - a[1]);

         let averageSalary = getAverageSalary(employees);

         resultData[name] = {
            employees,
            averageSalary,
         }
      }

      let sorted = Object.entries(resultData).sort((a, b) => b[1].averageSalary - a[1].averageSalary);

      let bestAvrSalary = (sorted[0][1].averageSalary).toFixed(2);
      let bestSalary = Number(sorted[0][1].employees[0][1]).toFixed(2);

      document
         .querySelector('#bestRestaurant p')
         .textContent = `Name: ${sorted[0][0]} Average Salary: ${bestAvrSalary} Best Salary: ${bestSalary}`;

      let workersOutput = '';

      for (let worker of sorted[0][1].employees) {
         workersOutput += `Name: ${worker[0]} With Salary: ${worker[1]} `;
      }

      document.querySelector('#workers p').textContent = workersOutput;

      function getAverageSalary(employees) {
         let sum = 0;

         for (let item of employees) {
            sum += Number(item[1]);
         }

         return (sum / employees.length);
      }
   }
}

//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
