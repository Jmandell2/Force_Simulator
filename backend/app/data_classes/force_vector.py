

"""
Purpose: create a json style vector to send to unreal engine telling 
    the animation what direction to move and how fast

"""

class ForceVector:

    def __init__(self, hand):
        self.direction = hand[1]
        self.hands = hand[0]
        self.moveUp = hand[2]
        print('hand direction: ', self.direction)
        print('hands: ', self.hands)
    # hand_track is your indices 0-21, with each containing an x, y, z


    # state: no hand -> hand

    # output:
    # hands: true/false
    # directionX [x, y, z] (-1 left, 1 right, 0 none)
    # velocity (might not need)

    def json_output(self):

        # is not wasHand, then set direction = 0
        # if direction isn't different enough from last time (need to find a threshold) then 0

        # if wasHand, you can calculate difference and direction
        # if direction is beyond a certain x,y then do no hand and drop

        # hand is always true, because you would return by now if there was no hands prediction
        pack = {
                'hands' : str(self.hands),
                'direction': self.direction,
                'velocity': '0',
                'moveUp': self.moveUp,
        }
       

        return pack