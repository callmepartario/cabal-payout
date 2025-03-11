// User set variables
let voyageNumber = '';
let faction = '';
let factionFleet = '';
let factionIcon = '';
let factionIconReport = '';
let factionVault = '';
let factionVaultAccount = '';
let shipType = 0;
let shipTypeEmoji = '';
let shipName = '';
let shipNameValue = '';

let jobType = '';
let jobRate = 0;

let goldStart = 0;
let goldStartValue = 0;
let goldEnd = 0;
let goldEndValue = 0;
let doubloonStart = 0;
let doubloonStartValue = 0;
let doubloonEnd = 0;
let doubloonEndValue = 0;

let bonusStraightShip = 0;
let bonusStraightShipAmount = 0;
let bonusFullHouse = 0;
let bonusFullHouseAmount = 0;
let bonusRoyalFlush = 0;
let bonusRoyalFlushAmount = 0;
let bonusUnitedDeck = 0;
let bonusUnitedDeckAmount = 0;
let bonusPaiGow = 0;
let bonusPaiGowAmount = 0;
let bonusBlackjackAmount = 0;
let bonusCrapsTableAmount = 0;

let bonusEligible = false;

let bonusDiceCount = 0;
let bonusDiceValue = 0;
let bonusDiceAmount = 0;

let voyageSummary = '';
let voyageSummaryValue = '';

let totalGold = 0;
let totalDoubloonCount = 0;
let totalDoubloonGold = 0;
let totalPlunder = 0;
let totalJobPay = 0;
let totalBonus = 0;
let totalFactionVault = 0;

let crewName1 = '';
let crewName1Value = '';
let crewRank1 = '';
let crewRank1Value = '';
let crewName2 = '';
let crewName2Value = '';
let crewRank2 = '';
let crewRank2Value = '';
let crewName3 = '';
let crewName3Value = '';
let crewRank3 = '';
let crewRank3Value = '';
let crewName4 = '';
let crewName4Value = '';
let crewRank4 = '';
let crewRank4Value = '';
let crewStowawayPresent = false;
let crewRankLevel = 0;


let activity1 = '';
let activity1Value = ''
let activity1Qty = 0;
let activity1QtyValue = 0;
let activity2 = '';
let activity2Value = ''
let activity2Qty = 0;
let activity2QtyValue = 0;
let activity3 = '';
let activity3Value = ''
let activity3Qty = 0;
let activity3QtyValue = 0;
let activity4 = '';
let activity4Value = ''
let activity4Qty = 0;
let activity4QtyValue = 0;
let activity5 = '';
let activity5Value = ''
let activity5Qty = 0;
let activity5QtyValue = 0;
let activity6 = '';
let activity6Value = ''
let activity6Qty = 0;
let activity6QtyValue = 0;
let activity7 = '';
let activity7Value = ''
let activity7Qty = 0;
let activity7QtyValue = 0;
let activity8 = '';
let activity8Value = ''
let activity8Qty = 0;
let activity8QtyValue = 0;
let activity9 = '';
let activity9Value = ''
let activity9Qty = 0;
let activity9QtyValue = 0;
let activity10 = '';
let activity10Value = ''
let activity10Qty = 0;
let activity10QtyValue = 0;

let activityRows = 1;

let errorCount = 0;
let warning = false;

document.getElementById('select-faction-ao').onclick = function() {selectFactionAO()};
document.getElementById('select-faction-ac').onclick = function() {selectFactionAC()};
document.getElementById('select-faction-kw').onclick = function() {selectFactionKW()};
document.getElementById('select-faction-ns').onclick = function() {selectFactionNS()};
document.getElementById('select-faction-mg').onclick = function() {selectFactionMG()};
document.getElementById('select-faction-lf').onclick = function() {selectFactionLF()};

document.getElementById('select-ship-sloop').onclick = function() {selectShipSloop()};
document.getElementById('select-ship-brigantine').onclick = function() {selectShipBrigantine()};
document.getElementById('select-ship-galleon').onclick = function() {selectShipGalleon()};

document.getElementById('select-job-errand').onclick = function() {selectJobErrand()};
document.getElementById('select-job-heist').onclick = function() {selectJobHeist()};

document.getElementById('activity-add').onclick = function() {activityAdd()};
document.getElementById('activity-remove').onclick = function() {activityRemove()};

document.getElementById('generate-report').onclick = function() {generateReport()};

document.getElementById("voyage").addEventListener("load", checkBonusEligibility());

