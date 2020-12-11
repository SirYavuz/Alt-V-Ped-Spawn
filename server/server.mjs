import * as alt from 'alt';
import * as chat from 'chat';


alt.onClient('pedspawnla', (player, pedadi) => {
    alt.setTimeout(() => {
        // alt.log(`==> ${player.name} Ped değiştirdi: ${pedadi} `);
        player.model = alt.hash(pedadi);
        player.spawn(player.pos.x, player.pos.y, player.pos.z)
        player.health = 200;
    }, 1000);
});