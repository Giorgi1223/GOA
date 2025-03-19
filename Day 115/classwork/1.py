def nb_year(p, percent, aug, d):
    years = 0
    while p < d:
        p += int(p * (percent / 100)) + aug
        years += 1
    return years

# ტესტის შემთხვევები
print(nb_year(1500, 5, 100, 5000))  # 15
print(nb_year(1500000, 2.5, 10000, 2000000))  # 10
