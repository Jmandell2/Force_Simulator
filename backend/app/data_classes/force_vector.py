

"""
Purpose: create a json style vector to send to unreal engine telling 
    the animation what direction to move and how fast

"""
# TODO: need to see the output mediapipe actually gives you 
# and then transform that into vector form
class ForceVector:

    def __init__(self, hand_track):
        self.hand_track = hand_track
        pass
    # TODO: with individual fingers and other tracking info now you're probably gonna have to include rotation
    # and other per finger data

    def json_output():
        # TODO: implement outputting a json
        pass