class myFirst:
    def __init__(self):
        print("myFirst")
    def calc(self):
        print("calc")


class mySecond(myFirst):
    def __init__(self):
        print("mySecond")
    
obj = mySecond()
obj.calc()
