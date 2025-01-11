let friendsMap = new Map();
friendsMap.set("ნინო", 25);
friendsMap.set("გიორგი", 30);
friendsMap.set("მარიამი", 28);


friendsMap.forEach((age, name) => {
    console.log(`${name}: ${age}`);
});
