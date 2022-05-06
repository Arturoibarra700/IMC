create database imc_db1

create table imc_db
(
		imc_id serial primary key NOT NULL,
		peso double precision NOT NULL,
		estatura double precision NOT NULL,
		imc_total double precision NOT NULL
);