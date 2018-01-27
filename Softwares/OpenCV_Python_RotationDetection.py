import cv2
import math
import numpy as np

vid = cv2.VideoCapture('YOUR_VIDEO_FILE', 0)
total_frame = vid.get(cv2.CAP_PROP_FRAME_COUNT)
fourcc = cv2.VideoWriter_fourcc(*'XVID')
width = vid.get(cv2.CAP_PROP_FRAME_WIDTH)
height = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)
width = int(width)
height = int(height)
print(width)

video_out = cv2.VideoWriter('OUTPUT_NAME.avi', fourcc, 10, (width, height))   

def drawAxis(img, start_pt, vec, colour, length):
    CV_AA = 16

    end_pt = (int(start_pt[0] + length * vec[0]), int(start_pt[1] + length * vec[1]))

    cv2.circle(img, (int(start_pt[0]), int(start_pt[1])), 5, colour, 1)

    cv2.line(img, (int(start_pt[0]), int(start_pt[1])), end_pt, colour, 1, CV_AA);

    angle = math.atan2(vec[1], vec[0])
    print(angle)

    qx0 = int(end_pt[0] - 9 * math.cos(angle + math.pi / 4));
    qy0 = int(end_pt[1] - 9 * math.sin(angle + math.pi / 4));
    cv2.line(img, end_pt, (qx0, qy0), colour, 1, CV_AA);

    qx1 = int(end_pt[0] - 9 * math.cos(angle - math.pi / 4));
    qy1 = int(end_pt[1] - 9 * math.sin(angle - math.pi / 4));
    cv2.line(img, end_pt, (qx1, qy1), colour, 1, CV_AA);

while (vid.isOpened()):
    ret, frame = vid.read()
    frame_number = int(vid.get(cv2.CAP_PROP_POS_FRAMES))
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    retval, bw = cv2.threshold(gray, 10, 50, cv2.THRESH_BINARY |cv2.THRESH_OTSU)# 

    img, contours, hierarchy = cv2.findContours(bw, cv2.RETR_LIST, cv2.CHAIN_APPROX_NONE)

    for i in range(0, len(contours)):

        area = cv2.contourArea(contours[i])

        if area < 1e2 or 1e4 < area:
            continue

        cv2.drawContours(frame, contours, i, (0, 0, 255), 2, 8, hierarchy, 0)

        X = np.array(contours[i], dtype=np.float).reshape((contours[i].shape[0], contours[i].shape[2]))

        mean, eigenvectors = cv2.PCACompute(X, mean=np.array([], dtype=np.float), maxComponents=1)

        pt = (mean[0][0], mean[0][1])
        vec = (eigenvectors[0][0], eigenvectors[0][1])
        drawAxis(frame, pt, vec, (255, 255, 0), 50)

    video_out.write(frame)
    cv2.imshow('output', frame)
    if cv2.waitKey(100) & 0xFF == ord('q'):
        break
    elif frame_number == total_frame:
        vid.release()
        video_out.release()
        cv2.waitKey(0)
        break

cv2.destroyAllWindows()
