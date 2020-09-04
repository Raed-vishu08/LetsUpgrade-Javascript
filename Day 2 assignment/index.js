//Question 1
//Program to search for a particular character in a string
let name = "computer";
let index = name.indexOf("t");
console.log("The index of charcter t in "+name+" = " +index);

//Question 1
//Program to convert minutes to seconds
let minutes=30;
let minutesToseconds=minutes*60;
console.log("Number of seconds in "+minutes+ "minutes =" +minutesToseconds);

//Question 3
//Program to search for a element in a array of string
let games=["gta","Resident evil","Pubgy","call of duty","temple run","subway suffer"];
let p=games.includes("Max of Payen");

if (p==true){
	console.log(" yes!! Your games found!!! ");
}
else {
	console.log(" sorry!! Your games not found!!! ");
}
//Question 4
//Program to display only elements containing 'a' in them from a array
let city = ["agra","agratala","delhi","ranchi","uttar pradesh"];
console.log("The elements containing character 'a':");
for (let i=0;i<city.length;i=i+1){
	if (city[i].includes('a')==true) {
		console.log(city[i]); }
    }
//Question 5
//Print an array in reverse order
let gun = ['Ak-47','uzi','mmg','vector','DP-28'];
gun.reverse();
console.log(gun);