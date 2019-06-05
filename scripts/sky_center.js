room.update = function (dt)
{
	var sky = room.objects["js_sky"];
	if (sky)
	{
		sky.pos = Vector(player.pos.x,player.pos.y,player.pos.z);
	}
	sky = room.objects["js_sky0"];
	if (sky)
	{
		sky.pos = Vector(player.pos.x,player.pos.y,player.pos.z);
	}
};