import json
import random


def vendas():

        meses = { 
              "data": [
                random.randint(1,10),
                random.randint(1,10),
                random.randint(1,10)
                ] 
            }

        return json.dumps(meses)






  






