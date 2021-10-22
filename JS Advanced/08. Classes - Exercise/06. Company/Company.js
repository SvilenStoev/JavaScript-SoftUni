class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }
        else {
            if (!this.departments[department]) {
                this.departments[department] = [];
            }

            this.departments[department].push({
                name,
                salary,
                position,
            });

            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {
        const sortedDepart = Object
            .entries(this.departments)
            .sort((a, b) => this._getAverageSalary(b[1]) - this._getAverageSalary(a[1]));

        const bestDepartment = sortedDepart[0];

        let result = `Best Department is: ${bestDepartment[0]}\n`;

        let averageSalary = this._getAverageSalary(bestDepartment[1]);

        result += `Average salary: ${averageSalary.toFixed(2)}\n`;

        const sortedWorkers = bestDepartment[1].sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => b.salary - a.salary);

        for (const employee of sortedWorkers) {
                result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        }

        return result.substring(0, result.length - 1);
    }

    _getAverageSalary(departmentWorkers) {
        return departmentWorkers.reduce((acc, w) => acc += w.salary, 0) / departmentWorkers.length;
    }
}

let c = new Company();
let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
