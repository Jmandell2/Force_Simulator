import mediapipe as np
import numpy as np
import cv2

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

        # TODO: look into what is actually a part of the hand track prediction

        if result.multi_hand_landmarks:
            return result.multi_hand_landmarks[0]



        return None
