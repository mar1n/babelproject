function* generatorfunction(a) {
    yield a;
    yield a +1 ;
 }
 
 let g = generatorfunction(8);
 console.log(g.next());
 console.log(g.next());