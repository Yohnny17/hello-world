dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla)
dineroRobert = parseInt(dineroRoberto)
dineroPedro = parseInt(dineroPedro)


if (dineroCofla >= 0.6 && dineroCofla < 1){
	alert("Cofla; comprate el helado de agua");
	alert("y te sobran:" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
	alert("Cofla; comprate el helado de crema");
	alert("y te sobran:" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
	alert("Cofla; comprate el helado de heladix");
	alert("y te sobran:"+ (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
	alert("Cofla; comprate el helado de headovich");
	alert("y te sobran:" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
	alert("Cofla; comprate el helado de helardo");
	alert("y te sobran:" + (dineroCofla- 1.8));
}

else if (dineroCofla >= 2.9){
	alert("Cofla; helado de confites o el pote de 1/4kg.");
	alert("y te sobran:" + (dineroCofla - 2.9));
}

else {
	alert("lo siento, no te alcanza para ningun helado")
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1){
	alert("comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
	alert("comprate el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
	alert("comprate el helado de heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
	alert("comprate el helado de headovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
	alert("comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9){
	alert("helado de confites o el pote de 1/4kg.");
}

else {
	alert("lo siento, no te alcanza para ningun helado");
}



if (dineroPedro >= 0.6 && dineroPedro < 1){
	alert("comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6){
	alert("comprate el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
	alert("comprate el helado de heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
	alert("comprate el helado de headovich");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
	alert("comprate el helado de helardo");
}

else if (dineroPedro >= 2.9){
	alert("helado de confites o el pote de 1/4kg.");
}

else {
	alert("lo siento, no te alcanza para ningun helado");
}