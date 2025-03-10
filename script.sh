#!/bin/bash

echo "Qual o nome do Desafio?"
read challenge
echo "Criando pastas para o desafio $challenge"

mkdir $challenge
echo "//$challenge" > $challenge/$challenge.js
echo "https://www.hackerrank.com/challenges/$challenge/problem" > $challenge/$challenge.md