/* Select Faction */
function deselectFaction() {
    document.getElementById('total-vault').classList.remove('d-none');
    if (document.getElementById('select-faction-ao').classList.contains('btn-primary')) {
        document.getElementById('select-faction-ao').classList.remove('btn-primary');
        document.getElementById('select-faction-ao').classList.add('btn-secondary');
    }
    if (document.getElementById('select-faction-ac').classList.contains('btn-primary')) {
        document.getElementById('select-faction-ac').classList.remove('btn-primary');
        document.getElementById('select-faction-ac').classList.add('btn-secondary');
    }
    if (document.getElementById('select-faction-kw').classList.contains('btn-primary')) {
        document.getElementById('select-faction-kw').classList.remove('btn-primary');
        document.getElementById('select-faction-kw').classList.add('btn-secondary');
    }
    if (document.getElementById('select-faction-ns').classList.contains('btn-primary')) {
        document.getElementById('select-faction-ns').classList.remove('btn-primary');
        document.getElementById('select-faction-ns').classList.add('btn-secondary');
    }
    if (document.getElementById('select-faction-mg').classList.contains('btn-primary')) {
        document.getElementById('select-faction-mg').classList.remove('btn-primary');
        document.getElementById('select-faction-mg').classList.add('btn-secondary');
    }
    if (document.getElementById('select-faction-lf').classList.contains('btn-primary')) {
        document.getElementById('select-faction-lf').classList.remove('btn-primary');
        document.getElementById('select-faction-lf').classList.add('btn-secondary');
    }
}
function selectFactionAO() {
    deselectFaction();
    document.getElementById('select-faction-ao').classList.remove('btn-secondary');
    document.getElementById('select-faction-ao').classList.add('btn-primary');
    faction = 'AO';
    factionFleet = 'The Ancient Armada';
    factionIcon = "<img src='images/faction-ao.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":AO:";
    factionVault = 'Ancients Vault';
    factionVaultAccount = '@ancientsvault';
};
function selectFactionAC() {
    deselectFaction();
    document.getElementById('select-faction-ac').classList.remove('btn-secondary');
    document.getElementById('select-faction-ac').classList.add('btn-primary');
    faction = 'AC';
    factionFleet = "The Devil's Fleet";
    factionIcon = "<img src='images/faction-ac.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":ASH:";
    factionVault = 'Ashen Vault';
    factionVaultAccount = '@ashenvault';
};
function selectFactionKW() {
    deselectFaction();
    document.getElementById('select-faction-kw').classList.remove('btn-secondary');
    document.getElementById('select-faction-kw').classList.add('btn-primary');
    faction = 'KW';
    factionFleet = 'The Convoy of the Wilds';
    factionIcon = "<img src='images/faction-kw.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":KW:";
    factionVault = 'Kinship Vault';
    factionVaultAccount = '@kinshipvault';
};
function selectFactionNS() {
    deselectFaction();
    document.getElementById('select-faction-ns').classList.remove('btn-secondary');
    document.getElementById('select-faction-ns').classList.add('btn-primary');
    faction = 'NS';
    factionFleet = "The Norsemen's Storm Fleet";
    factionIcon = "<img src='images/faction-ns.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":Norseman:";
    factionVault = 'Norsemen Vault';
    factionVaultAccount = '@norsemenvault';
};
function selectFactionMG() {
    deselectFaction();
    document.getElementById('select-faction-mg').classList.remove('btn-secondary');
    document.getElementById('select-faction-mg').classList.add('btn-primary');
    faction = 'MG';
    factionIcon = "<img src='images/faction-mg.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":marauders:";
    factionFleet = "The Marauder's Legion";
    factionVault = 'Marauders Vault';
    factionVaultAccount = '@maraudersvault';
};
function selectFactionLF() {
    deselectFaction();
    document.getElementById('select-faction-lf').classList.remove('btn-secondary');
    document.getElementById('select-faction-lf').classList.add('btn-primary');
    faction = 'LF';
    factionIcon = "<img src='images/cabal.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":cabal:";
    factionFleet = "The Lord of the Fleets";
    factionVault = 'Crew Cut';
};

