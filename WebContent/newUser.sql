drop table newUser;
create table newUser(
id varchar2(20) primary key not null,
pw varchar2(20) not null,
name varchar2(20) not null,
email varchar2(50) not null,
country varchar2(20) not null,
address varchar2(50) not null);

select * from newUser;