

"""
Purpose: create a json style vector to send to unreal engine telling 
    the animation what direction to move and how fast

"""

class ForceVector:

    def __init__(self, hand_track):
        self.hand_track = hand_track
        # hand_track is your indices 0-21, with each containing an x, y, z


    # TODO: Implement with more sophisticated output than just sending over the x, y, z but for now fine

    def json_output():
        return {
            "landmarks" : 
            [
                {
                    'x' : lm.x,
                    'y' : lm.y,
                    'z' : lm.z
                }
                for lm in self.hand_track.landmark
            ]
             
        }