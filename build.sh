emcc -O3 -s EXPORTED_FUNCTIONS="['_hello']" -s WASM=1 -s ONLY_MY_CODE=1 -g2 --separate-asm hello.c -o hello.html 
