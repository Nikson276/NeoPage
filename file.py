import json

# Opening JSON file
f = open('data.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)
# Closing file
f.close()

# Iterating through the json
# list
print(type(data))
print(data["random text"])
print(type(data["random text"]))
for i in data['random text']:
    print(data['random text'][i])
  
