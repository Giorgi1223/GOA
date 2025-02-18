
let bestStudents = new Map();


bestStudents.set('გნომების ჯგუფი', 'გიორგი');
bestStudents.set('მათემატიკოსების ჯგუფი', 'მარიამი');
bestStudents.set('მეცნიერების ჯგუფი', 'ნიკა');
bestStudents.set('სპორტსმენების ჯგუფი', 'ლიკა');
bestStudents.set('მხატვრების ჯგუფი', 'თედო');


console.log('Map-ის ზომა:', bestStudents.size);


console.log('ჯგუფების საუკეთესო მოსწავლეები:');
bestStudents.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});