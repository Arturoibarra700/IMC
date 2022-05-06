const { Pool } = require('pg');

const config =({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password:"Pa$$w0rd",
    database: "imc_db1"
});

const pool = new Pool (config);


    function calcularImc(Peso,altura)
		{
			imc = Peso / (altura*altura);
			return imc;
		}
		//las variables que ve a continuacion son con las cuales puede manipular el programa
		const pesoInformado = 100;
		const alturaInfromado =1.84;
	
		const imcCalculado = calcularImc(pesoInformado,alturaInfromado)
		 
	    	console.log("The calculated BMI average is: "+imcCalculado);

            if(imcCalculado<18.5)
            {
               
                console.log("Below recommended");
            }
    
            if(imcCalculado>=18.5)
            {
                if(imcCalculado < 25)
                {   
                    console.log("BMI is within the normal range");
                }
                
            }
        if(imcCalculado>=25)
            {
                if(imcCalculado < 30)
                {
                    console.log("BMI considered overweight");
                }
                
            }
            if(imcCalculado>=30)
            {
                console.log("BMI considered as obesity");
            }

            //aqui guardo la informacion en la base de datos 
            const getdatabase = async () => 
            {
            
    
            const res=  await  pool.query("INSERT INTO imc_db(peso,estatura,imc_total) values('"+pesoInformado+"','"+alturaInfromado+"','"+imcCalculado+"')");
            const res1=  await pool.query('select * from imc_db');
            console.log(res1.rows);
            }
            
             getdatabase();