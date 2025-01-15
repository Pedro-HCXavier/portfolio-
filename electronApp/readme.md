# Gerador de Senhas com MongoDB e Docker

Este é um projeto de gerador de senhas simples, utilizando MongoDB como banco de dados e Docker para gerenciamento dos containers. O projeto consiste em um backend que gera e armazena senhas seguras no MongoDB, com uma interface para interação.

## Requisitos

Antes de começar, você precisará ter os seguintes softwares instalados na sua máquina:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/downloads)

## Passo a Passo para Rodar o Projeto Localmente

### 1. Baixar o Projeto

Clone este repositório no seu diretório local usando o comando `git`:

```bash
git clone https://github.com/Pedro-HCXavier/portfolio-.git

```
isso vai baixar todo o portfólio na sua máquina no diretírio em que o git foi executado

### 2. criar os Docker Containers
você pode fazer isso usando o prompt de comando.

dentro do diretório ```/electronApp``` copie este comando e execute... ```docker compose up --build```

### 3. Teste
O projeto já está instalado e pronto para ser testado na sua máquina. Abra o seu navegador acesse ```localhost:3000``` e o gerador de senhas deve funcionar.