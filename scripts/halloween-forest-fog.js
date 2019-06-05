var isJanusWeb = (typeof elation != 'undefined');
var timer = 0;
var orange = V(Math.pow(252/255., 2), Math.pow(55/255., 2), Math.pow(53/255., 2));
var blue = V(Math.pow(29/255., 2), Math.pow(100/255., 2), Math.pow(255/255., 2));
var purple = V(Math.pow(77/255., 2), Math.pow(74/255., 2), Math.pow(136/255., 2));
room.update = function(dt)
{
	var angle = Math.atan2(player.view_dir.z, player.view_dir.x);
	var degrees = angle*57.2958;
	if (isJanusWeb) // removed since janusweb 1.2 orientation bug was fixed
	{
		//degrees = -degrees;
	}
	if (degrees > 0 && degrees <= 90)
	{
		room.fog_col = lerp_color(purple,orange,degrees/90.0);
	}
	else if (degrees >= 90)
	{
		room.fog_col = lerp_color(orange,purple,(degrees-90)/90.0);
	}
	else if (degrees <= -90)
	{
		room.fog_col = lerp_color(blue,purple,-(degrees+90)/90.0);
	}
	else if (degrees <= 0)
	{
		room.fog_col = lerp_color(purple,blue,-degrees/90.0);
	}
	timer += dt * 0.001;
	
	if (isJanusWeb)
	{
		if (room.objects['js_rain'])
		{
			room.objects['js_rain'].col = room.fog_col;
		}
		room.ambient = lerp_color(V(0.5,0.5,0.5),room.fog_col, 0.5);
	}
	if (timer > 5)
	{
		timer -= 5;
		//print(degrees);
	}
}
function lerp(v0, v1, t)
{
	return (1 - t) * v0 + t * v1;
}
function lerp_color(first, second, t)
{
	return normalized(V(lerp(first.x, second.x, t), lerp(first.y, second.y, t), lerp(first.z, second.z, t)));
}