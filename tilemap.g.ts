// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000030202020100000000000000000000000000000000030202020100000000000004040404040000030202010000030202020100000004040404040000000000000505050505000004040404000604040404040000000505050505000007080900050505050500000505050502020505050505000000050505050500000302020205050505050000050505050504050505050500000005050505050000040404040505050505000005050505050505050505050000000505050505000005050505`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . 
2 2 2 2 2 . . 2 2 2 2 . . 2 2 2 2 2 . . . 2 2 2 2 2 . . . . . . 
2 2 2 2 2 . . 2 2 2 2 . . 2 2 2 2 2 . . . 2 2 2 2 2 . . . . . . 
2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 . . 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.oceanSand7,sprites.builtin.oceanSand6,sprites.builtin.oceanSand5,sprites.builtin.oceanSand10,myTiles.tile1,sprites.builtin.coral0,sprites.builtin.coral1,sprites.builtin.coral2,sprites.builtin.coral5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
