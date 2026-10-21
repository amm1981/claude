@echo off
title Claude en accion - AgroCalera
cd /d "%~dp0"
python "%~dp0scripts\serve.py"
if errorlevel 1 pause
