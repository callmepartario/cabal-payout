// User set variables
let voyageNumber = '—';
let faction = '—';
let factionFleet = '';
let factionVault = 'Crew Cut';
let factionVaultAccount = 'Crew Cut';
let shipType = 0;
let shipTypeEmoji = '—';
let shipName = '—';
let shipNameValue = '—';

let jobType = '—';
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
let bonusDice = 0;
let bonusDiceCrew = 0;
let bonusDiceCrewAmount = 0;
let bonusDiceValue = 0;
let bonusDiceAmount = 0;

let voyageSummary = '—';
let voyageSummaryValue = '—';

let totalGold = 0;
let totalDoubloonCount = 0;
let totalDoubloonGold = 0;
let totalPlunder = 0;
let totalBonus = 0;
let totalFactionVault = 0;

let rankStowaway = 0;

let rankRecruit = 0;
let rankRecruitRate = 0.05;
let rankRecruitAmount = 0;

let rankRumRunner = 0;
let rankRumRunnerRate = 0.10;
let rankRumRunnerAmount = 0;

let rankCrateSmuggler = 0;
let rankCrateSmugglerRate = 0.15;
let rankCrateSmugglerAmount = 0;

let rankSmuggler = 0;
let rankSmugglerRate = 0.20;
let rankSmugglerAmount = 0;

let rankFlintlockDealer = 0;
let rankFlintlockDealerRate = 0.25;
let rankFlintlockDealerAmount = 0;

let rankDoubloonShark = 0;
let rankDoubloonSharkRate = 0.30;
let rankDoubloonSharkAmount = 0;

let rankBoatswain = 0;
let rankBoatswainRate = 0.35;
let rankBoatswainAmount = 0;

let rankPowderMonkey = 0;
let rankPowderMonkeyRate = 0.40;
let rankPowderMonkeyAmount = 0;

let rankQuartermaster = 0;
let rankQuartermasterRate = 0.45;
let rankQuartermasterAmount = 0;

let rankFirstMate = 0;
let rankFirstMateRate = 0.45;
let rankFirstMateAmount = 0;

let rankCabalCaptain = 0;
let rankCabalCaptainRate = 0.50;
let rankCabalCaptainAmount = 0;

let rankCabalBoss = 0;
let rankCabalBossRate = 0.55;
let rankCabalBossAmount = 0;

let rankCabalLeader = 0;
let rankCabalLeaderRate = 0.60;
let rankCabalLeaderAmount = 0;

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

document.getElementById('generate-report').onclick = function() {generateReport()};
document.getElementById('copy-report').onclick = function() {copyReport()};

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
    factionVault = 'Ancients Vault';
    factionVaultAccount = '@ancientsvault';
};
function selectFactionAC() {
    deselectFaction();
    document.getElementById('select-faction-ac').classList.remove('btn-secondary');
    document.getElementById('select-faction-ac').classList.add('btn-primary');
    faction = 'AC';
    factionFleet = "The Devil's Fleet";
    factionVault = 'Ashen Vault';
    factionVaultAccount = '@ashenvault';
};
function selectFactionKW() {
    deselectFaction();
    document.getElementById('select-faction-kw').classList.remove('btn-secondary');
    document.getElementById('select-faction-kw').classList.add('btn-primary');
    faction = 'KW';
    factionFleet = 'The Convoy of the Wilds';
    factionVault = 'Kinship Vault';
    factionVaultAccount = '@kinshipvault';
};
function selectFactionNS() {
    deselectFaction();
    document.getElementById('select-faction-ns').classList.remove('btn-secondary');
    document.getElementById('select-faction-ns').classList.add('btn-primary');
    faction = 'NS';
    factionFleet = "The Norsemen's Storm Fleet";
    factionVault = 'Norsemen Vault';
    factionVaultAccount = '@norsemenvault';
};
function selectFactionMG() {
    deselectFaction();
    document.getElementById('select-faction-mg').classList.remove('btn-secondary');
    document.getElementById('select-faction-mg').classList.add('btn-primary');
    faction = 'MG';
    factionFleet = "The Marauder's Legion";
    factionVault = 'Marauders Vault';
    factionVaultAccount = '@maraudersvault';
};
function selectFactionLF() {
    deselectFaction();
    document.getElementById('select-faction-lf').classList.remove('btn-secondary');
    document.getElementById('select-faction-lf').classList.add('btn-primary');
    faction = 'LF';
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
    selectJobErrand()
    checkBonusEligibility()
};
function selectShipBrigantine() {
    deselectShip();
    document.getElementById('select-ship-brigantine').classList.remove('btn-secondary');
    document.getElementById('select-ship-brigantine').classList.add('btn-primary');
    shipType = 3;
    shipTypeEmoji = ':shipBrigantine1:';
    checkBonusEligibility()
};
function selectShipGalleon() {
    deselectShip();
    document.getElementById('select-ship-galleon').classList.remove('btn-secondary');
    document.getElementById('select-ship-galleon').classList.add('btn-primary');
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
    bonusDiceValue = 1000;
    document.getElementById('bonus-dice-value').innerHTML = bonusDiceValue;
    checkBonusEligibility();
    reportJobType();
};
function selectJobHeist() {
    if (shipType > 2) {
        deselectJob();
        document.getElementById('select-job-heist').classList.remove('btn-secondary');
        document.getElementById('select-job-heist').classList.add('btn-primary');
        jobType = 'Heist';
        jobRate = 0.08;
        bonusDiceValue = 500;
        document.getElementById('bonus-dice-value').innerHTML = bonusDiceValue;
        checkBonusEligibility();
        reportJobType();
    }
};

