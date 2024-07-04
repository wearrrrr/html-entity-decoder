# html-entity-decoder

This is a basic attempt at making a faster and more portable html entity decoder, personally I believe that most of the current decoders are bloated and or slow, which I hope to change.

## Why not htmlparser2?

Bloated. I heavily appreciate the work that htmlparser2 has put into making a portable and high quality HTML/XML parser, but 70kb for a parser seems really high, even with the absurd amount of html entities that exist.

## TODO
- [x] ~~Decoding Support~~
- [ ] Encoding support (Should be straightforward enough)
- [ ] Escaping support
- [ ] Figuring out how to encode HTML entities in a more effective way **(compression is out of the question! Way too slow to decompress on client)**
- [ ] (optionally) htmlparser2 compatible API
