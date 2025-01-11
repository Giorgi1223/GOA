let countriesMap = new Map();
countriesMap.set("საქართველო", "თბილისი");
countriesMap.set("აშშ", "ვაშინგტონი");
countriesMap.set("რუსეთი", "მოსკვა");

countriesMap.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
});






let citiesMap = new Map();
citiesMap.set("თბილისი", "საქართველო");
citiesMap.set("პარიზი", "საფრანგეთი");
citiesMap.set("ბერლინი", "გერმანია");

let keyToCheck = "თბილისი";
if (citiesMap.has(keyToCheck)) {
    console.log(`${keyToCheck} არსებობს Map-ში`);
} else {
    console.log(`${keyToCheck} არ არსებობს Map-ში`);
}




let studentsMap = new Map();
studentsMap.set("მარიამი", 90);
studentsMap.set("გიორგი", 85);
studentsMap.set("ნიკა", 78);

let studentName = "გიორგი";
console.log(`${studentName}-ის ქულა: ${studentsMap.get(studentName)}`);




let capitalsMap = new Map();
capitalsMap.set("თბილისი", "საქართველო");
capitalsMap.set("ვაშინგტონი", "აშშ");
capitalsMap.set("პარიზი", "საფრანგეთი");

for (let city of capitalsMap.keys()) {
    console.log(city);
}




let cityMap = new Map();
cityMap.set("თბილისი", "საქართველო");
cityMap.set("პარიზი", "საფრანგეთი");
cityMap.set("ბერლინი", "გერმანია");

cityMap.delete("პარიზი");

cityMap.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
});





let fruitsMap = new Map();
fruitsMap.set("საზამთრო", 3);
fruitsMap.set("მანგო", 2);
fruitsMap.set("კივი", 5);

console.log(`Map-ის ზომა: ${fruitsMap.size}`);






let countryMap = new Map();
countryMap.set("საქართველო", "თბილისი");
countryMap.set("აშშ", "ვაშინგტონი");

countryMap.set("საქართველო", "ბათუმი");

countryMap.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
});






let emptyMap = new Map();

if (emptyMap.size === 0) {
    console.log("Map არის ცარიელი");
} else {
    console.log("Map არ არის ცარიელი");
}




let product = {
    name: "iphone",
    price: 999
};

let productMap = new Map(Object.entries(product));
console.log(productMap);





let itemsMap = new Map();
itemsMap.set("product1", 10);
itemsMap.set("product2", 20);

itemsMap.clear();

if (itemsMap.size === 0) {
    console.log("Map არის ცარიელი");
} else {
    console.log("Map არ არის ცარიელი");
}
