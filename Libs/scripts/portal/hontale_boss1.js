function enter(pi) {
   var em = pi.getEventManager("HorntailBattle");

    if (em != null) {
	var prop = em.getProperty("preheadCheck");

	if (prop != null && prop.equals("0")) {
	    pi.mapMessage(6, "The enromous creature is approaching from the deep cave.")
	    em.setProperty("preheadCheck", "1");
	}
    }
	return false;
}