select course, score, count(*) from score group by case when score<60 then 'aa' when score between 60 and 80 then 'bb' else 'cc' end;
select score, count(*) from score group by case when score<60 then 'aa' when score between 60 and 80 then 'bb' else 'cc' end;
select score, count(*) from score group by case when score<60 then '1' when score between 60 and 80 then '2' else '3' end;


-- 阿道夫



SELECT score,(CASE 
	WHEN score>=90 THEN '优秀' 
	WHEN score>=80 THEN '良好' 
	WHEN score>=60 THEN '及格' 
	ELSE '不及格' END) level 
FROM score


select score, (case when score>=90 then '优秀' when score>=80 then '良好' when score>=60 then '几个' else '其他' end) grade from score;

select course, (case when score>=90 then '[90-100]' when score>=80 then '[80-90)' when score>=70 then '[70-80)'when score>=60 then '[60-70)' else '[0-60)' end) grade, count(*) from score where course = '*' group by course, grade order by course, grade ;
select course, (case when score>=90 then '[90-100]' when score>=80 then '[80-90)' when score>=70 then '[70-80)'when score>=60 then '[60-70)' else '[0-60)' end) grade, count(*) from score  group by course, grade order by course, grade ;

select score, grade, count(*) from score group by (case when score<60 then '其他' when score>=60 then '及格' end) grade;



select (case when score>=90 then "90及以上" when score>=80 then "[80-90)" when score>=70 then "[70-80)" when score>=60 then "[60-70)" else "[0-60)" end) grade, count(*) records from score  where course='编译原理' group by grade order by grade;