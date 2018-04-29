/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Faito(Showa Exchange Quest) - Showa Town(801000300)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
	    - Base from Sean360 script, thanks
---------------------------------------------------------------------------------------------------
**/

var status = -1;
var job_code;


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
    } else {
	cm.dispose();
		return ;
    }
	if (status == 0) {
	    cm.sendYesNo("因為轉職任務bug太多所以我就來幫大家轉職了，請問是否要進入轉職流程？");
	} 
	else if(status == 1) {
		job_code =cm.getJob();
		var lv = cm.getPlayerStat("LVL");
		var changed = 0;
		if(job_code>700 && job_code<950){
		cm.sendSimple("您已經是GM，請利用!job指令更換職業!");
		cm.dispose();
		}
		if(job_code==0){
			cm.sendSimple("您想轉職成為...？ \r\n#L0#戰士#l\r\n#L1#法師#l\r\n#L2#弓箭手#l\r\n#L3#盜賊#l\r\n#L4#海盜#l");
		}
		if(job_code==1000){
			cm.sendSimple("您想轉職成為...？ \r\n#L0#聖魂劍士#l\r\n#L1#烈焰巫師#l\r\n#L2#破風使者#l\r\n#L3#暗夜行者#l\r\n#L4#閃雷悍將#l");
		}
		else if(job_code%10==2){
			cm.sendSimple("已經是四轉職業囉...");
			cm.dispose();
		}
		else if(job_code>1000){
			if(job_code%100==0){
				if(lv>=30){
					job_code+=10;
					cm.changeJob(job_code);
					cm.sendSimple("轉職完成!");
					cm.dispose();
				}
				else{
					cm.sendSimple("等級還不夠哦。");
				}
			}
			else if(job_code%10==0){
				if(lv>=70){
					job_code+=1;
					cm.changeJob(job_code);
					cm.sendSimple("轉職完成!");
					cm.dispose();
				}
				else{
					cm.sendSimple("等級還不夠哦。");
					cm.dispose();
				}
			}
			else if(job_code%10==1){
				if(lv>=120){
					job_code+=1;
					cm.changeJob(job_code);
					cm.sendSimple("轉職完成!");
					cm.dispose();
				}
				else{
					cm.sendSimple("等級還不夠哦。");
					cm.dispose();
				}
			}
		}
		else if(job_code%100==0){
			if(lv<30) cm.sendSimple("等級還不夠哦。");
			else{
			if(job_code==100){
			cm.sendSimple("您想轉職成為...？\r\n#L0#狂戰士#l\r\n#L1#見習騎士#l\r\n#L2#槍騎兵#l");
			}
			else if(job_code==200){
			cm.sendSimple("您想轉職成為...？\r\n#L0#巫師（火、毒）#l\r\n#L1#巫師（冰、雷）#l\r\n#L2#僧侶#l");
			}
			else if(job_code==300){
			cm.sendSimple("您想轉職成為...？\r\n#L0#獵人#l\r\n#L1#弩弓手#l");
			}
			else if(job_code==400){
			cm.sendSimple("您想轉職成為...？\r\n#L0#刺客#l\r\n#L1#俠盜#l");
			}
			else if(job_code==500){
			cm.sendSimple("您想轉職成為...？\r\n#L0#打手#l\r\n#L1#槍手#l");
			}
			}
		}
		else if(job_code>0 && job_code<700){
			if( job_code%10 ==0){  //冒險者三轉
				if(lv>=70){
				job_code+=1;
				cm.changeJob(job_code);
				cm.sendSimple("轉職完成!");
				cm.dispose();
				}
				else{
					cm.sendSimple("等級還沒到哦");
					cm.dispose();
				}
			}
			if( job_code%10 ==1){  //冒險者四轉
				if(lv>=120){
				job_code+=1;
				cm.changeJob(job_code);
				cm.sendSimple("轉職完成!");
				cm.dispose();
				}
				else{
					cm.sendSimple("等級還沒到哦");
					cm.dispose();
				}
			}
		}
		else{
			cm.sendSimple("oops,看樣子你的職業被GM排擠了，麻煩請回報管理員。");
			cm.dispose();
		}
	}
	if(status==2){
		if(job_code==0){
			if(selection == 0){
				cm.changeJob(100);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
			else if(selection == 1){
				cm.changeJob(200);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
			else if(selection == 2){
				cm.changeJob(300);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
			else if(selection == 3){
				cm.changeJob(400);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
			else if(selection == 4){
				cm.changeJob(500);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
		}
		else if(job_code==1000){
			if(selection == 0){
				cm.changeJob(1100);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
			else if(selection == 1){
				cm.changeJob(1200);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
			else if(selection == 2){
				cm.changeJob(1300);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
			else if(selection == 3){
				cm.changeJob(1400);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
			else if(selection == 4){
				cm.changeJob(1500);
				cm.sendSimple("轉職完成!");
				cm.dispose();
			}
		}
		else{
			job_code=cm.getJob();
			job_code+=(selection+1)*10;
			cm.changeJob(job_code);
			cm.sendSimple("轉職完成!");
			cm.dispose();
		}
		
	}
}