		
		import pool from './db1.js';
		pool = require('./db1.js');
		
		function calcularImc(Peso,altura)
		{
			imc = Peso / (altura*altura);
			return imc;
		}
		
	    const pesoInformado = prompt("Enter your weight");
		const alturaInfromado =prompt("Enter your height");
		
		const imcCalculado = calcularImc(pesoInformado,alturaInfromado)
		 
		document.write("The calculated BMI average is: "+imcCalculado);
	

		if(imcCalculado<18.5)
		{
            document.write("<br><br><br><br>");
			document.write("Below recommended");
		}

		if(imcCalculado>=18.5)
		{
			if(imcCalculado < 25)
			{   document.write("<br><br><br><br>");
				document.write("BMI is within the normal range");
			}
			
		}
	if(imcCalculado>=25)
		{
			if(imcCalculado < 30)
			{
                document.write("<br><br><br><br>");
				document.write("BMI considered overweight");
			}
			
		}
		if(imcCalculado>=30)
		{
            document.write("<br><br><br><br>");
			document.write("BMI considered as obesity");
		}


		const getdatabase = async () => 
		{
		//const res=  await pool.query('select * from colors');

		const res=  await  pool.query("INSERT INTO colors(color_name,value) values('"+imcCalculado+"','"+alturaInfromado+"')");

		//console.log(res.rows);
		}
		getdatabase();