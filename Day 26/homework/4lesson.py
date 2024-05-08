#len - ფუნქცია გვეუბნება თუ რამდენი ელემენტი გვაქვს სიაში
Animes = ["One piece", "Demon Slayer", "Naruto", "Bleach", "Blue Lock"]
print(len(Animes))

#pop - ფუნქცია ამოიღებს სიიდან იმ ინდექსზე მყოფ ელემენტს რომელსაც მივუთითებთ ინდექსად
Animes = ["One piece", "Demon Slayer", "Naruto", "Bleach", "Blue Lock"]
Animes.pop(2)
print(Animes)

#append - ფუნქცია ამატებს სიაში იმ ელემენტს რომელსაც მივუთითებთ ჩვენ
Animes = ["One piece", "Demon Slayer", "Naruto", "Bleach", "Blue Lock"]
Animes.append("Pokemon")
print(Animes)

#insert - ფუნქციაც ამატებს სიაში იმ ელემენტს რომელსაც მივუთითებთ ჩვენ და,
#  ამავდროულად იმ ინდექსზე რომელსაც მივუთითებთ
Animes = ["One piece", "Demon Slayer", "Naruto", "Bleach", "Blue Lock"]
Animes.insert(2, "Attack on Titan")
print(Animes)