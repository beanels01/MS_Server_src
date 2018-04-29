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
	    cm.sendYesNo("�]����¾����bug�Ӧh�ҥH�ڴN�����j�a��¾�F�A�аݬO�_�n�i�J��¾�y�{�H");
	} 
	else if(status == 1) {
		job_code =cm.getJob();
		var lv = cm.getPlayerStat("LVL");
		var changed = 0;
		if(job_code>700 && job_code<950){
		cm.sendSimple("�z�w�g�OGM�A�ЧQ��!job���O��¾�~!");
		cm.dispose();
		}
		if(job_code==0){
			cm.sendSimple("�z�Q��¾����...�H \r\n#L0#�Ԥh#l\r\n#L1#�k�v#l\r\n#L2#�}�b��#l\r\n#L3#�s��#l\r\n#L4#���s#l");
		}
		if(job_code==1000){
			cm.sendSimple("�z�Q��¾����...�H \r\n#L0#�t��C�h#l\r\n#L1#�P�K�Ův#l\r\n#L2#�}���Ϫ�#l\r\n#L3#�t�]���#l\r\n#L4#�{�p���N#l");
		}
		else if(job_code%10==2){
			cm.sendSimple("�w�g�O�|��¾�~�o...");
			cm.dispose();
		}
		else if(job_code>1000){
			if(job_code%100==0){
				if(lv>=30){
					job_code+=10;
					cm.changeJob(job_code);
					cm.sendSimple("��¾����!");
					cm.dispose();
				}
				else{
					cm.sendSimple("�����٤����@�C");
				}
			}
			else if(job_code%10==0){
				if(lv>=70){
					job_code+=1;
					cm.changeJob(job_code);
					cm.sendSimple("��¾����!");
					cm.dispose();
				}
				else{
					cm.sendSimple("�����٤����@�C");
					cm.dispose();
				}
			}
			else if(job_code%10==1){
				if(lv>=120){
					job_code+=1;
					cm.changeJob(job_code);
					cm.sendSimple("��¾����!");
					cm.dispose();
				}
				else{
					cm.sendSimple("�����٤����@�C");
					cm.dispose();
				}
			}
		}
		else if(job_code%100==0){
			if(lv<30) cm.sendSimple("�����٤����@�C");
			else{
			if(job_code==100){
			cm.sendSimple("�z�Q��¾����...�H\r\n#L0#�g�Ԥh#l\r\n#L1#�����M�h#l\r\n#L2#�j�M�L#l");
			}
			else if(job_code==200){
			cm.sendSimple("�z�Q��¾����...�H\r\n#L0#�Ův�]���B�r�^#l\r\n#L1#�Ův�]�B�B�p�^#l\r\n#L2#���Q#l");
			}
			else if(job_code==300){
			cm.sendSimple("�z�Q��¾����...�H\r\n#L0#�y�H#l\r\n#L1#���}��#l");
			}
			else if(job_code==400){
			cm.sendSimple("�z�Q��¾����...�H\r\n#L0#���#l\r\n#L1#�L�s#l");
			}
			else if(job_code==500){
			cm.sendSimple("�z�Q��¾����...�H\r\n#L0#����#l\r\n#L1#�j��#l");
			}
			}
		}
		else if(job_code>0 && job_code<700){
			if( job_code%10 ==0){  //�_�I�̤T��
				if(lv>=70){
				job_code+=1;
				cm.changeJob(job_code);
				cm.sendSimple("��¾����!");
				cm.dispose();
				}
				else{
					cm.sendSimple("�����٨S��@");
					cm.dispose();
				}
			}
			if( job_code%10 ==1){  //�_�I�̥|��
				if(lv>=120){
				job_code+=1;
				cm.changeJob(job_code);
				cm.sendSimple("��¾����!");
				cm.dispose();
				}
				else{
					cm.sendSimple("�����٨S��@");
					cm.dispose();
				}
			}
		}
		else{
			cm.sendSimple("oops,�ݼˤl�A��¾�~�QGM�����F�A�·нЦ^���޲z���C");
			cm.dispose();
		}
	}
	if(status==2){
		if(job_code==0){
			if(selection == 0){
				cm.changeJob(100);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
			else if(selection == 1){
				cm.changeJob(200);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
			else if(selection == 2){
				cm.changeJob(300);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
			else if(selection == 3){
				cm.changeJob(400);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
			else if(selection == 4){
				cm.changeJob(500);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
		}
		else if(job_code==1000){
			if(selection == 0){
				cm.changeJob(1100);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
			else if(selection == 1){
				cm.changeJob(1200);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
			else if(selection == 2){
				cm.changeJob(1300);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
			else if(selection == 3){
				cm.changeJob(1400);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
			else if(selection == 4){
				cm.changeJob(1500);
				cm.sendSimple("��¾����!");
				cm.dispose();
			}
		}
		else{
			job_code=cm.getJob();
			job_code+=(selection+1)*10;
			cm.changeJob(job_code);
			cm.sendSimple("��¾����!");
			cm.dispose();
		}
		
	}
}