drop table company;

create table company(
companyName varchar2(50) primary key not null,
companyImage varchar2(300) not null,
companyData varchar2(1000) not null);

commit;

select * from company;