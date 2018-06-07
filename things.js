global.atob = require("atob");
//npm install atob --save

function Decoder() {
    let string = 'ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA0KLi0uICAgICAuICAgICAgIC4gICAgICAgICAgIC4gICAgICAgICAuICAgIA0KfC0uLS4gIC18Li0uICAuLXwuLS4tLi0uLi0uLS4tLi0sICAgICB8LS4tLg0KJy1gLScgICAnYC0nICBgLSdgLXwtYC1gJyAnICcgYCctICBvICBgLWAtfA0KICAgICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgYC0nDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogIC4gIC4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQouLXwuLXwtLiAuLS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQpgLSdgJ2AtJy1gLXwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICBgLScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg';
    let decodedString = atob(string);
    console.log(decodedString);


}
Decoder();

// .-.     .       .           .         .
// |-.-.  -|.-.  .-|.-.-.-..-.-.-.-,     |-.-.
// '-`-'   '`-'  `-'`-|-`-`' ' ' `'-  o  `-`-|
//                   '                    `-'
//
//   .  .
// .-|.-|-. .-.
// `-'`'`-'-`-|
//          `-'
