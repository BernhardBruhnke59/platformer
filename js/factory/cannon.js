/* global Phaser */
(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.cannon = window.opspark.cannon || {};
    
    opspark.cannon.factory = function (game) {
        const 
            assetKeyCannon = 'cannon',
            assetKeyProjectile = 'projectile',
            projectileHalfSize = 12;
            
        game.cannon = game.add.group();
        game.projectile = game.add.group();
        game.projectile.enableBody = true;
        
        function createProjectile(x, y) {
            let projectile = game.projectile.create(x, y, assetKeyProjectile);
            projectile.anchor.setTo(0.5, 0.5);
            projectile.alpha = 0;
            game.physics.arcade.enable(projectile);
            return projectile;
        }
        
        function configureTween(tween, projectile, cannon) {
            tween.onStart.addOnce(function() {
                projectile.alpha = 1;
            });
            tween.onComplete.addOnce(function() {
               projectile.alpha = 0;
               projectile.x = cannon.x, projectile.y = cannon.y;
           });
        } 
        
        let create = {
           onTop: function(position, delay) {
               if (position < 0 || position > game.world.width) { throw new Error(`You are trying to place a cannon off the stage at ${position}, this is not allowed!`); }
               var cannon = game.cannon.create(position, 40, assetKeyCannon);
               cannon.anchor.setTo(0.5, 0.5);
               cannon.scale.y = -1;
               let projectile = createProjectile(cannon.x, cannon.y);
               let tween = game.add.tween(projectile).to( { y: game.world.height + projectile.height }, 2000, Phaser.Easing.Bounce.Out, true, delay || 0, -1);
               configureTween(tween, projectile, cannon);
               return cannon;
           },
           onBottom: function (position, delay){
               if (position < 0 || position > game.world.width) { throw new Error(`You are trying to place a cannon off the stage at ${position}, this is not allowed!`); }
               var cannon = game.cannon.create(position, game.world.height - 72, assetKeyCannon);
               cannon.anchor.setTo(0.5, 0.5);
               let projectile = game.projectile.create(cannon.x, cannon.y, assetKeyProjectile);
               projectile.anchor.setTo(0.5, 0.5);
               projectile.scale.y = -1;
               projectile.alpha = 0;
               let tween = game.add.tween(projectile).to( { y: 0 + projectile.height }, 2000, Phaser.Easing.Bounce.Out, true, delay || 0, -1);
               configureTween(tween, projectile, cannon);
               return cannon;
           }
           ,
           onLeft: function (position, delay){
               if (position < 0 || position > game.world.height) { throw new Error(`You are trying to place a cannon off the stage at ${position}, this is not allowed!`); }
               let cannon = game.cannon.create(42, position, assetKeyCannon);
               cannon.anchor.setTo(0.5, 0.5);
               cannon.angle = 90;
               let projectile = game.projectile.create(cannon.x, cannon.y, assetKeyProjectile);
               projectile.anchor.setTo(0.5, 0.5);
               projectile.angle = -90;
               projectile.alpha = 0;
               let tween = game.add.tween(projectile).to( { x: game.world.width + projectile.height }, 2000, Phaser.Easing.Bounce.Out, true, delay || 0, -1);
               configureTween(tween, projectile, cannon);
               return cannon;
           },
           onRight: function (position, delay){
               if (position < 0 || position > game.world.height) { throw new Error(`You are trying to place a cannon off the stage at ${position}, this is not allowed!`); }
               let cannon = game.cannon.create(game.world.width - 42, position, assetKeyCannon);
               cannon.anchor.setTo(0.5, 0.5);
               cannon.angle = -90;
               let projectile = game.projectile.create(cannon.x, cannon.y, assetKeyProjectile);
               projectile.anchor.setTo(0.5, 0.5);
               projectile.angle = 90;
               projectile.alpha = 0;
               let tween = game.add.tween(projectile).to( { x: 0 - projectile.height }, 2000, Phaser.Easing.Bounce.Out, true, delay || 0, -1);
               configureTween(tween, projectile, cannon);
               return cannon;
           }
        };
        
        /**
         * Returns a helper for placing cannons.
         */
        opspark.cannon.create = create;
    };
})(window);