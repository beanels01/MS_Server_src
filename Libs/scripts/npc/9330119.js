
var status = -1;
var GachItem = new Array(
				[1302020,3,true],
				[1302021,3,true],
				[1302024,3,true],
				[1302030,3,true],
				[1302036,3,true],
				[1302049,3,true],
				[1302058,3,true],
				[1302063,3,true],
				[1302061,3,true],
				[1302064,3,true],
				[1302084,3,true],
				[1302085,3,true],
				[1302087,3,true],
                [1302086,3,true],
                [1302108,3,true],
                [1302109,3,true],
                [1312040,3,true],
                [1312041,3,true],
                [1312032,3,true],
                [1322054,3,true],
                [1322066,3,true],
                [1322067,3,true],
                [1332025,3,true],
                [1332029,3,true],
                [1332048,3,true],
                [1332054,3,true],
                [1332055,3,true],
                [1332056,3,true],
                [1332052,3,true],
                [1332082,3,true],
                [1332083,3,true],
                [1332101,3,true],
                [1372044,3,true],
                [1372045,3,true],
                [1372047,3,true],
                [1372048,3,true],
                [1382009,3,true],
                [1382012,3,true],
                [1382039,3,true],
                [1382057,3,true],
                [1382063,3,true],
                [1382064,3,true],
                [1402039,3,true],
                [1402041,3,true],
                [1402044,3,true],
                [1402046,3,true],
                [1402047,3,true],
                [1402054,3,true],
                [1402055,3,true],
                [1412011,3,true],
                [1412027,3,true],
                [1412036,3,true],
                [1412037,3,true],
                [1412033,3,true],
                [1412034,3,true],
                [1422040,3,true],
                [1422041,3,true],
                [1432012,3,true],
                [1432013,3,true],
                [1432041,3,true],
                [1432047,3,true],
				[1432049,3,true],
				[1432051,3,true],
				[1432052,3,true],
				[1442051,3,true],
				[1442024,3,true],
				[1442063,3,true],
				[1442067,3,true],
				[1442072,3,true],
				[1442073,3,true],
				[1452043,3,true],
				[1452045,3,true],
				[1452022,3,true],
				[1452057,3,true],
				[1452059,3,true],
				[1452063,3,true],
				[1452064,3,true],
				[1452019,3,true],
				[1462038,3,true],
				[1462050,3,true],
				[1462051,3,true],
				[1462057,3,true],
				[1462058,3,true],
				[1472030,3,true],
				[1472032,3,true],
				[1472050,3,true],
				[1472055,3,true],
				[1472054,3,true],
				[1472068,3,true],
				[1472071,3,true],
				[1472078,3,true],
				[1472079,3,true],
				[1482020,3,true],
				[1482021,3,true],
				[1482022,3,true],
				[1482023,3,true],
				[1482024,3,true],
				[1482035,3,true],
				[1482035,3,true],
				[1482036,3,true],
				[1492020,3,true],
				[1492021,3,true],
				[1492022,3,true],
                [1002140,3,true],
                [1052155,3,true],
                [1052156,3,true],
                [1052157,3,true],
                [1052157,3,true],
                [1052159,3,true],
                [1052167,3,true],
                [1072355,3,true],
                [1072356,3,true],
                [1072357,3,true], 
                [1072358,3,true], 
                [1072359,3,true],
                [1072368,3,true], 
                [1082234,3,true], 
                [1082235,3,true],
                [1082236,3,true], 
                [1082237,3,true], 
                [1082238,3,true], 
                [1032042,3,true], 
                [1032058,3,true], 
                [1122001,3,true],
                [1122002,3,true], 
                [1122003,3,true], 
                [1122004,3,true],
                [1122005,3,true], 
                [1122006,3,true], 
                [1122015,3,true], 
                [1122034,3,true], 
                [1122035,3,true], 
                [1122036,3,true],
                [1122037,3,true], 
                [1122038,3,true], 
                [1142204,3,true],
                [1142205,3,true], 
                [1142206,3,true], 
                [1142207,3,true],
                [1092057,3,true], 
                [1092045,3,true], 
                [1092047,3,true],
                [1092046,3,true], 
                [1092030,3,true],
                [1102084,3,true],
                [1102086,3,true],
                [1102041,3,true],
                [1102042,3,true],
                [1012070,3,true],
                [1012071,3,true],
                [1012164,3,true],
                [1012167,3,true],
                [1012168,3,true],
                [1012169,3,true],
                [1012170,3,true],
                [1012171,3,true],
                [1022058,3,true],
                [1022060,3,true],
                [1112915,3,true],
                [1082149,3,true],
				
				
				[2040303,3,true],
				[2040506,3,true],
				[2040709,3,true],
				[2040807,3,true],
				[2040806,3,true],
				[2043003,3,true],
				[2043103,3,true],
				[2043203,3,true],
				[2043303,3,true],
				[2043703,3,true],
				[2043803,3,true],
				[2044003,3,true],
				[2044103,3,true],
				[2044203,3,true],
				[2044303,3,true],
				[2044503,3,true],
				[2044603,3,true],
				[2044703,3,true],
				[2049100,1000,false]
				//其他都吃我渾沌卷
				);
				//物品ID,機率,是否上廣
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
	if (cm.haveItem(5220000, 1)) {
	    cm.sendYesNo("您身上有#b#t5220000##i5220000##k可以進行轉蛋。\r\n你確定要使用 #b潮流轉蛋機#k 進行轉蛋嗎?");
	} else {
	    cm.sendOk("不好意思!您沒有#b#t5220000##i5220000##k。");
	    cm.safeDispose();
	}
    } 
	else if (status == 1) {
		var item;
		var rate = 0;
		var rate_cur = Math.floor(Math.random() *1000+1);
		var gain = false;
		for(var i = 0 ; i < GachItem.length ; i++){
			var GItem = GachItem[i];
			rate += GItem[1];
			if (rate_cur < rate) {
				if(GItem[2]){
					item = cm.gainGachaponItem(GItem[0], 1);
	//				cm.worldMessage("玩家 「" + cm.getName() + "」" + "從轉蛋機轉到了#i"+GItem[0]+"#，大家一起恭喜他吧！" );
				}
				else
					item = cm.gainGachaponItem(GItem[0], 1);
				gain = true;
				break;
			}
		}
		if(!gain){
			var itemList = new Array(2022176, 2022113, 2043202, 2043201, 2044102, 2044101, 2040602, 2040601, 2043302, 2043301, 2040002, 2040001, 2044402, 2002017, 1402010, 1312014, 1442017, 1002063, 1060062, 1050018, 1002392, 1040037, 1002160, 1060005, 1332009, 1332008, 1442009, 1302004, 1312006, 1002154, 1002175, 1060064, 1061088, 1402012, 1002024, 1312005, 1432002, 1302050, 1002048, 1040061, 1041067, 1002131, 1072263, 1332001, 1312027, 1322015, 1432006, 1041088, 1061087, 1402013, 1302051, 1002023, 1402006, 1322000, 1372002, 1442001, 1422004, 1432003, 1040088, 1002100, 1041004, 1061047, 1322022, 1040021, 1061091, 1102012, 1050006, 1060018, 1041044, 1041024, 1041087, 1082146, 1332043, 1062001, 1051014, 1402030, 1432004, 1060060, 1432018, 1002096, 1442010, 1422003, 1472014, 1002021, 1060060, 1442031, 1402000, 1040089, 1432005);
			item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
		}

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("您已獲得 #b#t" + item + "##i" + item + "##k，抽獎機率權重："+rate_cur);
	} else {
	    cm.sendOk("檢查一下背包是否已滿。");
	}
	cm.safeDispose();
    }
}
