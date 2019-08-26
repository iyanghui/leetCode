# Write your MySQL query statement below

select d2.class
from (
       select
         d1.class,
         count( distinct d1.student) as cnt
       from courses d1
       group by d1.class
       having cnt >= 5
     ) d2;