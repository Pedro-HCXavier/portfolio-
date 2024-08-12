import pyautogui as auto
import pandas as pd
import time

print(auto.position())

produtos_df = pd.read_csv("produtos.csv")
