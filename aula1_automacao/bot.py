import pyautogui as auto
import time
import pandas as pd
# repetir até acabar

auto.PAUSE = 0.5


# entrar no sistema da empresa
auto.press('win')

auto.write('c')

auto.write('h')

auto.write('r')

auto.write('o')

auto.write('m')

auto.write('e')


auto.press('enter')

time.sleep(5)

# https://dlp.hashtagtreinamentos.com/python/intensivao/login
#auto.write('https://dlp.hashtagtreinamentos.com/python/intensivao/login')


# fazer o login
auto.click(x=542, y=358)
auto.hotkey('ctrl', 'a')
auto.write('joao@gmail.com')

auto.press('tab')

auto.write('123456')

auto.press('tab')
auto.press('enter')
# pegar a base de dados


produtos_df = pd.read_csv('aula1_automacao\produtos.csv')


# cadastrar um produto

for linha in produtos_df.index:
    auto.scroll(5000)
    auto.click(x=510, y=234)

    codigo = str(produtos_df.loc[linha, "codigo"])
    auto.write(codigo)
    auto.press('tab')

    marca = str(produtos_df.loc[linha, "marca"])    
    auto.write(marca)
    auto.press('tab')

    tipo = str(produtos_df.loc[linha, "tipo"])
    auto.write(tipo)
    auto.press('tab')

    categoria = str(produtos_df.loc[linha, "categoria"])
    auto.write(categoria)
    auto.press('tab')

    preco = str(produtos_df.loc[linha, "preco_unitario"])
    auto.write(preco)
    auto.press('tab')

    custo = str(produtos_df.loc[linha, "custo"])
    auto.write(custo)
    auto.press('tab')

    obs = str(produtos_df.loc[linha, "obs"])
    
    if obs != 'nan':
        auto.write(obs)
    
    auto.press('tab')

    auto.press('enter')