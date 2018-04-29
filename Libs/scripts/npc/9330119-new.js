var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
		return ;
    }
    if (status == 0) {
	if (cm.haveItem(5220000, 1)) {
	    cm.sendYesNo("±z¨­¤W¦³#b#t5220000##i5220000##k¥i¥H¶i¦æÂà³J¡C\r\n§A½T©w­n¨Ï¥Î #b¼é¬yÂà³J¾÷#k ¶i¦æÂà³J¶Ü?");
	} else {
	    cm.sendOk("¤£¦n·N«ä!±z¨S¦³#b#t5220000##i5220000##k¡C");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
        if (Math.floor(Math.random() * 800) == 0) {
            item = cm.gainGachaponItem(1102042, 1); //µµ©Ü
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082145, 1); //¶À¤â
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082146, 1); //¬õ¤â
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082147, 1); //ÂÅ¤â
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082148, 1); //µµ¤â
	}
        else if (Math.floor(Math.random() * 50) == 0) {
	    item = cm.gainGachaponItem(1082150, 1); //¦Ç¤â
	}
        else if (Math.floor(Math.random() * 900) == 0) {
	    item = cm.gainGachaponItem(1082149, 1); //½Å¤â
	}
        else if (Math.floor(Math.random() * 805) == 0) {
	    item = cm.gainGachaponItem(1022047, 1); //¿ßÀY
	}
        else if (Math.floor(Math.random() * 805) == 0) {
	    item = cm.gainGachaponItem(1022058, 1); //¯W¿ß
	}
        else if (Math.floor(Math.random() * 805) == 0) {
	    item = cm.gainGachaponItem(1022060, 1); //ª°µU
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1022067, 1); //¶Âª°µU
	}
        else if (Math.floor(Math.random() * 300) == 0) {
	    item = cm.gainGachaponItem(1012056, 1); //ª¯»ó
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1382037, 1); //°³¤ë¤§§ú
	}
        else if (Math.floor(Math.random() * 400) == 0) {
	    item = cm.gainGachaponItem(1372032, 1); //¸tÀsµu§ú
	}
        else if (Math.floor(Math.random() * 550) == 0) {
	    item = cm.gainGachaponItem(1382036, 1); //Às°©ªø§ú
	}
        else if (Math.floor(Math.random() * 400) == 0) {
	    item = cm.gainGachaponItem(1302026, 1); //¶Â¦â«B³Ê
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1372035, 1); //±Û¤õµu§ú 70¤õ
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1372036, 1); //¤­¬rµu§ú 70¬r
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1372037, 1); //·¥­áµu§ú 70¦B
	}
        else if (Math.floor(Math.random() * 500) == 0) {
	    item = cm.gainGachaponItem(1372038, 1); //¹p»ïµu§ú 70¹p
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1372039, 1); //ª¢¿Vµu§ú 130¤õ
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1372040, 1); //¼@¬rµu§ú 130¬r
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1372041, 1); //·¥¦Bµu§ú 130¦B
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1372042, 1); //±j¹pµu§ú 130¹p
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1382045, 1); //¤õ¶³ªø§ú 103¤õ
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1382046, 1); //¬rÀsªø§ú 103¬r
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1382047, 1); //¦B¾zªø§ú 103¦B
	}
        else if (Math.floor(Math.random() * 800) == 0) {
	    item = cm.gainGachaponItem(1382048, 1); //¨g¹pªø§ú 103¹p
	}
        else if (Math.floor(Math.random() * 700) == 0) {
	    item = cm.gainGachaponItem(1382049, 1); //¦¶³¶¤§§ú 163¤õ
	}
        else if (Math.floor(Math.random() * 700) == 0) {
	    item = cm.gainGachaponItem(1382050, 1); //¥ÈªZ¤§§ú 163¬r
	}
        else if (Math.floor(Math.random() * 700) == 0) {
	    item = cm.gainGachaponItem(1382051, 1); //«CÀs¤§§ú 163¦B
	}
        else if (Math.floor(Math.random() * 700) == 0) {
	    item = cm.gainGachaponItem(1382052, 1); //¥Õªê¤§§ú 163¹p
	}
	    else if (Math.floor(Math.random() * 500) == 0) {
            item = cm.gainGachaponItem(1102041, 1); //¯»©Ü
	}
		else if (Math.floor(Math.random() * 250) == 0) {
	    item = cm.gainGachaponItem(2022179, 1); //µµ¦âÄ«ªG
		}
		else if (Math.floor(Math.random() * 300) == 0) {
	    item = cm.gainGachaponItem(1012070, 1); //¯ó²ù¦B´Î
	} else {
	    var itemList = new Array(2022176, 2022113, 2043202, 2043201, 2044102, 2044101, 2040602, 2040601, 2043302, 2043301, 2040002, 2040001, 2044402, 2002017, 1402010, 1312014, 1442017, 1002063, 1060062, 1050018, 1002392, 1040037, 1002160, 1060005, 1332009, 1332008, 1442009, 1302004, 1312006, 1002154, 1002175, 1060064, 1061088, 1402012, 1002024, 1312005, 1432002, 1302050, 1002048, 1040061, 1041067, 1002131, 1072263, 1332001, 1312027, 1322015, 1432006, 1041088, 1061087, 1402013, 1302051, 1002023, 1402006, 1322000, 1372002, 1442001, 1422004, 1432003, 1040088, 1002100, 1041004, 1061047, 1322022, 1040021, 1061091, 1102012, 1050006, 1060018, 1041044, 1041024, 1041087, 1082146, 1332043, 1062001, 1051014, 1402030, 1432004, 1060060, 1432018, 1002096, 1442010, 1422003, 1472014, 1002021, 1060060, 1442031, 1402000, 1040089, 1432005);
	    item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	}

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("±z¤wÀò±o #b#t" + item + "##i" + item + "##k");
	} else {
	    cm.sendOk("ÀË¬d¤@¤U­I¥]¬O§_¤wº¡¡C");
	}
	cm.safeDispose();
    }
}