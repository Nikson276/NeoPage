import eel
from random import randint

eel.init("web")

# Exposing the random_python function to javascript
@eel.expose	
def random_python():
    print("Random func is running")
    number = randint(1,999)
    return number

# Exposing the random_python_text function to javascript
@eel.expose
def random_python_text(key):
    print(key)
    print("Random text is running")
    if key == 'p':
        text = "Python is Awesome...\nNEO WAKE UP"
        print(text)
    elif key == 'Up':
        text = "   "
        
    elif key == 'm':
        text = "MORPHEUS IS WAITING YOU...."
    else:
        text = "..." + "   "
        print(text)
        
    return text

@eel.expose
def getHackerText():
    print("Hacker text start...")
    hackerText = "MATRIX IS WATHING YOU"
    return hackerText

# Start the index.html file
print("before start")
eel.start("hackspace.html", mode='chrome-app', port=8080, cmdline_args=['--start-fullscreen', '--browser-startup-dialog'])
