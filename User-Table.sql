use estore;
drop table if exists User;
create table User (
    uid     int,
    name    varchar(256),
    phone   varchar(256),
    email   varchar(256)
);
show tables;
 describe Product;