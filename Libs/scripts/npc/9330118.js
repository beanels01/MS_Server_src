
var status = -1;
var GachItem = new Array(
				[2280003,3,true],
				[2280004,3,true],
				[2280005,3,true],
				[2280006,3,true],
				[2280007,3,true],
				[2280008,3,true],
				[2280009,3,true],
				[2280010,3,true],
				[2280011,3,true],
				[2280012,3,true],
				[2280013,3,true],
				[2280014,3,true],
				[2280015,3,true],
				[2280016,3,true],
				[2280017,3,true],
				[2280018,3,true],
				[2280019,3,true],
				[2290000,3,true],
				[2290001,3,true],
				[2290002,3,true],
				[2290003,3,true],
				[2290004,3,true],
				[2290005,3,true],
				[2290006,3,true],
				[2290007,3,true],
				[2290008,3,true],
				[2290009,3,true],
				[2290010,3,true],
				[2290011,3,true],
				[2290012,3,true],
				[2290013,3,true],
				[2290014,3,true],
				[2290015,3,true],
				[2290016,3,true],
				[2290017,3,true],
				[2290018,3,true],
				[2290019,3,true],
				[2290020,3,true],
				[2290021,3,true],
				[2290022,3,true],
				[2290023,3,true],
				[2290024,3,true],
				[2290025,3,true],
				[2290026,3,true],
				[2290027,3,true],
				[2290028,3,true],
				[2290029,3,true],
				[2290030,3,true],
				[2290031,3,true],
				[2290032,3,true],
				[2290033,3,true],
				[2290034,3,true],
				[2290035,3,true],
				[2290036,3,true],
				[2290037,3,true],
				[2290038,3,true],
				[2290039,3,true],
				[2290040,3,true],
				[2290041,3,true],
				[2290042,3,true],
				[2290043,3,true],
				[2290044,3,true],
				[2290045,3,true],
				[2290046,3,true],
				[2290047,3,true],
				[2290048,3,true],
				[2290049,3,true],
				[2290050,3,true],
				[2290051,3,true],
				[2290052,3,true],
				[2290053,3,true],
				[2290054,3,true],
				[2290055,3,true],
				[2290056,3,true],
				[2290057,3,true],
				[2290058,3,true],
				[2290059,3,true],
				[2290060,3,true],
				[2290061,3,true],
				[2290062,3,true],
				[2290063,3,true],
				[2290064,3,true],
				[2290065,3,true],
				[2290066,3,true],
				[2290067,3,true],
				[2290068,3,true],
				[2290069,3,true],
				[2290070,3,true],
				[2290071,3,true],
				[2290072,3,true],
				[2290073,3,true],
				[2290074,3,true],
				[2290075,3,true],
				[2290076,3,true],
				[2290077,3,true],
				[2290078,3,true],
				[2290079,3,true],
				[2290080,3,true],
				[2290081,3,true],
				[2290082,3,true],
				[2290083,3,true],
				[2290084,3,true],
				[2290085,3,true],
				[2290086,3,true],
				[2290087,3,true],
				[2290088,3,true],
				[2290089,3,true],
				[2290090,3,true],
				[2290091,3,true],
				[2290092,3,true],
				[2290093,3,true],
				[2290094,3,true],
				[2290095,3,true],
				[2290096,3,true],
				[2290097,3,true],
				[2290098,3,true],
				[2290099,3,true],
				[2290100,3,true],
				[2290101,3,true],
				[2290102,3,true],
				[2290103,3,true],
				[2290104,3,true],
				[2290105,3,true],
				[2290106,3,true],
				[2290107,3,true],
				[2290108,3,true],
				[2290109,3,true],
				[2290110,3,true],
				[2290111,3,true],
				[2290112,3,true],
				[2290113,3,true],
				[2290114,3,true],
				[2290115,3,true],
				[2290116,3,true],
				[2290117,3,true],
				[2290118,3,true],
				[2290119,3,true],
				[2290120,3,true],
				[2290121,3,true],
				[2290122,3,true],
				[2290123,3,true],
				[2290124,3,true],
				[2290125,3,true],
				[2290126,3,true],
				[2290127,3,true],
				[2290128,3,true],
				[2290129,3,true],
				[2290130,3,true],
				[2290131,3,true],
				[2290132,3,true],
				[2290133,3,true],
				[2290134,3,true],
				[2290135,3,true],
				[2290136,3,true],
				[2290137,3,true],
				[2290138,3,true],
				[2040303,10,true],
				[2040506,10,true],
				[2040709,10,true],
				[2040807,10,true],
				[2040806,10,true],
				[2043003,10,true],
				[2043103,10,true],
				[2043203,10,true],
				[2043303,10,true],
				[2043703,10,true],
				[2043803,10,true],
				[2044003,10,true],
				[2044103,10,true],
				[2044203,10,true],
				[2044303,10,true],
				[2044503,10,true],
				[2044603,10,true],
				[2044703,10,true],
				[2040538,10,true],
				[2040740,10,true],
				[2040829,10,true],
				[2040830,10,true],
				[2043023,10,true],
				[2043117,10,true],
				[2043217,10,true],
				[2043312,10,true],
				[2043712,10,true],
				[2043812,10,true],
				[2044025,10,true],
				[2044117,10,true],
				[2044217,10,true],
				[2044317,10,true],
				[2044417,10,true],
				[2044512,10,true],
				[2044612,10,true],
				[2044712,10,true],
				[2041016,10,true],
				[2041052,10,true],
				[2041053,10,true],
				[2040526,10,true],
				[2040527,10,true],
				[2040528,10,true],
				[2040529,10,true],
				[2040817,10,true],
				[2040815,10,true],
				[2340000,1000,false]
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
		var item,item;
		var rate = 0;
		var rate_cur = Math.floor(Math.random() *1000+1);
		var gain = false;
		for(var i = 0 ; i < GachItem.length ; i++){
			var GItem = GachItem[i];
			rate += GItem[1];
			if (rate_cur < rate) {
				item_id=GItem[0];
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
		if(!gain){item = cm.gainGachaponItem(2340000, 1);
		}

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("您已獲得 #b#t" + item + "##i" + item + "##k，抽獎機率權重："+rate_cur);
	} else {
	    cm.sendOk("檢查一下背包是否已滿。item_id:"+item_id+",抽獎權重:"+rate_cur);
	}
	cm.safeDispose();
    }
}