/* Check Bonus Eligibility */
function checkBonusEligibility() {
    document.getElementById('bonus-list-straight-ship').classList.add('d-none');
    document.getElementById('bonus-list-full-house').classList.add('d-none');
    document.getElementById('bonus-list-royal-flush').classList.add('d-none');
    document.getElementById('bonus-list-united-deck').classList.add('d-none');
    document.getElementById('bonus-list-pai-gow').classList.add('d-none');
    if (shipType >= 3) {
        document.getElementById('bonus-list-united-deck').classList.remove('d-none');
        if (jobType == 'Errand') {
            document.getElementById('bonus-list-pai-gow').classList.remove('d-none');
            document.getElementById('total-bonus-pai-gow').classList.remove('d-none');
            document.getElementById('report-bonus-pai-gow').classList.remove('d-none');

        }
        else {
            document.getElementById('bonus-list-pai-gow').classList.add('d-none');
        }
    }
    if (shipType > 3) {
        document.getElementById('bonus-list-straight-ship').classList.remove('d-none');
        document.getElementById('bonus-list-full-house').classList.remove('d-none');
        document.getElementById('bonus-list-royal-flush').classList.remove('d-none');
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
    if (bonusStraightShip.checked == true) {
        if (shipType == 4) {
            bonusStraightShipAmount = 2000;
            document.getElementById('total-bonus-full-house').classList.remove('d-none');
            document.getElementById('report-bonus-full-house').classList.remove('d-none');
        }
        else {
            bonusStraightShipAmount = 0;
            document.getElementById('total-bonus-full-house').classList.add('d-none');
            document.getElementById('report-bonus-full-house').classList.add('d-none');
        }
    }
};
function checkBonusRoyalFlush() {
    bonusRoyalFlush = document.getElementById("bonus-royal-flush");
    if (bonusStraightShip.checked == true && shipType == 4) {
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
function checkBonusPaiGow() {
    bonusPaiGow = document.getElementById("bonus-pai-gow");
    if (bonusPaiGow.checked == true && shipType >= 3 && jobType == 'Errand') {
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
function checkBonusDice() {
    bonusDice = document.getElementById("bonus-dice");
    if (bonusDice.checked == true) {
        bonusDiceCrew = document.getElementById('bonus-dice-crew');
        bonusDiceCrewAmount = bonusDiceCrew.value;
        bonusDiceAmount = bonusDiceCrewAmount * bonusDiceValue;
        document.getElementById("total-bonus-dice-amount").innerHTML = bonusDiceAmount;
        document.getElementById("report-bonus-dice-amount").innerHTML = bonusDiceAmount;
        document.getElementById('total-bonus-dice').classList.remove('d-none');
        document.getElementById('report-bonus-dice').classList.remove('d-none');
    }
    else {
        bonusDiceAmount = 0;
        document.getElementById('total-bonus-dice').classList.add('d-none');
        document.getElementById('report-bonus-dice').classList.add('d-none');
    }
};
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
function checkCrewCut() {
    // Stowaway
    rankStowaway = document.getElementById("rank-stowaway");
    if (rankStowaway.checked == true) {
        document.getElementById('total-rank-stowaway').classList.remove('d-none');
        document.getElementById('report-rank-stowaway').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-stowaway').classList.add('d-none');
        document.getElementById('report-rank-stowaway').classList.add('d-none');
    }
    // Recruit
    rankRecruit = document.getElementById("rank-r");
    rankRecruitAmount = Math.round(totalFactionVault * rankRecruitRate);
    document.getElementById('total-rank-amount-r').innerHTML = rankRecruitAmount;
    document.getElementById('report-rank-amount-r').innerHTML = rankRecruitAmount;
    if (rankRecruit.checked == true) {
        document.getElementById('total-rank-r').classList.remove('d-none');
        document.getElementById('report-rank-r').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-r').classList.add('d-none');
        document.getElementById('report-rank-r').classList.add('d-none');
    }
    // Rum Runner
    rankRumRunner = document.getElementById("rank-rr");
    rankRumRunnerAmount = Math.round(totalFactionVault * rankRumRunnerRate);
    document.getElementById('total-rank-amount-rr').innerHTML = rankRumRunnerAmount;
    document.getElementById('report-rank-amount-rr').innerHTML = rankRumRunnerAmount;
    if (rankRumRunner.checked == true) {
        document.getElementById('total-rank-rr').classList.remove('d-none');
        document.getElementById('report-rank-rr').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-rr').classList.add('d-none');
        document.getElementById('report-rank-rr').classList.add('d-none');
    }
    // Crate Smuggler
    rankCrateSmuggler = document.getElementById("rank-cs");
    rankCrateSmugglerAmount = Math.round(totalFactionVault * rankCrateSmugglerRate);
    document.getElementById('total-rank-amount-cs').innerHTML = rankCrateSmugglerAmount;
    document.getElementById('report-rank-amount-cs').innerHTML = rankCrateSmugglerAmount;
    if (rankCrateSmuggler.checked == true) {
        document.getElementById('total-rank-cs').classList.remove('d-none');
        document.getElementById('report-rank-cs').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-cs').classList.add('d-none');
        document.getElementById('report-rank-cs').classList.add('d-none');
    }
    // Smuggler
    rankSmuggler = document.getElementById("rank-s");
    rankSmugglerAmount = Math.round(totalFactionVault * rankSmugglerRate);
    document.getElementById('total-rank-amount-s').innerHTML = rankSmugglerAmount;
    document.getElementById('report-rank-amount-s').innerHTML = rankSmugglerAmount;
    if (rankSmuggler.checked == true) {
        document.getElementById('total-rank-s').classList.remove('d-none');
        document.getElementById('report-rank-s').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-s').classList.add('d-none');
        document.getElementById('report-rank-s').classList.add('d-none');
    }
    // Flintlock Dealer
    rankFlintlockDealer = document.getElementById("rank-fd");
    rankFlintlockDealerAmount = Math.round(totalFactionVault * rankFlintlockDealerRate);
    document.getElementById('total-rank-amount-fd').innerHTML = rankFlintlockDealerAmount;
    document.getElementById('report-rank-amount-fd').innerHTML = rankFlintlockDealerAmount;
    if (rankFlintlockDealer.checked == true) {
        document.getElementById('total-rank-fd').classList.remove('d-none');
        document.getElementById('report-rank-fd').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-fd').classList.add('d-none');
        document.getElementById('report-rank-fd').classList.add('d-none');
    }
    // Doubloon Shark
    rankDoubloonShark = document.getElementById("rank-ds");
    rankDoubloonSharkAmount = Math.round(totalFactionVault * rankDoubloonSharkRate);
    document.getElementById('total-rank-amount-ds').innerHTML = rankDoubloonSharkAmount;
    document.getElementById('report-rank-amount-ds').innerHTML = rankDoubloonSharkAmount;
    if (rankDoubloonShark.checked == true) {
        document.getElementById('total-rank-ds').classList.remove('d-none');
        document.getElementById('report-rank-ds').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-ds').classList.add('d-none');
        document.getElementById('report-rank-ds').classList.add('d-none');
    }
    // Boatswain
    rankBoatswain = document.getElementById("rank-bs");
    rankBoatswainAmount = Math.round(totalFactionVault * rankBoatswainRate);
    document.getElementById('total-rank-amount-bs').innerHTML = rankBoatswainAmount;
    document.getElementById('report-rank-amount-bs').innerHTML = rankBoatswainAmount;
    if (rankBoatswain.checked == true) {
        document.getElementById('total-rank-bs').classList.remove('d-none');
        document.getElementById('report-rank-bs').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-bs').classList.add('d-none');
        document.getElementById('report-rank-bs').classList.add('d-none');
    }
    // Powder Monkey
    rankPowderMonkey = document.getElementById("rank-pm");
    rankPowderMonkeyAmount = Math.round(totalFactionVault * rankPowderMonkeyRate);
    document.getElementById('total-rank-amount-pm').innerHTML = rankPowderMonkeyAmount;
    document.getElementById('report-rank-amount-pm').innerHTML = rankPowderMonkeyAmount;
    if (rankPowderMonkey.checked == true) {
        document.getElementById('total-rank-pm').classList.remove('d-none');
        document.getElementById('report-rank-pm').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-pm').classList.add('d-none');
        document.getElementById('report-rank-pm').classList.add('d-none');
    }
    // Quartermaster
    rankQuartermaster = document.getElementById("rank-qm");
    rankQuartermasterAmount = Math.round(totalFactionVault * rankQuartermasterRate);
    document.getElementById('total-rank-amount-qm').innerHTML = rankQuartermasterAmount;
    document.getElementById('report-rank-amount-qm').innerHTML = rankQuartermasterAmount;
    if (rankQuartermaster.checked == true) {
        document.getElementById('total-rank-qm').classList.remove('d-none');
        document.getElementById('report-rank-qm').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-qm').classList.add('d-none');
        document.getElementById('report-rank-qm').classList.add('d-none');
    }
    // First Mate
    rankFirstMate = document.getElementById("rank-1m");
    rankFirstMateAmount = Math.round(totalFactionVault * rankFirstMateRate);
    document.getElementById('total-rank-amount-1m').innerHTML = rankFirstMateAmount;
    document.getElementById('report-rank-amount-1m').innerHTML = rankFirstMateAmount;
    if (rankFirstMate.checked == true) {
        document.getElementById('total-rank-1m').classList.remove('d-none');
        document.getElementById('report-rank-1m').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-1m').classList.add('d-none');
        document.getElementById('report-rank-1m').classList.add('d-none');
    }
    // Cabal Captain
    rankCabalCaptain = document.getElementById("rank-cc");
    rankCabalCaptainAmount = Math.round(totalFactionVault * rankCabalCaptainRate);
    document.getElementById('total-rank-amount-cc').innerHTML = rankCabalCaptainAmount;
    document.getElementById('report-rank-amount-cc').innerHTML = rankCabalCaptainAmount;
    if (rankCabalCaptain.checked == true) {
        document.getElementById('total-rank-cc').classList.remove('d-none');
        document.getElementById('report-rank-cc').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-cc').classList.add('d-none');
        document.getElementById('report-rank-cc').classList.add('d-none');
    }
    // Cabal Boss
    rankCabalBoss = document.getElementById("rank-cb");
    rankCabalBossAmount = Math.round(totalFactionVault * rankCabalBossRate);
    document.getElementById('total-rank-amount-cb').innerHTML = rankCabalBossAmount;
    document.getElementById('report-rank-amount-cb').innerHTML = rankCabalBossAmount;
    if (rankCabalBoss.checked == true) {
        document.getElementById('total-rank-cb').classList.remove('d-none');
        document.getElementById('report-rank-cb').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-cb').classList.add('d-none');
        document.getElementById('report-rank-cb').classList.add('d-none');
    }
    // Cabal Leader
    rankCabalLeader = document.getElementById("rank-cl");
    rankCabalLeaderAmount = Math.round(totalFactionVault * rankCabalLeaderRate);
    document.getElementById('total-rank-amount-cl').innerHTML = rankCabalLeaderAmount;
    document.getElementById('report-rank-amount-cl').innerHTML = rankCabalLeaderAmount;
    if (rankCabalLeader.checked == true) {
        document.getElementById('total-rank-cl').classList.remove('d-none');
        document.getElementById('report-rank-cl').classList.remove('d-none');
    }
    else {
        document.getElementById('total-rank-cl').classList.add('d-none');
        document.getElementById('report-rank-cl').classList.add('d-none');
    }
};

/* Generate Report */
function generateReport() {
    document.getElementById('report-container').classList.remove('d-none');
    document.getElementById('report-container').scrollIntoView();
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
    console.log('voyageNumberValue: ${voyageNumber}, voyageSummaryValue: ${voyageSummary}, shipNameValue: ${shipName}')
    // Populate Gold
    goldStart = document.getElementById('gold-start');    
    goldStartValue = goldStart.value;
    goldEnd = document.getElementById('gold-end');    
    goldEndValue = goldEnd.value;
    totalGold = goldEndValue - goldStartValue;
    document.getElementById('report-gold-start').innerHTML = goldStartValue;
    document.getElementById('report-gold-end').innerHTML = goldEndValue;
    document.getElementById('total-gold-value').innerHTML = totalGold;
    document.getElementById('report-gold-start').innerHTML = goldStartValue;
    document.getElementById('report-gold-end').innerHTML = goldEndValue;
    document.getElementById('report-total-gold-value').innerHTML = totalGold;
    console.log('goldStartValue: ${goldStart}, goldEndValue: ${goldEnd}');
    // Populate Doubloons
    doubloonStart = document.getElementById('doubloon-start');    
    doubloonStartValue = doubloonStart.value;
    doubloonEnd = document.getElementById('doubloon-end');
    doubloonEndValue = doubloonEnd.value;
    totalDoubloonCount = (doubloonEndValue - doubloonStartValue);
    totalDoubloonGold = totalDoubloonCount * 25;
    document.getElementById('report-doubloon-start').innerHTML = doubloonStartValue;
    document.getElementById('report-doubloon-end').innerHTML = doubloonEndValue;
    document.getElementById('total-doubloon-count').innerHTML = totalDoubloonCount;
    document.getElementById('total-doubloon-gold').innerHTML = totalDoubloonGold;
    document.getElementById('report-doubloon-count').innerHTML = totalDoubloonCount;
    document.getElementById('report-doubloon-gold').innerHTML = totalDoubloonGold;
    console.log('doubloonStartValue: ${doubloonStart}, doubloonEndValue: ${doubloonEnd}');
    // Populate Total
    totalPlunder = totalGold + totalDoubloonGold;
    document.getElementById('total-plunder').innerHTML = totalPlunder;
    document.getElementById('report-plunder').innerHTML = totalPlunder;
    checkBonusStraightShip();
    checkBonusFullHouse();
    checkBonusRoyalFlush();
    checkBonusUnitedDeck();
    checkBonusPaiGow();
    checkBonusDice();
    checkBonusBlackjack();
    checkBonusCrapsTable();
    checkBonusTotal();
    // Populate Faction Vault Cut
    totalFactionVault = Math.round(totalPlunder * jobRate) + totalBonus;
    document.getElementById('total-faction').innerHTML = factionVault;
    document.getElementById('total-faction-vault').innerHTML = totalFactionVault;
    document.getElementById('report-faction-vault').innerHTML = factionVaultAccount;
    document.getElementById('report-faction-vault-amount').innerHTML = totalFactionVault;
    // Populate Crew Cuts
    checkCrewCut();
};
