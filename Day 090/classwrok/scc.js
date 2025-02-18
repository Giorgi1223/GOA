let colorsSet = new Set();
colorsSet.add("წითელი");
colorsSet.add("ლურჯი");
colorsSet.add("მწვანე");
colorsSet.add("ყვითელი");
colorsSet.add("მაღრა");

if (colorsSet.has("წითელი")) {
    console.log("წითელი ფერი არსებობს Set-ში");
} else {
    console.log("წითელი ფერი არ არსებობს Set-ში");
}