/* Select Ship Size */
function deselectShip() {
    if (document.getElementById('select-ship-sloop').classList.contains('btn-primary')) {
        document.getElementById('select-ship-sloop').classList.remove('btn-primary');
        document.getElementById('select-ship-sloop').classList.add('btn-secondary');
    }
    if (document.getElementById('select-ship-brigantine').classList.contains('btn-primary')) {
        document.getElementById('select-ship-brigantine').classList.remove('btn-primary');
        document.getElementById('select-ship-brigantine').classList.add('btn-secondary');
    }
    if (document.getElementById('select-ship-galleon').classList.contains('btn-primary')) {
        document.getElementById('select-ship-galleon').classList.remove('btn-primary');
        document.getElementById('select-ship-galleon').classList.add('btn-secondary');
    }
}
function selectShipSloop() {
    deselectShip();
    document.getElementById('select-ship-sloop').classList.remove('btn-secondary');
    document.getElementById('select-ship-sloop').classList.add('btn-primary');
    shipType = 2;
    shipTypeEmoji = ':shipSloop1:';
    document.getElementById('crew-3-name').classList.add('d-none');
    document.getElementById('crew-3-rank').classList.add('d-none');
    document.getElementById('crew-4-name').classList.add('d-none');
    document.getElementById('crew-4-rank').classList.add('d-none');
    selectJobErrand()
    checkBonusEligibility()
};
function selectShipBrigantine() {
    deselectShip();
    document.getElementById('select-ship-brigantine').classList.remove('btn-secondary');
    document.getElementById('select-ship-brigantine').classList.add('btn-primary');
    document.getElementById('crew-3-name').classList.remove('d-none');
    document.getElementById('crew-3-rank').classList.remove('d-none');
    document.getElementById('crew-4-name').classList.add('d-none');
    document.getElementById('crew-4-rank').classList.add('d-none');
    shipType = 3;
    shipTypeEmoji = ':shipBrigantine1:';
    checkBonusEligibility()
};
function selectShipGalleon() {
    deselectShip();
    document.getElementById('select-ship-galleon').classList.remove('btn-secondary');
    document.getElementById('select-ship-galleon').classList.add('btn-primary');
    document.getElementById('crew-3-name').classList.remove('d-none');
    document.getElementById('crew-3-rank').classList.remove('d-none');
    document.getElementById('crew-4-name').classList.remove('d-none');
    document.getElementById('crew-4-rank').classList.remove('d-none');
    shipType = 4;
    shipTypeEmoji = ':emoji_100:';
    checkBonusEligibility()
};

/* Select Job */
function deselectJob() {
    if (document.getElementById('select-job-errand').classList.contains('btn-primary')) {
        document.getElementById('select-job-errand').classList.remove('btn-primary');
        document.getElementById('select-job-errand').classList.add('btn-secondary');
    }
    if (document.getElementById('select-job-heist').classList.contains('btn-primary')) {
        document.getElementById('select-job-heist').classList.remove('btn-primary');
        document.getElementById('select-job-heist').classList.add('btn-secondary');
    }
}
function selectJobErrand() {
    deselectJob();
    document.getElementById('select-job-errand').classList.remove('btn-secondary');
    document.getElementById('select-job-errand').classList.add('btn-primary');
    jobType = 'Errand';
    jobRate = 0.05;
    checkBonusEligibility();
};
function selectJobHeist() {
    if (shipType > 2) {
        deselectJob();
        document.getElementById('select-job-heist').classList.remove('btn-secondary');
        document.getElementById('select-job-heist').classList.add('btn-primary');
        jobType = 'Heist';
        jobRate = 0.08;
        checkBonusEligibility();
    }
};

/* Add or remove activity rows */
function activityAdd() {
    activityRows++;
    document.getElementById('activity-'+ activityRows).classList.remove('d-none');
};

function activityRemove() {
    document.getElementById('activity-'+ activityRows).classList.add('d-none');
    activityRows--;
};

function checkActivityRow(x) {
    if (activityRows > (x - 1)) {


        document.getElementById('report-activity-' + x).classList.remove('d-none');
        document.getElementById('report-activity-' + x + '-qty').classList.remove('d-none');
    }
    else {
        document.getElementById('report-activity-' + x).classList.add('d-none');
        document.getElementById('report-activity-' + x + '-qty').classList.add('d-none');
    }
};

