import { Component } from '@angular/core';
import { Affix } from './affix';
import { ItemType } from './item-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pd2AffixReader';
  prefixRaw = `Name	*comment	version	spawnable	rare	level	maxlevel	levelreq	classspecific	class	classlevelreq	frequency	group	mod1code	mod1param	mod1min	mod1max	mod2code	mod2param	mod2min	mod2max	mod3code	mod3param	mod3min	mod3max	transform	transformcolor	itype1	itype2	itype3	itype4	itype5	itype6	itype7	etype1	etype2	etype3	etype4	etype5	divide	multiply	add
Sturdy		1	1	1	1		1				100	10001	ac%		6	10											lcha														0
Strong		1	1	1	15		10				100	10001	ac%		11	15											lcha														0
Glorious		1	1	1	25		20				100	10001	ac%		16	20											lcha														0
Blessed		1	1	1	40		35				100	10001	ac%		21	25											lcha														0
Saintly		1	1	1	60		55				100	10001	ac%		26	30											lcha														0
Empowering		1	1	1	1		1				100	10002	dmg%		4	6											scha														0
Empowering		1	1	1	1		1				100	10002	dmg%		7	10											mcha														0
Empowering		1	1	1	1		1				100	10002	dmg%		11	15											lcha														0
Empowering		1	1	1	1		1				100	10002	dmg%		20	45											jewl														0
Jagged		1	1	1	1		1				100	10002	dmg%		20	30											amul	glov	helm	ring	belt	misl									0
Deadly		1	1	1	10		5				100	10002	dmg%		31	40											amul	glov	helm	ring	belt	misl									0
Vicious		1	1	1	17		10				50	10002	dmg%		41	50											amul	glov	helm	ring	belt	misl									0
Brutal		1	1	1	24		15				50	10002	dmg%		51	75											amul	glov	helm	misl											0
Massive		1	1	1	31		20				150	10002	dmg%		50	100											tors	shld													0
Brutal		1	1	1	38		25				100	10002	dmg%		101	150											tors	shld													0
Massive		1	1	1	45		30				50	10002	dmg%		151	200											tors	shld													0
Massive		1	1	1	1		1				400	10002	dmg%		50	100											weap														0
Brutal		1	1	1	20		15				400	10002	dmg%		101	150											weap														0
Massive		1	1	1	30		20				400	10002	dmg%		151	200											weap														0
Brutal		1	1	1	40		25				400	10002	dmg%		201	250											weap														0
Massive		1	1	1	50		30				200	10002	dmg%		251	300											weap														0
Savage		1	1	1	60		35				100	10002	dmg%		301	350											weap														0
Savage		1	1	1	70		40				50	10002	dmg%		351	400											weap														0
Savage		1	1	1	80		45				25	10002	dmg%		401	450											weap														0
Savage		1	1	1	80		50				10	10002	dmg%		451	500											weap														0
Red		1	1	1	1		1				100	10003	dmg-min		1	5											scha	lcha	gcha												0
Red		1	1	1	30		15				100	10003	dmg-min		6	9											lcha	gcha													0
Red		1	1	1	60		30				100	10003	dmg-min		10	15											gcha														0
Red		1	1	1	1		1				100	10003	dmg-min		3	6											amul	ring	glov	helm	weap	jewl	misl								0
Red		1	1	1	1		1				100	10003	dmg-min		3	6											belt	boot													0
Sanguinary		1	1	1	15		10				100	10003	dmg-min		7	12											amul	ring	glov	helm	weap	jewl	misl								0
Sanguinary		1	1	1	15		10				100	10003	dmg-min		7	12											belt	boot													0
Bloody		1	1	1	30		20				100	10003	dmg-min		13	18											amul	ring	glov	helm	weap	jewl	misl								0
Bloody		1	1	1	30		20				100	10003	dmg-min		13	18											belt	boot													0
Scarlet		1	1	1	50		35				100	10003	dmg-min		19	25											amul	glov	helm	weap	misl										0
Scarlet		1	1	1	70		45				100	10003	dmg-min		26	50											weap	misl													0
Jagged		1	1	1	1		1				100	10004	dmg-max		1	5											scha	lcha	gcha												0
Jagged		1	1	1	30		15				100	10004	dmg-max		6	9											lcha	gcha													0
Jagged		1	1	1	60		30				100	10004	dmg-max		10	15											gcha														0
Jagged		1	1	1	1		1				100	10004	dmg-max		3	6											amul	ring	glov	helm	weap	jewl	misl								0
Jagged		1	1	1	1		1				100	10004	dmg-max		3	6											belt	boot													0
Forked		1	1	1	15		10				100	10004	dmg-max		7	12											amul	ring	glov	helm	weap	jewl	misl								0
Forked		1	1	1	15		10				100	10004	dmg-max		7	12											belt	boot													0
Serrated		1	1	1	30		20				100	10004	dmg-max		13	18											amul	ring	glov	helm	weap	jewl	misl								0
Serrated		1	1	1	30		20				100	10004	dmg-max		13	18											belt	boot													0
Vermillion		1	1	1	50		35				100	10004	dmg-max		19	25											amul	glov	helm	weap	misl										0
Vermillion		1	1	1	70		45				100	10004	dmg-max		26	50											weap	misl													0
Rookie’s		1	1	1	1		1				100	10005	addxp		1	2											scha	mcha	lcha	jewl	ring	amul	belt								0
Rookie’s		1	1	1	1		1				100	10005	addxp		1	2											boot	glov	misl	helm	tors	shld	weap								0
Student’s		1	1	1	15		1				100	10005	addxp		3	5											scha	mcha	lcha	jewl	ring	amul	belt								0
Student’s		1	1	1	15		1				100	10005	addxp		3	5											boot	glov	misl	helm	tors	shld	weap								0
Scholar’s		1	1	1	25		10				100	10005	addxp		6	8											boot	glov	misl	helm	tors	shld	weap								0
Lucky		1	1	1	1		1				100	10006	mag%		4	7											scha	mcha	lcha	jewl											0
Lucky		1	1	1	20		15				100	10006	mag%		8	14											mcha	lcha	jewl												0
Lucky		1	1	1	35		30				100	10006	mag%		15	21											lcha	jewl													0
Lucky		1	1	1	50		35				100	10006	mag%		22	30											jewl														0
Lucky		1	1	1	1		1				100	10006	mag%		15	25											amul	ring	boot	glov	helm	tors	shld								0
Lucky		1	1	1	1		1				100	10006	mag%		15	25											belt	weap	misl												0
Lucky		1	1	1	20		15				100	10006	mag%		26	35											amul	ring	boot	glov	helm	tors	shld								0
Lucky		1	1	1	20		15				100	10006	mag%		26	35											belt	weap	misl												0
Lucky		1	1	1	35		30				100	10006	mag%		36	45											amul	ring	boot	glov	helm	tors	shld								0
Lucky		1	1	1	35		30				100	10006	mag%		36	45											belt	weap	misl												0
Bronze		1	1	1	1		1				200	10007	att		25	50											weap	amul	ring	glov	belt	helm	tors								0
Bronze		1	1	1	1		1				200	10007	att		25	50											shld	misl	scha	mcha	lcha	jewl									0
Iron		1	1	1	12		5				200	10007	att		51	75											weap	amul	ring	glov	belt	helm	tors								0
Iron		1	1	1	12		5				200	10007	att		51	75											shld	misl	mcha	lcha	jewl										0
Steel		1	1	1	24		10				200	10007	att		76	100											weap	amul	ring	glov	belt	helm	tors								0
Steel		1	1	1	24		10				200	10007	att		76	100											shld	misl	mcha	lcha	jewl										0
Silver		1	1	1	36		15				200	10007	att		101	150											weap	amul	ring	glov	belt	helm	tors								0
Silver		1	1	1	36		15				200	10007	att		101	150											shld	misl	lcha	jewl											0
Silver		1	1	1	48		20				200	10007	att		151	250											weap	jewl													0
Gold		1	1	1	60		30				100	10007	att		251	400											weap														0
Platinum		1	1	1	70		40				50	10007	att		401	600											weap														0
Meteoric		1	1	1	80		50				20	10007	att		601	900											weap														0
Greedy		1	1	1	1		1				100	10008	gold%		20	40											scha	mcha	lcha	jewl	ring	amul	belt								0
Greedy		1	1	1	1		1				100	10008	gold%		20	40											boot	glov	misl	helm	tors	shld	weap								0
Greedy		1	1	1	20		15				100	10008	gold%		41	60											scha	mcha	lcha	jewl	ring	amul	belt								0
Greedy		1	1	1	20		15				100	10008	gold%		41	60											boot	glov	misl	helm	tors	shld	weap								0
Greedy		1	1	1	35		30				100	10008	gold%		61	80											mcha	lcha	jewl	ring	amul	belt									0
Greedy		1	1	1	35		30				100	10008	gold%		61	80											boot	glov	misl	helm	tors	shld	weap								0
Greedy		1	1	1	50		40				100	10008	gold%		81	120											mcha	lcha	jewl	ring	amul	belt									0
Greedy		1	1	1	50		40				100	10008	gold%		81	120											boot	glov	misl	helm	tors	shld	weap								0
Tangerine		1	1	1	1		1				100	10009	res-ltng		5	10											scha														0
Tangerine		1	1	1	1		1				100	10009	res-ltng		10	20											amul	ring	boot	glov	helm	tors	shld								0
Tangerine		1	1	1	1		1				100	10009	res-ltng		10	20											belt	gcha	lcha	jewl	misl										0
Ocher		1	1	1	25		20				100	10009	res-ltng		21	30											amul	ring	boot	glov	helm	tors	shld								0
Ocher		1	1	1	25		20				100	10009	res-ltng		21	30											belt	lcha	jewl	misl											0
Coral		1	1	1	45		40				100	10009	res-ltng		31	40											amul	ring	boot	glov	helm	tors	shld								0
Coral		1	1	1	45		40				100	10009	res-ltng		31	40											belt	jewl	misl												0
Amber		1	1	1	65		60				100	10009	res-ltng		41	50											amul	boot	glov	helm	tors	shld	belt								0
Amber		1	1	1	65		60				100	10010	res-cold		41	50											misl														0
Azure		1	1	1	1		1				100	10010	res-cold		5	10											scha														0
Azure		1	1	1	1		1				100	10010	res-cold		10	20											amul	ring	boot	glov	helm	tors	shld								0
Azure		1	1	1	1		1				100	10010	res-cold		10	20											belt	gcha	lcha	jewl	misl										0
Lapis		1	1	1	25		20				100	10010	res-cold		21	30											amul	ring	boot	glov	helm	tors	shld								0
Lapis		1	1	1	25		20				100	10010	res-cold		21	30											belt	lcha	jewl	misl											0
Cobalt		1	1	1	45		40				100	10010	res-cold		31	40											amul	ring	boot	glov	helm	tors	shld								0
Cobalt		1	1	1	45		40				100	10010	res-cold		31	40											belt	jewl	misl												0
Sapphire		1	1	1	65		60				100	10010	res-cold		41	50											amul	boot	glov	helm	tors	shld	belt								0
Sapphire		1	1	1	65		60				100	10010	res-cold		41	50											misl														0
Crimson		1	1	1	1		1				100	10011	res-fire		5	10											scha														0
Crimson		1	1	1	1		1				100	10011	res-fire		10	20											amul	ring	boot	glov	helm	tors	shld								0
Crimson		1	1	1	1		1				100	10011	res-fire		10	20											belt	gcha	lcha	jewl	misl										0
Burgundy		1	1	1	25		20				100	10011	res-fire		21	30											amul	ring	boot	glov	helm	tors	shld								0
Burgundy		1	1	1	25		20				100	10011	res-fire		21	30											belt	lcha	jewl	misl											0
Garnet		1	1	1	45		40				100	10011	res-fire		31	40											amul	ring	boot	glov	helm	tors	shld								0
Garnet		1	1	1	45		40				100	10011	res-fire		31	40											belt	jewl	misl												0
Ruby		1	1	1	65		60				100	10011	res-fire		41	50											amul	boot	glov	helm	tors	shld	belt								0
Ruby		1	1	1	65		60				100	10011	res-fire		41	50											misl														0
Beryl		1	1	1	1		1				100	10012	res-pois		5	10											scha														0
Beryl		1	1	1	1		1				100	10012	res-pois		10	20											amul	ring	boot	glov	helm	tors	shld								0
Beryl		1	1	1	1		1				100	10012	res-pois		10	20											belt	gcha	lcha	jewl	misl										0
Jade		1	1	1	25		20				100	10012	res-pois		21	30											amul	ring	boot	glov	helm	tors	shld								0
Jade		1	1	1	25		20				100	10012	res-pois		21	30											belt	lcha	jewl	misl											0
Viridian		1	1	1	45		40				100	10012	res-pois		31	40											amul	ring	boot	glov	helm	tors	shld								0
Viridian		1	1	1	45		40				100	10012	res-pois		31	40											belt	jewl	misl												0
Emerald		1	1	1	65		60				100	10012	res-pois		41	50											amul	boot	glov	helm	tors	shld	belt								0
Emerald		1	1	1	65		60				100	10012	res-pois		41	50											misl														0
Prismatic		1	1	1	1		1				100	10013	res-all		2	4											scha														0
Prismatic		1	1	1	1		1				100	10013	res-all		5	7											amul	ring	boot	glov	helm	tors	shld								0
Prismatic		1	1	1	1		1				100	10013	res-all		5	7											belt	gcha	lcha	jewl	misl										0
Prismatic		1	1	1	25		20				100	10013	res-all		8	10											amul	ring	boot	glov	helm	tors	shld								0
Prismatic		1	1	1	25		20				100	10013	res-all		8	10											belt	lcha	jewl	misl											0
Prismatic		1	1	1	45		40				100	10013	res-all		11	13											amul	ring	boot	glov	helm	tors	shld								0
Prismatic		1	1	1	45		40				100	10013	res-all		11	13											belt	jewl	misl												0
Prismatic		1	1	1	65		60				100	10013	res-all		14	16											amul	boot	glov	helm	tors	shld	belt								0
Prismatic		1	1	1	65		60				100	10013	res-all		14	16											misl														0
Tank’s		1	1	1	25		20				100	10014	hp%		1	2											scha	mcha	lcha	jewl	ring	amul	belt								0
Tank’s		1	1	1	35		25				100	10014	hp%		1	2											boot	glov	misl	helm	tors	shld									0
Tank’s		1	1	1	45		30				100	10014	hp%		3	4											lcha	jewl	ring	amul	belt	boot	glov								0
Tank’s		1	1	1	55		35				100	10014	hp%		3	4											misl	helm	tors	shld											0
Tank’s		1	1	1	65		40				100	10014	hp%		5	6											amul	belt	boot	glov	helm	tors	shld								0
Tank’s		1	1	1	75		45				100	10014	hp%		7	8											amul	belt	boot	glov	helm	tors	shld								0
Tank’s		1	1	1	85		50				100	10014	hp%		9	10											belt	tors	shld												0
Life’s		1	1	1	1		1				100	10015	hp		10	25											amul	belt	boot	glov	helm	tors	shld								0
Jackal’s		1	1	1	15		10				100	10015	hp		26	40											amul	belt	boot	glov	helm	tors	shld								0
Fox’s		1	1	1	25		20				100	10015	hp		41	55											amul	belt	boot	glov	helm	tors	shld								0
Wolf’s		1	1	1	35		30				100	10015	hp		56	70											amul	belt	boot	glov	helm	tors	shld								0
Tiger’s		1	1	1	45		40				100	10015	hp		71	85											amul	belt	boot	glov	helm	tors	shld								0
Mammoth’s		1	1	1	55		50				100	10015	hp		86	100											amul	belt	boot	glov	helm	tors	shld								0
Colosuss’s		1	1	1	65		60				100	10015	hp		101	115											belt	tors	shld												0
Whale’s		1	1	1	75		70				100	10015	hp		116	130											belt	tors	shld												0
Life’s		1	1	1	1		1				100	10015	hp		10	20											ring	jewl	misl	scha	mcha	lcha									0
Jackal’s		1	1	1	25		15				100	10015	hp		21	30											ring	jewl	misl	mcha	lcha										0
Fox’s		1	1	1	50		30				100	10015	hp		31	40											ring	jewl	misl	mcha	lcha										0
Wolf’s		1	1	1	75		45				100	10015	hp		41	50											ring	jewl	misl	lcha											0
Lizard's		1	1	1	1		1				50	10016	mana		10	15											scha	mcha	lcha	jewl	ring	amul	belt								0
Lizard's		1	1	1	1		1				50	10016	mana		10	15											boot	glov	misl	helm	tors	shld									0
Snake's		1	1	1	15		10				50	10016	mana		16	30											scha	mcha	lcha	jewl	ring	amul	belt								0
Snake's		1	1	1	15		10				50	10016	mana		16	30											boot	glov	misl	helm	tors	shld									0
Serpent's		1	1	1	25		20				50	10016	mana		31	45											mcha	lcha	jewl	ring	amul	belt	boot								0
Serpent's		1	1	1	25		20				50	10016	mana		31	45											glov	misl	helm	tors	shld										0
Drake's		1	1	1	35		30				50	10016	mana		46	60											mcha	lcha	jewl	ring	amul	belt	boot								0
Drake's		1	1	1	35		30				50	10016	mana		46	60											glov	misl	helm	tors	shld										0
Dragon's		1	1	1	45		40				50	10016	mana		61	75											lcha	jewl	ring	amul	belt	boot	glov								0
Dragon's		1	1	1	45		40				50	10016	mana		61	75											misl	helm	tors	shld											0
Wyrm's		1	1	1	55		50				50	10016	mana		76	100											lcha	jewl	ring	amul	belt	boot	glov								0
Wyrm's		1	1	1	55		50				50	10016	mana		76	100											misl	helm	tors	shld											0
Great Wyrm's		1	1	1	65		60				50	10016	mana		101	120											lcha	jewl	ring	amul	belt	boot	glov								0
Great Wyrm's		1	1	1	65		60				50	10016	mana		101	120											misl	helm	tors	shld											0
Balancing		1	1	1	1		1				100	10017	balance1		8	14											lcha	mcha	boot	glov	helm	tors	shld								0
Balancing		1	1	1	1		1				100	10017	balance1		8	14											belt														0
Stable		1	1	1	20		10				100	10017	balance1		15	22											lcha	boot	glov	helm	tors	shld	belt								0
Stable		1	1	1	40		20				100	10017	balance1		23	30											boot	glov	helm	tors	shld	belt									0
Pacing		1	1	1	1		1				100	10018	move2		5	10											lcha	shld	belt	ring	amul	misl	tors								0
Pacing		1	1	1	1		1				200	10018	move2		5	10											boot														0
Pacing		1	1	1	10		5				100	10018	move2		11	20											lcha	shld	belt	ring	amul	misl	tors								0
Pacing		1	1	1	10		5				200	10018	move2		11	20											boot														0
Haste		1	1	1	20		10				100	10018	move2		21	30											amul														0
Haste		1	1	1	20		10				200	10018	move2		21	30											boot														0
Haste		1	1	1	30		15				200	10018	move2		31	40											boot														0
Haste		1	1	1	40		20				200	10018	move2		41	50											boot														0
Apprentice’s		1	1	1	1		1				100	10019	cast1		2	3											lcha	mcha	jewl												0
Magus’s		1	1	1	25		20				100	10019	cast1		4	5											lcha	jewl													0
Apprentice’s		1	1	1	1		1				100	10019	cast1		6	15											ring	amul	belt	glov	helm	tors	shld								0
Apprentice’s		1	1	1	1		1				100	10019	cast1		6	15											ring	amul	belt	glov	helm	tors	shld								0
Magus’s		1	1	1	30		20				100	10019	cast1		16	25											amul	belt	glov	helm	tors	shld									0
Magus’s		1	1	1	30		20				100	10019	cast1		16	25											amul	belt	glov	helm	tors	shld									0
Magus’s		1	1	1	50		30				100	10019	cast1		26	37											tors	orb	scep	staf	wand	club									0
Magus’s		1	1	1	70		40				100	10019	cast1		38	50											orb	scep	staf	wand	club										0
Fletcher's		1	1	1	30		30				50	10020	skilltab	0	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Acrobat's		1	1	1	30		30				50	10020	skilltab	1	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Harpoonist's		1	1	1	30		30				50	10020	skilltab	2	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Burning		1	1	1	30		30				50	10020	skilltab	3	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Sparking		1	1	1	30		30				50	10020	skilltab	4	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Chilling		1	1	1	30		30				50	10020	skilltab	5	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Hexing		1	1	1	30		30				50	10020	skilltab	6	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Fungal		1	1	1	30		30				50	10020	skilltab	7	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Graverobber's		1	1	1	30		30				50	10020	skilltab	8	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Lion Branded		1	1	1	30		30				50	10020	skilltab	9	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Captain's		1	1	1	30		30				50	10020	skilltab	10	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Preserver's		1	1	1	30		30				50	10020	skilltab	11	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Expert's		1	1	1	30		30				50	10020	skilltab	12	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Fanatic		1	1	1	30		30				50	10020	skilltab	13	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Sounding		1	1	1	30		30				50	10020	skilltab	14	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Trainer's		1	1	1	30		30				50	10020	skilltab	15	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Spiritual		1	1	1	30		30				50	10020	skilltab	16	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Nature's		1	1	1	30		30				50	10020	skilltab	17	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Entrapping		1	1	1	30		30				50	10020	skilltab	18	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Mentalist's		1	1	1	30		30				50	10020	skilltab	19	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Shogukusha's		1	1	1	30		30				50	10020	skilltab	20	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Bowyer's		1	1	1	50		40				100	10020	skilltab	0	1	2											amul	abow	misl												0
Gymnast's		1	1	1	50		40				100	10020	skilltab	1	1	2											amul	ajav	aspe												0
Spearmaiden's		1	1	1	50		40				100	10020	skilltab	2	1	2											amul	ajav	aspe	abow	misl										0
Blazing		1	1	1	50		40				100	10020	skilltab	3	1	2											amul	staf	orb												0
Charged		1	1	1	50		40				100	10020	skilltab	4	1	2											amul	staf	orb												0
Freezing		1	1	1	50		40				100	10020	skilltab	5	1	2											amul	staf	orb												0
Blighting		1	1	1	50		40				100	10020	skilltab	6	1	2											amul	wand	head	knif				tkni							0
Noxious		1	1	1	50		40				100	10020	skilltab	7	1	2											amul	wand	head	knif				tkni							0
Vodoun		1	1	1	50		40				100	10020	skilltab	8	1	2											amul	wand	head	knif				tkni							0
Hawk Branded		1	1	1	50		40				100	10020	skilltab	9	1	2											amul	scep	2hsw	ashd											0
Commander's		1	1	1	50		40				100	10020	skilltab	10	1	2											amul	scep	2hsw	ashd											0
Warder's		1	1	1	50		40				100	10020	skilltab	11	1	2											amul	scep	2hsw	ashd											0
Veteran's		1	1	1	50		40				100	10020	skilltab	12	1	2											amul	phlm													0
Raging		1	1	1	50		40				100	10020	skilltab	13	1	2											amul	phlm													0
Resonant		1	1	1	50		40				100	10020	skilltab	14	1	2											amul	phlm													0
Caretaker's		1	1	1	50		40				100	10020	skilltab	15	1	2											amul	club	pelt												0
Feral		1	1	1	50		40				100	10020	skilltab	16	1	2											amul	club	pelt												0
Terra's		1	1	1	50		40				100	10020	skilltab	17	1	2											amul	club	pelt												0
Trickster's		1	1	1	50		40				100	10020	skilltab	18	1	2											amul	h2h	knif					tkni							0
Psychic		1	1	1	50		40				100	10020	skilltab	19	1	2											amul	h2h	knif					tkni							0
Sensei's		1	1	1	50		40				100	10020	skilltab	20	1	2											amul	h2h	knif					tkni							0
Superior		1	1	1	50		40				50	10020	allskills		1	1											lcha	lchp													0
Superior		1	1	1	60		50				10	10021	allskills		1	1											ring	amul	belt	boot	glov	misl	helm								0
Superior		1	1	1	60		50				10	10021	allskills		1	1											tors	shld	weap												0
Strength		1	1	1	1		1				100	10022	str		4	6											mcha	lcha	ring	amul	belt	glov									0
Ox’s		1	1	1	30		15				100	10022	str		7	12											lcha	ring	amul	belt	glov										0
Ox’s		1	1	1	45		25				100	10022	str		13	20											ring	amul	belt	glov											0
Dexterity		1	1	1	1		1				100	10023	dex		4	6											mcha	lcha	ring	amul	belt	glov									0
Skillful		1	1	1	30		15				100	10023	dex		7	12											lcha	ring	amul	belt	glov										0
Skillful		1	1	1	45		25				100	10023	dex		13	20											ring	amul	belt	glov											0
Ember		1	1	1	1		1				40	10024	fire-min		3	4	fire-max		5	6							scha	mcha													0
Smoldering		1	1	1	30		15				40	10024	fire-min		19	22	fire-max		29	32							scha	mcha													0
Smoking		1	1	1	50		25				40	10024	fire-min		35	40	fire-max		55	60							mcha														0
Ember		1	1	1	1		1				40	10024	fire-min		3	4	fire-max		5	6							lcha	glov	weap	misl	jewl										0
Smoldering		1	1	1	10		5				40	10024	fire-min		19	22	fire-max		29	32							lcha	glov	weap	misl	jewl										0
Smoking		1	1	1	20		10				40	10024	fire-min		35	40	fire-max		55	60							lcha	glov	weap	misl	jewl										0
Flaming		1	1	1	30		15				40	10024	fire-min		80	90	fire-max		120	135							lcha	glov	weap	misl	jewl										0
Scorching		1	1	1	40		20				40	10024	fire-min		300	320	fire-max		370	410							glov	weap	misl												0
Scorching		1	1	1	50		25				40	10024	fire-min		500	600	fire-max		700	800							weap														0
Scorching		1	1	1	50		25				40	10024	fire-min		1200	1400	fire-max		1600	1900							weap														0
Static		1	1	1	1		1				40	10025	ltng-min		1	1	ltng-max		6	10							scha	mcha													0
Glowing		1	1	1	30		15				40	10025	ltng-min		1	1	ltng-max		40	61							scha	mcha													0
Buzzing		1	1	1	50		25				40	10025	ltng-min		1	1	ltng-max		74	104							mcha														0
Static		1	1	1	1		1				40	10025	ltng-min		1	1	ltng-max		6	10							lcha	glov	weap	misl	jewl										0
Glowing		1	1	1	10		5				40	10025	ltng-min		1	1	ltng-max		40	61							lcha	glov	weap	misl	jewl										0
Buzzing		1	1	1	20		10				40	10025	ltng-min		1	1	ltng-max		74	104							lcha	glov	weap	misl	jewl										0
Arcing		1	1	1	30		15				40	10025	ltng-min		1	1	ltng-max		169	254							lcha	glov	weap	misl	jewl										0
Shocking		1	1	1	40		20				40	10025	ltng-min		1	1	ltng-max		619	779							glov	weap	misl												0
Shocking		1	1	1	50		25				40	10025	ltng-min		1	1	ltng-max		1099	1499							weap														0
Shocking		1	1	1	60		30				40	10025	ltng-min		1	1	ltng-max		2599	3499							weap														0
Cold		1	1	1	1		1				40	10026	cold-len		50	50	cold-min		3	4	cold-max		5	6			scha	mcha													0
Snowflake		1	1	1	30		15				40	10026	cold-len		50	50	cold-min		19	22	cold-max		29	32			scha	mcha													0
Shivering		1	1	1	50		25				40	10026	cold-len		50	50	cold-min		35	40	cold-max		55	60			mcha														0
Cold		1	1	1	1		1				40	10026	cold-len		50	50	cold-min		3	4	cold-max		5	6			lcha	glov	weap	misl	jewl										0
Snowflake		1	1	1	10		5				40	10026	cold-len		50	50	cold-min		19	22	cold-max		29	32			lcha	glov	weap	misl	jewl										0
Shivering		1	1	1	20		10				40	10026	cold-len		50	50	cold-min		35	40	cold-max		55	60			lcha	glov	weap	misl	jewl										0
Boreal		1	1	1	30		15				40	10026	cold-len		50	50	cold-min		80	90	cold-max		120	135			lcha	glov	weap	misl	jewl										0
Hibernal		1	1	1	40		20				40	10026	cold-len		50	50	cold-min		300	320	cold-max		370	410			glov	weap	misl												0
Hibernal		1	1	1	50		25				40	10026	cold-len		50	50	cold-min		500	600	cold-max		700	800			weap														0
Hibernal		1	1	1	50		25				40	10026	cold-len		50	50	cold-min		1200	1400	cold-max		1600	1900			weap														0
Conduit		1	1	1	20		10				100	10027	extra-ltng		3	5											mcha	jewl													0
Conduit		1	1	1	50		25				100	10027	extra-ltng		5	10											jewl														0
Conduit		1	1	1	1		1				100	10027	extra-ltng		5	10											ring	amul	boot	glov	helm	tors	shld								0
Conduit		1	1	1	1		1				100	10027	extra-ltng		5	10											belt	weap													0
Conduit		1	1	1	20		10				100	10027	extra-ltng		11	17											ring	amul	boot	glov	helm	tors	shld								0
Conduit		1	1	1	20		10				100	10027	extra-ltng		11	17											belt	weap													0
Conduit		1	1	1	40		20				100	10027	extra-ltng		18	25											ring	amul	boot	glov	helm	tors	shld								0
Conduit		1	1	1	40		20				100	10027	extra-ltng		18	25											belt	weap													0
Conduit		1	1	1	60		30				100	10027	extra-ltng		26	35											amul	tors	weap												0
Conduit		1	1	1	80		40				100	10027	extra-ltng		36	50											weap														0
Numbing		1	1	1	20		10				100	10027	extra-cold		3	5											mcha	jewl													0
Numbing		1	1	1	50		25				100	10027	extra-cold		5	10											jewl														0
Numbing		1	1	1	1		1				100	10027	extra-cold		5	10											ring	amul	boot	glov	helm	tors	shld								0
Numbing		1	1	1	1		1				100	10027	extra-cold		5	10											belt	weap	misl												0
Numbing		1	1	1	20		10				100	10027	extra-cold		11	17											ring	amul	boot	glov	helm	tors	shld								0
Numbing		1	1	1	20		10				100	10027	extra-cold		11	17											belt	weap	misl												0
Numbing		1	1	1	40		20				100	10027	extra-cold		18	25											ring	amul	boot	glov	helm	tors	shld								0
Numbing		1	1	1	40		20				100	10027	extra-cold		18	25											belt	weap	misl												0
Numbing		1	1	1	60		30				100	10027	extra-cold		26	35											amul	tors	weap												0
Numbing		1	1	1	80		40				100	10027	extra-cold		36	50											weap														0
Inferno		1	1	1	20		10				100	10027	extra-fire		3	5											mcha	jewl													0
Inferno		1	1	1	50		25				100	10027	extra-fire		5	10											jewl														0
Inferno		1	1	1	1		1				100	10027	extra-fire		5	10											ring	amul	boot	glov	helm	tors	shld								0
Inferno		1	1	1	1		1				100	10027	extra-fire		5	10											belt	weap	misl												0
Inferno		1	1	1	20		10				100	10027	extra-fire		11	17											ring	amul	boot	glov	helm	tors	shld								0
Inferno		1	1	1	20		10				100	10027	extra-fire		11	17											belt	weap	misl												0
Inferno		1	1	1	40		20				100	10027	extra-fire		18	25											ring	amul	boot	glov	helm	tors	shld								0
Inferno		1	1	1	40		20				100	10027	extra-fire		18	25											belt	weap	misl												0
Inferno		1	1	1	60		30				100	10027	extra-fire		26	35											amul	tors	weap												0
Inferno		1	1	1	80		40				100	10027	extra-fire		36	50											weap														0
Infectious		1	1	1	20		10				100	10027	extra-pois		3	5											mcha	jewl													0
Infectious		1	1	1	50		25				100	10027	extra-pois		5	10											jewl														0
Infectious		1	1	1	1		1				100	10027	extra-pois		5	10											ring	amul	boot	glov	helm	tors	shld								0
Infectious		1	1	1	1		1				100	10027	extra-pois		5	10											belt	weap	misl												0
Infectious		1	1	1	20		10				100	10027	extra-pois		11	17											ring	amul	boot	glov	helm	tors	shld								0
Infectious		1	1	1	20		10				100	10027	extra-pois		11	17											belt	weap	misl												0
Infectious		1	1	1	40		20				100	10027	extra-pois		18	25											ring	amul	boot	glov	helm	tors	shld								0
Infectious		1	1	1	40		20				100	10027	extra-pois		18	25											belt	weap	misl												0
Infectious		1	1	1	60		30				100	10027	extra-pois		26	35											amul	tors	weap												0
Infectious		1	1	1	80		40				100	10027	extra-pois		36	50											weap														0
Scintillating		1	1	1	20		10				100	10027	extra-magi		3	5											mcha	jewl													0
Scintillating		1	1	1	50		25				100	10027	extra-magi		5	10											jewl														0
Scintillating		1	1	1	1		1				100	10027	extra-magi		5	10											ring	amul	boot	glov	helm	tors	shld								0
Scintillating		1	1	1	1		1				100	10027	extra-magi		5	10											belt	weap	misl												0
Scintillating		1	1	1	20		10				100	10027	extra-magi		11	17											ring	amul	boot	glov	helm	tors	shld								0
Scintillating		1	1	1	20		10				100	10027	extra-magi		11	17											belt	weap	misl												0
Scintillating		1	1	1	40		20				100	10027	extra-magi		18	25											ring	amul	boot	glov	helm	tors	shld								0
Scintillating		1	1	1	40		20				100	10027	extra-magi		18	25											belt	weap	misl												0
Scintillating		1	1	1	60		30				100	10027	extra-magi		26	35											amul	tors	weap												0
Scintillating		1	1	1	80		40				100	10027	extra-magi		36	50											weap														0
Discharging		1	1	1	1		1				100	10028	pierce-ltng		1	2											mcha	ring	amul	weap	jewl										0
Discharging		1	1	1	10		5				100	10028	pierce-ltng		3	5											ring	amul	weap	jewl											0
Discharging		1	1	1	30		25				100	10028	pierce-ltng		6	10											ring	amul	weap												0
Discharging		1	1	1	50		45				100	10028	pierce-ltng		11	15											amul	weap													0
Frigid		1	1	1	1		1				100	10028	pierce-cold		1	2											mcha	ring	amul	weap	jewl										0
Frigid		1	1	1	10		5				100	10028	pierce-cold		3	5											ring	amul	weap	jewl											0
Frigid		1	1	1	30		25				100	10028	pierce-cold		6	10											ring	amul	weap												0
Frigid		1	1	1	50		45				100	10028	pierce-cold		11	15											amul	weap													0
Wildfire		1	1	1	1		1				100	10028	pierce-fire		1	2											mcha	ring	amul	weap	jewl										0
Wildfire		1	1	1	10		5				100	10028	pierce-fire		3	5											ring	amul	weap	jewl											0
Wildfire		1	1	1	30		25				100	10028	pierce-fire		6	10											ring	amul	weap												0
Wildfire		1	1	1	50		45				100	10028	pierce-fire		11	15											amul	weap													0
Malicious		1	1	1	1		1				100	10028	pierce-pois		1	2											mcha	ring	amul	weap	jewl										0
Malicious		1	1	1	10		5				100	10028	pierce-pois		3	5											ring	amul	weap	jewl											0
Malicious		1	1	1	30		25				100	10028	pierce-pois		6	10											ring	amul	weap												0
Malicious		1	1	1	50		45				100	10028	pierce-pois		11	15											amul	weap													0
Lethal		1	1	1	1		1				100	10028	pierce-phys		1	2											mcha	ring	amul	weap	jewl										0
Lethal		1	1	1	10		5				100	10028	pierce-phys		3	5											ring	amul	weap	jewl											0
Lethal		1	1	1	30		25				100	10028	pierce-phys		6	10											ring	amul	weap												0
Lethal		1	1	1	50		45				100	10028	pierce-phys		11	15											amul	weap													0
Savage		1	1	1	20		15				100	10029	deadly		5	10											amul	ring	glov	helm	weap										0
Devastating		1	1	1	40		35				100	10029	deadly		11	15											amul	ring	glov	helm	weap										0
Havoc		1	1	1	60		55				100	10029	deadly		16	20											amul	glov	weap												0
Savage		1	1	1	80		65				100	10029	deadly		21	30											weap														0
Swift		1	1	1	1		1				100	10030	swing2		5	10											ring	shld	jewl	amul	weap	glov									0
Swift		1	1	1	1		1				100	10030	swing2		11	15											ring	shld	jewl	amul	weap	glov									0
Swift		1	1	1	20		15				100	10030	swing2		16	25											shld	amul	weap	glov											0
Quick		1	1	1	40		25				100	10030	swing2		26	36											weap														0
Quick		1	1	1	60		35				50	10030	swing2		37	48											weap														0
Quick		1	1	1	80		45				20	10030	swing2		49	60											weap														0
Maiden's		1	1	1	30		25				100	10031	ama		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	ashd	head				0
Valkyrie's		1	1	1	80		70				100	10031	ama		2	2											amul														0
Monk's		1	1	1	30		25				100	10031	pal		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	head					0
Priest's		1	1	1	80		70				100	10031	pal		2	2											amul														0
Summoner's		1	1	1	30		25				100	10031	nec		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	ashd					0
Necromancer's		1	1	1	80		70				100	10031	nec		2	2											amul														0
Angel's		1	1	1	30		25				100	10031	sor		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	ashd	head				0
Arch-Angel's		1	1	1	80		70				100	10031	sor		2	2											amul														0
Slayer's		1	1	1	30		25				100	10031	bar		1	1											amul	ring	helm	tors	shld	belt		pelt	ashd	head					0
Berserker's		1	1	1	80		70				100	10031	bar		2	2											amul														0
Shaman's		1	1	1	30		25				100	10031	dru		1	1											amul	ring	helm	tors	shld	belt		phlm	ashd	head					0
Hierophant's		1	1	1	80		70				100	10031	dru		2	2											amul														0
Magekiller's		1	1	1	30		25				100	10031	ass		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	ashd	head				0
Witch-hunter's		1	1	1	80		70				100	10031	ass		2	2											amul														0
Warm		1	1	1	1		1				200	10032	half-freeze		1	1											amul	ring	belt	glov	helm	boot	shld								0
Warm		1	1	1	1		1				200	10032	half-freeze		1	1											tors														0
Leech		1	1	1	15		5				200	10033	lifesteal		3	5											ring	amul	weap	glov	jewl	misl									0
Locust		1	1	1	45		20				200	10033	lifesteal		6	10											amul	weap	glov	jewl	misl										0
Bat		1	1	1	15		5				200	10034	manasteal		3	5											ring	amul	weap	glov	jewl	misl									0
Vampire		1	1	1	45		20				200	10034	manasteal		6	10											amul	weap	glov	jewl	misl										0
Crushing		1	1	1	25		20				300	10035	crush		10	20											amul	glov	helm	weap											0
Lightning		1	1	1	25		20				30	10036	res-ltng-max		1	2											amul	ring	boot	glov	helm	tors	shld								0
Lightning		1	1	1	25		20				30	10036	res-ltng-max		1	2											belt	misl													0
Lightning		1	1	1	45		35				30	10036	res-ltng-max		3	4											amul	ring	boot	glov	helm	tors	shld								0
Lightning		1	1	1	45		35				30	10036	res-ltng-max		3	4											belt	misl													0
Lightning		1	1	1	65		55				30	10036	res-ltng-max		5	6											amul	boot	glov	helm	tors	shld	belt								0
Lightning		1	1	1	85		75				30	10036	res-ltng-max		7	8											amul	boot	glov	helm	tors	shld	belt								0
Cold		1	1	1	25		20				30	10037	res-cold-max		1	2											amul	ring	boot	glov	helm	tors	shld								0
Cold		1	1	1	25		20				30	10037	res-cold-max		1	2											belt	misl													0
Cold		1	1	1	45		35				30	10037	res-cold-max		3	4											amul	ring	boot	glov	helm	tors	shld								0
Cold		1	1	1	45		35				30	10037	res-cold-max		3	4											belt	misl													0
Cold		1	1	1	65		55				30	10037	res-cold-max		5	6											amul	boot	glov	helm	tors	shld	belt								0
Cold		1	1	1	85		75				30	10037	res-cold-max		7	8											amul	boot	glov	helm	tors	shld	belt								0
Fire		1	1	1	25		20				30	10038	res-fire-max		1	2											amul	ring	boot	glov	helm	tors	shld								0
Fire		1	1	1	25		20				30	10038	res-fire-max		1	2											belt	misl													0
Fire		1	1	1	45		35				30	10038	res-fire-max		3	4											amul	ring	boot	glov	helm	tors	shld								0
Fire		1	1	1	45		35				30	10038	res-fire-max		3	4											belt	misl													0
Fire		1	1	1	65		55				30	10038	res-fire-max		5	6											amul	boot	glov	helm	tors	shld	belt								0
Fire		1	1	1	85		75				30	10038	res-fire-max		7	8											amul	boot	glov	helm	tors	shld	belt								0
Poison		1	1	1	25		20				30	10039	res-pois-max		1	2											amul	ring	boot	glov	helm	tors	shld								0
Poison		1	1	1	25		20				30	10039	res-pois-max		1	2											belt	misl													0
Poison		1	1	1	45		35				30	10039	res-pois-max		3	4											amul	ring	boot	glov	helm	tors	shld								0
Poison		1	1	1	45		35				30	10039	res-pois-max		3	4											belt	misl													0
Poison		1	1	1	65		55				30	10039	res-pois-max		5	6											amul	boot	glov	helm	tors	shld	belt								0
Poison		1	1	1	85		75				30	10039	res-pois-max		7	8											amul	boot	glov	helm	tors	shld	belt								0
Prismatic		1	1	1	40		35				60	10040	res-all-max		1	1											amul	ring	boot	glov	helm	tors	shld								0
Prismatic		1	1	1	40		35				60	10040	res-all-max		1	1											belt	misl													0
Prismatic		1	1	1	80		70				60	10040	res-all-max		2	2											amul	boot	glov	helm	tors	shld	belt								0
Blood Letting		1	1	1	1		1				100	10041	heal-kill		1	3											jewl	ring	glov	boot	tors	helm	weap								0
Blood Letting		1	1	1	1		1				100	10041	heal-kill		1	3											belt	shld	misl	amul											0
Murderous		1	1	1	20		5				100	10041	heal-kill		4	10											jewl	ring	glov	boot	tors	helm	weap								0
Murderous		1	1	1	20		5				100	10041	heal-kill		4	10											belt	shld	misl	amul											0
Blood Sucking		1	1	1	40		15				100	10041	heal-kill		11	25											ring	glov	boot	tors	helm	weap	belt								0
Blood Sucking		1	1	1	40		15				100	10041	heal-kill		11	25											shld	misl	amul												0
Triumphant		1	1	1	1		1				100	10042	mana-kill		1	2											jewl	ring	glov	boot	tors	helm	weap								0
Triumphant		1	1	1	1		1				100	10042	mana-kill		1	2											belt	shld	misl	amul											0
Victorious		1	1	1	20		5				100	10042	mana-kill		3	5											jewl	ring	glov	boot	tors	helm	weap								0
Victorious		1	1	1	20		5				100	10042	mana-kill		3	5											belt	shld	misl	amul											0
Aureolin		1	1	1	40		15				100	10042	mana-kill		6	9											ring	glov	boot	tors	helm	weap	belt								0
Aureolin		1	1	1	40		15				100	10042	mana-kill		6	9											shld	misl	amul												0
Speedy		1	1	1	18		18				200	10043	aura	115	1	1											boot														0
Bulky		1	1	1	25		20				100	10044	red-dmg%		5	8											boot	glov	helm	tors	shld	belt									0
Bulky		1	1	1	40		30				100	10044	red-dmg%		9	12											boot	glov	helm	tors	shld	belt									0
Bulky		1	1	1	55		35				50	10044	red-dmg%		13	16											tors	shld													0
Bulky		1	1	1	70		40				50	10044	red-dmg%		17	20											tors	shld													0
Skillful		1	1	1	30		30				10	10045	skill	6	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	7	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	8	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	9	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	10	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	11	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	12	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	13	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	14	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	15	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	16	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	17	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	18	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	19	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	20	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	21	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	22	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	23	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	24	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	25	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	26	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	27	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	28	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	29	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	30	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	31	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	32	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	33	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	34	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	35	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	36	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	37	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	38	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	39	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	40	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	41	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	42	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	43	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	44	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	45	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	46	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	47	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	48	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	49	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	50	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	51	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	52	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	53	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	54	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	55	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	56	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	57	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	58	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	59	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	60	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	61	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	62	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	63	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	64	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	65	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	66	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	67	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	68	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	69	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	70	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	71	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	72	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	73	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	74	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	75	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	76	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	77	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	78	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	79	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	80	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	81	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	82	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	83	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	84	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	85	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	86	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	87	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	88	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	89	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	90	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	91	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	92	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	93	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	94	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	95	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	96	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	97	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	98	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	99	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	100	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	101	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	102	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	103	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	104	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	105	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	106	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	107	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	108	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	109	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	110	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	111	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	112	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	113	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	114	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	115	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	116	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	117	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	118	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	119	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	120	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	121	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	122	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	123	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	124	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	125	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	126	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	128	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	130	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	131	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	132	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	133	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	134	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	135	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	137	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	138	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	139	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	140	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	141	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	142	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	143	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	144	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	145	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	146	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	147	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	148	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	149	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	150	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	151	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	152	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	153	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	154	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	155	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	221	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	222	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	223	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	224	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	225	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	226	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	227	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	228	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	229	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	230	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	231	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	232	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	233	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	234	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	235	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	236	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	237	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	238	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	239	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	240	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	241	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	242	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	243	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	244	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	245	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	246	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	247	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	248	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	249	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	250	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	251	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	252	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	253	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	254	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	255	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	256	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	257	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	258	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	259	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	260	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	261	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	262	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	263	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	264	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	265	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	266	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	267	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	268	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	269	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	270	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	271	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	272	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	273	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	274	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	275	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	276	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	277	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	278	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	279	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	280	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	364	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	365	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	366	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	367	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	368	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	369	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	370	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	371	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	374	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	376	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	378	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	380	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	381	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				10	10045	skill	383	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Mechanist's		1	1	1	1		1				300	10046	sock		1	1											helm	tors	shld	weap											0
Artificer's		1	1	1	40		20				300	10046	sock		2	2											helm	tors	shld	weap											0
Jeweler's		1	1	1	60		30				200	10046	sock		3	3											helm	tors	shld	weap											0
Cultist's		1	1	1	1		1				100	10047	openwounds		20	40	deep-wounds		10	10							weap														0
Cultist's		1	1	1	28		25				100	10047	openwounds		20	40	deep-wounds		150	250							weap														0
Bloodthirster's		1	1	1	48		45				100	10047	openwounds		20	40	deep-wounds		400	600							weap														0
Gorelust's		1	1	1	68		65				100	10047	openwounds		20	40	deep-wounds		800	1100							weap														0
Cultist's		1	1	1	28		25				100	10047	openwounds		5	10	deep-wounds		50	60							jewl														0
Bloodthirster's		1	1	1	48		45				100	10047	openwounds		5	10	deep-wounds		80	100							jewl														0
Gorelust's		1	1	1	68		65				100	10047	openwounds		5	10	deep-wounds		120	150							jewl														0
Penetrating		1	1	1	15		10				100	10048	pierce		5	10											misl	miss													0
Puncturing		1	1	1	30		25				100	10048	pierce		11	20											misl	miss													0
Piercing		1	1	1	45		40				100	10048	pierce		21	30											misl	miss													0
Impaling		1	1	1	60		55				100	10048	pierce		31	40											misl	miss													0
Specialist		1	1	1	40		30				40	10049	oskill	6	25	35											misl														0
Specialist		1	1	1	60		40				40	10049	oskill	6	36	45											misl														0
Specialist		1	1	1	40		30				40	10049	oskill	12	25	35											misl														0
Specialist		1	1	1	60		40				40	10049	oskill	12	36	45											misl														0
Specialist		1	1	1	40		30				40	10049	oskill	16	25	35											misl														0
Specialist		1	1	1	60		40				40	10049	oskill	16	36	45											misl														0
Specialist		1	1	1	40		30				40	10049	oskill	21	25	35											misl														0
Specialist		1	1	1	60		40				40	10049	oskill	21	36	45											misl														0
Specialist		1	1	1	40		30				40	10049	oskill	22	25	35											misl														0
Specialist		1	1	1	60		40				40	10049	oskill	22	36	45											misl														0
Specialist		1	1	1	40		30				40	10049	oskill	26	25	35											misl														0
Specialist		1	1	1	60		40				40	10049	oskill	26	36	45											misl														0
Specialist		1	1	1	40		30				40	10049	oskill	27	25	35											misl														0
Specialist		1	1	1	60		40				40	10049	oskill	27	36	45											misl														0
Specialist		1	1	1	40		30				40	10049	oskill	31	25	35											misl														0
Specialist		1	1	1	60		40				40	10049	oskill	31	36	45											misl														0
Exposing		1	1	1	60		40				100	10050	hit-skill	AmpDmg Proc	12	15											weap							orb	staf	wand					0
Exposing		1	1	1	80		60				100	10050	hit-skill	AmpDmg Proc	12	31											weap							orb	staf	wand					0
Exposing		1	1	1	60		40				100	10050	hit-skill	LowRes Proc	12	15											weap							orb	staf	wand					0
Exposing		1	1	1	80		60				100	10050	hit-skill	LowRes Proc	12	31											weap							orb	staf	wand					0
Champion's	671	1	1	1	1		1				2	150	map-glob-monsterrarity		30	40											t1m	t2m													0
Flaming	672	1	1	1	1		1				2	151	map-mon-extra-fire		5	10	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
Ember	673	1	1	1	1		1				2	151	map-mon-extra-fire		10	15	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
Smoldering	674	1	1	1	1		1				2	151	map-mon-extra-fire		15	20	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
Hibernal	675	1	1	1	1		1				2	152	map-mon-extra-cold		5	10	map-glob-density		13	15	map-play-mag-gold%		15	20			t1m	t2m													0
Snowflake	676	1	1	1	1		1				2	152	map-mon-extra-cold		10	15	map-glob-density		15	18	map-play-mag-gold%		25	30			t2m	t3m													0
Shivering	677	1	1	1	1		1				2	152	map-mon-extra-cold		15	20	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Static	678	1	1	1	1		1				2	153	map-mon-extra-ltng		5	10	map-glob-density		13	20	map-play-addxp		3	4			t1m	t2m													0
Glowing	679	1	1	1	1		1				2	153	map-mon-extra-ltng		10	15	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
Arcing	680	1	1	1	1		1				2	153	map-mon-extra-ltng		15	20	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
Toxic	681	1	1	1	1		1				2	154	map-mon-extra-pois		5	10	map-glob-density		15	20	map-play-mag-gold%		5	10			t1m	t2m													0
Pestilent	682	1	1	1	1		1				2	154	map-mon-extra-pois		10	15	map-glob-density		20	25	map-play-mag-gold%		15	20			t2m	t3m													0
Septic	683	1	1	1	1		1				2	154	map-mon-extra-pois		15	20	map-glob-density		25	30	map-play-mag-gold%		25	30			t3m	t4m													0
Magic	684	1	1	1	1		1					155	map-mon-extra-mag		5	10	map-glob-density		13	18	map-play-mag-gold%		10	15																	0
Arcane	685	1	1	1	1		1					155	map-mon-extra-mag		10	15	map-glob-density		18	23	map-play-mag-gold%		15	20																	0
Ancient	686	1	1	1	1		1					155	map-mon-extra-mag		15	20	map-glob-density		23	25	map-play-mag-gold%		20	25																	0
Promoted	687	1		1	1		1					300	map-glob-arealevel		1	1	map-play-addxp		3	4	map-play-mag-gold%		15	20																	0
Elevated	688	1		1	1		1					300	map-glob-arealevel		1	1	map-play-addxp		4	5	map-play-mag-gold%		20	25																	0
Ascended	689	1		1	1		1					300	map-glob-arealevel		1	1	map-play-addxp		5	6	map-play-mag-gold%		30	35																	0
Silver	690	1	1	1	1		1				2	156	map-mon-att-pierce		30	50	map-glob-density		8	10	map-play-mag-gold%		15	20			t1m	t2m													0
Shining	691	1	1	1	1		1				2	156	map-mon-att-pierce		50	70	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
Opulent	692	1	1	1	1		1				2	156	map-mon-att-pierce		70	90	map-glob-density		18	20	map-play-mag-gold%		45	50			t3m	t4m													0
Fast	693	1	1	1	1		1				2	305	map-mon-att-cast-speed		40	60	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m													0
Speedy	694	1	1	1	1		1				2	305	map-mon-att-cast-speed		60	80	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
Ludicrous	695	1	1	1	1		1				2	305	map-mon-att-cast-speed		80	100	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
Large	696	1	1	1	1		1				1	311	map-mon-hp%		5	10	map-glob-density		15	20	map-play-addxp		6	8			t1m	t2m													0
Huge	697	1	1	1	1		1				1	311	map-mon-hp%		10	15	map-glob-density		20	25	map-play-addxp		8	10			t2m	t3m													0
Colossal	698	1	1	1	1		1				1	311	map-mon-hp%		15	20	map-glob-density		25	30	map-play-addxp		10	12			t3m	t4m													0
Strong	699	1	1	1	1		1				2	158	map-mon-ed%		10	15	map-play-addxp		4	5	map-play-mag-gold%		10	15			t1m	t2m													0
Mighty	700	1	1	1	1		1				2	158	map-mon-ed%		15	20	map-play-addxp		5	6	map-play-mag-gold%		25	30			t2m	t3m													0
Formidable	701	1	1	1	1		1				2	158	map-mon-ed%		20	25	map-play-addxp		6	7	map-play-mag-gold%		40	45			t3m	t4m													0
Splashing	702	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		8	13	map-play-mag-gold%		5	10			t1m	t2m													0
Splashing	703	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		18	23	map-play-mag-gold%		20	25			t2m	t3m													0
Splashing	704	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		23	25	map-play-mag-gold%		35	40			t3m	t4m													0
Bloody	705	1	1	1	1		1				2	312	map-mon-openwounds		5	10	map-play-addxp		4	5	map-play-mag-gold%		5	10			t1m	t2m													0
Gory	706	1	1	1	1		1				2	312	map-mon-openwounds		10	15	map-play-addxp		5	6	map-play-mag-gold%		20	25			t2m	t3m													0
Sanguinary	707	1	1	1	1		1				2	312	map-mon-openwounds		15	20	map-play-addxp		6	7	map-play-mag-gold%		35	40			t3m	t4m													0
Unhealthy	708	1	1	1	1		1				2	315	map-play-regen		-40	-30	map-play-addxp		3	4	map-play-mag-gold%		5	10			t1m	t2m													0
Sickly	709	1	1	1	1		1				2	315	map-play-regen		-60	-50	map-play-addxp		4	5	map-play-mag-gold%		20	25			t2m	t3m													0
Diseased	710	1	1	1	1		1				2	315	map-play-regen		-80	-70	map-play-addxp		5	6	map-play-mag-gold%		35	40			t3m	t4m													0
Crushing	711	1	1	1	1		1				2	163	map-mon-crush		15	25	map-glob-density		8	10	map-play-mag-gold%		5	10			t1m	t2m													0
Smashing	712	1	1	1	1		1				2	163	map-mon-crush		25	35	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Obliterating	713	1	1	1	1		1				2	163	map-mon-crush		35	45	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Sparking	714	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Shocking	715	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Thunderous	716	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Chilling	717	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Boreal	718	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Glacial	719	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Smoking	720	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Molten	721	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Volcanic	722	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Poisonous	723	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	123	163	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Envenomed	724	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	143	184	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Plagued	725	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	163	205	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Runic	726	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		8	10	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Taboo	727	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		10	12	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Occult	728	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		12	14	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Stygian	729	1	1	1	1		1				1	169	map-glob-add-mon-doll		690	690	map-glob-density		25	30	map-play-mag-gold%		40	45			t1m	t2m	t3m					t4m							0
Lustful	730	1	1	1	1		1				1	169	map-glob-add-mon-succ		885	885	map-glob-density		25	30	map-play-mag-gold%		45	50			t1m	t2m	t3m					t4m							0
Vampiric	731	1	1	1	1		1				1	169	map-glob-add-mon-vamp		1170	1170	map-glob-density		18	20	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Bovine	732	1	1	1	1		1				1	169	map-glob-add-mon-cow		391	391	map-glob-density		25	30	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Reanimated	733	1	1	1	1		1				1	169	map-glob-add-mon-horde		698	698	map-glob-density		25	30	map-play-mag-gold%		35	40			t1m	t2m	t3m					t4m							0
Ghastly	734	1	1	1	1		1				1	169	map-glob-add-mon-ghost		1111	1111	map-glob-density		18	20	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Champion's	831	1	1		1		1				12	150	map-glob-monsterrarity		45	60											t1m	t2m													0
Champion's	832	1	1		1		1				12	150	map-glob-monsterrarity		60	75											t2m	t3m													0
Champion's	833	1	1		1		1				12	150	map-glob-monsterrarity		75	90											t3m	t4m													0
Flaming	834	1	1		1		1				12	151	map-mon-extra-fire		8	15	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
Ember	835	1	1		1		1				12	151	map-mon-extra-fire		15	23	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
Smoldering	836	1	1		1		1				12	151	map-mon-extra-fire		23	30	map-glob-density		46	50	map-play-addxp		10	12			t3m	t4m													0
Hibernal	837	1	1		1		1				12	152	map-mon-extra-cold		8	15	map-glob-density		26	30	map-play-mag-gold%		30	40			t1m	t2m													0
Snowflake	838	1	1		1		1				12	152	map-mon-extra-cold		15	23	map-glob-density		30	36	map-play-mag-gold%		50	60			t2m	t3m													0
Shivering	839	1	1		1		1				12	152	map-mon-extra-cold		23	30	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Static	840	1	1		1		1				12	153	map-mon-extra-ltng		8	15	map-glob-density		26	40	map-play-addxp		6	8			t1m	t2m													0
Glowing	841	1	1		1		1				12	153	map-mon-extra-ltng		15	23	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
Arcing	842	1	1		1		1				12	153	map-mon-extra-ltng		23	30	map-glob-density		46	50	map-play-addxp		10	12			t3m	t4m													0
Toxic	843	1	1		1		1				12	154	map-mon-extra-pois		8	15	map-glob-density		30	40	map-play-mag-gold%		10	20			t1m	t2m													0
Pestilent	844	1	1		1		1				12	154	map-mon-extra-pois		15	23	map-glob-density		40	50	map-play-mag-gold%		30	40			t2m	t3m													0
Septic	845	1	1		1		1				12	154	map-mon-extra-pois		23	30	map-glob-density		50	60	map-play-mag-gold%		50	60			t3m	t4m													0
Silver	849	1	1		1		1				12	156	map-mon-att-pierce		45	75	map-glob-density		16	20	map-play-mag-gold%		30	40			t1m	t2m													0
Shining	850	1	1		1		1				12	156	map-mon-att-pierce		75	105	map-glob-density		30	36	map-play-mag-gold%		60	70			t2m	t3m													0
Opulent	851	1	1		1		1				12	156	map-mon-att-pierce		105	135	map-glob-density		36	40	map-play-mag-gold%		90	100			t3m	t4m													0
Fast	852	1	1		1		1				12	305	map-mon-att-cast-speed		60	90	map-glob-density		30	40	map-play-addxp		6	8			t1m	t2m													0
Speedy	853	1	1		1		1				12	305	map-mon-att-cast-speed		90	120	map-glob-density		40	50	map-play-addxp		8	10			t2m	t3m													0
Ludicrous	854	1	1		1		1				12	305	map-mon-att-cast-speed		120	150	map-glob-density		50	60	map-play-addxp		10	12			t3m	t4m													0
Large	855	1	1		1		1				6	311	map-mon-hp%		10	20	map-glob-density		30	40	map-play-addxp		12	16			t1m	t2m													0
Huge	856	1	1		1		1				6	311	map-mon-hp%		20	30	map-glob-density		40	50	map-play-addxp		16	20			t2m	t3m													0
Colossal	857	1	1		1		1				6	311	map-mon-hp%		30	40	map-glob-density		50	60	map-play-addxp		20	24			t3m	t4m													0
Strong	858	1	1		1		1				12	158	map-mon-ed%		15	23	map-play-addxp		8	10	map-play-mag-gold%		20	30			t1m	t2m													0
Mighty	859	1	1		1		1				12	158	map-mon-ed%		23	30	map-play-addxp		10	12	map-play-mag-gold%		50	60			t2m	t3m													0
Formidable	860	1	1		1		1				12	158	map-mon-ed%		30	38	map-play-addxp		12	14	map-play-mag-gold%		80	90			t3m	t4m													0
Splashing	861	1	1		1		1				12	157	map-mon-splash	358	150	2	map-glob-density		16	26	map-play-mag-gold%		10	20			t1m	t2m													0
Splashing	862	1	1		1		1				12	157	map-mon-splash	358	150	2	map-glob-density		36	46	map-play-mag-gold%		40	50			t2m	t3m													0
Splashing	863	1	1		1		1				12	157	map-mon-splash	358	150	2	map-glob-density		46	50	map-play-mag-gold%		70	80			t3m	t4m													0
Bloody	864	1	1		1		1				12	312	map-mon-openwounds		8	15	map-play-addxp		8	10	map-play-mag-gold%		10	20			t1m	t2m													0
Gory	865	1	1		1		1				12	312	map-mon-openwounds		15	23	map-play-addxp		10	12	map-play-mag-gold%		40	50			t2m	t3m													0
Sanguinary	866	1	1		1		1				12	312	map-mon-openwounds		23	30	map-play-addxp		12	14	map-play-mag-gold%		70	80			t3m	t4m													0
Unhealthy	867	1	1		1		1				12	315	map-play-regen		-60	-45	map-play-addxp		6	8	map-play-mag-gold%		10	20			t1m	t2m													0
Sickly	868	1	1		1		1				12	315	map-play-regen		-90	-75	map-play-addxp		8	10	map-play-mag-gold%		40	50			t2m	t3m													0
Diseased	869	1	1		1		1				12	315	map-play-regen		-120	-105	map-play-addxp		10	12	map-play-mag-gold%		70	80			t3m	t4m													0
Crushing	870	1	1		1		1				12	163	map-mon-crush		23	38	map-glob-density		16	20	map-play-mag-gold%		10	20			t1m	t2m													0
Smashing	871	1	1		1		1				12	163	map-mon-crush		38	53	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Obliterating	872	1	1		1		1				12	163	map-mon-crush		53	68	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Sparking	873	1	1		1		1				12	164	map-mon-phys-as-extra-ltng		90	120	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Shocking	874	1	1		1		1				12	164	map-mon-phys-as-extra-ltng		105	135	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Thunderous	875	1	1		1		1				12	164	map-mon-phys-as-extra-ltng		120	150	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Chilling	876	1	1		1		1				12	165	map-mon-phys-as-extra-cold	25	90	120	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Boreal	877	1	1		1		1				12	165	map-mon-phys-as-extra-cold	25	105	135	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Glacial	878	1	1		1		1				12	165	map-mon-phys-as-extra-cold	25	120	150	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Smoking	879	1	1		1		1				12	166	map-mon-phys-as-extra-fire		90	120	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Molten	880	1	1		1		1				12	166	map-mon-phys-as-extra-fire		105	135	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Volcanic	881	1	1		1		1				12	166	map-mon-phys-as-extra-fire		120	150	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Poisonous	882	1	1		1		1				12	167	map-mon-phys-as-extra-pois	125	185	245	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Envenomed	883	1	1		1		1				12	167	map-mon-phys-as-extra-pois	125	215	276	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Plagued	884	1	1		1		1				12	167	map-mon-phys-as-extra-pois	125	245	308	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Runic	885	1	1		1		1				12	168	map-mon-phys-as-extra-mag		12	15	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Taboo	886	1	1		1		1				12	168	map-mon-phys-as-extra-mag		15	18	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Occult	887	1	1		1		1				12	168	map-mon-phys-as-extra-mag		18	21	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Souless	778	1	1	1	1		1				1	169	map-glob-add-mon-souls		918	918	map-glob-density		25	30	map-play-mag-gold%		50	60			t1m	t2m	t3m					t4m							0
Shamanic	779	1	1	1	1		1				1	169	map-glob-add-mon-fetish		785	785	map-glob-density		20	25	map-play-mag-gold%		25	30			t1m	t2m	t3m					t4m							0
Duplicated	792	1	1	1	1		1				1	169	map-glob-extra-boss		1	1											t1m	t2m													0
Champion's	793	1	1	1	1		1				2	150	map-glob-monsterrarity		40	50											t2m	t3m													0
Champion's	794	1	1	1	1		1				2	150	map-glob-monsterrarity		50	60											t3m	t4m													0
Rampant	795	1	1	1	1		1				2	169	map-glob-add-mon-shriek		1169	1169	map-glob-density		25	30	map-play-mag-gold%		20	30			t1m	t2m	t3m					t4m							0
of Sturdiness	921	1	1		1		1				18	157	map-mon-ac%		75	150	map-play-addxp		6	8	map-play-mag-gold%		20	30			t1m	t2m													0
of Stability	922	1	1		1		1				18	157	map-mon-ac%		150	225	map-play-addxp		8	10	map-play-mag-gold%		50	60			t2m	t3m													0
of Vigor	923	1	1		1		1				18	157	map-mon-ac%		225	300	map-play-addxp		10	12	map-play-mag-gold%		80	90			t3m	t4m													0
of Crimson	924	1	1		1		1				18	158	map-mon-abs-fire%		6	9	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
of Crimson	925	1	1		1		1				18	158	map-mon-abs-fire%		9	12	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
of Crimson	926	1	1		1		1				18	158	map-mon-abs-fire%		12	15	map-glob-density		46	50	map-play-addxp		10	12			t3m	t4m													0
of Tangerine	927	1	1		1		1				18	159	map-mon-abs-ltng%		6	9	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
of Tangerine	928	1	1		1		1				18	159	map-mon-abs-ltng%		9	12	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
of Tangerine	929	1	1		1		1				18	159	map-mon-abs-ltng%		12	15	map-glob-density		40	50	map-play-addxp		10	12			t3m	t4m													0
of Opal	930	1	1		1		1				18	160	map-mon-abs-mag%		6	9	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
of Opal	931	1	1		1		1				18	160	map-mon-abs-mag%		9	12	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
of Opal	932	1	1		1		1				18	160	map-mon-abs-mag%		12	15	map-glob-density		40	50	map-play-addxp		10	12			t3m	t4m													0
of Azure	933	1	1		1		1				18	161	map-mon-abs-cold%		6	9	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
of Azure	934	1	1		1		1				18	161	map-mon-abs-cold%		9	12	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
of Azure	935	1	1		1		1				18	161	map-mon-abs-cold%		12	15	map-glob-density		36	50	map-play-addxp		10	12			t3m	t4m													0
of Protection	936	1	1		1		1				18	306	map-mon-red-dmg		150	300	map-glob-density		26	30	map-play-mag-gold%		30	40			t1m	t2m													0
of Security	937	1	1		1		1				18	306	map-mon-red-dmg		450	600	map-glob-density		30	36	map-play-mag-gold%		60	70			t2m	t3m													0
of Safety	938	1	1		1		1				18	306	map-mon-red-dmg		750	900	map-glob-density		36	46	map-play-mag-gold%		90	100			t3m	t4m													0
of Swiftness	939	1	1		1		1				18	307	map-mon-velocity%		30	45	map-glob-density		30	40	map-play-addxp		6	8			t1m	t2m													0
of Quickness	940	1	1		1		1				18	307	map-mon-velocity%		45	60	map-glob-density		40	50	map-play-addxp		8	10			t2m	t3m													0
of Velocity	941	1	1		1		1				18	307	map-mon-velocity%		60	75	map-glob-density		50	60	map-play-addxp		10	12			t3m	t4m													0
of Regeneration	942	1	1		1		1				18	308	map-mon-regen		1536	2340	map-play-addxp		6	8	map-play-mag-gold%		40	50			t1m	t2m													0
of Renewal	943	1	1		1		1				18	308	map-mon-regen		2340	3072	map-play-addxp		8	10	map-play-mag-gold%		70	80			t2m	t3m													0
of Rebirth	944	1	1		1		1				18	308	map-mon-regen		3072	3840	map-play-addxp		10	12	map-play-mag-gold%		100	110			t3m	t4m													0
of the Leech	945	1	1		1		1				18	309	map-mon-lifesteal-hp%		8	16	map-glob-density		26	30	map-play-addxp		10	12			t1m	t2m													0
of the Parasite	946	1	1		1		1				18	309	map-mon-lifesteal-hp%		16	24	map-glob-density		30	40	map-play-addxp		12	14			t2m	t3m													0
of the Bloodsucker	947	1	1		1		1				18	309	map-mon-lifesteal-hp%		24	32	map-glob-density		36	40	map-play-addxp		14	16			t3m	t4m													0
of Resilience	948	1	1		1		1				18	310	map-mon-balance1		60	90	map-glob-density		30	40	map-play-mag-gold%		20	30			t1m	t2m													0
of Hardiness	949	1	1		1		1				18	310	map-mon-balance1		90	120	map-glob-density		40	50	map-play-mag-gold%		50	60			t2m	t3m													0
of Fortitude	950	1	1		1		1				18	310	map-mon-balance1		120	150	map-glob-density		50	60	map-play-mag-gold%		80	90			t3m	t4m													0
of Health	951	1	1		1		1				9	316	map-mon-hp%		10	20	map-glob-density		30	40	map-play-addxp		12	16			t1m	t2m													0
of Vitality	952	1	1		1		1				9	316	map-mon-hp%		20	30	map-glob-density		40	50	map-play-addxp		16	20			t2m	t3m													0
of Vim	953	1	1		1		1				9	316	map-mon-hp%		30	40	map-glob-density		50	60	map-play-addxp		20	24			t3m	t4m													0
of Imbalance	954	1	1		1		1				18	313	map-play-balance1		-30	-15	map-glob-density		30	40	map-play-addxp		6	8			t1m	t2m													0
of Inequality	955	1	1		1		1				18	313	map-play-balance1		-45	-30	map-glob-density		40	50	map-play-addxp		8	10			t2m	t3m													0
of Uneveness	956	1	1		1		1				18	313	map-play-balance1		-60	-45	map-glob-density		50	60	map-play-addxp		10	12			t3m	t4m													0
of Warding	957	1	1		1		1				18	164	map-mon-curseresist-hp%		30	60	map-play-addxp		10	12	map-play-mag-gold%		40	50			t1m	t2m													0
of Guarding	958	1	1		1		1				18	164	map-mon-curseresist-hp%		60	90	map-play-addxp		12	14	map-play-mag-gold%		70	80			t2m	t3m													0
of Preservation	959	1	1		1		1				18	164	map-mon-curseresist-hp%		90	120	map-play-addxp		14	16	map-play-mag-gold%		100	110			t3m														0
of Hindrance	960	1	1		1		1				18	166	map-play-res-all		-23	-15	map-play-addxp		8	10	map-play-mag-gold%		30	40			t1m	t2m													0
of Aversion	961	1	1		1		1				18	166	map-play-res-all		-30	-23	map-play-addxp		10	12	map-play-mag-gold%		60	70			t2m	t3m													0
of Permeability	962	1	1		1		1				18	166	map-play-res-all		-38	-30	map-play-addxp		12	14	map-play-mag-gold%		100	110			t3m	t4m													0
of Cracking	963	1	1		1		1				18	165	map-play-ac%		-45	-30	map-glob-density		26	36	map-play-mag-gold%		30	40			t1m	t2m													0
of Crumbling	964	1	1		1		1				18	165	map-play-ac%		-60	-45	map-glob-density		30	36	map-play-mag-gold%		60	70			t2m	t3m													0
of Disintegration	965	1	1		1		1				18	165	map-play-ac%		-75	-60	map-glob-density		36	40	map-play-mag-gold%		90	100			t3m	t4m													0
of Fumbling	966	1	1		1		1				18	314	map-play-block		-30	-15	map-glob-density		26	36	map-play-mag-gold%		30	40			t1m	t2m													0
of Bumbling	967	1	1		1		1				18	314	map-play-block		-45	-30	map-glob-density		36	46	map-play-mag-gold%		60	70			t2m	t3m													0
of Blundering	968	1	1		1		1				18	314	map-play-block		-60	-45	map-glob-density		46	50	map-play-mag-gold%		80	100			t3m	t4m													0
of the Smith	969	1	1		1		1				9	318	map-mon-dropweapons		2	2											t1m	t2m													0
of the Smith	970	1	1		1		1				9	318	map-mon-dropweapons		4	4											t2m	t3m													0
of the Smith	971	1	1		1		1				9	318	map-mon-dropweapons		6	6											t3m														0
of the Armorer	972	1	1		1		1				9	318	map-mon-droparmor		2	2											t1m	t2m													0
of the Armorer	973	1	1		1		1				9	318	map-mon-droparmor		4	4											t2m	t3m													0
of the Armorer	974	1	1		1		1				9	318	map-mon-droparmor		6	6											t3m														0
of the Crafter	975	1	1		1		1				5	318	map-mon-dropcrafting		2	2											t1m	t2m													0
of the Crafter	976	1	1		1		1				5	318	map-mon-dropcrafting		4	4											t2m	t3m													0
of the Crafter	977	1	1		1		1				5	318	map-mon-dropcrafting		6	6											t3m														0
of the Jeweler	837				1		1				1	319	map-mon-dropjewelry		1	1											t1m	t2m													0
of the Jeweler	838				1		1				1	319	map-mon-dropjewelry		2	2											t2m	t3m													0
of the Jeweler	839				1		1				1	319	map-mon-dropjewelry		3	3											t3m														0
of the Smith	840	1	1	1	1		1				2	318	map-mon-dropweapons		1	1											t1m	t2m													0
of the Smith	841	1	1	1	1		1				2	318	map-mon-dropweapons		2	2											t2m	t3m													0
of the Smith	842	1	1	1	1		1				2	318	map-mon-dropweapons		3	3											t3m														0
of the Armorer	843	1	1	1	1		1				2	318	map-mon-droparmor		1	1											t1m	t2m													0
of the Armorer	844	1	1	1	1		1				2	318	map-mon-droparmor		2	2											t2m	t3m													0
of the Armorer	845	1	1	1	1		1				2	318	map-mon-droparmor		3	3											t3m														0
of the Crafter	846	1	1	1	1		1				1	318	map-mon-dropcrafting		1	1											t1m	t2m													0
of the Crafter	847	1	1	1	1		1				1	318	map-mon-dropcrafting		2	2											t2m	t3m													0
of the Crafter	848	1	1	1	1		1				1	318	map-mon-dropcrafting		3	3											t3m														0
of Darkness	829	1			1		1					317	map-play-lightradius		-100	-80	map-glob-density		5	8	map-play-mag-gold%		15	20			t1m	t2m													0
of Darkness	830	1			1		1					317	map-play-lightradius		-140	-100	map-glob-density		8	10	map-play-mag-gold%		25	30			t2m	t3m													0
of Darkness	831	1			1		1					317	map-play-lightradius		-180	-140	map-glob-density		10	13	map-play-mag-gold%		35	40			t3m	t4m													0
of Sturdiness	749	1	1	1	1		1				4	157	map-mon-ac%		50	100	map-play-addxp		3	4	map-play-mag-gold%		10	15			t1m	t2m													0
of Stability	750	1	1	1	1		1				4	157	map-mon-ac%		100	150	map-play-addxp		4	5	map-play-mag-gold%		25	30			t2m	t3m													0
of Vigor	751	1	1	1	1		1				4	157	map-mon-ac%		150	200	map-play-addxp		5	6	map-play-mag-gold%		40	45			t3m	t4m													0
of Crimson	752	1	1	1	1		1				4	158	map-mon-abs-fire%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
of Crimson	753	1	1	1	1		1				4	158	map-mon-abs-fire%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Crimson	754	1	1	1	1		1				4	158	map-mon-abs-fire%		8	10	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
of Tangerine	755	1	1	1	1		1				4	159	map-mon-abs-ltng%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
of Tangerine	756	1	1	1	1		1				4	159	map-mon-abs-ltng%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Tangerine	757	1	1	1	1		1				4	159	map-mon-abs-ltng%		8	10	map-glob-density		20	25	map-play-addxp		5	6			t3m	t4m													0
of Opal	758	1	1	1	1		1				4	160	map-mon-abs-mag%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
of Opal	759	1	1	1	1		1				4	160	map-mon-abs-mag%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Opal	760	1	1	1	1		1				4	160	map-mon-abs-mag%		8	10	map-glob-density		20	25	map-play-addxp		5	6			t3m	t4m													0
of Azure	761	1	1	1	1		1				4	161	map-mon-abs-cold%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
of Azure	762	1	1	1	1		1				4	161	map-mon-abs-cold%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Azure	763	1	1	1	1		1				4	161	map-mon-abs-cold%		8	10	map-glob-density		18	25	map-play-addxp		5	6			t3m	t4m													0
of Protection	764	1	1	1	1		1				4	306	map-mon-red-dmg		100	200	map-glob-density		13	15	map-play-mag-gold%		15	20			t1m	t2m													0
of Security	765	1	1	1	1		1				4	306	map-mon-red-dmg		300	400	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
of Safety	766	1	1	1	1		1				4	306	map-mon-red-dmg		500	600	map-glob-density		18	23	map-play-mag-gold%		45	50			t3m	t4m													0
of Swiftness	767	1	1	1	1		1				4	307	map-mon-velocity%		20	30	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m													0
of Quickness	768	1	1	1	1		1				4	307	map-mon-velocity%		30	40	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
of Velocity	769	1	1	1	1		1				4	307	map-mon-velocity%		40	50	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
of Regeneration	770	1	1	1	1		1				4	308	map-mon-regen		1024	1560	map-play-addxp		3	4	map-play-mag-gold%		20	25			t1m	t2m													0
of Renewal	771	1	1	1	1		1				4	308	map-mon-regen		1560	2048	map-play-addxp		4	5	map-play-mag-gold%		35	40			t2m	t3m													0
of Rebirth	772	1	1	1	1		1				4	308	map-mon-regen		2048	2560	map-play-addxp		5	6	map-play-mag-gold%		50	55			t3m	t4m													0
of the Leech	773	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		4	8	map-glob-density		13	15	map-play-addxp		5	6			t1m	t2m													0
of the Parasite	774	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		8	12	map-glob-density		15	20	map-play-addxp		6	7			t2m	t3m													0
of the Bloodsucker	775	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		12	16	map-glob-density		18	20	map-play-addxp		7	8			t3m	t4m													0
of Resilience	776	1	1	1	1		1				4	310	map-mon-balance1		40	60	map-glob-density		15	20	map-play-mag-gold%		10	15			t1m	t2m													0
of Hardiness	777	1	1	1	1		1				4	310	map-mon-balance1		60	80	map-glob-density		20	25	map-play-mag-gold%		25	30			t2m	t3m													0
of Fortitude	778	1	1	1	1		1				4	310	map-mon-balance1		80	100	map-glob-density		25	30	map-play-mag-gold%		40	45			t3m	t4m													0
of Health	779	1	1	1	1		1				2	316	map-mon-hp%		5	10	map-glob-density		15	20	map-play-addxp		6	8			t1m	t2m													0
of Vitality	780	1	1	1	1		1				2	316	map-mon-hp%		10	15	map-glob-density		20	25	map-play-addxp		8	10			t2m	t3m													0
of Vim	781	1	1	1	1		1				2	316	map-mon-hp%		15	20	map-glob-density		25	30	map-play-addxp		10	12			t3m	t4m													0
of Imbalance	782	1	1	1	1		1				4	313	map-play-balance1		-20	-10	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m													0
of Inequality	783	1	1	1	1		1				4	313	map-play-balance1		-30	-20	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
of Uneveness	784	1	1	1	1		1				4	313	map-play-balance1		-40	-30	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
of Warding	785	1	1	1	1		1				4	164	map-mon-curseresist-hp%		20	40	map-play-addxp		5	6	map-play-mag-gold%		20	25			t1m	t2m													0
of Guarding	786	1	1	1	1		1				4	164	map-mon-curseresist-hp%		40	60	map-play-addxp		6	7	map-play-mag-gold%		35	40			t2m	t3m													0
of Preservation	787	1	1	1	1		1				4	164	map-mon-curseresist-hp%		60	80	map-play-addxp		7	8	map-play-mag-gold%		50	55			t3m														0
of Hindrance	788	1	1	1	1		1				4	166	map-play-res-all		-15	-10	map-play-addxp		4	5	map-play-mag-gold%		15	20			t1m	t2m													0
of Aversion	789	1	1	1	1		1				4	166	map-play-res-all		-20	-15	map-play-addxp		5	6	map-play-mag-gold%		30	35			t2m	t3m													0
of Permeability	790	1	1	1	1		1				4	166	map-play-res-all		-25	-20	map-play-addxp		6	7	map-play-mag-gold%		50	55			t3m	t4m													0
of Cracking	791	1	1	1	1		1				4	165	map-play-ac%		-30	-20	map-glob-density		13	18	map-play-mag-gold%		15	20			t1m	t2m													0
of Crumbling	792	1	1	1	1		1				4	165	map-play-ac%		-40	-30	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
of Disintegration	793	1	1	1	1		1				4	165	map-play-ac%		-50	-40	map-glob-density		18	20	map-play-mag-gold%		45	50			t3m	t4m													0
of Fumbling	794	1	1	1	1		1				4	314	map-play-block		-20	-10	map-glob-density		13	18	map-play-mag-gold%		15	20			t1m	t2m													0
of Bumbling	795	1	1	1	1		1				4	314	map-play-block		-30	-20	map-glob-density		18	23	map-play-mag-gold%		30	35			t2m	t3m													0
of Blundering	796	1	1	1	1		1				4	314	map-play-block		-40	-30	map-glob-density		23	25	map-play-mag-gold%		40	50			t3m	t4m													0
`;
  suffixRaw = `Name	*comment	version	spawnable	rare	level	maxlevel	levelreq	classspecific	class	classlevelreq	frequency	group	mod1code	mod1param	mod1min	mod1max	mod2code	mod2param	mod2min	mod2max	mod3code	mod3param	mod3min	mod3max	transform	transformcolor	itype1	itype2	itype3	itype4	itype5	itype6	itype7	etype1	etype2	etype3	etype4	etype5	divide	multiply	add
Sturdy		1	1	1	1		1				100	10001	ac%		6	10											lcha														0
Strong		1	1	1	15		10				100	10001	ac%		11	15											lcha														0
Glorious		1	1	1	25		20				100	10001	ac%		16	20											lcha														0
Blessed		1	1	1	40		35				100	10001	ac%		21	25											lcha														0
Saintly		1	1	1	60		55				100	10001	ac%		26	30											lcha														0
Empowering		1	1	1	1		1				100	10002	dmg%		4	6											scha														0
Empowering		1	1	1	1		1				100	10002	dmg%		7	10											mcha														0
Empowering		1	1	1	1		1				100	10002	dmg%		11	15											lcha														0
Empowering		1	1	1	1		1				100	10002	dmg%		20	45											jewl														0
Jagged		1	1	1	1		1				100	10002	dmg%		20	30											amul	glov	helm	ring	belt	misl									0
Deadly		1	1	1	10		5				100	10002	dmg%		31	40											amul	glov	helm	ring	belt	misl									0
Vicious		1	1	1	17		10				100	10002	dmg%		41	50											amul	glov	helm	ring	belt	misl									0
Brutal		1	1	1	24		15				100	10002	dmg%		51	75											amul	glov	helm	misl											0
Massive		1	1	1	31		20				100	10002	dmg%		50	100											tors	shld													0
Brutal		1	1	1	38		25				100	10002	dmg%		101	150											tors	shld													0
Massive		1	1	1	45		30				100	10002	dmg%		151	200											tors	shld													0
Massive		1	1	1	1		1				200	10002	dmg%		50	100											weap														0
Brutal		1	1	1	20		15				200	10002	dmg%		101	150											weap														0
Massive		1	1	1	30		20				200	10002	dmg%		151	200											weap														0
Brutal		1	1	1	40		25				200	10002	dmg%		201	250											weap														0
Massive		1	1	1	50		30				100	10002	dmg%		251	300											weap														0
Savage		1	1	1	60		35				50	10002	dmg%		301	350											weap														0
Savage		1	1	1	70		40				20	10002	dmg%		351	400											weap														0
Savage		1	1	1	80		45				10	10002	dmg%		401	450											weap														0
Savage		1	1	1	80		50				5	10002	dmg%		451	500											weap														0
Red		1	1	1	1		1				100	10003	dmg-min		1	5											scha	lcha	gcha												0
Red		1	1	1	30		15				100	10003	dmg-min		6	9											lcha	gcha													0
Red		1	1	1	60		30				100	10003	dmg-min		10	15											gcha														0
Red		1	1	1	1		1				100	10003	dmg-min		3	6											amul	ring	glov	helm	weap	jewl	misl								0
Red		1	1	1	1		1				100	10003	dmg-min		3	6											belt	boot													0
Sanguinary		1	1	1	15		10				100	10003	dmg-min		7	12											amul	ring	glov	helm	weap	jewl	misl								0
Sanguinary		1	1	1	15		10				100	10003	dmg-min		7	12											belt	boot													0
Bloody		1	1	1	30		20				100	10003	dmg-min		13	18											amul	ring	glov	helm	weap	jewl	misl								0
Bloody		1	1	1	30		20				100	10003	dmg-min		13	18											belt	boot													0
Scarlet		1	1	1	50		35				100	10003	dmg-min		19	25											amul	glov	helm	weap	misl										0
Scarlet		1	1	1	70		45				100	10003	dmg-min		26	50											weap	misl													0
Jagged		1	1	1	1		1				100	10004	dmg-max		1	5											scha	lcha	gcha												0
Jagged		1	1	1	30		15				100	10004	dmg-max		6	9											lcha	gcha													0
Jagged		1	1	1	60		30				100	10004	dmg-max		10	15											gcha														0
Jagged		1	1	1	1		1				100	10004	dmg-max		3	6											amul	ring	glov	helm	weap	jewl	misl								0
Jagged		1	1	1	1		1				100	10004	dmg-max		3	6											belt	boot													0
Forked		1	1	1	15		10				100	10004	dmg-max		7	12											amul	ring	glov	helm	weap	jewl	misl								0
Forked		1	1	1	15		10				100	10004	dmg-max		7	12											belt	boot													0
Serrated		1	1	1	30		20				100	10004	dmg-max		13	18											amul	ring	glov	helm	weap	jewl	misl								0
Serrated		1	1	1	30		20				100	10004	dmg-max		13	18											belt	boot													0
Vermillion		1	1	1	50		35				100	10004	dmg-max		19	25											amul	glov	helm	weap	misl										0
Vermillion		1	1	1	70		45				100	10004	dmg-max		26	50											weap	misl													0
Rookie’s		1	1	1	1		1				100	10005	addxp		1	2											scha	mcha	lcha	jewl	ring	amul	belt								0
Rookie’s		1	1	1	1		1				100	10005	addxp		1	2											boot	glov	misl	helm	tors	shld	weap								0
Student’s		1	1	1	15		1				100	10005	addxp		3	5											scha	mcha	lcha	jewl	ring	amul	belt								0
Student’s		1	1	1	15		1				100	10005	addxp		3	5											boot	glov	misl	helm	tors	shld	weap								0
Scholar’s		1	1	1	25		10				100	10005	addxp		6	8											boot	glov	misl	helm	tors	shld	weap								0
Lucky		1	1	1	1		1				100	10006	mag%		4	7											scha	mcha	lcha	jewl											0
Lucky		1	1	1	20		15				100	10006	mag%		8	14											mcha	lcha	jewl												0
Lucky		1	1	1	35		30				100	10006	mag%		15	21											lcha	jewl													0
Lucky		1	1	1	50		35				100	10006	mag%		22	30											jewl														0
Lucky		1	1	1	1		1				100	10006	mag%		15	25											amul	ring	boot	glov	helm	tors	shld								0
Lucky		1	1	1	1		1				100	10006	mag%		15	25											belt	weap	misl												0
Lucky		1	1	1	20		15				100	10006	mag%		26	35											amul	ring	boot	glov	helm	tors	shld								0
Lucky		1	1	1	20		15				100	10006	mag%		26	35											belt	weap	misl												0
Lucky		1	1	1	35		30				100	10006	mag%		36	45											amul	ring	boot	glov	helm	tors	shld								0
Lucky		1	1	1	35		30				100	10006	mag%		36	45											belt	weap	misl												0
Bronze		1	1	1	1		1				100	10007	att		25	50											weap	amul	ring	glov	belt	helm	tors								0
Bronze		1	1	1	1		1				100	10007	att		25	50											shld	misl	scha	mcha	lcha	jewl									0
Iron		1	1	1	12		5				100	10007	att		51	75											weap	amul	ring	glov	belt	helm	tors								0
Iron		1	1	1	12		5				100	10007	att		51	75											shld	misl	mcha	lcha	jewl										0
Steel		1	1	1	24		10				100	10007	att		76	100											weap	amul	ring	glov	belt	helm	tors								0
Steel		1	1	1	24		10				100	10007	att		76	100											shld	misl	mcha	lcha	jewl										0
Silver		1	1	1	36		15				100	10007	att		101	150											weap	amul	ring	glov	belt	helm	tors								0
Silver		1	1	1	36		15				100	10007	att		101	150											shld	misl	lcha	jewl											0
Silver		1	1	1	48		20				100	10007	att		151	250											weap	jewl													0
Gold		1	1	1	60		30				50	10007	att		251	400											weap														0
Platinum		1	1	1	70		40				20	10007	att		401	600											weap														0
Meteoric		1	1	1	80		50				10	10007	att		601	900											weap														0
Greedy		1	1	1	1		1				100	10008	gold%		20	40											scha	mcha	lcha	jewl	ring	amul	belt								0
Greedy		1	1	1	1		1				100	10008	gold%		20	40											boot	glov	misl	helm	tors	shld	weap								0
Greedy		1	1	1	20		15				100	10008	gold%		41	60											scha	mcha	lcha	jewl	ring	amul	belt								0
Greedy		1	1	1	20		15				100	10008	gold%		41	60											boot	glov	misl	helm	tors	shld	weap								0
Greedy		1	1	1	35		30				100	10008	gold%		61	80											mcha	lcha	jewl	ring	amul	belt									0
Greedy		1	1	1	35		30				100	10008	gold%		61	80											boot	glov	misl	helm	tors	shld	weap								0
Greedy		1	1	1	50		40				100	10008	gold%		81	120											mcha	lcha	jewl	ring	amul	belt									0
Greedy		1	1	1	50		40				100	10008	gold%		81	120											boot	glov	misl	helm	tors	shld	weap								0
Tangerine		1	1	1	1		1				100	10009	res-ltng		5	10											scha														0
Tangerine		1	1	1	1		1				100	10009	res-ltng		10	20											amul	ring	boot	glov	helm	tors	shld								0
Tangerine		1	1	1	1		1				100	10009	res-ltng		10	20											belt	gcha	lcha	jewl	misl										0
Ocher		1	1	1	25		20				100	10009	res-ltng		21	30											amul	ring	boot	glov	helm	tors	shld								0
Ocher		1	1	1	25		20				100	10009	res-ltng		21	30											belt	lcha	jewl	misl											0
Coral		1	1	1	45		40				100	10009	res-ltng		31	40											amul	ring	boot	glov	helm	tors	shld								0
Coral		1	1	1	45		40				100	10009	res-ltng		31	40											belt	jewl	misl												0
Amber		1	1	1	65		60				100	10009	res-ltng		41	50											amul	boot	glov	helm	tors	shld	belt								0
Amber		1	1	1	65		60				100	10010	res-cold		41	50											misl														0
Azure		1	1	1	1		1				100	10010	res-cold		5	10											scha														0
Azure		1	1	1	1		1				100	10010	res-cold		10	20											amul	ring	boot	glov	helm	tors	shld								0
Azure		1	1	1	1		1				100	10010	res-cold		10	20											belt	gcha	lcha	jewl	misl										0
Lapis		1	1	1	25		20				100	10010	res-cold		21	30											amul	ring	boot	glov	helm	tors	shld								0
Lapis		1	1	1	25		20				100	10010	res-cold		21	30											belt	lcha	jewl	misl											0
Cobalt		1	1	1	45		40				100	10010	res-cold		31	40											amul	ring	boot	glov	helm	tors	shld								0
Cobalt		1	1	1	45		40				100	10010	res-cold		31	40											belt	jewl	misl												0
Sapphire		1	1	1	65		60				100	10010	res-cold		41	50											amul	boot	glov	helm	tors	shld	belt								0
Sapphire		1	1	1	65		60				100	10010	res-cold		41	50											misl														0
Crimson		1	1	1	1		1				100	10011	res-fire		5	10											scha														0
Crimson		1	1	1	1		1				100	10011	res-fire		10	20											amul	ring	boot	glov	helm	tors	shld								0
Crimson		1	1	1	1		1				100	10011	res-fire		10	20											belt	gcha	lcha	jewl	misl										0
Burgundy		1	1	1	25		20				100	10011	res-fire		21	30											amul	ring	boot	glov	helm	tors	shld								0
Burgundy		1	1	1	25		20				100	10011	res-fire		21	30											belt	lcha	jewl	misl											0
Garnet		1	1	1	45		40				100	10011	res-fire		31	40											amul	ring	boot	glov	helm	tors	shld								0
Garnet		1	1	1	45		40				100	10011	res-fire		31	40											belt	jewl	misl												0
Ruby		1	1	1	65		60				100	10011	res-fire		41	50											amul	boot	glov	helm	tors	shld	belt								0
Ruby		1	1	1	65		60				100	10011	res-fire		41	50											misl														0
Beryl		1	1	1	1		1				100	10012	res-pois		5	10											scha														0
Beryl		1	1	1	1		1				100	10012	res-pois		10	20											amul	ring	boot	glov	helm	tors	shld								0
Beryl		1	1	1	1		1				100	10012	res-pois		10	20											belt	gcha	lcha	jewl	misl										0
Jade		1	1	1	25		20				100	10012	res-pois		21	30											amul	ring	boot	glov	helm	tors	shld								0
Jade		1	1	1	25		20				100	10012	res-pois		21	30											belt	lcha	jewl	misl											0
Viridian		1	1	1	45		40				100	10012	res-pois		31	40											amul	ring	boot	glov	helm	tors	shld								0
Viridian		1	1	1	45		40				100	10012	res-pois		31	40											belt	jewl	misl												0
Emerald		1	1	1	65		60				100	10012	res-pois		41	50											amul	boot	glov	helm	tors	shld	belt								0
Emerald		1	1	1	65		60				100	10012	res-pois		41	50											misl														0
Prismatic		1	1	1	1		1				100	10013	res-all		2	4											scha														0
Prismatic		1	1	1	1		1				100	10013	res-all		5	7											amul	ring	boot	glov	helm	tors	shld								0
Prismatic		1	1	1	1		1				100	10013	res-all		5	7											belt	gcha	lcha	jewl	misl										0
Prismatic		1	1	1	25		20				100	10013	res-all		8	10											amul	ring	boot	glov	helm	tors	shld								0
Prismatic		1	1	1	25		20				100	10013	res-all		8	10											belt	lcha	jewl	misl											0
Prismatic		1	1	1	45		40				100	10013	res-all		11	13											amul	ring	boot	glov	helm	tors	shld								0
Prismatic		1	1	1	45		40				100	10013	res-all		11	13											belt	jewl	misl												0
Prismatic		1	1	1	65		60				100	10013	res-all		14	16											amul	boot	glov	helm	tors	shld	belt								0
Prismatic		1	1	1	65		60				100	10013	res-all		14	16											misl														0
Tank’s		1	1	1	25		20				100	10014	hp%		1	2											scha	mcha	lcha	jewl	ring	amul	belt								0
Tank’s		1	1	1	35		25				100	10014	hp%		1	2											boot	glov	misl	helm	tors	shld									0
Tank’s		1	1	1	45		30				100	10014	hp%		3	4											lcha	jewl	ring	amul	belt	boot	glov								0
Tank’s		1	1	1	55		35				100	10014	hp%		3	4											misl	helm	tors	shld											0
Tank’s		1	1	1	65		40				100	10014	hp%		5	6											amul	belt	boot	glov	helm	tors	shld								0
Tank’s		1	1	1	75		45				100	10014	hp%		7	8											amul	belt	boot	glov	helm	tors	shld								0
Tank’s		1	1	1	85		50				100	10014	hp%		9	10											belt	tors	shld												0
Life’s		1	1	1	1		1				100	10015	hp		10	25											amul	belt	boot	glov	helm	tors	shld								0
Jackal’s		1	1	1	15		10				100	10015	hp		26	40											amul	belt	boot	glov	helm	tors	shld								0
Fox’s		1	1	1	25		20				100	10015	hp		41	55											amul	belt	boot	glov	helm	tors	shld								0
Wolf’s		1	1	1	35		30				100	10015	hp		56	70											amul	belt	boot	glov	helm	tors	shld								0
Tiger’s		1	1	1	45		40				100	10015	hp		71	85											amul	belt	boot	glov	helm	tors	shld								0
Mammoth’s		1	1	1	55		50				100	10015	hp		86	100											amul	belt	boot	glov	helm	tors	shld								0
Colosuss’s		1	1	1	65		60				100	10015	hp		101	115											belt	tors	shld												0
Whale’s		1	1	1	75		70				100	10015	hp		116	130											belt	tors	shld												0
Life’s		1	1	1	1		1				100	10015	hp		10	20											ring	jewl	misl	scha	mcha	lcha									0
Jackal’s		1	1	1	25		15				100	10015	hp		21	30											ring	jewl	misl	mcha	lcha										0
Fox’s		1	1	1	50		30				100	10015	hp		31	40											ring	jewl	misl	mcha	lcha										0
Wolf’s		1	1	1	75		45				100	10015	hp		41	50											ring	jewl	misl	lcha											0
Lizard's		1	1	1	1		1				100	10016	mana		10	15											scha	mcha	lcha	jewl	ring	amul	belt								0
Lizard's		1	1	1	1		1				100	10016	mana		10	15											boot	glov	misl	helm	tors	shld									0
Snake's		1	1	1	15		10				100	10016	mana		16	30											scha	mcha	lcha	jewl	ring	amul	belt								0
Snake's		1	1	1	15		10				100	10016	mana		16	30											boot	glov	misl	helm	tors	shld									0
Serpent's		1	1	1	25		20				100	10016	mana		31	45											mcha	lcha	jewl	ring	amul	belt	boot								0
Serpent's		1	1	1	25		20				100	10016	mana		31	45											glov	misl	helm	tors	shld										0
Drake's		1	1	1	35		30				100	10016	mana		46	60											mcha	lcha	jewl	ring	amul	belt	boot								0
Drake's		1	1	1	35		30				100	10016	mana		46	60											glov	misl	helm	tors	shld										0
Dragon's		1	1	1	45		40				100	10016	mana		61	75											lcha	jewl	ring	amul	belt	boot	glov								0
Dragon's		1	1	1	45		40				100	10016	mana		61	75											misl	helm	tors	shld											0
Wyrm's		1	1	1	55		50				100	10016	mana		76	100											lcha	jewl	ring	amul	belt	boot	glov								0
Wyrm's		1	1	1	55		50				100	10016	mana		76	100											misl	helm	tors	shld											0
Great Wyrm's		1	1	1	65		60				100	10016	mana		101	120											lcha	jewl	ring	amul	belt	boot	glov								0
Great Wyrm's		1	1	1	65		60				100	10016	mana		101	120											misl	helm	tors	shld											0
Balancing		1	1	1	1		1				100	10017	balance1		8	14											lcha	mcha	boot	glov	helm	tors	shld								0
Balancing		1	1	1	1		1				100	10017	balance1		8	14											belt														0
Stable		1	1	1	20		10				100	10017	balance1		15	22											lcha	boot	glov	helm	tors	shld	belt								0
Stable		1	1	1	40		20				100	10017	balance1		23	30											boot	glov	helm	tors	shld	belt									0
Pacing		1	1	1	1		1				100	10018	move2		5	10											lcha	shld	belt	ring	amul	misl	tors								0
Pacing		1	1	1	1		1				200	10018	move2		5	10											boot														0
Pacing		1	1	1	10		5				100	10018	move2		11	20											lcha	shld	belt	ring	amul	misl	tors								0
Pacing		1	1	1	10		5				200	10018	move2		11	20											boot														0
Haste		1	1	1	20		10				100	10018	move2		21	30											amul														0
Haste		1	1	1	20		10				200	10018	move2		21	30											boot														0
Haste		1	1	1	30		15				200	10018	move2		31	40											boot														0
Haste		1	1	1	40		20				200	10018	move2		41	50											boot														0
Apprentice’s		1	1	1	1		1				100	10019	cast1		2	3											lcha	mcha	jewl												0
Magus’s		1	1	1	25		20				100	10019	cast1		4	5											lcha	jewl													0
Apprentice’s		1	1	1	1		1				100	10019	cast1		6	15											ring	amul	belt	glov	helm	tors	shld								0
Apprentice’s		1	1	1	1		1				100	10019	cast1		6	15											ring	amul	belt	glov	helm	tors	shld								0
Magus’s		1	1	1	30		20				100	10019	cast1		16	25											amul	belt	glov	helm	tors	shld									0
Magus’s		1	1	1	30		20				100	10019	cast1		16	25											amul	belt	glov	helm	tors	shld									0
Magus’s		1	1	1	50		30				100	10019	cast1		26	37											tors	orb	scep	staf	wand	club									0
Magus’s		1	1	1	70		40				100	10019	cast1		38	50											orb	scep	staf	wand	club										0
Fletcher's		1	1	1	30		30				100	10020	skilltab	0	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Acrobat's		1	1	1	30		30				100	10020	skilltab	1	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Harpoonist's		1	1	1	30		30				100	10020	skilltab	2	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Burning		1	1	1	30		30				100	10020	skilltab	3	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Sparking		1	1	1	30		30				100	10020	skilltab	4	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Chilling		1	1	1	30		30				100	10020	skilltab	5	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Hexing		1	1	1	30		30				100	10020	skilltab	6	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Fungal		1	1	1	30		30				100	10020	skilltab	7	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Graverobber's		1	1	1	30		30				100	10020	skilltab	8	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Lion Branded		1	1	1	30		30				100	10020	skilltab	9	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Captain's		1	1	1	30		30				100	10020	skilltab	10	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Preserver's		1	1	1	30		30				100	10020	skilltab	11	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Expert's		1	1	1	30		30				100	10020	skilltab	12	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Fanatic		1	1	1	30		30				100	10020	skilltab	13	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Sounding		1	1	1	30		30				100	10020	skilltab	14	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Trainer's		1	1	1	30		30				100	10020	skilltab	15	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Spiritual		1	1	1	30		30				100	10020	skilltab	16	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Nature's		1	1	1	30		30				100	10020	skilltab	17	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Entrapping		1	1	1	30		30				100	10020	skilltab	18	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Mentalist's		1	1	1	30		30				100	10020	skilltab	19	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Shogukusha's		1	1	1	30		30				100	10020	skilltab	20	1	1											lcha	lchp	belt	glov	boot	helm	shld	phlm	pelt	ashd	head				0
Bowyer's		1	1	1	50		40				100	10020	skilltab	0	1	2											amul	abow	misl												0
Gymnast's		1	1	1	50		40				100	10020	skilltab	1	1	2											amul	ajav	aspe												0
Spearmaiden's		1	1	1	50		40				100	10020	skilltab	2	1	2											amul	ajav	aspe	abow	misl										0
Blazing		1	1	1	50		40				100	10020	skilltab	3	1	2											amul	staf	orb												0
Charged		1	1	1	50		40				100	10020	skilltab	4	1	2											amul	staf	orb												0
Freezing		1	1	1	50		40				100	10020	skilltab	5	1	2											amul	staf	orb												0
Blighting		1	1	1	50		40				100	10020	skilltab	6	1	2											amul	wand	head	knif				tkni							0
Noxious		1	1	1	50		40				100	10020	skilltab	7	1	2											amul	wand	head	knif				tkni							0
Vodoun		1	1	1	50		40				100	10020	skilltab	8	1	2											amul	wand	head	knif				tkni							0
Hawk Branded		1	1	1	50		40				100	10020	skilltab	9	1	2											amul	scep	2hsw	ashd											0
Commander's		1	1	1	50		40				100	10020	skilltab	10	1	2											amul	scep	2hsw	ashd											0
Warder's		1	1	1	50		40				100	10020	skilltab	11	1	2											amul	scep	2hsw	ashd											0
Veteran's		1	1	1	50		40				100	10020	skilltab	12	1	2											amul	phlm													0
Raging		1	1	1	50		40				100	10020	skilltab	13	1	2											amul	phlm													0
Resonant		1	1	1	50		40				100	10020	skilltab	14	1	2											amul	phlm													0
Caretaker's		1	1	1	50		40				100	10020	skilltab	15	1	2											amul	club	pelt												0
Feral		1	1	1	50		40				100	10020	skilltab	16	1	2											amul	club	pelt												0
Terra's		1	1	1	50		40				100	10020	skilltab	17	1	2											amul	club	pelt												0
Trickster's		1	1	1	50		40				100	10020	skilltab	18	1	2											amul	h2h	knif					tkni							0
Psychic		1	1	1	50		40				100	10020	skilltab	19	1	2											amul	h2h	knif					tkni							0
Sensei's		1	1	1	50		40				100	10020	skilltab	20	1	2											amul	h2h	knif					tkni							0
Superior		1	1	1	50		40				100	10020	allskills		1	1											lcha	lchp													0
Superior		1	1	1	60		50				5	10021	allskills		1	1											ring	amul	belt	boot	glov	misl	helm								0
Superior		1	1	1	60		50				5	10021	allskills		1	1											tors	shld	weap												0
Strength		1	1	1	1		1				100	10022	str		4	6											mcha	lcha	ring	amul	belt	glov									0
Ox’s		1	1	1	30		15				100	10022	str		7	12											lcha	ring	amul	belt	glov										0
Ox’s		1	1	1	45		25				100	10022	str		13	20											ring	amul	belt	glov											0
Dexterity		1	1	1	1		1				100	10023	dex		4	6											mcha	lcha	ring	amul	belt	glov									0
Skillful		1	1	1	30		15				100	10023	dex		7	12											lcha	ring	amul	belt	glov										0
Skillful		1	1	1	45		25				100	10023	dex		13	20											ring	amul	belt	glov											0
Ember		1	1	1	1		1				100	10024	fire-min		3	4	fire-max		5	6							scha	mcha													0
Smoldering		1	1	1	30		15				100	10024	fire-min		19	22	fire-max		29	32							scha	mcha													0
Smoking		1	1	1	50		25				100	10024	fire-min		35	40	fire-max		55	60							mcha														0
Ember		1	1	1	1		1				100	10024	fire-min		3	4	fire-max		5	6							lcha	glov	weap	misl	jewl										0
Smoldering		1	1	1	10		5				100	10024	fire-min		19	22	fire-max		29	32							lcha	glov	weap	misl	jewl										0
Smoking		1	1	1	20		10				100	10024	fire-min		35	40	fire-max		55	60							lcha	glov	weap	misl	jewl										0
Flaming		1	1	1	30		15				100	10024	fire-min		80	90	fire-max		120	135							lcha	glov	weap	misl	jewl										0
Scorching		1	1	1	40		20				100	10024	fire-min		300	320	fire-max		370	410							glov	weap	misl												0
Scorching		1	1	1	50		25				100	10024	fire-min		500	600	fire-max		700	800							weap														0
Scorching		1	1	1	50		25				100	10024	fire-min		1200	1400	fire-max		1600	1900							weap														0
Static		1	1	1	1		1				100	10025	ltng-min		1	1	ltng-max		6	10							scha	mcha													0
Glowing		1	1	1	30		15				100	10025	ltng-min		1	1	ltng-max		40	61							scha	mcha													0
Buzzing		1	1	1	50		25				100	10025	ltng-min		1	1	ltng-max		74	104							mcha														0
Static		1	1	1	1		1				100	10025	ltng-min		1	1	ltng-max		6	10							lcha	glov	weap	misl	jewl										0
Glowing		1	1	1	10		5				100	10025	ltng-min		1	1	ltng-max		40	61							lcha	glov	weap	misl	jewl										0
Buzzing		1	1	1	20		10				100	10025	ltng-min		1	1	ltng-max		74	104							lcha	glov	weap	misl	jewl										0
Arcing		1	1	1	30		15				100	10025	ltng-min		1	1	ltng-max		169	254							lcha	glov	weap	misl	jewl										0
Shocking		1	1	1	40		20				100	10025	ltng-min		1	1	ltng-max		619	779							glov	weap	misl												0
Shocking		1	1	1	50		25				100	10025	ltng-min		1	1	ltng-max		1099	1499							weap														0
Shocking		1	1	1	60		30				100	10025	ltng-min		1	1	ltng-max		2599	3499							weap														0
Cold		1	1	1	1		1				100	10026	cold-len		50	50	cold-min		3	4	cold-max		5	6			scha	mcha													0
Snowflake		1	1	1	30		15				100	10026	cold-len		50	50	cold-min		19	22	cold-max		29	32			scha	mcha													0
Shivering		1	1	1	50		25				100	10026	cold-len		50	50	cold-min		35	40	cold-max		55	60			mcha														0
Cold		1	1	1	1		1				100	10026	cold-len		50	50	cold-min		3	4	cold-max		5	6			lcha	glov	weap	misl	jewl										0
Snowflake		1	1	1	10		5				100	10026	cold-len		50	50	cold-min		19	22	cold-max		29	32			lcha	glov	weap	misl	jewl										0
Shivering		1	1	1	20		10				100	10026	cold-len		50	50	cold-min		35	40	cold-max		55	60			lcha	glov	weap	misl	jewl										0
Boreal		1	1	1	30		15				100	10026	cold-len		50	50	cold-min		80	90	cold-max		120	135			lcha	glov	weap	misl	jewl										0
Hibernal		1	1	1	40		20				100	10026	cold-len		50	50	cold-min		300	320	cold-max		370	410			glov	weap	misl												0
Hibernal		1	1	1	50		25				100	10026	cold-len		50	50	cold-min		500	600	cold-max		700	800			weap														0
Hibernal		1	1	1	50		25				100	10026	cold-len		50	50	cold-min		1200	1400	cold-max		1600	1900			weap														0
Conduit		1	1	1	20		10				100	10027	extra-ltng		3	5											mcha	jewl													0
Conduit		1	1	1	50		25				100	10027	extra-ltng		5	10											jewl														0
Conduit		1	1	1	1		1				100	10027	extra-ltng		5	10											ring	amul	boot	glov	helm	tors	shld								0
Conduit		1	1	1	1		1				100	10027	extra-ltng		5	10											belt	weap													0
Conduit		1	1	1	20		10				100	10027	extra-ltng		11	17											ring	amul	boot	glov	helm	tors	shld								0
Conduit		1	1	1	20		10				100	10027	extra-ltng		11	17											belt	weap													0
Conduit		1	1	1	40		20				100	10027	extra-ltng		18	25											ring	amul	boot	glov	helm	tors	shld								0
Conduit		1	1	1	40		20				100	10027	extra-ltng		18	25											belt	weap													0
Conduit		1	1	1	60		30				100	10027	extra-ltng		26	35											amul	tors	weap												0
Conduit		1	1	1	80		40				100	10027	extra-ltng		36	50											weap														0
Numbing		1	1	1	20		10				100	10027	extra-cold		3	5											mcha	jewl													0
Numbing		1	1	1	50		25				100	10027	extra-cold		5	10											jewl														0
Numbing		1	1	1	1		1				100	10027	extra-cold		5	10											ring	amul	boot	glov	helm	tors	shld								0
Numbing		1	1	1	1		1				100	10027	extra-cold		5	10											belt	weap	misl												0
Numbing		1	1	1	20		10				100	10027	extra-cold		11	17											ring	amul	boot	glov	helm	tors	shld								0
Numbing		1	1	1	20		10				100	10027	extra-cold		11	17											belt	weap	misl												0
Numbing		1	1	1	40		20				100	10027	extra-cold		18	25											ring	amul	boot	glov	helm	tors	shld								0
Numbing		1	1	1	40		20				100	10027	extra-cold		18	25											belt	weap	misl												0
Numbing		1	1	1	60		30				100	10027	extra-cold		26	35											amul	tors	weap												0
Numbing		1	1	1	80		40				100	10027	extra-cold		36	50											weap														0
Inferno		1	1	1	20		10				100	10027	extra-fire		3	5											mcha	jewl													0
Inferno		1	1	1	50		25				100	10027	extra-fire		5	10											jewl														0
Inferno		1	1	1	1		1				100	10027	extra-fire		5	10											ring	amul	boot	glov	helm	tors	shld								0
Inferno		1	1	1	1		1				100	10027	extra-fire		5	10											belt	weap	misl												0
Inferno		1	1	1	20		10				100	10027	extra-fire		11	17											ring	amul	boot	glov	helm	tors	shld								0
Inferno		1	1	1	20		10				100	10027	extra-fire		11	17											belt	weap	misl												0
Inferno		1	1	1	40		20				100	10027	extra-fire		18	25											ring	amul	boot	glov	helm	tors	shld								0
Inferno		1	1	1	40		20				100	10027	extra-fire		18	25											belt	weap	misl												0
Inferno		1	1	1	60		30				100	10027	extra-fire		26	35											amul	tors	weap												0
Inferno		1	1	1	80		40				100	10027	extra-fire		36	50											weap														0
Infectious		1	1	1	20		10				100	10027	extra-pois		3	5											mcha	jewl													0
Infectious		1	1	1	50		25				100	10027	extra-pois		5	10											jewl														0
Infectious		1	1	1	1		1				100	10027	extra-pois		5	10											ring	amul	boot	glov	helm	tors	shld								0
Infectious		1	1	1	1		1				100	10027	extra-pois		5	10											belt	weap	misl												0
Infectious		1	1	1	20		10				100	10027	extra-pois		11	17											ring	amul	boot	glov	helm	tors	shld								0
Infectious		1	1	1	20		10				100	10027	extra-pois		11	17											belt	weap	misl												0
Infectious		1	1	1	40		20				100	10027	extra-pois		18	25											ring	amul	boot	glov	helm	tors	shld								0
Infectious		1	1	1	40		20				100	10027	extra-pois		18	25											belt	weap	misl												0
Infectious		1	1	1	60		30				100	10027	extra-pois		26	35											amul	tors	weap												0
Infectious		1	1	1	80		40				100	10027	extra-pois		36	50											weap														0
Scintillating		1	1	1	20		10				100	10027	extra-magi		3	5											mcha	jewl													0
Scintillating		1	1	1	50		25				100	10027	extra-magi		5	10											jewl														0
Scintillating		1	1	1	1		1				100	10027	extra-magi		5	10											ring	amul	boot	glov	helm	tors	shld								0
Scintillating		1	1	1	1		1				100	10027	extra-magi		5	10											belt	weap	misl												0
Scintillating		1	1	1	20		10				100	10027	extra-magi		11	17											ring	amul	boot	glov	helm	tors	shld								0
Scintillating		1	1	1	20		10				100	10027	extra-magi		11	17											belt	weap	misl												0
Scintillating		1	1	1	40		20				100	10027	extra-magi		18	25											ring	amul	boot	glov	helm	tors	shld								0
Scintillating		1	1	1	40		20				100	10027	extra-magi		18	25											belt	weap	misl												0
Scintillating		1	1	1	60		30				100	10027	extra-magi		26	35											amul	tors	weap												0
Scintillating		1	1	1	80		40				100	10027	extra-magi		36	50											weap														0
Discharging		1	1	1	1		1				100	10028	pierce-ltng		1	2											mcha	ring	amul	weap	jewl										0
Discharging		1	1	1	10		5				100	10028	pierce-ltng		3	5											ring	amul	weap	jewl											0
Discharging		1	1	1	30		25				100	10028	pierce-ltng		6	10											ring	amul	weap												0
Discharging		1	1	1	50		45				100	10028	pierce-ltng		11	15											amul	weap													0
Frigid		1	1	1	1		1				100	10028	pierce-cold		1	2											mcha	ring	amul	weap	jewl										0
Frigid		1	1	1	10		5				100	10028	pierce-cold		3	5											ring	amul	weap	jewl											0
Frigid		1	1	1	30		25				100	10028	pierce-cold		6	10											ring	amul	weap												0
Frigid		1	1	1	50		45				100	10028	pierce-cold		11	15											amul	weap													0
Wildfire		1	1	1	1		1				100	10028	pierce-fire		1	2											mcha	ring	amul	weap	jewl										0
Wildfire		1	1	1	10		5				100	10028	pierce-fire		3	5											ring	amul	weap	jewl											0
Wildfire		1	1	1	30		25				100	10028	pierce-fire		6	10											ring	amul	weap												0
Wildfire		1	1	1	50		45				100	10028	pierce-fire		11	15											amul	weap													0
Malicious		1	1	1	1		1				100	10028	pierce-pois		1	2											mcha	ring	amul	weap	jewl										0
Malicious		1	1	1	10		5				100	10028	pierce-pois		3	5											ring	amul	weap	jewl											0
Malicious		1	1	1	30		25				100	10028	pierce-pois		6	10											ring	amul	weap												0
Malicious		1	1	1	50		45				100	10028	pierce-pois		11	15											amul	weap													0
Lethal		1	1	1	1		1				100	10028	pierce-phys		1	2											mcha	ring	amul	weap	jewl										0
Lethal		1	1	1	10		5				100	10028	pierce-phys		3	5											ring	amul	weap	jewl											0
Lethal		1	1	1	30		25				100	10028	pierce-phys		6	10											ring	amul	weap												0
Lethal		1	1	1	50		45				100	10028	pierce-phys		11	15											amul	weap													0
Savage		1	1	1	20		15				100	10029	deadly		5	10											amul	ring	glov	helm	weap										0
Devastating		1	1	1	40		35				100	10029	deadly		11	15											amul	ring	glov	helm	weap										0
Havoc		1	1	1	60		55				100	10029	deadly		16	20											amul	glov	weap												0
Savage		1	1	1	80		65				100	10029	deadly		21	30											weap														0
Swift		1	1	1	1		1				100	10030	swing2		5	10											ring	shld	jewl	amul	weap	glov									0
Swift		1	1	1	1		1				100	10030	swing2		11	15											ring	shld	jewl	amul	weap	glov									0
Swift		1	1	1	20		15				100	10030	swing2		16	25											shld	amul	weap	glov											0
Quick		1	1	1	40		25				100	10030	swing2		26	36											weap														0
Quick		1	1	1	60		35				50	10030	swing2		37	48											weap														0
Quick		1	1	1	80		45				20	10030	swing2		49	60											weap														0
Maiden's		1	1	1	30		25				100	10031	ama		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	ashd	head				0
Valkyrie's		1	1	1	80		70				100	10031	ama		2	2											amul														0
Monk's		1	1	1	30		25				100	10031	pal		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	head					0
Priest's		1	1	1	80		70				100	10031	pal		2	2											amul														0
Summoner's		1	1	1	30		25				100	10031	nec		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	ashd					0
Necromancer's		1	1	1	80		70				100	10031	nec		2	2											amul														0
Angel's		1	1	1	30		25				100	10031	sor		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	ashd	head				0
Arch-Angel's		1	1	1	80		70				100	10031	sor		2	2											amul														0
Slayer's		1	1	1	30		25				100	10031	bar		1	1											amul	ring	helm	tors	shld	belt		pelt	ashd	head					0
Berserker's		1	1	1	80		70				100	10031	bar		2	2											amul														0
Shaman's		1	1	1	30		25				100	10031	dru		1	1											amul	ring	helm	tors	shld	belt		phlm	ashd	head					0
Hierophant's		1	1	1	80		70				100	10031	dru		2	2											amul														0
Magekiller's		1	1	1	30		25				100	10031	ass		1	1											amul	ring	helm	tors	shld	belt		phlm	pelt	ashd	head				0
Witch-hunter's		1	1	1	80		70				100	10031	ass		2	2											amul														0
Warm		1	1	1	1		1				200	10032	half-freeze		1	1											amul	ring	belt	glov	helm	boot	shld								0
Warm		1	1	1	1		1				200	10032	half-freeze		1	1											tors														0
Leech		1	1	1	15		5				200	10033	lifesteal		3	5											ring	amul	weap	glov	jewl	misl									0
Locust		1	1	1	45		20				200	10033	lifesteal		6	10											amul	weap	glov	jewl	misl										0
Bat		1	1	1	15		5				200	10034	manasteal		3	5											ring	amul	weap	glov	jewl	misl									0
Vampire		1	1	1	45		20				200	10034	manasteal		6	10											amul	weap	glov	jewl	misl										0
Crushing		1	1	1	25		20				200	10035	crush		10	20											amul	glov	helm	weap											0
Lightning		1	1	1	25		20				100	10036	res-ltng-max		1	2											amul	ring	boot	glov	helm	tors	shld								0
Lightning		1	1	1	25		20				100	10036	res-ltng-max		1	2											belt	misl													0
Lightning		1	1	1	45		35				100	10036	res-ltng-max		3	4											amul	ring	boot	glov	helm	tors	shld								0
Lightning		1	1	1	45		35				100	10036	res-ltng-max		3	4											belt	misl													0
Lightning		1	1	1	65		55				100	10036	res-ltng-max		5	6											amul	boot	glov	helm	tors	shld	belt								0
Lightning		1	1	1	85		75				100	10036	res-ltng-max		7	8											amul	boot	glov	helm	tors	shld	belt								0
Cold		1	1	1	25		20				100	10037	res-cold-max		1	2											amul	ring	boot	glov	helm	tors	shld								0
Cold		1	1	1	25		20				100	10037	res-cold-max		1	2											belt	misl													0
Cold		1	1	1	45		35				100	10037	res-cold-max		3	4											amul	ring	boot	glov	helm	tors	shld								0
Cold		1	1	1	45		35				100	10037	res-cold-max		3	4											belt	misl													0
Cold		1	1	1	65		55				100	10037	res-cold-max		5	6											amul	boot	glov	helm	tors	shld	belt								0
Cold		1	1	1	85		75				100	10037	res-cold-max		7	8											amul	boot	glov	helm	tors	shld	belt								0
Fire		1	1	1	25		20				100	10038	res-fire-max		1	2											amul	ring	boot	glov	helm	tors	shld								0
Fire		1	1	1	25		20				100	10038	res-fire-max		1	2											belt	misl													0
Fire		1	1	1	45		35				100	10038	res-fire-max		3	4											amul	ring	boot	glov	helm	tors	shld								0
Fire		1	1	1	45		35				100	10038	res-fire-max		3	4											belt	misl													0
Fire		1	1	1	65		55				100	10038	res-fire-max		5	6											amul	boot	glov	helm	tors	shld	belt								0
Fire		1	1	1	85		75				100	10038	res-fire-max		7	8											amul	boot	glov	helm	tors	shld	belt								0
Poison		1	1	1	25		20				100	10039	res-pois-max		1	2											amul	ring	boot	glov	helm	tors	shld								0
Poison		1	1	1	25		20				100	10039	res-pois-max		1	2											belt	misl													0
Poison		1	1	1	45		35				100	10039	res-pois-max		3	4											amul	ring	boot	glov	helm	tors	shld								0
Poison		1	1	1	45		35				100	10039	res-pois-max		3	4											belt	misl													0
Poison		1	1	1	65		55				100	10039	res-pois-max		5	6											amul	boot	glov	helm	tors	shld	belt								0
Poison		1	1	1	85		75				100	10039	res-pois-max		7	8											amul	boot	glov	helm	tors	shld	belt								0
Prismatic		1	1	1	40		35				200	10040	res-all-max		1	1											amul	ring	boot	glov	helm	tors	shld								0
Prismatic		1	1	1	40		35				200	10040	res-all-max		1	1											belt	misl													0
Prismatic		1	1	1	80		70				200	10040	res-all-max		2	2											amul	boot	glov	helm	tors	shld	belt								0
Blood Letting		1	1	1	1		1				100	10041	heal-kill		1	3											jewl	ring	glov	boot	tors	helm	weap								0
Blood Letting		1	1	1	1		1				100	10041	heal-kill		1	3											belt	shld	misl	amul											0
Murderous		1	1	1	20		5				100	10041	heal-kill		4	10											jewl	ring	glov	boot	tors	helm	weap								0
Murderous		1	1	1	20		5				100	10041	heal-kill		4	10											belt	shld	misl	amul											0
Blood Sucking		1	1	1	40		15				100	10041	heal-kill		11	25											ring	glov	boot	tors	helm	weap	belt								0
Blood Sucking		1	1	1	40		15				100	10041	heal-kill		11	25											shld	misl	amul												0
Triumphant		1	1	1	1		1				100	10042	mana-kill		1	3											jewl	ring	glov	boot	tors	helm	weap								0
Triumphant		1	1	1	1		1				100	10042	mana-kill		1	3											belt	shld	misl	amul											0
Victorious		1	1	1	20		5				100	10042	mana-kill		4	10											jewl	ring	glov	boot	tors	helm	weap								0
Victorious		1	1	1	20		5				100	10042	mana-kill		4	10											belt	shld	misl	amul											0
Aureolin		1	1	1	40		15				100	10042	mana-kill		11	25											ring	glov	boot	tors	helm	weap	belt								0
Aureolin		1	1	1	40		15				100	10042	mana-kill		11	25											shld	misl	amul												0
Speedy		1	1	1	18		18				100	10043	aura	115	1	1											boot														0
Bulky		1	1	1	25		20				100	10044	red-dmg%		5	8											boot	glov	helm	tors	shld	belt									0
Bulky		1	1	1	40		30				100	10044	red-dmg%		9	12											boot	glov	helm	tors	shld	belt									0
Bulky		1	1	1	55		35				100	10044	red-dmg%		13	16											tors	shld													0
Bulky		1	1	1	70		40				100	10044	red-dmg%		17	20											tors	shld													0
Skillful		1	1	1	30		30				5	10045	skill	6	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	7	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	8	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	9	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	10	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	11	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	12	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	13	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	14	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	15	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	16	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	17	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	18	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	19	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	20	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	21	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	22	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	23	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	24	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	25	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	26	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	27	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	28	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	29	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	30	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	31	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	32	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	33	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	34	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	35	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	36	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	37	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	38	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	39	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	40	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	41	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	42	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	43	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	44	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	45	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	46	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	47	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	48	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	49	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	50	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	51	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	52	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	53	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	54	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	55	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	56	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	57	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	58	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	59	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	60	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	61	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	62	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	63	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	64	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	65	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	66	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	67	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	68	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	69	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	70	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	71	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	72	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	73	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	74	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	75	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	76	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	77	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	78	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	79	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	80	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	81	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	82	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	83	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	84	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	85	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	86	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	87	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	88	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	89	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	90	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	91	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	92	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	93	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	94	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	95	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	96	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	97	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	98	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	99	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	100	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	101	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	102	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	103	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	104	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	105	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	106	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	107	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	108	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	109	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	110	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	111	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	112	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	113	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	114	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	115	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	116	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	117	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	118	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	119	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	120	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	121	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	122	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	123	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	124	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	125	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	126	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	128	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	130	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	131	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	132	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	133	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	134	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	135	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	137	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	138	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	139	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	140	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	141	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	142	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	143	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	144	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	145	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	146	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	147	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	148	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	149	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	150	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	151	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	152	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	153	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	154	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	155	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	221	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	222	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	223	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	224	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	225	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	226	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	227	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	228	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	229	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	230	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	231	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	232	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	233	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	234	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	235	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	236	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	237	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	238	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	239	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	240	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	241	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	242	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	243	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	244	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	245	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	246	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	247	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	248	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	249	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	250	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	251	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	252	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	253	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	254	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	255	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	256	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	257	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	258	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	259	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	260	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	261	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	262	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	263	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	264	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	265	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	266	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	267	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	268	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	269	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	270	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	271	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	272	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	273	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	274	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	275	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	276	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	277	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	278	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	279	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	280	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	364	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	365	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	366	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	367	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	368	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	369	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	370	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	371	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	374	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	376	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	378	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	380	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	381	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Skillful		1	1	1	30		30				5	10045	skill	383	1	2											boot	glov	helm	tors	shld			phlm	pelt	ashd	head				0
Mechanist's		1	1	1	1		1				100	10046	sock		1	1											helm	tors	shld	weap											0
Artificer's		1	1	1	40		20				100	10046	sock		2	2											helm	tors	shld	weap											0
Jeweler's		1	1	1	60		30				100	10046	sock		3	3											helm	tors	shld	weap											0
Cultist's		1	1	1	1		1				100	10047	openwounds		20	40	deep-wounds		10	10							weap														0
Cultist's		1	1	1	28		25				100	10047	openwounds		20	40	deep-wounds		150	250							weap														0
Bloodthirster's		1	1	1	48		45				100	10047	openwounds		20	40	deep-wounds		400	600							weap														0
Gorelust's		1	1	1	68		65				100	10047	openwounds		20	40	deep-wounds		800	1100							weap														0
Cultist's		1	1	1	28		25				100	10047	openwounds		5	10	deep-wounds		50	60							jewl														0
Bloodthirster's		1	1	1	48		45				100	10047	openwounds		5	10	deep-wounds		80	100							jewl														0
Gorelust's		1	1	1	68		65				100	10047	openwounds		5	10	deep-wounds		120	150							jewl														0
Penetrating		1	1	1	15		10				100	10048	pierce		5	10											misl	miss													0
Puncturing		1	1	1	30		25				100	10048	pierce		11	20											misl	miss													0
Piercing		1	1	1	45		40				100	10048	pierce		21	30											misl	miss													0
Impaling		1	1	1	60		55				100	10048	pierce		31	40											misl	miss													0
Specialist		1	1	1	40		30				100	10049	oskill	6	25	35											misl														0
Specialist		1	1	1	60		40				100	10049	oskill	6	36	45											misl														0
Specialist		1	1	1	40		30				100	10049	oskill	12	25	35											misl														0
Specialist		1	1	1	60		40				100	10049	oskill	12	36	45											misl														0
Specialist		1	1	1	40		30				100	10049	oskill	16	25	35											misl														0
Specialist		1	1	1	60		40				100	10049	oskill	16	36	45											misl														0
Specialist		1	1	1	40		30				100	10049	oskill	21	25	35											misl														0
Specialist		1	1	1	60		40				100	10049	oskill	21	36	45											misl														0
Specialist		1	1	1	40		30				100	10049	oskill	22	25	35											misl														0
Specialist		1	1	1	60		40				100	10049	oskill	22	36	45											misl														0
Specialist		1	1	1	40		30				100	10049	oskill	26	25	35											misl														0
Specialist		1	1	1	60		40				100	10049	oskill	26	36	45											misl														0
Specialist		1	1	1	40		30				100	10049	oskill	27	25	35											misl														0
Specialist		1	1	1	60		40				100	10049	oskill	27	36	45											misl														0
Specialist		1	1	1	40		30				100	10049	oskill	31	25	35											misl														0
Specialist		1	1	1	60		40				100	10049	oskill	31	36	45											misl														0
Exposing		1	1	1	60		40				100	10050	hit-skill	AmpDmg Proc	12	15											weap							orb	staf	wand					0
Exposing		1	1	1	80		60				100	10050	hit-skill	AmpDmg Proc	12	31											weap							orb	staf	wand					0
Exposing		1	1	1	60		40				100	10050	hit-skill	LowRes Proc	12	15											weap							orb	staf	wand					0
Exposing		1	1	1	80		60				100	10050	hit-skill	LowRes Proc	12	31											weap							orb	staf	wand					0
Champion's	671	1	1	1	1		1				2	150	map-glob-monsterrarity		30	40											t1m	t2m													0
Flaming	672	1	1	1	1		1				2	151	map-mon-extra-fire		5	10	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
Ember	673	1	1	1	1		1				2	151	map-mon-extra-fire		10	15	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
Smoldering	674	1	1	1	1		1				2	151	map-mon-extra-fire		15	20	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
Hibernal	675	1	1	1	1		1				2	152	map-mon-extra-cold		5	10	map-glob-density		13	15	map-play-mag-gold%		15	20			t1m	t2m													0
Snowflake	676	1	1	1	1		1				2	152	map-mon-extra-cold		10	15	map-glob-density		15	18	map-play-mag-gold%		25	30			t2m	t3m													0
Shivering	677	1	1	1	1		1				2	152	map-mon-extra-cold		15	20	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Static	678	1	1	1	1		1				2	153	map-mon-extra-ltng		5	10	map-glob-density		13	20	map-play-addxp		3	4			t1m	t2m													0
Glowing	679	1	1	1	1		1				2	153	map-mon-extra-ltng		10	15	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
Arcing	680	1	1	1	1		1				2	153	map-mon-extra-ltng		15	20	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
Toxic	681	1	1	1	1		1				2	154	map-mon-extra-pois		5	10	map-glob-density		15	20	map-play-mag-gold%		5	10			t1m	t2m													0
Pestilent	682	1	1	1	1		1				2	154	map-mon-extra-pois		10	15	map-glob-density		20	25	map-play-mag-gold%		15	20			t2m	t3m													0
Septic	683	1	1	1	1		1				2	154	map-mon-extra-pois		15	20	map-glob-density		25	30	map-play-mag-gold%		25	30			t3m	t4m													0
Magic	684	1	1	1	1		1					155	map-mon-extra-mag		5	10	map-glob-density		13	18	map-play-mag-gold%		10	15																	0
Arcane	685	1	1	1	1		1					155	map-mon-extra-mag		10	15	map-glob-density		18	23	map-play-mag-gold%		15	20																	0
Ancient	686	1	1	1	1		1					155	map-mon-extra-mag		15	20	map-glob-density		23	25	map-play-mag-gold%		20	25																	0
Promoted	687	1		1	1		1					300	map-glob-arealevel		1	1	map-play-addxp		3	4	map-play-mag-gold%		15	20																	0
Elevated	688	1		1	1		1					300	map-glob-arealevel		1	1	map-play-addxp		4	5	map-play-mag-gold%		20	25																	0
Ascended	689	1		1	1		1					300	map-glob-arealevel		1	1	map-play-addxp		5	6	map-play-mag-gold%		30	35																	0
Silver	690	1	1	1	1		1				2	156	map-mon-att-pierce		30	50	map-glob-density		8	10	map-play-mag-gold%		15	20			t1m	t2m													0
Shining	691	1	1	1	1		1				2	156	map-mon-att-pierce		50	70	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
Opulent	692	1	1	1	1		1				2	156	map-mon-att-pierce		70	90	map-glob-density		18	20	map-play-mag-gold%		45	50			t3m	t4m													0
Fast	693	1	1	1	1		1				2	305	map-mon-att-cast-speed		40	60	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m													0
Speedy	694	1	1	1	1		1				2	305	map-mon-att-cast-speed		60	80	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
Ludicrous	695	1	1	1	1		1				2	305	map-mon-att-cast-speed		80	100	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
Large	696	1	1	1	1		1				1	311	map-mon-hp%		5	10	map-glob-density		15	20	map-play-addxp		6	8			t1m	t2m													0
Huge	697	1	1	1	1		1				1	311	map-mon-hp%		10	15	map-glob-density		20	25	map-play-addxp		8	10			t2m	t3m													0
Colossal	698	1	1	1	1		1				1	311	map-mon-hp%		15	20	map-glob-density		25	30	map-play-addxp		10	12			t3m	t4m													0
Strong	699	1	1	1	1		1				2	158	map-mon-ed%		10	15	map-play-addxp		4	5	map-play-mag-gold%		10	15			t1m	t2m													0
Mighty	700	1	1	1	1		1				2	158	map-mon-ed%		15	20	map-play-addxp		5	6	map-play-mag-gold%		25	30			t2m	t3m													0
Formidable	701	1	1	1	1		1				2	158	map-mon-ed%		20	25	map-play-addxp		6	7	map-play-mag-gold%		40	45			t3m	t4m													0
Splashing	702	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		8	13	map-play-mag-gold%		5	10			t1m	t2m													0
Splashing	703	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		18	23	map-play-mag-gold%		20	25			t2m	t3m													0
Splashing	704	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		23	25	map-play-mag-gold%		35	40			t3m	t4m													0
Bloody	705	1	1	1	1		1				2	312	map-mon-openwounds		5	10	map-play-addxp		4	5	map-play-mag-gold%		5	10			t1m	t2m													0
Gory	706	1	1	1	1		1				2	312	map-mon-openwounds		10	15	map-play-addxp		5	6	map-play-mag-gold%		20	25			t2m	t3m													0
Sanguinary	707	1	1	1	1		1				2	312	map-mon-openwounds		15	20	map-play-addxp		6	7	map-play-mag-gold%		35	40			t3m	t4m													0
Unhealthy	708	1	1	1	1		1				2	315	map-play-regen		-40	-30	map-play-addxp		3	4	map-play-mag-gold%		5	10			t1m	t2m													0
Sickly	709	1	1	1	1		1				2	315	map-play-regen		-60	-50	map-play-addxp		4	5	map-play-mag-gold%		20	25			t2m	t3m													0
Diseased	710	1	1	1	1		1				2	315	map-play-regen		-80	-70	map-play-addxp		5	6	map-play-mag-gold%		35	40			t3m	t4m													0
Crushing	711	1	1	1	1		1				2	163	map-mon-crush		15	25	map-glob-density		8	10	map-play-mag-gold%		5	10			t1m	t2m													0
Smashing	712	1	1	1	1		1				2	163	map-mon-crush		25	35	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Obliterating	713	1	1	1	1		1				2	163	map-mon-crush		35	45	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Sparking	714	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Shocking	715	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Thunderous	716	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Chilling	717	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Boreal	718	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Glacial	719	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Smoking	720	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Molten	721	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Volcanic	722	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Poisonous	723	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	123	163	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Envenomed	724	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	143	184	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Plagued	725	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	163	205	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Runic	726	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		8	10	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m													0
Taboo	727	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		10	12	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Occult	728	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		12	14	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Stygian	729	1	1	1	1		1				1	169	map-glob-add-mon-doll		690	690	map-glob-density		25	30	map-play-mag-gold%		40	45			t1m	t2m	t3m					t4m							0
Lustful	730	1	1	1	1		1				1	169	map-glob-add-mon-succ		885	885	map-glob-density		25	30	map-play-mag-gold%		45	50			t1m	t2m	t3m					t4m							0
Vampiric	731	1	1	1	1		1				1	169	map-glob-add-mon-vamp		1170	1170	map-glob-density		18	20	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Bovine	732	1	1	1	1		1				1	169	map-glob-add-mon-cow		391	391	map-glob-density		25	30	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Reanimated	733	1	1	1	1		1				1	169	map-glob-add-mon-horde		698	698	map-glob-density		25	30	map-play-mag-gold%		35	40			t1m	t2m	t3m					t4m							0
Ghastly	734	1	1	1	1		1				1	169	map-glob-add-mon-ghost		1111	1111	map-glob-density		18	20	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Champion's	831	1	1		1		1				12	150	map-glob-monsterrarity		45	60											t1m	t2m													0
Champion's	832	1	1		1		1				12	150	map-glob-monsterrarity		60	75											t2m	t3m													0
Champion's	833	1	1		1		1				12	150	map-glob-monsterrarity		75	90											t3m	t4m													0
Flaming	834	1	1		1		1				12	151	map-mon-extra-fire		8	15	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
Ember	835	1	1		1		1				12	151	map-mon-extra-fire		15	23	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
Smoldering	836	1	1		1		1				12	151	map-mon-extra-fire		23	30	map-glob-density		46	50	map-play-addxp		10	12			t3m	t4m													0
Hibernal	837	1	1		1		1				12	152	map-mon-extra-cold		8	15	map-glob-density		26	30	map-play-mag-gold%		30	40			t1m	t2m													0
Snowflake	838	1	1		1		1				12	152	map-mon-extra-cold		15	23	map-glob-density		30	36	map-play-mag-gold%		50	60			t2m	t3m													0
Shivering	839	1	1		1		1				12	152	map-mon-extra-cold		23	30	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Static	840	1	1		1		1				12	153	map-mon-extra-ltng		8	15	map-glob-density		26	40	map-play-addxp		6	8			t1m	t2m													0
Glowing	841	1	1		1		1				12	153	map-mon-extra-ltng		15	23	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
Arcing	842	1	1		1		1				12	153	map-mon-extra-ltng		23	30	map-glob-density		46	50	map-play-addxp		10	12			t3m	t4m													0
Toxic	843	1	1		1		1				12	154	map-mon-extra-pois		8	15	map-glob-density		30	40	map-play-mag-gold%		10	20			t1m	t2m													0
Pestilent	844	1	1		1		1				12	154	map-mon-extra-pois		15	23	map-glob-density		40	50	map-play-mag-gold%		30	40			t2m	t3m													0
Septic	845	1	1		1		1				12	154	map-mon-extra-pois		23	30	map-glob-density		50	60	map-play-mag-gold%		50	60			t3m	t4m													0
Silver	849	1	1		1		1				12	156	map-mon-att-pierce		45	75	map-glob-density		16	20	map-play-mag-gold%		30	40			t1m	t2m													0
Shining	850	1	1		1		1				12	156	map-mon-att-pierce		75	105	map-glob-density		30	36	map-play-mag-gold%		60	70			t2m	t3m													0
Opulent	851	1	1		1		1				12	156	map-mon-att-pierce		105	135	map-glob-density		36	40	map-play-mag-gold%		90	100			t3m	t4m													0
Fast	852	1	1		1		1				12	305	map-mon-att-cast-speed		60	90	map-glob-density		30	40	map-play-addxp		6	8			t1m	t2m													0
Speedy	853	1	1		1		1				12	305	map-mon-att-cast-speed		90	120	map-glob-density		40	50	map-play-addxp		8	10			t2m	t3m													0
Ludicrous	854	1	1		1		1				12	305	map-mon-att-cast-speed		120	150	map-glob-density		50	60	map-play-addxp		10	12			t3m	t4m													0
Large	855	1	1		1		1				6	311	map-mon-hp%		10	20	map-glob-density		30	40	map-play-addxp		12	16			t1m	t2m													0
Huge	856	1	1		1		1				6	311	map-mon-hp%		20	30	map-glob-density		40	50	map-play-addxp		16	20			t2m	t3m													0
Colossal	857	1	1		1		1				6	311	map-mon-hp%		30	40	map-glob-density		50	60	map-play-addxp		20	24			t3m	t4m													0
Strong	858	1	1		1		1				12	158	map-mon-ed%		15	23	map-play-addxp		8	10	map-play-mag-gold%		20	30			t1m	t2m													0
Mighty	859	1	1		1		1				12	158	map-mon-ed%		23	30	map-play-addxp		10	12	map-play-mag-gold%		50	60			t2m	t3m													0
Formidable	860	1	1		1		1				12	158	map-mon-ed%		30	38	map-play-addxp		12	14	map-play-mag-gold%		80	90			t3m	t4m													0
Splashing	861	1	1		1		1				12	157	map-mon-splash	358	150	2	map-glob-density		16	26	map-play-mag-gold%		10	20			t1m	t2m													0
Splashing	862	1	1		1		1				12	157	map-mon-splash	358	150	2	map-glob-density		36	46	map-play-mag-gold%		40	50			t2m	t3m													0
Splashing	863	1	1		1		1				12	157	map-mon-splash	358	150	2	map-glob-density		46	50	map-play-mag-gold%		70	80			t3m	t4m													0
Bloody	864	1	1		1		1				12	312	map-mon-openwounds		8	15	map-play-addxp		8	10	map-play-mag-gold%		10	20			t1m	t2m													0
Gory	865	1	1		1		1				12	312	map-mon-openwounds		15	23	map-play-addxp		10	12	map-play-mag-gold%		40	50			t2m	t3m													0
Sanguinary	866	1	1		1		1				12	312	map-mon-openwounds		23	30	map-play-addxp		12	14	map-play-mag-gold%		70	80			t3m	t4m													0
Unhealthy	867	1	1		1		1				12	315	map-play-regen		-60	-45	map-play-addxp		6	8	map-play-mag-gold%		10	20			t1m	t2m													0
Sickly	868	1	1		1		1				12	315	map-play-regen		-90	-75	map-play-addxp		8	10	map-play-mag-gold%		40	50			t2m	t3m													0
Diseased	869	1	1		1		1				12	315	map-play-regen		-120	-105	map-play-addxp		10	12	map-play-mag-gold%		70	80			t3m	t4m													0
Crushing	870	1	1		1		1				12	163	map-mon-crush		23	38	map-glob-density		16	20	map-play-mag-gold%		10	20			t1m	t2m													0
Smashing	871	1	1		1		1				12	163	map-mon-crush		38	53	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Obliterating	872	1	1		1		1				12	163	map-mon-crush		53	68	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Sparking	873	1	1		1		1				12	164	map-mon-phys-as-extra-ltng		90	120	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Shocking	874	1	1		1		1				12	164	map-mon-phys-as-extra-ltng		105	135	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Thunderous	875	1	1		1		1				12	164	map-mon-phys-as-extra-ltng		120	150	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Chilling	876	1	1		1		1				12	165	map-mon-phys-as-extra-cold	25	90	120	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Boreal	877	1	1		1		1				12	165	map-mon-phys-as-extra-cold	25	105	135	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Glacial	878	1	1		1		1				12	165	map-mon-phys-as-extra-cold	25	120	150	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Smoking	879	1	1		1		1				12	166	map-mon-phys-as-extra-fire		90	120	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Molten	880	1	1		1		1				12	166	map-mon-phys-as-extra-fire		105	135	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Volcanic	881	1	1		1		1				12	166	map-mon-phys-as-extra-fire		120	150	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Poisonous	882	1	1		1		1				12	167	map-mon-phys-as-extra-pois	125	185	245	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Envenomed	883	1	1		1		1				12	167	map-mon-phys-as-extra-pois	125	215	276	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Plagued	884	1	1		1		1				12	167	map-mon-phys-as-extra-pois	125	245	308	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Runic	885	1	1		1		1				12	168	map-mon-phys-as-extra-mag		12	15	map-glob-density		26	30	map-play-mag-gold%		10	20			t1m	t2m													0
Taboo	886	1	1		1		1				12	168	map-mon-phys-as-extra-mag		15	18	map-glob-density		30	36	map-play-mag-gold%		40	50			t2m	t3m													0
Occult	887	1	1		1		1				12	168	map-mon-phys-as-extra-mag		18	21	map-glob-density		36	40	map-play-mag-gold%		70	80			t3m	t4m													0
Souless	778	1	1	1	1		1				1	169	map-glob-add-mon-souls		918	918	map-glob-density		25	30	map-play-mag-gold%		50	60			t1m	t2m	t3m					t4m							0
Shamanic	779	1	1	1	1		1				1	169	map-glob-add-mon-fetish		785	785	map-glob-density		20	25	map-play-mag-gold%		25	30			t1m	t2m	t3m					t4m							0
Duplicated	792	1	1	1	1		1				1	169	map-glob-extra-boss		1	1											t1m	t2m													0
Champion's	793	1	1	1	1		1				2	150	map-glob-monsterrarity		40	50											t2m	t3m													0
Champion's	794	1	1	1	1		1				2	150	map-glob-monsterrarity		50	60											t3m	t4m													0
Rampant	795	1	1	1	1		1				2	169	map-glob-add-mon-shriek		1169	1169	map-glob-density		25	30	map-play-mag-gold%		20	30			t1m	t2m	t3m					t4m							0
of Sturdiness	921	1	1		1		1				18	157	map-mon-ac%		75	150	map-play-addxp		6	8	map-play-mag-gold%		20	30			t1m	t2m													0
of Stability	922	1	1		1		1				18	157	map-mon-ac%		150	225	map-play-addxp		8	10	map-play-mag-gold%		50	60			t2m	t3m													0
of Vigor	923	1	1		1		1				18	157	map-mon-ac%		225	300	map-play-addxp		10	12	map-play-mag-gold%		80	90			t3m	t4m													0
of Crimson	924	1	1		1		1				18	158	map-mon-abs-fire%		6	9	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
of Crimson	925	1	1		1		1				18	158	map-mon-abs-fire%		9	12	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
of Crimson	926	1	1		1		1				18	158	map-mon-abs-fire%		12	15	map-glob-density		46	50	map-play-addxp		10	12			t3m	t4m													0
of Tangerine	927	1	1		1		1				18	159	map-mon-abs-ltng%		6	9	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
of Tangerine	928	1	1		1		1				18	159	map-mon-abs-ltng%		9	12	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
of Tangerine	929	1	1		1		1				18	159	map-mon-abs-ltng%		12	15	map-glob-density		40	50	map-play-addxp		10	12			t3m	t4m													0
of Opal	930	1	1		1		1				18	160	map-mon-abs-mag%		6	9	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
of Opal	931	1	1		1		1				18	160	map-mon-abs-mag%		9	12	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
of Opal	932	1	1		1		1				18	160	map-mon-abs-mag%		12	15	map-glob-density		40	50	map-play-addxp		10	12			t3m	t4m													0
of Azure	933	1	1		1		1				18	161	map-mon-abs-cold%		6	9	map-glob-density		26	36	map-play-addxp		6	8			t1m	t2m													0
of Azure	934	1	1		1		1				18	161	map-mon-abs-cold%		9	12	map-glob-density		36	46	map-play-addxp		8	10			t2m	t3m													0
of Azure	935	1	1		1		1				18	161	map-mon-abs-cold%		12	15	map-glob-density		36	50	map-play-addxp		10	12			t3m	t4m													0
of Protection	936	1	1		1		1				18	306	map-mon-red-dmg		150	300	map-glob-density		26	30	map-play-mag-gold%		30	40			t1m	t2m													0
of Security	937	1	1		1		1				18	306	map-mon-red-dmg		450	600	map-glob-density		30	36	map-play-mag-gold%		60	70			t2m	t3m													0
of Safety	938	1	1		1		1				18	306	map-mon-red-dmg		750	900	map-glob-density		36	46	map-play-mag-gold%		90	100			t3m	t4m													0
of Swiftness	939	1	1		1		1				18	307	map-mon-velocity%		30	45	map-glob-density		30	40	map-play-addxp		6	8			t1m	t2m													0
of Quickness	940	1	1		1		1				18	307	map-mon-velocity%		45	60	map-glob-density		40	50	map-play-addxp		8	10			t2m	t3m													0
of Velocity	941	1	1		1		1				18	307	map-mon-velocity%		60	75	map-glob-density		50	60	map-play-addxp		10	12			t3m	t4m													0
of Regeneration	942	1	1		1		1				18	308	map-mon-regen		1536	2340	map-play-addxp		6	8	map-play-mag-gold%		40	50			t1m	t2m													0
of Renewal	943	1	1		1		1				18	308	map-mon-regen		2340	3072	map-play-addxp		8	10	map-play-mag-gold%		70	80			t2m	t3m													0
of Rebirth	944	1	1		1		1				18	308	map-mon-regen		3072	3840	map-play-addxp		10	12	map-play-mag-gold%		100	110			t3m	t4m													0
of the Leech	945	1	1		1		1				18	309	map-mon-lifesteal-hp%		8	16	map-glob-density		26	30	map-play-addxp		10	12			t1m	t2m													0
of the Parasite	946	1	1		1		1				18	309	map-mon-lifesteal-hp%		16	24	map-glob-density		30	40	map-play-addxp		12	14			t2m	t3m													0
of the Bloodsucker	947	1	1		1		1				18	309	map-mon-lifesteal-hp%		24	32	map-glob-density		36	40	map-play-addxp		14	16			t3m	t4m													0
of Resilience	948	1	1		1		1				18	310	map-mon-balance1		60	90	map-glob-density		30	40	map-play-mag-gold%		20	30			t1m	t2m													0
of Hardiness	949	1	1		1		1				18	310	map-mon-balance1		90	120	map-glob-density		40	50	map-play-mag-gold%		50	60			t2m	t3m													0
of Fortitude	950	1	1		1		1				18	310	map-mon-balance1		120	150	map-glob-density		50	60	map-play-mag-gold%		80	90			t3m	t4m													0
of Health	951	1	1		1		1				9	316	map-mon-hp%		10	20	map-glob-density		30	40	map-play-addxp		12	16			t1m	t2m													0
of Vitality	952	1	1		1		1				9	316	map-mon-hp%		20	30	map-glob-density		40	50	map-play-addxp		16	20			t2m	t3m													0
of Vim	953	1	1		1		1				9	316	map-mon-hp%		30	40	map-glob-density		50	60	map-play-addxp		20	24			t3m	t4m													0
of Imbalance	954	1	1		1		1				18	313	map-play-balance1		-30	-15	map-glob-density		30	40	map-play-addxp		6	8			t1m	t2m													0
of Inequality	955	1	1		1		1				18	313	map-play-balance1		-45	-30	map-glob-density		40	50	map-play-addxp		8	10			t2m	t3m													0
of Uneveness	956	1	1		1		1				18	313	map-play-balance1		-60	-45	map-glob-density		50	60	map-play-addxp		10	12			t3m	t4m													0
of Warding	957	1	1		1		1				18	164	map-mon-curseresist-hp%		30	60	map-play-addxp		10	12	map-play-mag-gold%		40	50			t1m	t2m													0
of Guarding	958	1	1		1		1				18	164	map-mon-curseresist-hp%		60	90	map-play-addxp		12	14	map-play-mag-gold%		70	80			t2m	t3m													0
of Preservation	959	1	1		1		1				18	164	map-mon-curseresist-hp%		90	120	map-play-addxp		14	16	map-play-mag-gold%		100	110			t3m														0
of Hindrance	960	1	1		1		1				18	166	map-play-res-all		-23	-15	map-play-addxp		8	10	map-play-mag-gold%		30	40			t1m	t2m													0
of Aversion	961	1	1		1		1				18	166	map-play-res-all		-30	-23	map-play-addxp		10	12	map-play-mag-gold%		60	70			t2m	t3m													0
of Permeability	962	1	1		1		1				18	166	map-play-res-all		-38	-30	map-play-addxp		12	14	map-play-mag-gold%		100	110			t3m	t4m													0
of Cracking	963	1	1		1		1				18	165	map-play-ac%		-45	-30	map-glob-density		26	36	map-play-mag-gold%		30	40			t1m	t2m													0
of Crumbling	964	1	1		1		1				18	165	map-play-ac%		-60	-45	map-glob-density		30	36	map-play-mag-gold%		60	70			t2m	t3m													0
of Disintegration	965	1	1		1		1				18	165	map-play-ac%		-75	-60	map-glob-density		36	40	map-play-mag-gold%		90	100			t3m	t4m													0
of Fumbling	966	1	1		1		1				18	314	map-play-block		-30	-15	map-glob-density		26	36	map-play-mag-gold%		30	40			t1m	t2m													0
of Bumbling	967	1	1		1		1				18	314	map-play-block		-45	-30	map-glob-density		36	46	map-play-mag-gold%		60	70			t2m	t3m													0
of Blundering	968	1	1		1		1				18	314	map-play-block		-60	-45	map-glob-density		46	50	map-play-mag-gold%		80	100			t3m	t4m													0
of the Smith	969	1	1		1		1				9	318	map-mon-dropweapons		2	2											t1m	t2m													0
of the Smith	970	1	1		1		1				9	318	map-mon-dropweapons		4	4											t2m	t3m													0
of the Smith	971	1	1		1		1				9	318	map-mon-dropweapons		6	6											t3m														0
of the Armorer	972	1	1		1		1				9	318	map-mon-droparmor		2	2											t1m	t2m													0
of the Armorer	973	1	1		1		1				9	318	map-mon-droparmor		4	4											t2m	t3m													0
of the Armorer	974	1	1		1		1				9	318	map-mon-droparmor		6	6											t3m														0
of the Crafter	975	1	1		1		1				5	318	map-mon-dropcrafting		2	2											t1m	t2m													0
of the Crafter	976	1	1		1		1				5	318	map-mon-dropcrafting		4	4											t2m	t3m													0
of the Crafter	977	1	1		1		1				5	318	map-mon-dropcrafting		6	6											t3m														0
of the Jeweler	837				1		1				1	319	map-mon-dropjewelry		1	1											t1m	t2m													0
of the Jeweler	838				1		1				1	319	map-mon-dropjewelry		2	2											t2m	t3m													0
of the Jeweler	839				1		1				1	319	map-mon-dropjewelry		3	3											t3m														0
of the Smith	840	1	1	1	1		1				2	318	map-mon-dropweapons		1	1											t1m	t2m													0
of the Smith	841	1	1	1	1		1				2	318	map-mon-dropweapons		2	2											t2m	t3m													0
of the Smith	842	1	1	1	1		1				2	318	map-mon-dropweapons		3	3											t3m														0
of the Armorer	843	1	1	1	1		1				2	318	map-mon-droparmor		1	1											t1m	t2m													0
of the Armorer	844	1	1	1	1		1				2	318	map-mon-droparmor		2	2											t2m	t3m													0
of the Armorer	845	1	1	1	1		1				2	318	map-mon-droparmor		3	3											t3m														0
of the Crafter	846	1	1	1	1		1				1	318	map-mon-dropcrafting		1	1											t1m	t2m													0
of the Crafter	847	1	1	1	1		1				1	318	map-mon-dropcrafting		2	2											t2m	t3m													0
of the Crafter	848	1	1	1	1		1				1	318	map-mon-dropcrafting		3	3											t3m														0
of Darkness	829	1			1		1					317	map-play-lightradius		-100	-80	map-glob-density		5	8	map-play-mag-gold%		15	20			t1m	t2m													0
of Darkness	830	1			1		1					317	map-play-lightradius		-140	-100	map-glob-density		8	10	map-play-mag-gold%		25	30			t2m	t3m													0
of Darkness	831	1			1		1					317	map-play-lightradius		-180	-140	map-glob-density		10	13	map-play-mag-gold%		35	40			t3m	t4m													0
of Sturdiness	749	1	1	1	1		1				4	157	map-mon-ac%		50	100	map-play-addxp		3	4	map-play-mag-gold%		10	15			t1m	t2m													0
of Stability	750	1	1	1	1		1				4	157	map-mon-ac%		100	150	map-play-addxp		4	5	map-play-mag-gold%		25	30			t2m	t3m													0
of Vigor	751	1	1	1	1		1				4	157	map-mon-ac%		150	200	map-play-addxp		5	6	map-play-mag-gold%		40	45			t3m	t4m													0
of Crimson	752	1	1	1	1		1				4	158	map-mon-abs-fire%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
of Crimson	753	1	1	1	1		1				4	158	map-mon-abs-fire%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Crimson	754	1	1	1	1		1				4	158	map-mon-abs-fire%		8	10	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
of Tangerine	755	1	1	1	1		1				4	159	map-mon-abs-ltng%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
of Tangerine	756	1	1	1	1		1				4	159	map-mon-abs-ltng%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Tangerine	757	1	1	1	1		1				4	159	map-mon-abs-ltng%		8	10	map-glob-density		20	25	map-play-addxp		5	6			t3m	t4m													0
of Opal	758	1	1	1	1		1				4	160	map-mon-abs-mag%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
of Opal	759	1	1	1	1		1				4	160	map-mon-abs-mag%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Opal	760	1	1	1	1		1				4	160	map-mon-abs-mag%		8	10	map-glob-density		20	25	map-play-addxp		5	6			t3m	t4m													0
of Azure	761	1	1	1	1		1				4	161	map-mon-abs-cold%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m													0
of Azure	762	1	1	1	1		1				4	161	map-mon-abs-cold%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Azure	763	1	1	1	1		1				4	161	map-mon-abs-cold%		8	10	map-glob-density		18	25	map-play-addxp		5	6			t3m	t4m													0
of Protection	764	1	1	1	1		1				4	306	map-mon-red-dmg		100	200	map-glob-density		13	15	map-play-mag-gold%		15	20			t1m	t2m													0
of Security	765	1	1	1	1		1				4	306	map-mon-red-dmg		300	400	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
of Safety	766	1	1	1	1		1				4	306	map-mon-red-dmg		500	600	map-glob-density		18	23	map-play-mag-gold%		45	50			t3m	t4m													0
of Swiftness	767	1	1	1	1		1				4	307	map-mon-velocity%		20	30	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m													0
of Quickness	768	1	1	1	1		1				4	307	map-mon-velocity%		30	40	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
of Velocity	769	1	1	1	1		1				4	307	map-mon-velocity%		40	50	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
of Regeneration	770	1	1	1	1		1				4	308	map-mon-regen		1024	1560	map-play-addxp		3	4	map-play-mag-gold%		20	25			t1m	t2m													0
of Renewal	771	1	1	1	1		1				4	308	map-mon-regen		1560	2048	map-play-addxp		4	5	map-play-mag-gold%		35	40			t2m	t3m													0
of Rebirth	772	1	1	1	1		1				4	308	map-mon-regen		2048	2560	map-play-addxp		5	6	map-play-mag-gold%		50	55			t3m	t4m													0
of the Leech	773	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		4	8	map-glob-density		13	15	map-play-addxp		5	6			t1m	t2m													0
of the Parasite	774	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		8	12	map-glob-density		15	20	map-play-addxp		6	7			t2m	t3m													0
of the Bloodsucker	775	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		12	16	map-glob-density		18	20	map-play-addxp		7	8			t3m	t4m													0
of Resilience	776	1	1	1	1		1				4	310	map-mon-balance1		40	60	map-glob-density		15	20	map-play-mag-gold%		10	15			t1m	t2m													0
of Hardiness	777	1	1	1	1		1				4	310	map-mon-balance1		60	80	map-glob-density		20	25	map-play-mag-gold%		25	30			t2m	t3m													0
of Fortitude	778	1	1	1	1		1				4	310	map-mon-balance1		80	100	map-glob-density		25	30	map-play-mag-gold%		40	45			t3m	t4m													0
of Health	779	1	1	1	1		1				2	316	map-mon-hp%		5	10	map-glob-density		15	20	map-play-addxp		6	8			t1m	t2m													0
of Vitality	780	1	1	1	1		1				2	316	map-mon-hp%		10	15	map-glob-density		20	25	map-play-addxp		8	10			t2m	t3m													0
of Vim	781	1	1	1	1		1				2	316	map-mon-hp%		15	20	map-glob-density		25	30	map-play-addxp		10	12			t3m	t4m													0
of Imbalance	782	1	1	1	1		1				4	313	map-play-balance1		-20	-10	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m													0
of Inequality	783	1	1	1	1		1				4	313	map-play-balance1		-30	-20	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
of Uneveness	784	1	1	1	1		1				4	313	map-play-balance1		-40	-30	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
of Warding	785	1	1	1	1		1				4	164	map-mon-curseresist-hp%		20	40	map-play-addxp		5	6	map-play-mag-gold%		20	25			t1m	t2m													0
of Guarding	786	1	1	1	1		1				4	164	map-mon-curseresist-hp%		40	60	map-play-addxp		6	7	map-play-mag-gold%		35	40			t2m	t3m													0
of Preservation	787	1	1	1	1		1				4	164	map-mon-curseresist-hp%		60	80	map-play-addxp		7	8	map-play-mag-gold%		50	55			t3m														0
of Hindrance	788	1	1	1	1		1				4	166	map-play-res-all		-15	-10	map-play-addxp		4	5	map-play-mag-gold%		15	20			t1m	t2m													0
of Aversion	789	1	1	1	1		1				4	166	map-play-res-all		-20	-15	map-play-addxp		5	6	map-play-mag-gold%		30	35			t2m	t3m													0
of Permeability	790	1	1	1	1		1				4	166	map-play-res-all		-25	-20	map-play-addxp		6	7	map-play-mag-gold%		50	55			t3m	t4m													0
of Cracking	791	1	1	1	1		1				4	165	map-play-ac%		-30	-20	map-glob-density		13	18	map-play-mag-gold%		15	20			t1m	t2m													0
of Crumbling	792	1	1	1	1		1				4	165	map-play-ac%		-40	-30	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
of Disintegration	793	1	1	1	1		1				4	165	map-play-ac%		-50	-40	map-glob-density		18	20	map-play-mag-gold%		45	50			t3m	t4m													0
of Fumbling	794	1	1	1	1		1				4	314	map-play-block		-20	-10	map-glob-density		13	18	map-play-mag-gold%		15	20			t1m	t2m													0
of Bumbling	795	1	1	1	1		1				4	314	map-play-block		-30	-20	map-glob-density		18	23	map-play-mag-gold%		30	35			t2m	t3m													0
of Blundering	796	1	1	1	1		1				4	314	map-play-block		-40	-30	map-glob-density		23	25	map-play-mag-gold%		40	50			t3m	t4m													0
`;
  allPrefixes?: Affix[];
  allSuffixes?: Affix[];
  output: string = '';
  characterLevel: number = 80;
  checkLevel: boolean = false;
  itemTypes: ItemType[] = [
    new ItemType('Ring', ['ring']),
    new ItemType('Amulet', ['amul']),
    new ItemType('Boots', ['boot','armo']),
    new ItemType('Gloves', ['glov','armo']),
    new ItemType('Body Armor', ['tors','armo']),
    new ItemType('Helm', ['helm','armo']),
    new ItemType('Small Charm', ['scha']),
    new ItemType('Large Charm', ['mcha']),
    new ItemType('Grand Charm', ['lcha']),
    new ItemType('Weapon', ['weap'])
  ]
  currentItemType: ItemType = this.itemTypes[0];
  currentItemTypeName: string = 'Ring'; 

  loadAffixes() {
    console.log('Loading affixes');
    this.allPrefixes = this.loadAffixesFromString(this.prefixRaw);
    this.allSuffixes = this.loadAffixesFromString(this.suffixRaw);
  }

  showAffixInformation() {
    console.log('Showing affix information for', this.currentItemType.name);
    if(!this.allPrefixes || !this.allSuffixes) {
      throw Error('Must load affixes before showing information');
    }
    var includedPrefixes = this.allPrefixes.filter(affix => this.isAffixIncluded(affix));
    var includedSuffixes = this.allSuffixes.filter(affix => this.isAffixIncluded(affix));
    var prefixTotalWeight = includedPrefixes.map(a => a.frequency).reduce((a,b)=>a+b);
    var suffixTotalWeight = includedSuffixes.map(a => a.frequency).reduce((a,b)=>a+b);
    this.output = 'Prefixes (' + prefixTotalWeight + '):\n' + includedPrefixes.map(p => p.toString()).join('\n')
      + '\n\nSuffixes (' + suffixTotalWeight + '):\n' + includedSuffixes.map(p => p.toString()).join('\n');
  }

  showAccumulatedAffixInformation() {
    console.log('Showing affix information for', this.currentItemType.name);
    if(!this.allPrefixes || !this.allSuffixes) {
      throw Error('Must load affixes before showing information');
    }
    var includedPrefixes = this.allPrefixes.filter(affix => this.isAffixIncluded(affix));
    var prefixTotalWeight = includedPrefixes.map(a => a.frequency).reduce((a,b)=>a+b);
    var affixTypes = includedPrefixes
      //.map(a => a.mods[0].code + ',' + a.mods[0].param)
      .map(a => a.mods[0].code)
      .filter((value, index, array) => array.indexOf(value) === index); //Remove duplicates
    var affixAccumulatedStrings = affixTypes.map(aString => {
      //var affixes = includedPrefixes.filter(p => p.mods[0].code + ',' + p.mods[0].param === aString);
      var affixes = includedPrefixes.filter(p => p.mods[0].code === aString);
      var totalWeight = affixes.map(a => a.frequency).reduce((a,b)=>a+b);
      return totalWeight + ': ' + aString;
    });
    this.output = 'Prefixes (' + prefixTotalWeight + '):\n' + affixAccumulatedStrings.join('\n');
  }

  buildItems() {
    if(!this.allPrefixes || !this.allSuffixes) {
      throw Error('Must load affixes before showing information');
    }
    var affixes: {name: string, weight: number}[] = [];
    var includedPrefixes = this.allPrefixes.filter(affix => this.isAffixIncluded(affix));
    var affixTypes = includedPrefixes
      .map(a => a.mods[0].code)
      .filter((value, index, array) => array.indexOf(value) === index); //Remove duplicates
    affixes = affixTypes.map(aString => {
      var affixes = includedPrefixes.filter(p => p.mods[0].code === aString);
      var totalWeight = affixes.map(a => a.frequency).reduce((a,b)=>a+b);
      return {name: aString, weight: totalWeight};
    });

    const successes = [
      //['extra-ltng', 'pierce-ltng'],
      //['extra-cold', 'pierce-cold'],
      //['extra-fire', 'pierce-fire'],
      //['extra-pois', 'pierce-pois'],
      //['dmg%']
      ['allskills']
    ];
    let hits = 0;
    for (let i = 0; i<2000000; i++) {
      var item = this.buildItem(affixes);
      if (i < 10) {
        console.log(item);
      }

      if (successes.some(success => success.every(s => item.includes(s)))) {
        hits++;
        //console.log("Hit:", item);
      }
    }
    console.log(hits);
  }

  buildItem(affixes: {name: string, weight: number}[]): string[] {
    const itemAffixes: string[] = [];
    let remainingAffixes = [...affixes];
    for (let i = 0; i<6; i++) {
      const totalWeight = remainingAffixes.map(a => a.weight).reduce((a,b)=>a+b);
      let remainingWeight = Math.random() * totalWeight;
      for(let affix of remainingAffixes) {
        if (remainingWeight < affix.weight) {
          itemAffixes.push(affix.name);
          remainingAffixes = remainingAffixes.filter(a => a != affix);
          break;
        }
        remainingWeight -= affix.weight;
      }
    }
    return itemAffixes;
  }
  
  minifyPrefixes(): void {
    if (!this.allPrefixes) {
      throw Error('Must load prefixes before minifying prefixes');
    }
    let remainingAffixes = this.allPrefixes
      //.filter(a => !a.mods[0].code.startsWith('map'))
      .map(a => a.clone());
    let minifiedList: Affix[] = []
    console.log('All affixes ' + this.allPrefixes.length)
    console.log('Minifying ' + remainingAffixes.length + ' affixes.');
    let maxHits = 0;
    let currentAffix: null | Affix = remainingAffixes[0];
    while (currentAffix !== null) {
      const affixesMatchingCurrentAffix = remainingAffixes.filter(a => 
        a.level === currentAffix!.level
        && (
          a.maxlevel === currentAffix!.maxlevel
          || isNaN(a.maxlevel) && isNaN(currentAffix!.maxlevel)
        )
        && a.levelreq === currentAffix!.levelreq
        && a.frequency === currentAffix!.frequency
        && a.mods.length === currentAffix!.mods.length
        && a.mods.every(m => currentAffix!.mods.some(m2 =>
          m.code === m2.code
          && m.param === m2.param
          && m.min === m2.min
          && m.max === m2.max
        ))
      )
      let newItypes = affixesMatchingCurrentAffix.flatMap(a => a.itypes);
      let newEtypes = affixesMatchingCurrentAffix.flatMap(a => a.etypes);
      if (newItypes.length > 14) {
        throw new Error('More than 14 itypes has not been implemented yet.');
      }
      if (newEtypes.length > 5) {
        // It is impossible to know which of the new rows the etypes belong to
        throw new Error('More than 5 etypes has not been implemented yet.');
      }
      const newRow = currentAffix.clone();
      minifiedList.push(newRow);
      if (newItypes.length > 7) {
        const extraItypes = newItypes.slice(7);
        newItypes = newItypes.slice(0, 7);
        const extraRow = currentAffix.clone();
        extraRow.itypes = extraItypes;
        extraRow.etypes = newEtypes;
        minifiedList.push(extraRow);
      }
      newRow.itypes = newItypes;
      newRow.etypes = newEtypes;
      remainingAffixes = remainingAffixes.filter(a => !affixesMatchingCurrentAffix.includes(a));
      if (affixesMatchingCurrentAffix.length > maxHits) {
        maxHits = affixesMatchingCurrentAffix.length;
        console.log(maxHits, affixesMatchingCurrentAffix)
      }

      if (remainingAffixes.length === 0) {
        currentAffix = null;
      } else {
        const remainingAffixWithSameMod = remainingAffixes.find(a =>
          a.mods[0].code === currentAffix!.mods[0].code
        );
        if (remainingAffixWithSameMod) {
          currentAffix = remainingAffixWithSameMod;
        } else {
          currentAffix = remainingAffixes[0];
        }
      }
    }
    console.log('Minified result has ' + minifiedList.length + ' affixes.');
    this.output = minifiedList
      .map(a => a.toExcelRow())
      .join('\n');
  }

  private isAffixIncluded(affix: Affix): boolean {
    this.currentItemType = this.itemTypes.find(i => i.name === this.currentItemTypeName)!;
    var isIncluded = this.currentItemType.categories.some(t => affix.hasIType(t));
    var isExcluded = this.currentItemType.categories.some(t => affix.hasEType(t));
    return isIncluded 
      && !isExcluded 
      && (
        !this.checkLevel 
        || (
          (Number.isNaN(affix.maxlevel) || affix.maxlevel >= this.characterLevel)
          && (!Number.isNaN(affix.level) || affix.level <= this.characterLevel)
        )
      );
  }

  private loadAffixesFromString(rawString: String): Affix[] {
    rawString = rawString.trim();
    var lines = rawString.split('\n');
    var headers = lines[0].split('\t');
    // Remove headers from array
    lines.shift()
    return lines
      .map(line => {
        var values = line.split('\t');
        var affixMap = new Map<string, string>();
        for (var i = 0; i<headers.length; i++) {
          var key = headers[i];
          var value = values[i];
          affixMap.set(key, value);
        }
        var isIncluded = affixMap.get('version') 
          && affixMap.get('spawnable') 
          && affixMap.get('spawnable') != '0'
          && affixMap.get('frequency') 
          && affixMap.get('frequency') != '0';
        if (!isIncluded) {
          return null;
        }
        return Affix.fromStrings(
          affixMap.get('Name')!,
          affixMap.get('rare')!,
          affixMap.get('level')!,
          affixMap.get('maxlevel')!,
          affixMap.get('levelreq')!,
          affixMap.get('frequency')!,
          affixMap.get('group')!,
          affixMap.get('mod1code')!,
          affixMap.get('mod1param')!,
          affixMap.get('mod1min')!,
          affixMap.get('mod1max')!,
          affixMap.get('mod2code')!,
          affixMap.get('mod2param')!,
          affixMap.get('mod2min')!,
          affixMap.get('mod2max')!,
          affixMap.get('mod3code')!,
          affixMap.get('mod3param')!,
          affixMap.get('mod3min')!,
          affixMap.get('mod3max')!,
          affixMap.get('itype1')!,
          affixMap.get('itype2')!,
          affixMap.get('itype3')!,
          affixMap.get('itype4')!,
          affixMap.get('itype5')!,
          affixMap.get('itype6')!,
          affixMap.get('itype7')!,
          affixMap.get('etype1')!,
          affixMap.get('etype2')!,
          affixMap.get('etype3')!,
          affixMap.get('etype4')!,
          affixMap.get('etype5')!
        );
      })
      .filter(e => e != null) as Affix[];
  }
}
