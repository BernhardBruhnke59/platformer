/* global Phaser */
$(document).ready(function () {
    'use strict';
    window.opspark = window.opspark || {};
    let 
        opspark = window.opspark,
        game = opspark.createGame(create, update);

    function create() {
        game.opspark.init();
        
        opspark.platform.factory(game);
        opspark.platform.init(game);
        
        opspark.collectable.factory(game);
        opspark.collectable.init(game);
        
        opspark.cannon.factory(game);
        opspark.cannon.init(game);
        
        opspark.player.init(game);
        
        game.score = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    }

    function update() {
        const asset = game.player.asset,
              playerManager = game.playerManager,
              collectable = game.collectable;
        
        game.physics.arcade.collide(asset, game.platforms);
        game.physics.arcade.collide(asset, game.projectile);
        game.physics.arcade.collide(collectable, game.platforms);
        game.physics.arcade.overlap(asset, collectable, collectDb, null, this);
        game.physics.arcade.overlap(asset, game.projectile, onProjectileOverlap, null, this);
        
        playerManager.update();
    }
    
    function onProjectileOverlap() {
        console.log('Halle hit!');
        game.player.die();
    }
    
    function collectDb(player, collectable) {
        game.score.text = 'Score: ' + (parseInt(/\s+(\S*)$/.exec(game.score.text)[1], 10) + collectable.type.points);
        collectable.kill();
    }

});
