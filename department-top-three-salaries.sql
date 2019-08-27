select
  dept.Name as Department,
  emp.Name as Employee,
  emp.Salary
from Employee emp
right join Department dept
  on emp.DepartmentId = dept.Id
 join (
    select tmp1.DepartmentId, substring_index(substring_index(group_concat(distinct tmp1.Salary order by tmp1.Salary desc), ',', 3), ',', -1) as salary from Employee tmp1 group by tmp1.DepartmentId
    ) d1
  on emp.DepartmentId = d1.Departmentid and emp.Salary >= d1.salary
order by emp.DepartmentId, emp.salary desc;