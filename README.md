fake m0byw4t3l jest zjebany i spojżałem do kodu i jakiś debil zrobił tak że wysyłasz swoje zdj do imgur...
ja śię w to nie bawię nie bd upubliczniał moich zdj awięc mamy fork z zpatchowanym index.js i zdj zamiast wlinku jest teraz zakodowane w base64 pownno działać
polecam marcin kuskowski


# INSTRUKCJA:
## ANDROID:

PIERWSZE URUCHOMIENIE
1. Pobierz aplikację "Termux" https://play.google.com/store/apps/details?id=com.termux
2. Otwórz i wpisz następujące komendy pokoleji:
```bash
apt update -y && apt upgrade -y
```
```bash
pkg update -y && pkg upgrade -y
```
```bash
pkg install nodejs -y
```
```bash
npm install -g http-server -y
```
3. Pobierz to repozytorium i wypakuj ję pod nazwą "id" w folderze głównym (zwanym też jako root lub /storage/emulated/0/ czyli poprostu obok folderu pobranych) 
4. W termux'ie wpisz te komendy:
```bash
cd /storage/emulated/0/id
```
```bash
http-server -p 8080 -a 127.0.0.1
```
5. Wejdz na http://localhost:8080/index.html na przeglądarce google lub chrome i to wszystko

PONOWNE URUCHOMIENIE
1. Otwórz Termux'a i wpisz te komendy:
```bash
cd /storage/emulated/0/id
```
```bash
http-server -p 8080 -a 127.0.0.1
```
2. Wejdz na http://localhost:8080/index.html na przeglądarce google lub chrome i to wszystko
## IOS:
Brak - nie mam użądzenia z IOS'em aby stworzyć instrukcje
