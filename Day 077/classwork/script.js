let temp = [[20, 22, 23, 21], [15, 16, 12, 10]];
let dajj = ["morning", "afternoon", "noon", "evening"];

for (let d = 0; d < temp.length; d++) {
    for (let s = 0; s < temp[d].length; s++) {
        console.log(`${dajj[d]}: ${temp[d][s]}`);
    }
}