function checkActivityLog() {
    checkActivityRow(1);
    checkActivityRow(2);
    checkActivityRow(3);
    checkActivityRow(4);
    checkActivityRow(5);
    checkActivityRow(6);
    checkActivityRow(7);
    checkActivityRow(8);
    checkActivityRow(9);
    checkActivityRow(10);
    // row 1
    activity1 = document.getElementById('activity-1-type');
    activity1Qty = document.getElementById('activity-1-qty');
    activity1Value = activity1.value;
    activity1QtyValue = activity1Qty.value;
    document.getElementById('report-activity-1-type').innerHTML = activity1Value;
    document.getElementById('report-activity-1-qty').innerHTML = activity1QtyValue;
    // row 2
    activity2 = document.getElementById('activity-2-type');
    activity2Qty = document.getElementById('activity-2-qty');
    activity2Value = activity2.value;
    activity2QtyValue = activity2Qty.value;
    document.getElementById('report-activity-2-type').innerHTML = activity2Value;
    document.getElementById('report-activity-2-qty').innerHTML = activity2QtyValue;
    // row 3
    activity3 = document.getElementById('activity-3-type');
    activity3Qty = document.getElementById('activity-3-qty');
    activity3Value = activity3.value;
    activity3QtyValue = activity3Qty.value;
    document.getElementById('report-activity-3-type').innerHTML = activity3Value;
    document.getElementById('report-activity-3-qty').innerHTML = activity3QtyValue;
    // row 4
    activity4 = document.getElementById('activity-4-type');
    activity4Qty = document.getElementById('activity-4-qty');
    activity4Value = activity4.value;
    activity4QtyValue = activity4Qty.value;
    document.getElementById('report-activity-4-type').innerHTML = activity4Value;
    document.getElementById('report-activity-4-qty').innerHTML = activity4QtyValue;
    // row 5
    activity5 = document.getElementById('activity-5-type');
    activity5Qty = document.getElementById('activity-5-qty');
    activity5Value = activity5.value;
    activity5QtyValue = activity5Qty.value;
    document.getElementById('report-activity-5-type').innerHTML = activity5Value;
    document.getElementById('report-activity-5-qty').innerHTML = activity5QtyValue;
    // row 6
    activity6 = document.getElementById('activity-6-type');
    activity6Qty = document.getElementById('activity-6-qty');
    activity6Value = activity6.value;
    activity6QtyValue = activity6Qty.value;
    document.getElementById('report-activity-6-type').innerHTML = activity6Value;
    document.getElementById('report-activity-6-qty').innerHTML = activity6QtyValue;
    // row 7
    activity7 = document.getElementById('activity-7-type');
    activity7Qty = document.getElementById('activity-7-qty');
    activity7Value = activity7.value;
    activity7QtyValue = activity7Qty.value;
    document.getElementById('report-activity-7-type').innerHTML = activity7Value;
    document.getElementById('report-activity-7-qty').innerHTML = activity7QtyValue;
    // row 8
    activity8 = document.getElementById('activity-8-type');
    activity8Qty = document.getElementById('activity-8-qty');
    activity8Value = activity8.value;
    activity8QtyValue = activity8Qty.value;
    document.getElementById('report-activity-8-type').innerHTML = activity8Value;
    document.getElementById('report-activity-8-qty').innerHTML = activity8QtyValue;
    // row 9
    activity9 = document.getElementById('activity-9-type');
    activity9Qty = document.getElementById('activity-9-qty');
    activity9Value = activity9.value;
    activity9QtyValue = activity9Qty.value;
    document.getElementById('report-activity-9-type').innerHTML = activity9Value;
    document.getElementById('report-activity-9-qty').innerHTML = activity9QtyValue;
    // row 10
    activity10 = document.getElementById('activity-10-type');
    activity10Qty = document.getElementById('activity-10-qty');
    activity10Value = activity10.value;
    activity10QtyValue = activity10Qty.value;
    document.getElementById('report-activity-10-type').innerHTML = activity10Value;
    document.getElementById('report-activity-10-qty').innerHTML = activity10QtyValue;
};

/* Check Bonus Eligibility */
function checkBonusEligibility() {
    document.getElementById('bonus-list-straight-ship').classList.add('d-none');
    document.getElementById('bonus-list-full-house').classList.add('d-none');
    document.getElementById('bonus-list-royal-flush').classList.add('d-none');
    document.getElementById('bonus-list-united-deck').classList.add('d-none');
    document.getElementById('bonus-ship-size').classList.add('d-none');
    document.getElementById('bonus-ship-size-sloop').classList.add('d-none');
    document.getElementById('bonus-specialty-rank').classList.add('d-none');
    if (shipType <=2) {
        bonusEligible = false;
        document.getElementById('bonus-ship-size').classList.remove('d-none');
        document.getElementById('bonus-ship-size-sloop').classList.remove('d-none');
    }
    if (shipType >= 3) {
        document.getElementById('bonus-list-united-deck').classList.remove('d-none');
        bonusEligible = true;
        document.getElementById('bonus-ship-size').classList.remove('d-none');
    }
    if (shipType == 4) {
        document.getElementById('bonus-list-straight-ship').classList.remove('d-none');
        document.getElementById('bonus-list-full-house').classList.remove('d-none');
        document.getElementById('bonus-list-royal-flush').classList.remove('d-none');
        bonusEligible = true;
        document.getElementById('bonus-ship-size').classList.add('d-none');
        document.getElementById('bonus-specialty-rank').classList.remove('d-none');
    }
    // other: show or hide table
    if (bonusEligible == true) {
        document.getElementById('bonus-list-table').classList.remove('d-none');
    }
    else {
        document.getElementById('bonus-list-table').classList.add('d-none');
    }
};

