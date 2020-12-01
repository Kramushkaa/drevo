import json

d = [{
    "Number": "1",
    "Father": None,
    "Mother": None,
    "Sex": "Male",
    "Family_name": "Крамарев",
    "First_name": "Василий",
    "Fathers_name": "Тимофеевич",
    "Birth_city": "Null",
    "Birth_date": "до 1860",
    "Death_date": "до 1920",
    "Current_City": "Бутурлиновка"
}]

empty={'Number': None, 'Sex': None, 'Family_name': None, 'First_name': None, 'Fathers_name': None, 'Birth_city': None, 'Birth_date': None, 'Death_date': None, 'Current_City': None, "Parents": [], 'Children': []}  

def addChildren(parent):
    a=d
    for i in range(len(parent)):
        a=a[int(parent[i])-1]["Children"]
        print(a)
        if a == []:
            print ("бездетный")


addChildren('11')
# print(d[0]["Children"][1]["b"])

# with open("datafile.json", "w") as write_file:
#     json.dump(d, write_file,ensure_ascii=False)