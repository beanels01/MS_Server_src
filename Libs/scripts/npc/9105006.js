
var status = -1;
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
		if (cm.haveItem(5150041, 1)) {
	    cm.sendYesNo("�z���W��#b#t5150041##i5150041##k�i�H�i��žv�C\r\n�A�T�w�n�ϥ� #b�y�O�L�����v�v#k �ܤ��H���v����? by beanels");
		} else {
	    cm.sendOk("���n�N��!�z�S��#b#t5150041##i5150041##k�C");
	    cm.safeDispose();
		}
    } 
	else if (status == 1) {
		var gender = cm.getPlayerStat("GENDER");
		var New_Hair;
		if(gender)	New_Hair = [31760, 31770, 31780,31790, 31800, 31810,31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31910, 31920, 31930, 31940, 31950];
		else New_Hair = [33000, 33030, 33080, 33090, 34000, 30730,30760, 30770, 30790,30800, 30810, 30820, 30830, 30840, 30860, 30870, 30880, 30890, 30900, 30910, 30920,30990]; 
		
		var rate_cur = Math.floor(Math.random() *New_Hair.length);
	    if (cm.setAvatar(5150041, New_Hair[rate_cur]) == 1) {
		cm.sendOk("�H���ܴ��v�������A���ն��q�Цۦ�V�v�C by beanels");
		cm.dispose();
	    } else {
		cm.sendOk("�ݨӧڨS��k���A���Y�v��");
		cm.dispose();
	    }
	}
   }