/* Determine Bonuses */
function checkBonusStraightShip() {
    bonusStraightShip = document.getElementById("bonus-straight-ship");
    if (bonusStraightShip.checked == true) {
        if (shipType == 4) {
            bonusStraightShipAmount = 1000;
            document.getElementById('total-bonus-straight-ship').classList.remove('d-none');
            document.getElementById('report-bonus-straight-ship').classList.remove('d-none');
        }
        else {
            bonusStraightShipAmount = 0;
            document.getElementById('total-bonus-straight-ship').classList.add('d-none');
            document.getElementById('report-bonus-straight-ship').classList.add('d-none');
        }
    }
};
function checkBonusFullHouse() {
    bonusFullHouse = document.getElementById("bonus-full-house");
    if (bonusFullHouse.checked == true) {
        if (shipType == 4) {
            bonusFullHouseAmount = 2000;
            document.getElementById('total-bonus-full-house').classList.remove('d-none');
            document.getElementById('report-bonus-full-house').classList.remove('d-none');
        }
        else {
            bonusFullHouseAmount = 0;
            document.getElementById('total-bonus-full-house').classList.add('d-none');
            document.getElementById('report-bonus-full-house').classList.add('d-none');
        }
    }
};
function checkBonusRoyalFlush() {
    bonusRoyalFlush = document.getElementById("bonus-royal-flush");
    if (bonusRoyalFlush.checked == true && shipType == 4) {
        bonusRoyalFlushAmount = 2500;
        document.getElementById('total-bonus-royal-flush').classList.remove('d-none');
        document.getElementById('report-bonus-royal-flush').classList.remove('d-none');
        // Disable Straight Ship bonus
        if (bonusStraightShipAmount > 0) {
            bonusStraightShipAmount = 0;
            document.getElementById('total-bonus-straight-ship').classList.add('d-none');
            document.getElementById('report-bonus-straight-ship').classList.add('d-none');    
        }
        else {
            bonusRoyalFlushAmount = 0;
            document.getElementById('total-bonus-royal-flush').classList.add('d-none');
            document.getElementById('report-bonus-royal-flush').classList.add('d-none');
        }
    }
};
function checkBonusUnitedDeck() {
    bonusUnitedDeck = document.getElementById("bonus-united-deck");
    if (bonusUnitedDeck.checked == true) {
        if (shipType >= 3) {
            bonusUnitedDeckAmount = 2500;
            document.getElementById('total-bonus-united-deck').classList.remove('d-none');
            document.getElementById('report-bonus-united-deck').classList.remove('d-none');
        }
        else {
            bonusUnitedDeckAmount = 0;
            document.getElementById('total-bonus-united-deck').classList.add('d-none');
            document.getElementById('report-bonus-united-deck').classList.add('d-none');
        }
    }
};
// automatic bonuses based on crew rank
function checkBonusDice() {
    if (bonusDiceCount > 0) {
        if (jobType == 'Errand') { 
            bonusDiceValue = 1000;
        }
        else if (jobType == 'Heist') {
            bonusDiceValue = 500;
        }
        bonusDiceAmount = bonusDiceCount * bonusDiceValue;
        document.getElementById('total-bonus-dice-count').innerHTML = bonusDiceCount;
        document.getElementById('total-bonus-dice-amount').innerHTML = printNumber(bonusDiceAmount);
        document.getElementById('total-bonus-dice').classList.remove('d-none');
        document.getElementById('report-bonus-dice-count').innerHTML = bonusDiceCount;
        document.getElementById('report-bonus-dice-amount').innerHTML = printNumber(bonusDiceAmount);
        document.getElementById('report-bonus-dice').classList.remove('d-none');
    }
    else {
        bonusDiceAmount = 0;
        document.getElementById('total-bonus-dice').classList.add('d-none');
        document.getElementById('report-bonus-dice').classList.add('d-none');
    }
};
function checkBonusPaiGow() {
    if (shipType >= 3 && crewRankLevel < 8) {
        bonusPaiGowAmount = 3000;
        document.getElementById('total-bonus-pai-gow').classList.remove('d-none');
        document.getElementById('report-bonus-pai-gow').classList.remove('d-none');

    }
    else {
        bonusPaiGowAmount = 0;
        document.getElementById('total-bonus-pai-gow').classList.add('d-none');
        document.getElementById('report-bonus-pai-gow').classList.add('d-none');
    }
};
// automatic bonuses based on plunder total
function checkBonusBlackjack() {
    if (totalGold >= 170000) {
        if (totalGold <= 210000) {
            bonusBlackjackAmount = 3000;
            document.getElementById('total-bonus-blackjack').classList.remove('d-none');
            document.getElementById('report-bonus-blackjack').classList.remove('d-none');
        }
        else {
            bonusBlackjackAmount = 0;
            document.getElementById('total-bonus-blackjack').classList.add('d-none');
            document.getElementById('report-bonus-blackjack').classList.add('d-none');
        }
    }
};
function checkBonusCrapsTable() {
    if (totalGold >= 620000) {
        bonusCrapsTableAmount = 5000;
        document.getElementById('total-bonus-craps-table').classList.remove('d-none');
        document.getElementById('report-bonus-craps-table').classList.remove('d-none');
    }
    else {
        bonusCrapsTableAmount = 0;
        document.getElementById('total-bonus-craps-table').classList.add('d-none');
        document.getElementById('report-bonus-craps-table').classList.add('d-none');
    }
};
function checkBonusTotal() {
    totalBonus = bonusStraightShipAmount + bonusFullHouseAmount + bonusRoyalFlushAmount + bonusUnitedDeckAmount + bonusPaiGowAmount + bonusBlackjackAmount + bonusCrapsTableAmount + bonusDiceAmount;
}

