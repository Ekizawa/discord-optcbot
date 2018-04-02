//Copied from the optc-db.github.io database files. All credit goes to them.

var db5 = {

    2001: {//6+ PSY Law
        captain: "Boosts Slasher and Free Spirit character's ATK by 2.5x, by 3.5x after 3 consecutive PERFECTs, by 4x after 5 consecutive PERFECTs. Recover 1,000 HP at the end of each turn",
        specialName: "Sterben",
        sailor: {
            "base": "None",
            "level1": "When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300",
            "level2": "Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit"
        },
        sailorNotes: "#{beneficial}",
        special: "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 100x character's ATK in [PSY] damage to one enemy, reduces Special Cooldown of all characters by 1 turn",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 55" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base HP by 75" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 85" },
            { "description": "Acquire Sailor Ability 2: Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 95" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2002: {//Story Senor Pink
        captain: "Increases damage received by 1.2x. Reduces cooldown of all specials by 2 turns at the start of the fight and boosts ATK of all characters by 2.5x.",
        special: "Reduces Bind, Despair and Paralysis duration by 3 turns and deals several times character's ATK in Typeless damage to all enemies",
        specialNotes: "#{specialProportional : lower : ??? * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "The Man Standing Tall",
    },
    2003: {//Story Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2004: {//Story Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x. If you use \"Bullet Thread\" THIS DOFLAMINGO boosts ATK of Slasher characters by 2.75x instead for 3 turns",
        captainNotes: "Using Doflamingo's special will change his own captain boost to 2.75x. If both Doflamingo's specials are used, the total ATK boost will be 7.5625x",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2005: {//Story Sugar
        captain: "Boosts ATK of [PSY] characters by 2.25x, boosts HP of Slasher characters by 1.2x and boosts RCV of Free Spirit characters by 1.2x",
        special: "Deals 40x character's ATK in [PSY] damage to all enemies, boosts chances of getting [PSY] orbs for 3 turns",
        specialName: "Little Black Bears",
    },
    2006: {//V2 Shanks
        captain: "If your crew has 4 or more characters of the same Type, boosts ATK all characters by 3.5x, by 2.75x otherwise and boosts HP of all characters by 1.3x.",
        special: "Adds .9x to Chain multiplier for 1 turn. If your crew has 4 or more characters of the same Type, boosts ATK of the Dominant Type characters by 2.25x and changes all orbs, including [BLOCK] orbs, to Dominant Type orbs",
        sailor: "If your crew has 4 or more characters of the same Type, boosts base ATK of the Dominant Type by 125",
        specialName: "Closing Declaration",
    },
    2007: {//V2 Shanks
        captain: "If your crew has 4 or more characters of the same Type, boosts ATK all characters by 3.5x, by 2.75x otherwise and boosts HP of all characters by 1.3x.",
        special: "Adds .9x to Chain multiplier for 1 turn. If your crew has 4 or more characters of the same Type, boosts ATK of the Dominant Type characters by 2.25x and changes all orbs, including [BLOCK] orbs, to Dominant Type orbs",
        sailor: {
            "base": "If your crew has 4 or more characters of the same Type, boosts base ATK of the Dominant Type by 125",
            "level1": "Makes [PSY] orbs \"beneficial\" all characters",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Closing Declaration",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base HP by 105" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" all characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 60",
                    "Level 2: Boosts base ATK by 90",
                    "Level 3: Boosts base ATK by 120",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 5%",
                    "Level 5: Reduce damage taken from [INT] characters by 7%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2008: {//Kuma
        captain: "Boosts ATK of [STR] and [INT] characters by 1.2x",
        special: "Cuts the current HP of each enemy by 10%, reduces Special Cooldown of your top row by 2 turns and boosts the Color Affinity of [STR] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Proof of a Human Weapon",
        specialNotes: "Level 1-10: 1.5x affinity boost<br\>Level 11-20: 1.75x affinity boost<br\>Level 21+: 2x affinity boost",
    },
    2009: {//Kuma
        captain: "Boosts ATK of [STR] and [INT] characters by 1.5x and their HP by 1.2x",
        special: "Cuts the current HP of each enemy by 10%, reduces Special Cooldown of your top row by 2 turns and boosts the Color Affinity of [STR] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Proof of a Human Weapon",
        specialNotes: "Level 1-10: 1.5x affinity boost<br\>Level 11-20: 1.75x affinity boost<br\>Level 21+: 2x affinity boost",
    },
    2010: {//Monet
        captain: "Boosts ATK of Free Spirit characters by 1.2x",
        special: "Deals 50,000 fixed damage to one enemy and reduces Bind and enemy's Threshold Damage Reduction duration by 3 turns",
        specialName: "Fangs of Crushing Ice",
    },
    2011: {//Monet
        captain: "Boosts ATK of Free Spirit characters by 1.5x and their RCV by 1.2x",
        special: "Deals 50,000 fixed damage to one enemy and reduces Bind and enemy's Threshold Damage Reduction duration by 3 turns",
        specialName: "Fangs of Crushing Ice",
    },
    2012: {//Limited Bonney
        captain: "Boosts ATK of Free Spirit characters by 3.25x if they have a [RCV] orb, by 2x otherwise, boosts chances of getting [RCV] orbs and reduces RCV of all characters by 80%",
        special: [
            {
                "description": "Reduces Bind and Paralysis duration by 3 turns and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN and Blindness duration by 5 turns",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces Bind and Paralysis duration by 10 turns, recovers 50x character's RCV in HP, and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN, Silence, and Blindness duration by 5 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialnotes: "#{silence}",
        specialName: "A Small Dine and Dash",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    2013: {//Limited Bonney
        captain: "Boosts ATK of Free Spirit characters by 3.25x if they have a [RCV] orb, by 2.25x otherwise, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to Free Spirit characters and reduces RCV of all characters by 80%",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Reduces Bind and Paralysis duration by 3 turns and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN and Blindness duration by 5 turns",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces Bind and Paralysis duration by 10 turns, recovers 50x character's RCV in HP, and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN, Silence, and Blindness duration by 5 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialnotes: "#{silence}",
        specialName: "A Small Dine and Dash",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Makes [RCV] orbs \"beneficial\" for all? characters",
        },
        sailorNotes: "#{silence}<br>#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability: Makes [RCV] orbs \"beneficial\" for all? characters" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 25% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ],
    },
    2014: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.25x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 2.75x instead and boosts ATK of all other characters by 1.2x",
        special: "Deals 100x character's ATK in INT damage to one enemy and if there is only one enemy on the stage, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
    },
    2015: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.5x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Deals 100x character's ATK in INT damage to one enemy and if there is only one enemy on the stage, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter characters by 100",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 55" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability: Boosts base ATK of Fighter characters by 100" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    2016: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 20x Character's ATK in [PSY] damage to all enemies and changes [BLOCK] orbs into Matching orbs. If HP is above 50% at the time the special is activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive [Neo]",
    },
    2017: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2.25x and boosts HP of Striker and Slasher characters by 1.5x",
        special: "Deals 20x Character's ATK in [PSY] damage to all enemies and changes [BLOCK] orbs into Matching orbs. If HP is above 50% at the time the special is activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive [Neo]",
    },
    2018: {//FN Shanks
        captain: "Not Yet Translated",
        special: "Reduces Bind and Despair duration by 2 turns, if the captain is a Free Spirit Character changes [BLOCK] orbs into matching orbs",
        specialName: "Entrusting Treasure",
    },
    2019: {//FN Shanks
        captain: "Boosts ATK of Free Spirit characters by 2x and their HP by 1.2x at the start of the chain, by 2.6x after the 3rd Perfect in a row",
        special: "Reduces Bind and Despair duration by 2 turns. If your Captain is a Free Spirit character, changes [BLOCK] orbs into Matching orbs",
        specialName: "Entrusting Treasure",
    },
    2020: {//Makino
        captain: "Not Yet Translated",
        special: "Changes the orbs in the top row into [INT] orbs, changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [PSY] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Taste of \"Treasure Payment\"",
    },
    2021: {//Makino
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x if they have a matching orb, by 1.75x otherwise and their HP by 1.2x",
        special: "Changes the orbs in the top row into [INT] orbs, changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [PSY] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Taste of \"Treasure Payment\"",
    },
    2022: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs \"beneficial\" to [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many Perfects scored that turn.",
        captainNotes: "End of turn damage is based on how many Perfects you hit this turn: 0 Perfects - 0x ATK; 1 Perfect - 5x ATK; 2 Perfects - 13x ATK; 3 Perfects - 32x ATK; 4 Perfects - 80x ATK; 5 Perfects - 200x ATK; 6 Perfects - 500x ATK",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
    },
    2023: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs \"beneficial\" to [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many Perfects scored that turn.",
        captainNotes: "End of turn damage is based on how many Perfects you hit this turn: 0 Perfects - 0x ATK; 1 Perfect - 5x ATK; 2 Perfects - 13x ATK; 3 Perfects - 32x ATK; 4 Perfects - 80x ATK; 5 Perfects - 200x ATK; 6 Perfects - 500x ATK",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
    },
    2024: {//Aokiji V2
        captain: "Boosts ATK of [QCK] and [PSY] characters by 3.25x and their HP by 1.35x at the start of the chain and makes [QCK] and [PSY] orbs \"beneficial\" to [QCK] and [PSY] characters. Boosts ATK of [QCK] and [PSY] characters by 4.0625x following a chain of [PSY] > [PSY] > [QCK] attacks no lower than Good",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [QCK] or [PSY] orbs and boosts ATK of [QCK] and [PSY] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Frozen Sea",
    },
    2025: {//Aokiji V2
        captain: "Boosts ATK of [QCK] and [PSY] characters by 3.25x and their HP by 1.35x at the start of the chain and makes [QCK] and [PSY] orbs \"beneficial\" to [QCK] and [PSY] characters. Boosts ATK of [QCK] and [PSY] characters by 4.0625x following a chain of [PSY] > [PSY] > [QCK] attacks no lower than Good",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [QCK] or [PSY] orbs and boosts ATK of [QCK] and [PSY] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Frozen Sea",
    },
    2026: {//Hina
        captain: "Not Translated",
        special: "Delays all enemies for 1 turn. If your Captain is a [QCK] or [PSY] character, boosts the Color Affinity of [QCK] and [PSY] by 2x for 1 turn",
        specialName: "Kimino Sleeve Cage: Lock",
    },
    2027: {//Hina
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.25x and their RCV by 1.2x",
        special: "Delays all enemies for 1 turn. If your Captain is a [QCK] or [PSY] character, boosts the Color Affinity of [QCK] and [PSY] by 2x for 1 turn",
        specialName: "Kimino Sleeve Cage: Lock",
    },
    2028: {//Sengoku
        captain: "Not Translated",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orb \"beneficial\" for all characters for 1 turn",
        specialName: "Instant Suppression",
    },
    2029: {//Sengoku
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [QCK] and [PSY] characters by 2.5x and their HP by 1.2x",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orb \"beneficial\" for all characters for 1 turn",
        specialName: "Instant Suppression",
    },
    2030: {//Brannew
        captain: "Not Translated",
        special: "Reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 4 turns and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to [STR] and [INT] characters for 3 turns",
        specialName: "Reporting on a Bizzare Incident",
    },
    2031: {//Brannew
        captain: "Boosts ATK of [STR] and [INT] characters by 2.5x and reduces damage received by 7%",
        special: "Reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 4 turns and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to [STR] and [INT] characters for 3 turns",
        specialName: "Reporting on a Bizzare Incident",
    },
    2032: {//Luffy Tankman
        captain: "Not Translated",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds .3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2033: {//Luffy Tankman
        captain: "Boosts ATK of PSY characters by 2.5x and their HP by 1.5x",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds .3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2034: {//Kizaru 6+
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 2x and boosts RCV of all characters by 1.35x. If you use \"Yasakani no Magatama: Divine Light\" boosts ATK of all characters by 3.5x instead.",
        specialName: "Yasakani no Magatama: Divine Light",
        special: [
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 6x character's RCV in HP. Deals 20 hits of random typeless damage to random enemies.",
                "cooldown": [ 9, 6 ],
            },
            {
                "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 15x character's RCV in HP. Deals 20 hits of large random typeless damage to random enemies.",
                "cooldown": [ 15, 12 ],
            },
        ],
        specialNotes: "#{randomHits : 20}<br>#{random : ??? : ??? : for each hit on Stage 1}<br>#{random : ??? : ??? : for each hit on Stage 2}<br>#{stages}",
    },
    2035: {//Buggy 6+
        captain: "Boosts ATK of characters with cost 40 or less by 1.75x and reduces the HP and ATK of characters with cost 41 and greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Boosts ATK of characters with cost 40 or less by 2x for 2 turns",
        specialName: "The Greatest Villian's Bluff",
    },
    2036: {//Jesus Burgess
        captain: "Not Translated",
        special: "Cuts the current HP of each enemy by 20% and boosts ATK of Fighter characters by 1.75x for a variable amount of turns",
        specialNotes: "Fighter ATK buff duration is equal to the amount of enemies on the stage at the time the special was activated",
        specialName: "The Greatest Villian's Bluff",
    },
    2037: {//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.5x at the start of the chain, by 3.75x after scoring 4 Perfects in a row.",
        special: "Cuts the current HP of each enemy by 20% and boosts ATK of Fighter characters by 1.75x for a variable amount of turns",
        specialNotes: "Fighter ATK buff duration is equal to the amount of enemies on the stage at the time the special was activated",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter characters by 50",
            "level1": "Makes [INT] orbs \"beneficial\" for Fighter characters",
        },
        specialName: "The Greatest Villian's Bluff",
    },
    2200: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 2.5x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },
    2201: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 3x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },

};

module.exports.db5 = db5;
