import mediapipe as np
import numpy as np
import cv2

'''

Return value of a prediction:


Object containing:
    - multi_hand_landmarks
        - list of hands, with each hand containing 21 landmarks in an array
        - hand = result.multi_hand_landmarks[0]
        - each landmark has an x, y, and z coordinate (landmark.x, landmark.y, landmark.z)
        - x, y normalized horizontal and vertical (0-1)
        - z is a depth value
        - landmark indices
            - 0 wrist
            - 1-4 thumb
            - 5-8 index finger
            - etc. see hand_landmarks.png
    - multi_handedness
        - tells you whether it's a left or right hand
    - multi_hand_world_landmarks
        - same landmarks but in 3d world space not normalized screen space


'''



class HandTracker:

    """
    Detects hand landmarks from images.
    """

    def __init__(self):
        self.hands = mp.solutions.hands.Hands(
            max_num_hands=1,
            min_detection_confidence=0.7,
            min_tracking_confidence=0.7,
        )


    def predict(self, image: np.ndarray):
        """
        Run hand tracking.

        Args:
            image:
                OpenCV image (BGR format)

        Returns:
            Hand landmarks or None
        """

        # MediaPipe expects RGB
        rgb = cv2.cvtColor(
            image,
            cv2.COLOR_BGR2RGB
        )
 
        result = self.hands.process(rgb)


        if result.multi_hand_landmarks:
            return result.multi_hand_landmarks[0]

        return None