/* Determine Crew Cut */
// check crew for minimum rank
function checkCrewRankVerbose(rank) {
    if (rank == '1') { return 'Stowaway';}
    if (rank == '2') { return 'Recruit';}
    if (rank == '3') { return 'Rum Runner';}
    if (rank == '4') { return 'Crate Smuggler';}
    if (rank == '5') { return 'Smuggler';}
    if (rank == '6') { return 'Flintlock Dealer';}
    if (rank == '7') { return 'Doubloon Shark';}
    if (rank == '8') { return 'Boatswain';}
    if (rank == '9') { return 'Powder Monkey';}
    if (rank == '10') { return 'Quartermaster';}
    if (rank == '11') { return 'First Mate';}
    if (rank == '12') { return 'Cabal Captain';}
    if (rank == '13') { return 'Cabal Boss';}
    if (rank == '14') { return 'Cabal Leader';}
};
function checkCrewRankAbbr(rank) {
    if (rank == '1') { return 'Stowaway';}
    if (rank == '2') { return 'R';}
    if (rank == '3') { return 'RR';}
    if (rank == '4') { return 'CS';}
    if (rank == '5') { return 'S';}
    if (rank == '6') { return 'FD';}
    if (rank == '7') { return 'DS';}
    if (rank == '8') { return 'BS';}
    if (rank == '9') { return 'PM';}
    if (rank == '10') { return 'QM';}
    if (rank == '11') { return '1M';}
    if (rank == '12') { return 'CC';}
    if (rank == '13') { return 'CB';}
    if (rank == '14') { return 'CL';}
};
// check crew for rate
function checkCrewRate(rank) {
    if (rank == '1') { return 0.00;}
    if (rank == '2') { return 0.05;}
    if (rank == '3') { return 0.10;}
    if (rank == '4') { return 0.15;}
    if (rank == '5') { return 0.20;}
    if (rank == '6') { return 0.25;}
    if (rank == '7') { return 0.30;}
    if (rank == '8') { return 0.35;}
    if (rank == '9') { return 0.40;}
    if (rank == '10') { return 0.45;}
    if (rank == '11') { return 0.45;}
    if (rank == '12') { return 0.50;}
    if (rank == '13') { return 0.55;}
    if (rank == '14') { return 0.60;}
};
function checkCrewRanks() {
    // reset
    crewRankLevel = 0;
    bonusDiceCount = 0;
    crewStowawayPresent = false;
    // crew 1
    crewRank1 = document.getElementById('crewmate-1-rank');
    if (crewRankLevel < crewRank1.value) {
        crewRankLevel = crewRank1.value;
    }
    if (crewRank1.value < 3) {
        bonusDiceCount++;
    }
    if (crewRank1.value == '1') {
        crewStowawayPresent = true;
    }
    // crew 2
    crewRank2 = document.getElementById('crewmate-2-rank');
    if (crewRankLevel < crewRank2.value) {
        crewRankLevel = crewRank2.value;
    }
    if (crewRank2.value < 3) {
        bonusDiceCount++;
    }
    if (crewRank2.value == '1') {
        crewStowawayPresent = true;
    }
    // crew 3
    if (shipType >= 3) {
        crewRank3 = document.getElementById('crewmate-3-rank');
        if (crewRankLevel < crewRank3.value) {
            crewRankLevel = crewRank3.value;
        }
        if (crewRank3.value < 3) {
            bonusDiceCount++;
        }
        if (crewRank3.value == '1') {
            crewStowawayPresent = true;
        }
    }
    // crew 4
    if (shipType == 4) {
        crewRank4 = document.getElementById('crewmate-4-rank');
        if (crewRankLevel < crewRank4.value) {
            crewRankLevel = crewRank4.value;
        }
        if (crewRank4.value < 3) {
            bonusDiceCount++;
        }
        if (crewRank4.value == '1') {
            crewStowawayPresent = true;
        }
    }
};
function checkCrewCut() {
    //crew 1
    crewName1 = document.getElementById('crewmate-1-name');
    crewName1Value = crewName1.value;
    crewRank1 = document.getElementById('crewmate-1-rank');
    crewRank1Value = crewRank1.value;
    document.getElementById('total-crew-name-1').innerHTML = crewName1Value;
    document.getElementById('total-crew-rank-1').innerHTML = checkCrewRankVerbose(crewRank1Value);
    document.getElementById('total-crew-cut-1').innerHTML = Math.round(checkCrewRate(crewRank1Value) * 100);
    document.getElementById('total-crew-amount-1').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank1Value)));
    document.getElementById('report-crew-name-1').innerHTML = crewName1Value;
    document.getElementById('report-crew-rank-1').innerHTML = checkCrewRankAbbr(crewRank1.value);
    document.getElementById('report-crew-1-amount').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank1Value)));
    //crew 1
    crewName2 = document.getElementById('crewmate-2-name');
    crewName2Value = crewName2.value;
    crewRank2 = document.getElementById('crewmate-2-rank');
    crewRank2Value = crewRank2.value;
    document.getElementById('total-crew-name-2').innerHTML = crewName2Value;
    document.getElementById('total-crew-rank-2').innerHTML = checkCrewRankVerbose(crewRank2Value);
    document.getElementById('total-crew-cut-2').innerHTML = Math.round(checkCrewRate(crewRank2Value) * 100);
    document.getElementById('total-crew-amount-2').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank2Value)));
    document.getElementById('report-crew-name-2').innerHTML = crewName2Value;
    document.getElementById('report-crew-rank-2').innerHTML = checkCrewRankAbbr(crewRank2.value);
    document.getElementById('report-crew-2-amount').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank2Value)));
    //crew 3
    if (shipType >= 3) {//crew 1
        crewName3 = document.getElementById('crewmate-3-name');
        crewName3Value = crewName3.value;
        crewRank3 = document.getElementById('crewmate-3-rank');
        crewRank3Value = crewRank3.value;
        document.getElementById('total-crew-name-3').innerHTML = crewName3Value;
        document.getElementById('total-crew-rank-3').innerHTML = checkCrewRankVerbose(crewRank3Value);
        document.getElementById('total-crew-cut-3').innerHTML = Math.round(checkCrewRate(crewRank3Value) * 100);
        document.getElementById('total-crew-amount-3').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank3Value)));
        document.getElementById('report-crew-name-3').innerHTML = crewName3Value;
        document.getElementById('report-crew-rank-3').innerHTML = checkCrewRankAbbr(crewRank3.value);
        document.getElementById('report-crew-3-amount').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank3Value)));
        document.getElementById('total-crew-3').classList.remove('d-none');
        document.getElementById('report-crew-3').classList.remove('d-none');
    }
    else {
        document.getElementById('total-crew-3').classList.add('d-none');
        document.getElementById('report-crew-3').classList.add('d-none');
    }
    //crew 4
    if (shipType == 4) {//crew 1
        crewName4 = document.getElementById('crewmate-4-name');
        crewName4Value = crewName4.value;
        crewRank4 = document.getElementById('crewmate-4-rank');
        crewRank4Value = crewRank4.value;
        document.getElementById('total-crew-name-4').innerHTML = crewName4Value;
        document.getElementById('total-crew-rank-4').innerHTML = checkCrewRankVerbose(crewRank4Value);
        document.getElementById('total-crew-cut-4').innerHTML = Math.round(checkCrewRate(crewRank4Value) * 100);
        document.getElementById('total-crew-amount-4').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank4Value)));
        document.getElementById('report-crew-name-4').innerHTML = crewName4Value;
        document.getElementById('report-crew-rank-4').innerHTML = checkCrewRankAbbr(crewRank4.value);
        document.getElementById('report-crew-4-amount').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank4Value)));
        document.getElementById('total-crew-4').classList.remove('d-none');
        document.getElementById('report-crew-4').classList.remove('d-none');
    }
    else {
        document.getElementById('total-crew-4').classList.add('d-none');
        document.getElementById('report-crew-4').classList.add('d-none');
    }
};

/* Error check */
function checkReportErrors() {
    /* reset */
    errorCount = 0;
    /* Check voyage number */
    if (voyageNumberValue == '') { 
        document.getElementById('warning-voyage-number').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-voyage-number').classList.add('d-none');
    }
    /* Check faction */
    if (faction == '') { 
        document.getElementById('warning-faction').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-faction').classList.add('d-none');
    }
    /* Check ship name */
    if (shipNameValue == '') { 
        document.getElementById('warning-ship-name').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-ship-name').classList.add('d-none');
    }
    /* Check ship type */
    if (shipType == '0') { 
        document.getElementById('warning-ship-type').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-ship-type').classList.add('d-none');
    }
    /* Check job type */
    if (jobRate == '0') { 
        document.getElementById('warning-job-type').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-job-type').classList.add('d-none');
    }
    /* Check gold */
    if (goldStartValue === '' || goldEndValue === '') { 
        document.getElementById('warning-gold-missing').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-gold-missing').classList.add('d-none');
    }
    if (totalGold < 0) { 
        document.getElementById('warning-gold-negative').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-gold-negative').classList.add('d-none');
    }
    /* Check doubloons */
    if (doubloonStartValue === '' || doubloonEndValue === '') { 
        document.getElementById('warning-doubloon-missing').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-doubloon-missing').classList.add('d-none');
    }
    if (totalDoubloonCount < 0) { 
        document.getElementById('warning-doubloon-negative').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-doubloon-negative').classList.add('d-none');
    }
    /* Check crew ranks vs job types */
    if ((jobType == 'Errand' && crewRankLevel < 5) || (jobType == 'Heist' && crewRankLevel < 8)) {
        document.getElementById('warning-rank').classList.remove('d-none');
        errorCount++;
    }
    else {
        document.getElementById('warning-rank').classList.add('d-none');
    }
    /* Check crew ranks vs job types */
    if (crewStowawayPresent == true) {
        document.getElementById('warning-stowaway').classList.remove('d-none');
    }
    else {
        document.getElementById('warning-stowaway').classList.add('d-none');
    }
    /* Check summary */
    if (voyageSummaryValue == '') { 
        document.getElementById('warning-summary').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('warning-summary').classList.add('d-none');
    }
    /* Show errors or success */
    document.getElementById('report-rerun').classList.remove('d-none');
    if (errorCount > 0) {
        document.getElementById('report-error-count').innerHTML = errorCount;
        document.getElementById('errors-true').classList.remove('d-none');
        document.getElementById('errors-false').classList.add('d-none');
        document.getElementById('report-container').classList.add('d-none');
    }
    else {
        document.getElementById('errors-true').classList.add('d-none');
        document.getElementById('errors-false').classList.remove('d-none');
        document.getElementById('report-container').classList.remove('d-none');
    }
    // Issue warnings
    warning = false;
    if (faction == 'LF') {
        document.getElementById('warning-lf').classList.remove('d-none');
        warning = true;
    }
    else {
        document.getElementById('warning-lf').classList.add('d-none');
    }
};

/* Generate Report */
function printNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function generateReport() {
    document.getElementById('section-report').scrollIntoView();
    // Populate Text
    voyageNumber = document.getElementById('voyage-number');
    voyageNumberValue = voyageNumber.value;
    voyageSummary = document.getElementById('voyage-summary');
    voyageSummaryValue = voyageSummary.value;
    shipName = document.getElementById('ship-name');
    shipNameValue = shipName.value;
    document.getElementById('report-faction-name').innerHTML = factionFleet;
    document.getElementById('report-voyage-number').innerHTML = voyageNumberValue;
    document.getElementById('report-ship-type').innerHTML = shipTypeEmoji;
    document.getElementById('report-ship-name').innerHTML = shipNameValue;
    document.getElementById('report-job-type').innerHTML = jobType;
    document.getElementById('report-voyage-summary').innerHTML = voyageSummaryValue;
    checkActivityLog();
    // Populate Gold
    goldStart = document.getElementById('gold-start');    
    goldStartValue = goldStart.value;
    goldEnd = document.getElementById('gold-end');    
    goldEndValue = goldEnd.value;
    totalGold = goldEndValue - goldStartValue;
    document.getElementById('total-gold-value').innerHTML = printNumber(totalGold);
    document.getElementById('report-total-gold-value').innerHTML = printNumber(totalGold);
    // Populate Doubloons
    doubloonStart = document.getElementById('doubloon-start');    
    doubloonStartValue = doubloonStart.value;
    doubloonEnd = document.getElementById('doubloon-end');
    doubloonEndValue = doubloonEnd.value;
    totalDoubloonCount = (doubloonEndValue - doubloonStartValue);
    totalDoubloonGold = totalDoubloonCount * 25;
    document.getElementById('total-doubloon-count').innerHTML = printNumber(totalDoubloonCount);
    document.getElementById('total-doubloon-gold').innerHTML = printNumber(totalDoubloonGold);
    document.getElementById('report-doubloon-count').innerHTML = printNumber(totalDoubloonCount);
    document.getElementById('report-doubloon-gold').innerHTML = printNumber(totalDoubloonGold);
    // Populate Total
    totalPlunder = totalGold + totalDoubloonGold;
    totalJobPay = Math.round(totalPlunder * jobRate);
    document.getElementById('total-plunder').innerHTML = printNumber(totalPlunder);
    document.getElementById('report-plunder').innerHTML = printNumber(totalPlunder);
    document.getElementById('total-job-type').innerHTML = printNumber(jobType);
    document.getElementById('total-job-rate').innerHTML = '(' + jobRate * 100 + '%)';
    document.getElementById('total-job-pay').innerHTML = printNumber(totalJobPay);
    checkCrewRanks();
    checkBonusDice();
    checkBonusPaiGow();
    checkBonusStraightShip();
    checkBonusFullHouse();
    checkBonusRoyalFlush();
    checkBonusUnitedDeck();
    checkBonusBlackjack();
    checkBonusCrapsTable();
    checkBonusTotal();
    // Populate Faction Vault Cut
    totalFactionVault = Math.round(totalJobPay) + totalBonus;
    document.getElementById('faction-icon').innerHTML = factionIcon;
    document.getElementById('total-faction').innerHTML = factionVault;
    document.getElementById('total-faction-vault').innerHTML = printNumber(totalFactionVault);
    document.getElementById('report-faction-icon').innerHTML = factionIconReport;
    document.getElementById('report-faction-vault').innerHTML = factionVaultAccount;
    document.getElementById('report-faction-vault-amount').innerHTML = printNumber(totalFactionVault);
    // Populate Crew Cuts
    checkCrewCut();
    // Check for Errors
    checkReportErrors();
};
