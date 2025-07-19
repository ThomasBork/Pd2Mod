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
																																									0
Sturdy		1	1	1	1		1				100	10001	ac%		6	10											lcha														0
Strong		1	1	1	15		10				100	10001	ac%		11	15											lcha														0
Glorious		1	1	1	25		20				100	10001	ac%		16	20											lcha														0
Blessed		1	1	1	40		35				100	10001	ac%		21	25											lcha														0
Saintly		1	1	1	60		55				100	10001	ac%		26	30											lcha														0
Supporting		1	1	1	1		1				100	10002	dmg%		5	10											lcha														0
Reinforcing		1	1	1	30		25				100	10002	dmg%		11	15											lcha														0
Empowering		1	1	1	55		50				100	10002	dmg%		16	20											lcha														0
Red		1	1	1	1		1				100	10003	dmg-min		3	5											lcha														0
Sanguinary		1	1	1	15		10				100	10003	dmg-min		6	8											lcha														0
Bloody		1	1	1	30		25				100	10003	dmg-min		9	12											lcha														0
Scarlet		1	1	1	50		45				100	10003	dmg-min		13	15											lcha														0
Jagged		1	1	1	1		1				100	10004	dmg-max		3	5											lcha														0
Forked		1	1	1	15		10				100	10004	dmg-max		6	8											lcha														0
Serrated		1	1	1	30		25				100	10004	dmg-max		9	12											lcha														0
Vermillion		1	1	1	50		45				100	10004	dmg-max		13	15											lcha														0
Rookie’s		1	1	1	1		1				100	10005	addxp		3	5											lcha														0
Student’s		1	1	1	20		15				100	10005	addxp		6	9											lcha														0
Scholar’s		1	1	1	35		30				100	10005	addxp		10	15											lcha														0
Lucky		1	1	1	1		1				100	10006	mag%		5	10											lcha														0
Lucky		1	1	1	20		15				100	10006	mag%		11	15											lcha														0
Lucky		1	1	1	35		30				100	10006	mag%		16	20											lcha														0
Bronze		1	1	1	1		1				100	10007	att	0	10	20											lcha														0
Iron		1	1	1	15		10				100	10007	att	0	21	40											lcha														0
Steel		1	1	1	25		20				100	10007	att	0	41	60											lcha														0
Silver		1	1	1	35		30				100	10007	att	0	61	80											lcha														0
Gold		1	1	1	45		40				100	10007	att	0	81	100											lcha														0
Platinum		1	1	1	55		50				100	10007	att	0	101	120											lcha														0
Meteoric		1	1	1	65		60				100	10007	att	0	121	150											lcha														0
Greedy		1	1	1	1		1				100	10008	gold%		20	40											lcha														0
Greedy		1	1	1	20		15				100	10008	gold%		41	60											lcha														0
Greedy		1	1	1	35		30				100	10008	gold%		61	80											lcha														0
Tangerine		1	1	1	1		1				100	10009	res-ltng		7	16											lcha														0
Ocher		1	1	1	25		20				100	10009	res-ltng		17	26											lcha														0
Coral		1	1	1	45		40				100	10009	res-ltng		27	36											lcha														0
Azure		1	1	1	1		1				100	10010	res-cold		7	16											lcha														0
Lapis		1	1	1	25		20				100	10010	res-cold		17	26											lcha														0
Cobalt		1	1	1	45		40				100	10010	res-cold		27	36											lcha														0
Crimson		1	1	1	1		1				100	10011	res-fire		7	16											lcha														0
Burgundy		1	1	1	25		20				100	10011	res-fire		17	26											lcha														0
Garnet		1	1	1	45		40				100	10011	res-fire		27	36											lcha														0
Beryl		1	1	1	1		1				100	10012	res-pois		7	16											lcha														0
Jade		1	1	1	25		20				100	10012	res-pois		17	26											lcha														0
Viridian		1	1	1	45		40				100	10012	res-pois		27	36											lcha														0
Prismatic		1	1	1	1		1				100	10012	res-all		5	7											lcha														0
Prismatic		1	1	1	25		20				100	10012	res-all		8	10											lcha														0
Prismatic		1	1	1	45		40				100	10012	res-all		11	13											lcha														0
Tank’s		1	1	1	25		20				100	10013	hp%		1	2											lcha														0
Tank’s		1	1	1	50		45				100	10013	hp%		3	4											lcha														0
Life’s		1	1	1	1		1				100	10014	hp		10	15											lcha														0
Jackal’s		1	1	1	15		10				100	10014	hp		16	20											lcha														0
Fox’s		1	1	1	25		20				100	10014	hp		21	25											lcha														0
Wolf’s		1	1	1	35		30				100	10014	hp		26	30											lcha														0
Tiger’s		1	1	1	45		40				100	10014	hp		31	35											lcha														0
Mammoth’s		1	1	1	55		50				100	10014	hp		36	40											lcha														0
Colosuss’s		1	1	1	65		60				100	10014	hp		41	45											lcha														0
Whale’s		1	1	1	65		60				100	10014	hp		46	50											lcha														0
Lizard's		1	1	1	1		1				100	10015	mana		20	30											lcha														0
Snake's		1	1	1	15		10				100	10015	mana		31	40											lcha														0
Serpent's		1	1	1	25		20				100	10015	mana		41	50											lcha														0
Drake's		1	1	1	35		30				100	10015	mana		51	60											lcha														0
Dragon's		1	1	1	45		40				100	10015	mana		61	70											lcha														0
Dragon's		1	1	1	55		50				100	10015	mana		71	80											lcha														0
Wyrm's		1	1	1	65		60				100	10015	mana		81	90											lcha														0
Great Wyrm's		1	1	1	65		60				100	10015	mana		91	100											lcha														0
Balancing		1	1	1	1		1				100	10017	balance1		8	11											lcha														0
Stable		1	1	1	30		25				100	10017	balance1		12	15											lcha														0
Pacing		1	1	1	1		1				100	10018	move2		7	9											lcha														0
Haste		1	1	1	25		20				100	10018	move2		10	12											lcha														0
Apprentice’s		1	1	1	1		1				100	10019	cast1		2	3											lcha														0
Magus’s		1	1	1	25		20				100	10019	cast1		4	5											lcha														0
Fletcher's		1	1	1	50		42	ama			100	10020	skilltab	0	1	1											lcha	lchp													0
Acrobat's		1	1	1	50		42	ama			100	10020	skilltab	1	1	1											lcha	lchp													0
Harpoonist's		1	1	1	50		42	ama			100	10020	skilltab	2	1	1											lcha	lchp													0
Burning		1	1	1	50		42	sor			100	10020	skilltab	3	1	1											lcha	lchp													0
Sparking		1	1	1	50		42	sor			100	10020	skilltab	4	1	1											lcha	lchp													0
Chilling		1	1	1	50		42	sor			100	10020	skilltab	5	1	1											lcha	lchp													0
Hexing		1	1	1	50		42	nec			100	10020	skilltab	6	1	1											lcha	lchp													0
Fungal		1	1	1	50		42	nec			100	10020	skilltab	7	1	1											lcha	lchp													0
Graverobber's		1	1	1	50		42	nec			100	10020	skilltab	8	1	1											lcha	lchp													0
Lion Branded		1	1	1	50		42	pal			100	10020	skilltab	9	1	1											lcha	lchp													0
Captain's		1	1	1	50		42	pal			100	10020	skilltab	10	1	1											lcha	lchp													0
Preserver's		1	1	1	50		42	pal			100	10020	skilltab	11	1	1											lcha	lchp													0
Expert's		1	1	1	50		42	bar			100	10020	skilltab	12	1	1											lcha	lchp													0
Fanatic		1	1	1	50		42	bar			100	10020	skilltab	13	1	1											lcha	lchp													0
Sounding		1	1	1	50		42	bar			100	10020	skilltab	14	1	1											lcha	lchp													0
Trainer's		1	1	1	50		42	dru			100	10020	skilltab	15	1	1											lcha	lchp													0
Spiritual		1	1	1	50		42	dru			100	10020	skilltab	16	1	1											lcha	lchp													0
Nature's		1	1	1	50		42	dru			100	10020	skilltab	17	1	1											lcha	lchp													0
Entrapping		1	1	1	50		42	ass			100	10020	skilltab	18	1	1											lcha	lchp													0
Mentalist's		1	1	1	50		42	ass			100	10020	skilltab	19	1	1											lcha	lchp													0
Shogukusha's		1	1	1	50		42	ass			100	10020	skilltab	20	1	1											lcha	lchp													0
Superior		1	1	1	50		42				100	10020	allskills		1	1											lcha	lchp													0
Supporting		1	1	1	1		1				100	10021	dmg%		4	6											mcha														0
Reinforcing		1	1	1	30		25				100	10021	dmg%		7	9											mcha														0
Empowering		1	1	1	55		50				100	10021	dmg%		10	12											mcha														0
Red		1	1	1	1		1				100	10022	dmg-min		2	3											mcha														0
Sanguinary		1	1	1	15		10				100	10022	dmg-min		4	5											mcha														0
Bloody		1	1	1	30		25				100	10022	dmg-min		6	7											mcha														0
Scarlet		1	1	1	50		45				100	10022	dmg-min		8	9											mcha														0
Jagged		1	1	1	1		1				100	10023	dmg-max		2	3											mcha														0
Forked		1	1	1	15		10				100	10023	dmg-max		4	5											mcha														0
Serrated		1	1	1	30		25				100	10023	dmg-max		6	7											mcha														0
Vermillion		1	1	1	50		45				100	10023	dmg-max		8	9											mcha														0
Rookie’s		1	1	1	1		1				100	10024	addxp		2	4											mcha														0
Student’s		1	1	1	20		15				100	10024	addxp		5	7											mcha														0
Scholar’s		1	1	1	35		30				100	10024	addxp		8	10											mcha														0
Lucky		1	1	1	1		1				100	10025	mag%		4	7											mcha														0
Lucky		1	1	1	20		15				100	10025	mag%		8	11											mcha														0
Lucky		1	1	1	35		30				100	10025	mag%		12	15											mcha														0
Bronze		1	1	1	1		1				100	10026	att	0	8	20											mcha														0
Iron		1	1	1	15		10				100	10026	att	0	21	33											mcha														0
Steel		1	1	1	25		20				100	10026	att	0	34	46											mcha														0
Silver		1	1	1	35		30				100	10026	att	0	47	59											mcha														0
Gold		1	1	1	45		40				100	10026	att	0	60	72											mcha														0
Platinum		1	1	1	55		50				100	10026	att	0	73	85											mcha														0
Meteoric		1	1	1	65		60				100	10026	att	0	86	98											mcha														0
Greedy		1	1	1	1		1				100	10027	gold%		16	32											mcha														0
Greedy		1	1	1	20		15				100	10027	gold%		33	49											mcha														0
Greedy		1	1	1	35		30				100	10027	gold%		50	66											mcha														0
Tangerine		1	1	1	1		1				100	10028	res-ltng		5	11											mcha														0
Ocher		1	1	1	25		20				100	10028	res-ltng		12	18											mcha														0
Coral		1	1	1	45		40				100	10028	res-ltng		19	25											mcha														0
Azure		1	1	1	1		1				100	10029	res-cold		5	11											mcha														0
Lapis		1	1	1	25		20				100	10029	res-cold		12	18											mcha														0
Cobalt		1	1	1	45		40				100	10029	res-cold		19	25											mcha														0
Crimson		1	1	1	1		1				100	10030	res-fire		5	11											mcha														0
Burgundy		1	1	1	25		20				100	10030	res-fire		12	18											mcha														0
Garnet		1	1	1	45		40				100	10030	res-fire		19	25											mcha														0
Beryl		1	1	1	1		1				100	10031	res-pois		5	11											mcha														0
Jade		1	1	1	25		20				100	10031	res-pois		12	18											mcha														0
Viridian		1	1	1	45		40				100	10031	res-pois		19	25											mcha														0
Prismatic		1	1	1	1		1				100	10032	res-all		4	5											mcha														0
Prismatic		1	1	1	25		20				100	10032	res-all		6	7											mcha														0
Prismatic		1	1	1	45		40				100	10032	res-all		8	9											mcha														0
Life’s		1	1	1	1		1				100	10033	hp		9	11											mcha														0
Jackal’s		1	1	1	15		10				100	10033	hp		12	15											mcha														0
Fox’s		1	1	1	25		20				100	10033	hp		16	19											mcha														0
Wolf’s		1	1	1	35		30				100	10033	hp		20	23											mcha														0
Tiger’s		1	1	1	45		40				100	10033	hp		24	27											mcha														0
Mammoth’s		1	1	1	55		50				100	10033	hp		28	31											mcha														0
Colosuss’s		1	1	1	65		60				100	10033	hp		32	35											mcha														0
Whale’s		1	1	1	65		60				100	10033	hp		36	39											mcha														0
Lizard's		1	1	1	1		1				100	10034	mana		16	23											mcha														0
Snake's		1	1	1	15		10				100	10034	mana		24	31											mcha														0
Serpent's		1	1	1	25		20				100	10034	mana		32	39											mcha														0
Drake's		1	1	1	35		30				100	10034	mana		40	47											mcha														0
Dragon's		1	1	1	45		40				100	10034	mana		48	55											mcha														0
Dragon's		1	1	1	55		50				100	10034	mana		56	63											mcha														0
Wyrm's		1	1	1	65		60				100	10034	mana		64	71											mcha														0
Great Wyrm's		1	1	1	65		60				100	10034	mana		72	79											mcha														0
Balancing		1	1	1	1		1				100	10035	balance1		8	11											mcha														0
Stable		1	1	1	30		25				100	10035	balance1		12	15											mcha														0
Pacing		1	1	1	1		1				100	10036	move2		5	7											mcha														0
Haste		1	1	1	25		20				100	10036	move2		8	10											mcha														0
Strength		1	1	1	1		1				100	10037	str		4	6											mcha														0
Ox’s		1	1	1	45		40				100	10037	str		7	12											mcha														0
Dexterity		1	1	1	1		1				100	10038	dex		4	6											mcha														0
Skillful		1	1	1	45		40				100	10038	dex		7	12											mcha														0
Ember		1	1	1	1	26	1				100	10039	fire-min		3	4	fire-max		5	6							mcha														0
Smoldering		1	1	1	35		26				100	10039	fire-min		12	14	fire-max		20	22							mcha														0
Smoking		1	1	1	47		37				100	10039	fire-min		19	22	fire-max		29	32							mcha														0
Flaming		1	1	1	61		51				100	10039	fire-min		30	34	fire-max		40	44							mcha														0
Scorching		1	1	1	77		67				100	10039	fire-min		35	40	fire-max		55	60							mcha														0
Static		1	1	1	1	26	1				100	10040	ltng-min		1	1	ltng-max		7	9							mcha														0
Glowing		1	1	1	35		26				100	10040	ltng-min		1	1	ltng-max		31	35							mcha														0
Buzzing		1	1	1	47		37				100	10040	ltng-min		1	1	ltng-max		47	53							mcha														0
Arcing		1	1	1	61		51				100	10040	ltng-min		1	1	ltng-max		69	77							mcha														0
Shocking		1	1	1	77		67				100	10040	ltng-min		1	1	ltng-max		89	99							mcha														0
Cold		1	1	1	1	26	1				100	10041	cold-len		50	50	cold-min		3	4	cold-max		5	6			mcha														0
Snowflake		1	1	1	35		26				100	10041	cold-len		50	50	cold-min		12	14	cold-max		20	22			mcha														0
Shivering		1	1	1	47		37				100	10041	cold-len		50	50	cold-min		19	22	cold-max		29	32			mcha														0
Boreal		1	1	1	61		51				100	10041	cold-len		50	50	cold-min		30	34	cold-max		40	44			mcha														0
Hibernal		1	1	1	77		67				100	10041	cold-len		50	50	cold-min		35	40	cold-max		55	60			mcha														0
Conduit		1	1	1	42		42				100	10042	extra-ltng		2	4											mcha														0
Numbing		1	1	1	42		42				100	10042	extra-cold		2	4											mcha														0
Inferno		1	1	1	42		42				100	10042	extra-fire		2	4											mcha														0
Infectious		1	1	1	42		42				100	10042	extra-pois		2	4											mcha														0
Scintillating		1	1	1	42		42				100	10042	extra-magi		2	4											mcha														0
Discharging		1	1	1	42		42				100	10043	pierce-ltng		1	2											mcha														0
Frigid		1	1	1	42		42				100	10043	pierce-cold		1	2											mcha														0
Wildfire		1	1	1	42		42				100	10043	pierce-fire		1	2											mcha														0
Malicious		1	1	1	42		42				100	10043	pierce-pois		1	2											mcha														0
Lethal		1	1	1	42		42				100	10043	pierce-phys		1	2											mcha														0
Supporting		1	1	1	1		1				100	10044	dmg%		3	4											scha														0
Reinforcing		1	1	1	30		25				100	10044	dmg%		5	6											scha														0
Empowering		1	1	1	55		50				100	10044	dmg%		7	8											scha														0
Red		1	1	1	1		1				100	10045	dmg-min		1	1											scha														0
Sanguinary		1	1	1	15		10				100	10045	dmg-min		2	3											scha														0
Bloody		1	1	1	30		25				100	10045	dmg-min		4	5											scha														0
Jagged		1	1	1	1		1				100	10046	dmg-max		1	1											scha														0
Forked		1	1	1	15		10				100	10046	dmg-max		2	3											scha														0
Serrated		1	1	1	30		25				100	10046	dmg-max		4	5											scha														0
Rookie’s		1	1	1	1		1				100	10047	addxp		2	3											scha														0
Student’s		1	1	1	20		15				100	10047	addxp		4	5											scha														0
Scholar’s		1	1	1	35		30				100	10047	addxp		6	7											scha														0
Lucky		1	1	1	1		1				100	10048	mag%		3	4											scha														0
Lucky		1	1	1	20		15				100	10048	mag%		5	6											scha														0
Lucky		1	1	1	35		30				100	10048	mag%		7	8											scha														0
Bronze		1	1	1	1		1				100	10049	att	0	5	8											scha														0
Iron		1	1	1	15		10				100	10049	att	0	9	12											scha														0
Steel		1	1	1	25		20				100	10049	att	0	13	16											scha														0
Silver		1	1	1	35		30				100	10049	att	0	17	20											scha														0
Gold		1	1	1	45		40				100	10049	att	0	21	24											scha														0
Platinum		1	1	1	55		50				100	10049	att	0	25	28											scha														0
Meteoric		1	1	1	65		60				100	10049	att	0	29	32											scha														0
Greedy		1	1	1	1		1				100	10050	gold%		10	20											scha														0
Greedy		1	1	1	20		15				100	10050	gold%		21	30											scha														0
Greedy		1	1	1	35		30				100	10050	gold%		31	40											scha														0
Tangerine		1	1	1	1		1				100	10051	res-ltng		4	6											scha														0
Ocher		1	1	1	25		20				100	10051	res-ltng		7	9											scha														0
Coral		1	1	1	45		40				100	10051	res-ltng		10	12											scha														0
Azure		1	1	1	1		1				100	10052	res-cold		4	6											scha														0
Lapis		1	1	1	25		20				100	10052	res-cold		7	9											scha														0
Cobalt		1	1	1	45		40				100	10052	res-cold		10	12											scha														0
Crimson		1	1	1	1		1				100	10053	res-fire		4	6											scha														0
Burgundy		1	1	1	25		20				100	10053	res-fire		7	9											scha														0
Garnet		1	1	1	45		40				100	10053	res-fire		10	12											scha														0
Beryl		1	1	1	1		1				100	10054	res-pois		4	6											scha														0
Jade		1	1	1	25		20				100	10054	res-pois		7	9											scha														0
Viridian		1	1	1	45		40				100	10054	res-pois		10	12											scha														0
Prismatic		1	1	1	1		1				100	10055	res-all		2	2											scha														0
Prismatic		1	1	1	25		20				100	10055	res-all		3	3											scha														0
Prismatic		1	1	1	45		40				100	10055	res-all		4	4											scha														0
Tank’s		1	1	1	25		20				100	10056	hp%		1	1											scha														0
Tank’s		1	1	1	50		45				100	10056	hp%		2	2											scha														0
Life’s		1	1	1	1		1				100	10057	hp		7	9											scha														0
Jackal’s		1	1	1	15		10				100	10057	hp		10	12											scha														0
Fox’s		1	1	1	25		20				100	10057	hp		13	15											scha														0
Wolf’s		1	1	1	35		30				100	10057	hp		16	18											scha														0
Tiger’s		1	1	1	45		40				100	10057	hp		19	21											scha														0
Lizard's		1	1	1	1		1				100	10058	mana		13	16											scha														0
Snake's		1	1	1	15		10				100	10058	mana		17	20											scha														0
Serpent's		1	1	1	25		20				100	10058	mana		21	24											scha														0
Drake's		1	1	1	35		30				100	10058	mana		25	28											scha														0
Dragon's		1	1	1	45		40				100	10058	mana		29	32											scha														0
Pacing		1	1	1	1		1				100	10059	move2		3	5											scha														0
Haste		1	1	1	25		20				100	10059	move2		6	8											scha														0
Apprentice’s		1	1	1	1		1				100	10060	cast1		1	1											scha														0
Magus’s		1	1	1	25		20				100	10060	cast1		2	2											scha														0
Ember		1	1	1	1	26	1				100	10061	fire-min		2	3	fire-max		4	5							scha														0
Smoldering		1	1	1	35		26				100	10061	fire-min		6	7	fire-max		10	11							scha														0
Smoking		1	1	1	47		37				100	10061	fire-min		10	11	fire-max		15	16							scha														0
Flaming		1	1	1	61		51				100	10061	fire-min		15	17	fire-max		20	22							scha														0
Scorching		1	1	1	77		67				100	10061	fire-min		18	20	fire-max		28	30							scha														0
Static		1	1	1	1	26	1				100	10062	ltng-min		1	1	ltng-max		4	5							scha														0
Glowing		1	1	1	35		26				100	10062	ltng-min		1	1	ltng-max		16	18							scha														0
Buzzing		1	1	1	47		37				100	10062	ltng-min		1	1	ltng-max		24	27							scha														0
Arcing		1	1	1	61		51				100	10062	ltng-min		1	1	ltng-max		35	39							scha														0
Shocking		1	1	1	77		67				100	10062	ltng-min		1	1	ltng-max		45	50							scha														0
Cold		1	1	1	1	26	1				100	10063	cold-len		50	50	cold-min		2	3	cold-max		4	5			scha														0
Snowflake		1	1	1	35		26				100	10063	cold-len		50	50	cold-min		6	7	cold-max		10	11			scha														0
Shivering		1	1	1	47		37				100	10063	cold-len		50	50	cold-min		10	11	cold-max		15	16			scha														0
Boreal		1	1	1	61		51				100	10063	cold-len		50	50	cold-min		15	17	cold-max		20	22			scha														0
Hibernal		1	1	1	77		67				100	10063	cold-len		50	50	cold-min		18	20	cold-max		28	30			scha														0
Jagged		1	1	1	1		1				100	10064	dmg%	0	20	30											amul														0
Deadly		1	1	1	15		10				100	10064	dmg%	0	31	40											amul														0
Vicious		1	1	1	30		25				100	10064	dmg%	0	41	50											amul														0
Brutal		1	1	1	45		40				100	10064	dmg%	0	51	60											amul														0
Massive		1	1	1	60		55				100	10064	dmg%	0	61	70											amul														0
Savage		1	1	1	75		70				100	10064	dmg%	0	71	80											amul														0
Savage		1	1	1	20		15				100	10065	deadly		5	10											amul														0
Devastating		1	1	1	40		35				100	10065	deadly		11	15											amul														0
Havoc		1	1	1	60		55				100	10065	deadly		16	20											amul														0
Ready		1	1	1	1		1				100	10066	swing1		10	15											amul														0
Swift		1	1	1	30		25				100	10066	swing2		16	20											amul														0
Quick		1	1	1	60		55				100	10066	swing2		21	25											amul														0
Red		1	1	1	1		1				100	10067	dmg-min		3	6											amul														0
Sanguinary		1	1	1	15		10				100	10067	dmg-min		7	10											amul														0
Bloody		1	1	1	30		25				100	10067	dmg-min		11	14											amul														0
Scarlet		1	1	1	50		45				100	10067	dmg-min		15	18											amul														0
Jagged		1	1	1	1		1				100	10167	dmg-max		3	6											amul														0
Forked		1	1	1	15		10				100	10167	dmg-max		7	10											amul														0
Serrated		1	1	1	30		25				100	10167	dmg-max		11	14											amul														0
Vermillion		1	1	1	50		45				100	10167	dmg-max		15	18											amul														0
Rookie’s		1	1	1	1		1				100	10068	addxp		3	8											amul														0
Student’s		1	1	1	20		15				100	10068	addxp		9	14											amul														0
Scholar’s		1	1	1	35		30				100	10068	addxp		15	20											amul														0
Lucky		1	1	1	1		1				100	10069	mag%		15	25											amul														0
Lucky		1	1	1	20		15				100	10069	mag%		26	35											amul														0
Lucky		1	1	1	35		30				100	10069	mag%		36	45											amul														0
Greedy		1	1	1	1		1				100	10070	gold%		40	80											amul														0
Greedy		1	1	1	20		15				100	10070	gold%		81	120											amul														0
Greedy		1	1	1	35		30				100	10070	gold%		121	160											amul														0
Bronze		1	1	1	1		1				100	10071	att	0	20	40											amul														0
Iron		1	1	1	15		10				100	10071	att	0	41	60											amul														0
Steel		1	1	1	25		20				100	10071	att	0	61	80											amul														0
Silver		1	1	1	35		30				100	10071	att	0	81	100											amul														0
Gold		1	1	1	45		40				100	10071	att	0	101	120											amul														0
Platinum		1	1	1	55		50				100	10071	att	0	121	140											amul														0
Meteoric		1	1	1	65		60				100	10071	att	0	141	160											amul														0
Tangerine		1	1	1	1		1				100	10072	res-ltng		10	20											amul														0
Ocher		1	1	1	25		20				100	10072	res-ltng		21	30											amul														0
Coral		1	1	1	45		40				100	10072	res-ltng		31	40											amul														0
Amber		1	1	1	65		60				100	10072	res-ltng		41	50											amul														0
Azure		1	1	1	1		1				100	10073	res-cold		10	20											amul														0
Lapis		1	1	1	25		20				100	10073	res-cold		21	30											amul														0
Cobalt		1	1	1	45		40				100	10073	res-cold		31	40											amul														0
Sapphire		1	1	1	65		60				100	10073	res-cold		41	50											amul														0
Crimson		1	1	1	1		1				100	10074	res-fire		10	20											amul														0
Burgundy		1	1	1	25		20				100	10074	res-fire		21	30											amul														0
Garnet		1	1	1	45		40				100	10074	res-fire		31	40											amul														0
Ruby		1	1	1	65		60				100	10074	res-fire		41	50											amul														0
Beryl		1	1	1	1		1				100	10075	res-pois		10	20											amul														0
Jade		1	1	1	25		20				100	10075	res-pois		21	30											amul														0
Viridian		1	1	1	45		40				100	10075	res-pois		31	40											amul														0
Emerald		1	1	1	65		60				100	10075	res-pois		41	50											amul														0
Prismatic		1	1	1	1		1				100	10076	res-all		4	6											amul														0
Prismatic		1	1	1	25		20				100	10076	res-all		7	9											amul														0
Prismatic		1	1	1	45		40				100	10076	res-all		10	12											amul														0
Prismatic		1	1	1	65		60				100	10076	res-all		13	15											amul														0
Tank’s		1	1	1	25		20				100	10077	hp%		3	5											amul														0
Tank’s		1	1	1	50		45				100	10077	hp%		6	8											amul														0
Life’s		1	1	1	1	26	1				100	10078	hp		10	20											amul														0
Jackal’s		1	1	1	15		10				100	10078	hp		21	30											amul														0
Fox’s		1	1	1	25		20				100	10078	hp		31	40											amul														0
Wolf’s		1	1	1	35		30				100	10078	hp		41	50											amul														0
Tiger’s		1	1	1	45		40				100	10078	hp		51	60											amul														0
Mammoth’s		1	1	1	55		50				100	10078	hp		61	70											amul														0
Colosuss’s		1	1	1	65		60				100	10078	hp		71	80											amul														0
Whale’s		1	1	1	75		70				100	10078	hp		81	90											amul														0
Lizard's		1	1	1	1	26	1				100	10079	mana		10	20											amul														0
Snake's		1	1	1	15		10				100	10079	mana		21	35											amul														0
Serpent's		1	1	1	25		20				100	10079	mana		36	55											amul														0
Drake's		1	1	1	35		30				100	10079	mana		56	80											amul														0
Dragon's		1	1	1	45		40				100	10079	mana		81	110											amul														0
Pacing		1	1	1	20		15				100	10080	move2		10	20											amul														0
Haste		1	1	1	40		35				100	10080	move2		21	30											amul														0
Ember		1	1	1	1	26	1				100	10081	fire-min		5	6	fire-max		10	12							amul														0
Smoldering		1	1	1	35		26				100	10081	fire-min		30	35	fire-max		40	50							amul														0
Smoking		1	1	1	47		37				100	10081	fire-min		80	90	fire-max		120	135							amul														0
Flaming		1	1	1	61		51				100	10081	fire-min		180	200	fire-max		250	280							amul														0
Scorching		1	1	1	77		67				100	10081	fire-min		300	320	fire-max		370	410							amul														0
Static		1	1	1	1	26	1				100	10082	ltng-min		1	1	ltng-max		14	17							amul														0
Glowing		1	1	1	35		26				100	10082	ltng-min		1	1	ltng-max		69	84							amul														0
Buzzing		1	1	1	47		37				100	10082	ltng-min		1	1	ltng-max		199	224							amul														0
Arcing		1	1	1	61		51				100	10082	ltng-min		1	1	ltng-max		429	479							amul														0
Shocking		1	1	1	77		67				100	10082	ltng-min		1	1	ltng-max		669	709							amul														0
Cold		1	1	1	1	26	1				100	10083	cold-len		50	50	cold-min		5	6	cold-max		10	12			amul														0
Snowflake		1	1	1	35		26				100	10083	cold-len		50	50	cold-min		30	35	cold-max		40	50			amul														0
Shivering		1	1	1	47		37				100	10083	cold-len		50	50	cold-min		80	90	cold-max		120	135			amul														0
Boreal		1	1	1	61		51				100	10083	cold-len		50	50	cold-min		180	200	cold-max		250	280			amul														0
Hibernal		1	1	1	77		67				100	10083	cold-len		50	50	cold-min		300	320	cold-max		370	410			amul														0
Conduit		1	1	1	1		1				100	10084	extra-ltng		10	20											amul														0
Conduit		1	1	1	30		25				100	10084	extra-ltng		21	30											amul														0
Conduit		1	1	1	50		45				100	10084	extra-ltng		31	40											amul														0
Numbing		1	1	1	1		1				100	10084	extra-cold		10	20											amul														0
Numbing		1	1	1	30		25				100	10084	extra-cold		21	30											amul														0
Numbing		1	1	1	50		45				100	10084	extra-cold		31	40											amul														0
Inferno		1	1	1	1		1				100	10084	extra-fire		10	20											amul														0
Inferno		1	1	1	30		25				100	10084	extra-fire		21	30											amul														0
Inferno		1	1	1	50		45				100	10084	extra-fire		31	40											amul														0
Infectious		1	1	1	1		1				100	10084	extra-pois		10	20											amul														0
Infectious		1	1	1	30		25				100	10084	extra-pois		21	30											amul														0
Infectious		1	1	1	50		45				100	10084	extra-pois		31	40											amul														0
Scintillating		1	1	1	1		1				100	10084	extra-magi		10	20											amul														0
Scintillating		1	1	1	30		25				100	10084	extra-magi		21	30											amul														0
Scintillating		1	1	1	50		45				100	10084	extra-magi		31	40											amul														0
Discharging		1	1	1	1		1				100	10085	pierce-ltng		4	6											amul														0
Discharging		1	1	1	30		25				100	10085	pierce-ltng		7	9											amul														0
Discharging		1	1	1	50		45				100	10085	pierce-ltng		10	12											amul														0
Frigid		1	1	1	1		1				100	10085	pierce-cold		4	6											amul														0
Frigid		1	1	1	30		25				100	10085	pierce-cold		7	9											amul														0
Frigid		1	1	1	50		45				100	10085	pierce-cold		10	12											amul														0
Wildfire		1	1	1	1		1				100	10085	pierce-fire		4	6											amul														0
Wildfire		1	1	1	30		25				100	10085	pierce-fire		7	9											amul														0
Wildfire		1	1	1	50		45				100	10085	pierce-fire		10	12											amul														0
Malicious		1	1	1	1		1				100	10085	pierce-pois		4	6											amul														0
Malicious		1	1	1	30		25				100	10085	pierce-pois		7	9											amul														0
Malicious		1	1	1	50		45				100	10085	pierce-pois		10	12											amul														0
Lethal		1	1	1	1		1				100	10085	pierce-phys		4	6											amul														0
Lethal		1	1	1	30		25				100	10085	pierce-phys		7	9											amul														0
Lethal		1	1	1	50		45				100	10085	pierce-phys		10	12											amul														0
Maiden's		1	1	1	30		25	ama			100	10087	ama		1	1											amul														0
Valkyrie's		1	1	1	80		70	ama			100	10087	ama		2	2											amul														0
Monk's		1	1	1	30		25	pal			100	10087	pal		1	1											amul														0
Priest's		1	1	1	80		70	pal			100	10087	pal		2	2											amul														0
Summoner's		1	1	1	30		25	nec			100	10087	nec		1	1											amul														0
Necromancer's		1	1	1	80		70	nec			100	10087	nec		2	2											amul														0
Angel's		1	1	1	30		25	sor			100	10087	sor		1	1											amul														0
Arch-Angel's		1	1	1	80		70	sor			100	10087	sor		2	2											amul														0
Slayer's		1	1	1	30		25	bar			100	10087	bar		1	1											amul														0
Berserker's		1	1	1	80		70	bar			100	10087	bar		2	2											amul														0
Shaman's		1	1	1	30		25	dru			100	10087	dru		1	1											amul														0
Hierophant's		1	1	1	80		70	dru			100	10087	dru		2	2											amul														0
Magekiller's		1	1	1	30		25	ass			100	10087	ass		1	1											amul														0
Witch-hunter's		1	1	1	80		70	ass			100	10087	ass		2	2											amul														0
Fletcher's		1	1	1	20		15	ama			100	10087	skilltab	0	1	1											amul														0
Bowyer's		1	1	1	40		30	ama			100	10087	skilltab	0	2	2											amul														0
Acrobat's		1	1	1	20		15	ama			100	10087	skilltab	1	1	1											amul														0
Gymnast's		1	1	1	40		30	ama			100	10087	skilltab	1	2	2											amul														0
Harpoonist's		1	1	1	20		15	ama			100	10087	skilltab	2	1	1											amul														0
Spearmaiden's		1	1	1	40		30	ama			100	10087	skilltab	2	2	2											amul														0
Burning		1	1	1	20		15	sor			100	10087	skilltab	3	1	1											amul														0
Blazing		1	1	1	40		30	sor			100	10087	skilltab	3	2	2											amul														0
Sparking		1	1	1	20		15	sor			100	10087	skilltab	4	1	1											amul														0
Charged		1	1	1	40		30	sor			100	10087	skilltab	4	2	2											amul														0
Chilling		1	1	1	20		15	sor			100	10087	skilltab	5	1	1											amul														0
Freezing		1	1	1	40		30	sor			100	10087	skilltab	5	2	2											amul														0
Hexing		1	1	1	20		15	nec			100	10087	skilltab	6	1	1											amul														0
Blighting		1	1	1	40		30	nec			100	10087	skilltab	6	2	2											amul														0
Fungal		1	1	1	20		15	nec			100	10087	skilltab	7	1	1											amul														0
Noxious		1	1	1	40		30	nec			100	10087	skilltab	7	2	2											amul														0
Graverobber's		1	1	1	20		15	nec			100	10087	skilltab	8	1	1											amul														0
Vodoun		1	1	1	40		30	nec			100	10087	skilltab	8	2	2											amul														0
Lion Branded		1	1	1	20		15	pal			100	10087	skilltab	9	1	1											amul														0
Hawk Branded		1	1	1	40		30	pal			100	10087	skilltab	9	2	2											amul														0
Captain's		1	1	1	20		15	pal			100	10087	skilltab	10	1	1											amul														0
Commander's		1	1	1	40		30	pal			100	10087	skilltab	10	2	2											amul														0
Preserver's		1	1	1	20		15	pal			100	10087	skilltab	11	1	1											amul														0
Warder's		1	1	1	40		30	pal			100	10087	skilltab	11	2	2											amul														0
Expert's		1	1	1	20		15	bar			100	10087	skilltab	12	1	1											amul														0
Veteran's		1	1	1	40		30	bar			100	10087	skilltab	12	2	2											amul														0
Fanatic		1	1	1	20		15	bar			100	10087	skilltab	13	1	1											amul														0
Raging		1	1	1	40		30	bar			100	10087	skilltab	13	2	2											amul														0
Sounding		1	1	1	20		15	bar			100	10087	skilltab	14	1	1											amul														0
Resonant		1	1	1	40		30	bar			100	10087	skilltab	14	2	2											amul														0
Trainer's		1	1	1	20		15	dru			100	10087	skilltab	15	1	1											amul														0
Caretaker's		1	1	1	40		30	dru			100	10087	skilltab	15	2	2											amul														0
Spiritual		1	1	1	20		15	dru			100	10087	skilltab	16	1	1											amul														0
Feral		1	1	1	40		30	dru			100	10087	skilltab	16	2	2											amul														0
Nature's		1	1	1	20		15	dru			100	10087	skilltab	17	1	1											amul														0
Terra's		1	1	1	40		30	dru			100	10087	skilltab	17	2	2											amul														0
Entrapping		1	1	1	20		15	ass			100	10087	skilltab	18	1	1											amul														0
Trickster's		1	1	1	40		30	ass			100	10087	skilltab	18	2	2											amul														0
Mentalist's		1	1	1	20		15	ass			100	10087	skilltab	19	1	1											amul														0
Psychic		1	1	1	40		30	ass			100	10087	skilltab	19	2	2											amul														0
Shogukusha's		1	1	1	20		15	ass			100	10087	skilltab	20	1	1											amul														0
Sensei's		1	1	1	40		30	ass			100	10087	skilltab	20	2	2											amul														0
Superior		1	1	1	50		42				100	10088	allskills		1	1											amul														0
Warm		1	1	1	10		7				500	10089	half-freeze		1	1											amul														0
Leech		1	1	1	6		4				100	10090	lifesteal		4	7											amul														0
Locust		1	1	1	20		15				100	10090	lifesteal		8	10											amul														0
Bat		1	1	1	6		4				100	10091	manasteal		4	7											amul														0
Vampire		1	1	1	20		15				100	10091	manasteal		8	10											amul														0
Crushing		1	1	1	25		20				100	10092	crush		10	20											amul														0
Lightning		1	1	1	25		20				100	10093	res-ltng-max		1	2											amul														0
Lightning		1	1	1	45		35				100	10093	res-ltng-max		3	4											amul														0
Lightning		1	1	1	65		55				100	10093	res-ltng-max		5	6											amul														0
Lightning		1	1	1	85		75				100	10093	res-ltng-max		7	8											amul														0
Cold		1	1	1	25		20				100	10094	res-cold-max		1	2											amul														0
Cold		1	1	1	45		35				100	10094	res-cold-max		3	4											amul														0
Cold		1	1	1	65		55				100	10094	res-cold-max		5	6											amul														0
Cold		1	1	1	85		75				100	10094	res-cold-max		7	8											amul														0
Fire		1	1	1	25		20				100	10095	res-fire-max		1	2											amul														0
Fire		1	1	1	45		35				100	10095	res-fire-max		3	4											amul														0
Fire		1	1	1	65		55				100	10095	res-fire-max		5	6											amul														0
Fire		1	1	1	85		75				100	10095	res-fire-max		7	8											amul														0
Poison		1	1	1	25		20				100	10096	res-pois-max		1	2											amul														0
Poison		1	1	1	45		35				100	10096	res-pois-max		3	4											amul														0
Poison		1	1	1	65		55				100	10096	res-pois-max		5	6											amul														0
Poison		1	1	1	85		75				100	10096	res-pois-max		7	8											amul														0
Poison		1	1	1	40		35				200	10097	res-all-max		1	1											amul														0
Poison		1	1	1	80		70				200	10097	res-all-max		2	2											amul														0
Apprentice’s		1	1	1	1		1				100	10098	cast1		10	15											amul														0
Magus’s		1	1	1	50		40				100	10098	cast1		16	20											amul														0
Blood Letting		1	1	1	1	26	1				100	10099	heal-kill		1	3											amul														0
Murderous		1	1	1	26		20				100	10099	heal-kill		4	10											amul														0
Blood Sucking		1	1	1	50		40				100	10099	heal-kill		11	25											amul														0
Triumphant		1	1	1	1	26	1				100	10100	mana-kill		1	2											amul														0
Victorious		1	1	1	26		20				100	10100	mana-kill		3	4											amul														0
Aureolin		1	1	1	50		40				100	10100	mana-kill		5	6											amul														0
Jagged		1	1	1	1		1				100	10101	dmg%	0	10	15											ring														0
Deadly		1	1	1	15		10				100	10101	dmg%	0	16	20											ring														0
Vicious		1	1	1	30		25				100	10101	dmg%	0	21	25											ring														0
Brutal		1	1	1	45		40				100	10101	dmg%	0	26	30											ring														0
Massive		1	1	1	60		55				100	10101	dmg%	0	31	40											ring														0
Savage		1	1	1	20		15				100	10102	deadly		5	10											ring														0
Ready		1	1	1	1		1				100	10103	swing1		5	7											ring														0
Swift		1	1	1	30		25				100	10103	swing2		8	10											ring														0
Red		1	1	1	1		1				100	10104	dmg-min		1	3											ring														0
Sanguinary		1	1	1	15		10				100	10104	dmg-min		4	6											ring														0
Bloody		1	1	1	30		25				100	10104	dmg-min		7	9											ring														0
Scarlet		1	1	1	50		45				100	10104	dmg-min		10	12											ring														0
Jagged		1	1	1	1		1				100	10105	dmg-max		1	3											ring														0
Forked		1	1	1	15		10				100	10105	dmg-max		4	6											ring														0
Serrated		1	1	1	30		25				100	10105	dmg-max		7	9											ring														0
Vermillion		1	1	1	50		45				100	10105	dmg-max		10	12											ring														0
Rookie’s		1	1	1	1		1				100	10106	addxp		3	5											ring														0
Student’s		1	1	1	20		15				100	10106	addxp		6	9											ring														0
Scholar’s		1	1	1	35		30				100	10106	addxp		10	15											ring														0
Lucky		1	1	1	1		1				100	10107	mag%		15	25											ring														0
Lucky		1	1	1	20		15				100	10107	mag%		26	35											ring														0
Lucky		1	1	1	35		30				100	10107	mag%		36	45											ring														0
Greedy		1	1	1	1		1				100	10108	gold%		40	60											ring														0
Greedy		1	1	1	20		15				100	10108	gold%		61	80											ring														0
Greedy		1	1	1	35		30				100	10108	gold%		81	100											ring														0
Bronze		1	1	1	1		1				100	10109	att	0	20	40											ring														0
Iron		1	1	1	15		10				100	10109	att	0	41	60											ring														0
Steel		1	1	1	25		20				100	10109	att	0	61	80											ring														0
Silver		1	1	1	35		30				100	10109	att	0	81	100											ring														0
Gold		1	1	1	45		40				100	10109	att	0	101	120											ring														0
Platinum		1	1	1	55		50				100	10109	att	0	121	140											ring														0
Meteoric		1	1	1	65		60				100	10109	att	0	141	160											ring														0
Tangerine		1	1	1	1		1				100	10110	res-ltng		10	20											ring														0
Ocher		1	1	1	25		20				100	10110	res-ltng		21	30											ring														0
Coral		1	1	1	45		40				100	10110	res-ltng		31	40											ring														0
Azure		1	1	1	1		1				100	10111	res-cold		10	20											ring														0
Lapis		1	1	1	25		20				100	10111	res-cold		21	30											ring														0
Cobalt		1	1	1	45		40				100	10111	res-cold		31	40											ring														0
Crimson		1	1	1	1		1				100	10112	res-fire		10	20											ring														0
Burgundy		1	1	1	25		20				100	10112	res-fire		21	30											ring														0
Garnet		1	1	1	45		40				100	10112	res-fire		31	40											ring														0
Beryl		1	1	1	1		1				100	10113	res-pois		10	20											ring														0
Jade		1	1	1	25		20				100	10113	res-pois		21	30											ring														0
Viridian		1	1	1	45		40				100	10113	res-pois		31	40											ring														0
Prismatic		1	1	1	1		1				100	10114	res-all		4	6											ring														0
Prismatic		1	1	1	25		20				100	10114	res-all		7	9											ring														0
Prismatic		1	1	1	45		40				100	10114	res-all		10	12											ring														0
Tank’s		1	1	1	25		20				100	10115	hp%		2	3											ring														0
Life’s		1	1	1	1	26	1				100	10116	hp		10	20											ring														0
Jackal’s		1	1	1	15		10				100	10116	hp		21	30											ring														0
Fox’s		1	1	1	25		20				100	10116	hp		31	40											ring														0
Wolf’s		1	1	1	35		30				100	10116	hp		41	50											ring														0
Tiger’s		1	1	1	45		40				100	10116	hp		51	60											ring														0
Lizard's		1	1	1	1	26	1				100	10117	mana		10	20											ring														0
Snake's		1	1	1	15		10				100	10117	mana		21	35											ring														0
Serpent's		1	1	1	25		20				100	10117	mana		36	55											ring														0
Drake's		1	1	1	35		30				100	10117	mana		56	80											ring														0
Dragon's		1	1	1	45		40				100	10117	mana		81	110											ring														0
Ember		1	1	1	1	26	1				100	10118	fire-min		5	6	fire-max		10	12							ring														0
Smoldering		1	1	1	35		26				100	10118	fire-min		30	35	fire-max		40	50							ring														0
Smoking		1	1	1	47		37				100	10118	fire-min		80	90	fire-max		120	135							ring														0
Flaming		1	1	1	61		51				100	10118	fire-min		180	200	fire-max		250	280							ring														0
Static		1	1	1	1	26	1				100	10119	ltng-min		1	1	ltng-max		14	17							ring														0
Glowing		1	1	1	35		26				100	10119	ltng-min		1	1	ltng-max		69	84							ring														0
Buzzing		1	1	1	47		37				100	10119	ltng-min		1	1	ltng-max		199	224							ring														0
Arcing		1	1	1	61		51				100	10119	ltng-min		1	1	ltng-max		429	479							ring														0
Cold		1	1	1	1	26	1				100	10120	cold-len		50	50	cold-min		5	6	cold-max		10	12			ring														0
Snowflake		1	1	1	35		26				100	10120	cold-len		50	50	cold-min		30	35	cold-max		40	50			ring														0
Shivering		1	1	1	47		37				100	10120	cold-len		50	50	cold-min		80	90	cold-max		120	135			ring														0
Boreal		1	1	1	61		51				100	10120	cold-len		50	50	cold-min		180	200	cold-max		250	280			ring														0
Conduit		1	1	1	1		1				100	10121	extra-ltng		5	10											ring														0
Conduit		1	1	1	30		25				100	10121	extra-ltng		11	15											ring														0
Conduit		1	1	1	50		45				100	10121	extra-ltng		16	20											ring														0
Numbing		1	1	1	1		1				100	10121	extra-cold		5	10											ring														0
Numbing		1	1	1	30		25				100	10121	extra-cold		11	15											ring														0
Numbing		1	1	1	50		45				100	10121	extra-cold		16	20											ring														0
Inferno		1	1	1	1		1				100	10121	extra-fire		5	10											ring														0
Inferno		1	1	1	30		25				100	10121	extra-fire		11	15											ring														0
Inferno		1	1	1	50		45				100	10121	extra-fire		16	20											ring														0
Infectious		1	1	1	1		1				100	10121	extra-pois		5	10											ring														0
Infectious		1	1	1	30		25				100	10121	extra-pois		11	15											ring														0
Infectious		1	1	1	50		45				100	10121	extra-pois		16	20											ring														0
Scintillating		1	1	1	1		1				100	10121	extra-magi		5	10											ring														0
Scintillating		1	1	1	30		25				100	10121	extra-magi		11	15											ring														0
Scintillating		1	1	1	50		45				100	10121	extra-magi		16	20											ring														0
Discharging		1	1	1	1		1				100	10122	pierce-ltng		2	3											ring														0
Discharging		1	1	1	30		25				100	10122	pierce-ltng		4	5											ring														0
Discharging		1	1	1	50		45				100	10122	pierce-ltng		6	7											ring														0
Frigid		1	1	1	1		1				100	10122	pierce-cold		2	3											ring														0
Frigid		1	1	1	30		25				100	10122	pierce-cold		4	5											ring														0
Frigid		1	1	1	50		45				100	10122	pierce-cold		6	7											ring														0
Wildfire		1	1	1	1		1				100	10122	pierce-fire		2	3											ring														0
Wildfire		1	1	1	30		25				100	10122	pierce-fire		4	5											ring														0
Wildfire		1	1	1	50		45				100	10122	pierce-fire		6	7											ring														0
Malicious		1	1	1	1		1				100	10122	pierce-pois		2	3											ring														0
Malicious		1	1	1	30		25				100	10122	pierce-pois		4	5											ring														0
Malicious		1	1	1	50		45				100	10122	pierce-pois		6	7											ring														0
Lethal		1	1	1	1		1				100	10122	pierce-phys		2	3											ring														0
Lethal		1	1	1	30		25				100	10122	pierce-phys		4	5											ring														0
Lethal		1	1	1	50		45				100	10122	pierce-phys		6	7											ring														0
Maiden's		1	1	1	30		25	ama			100	10123	ama		1	1											ring														0
Monk's		1	1	1	30		25	pal			100	10123	pal		1	1											ring														0
Summoner's		1	1	1	30		25	nec			100	10123	nec		1	1											ring														0
Angel's		1	1	1	30		25	sor			100	10123	sor		1	1											ring														0
Slayer's		1	1	1	30		25	bar			100	10123	bar		1	1											ring														0
Shaman's		1	1	1	30		25	dru			100	10123	dru		1	1											ring														0
Magekiller's		1	1	1	30		25	ass			100	10123	ass		1	1											ring														0
Warm		1	1	1	10		7				300	10124	half-freeze		1	1											ring														0
Leech		1	1	1	6		4				100	10125	lifesteal		3	5											ring														0
Locust		1	1	1	20		15				100	10125	lifesteal		6	8											ring														0
Bat		1	1	1	6		4				100	10126	manasteal		3	5											ring														0
Vampire		1	1	1	20		15				100	10126	manasteal		6	8											ring														0
Lightning		1	1	1	25		20				100	10127	res-ltng-max		1	2											ring														0
Lightning		1	1	1	45		35				100	10127	res-ltng-max		3	4											ring														0
Cold		1	1	1	25		20				100	10128	res-cold-max		1	2											ring														0
Cold		1	1	1	45		35				100	10128	res-cold-max		3	4											ring														0
Fire		1	1	1	25		20				100	10129	res-fire-max		1	2											ring														0
Fire		1	1	1	45		35				100	10129	res-fire-max		3	4											ring														0
Poison		1	1	1	25		20				100	10130	res-pois-max		1	2											ring														0
Poison		1	1	1	45		35				100	10130	res-pois-max		3	4											ring														0
Prismatic		1	1	1	40		35				200	10131	res-all-max		1	1											ring														0
Apprentice’s		1	1	1	1		1				100	10132	cast1		5	10											ring														0
Magus’s		1	1	1	50		40				100	10132	cast1		11	15											ring														0
Blood Letting		1	1	1	1	26	1				100	10133	heal-kill		1	2											ring														0
Murderous		1	1	1	26		20				100	10133	heal-kill		3	7											ring														0
Blood Sucking		1	1	1	50		40				100	10133	heal-kill		8	15											ring														0
Triumphant		1	1	1	1	26	1				100	10134	mana-kill		1	1											ring														0
Victorious		1	1	1	26		20				100	10134	mana-kill		2	2											ring														0
Aureolin		1	1	1	50		40				100	10134	mana-kill		3	3											ring														0
Rookie’s		1	1	1	1		1				100	10135	addxp		3	6											boot														0
Student’s		1	1	1	20		15				100	10135	addxp		7	10											boot														0
Scholar’s		1	1	1	35		30				100	10135	addxp		11	15											boot														0
Lucky		1	1	1	1		1				100	10136	mag%		15	25											boot														0
Lucky		1	1	1	20		15				100	10136	mag%		26	35											boot														0
Lucky		1	1	1	35		30				100	10136	mag%		36	45											boot														0
Greedy		1	1	1	1		1				100	10137	gold%		40	80											boot														0
Greedy		1	1	1	20		15				100	10137	gold%		81	120											boot														0
Greedy		1	1	1	35		30				100	10137	gold%		121	160											boot														0
Tangerine		1	1	1	1		1				100	10138	res-ltng		10	20											boot														0
Ocher		1	1	1	25		20				100	10138	res-ltng		21	30											boot														0
Coral		1	1	1	45		40				100	10138	res-ltng		31	40											boot														0
Amber		1	1	1	65		60				100	10138	res-ltng		41	50											boot														0
Azure		1	1	1	1		1				100	10139	res-cold		10	20											boot														0
Lapis		1	1	1	25		20				100	10139	res-cold		21	30											boot														0
Cobalt		1	1	1	45		40				100	10139	res-cold		31	40											boot														0
Sapphire		1	1	1	65		60				100	10139	res-cold		41	50											boot														0
Crimson		1	1	1	1		1				100	10140	res-fire		10	20											boot														0
Burgundy		1	1	1	25		20				100	10140	res-fire		21	30											boot														0
Garnet		1	1	1	45		40				100	10140	res-fire		31	40											boot														0
Ruby		1	1	1	65		60				100	10140	res-fire		41	50											boot														0
Beryl		1	1	1	1		1				100	10141	res-pois		10	20											boot														0
Jade		1	1	1	25		20				100	10141	res-pois		21	30											boot														0
Viridian		1	1	1	45		40				100	10141	res-pois		31	40											boot														0
Emerald		1	1	1	65		60				100	10141	res-pois		41	50											boot														0
Prismatic		1	1	1	1		1				100	10142	res-all		4	6											boot														0
Prismatic		1	1	1	25		20				100	10142	res-all		7	9											boot														0
Prismatic		1	1	1	45		40				100	10142	res-all		10	12											boot														0
Prismatic		1	1	1	65		60				100	10142	res-all		13	15											boot														0
Tank’s		1	1	1	25		20				100	10143	hp%		2	3											boot														0
Tank’s		1	1	1	50		45				100	10143	hp%		4	5											boot														0
Life’s		1	1	1	1	26	1				100	10144	hp		10	20											boot														0
Jackal’s		1	1	1	15		10				100	10144	hp		21	30											boot														0
Fox’s		1	1	1	25		20				100	10144	hp		31	40											boot														0
Wolf’s		1	1	1	35		30				100	10144	hp		41	50											boot														0
Tiger’s		1	1	1	45		40				100	10144	hp		51	60											boot														0
Mammoth’s		1	1	1	55		50				100	10144	hp		61	70											boot														0
Colosuss’s		1	1	1	65		60				100	10144	hp		71	80											boot														0
Whale’s		1	1	1	75		70				100	10144	hp		81	90											boot														0
Lizard's		1	1	1	1	26	1				100	10145	mana		10	20											boot														0
Snake's		1	1	1	15		10				100	10145	mana		21	35											boot														0
Serpent's		1	1	1	25		20				100	10145	mana		36	55											boot														0
Drake's		1	1	1	35		30				100	10145	mana		56	80											boot														0
Dragon's		1	1	1	45		40				100	10145	mana		81	110											boot														0
Pacing		1	1	1	20		15				100	10146	move2		10	20											boot														0
Haste		1	1	1	40		35				100	10146	move2		21	30											boot														0
Haste		1	1	1	60		50				100	10146	move2		31	40											boot														0
Haste		1	1	1	80		60				100	10146	move2		41	50											boot														0
Conduit		1	1	1	1		1				100	10147	extra-ltng		10	20											boot														0
Conduit		1	1	1	30		25				100	10147	extra-ltng		21	30											boot														0
Numbing		1	1	1	1		1				100	10147	extra-cold		10	20											boot														0
Numbing		1	1	1	30		25				100	10147	extra-cold		21	30											boot														0
Inferno		1	1	1	1		1				100	10147	extra-fire		10	20											boot														0
Inferno		1	1	1	30		25				100	10147	extra-fire		21	30											boot														0
Infectious		1	1	1	1		1				100	10147	extra-pois		10	20											boot														0
Infectious		1	1	1	30		25				100	10147	extra-pois		21	30											boot														0
Scintillating		1	1	1	1		1				100	10147	extra-magi		10	20											boot														0
Scintillating		1	1	1	30		25				100	10147	extra-magi		21	30											boot														0
Discharging		1	1	1	1		1				100	10148	pierce-ltng		4	6											boot														0
Discharging		1	1	1	30		25				100	10148	pierce-ltng		7	9											boot														0
Frigid		1	1	1	1		1				100	10148	pierce-cold		4	6											boot														0
Frigid		1	1	1	30		25				100	10148	pierce-cold		7	9											boot														0
Wildfire		1	1	1	1		1				100	10148	pierce-fire		4	6											boot														0
Wildfire		1	1	1	30		25				100	10148	pierce-fire		7	9											boot														0
Malicious		1	1	1	1		1				100	10148	pierce-pois		4	6											boot														0
Malicious		1	1	1	30		25				100	10148	pierce-pois		7	9											boot														0
Lethal		1	1	1	1		1				100	10148	pierce-phys		4	6											boot														0
Lethal		1	1	1	30		25				100	10148	pierce-phys		7	9											boot														0
Superior		1	1	1	50		42				5	10149	allskills		1	1											boot														0
Warm		1	1	1	10		7				500	10150	half-freeze		1	1											boot														0
Lightning		1	1	1	25		20				100	10151	res-ltng-max		1	2											boot														0
Lightning		1	1	1	45		35				100	10151	res-ltng-max		3	4											boot														0
Lightning		1	1	1	65		55				100	10151	res-ltng-max		5	6											boot														0
Lightning		1	1	1	85		75				100	10151	res-ltng-max		7	8											boot														0
Cold		1	1	1	25		20				100	10152	res-cold-max		1	2											boot														0
Cold		1	1	1	45		35				100	10152	res-cold-max		3	4											boot														0
Cold		1	1	1	65		55				100	10152	res-cold-max		5	6											boot														0
Cold		1	1	1	85		75				100	10152	res-cold-max		7	8											boot														0
Fire		1	1	1	25		20				100	10153	res-fire-max		1	2											boot														0
Fire		1	1	1	45		35				100	10153	res-fire-max		3	4											boot														0
Fire		1	1	1	65		55				100	10153	res-fire-max		5	6											boot														0
Fire		1	1	1	85		75				100	10153	res-fire-max		7	8											boot														0
Poison		1	1	1	25		20				100	10154	res-pois-max		1	2											boot														0
Poison		1	1	1	45		35				100	10154	res-pois-max		3	4											boot														0
Poison		1	1	1	65		55				100	10154	res-pois-max		5	6											boot														0
Poison		1	1	1	85		75				100	10154	res-pois-max		7	8											boot														0
Poison		1	1	1	40		35				200	10155	res-all-max		1	1											boot														0
Poison		1	1	1	80		70				200	10155	res-all-max		2	2											boot														0
Blood Letting		1	1	1	1	26	1				100	10156	heal-kill		1	3											boot														0
Murderous		1	1	1	26		20				100	10156	heal-kill		4	10											boot														0
Blood Sucking		1	1	1	50		40				100	10156	heal-kill		11	25											boot														0
Triumphant		1	1	1	1	26	1				100	10157	mana-kill		1	2											boot														0
Victorious		1	1	1	26		20				100	10157	mana-kill		3	4											boot														0
Aureolin		1	1	1	50		40				100	10157	mana-kill		5	6											boot														0
Speedy		1	1	1	18		18				100	10158	aura	115	1	1											boot														0
Bulky		1	1	1	25		20				100	10159	red-dmg%		3	4											boot														0
Bulky		1	1	1	50		40				100	10159	red-dmg%		5	6											boot														0
Skillful		1	1	1	30		30				5	10160	skill	6	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	7	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	8	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	9	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	10	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	11	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	12	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	13	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	14	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	15	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	16	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	17	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	18	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	19	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	20	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	21	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	22	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	23	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	24	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	25	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	26	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	27	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	28	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	29	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	30	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	31	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	32	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	33	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	34	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	35	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	36	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	37	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	38	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	39	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	40	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	41	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	42	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	43	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	44	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	45	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	46	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	47	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	48	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	49	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	50	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	51	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	52	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	53	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	54	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	55	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	56	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	57	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	58	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	59	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	60	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	61	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	62	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	63	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	64	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	65	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	66	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	67	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	68	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	69	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	70	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	71	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	72	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	73	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	74	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	75	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	76	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	77	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	78	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	79	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	80	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	81	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	82	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	83	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	84	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	85	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	86	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	87	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	88	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	89	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	90	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	91	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	92	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	93	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	94	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	95	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	96	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	97	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	98	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	99	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	100	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	101	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	102	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	103	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	104	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	105	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	106	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	107	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	108	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	109	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	110	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	111	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	112	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	113	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	114	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	115	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	116	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	117	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	118	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	119	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	120	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	121	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	122	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	123	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	124	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	125	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	126	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	128	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	130	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	131	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	132	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	133	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	134	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	135	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	137	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	138	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	139	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	140	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	141	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	142	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	143	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	144	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	145	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	146	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	147	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	148	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	149	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	150	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	151	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	152	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	153	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	154	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	155	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	221	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	222	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	223	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	224	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	225	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	226	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	227	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	228	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	229	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	230	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	231	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	232	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	233	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	234	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	235	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	236	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	237	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	238	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	239	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	240	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	241	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	242	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	243	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	244	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	245	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	246	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	247	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	248	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	249	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	250	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	251	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	252	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	253	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	254	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	255	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	256	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	257	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	258	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	259	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	260	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	261	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	262	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	263	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	264	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	265	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	266	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	267	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	268	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	269	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	270	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	271	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	272	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	273	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	274	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	275	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	276	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	277	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	278	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	279	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	280	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	364	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	365	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	366	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	367	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	368	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	369	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	370	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	371	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	374	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	376	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	378	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	380	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	381	1	2											boot														0
Skillful		1	1	1	30		30				5	10160	skill	383	1	2											boot														0
Balancing		1	1	1	1		1				100	10199	balance1		8	11											boot														0
Stable		1	1	1	30		25				100	10199	balance1		12	15											boot														0
Jagged		1	1	1	1		1				100	10161	dmg%	0	20	30											glov														0
Deadly		1	1	1	15		10				100	10161	dmg%	0	31	40											glov														0
Vicious		1	1	1	30		25				100	10161	dmg%	0	41	50											glov														0
Brutal		1	1	1	45		40				100	10161	dmg%	0	51	60											glov														0
Massive		1	1	1	60		55				100	10161	dmg%	0	61	70											glov														0
Savage		1	1	1	75		70				100	10161	dmg%	0	71	80											glov														0
Savage		1	1	1	20		15				100	10162	deadly		5	10											glov														0
Devastating		1	1	1	40		35				100	10162	deadly		11	15											glov														0
Havoc		1	1	1	60		55				100	10162	deadly		16	20											glov														0
Ready		1	1	1	1		1				100	10163	swing1		10	15											glov														0
Swift		1	1	1	30		25				100	10163	swing2		16	20											glov														0
Quick		1	1	1	60		55				100	10163	swing2		21	25											glov														0
Red		1	1	1	1		1				100	10164	dmg-min		3	6											glov														0
Sanguinary		1	1	1	15		10				100	10164	dmg-min		7	10											glov														0
Bloody		1	1	1	30		25				100	10164	dmg-min		11	14											glov														0
Scarlet		1	1	1	50		45				100	10164	dmg-min		15	18											glov														0
Jagged		1	1	1	1		1				100	10165	dmg-max		3	6											glov														0
Forked		1	1	1	15		10				100	10165	dmg-max		7	10											glov														0
Serrated		1	1	1	30		25				100	10165	dmg-max		11	14											glov														0
Vermillion		1	1	1	50		45				100	10165	dmg-max		15	18											glov														0
Rookie’s		1	1	1	1		1				100	10166	addxp		3	6											glov														0
Student’s		1	1	1	20		15				100	10166	addxp		7	10											glov														0
Lucky		1	1	1	1		1				100	10168	mag%		15	25											glov														0
Lucky		1	1	1	20		15				100	10168	mag%		26	35											glov														0
Lucky		1	1	1	35		30				100	10168	mag%		36	45											glov														0
Greedy		1	1	1	1		1				100	10169	gold%		40	80											glov														0
Greedy		1	1	1	20		15				100	10169	gold%		81	120											glov														0
Greedy		1	1	1	35		30				100	10169	gold%		121	160											glov														0
Tangerine		1	1	1	1		1				100	10170	res-ltng		10	20											glov														0
Ocher		1	1	1	25		20				100	10170	res-ltng		21	30											glov														0
Coral		1	1	1	45		40				100	10170	res-ltng		31	40											glov														0
Amber		1	1	1	65		60				100	10170	res-ltng		41	50											glov														0
Azure		1	1	1	1		1				100	10171	res-cold		10	20											glov														0
Lapis		1	1	1	25		20				100	10171	res-cold		21	30											glov														0
Cobalt		1	1	1	45		40				100	10171	res-cold		31	40											glov														0
Sapphire		1	1	1	65		60				100	10171	res-cold		41	50											glov														0
Crimson		1	1	1	1		1				100	10172	res-fire		10	20											glov														0
Burgundy		1	1	1	25		20				100	10172	res-fire		21	30											glov														0
Garnet		1	1	1	45		40				100	10172	res-fire		31	40											glov														0
Ruby		1	1	1	65		60				100	10172	res-fire		41	50											glov														0
Beryl		1	1	1	1		1				100	10173	res-pois		10	20											glov														0
Jade		1	1	1	25		20				100	10173	res-pois		21	30											glov														0
Viridian		1	1	1	45		40				100	10173	res-pois		31	40											glov														0
Emerald		1	1	1	65		60				100	10173	res-pois		41	50											glov														0
Prismatic		1	1	1	1		1				100	10174	res-all		4	6											glov														0
Prismatic		1	1	1	25		20				100	10174	res-all		7	9											glov														0
Prismatic		1	1	1	45		40				100	10174	res-all		10	12											glov														0
Prismatic		1	1	1	65		60				100	10174	res-all		13	15											glov														0
Tank’s		1	1	1	25		20				100	10175	hp%		2	3											glov														0
Tank’s		1	1	1	50		45				100	10175	hp%		4	5											glov														0
Life’s		1	1	1	1	26	1				100	10176	hp		10	20											glov														0
Jackal’s		1	1	1	15		10				100	10176	hp		21	30											glov														0
Fox’s		1	1	1	25		20				100	10176	hp		31	40											glov														0
Wolf’s		1	1	1	35		30				100	10176	hp		41	50											glov														0
Tiger’s		1	1	1	45		40				100	10176	hp		51	60											glov														0
Mammoth’s		1	1	1	55		50				100	10176	hp		61	70											glov														0
Colosuss’s		1	1	1	65		60				100	10176	hp		71	80											glov														0
Whale’s		1	1	1	75		70				100	10176	hp		81	90											glov														0
Lizard's		1	1	1	1	26	1				100	10177	mana		10	20											glov														0
Snake's		1	1	1	15		10				100	10177	mana		21	35											glov														0
Serpent's		1	1	1	25		20				100	10177	mana		36	55											glov														0
Drake's		1	1	1	35		30				100	10177	mana		56	80											glov														0
Dragon's		1	1	1	45		40				100	10177	mana		81	110											glov														0
Ember		1	1	1	1	26	1				100	10178	fire-min		5	6	fire-max		10	12							glov														0
Smoldering		1	1	1	35		26				100	10178	fire-min		30	35	fire-max		40	50							glov														0
Smoking		1	1	1	47		37				100	10178	fire-min		80	90	fire-max		120	135							glov														0
Flaming		1	1	1	61		51				100	10178	fire-min		180	200	fire-max		250	280							glov														0
Scorching		1	1	1	77		67				100	10178	fire-min		300	320	fire-max		370	410							glov														0
Static		1	1	1	1	26	1				100	10179	ltng-min		1	1	ltng-max		14	17							glov														0
Glowing		1	1	1	35		26				100	10179	ltng-min		1	1	ltng-max		69	84							glov														0
Buzzing		1	1	1	47		37				100	10179	ltng-min		1	1	ltng-max		199	224							glov														0
Arcing		1	1	1	61		51				100	10179	ltng-min		1	1	ltng-max		429	479							glov														0
Shocking		1	1	1	77		67				100	10179	ltng-min		1	1	ltng-max		669	709							glov														0
Cold		1	1	1	1	26	1				100	10180	cold-len		50	50	cold-min		5	6	cold-max		10	12			glov														0
Snowflake		1	1	1	35		26				100	10180	cold-len		50	50	cold-min		30	35	cold-max		40	50			glov														0
Shivering		1	1	1	47		37				100	10180	cold-len		50	50	cold-min		80	90	cold-max		120	135			glov														0
Boreal		1	1	1	61		51				100	10180	cold-len		50	50	cold-min		180	200	cold-max		250	280			glov														0
Hibernal		1	1	1	77		67				100	10180	cold-len		50	50	cold-min		300	320	cold-max		370	410			glov														0
Conduit		1	1	1	1		1				100	10181	extra-ltng		10	20											glov														0
Conduit		1	1	1	30		25				100	10181	extra-ltng		21	30											glov														0
Numbing		1	1	1	1		1				100	10181	extra-cold		10	20											glov														0
Numbing		1	1	1	30		25				100	10181	extra-cold		21	30											glov														0
Inferno		1	1	1	1		1				100	10181	extra-fire		10	20											glov														0
Inferno		1	1	1	30		25				100	10181	extra-fire		21	30											glov														0
Infectious		1	1	1	1		1				100	10181	extra-pois		10	20											glov														0
Infectious		1	1	1	30		25				100	10181	extra-pois		21	30											glov														0
Scintillating		1	1	1	1		1				100	10181	extra-magi		10	20											glov														0
Scintillating		1	1	1	30		25				100	10181	extra-magi		21	30											glov														0
Discharging		1	1	1	1		1				100	10182	pierce-ltng		4	6											glov														0
Discharging		1	1	1	30		25				100	10182	pierce-ltng		7	9											glov														0
Frigid		1	1	1	1		1				100	10182	pierce-cold		4	6											glov														0
Frigid		1	1	1	30		25				100	10182	pierce-cold		7	9											glov														0
Wildfire		1	1	1	1		1				100	10182	pierce-fire		4	6											glov														0
Wildfire		1	1	1	30		25				100	10182	pierce-fire		7	9											glov														0
Malicious		1	1	1	1		1				100	10182	pierce-pois		4	6											glov														0
Malicious		1	1	1	30		25				100	10182	pierce-pois		7	9											glov														0
Lethal		1	1	1	1		1				100	10182	pierce-phys		4	6											glov														0
Lethal		1	1	1	30		25				100	10182	pierce-phys		7	9											glov														0
Superior		1	1	1	50		42				5	10183	allskills		1	1											glov														0
Warm		1	1	1	10		7				500	10184	half-freeze		1	1											glov														0
Lightning		1	1	1	25		20				100	10185	res-ltng-max		1	2											glov														0
Lightning		1	1	1	45		35				100	10185	res-ltng-max		3	4											glov														0
Lightning		1	1	1	65		55				100	10185	res-ltng-max		5	6											glov														0
Lightning		1	1	1	85		75				100	10185	res-ltng-max		7	8											glov														0
Cold		1	1	1	25		20				100	10186	res-cold-max		1	2											glov														0
Cold		1	1	1	45		35				100	10186	res-cold-max		3	4											glov														0
Cold		1	1	1	65		55				100	10186	res-cold-max		5	6											glov														0
Cold		1	1	1	85		75				100	10186	res-cold-max		7	8											glov														0
Fire		1	1	1	25		20				100	10187	res-fire-max		1	2											glov														0
Fire		1	1	1	45		35				100	10187	res-fire-max		3	4											glov														0
Fire		1	1	1	65		55				100	10187	res-fire-max		5	6											glov														0
Fire		1	1	1	85		75				100	10187	res-fire-max		7	8											glov														0
Poison		1	1	1	25		20				100	10188	res-pois-max		1	2											glov														0
Poison		1	1	1	45		35				100	10188	res-pois-max		3	4											glov														0
Poison		1	1	1	65		55				100	10188	res-pois-max		5	6											glov														0
Poison		1	1	1	85		75				100	10188	res-pois-max		7	8											glov														0
Poison		1	1	1	40		35				200	10189	res-all-max		1	1											glov														0
Poison		1	1	1	80		70				200	10189	res-all-max		2	2											glov														0
Blood Letting		1	1	1	1	26	1				100	10190	heal-kill		1	3											glov														0
Murderous		1	1	1	26		20				100	10190	heal-kill		4	10											glov														0
Blood Sucking		1	1	1	50		40				100	10190	heal-kill		11	25											glov														0
Triumphant		1	1	1	1	26	1				100	10191	mana-kill		1	2											glov														0
Victorious		1	1	1	26		20				100	10191	mana-kill		3	4											glov														0
Aureolin		1	1	1	50		40				100	10191	mana-kill		5	6											glov														0
Bulky		1	1	1	25		20				100	10192	red-dmg%		3	4											glov														0
Bulky		1	1	1	50		40				100	10192	red-dmg%		5	6											glov														0
Skillful		1	1	1	30		30				5	10193	skill	6	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	7	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	8	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	9	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	10	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	11	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	12	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	13	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	14	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	15	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	16	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	17	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	18	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	19	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	20	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	21	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	22	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	23	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	24	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	25	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	26	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	27	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	28	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	29	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	30	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	31	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	32	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	33	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	34	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	35	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	36	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	37	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	38	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	39	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	40	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	41	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	42	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	43	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	44	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	45	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	46	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	47	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	48	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	49	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	50	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	51	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	52	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	53	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	54	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	55	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	56	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	57	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	58	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	59	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	60	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	61	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	62	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	63	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	64	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	65	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	66	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	67	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	68	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	69	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	70	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	71	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	72	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	73	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	74	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	75	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	76	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	77	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	78	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	79	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	80	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	81	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	82	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	83	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	84	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	85	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	86	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	87	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	88	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	89	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	90	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	91	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	92	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	93	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	94	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	95	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	96	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	97	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	98	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	99	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	100	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	101	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	102	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	103	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	104	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	105	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	106	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	107	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	108	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	109	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	110	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	111	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	112	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	113	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	114	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	115	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	116	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	117	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	118	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	119	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	120	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	121	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	122	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	123	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	124	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	125	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	126	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	128	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	130	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	131	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	132	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	133	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	134	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	135	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	137	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	138	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	139	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	140	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	141	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	142	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	143	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	144	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	145	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	146	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	147	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	148	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	149	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	150	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	151	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	152	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	153	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	154	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	155	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	221	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	222	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	223	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	224	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	225	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	226	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	227	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	228	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	229	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	230	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	231	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	232	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	233	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	234	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	235	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	236	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	237	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	238	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	239	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	240	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	241	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	242	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	243	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	244	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	245	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	246	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	247	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	248	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	249	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	250	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	251	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	252	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	253	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	254	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	255	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	256	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	257	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	258	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	259	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	260	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	261	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	262	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	263	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	264	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	265	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	266	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	267	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	268	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	269	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	270	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	271	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	272	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	273	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	274	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	275	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	276	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	277	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	278	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	279	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	280	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	364	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	365	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	366	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	367	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	368	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	369	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	370	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	371	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	374	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	376	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	378	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	380	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	381	1	2											glov														0
Skillful		1	1	1	30		30				5	10193	skill	383	1	2											glov														0
Bronze		1	1	1	1		1				100	10194	att	0	20	40											glov														0
Iron		1	1	1	15		10				100	10194	att	0	41	60											glov														0
Steel		1	1	1	25		20				100	10194	att	0	61	80											glov														0
Silver		1	1	1	35		30				100	10194	att	0	81	100											glov														0
Gold		1	1	1	45		40				100	10194	att	0	101	120											glov														0
Platinum		1	1	1	55		50				100	10194	att	0	121	140											glov														0
Meteoric		1	1	1	65		60				100	10194	att	0	141	160											glov														0
Leech		1	1	1	6		4				100	10195	lifesteal		4	7											glov														0
Locust		1	1	1	20		15				100	10195	lifesteal		8	10											glov														0
Bat		1	1	1	6		4				100	10196	manasteal		4	7											glov														0
Vampire		1	1	1	20		15				100	10196	manasteal		8	10											glov														0
Crushing		1	1	1	25		20				100	10197	crush		10	20											glov														0
Balancing		1	1	1	1		1				100	10198	balance1		8	11											glov														0
Stable		1	1	1	30		25				100	10198	balance1		12	15											glov														0
Apprentice’s		1	1	1	1		1				100	10132	cast1		5	10											glov														0
Magus’s		1	1	1	50		40				100	10132	cast1		11	15											glov														0
Jagged		1	1	1	1		1				100	10161	dmg%	0	20	30											helm														0
Deadly		1	1	1	15		10				100	10161	dmg%	0	31	40											helm														0
Vicious		1	1	1	30		25				100	10161	dmg%	0	41	50											helm														0
Brutal		1	1	1	45		40				100	10161	dmg%	0	51	60											helm														0
Massive		1	1	1	60		55				100	10161	dmg%	0	61	70											helm														0
Savage		1	1	1	75		70				100	10161	dmg%	0	71	80											helm														0
Savage		1	1	1	20		15				100	10162	deadly		5	10											helm														0
Devastating		1	1	1	40		35				100	10162	deadly		11	15											helm														0
Havoc		1	1	1	60		55				100	10162	deadly		16	20											helm														0
Red		1	1	1	1		1				100	10164	dmg-min		3	6											helm														0
Sanguinary		1	1	1	15		10				100	10164	dmg-min		7	10											helm														0
Bloody		1	1	1	30		25				100	10164	dmg-min		11	14											helm														0
Scarlet		1	1	1	50		45				100	10164	dmg-min		15	18											helm														0
Jagged		1	1	1	1		1				100	10165	dmg-max		3	6											helm														0
Forked		1	1	1	15		10				100	10165	dmg-max		7	10											helm														0
Serrated		1	1	1	30		25				100	10165	dmg-max		11	14											helm														0
Vermillion		1	1	1	50		45				100	10165	dmg-max		15	18											helm														0
Rookie’s		1	1	1	1		1				200	10166	addxp		3	6											helm														0
Student’s		1	1	1	20		15				200	10166	addxp		7	10											helm														0
Scholar’s		1	1	1	35		30				200	10166	addxp		10	15											helm														0
Lucky		1	1	1	1		1				100	10168	mag%		15	25											helm														0
Lucky		1	1	1	20		15				100	10168	mag%		26	35											helm														0
Lucky		1	1	1	35		30				100	10168	mag%		36	45											helm														0
Greedy		1	1	1	1		1				100	10169	gold%		40	80											helm														0
Greedy		1	1	1	20		15				100	10169	gold%		81	120											helm														0
Greedy		1	1	1	35		30				100	10169	gold%		121	160											helm														0
Tangerine		1	1	1	1		1				100	10170	res-ltng		10	20											helm														0
Ocher		1	1	1	25		20				100	10170	res-ltng		21	30											helm														0
Coral		1	1	1	45		40				100	10170	res-ltng		31	40											helm														0
Amber		1	1	1	65		60				100	10170	res-ltng		41	50											helm														0
Azure		1	1	1	1		1				100	10171	res-cold		10	20											helm														0
Lapis		1	1	1	25		20				100	10171	res-cold		21	30											helm														0
Cobalt		1	1	1	45		40				100	10171	res-cold		31	40											helm														0
Sapphire		1	1	1	65		60				100	10171	res-cold		41	50											helm														0
Crimson		1	1	1	1		1				100	10172	res-fire		10	20											helm														0
Burgundy		1	1	1	25		20				100	10172	res-fire		21	30											helm														0
Garnet		1	1	1	45		40				100	10172	res-fire		31	40											helm														0
Ruby		1	1	1	65		60				100	10172	res-fire		41	50											helm														0
Beryl		1	1	1	1		1				100	10173	res-pois		10	20											helm														0
Jade		1	1	1	25		20				100	10173	res-pois		21	30											helm														0
Viridian		1	1	1	45		40				100	10173	res-pois		31	40											helm														0
Emerald		1	1	1	65		60				100	10173	res-pois		41	50											helm														0
Prismatic		1	1	1	1		1				100	10174	res-all		4	6											helm														0
Prismatic		1	1	1	25		20				100	10174	res-all		7	9											helm														0
Prismatic		1	1	1	45		40				100	10174	res-all		10	12											helm														0
Prismatic		1	1	1	65		60				100	10174	res-all		13	15											helm														0
Tank’s		1	1	1	25		20				100	10175	hp%		2	3											helm														0
Tank’s		1	1	1	50		45				100	10175	hp%		4	5											helm														0
Life’s		1	1	1	1	26	1				100	10176	hp		10	20											helm														0
Jackal’s		1	1	1	15		10				100	10176	hp		21	30											helm														0
Fox’s		1	1	1	25		20				100	10176	hp		31	40											helm														0
Wolf’s		1	1	1	35		30				100	10176	hp		41	50											helm														0
Tiger’s		1	1	1	45		40				100	10176	hp		51	60											helm														0
Mammoth’s		1	1	1	55		50				100	10176	hp		61	70											helm														0
Colosuss’s		1	1	1	65		60				100	10176	hp		71	80											helm														0
Whale’s		1	1	1	75		70				100	10176	hp		81	90											helm														0
Lizard's		1	1	1	1	26	1				100	10177	mana		10	20											helm														0
Snake's		1	1	1	15		10				100	10177	mana		21	35											helm														0
Serpent's		1	1	1	25		20				100	10177	mana		36	55											helm														0
Drake's		1	1	1	35		30				100	10177	mana		56	80											helm														0
Dragon's		1	1	1	45		40				100	10177	mana		81	110											helm														0
Ember		1	1	1	1	26	1				100	10178	fire-min		5	6	fire-max		10	12							helm														0
Smoldering		1	1	1	35		26				100	10178	fire-min		30	35	fire-max		40	50							helm														0
Smoking		1	1	1	47		37				100	10178	fire-min		80	90	fire-max		120	135							helm														0
Flaming		1	1	1	61		51				100	10178	fire-min		180	200	fire-max		250	280							helm														0
Scorching		1	1	1	77		67				100	10178	fire-min		300	320	fire-max		370	410							helm														0
Static		1	1	1	1	26	1				100	10179	ltng-min		1	1	ltng-max		14	17							helm														0
Glowing		1	1	1	35		26				100	10179	ltng-min		1	1	ltng-max		69	84							helm														0
Buzzing		1	1	1	47		37				100	10179	ltng-min		1	1	ltng-max		199	224							helm														0
Arcing		1	1	1	61		51				100	10179	ltng-min		1	1	ltng-max		429	479							helm														0
Shocking		1	1	1	77		67				100	10179	ltng-min		1	1	ltng-max		669	709							helm														0
Cold		1	1	1	1	26	1				100	10180	cold-len		50	50	cold-min		5	6	cold-max		10	12			helm														0
Snowflake		1	1	1	35		26				100	10180	cold-len		50	50	cold-min		30	35	cold-max		40	50			helm														0
Shivering		1	1	1	47		37				100	10180	cold-len		50	50	cold-min		80	90	cold-max		120	135			helm														0
Boreal		1	1	1	61		51				100	10180	cold-len		50	50	cold-min		180	200	cold-max		250	280			helm														0
Hibernal		1	1	1	77		67				100	10180	cold-len		50	50	cold-min		300	320	cold-max		370	410			helm														0
Conduit		1	1	1	1		1				100	10181	extra-ltng		10	20											helm														0
Conduit		1	1	1	30		25				100	10181	extra-ltng		21	30											helm														0
Numbing		1	1	1	1		1				100	10181	extra-cold		10	20											helm														0
Numbing		1	1	1	30		25				100	10181	extra-cold		21	30											helm														0
Inferno		1	1	1	1		1				100	10181	extra-fire		10	20											helm														0
Inferno		1	1	1	30		25				100	10181	extra-fire		21	30											helm														0
Infectious		1	1	1	1		1				100	10181	extra-pois		10	20											helm														0
Infectious		1	1	1	30		25				100	10181	extra-pois		21	30											helm														0
Scintillating		1	1	1	1		1				100	10181	extra-magi		10	20											helm														0
Scintillating		1	1	1	30		25				100	10181	extra-magi		21	30											helm														0
Discharging		1	1	1	1		1				100	10182	pierce-ltng		4	6											helm														0
Discharging		1	1	1	30		25				100	10182	pierce-ltng		7	9											helm														0
Frigid		1	1	1	1		1				100	10182	pierce-cold		4	6											helm														0
Frigid		1	1	1	30		25				100	10182	pierce-cold		7	9											helm														0
Wildfire		1	1	1	1		1				100	10182	pierce-fire		4	6											helm														0
Wildfire		1	1	1	30		25				100	10182	pierce-fire		7	9											helm														0
Malicious		1	1	1	1		1				100	10182	pierce-pois		4	6											helm														0
Malicious		1	1	1	30		25				100	10182	pierce-pois		7	9											helm														0
Lethal		1	1	1	1		1				100	10182	pierce-phys		4	6											helm														0
Lethal		1	1	1	30		25				100	10182	pierce-phys		7	9											helm														0
Superior		1	1	1	50		42				5	10183	allskills		1	1											helm														0
Warm		1	1	1	10		7				500	10184	half-freeze		1	1											helm														0
Lightning		1	1	1	25		20				100	10185	res-ltng-max		1	2											helm														0
Lightning		1	1	1	45		35				100	10185	res-ltng-max		3	4											helm														0
Lightning		1	1	1	65		55				100	10185	res-ltng-max		5	6											helm														0
Lightning		1	1	1	85		75				100	10185	res-ltng-max		7	8											helm														0
Cold		1	1	1	25		20				100	10186	res-cold-max		1	2											helm														0
Cold		1	1	1	45		35				100	10186	res-cold-max		3	4											helm														0
Cold		1	1	1	65		55				100	10186	res-cold-max		5	6											helm														0
Cold		1	1	1	85		75				100	10186	res-cold-max		7	8											helm														0
Fire		1	1	1	25		20				100	10187	res-fire-max		1	2											helm														0
Fire		1	1	1	45		35				100	10187	res-fire-max		3	4											helm														0
Fire		1	1	1	65		55				100	10187	res-fire-max		5	6											helm														0
Fire		1	1	1	85		75				100	10187	res-fire-max		7	8											helm														0
Poison		1	1	1	25		20				100	10188	res-pois-max		1	2											helm														0
Poison		1	1	1	45		35				100	10188	res-pois-max		3	4											helm														0
Poison		1	1	1	65		55				100	10188	res-pois-max		5	6											helm														0
Poison		1	1	1	85		75				100	10188	res-pois-max		7	8											helm														0
Poison		1	1	1	40		35				200	10189	res-all-max		1	1											helm														0
Poison		1	1	1	80		70				200	10189	res-all-max		2	2											helm														0
Blood Letting		1	1	1	1	26	1				100	10190	heal-kill		1	3											helm														0
Murderous		1	1	1	26		20				100	10190	heal-kill		4	10											helm														0
Blood Sucking		1	1	1	50		40				100	10190	heal-kill		11	25											helm														0
Triumphant		1	1	1	1	26	1				100	10191	mana-kill		1	2											helm														0
Victorious		1	1	1	26		20				100	10191	mana-kill		3	4											helm														0
Aureolin		1	1	1	50		40				100	10191	mana-kill		5	6											helm														0
Bulky		1	1	1	25		20				100	10192	red-dmg%		4	6											helm														0
Bulky		1	1	1	50		40				100	10192	red-dmg%		7	9											helm														0
Bulky		1	1	1	70		50				100	10192	red-dmg%		10	12											helm														0
Skillful		1	1	1	30		30				5	10193	skill	6	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	7	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	8	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	9	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	10	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	11	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	12	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	13	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	14	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	15	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	16	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	17	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	18	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	19	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	20	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	21	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	22	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	23	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	24	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	25	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	26	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	27	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	28	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	29	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	30	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	31	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	32	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	33	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	34	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	35	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	36	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	37	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	38	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	39	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	40	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	41	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	42	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	43	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	44	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	45	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	46	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	47	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	48	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	49	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	50	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	51	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	52	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	53	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	54	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	55	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	56	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	57	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	58	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	59	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	60	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	61	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	62	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	63	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	64	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	65	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	66	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	67	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	68	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	69	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	70	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	71	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	72	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	73	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	74	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	75	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	76	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	77	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	78	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	79	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	80	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	81	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	82	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	83	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	84	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	85	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	86	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	87	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	88	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	89	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	90	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	91	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	92	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	93	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	94	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	95	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	96	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	97	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	98	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	99	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	100	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	101	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	102	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	103	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	104	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	105	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	106	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	107	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	108	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	109	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	110	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	111	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	112	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	113	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	114	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	115	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	116	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	117	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	118	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	119	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	120	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	121	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	122	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	123	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	124	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	125	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	126	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	128	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	130	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	131	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	132	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	133	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	134	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	135	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	137	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	138	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	139	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	140	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	141	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	142	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	143	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	144	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	145	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	146	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	147	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	148	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	149	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	150	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	151	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	152	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	153	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	154	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	155	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	221	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	222	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	223	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	224	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	225	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	226	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	227	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	228	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	229	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	230	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	231	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	232	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	233	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	234	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	235	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	236	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	237	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	238	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	239	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	240	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	241	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	242	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	243	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	244	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	245	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	246	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	247	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	248	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	249	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	250	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	251	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	252	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	253	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	254	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	255	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	256	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	257	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	258	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	259	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	260	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	261	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	262	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	263	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	264	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	265	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	266	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	267	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	268	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	269	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	270	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	271	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	272	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	273	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	274	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	275	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	276	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	277	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	278	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	279	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	280	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	364	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	365	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	366	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	367	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	368	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	369	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	370	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	371	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	374	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	376	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	378	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	380	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	381	1	2											helm							phlm	pelt						0
Skillful		1	1	1	30		30				5	10193	skill	383	1	2											helm							phlm	pelt						0
Bronze		1	1	1	1		1				100	10194	att	0	25	50											helm														0
Iron		1	1	1	15		10				100	10194	att	0	51	75											helm														0
Steel		1	1	1	25		20				100	10194	att	0	76	100											helm														0
Silver		1	1	1	35		30				100	10194	att	0	101	125											helm														0
Gold		1	1	1	45		40				100	10194	att	0	126	150											helm														0
Platinum		1	1	1	55		50				100	10194	att	0	151	175											helm														0
Meteoric		1	1	1	65		60				100	10194	att	0	176	200											helm														0
Balancing		1	1	1	1		1				100	10198	balance1		8	11											helm														0
Stable		1	1	1	30		25				100	10198	balance1		12	15											helm														0
Maiden's		1	1	1	30		25	ama			100	10123	ama		1	1											helm							phlm	pelt						0
Monk's		1	1	1	30		25	pal			100	10123	pal		1	1											helm							phlm	pelt						0
Summoner's		1	1	1	30		25	nec			100	10123	nec		1	1											helm							phlm	pelt						0
Angel's		1	1	1	30		25	sor			100	10123	sor		1	1											helm							phlm	pelt						0
Slayer's		1	1	1	30		25	bar			100	10123	bar		1	1											helm							pelt							0
Shaman's		1	1	1	30		25	dru			100	10123	dru		1	1											helm							phlm							0
Magekiller's		1	1	1	30		25	ass			100	10123	ass		1	1											helm							phlm	pelt						0
Maiden's		1	1	1	60		40	ama			100	10123	ama		2	2											helm							phlm	pelt						0
Monk's		1	1	1	60		40	pal			100	10123	pal		2	2											helm							phlm	pelt						0
Summoner's		1	1	1	60		40	nec			100	10123	nec		2	2											helm							phlm	pelt						0
Angel's		1	1	1	60		40	sor			100	10123	sor		2	2											helm							phlm	pelt						0
Slayer's		1	1	1	60		40	bar			100	10123	bar		2	2											helm							pelt							0
Shaman's		1	1	1	60		40	dru			100	10123	dru		2	2											helm							phlm							0
Magekiller's		1	1	1	60		40	ass			100	10123	ass		2	2											helm							phlm	pelt						0
Mechanist's		1	1	1	1		1				100	10101	sock		1	1											helm														0
Artificer's		1	1	1	33		25				100	10101	sock		2	2											helm														0
Jeweler's		1	1	1	55		47				100	10101	sock		3	3											helm														0
Jagged		1	1	1	1		1				100	10161	dmg%	0	25	50											tors														0
Deadly		1	1	1	15		10				100	10161	dmg%	0	51	75											tors														0
Vicious		1	1	1	30		25				100	10161	dmg%	0	76	100											tors														0
Brutal		1	1	1	45		35				100	10161	dmg%	0	101	125											tors														0
Massive		1	1	1	60		40				100	10161	dmg%	0	126	150											tors														0
Savage		1	1	1	75		45				100	10161	dmg%	0	151	175											tors														0
Rampaging		1	1	1	85		50				100	10161	dmg%	0	176	200											tors														0
Savage		1	1	1	20		15				100	10162	deadly		5	10											tors														0
Devastating		1	1	1	40		35				100	10162	deadly		11	15											tors														0
Havoc		1	1	1	60		55				100	10162	deadly		16	20											tors														0
Rookie’s		1	1	1	1		1				200	10166	addxp		3	6											tors														0
Student’s		1	1	1	20		15				200	10166	addxp		7	10											tors														0
Scholar’s		1	1	1	35		30				200	10166	addxp		10	15											tors														0
Lucky		1	1	1	1		1				100	10168	mag%		15	25											tors														0
Lucky		1	1	1	20		15				100	10168	mag%		26	35											tors														0
Lucky		1	1	1	35		30				100	10168	mag%		36	45											tors														0
Greedy		1	1	1	1		1				100	10169	gold%		40	80											tors														0
Greedy		1	1	1	20		15				100	10169	gold%		81	120											tors														0
Greedy		1	1	1	35		30				100	10169	gold%		121	160											tors														0
Tangerine		1	1	1	1		1				100	10170	res-ltng		10	20											tors														0
Ocher		1	1	1	25		20				100	10170	res-ltng		21	30											tors														0
Coral		1	1	1	45		40				100	10170	res-ltng		31	40											tors														0
Amber		1	1	1	65		60				100	10170	res-ltng		41	50											tors														0
Azure		1	1	1	1		1				100	10171	res-cold		10	20											tors														0
Lapis		1	1	1	25		20				100	10171	res-cold		21	30											tors														0
Cobalt		1	1	1	45		40				100	10171	res-cold		31	40											tors														0
Sapphire		1	1	1	65		60				100	10171	res-cold		41	50											tors														0
Crimson		1	1	1	1		1				100	10172	res-fire		10	20											tors														0
Burgundy		1	1	1	25		20				100	10172	res-fire		21	30											tors														0
Garnet		1	1	1	45		40				100	10172	res-fire		31	40											tors														0
Ruby		1	1	1	65		60				100	10172	res-fire		41	50											tors														0
Beryl		1	1	1	1		1				100	10173	res-pois		10	20											tors														0
Jade		1	1	1	25		20				100	10173	res-pois		21	30											tors														0
Viridian		1	1	1	45		40				100	10173	res-pois		31	40											tors														0
Emerald		1	1	1	65		60				100	10173	res-pois		41	50											tors														0
Prismatic		1	1	1	1		1				100	10174	res-all		4	6											tors														0
Prismatic		1	1	1	25		20				100	10174	res-all		7	9											tors														0
Prismatic		1	1	1	45		40				100	10174	res-all		10	12											tors														0
Prismatic		1	1	1	65		60				100	10174	res-all		13	15											tors														0
Tank’s		1	1	1	25		20				100	10175	hp%		3	4											tors														0
Tank’s		1	1	1	40		30				100	10175	hp%		5	6											tors														0
Tank’s		1	1	1	55		35				100	10175	hp%		7	8											tors														0
Tank’s		1	1	1	70		40				100	10175	hp%		9	10											tors														0
Life’s		1	1	1	1	26	1				100	10176	hp		10	25											tors														0
Jackal’s		1	1	1	15		10				100	10176	hp		26	40											tors														0
Fox’s		1	1	1	25		20				100	10176	hp		41	55											tors														0
Wolf’s		1	1	1	35		30				100	10176	hp		56	70											tors														0
Tiger’s		1	1	1	45		40				100	10176	hp		71	85											tors														0
Mammoth’s		1	1	1	55		50				100	10176	hp		86	100											tors														0
Colosuss’s		1	1	1	65		60				100	10176	hp		101	115											tors														0
Whale’s		1	1	1	75		70				100	10176	hp		116	130											tors														0
Lizard's		1	1	1	1	26	1				100	10177	mana		10	20											tors														0
Snake's		1	1	1	15		10				100	10177	mana		21	35											tors														0
Serpent's		1	1	1	25		20				100	10177	mana		36	55											tors														0
Drake's		1	1	1	35		30				100	10177	mana		56	80											tors														0
Dragon's		1	1	1	45		40				100	10177	mana		81	110											tors														0
Conduit		1	1	1	1		1				100	10181	extra-ltng		10	20											tors														0
Conduit		1	1	1	30		25				100	10181	extra-ltng		21	30											tors														0
Numbing		1	1	1	1		1				100	10181	extra-cold		10	20											tors														0
Numbing		1	1	1	30		25				100	10181	extra-cold		21	30											tors														0
Inferno		1	1	1	1		1				100	10181	extra-fire		10	20											tors														0
Inferno		1	1	1	30		25				100	10181	extra-fire		21	30											tors														0
Infectious		1	1	1	1		1				100	10181	extra-pois		10	20											tors														0
Infectious		1	1	1	30		25				100	10181	extra-pois		21	30											tors														0
Scintillating		1	1	1	1		1				100	10181	extra-magi		10	20											tors														0
Scintillating		1	1	1	30		25				100	10181	extra-magi		21	30											tors														0
Discharging		1	1	1	1		1				100	10182	pierce-ltng		4	6											tors														0
Discharging		1	1	1	30		25				100	10182	pierce-ltng		7	9											tors														0
Frigid		1	1	1	1		1				100	10182	pierce-cold		4	6											tors														0
Frigid		1	1	1	30		25				100	10182	pierce-cold		7	9											tors														0
Wildfire		1	1	1	1		1				100	10182	pierce-fire		4	6											tors														0
Wildfire		1	1	1	30		25				100	10182	pierce-fire		7	9											tors														0
Malicious		1	1	1	1		1				100	10182	pierce-pois		4	6											tors														0
Malicious		1	1	1	30		25				100	10182	pierce-pois		7	9											tors														0
Lethal		1	1	1	1		1				100	10182	pierce-phys		4	6											tors														0
Lethal		1	1	1	30		25				100	10182	pierce-phys		7	9											tors														0
Superior		1	1	1	50		42				5	10183	allskills		1	1											tors														0
Warm		1	1	1	10		7				500	10184	half-freeze		1	1											tors														0
Lightning		1	1	1	25		20				100	10185	res-ltng-max		1	2											tors														0
Lightning		1	1	1	45		35				100	10185	res-ltng-max		3	4											tors														0
Lightning		1	1	1	65		55				100	10185	res-ltng-max		5	6											tors														0
Lightning		1	1	1	85		75				100	10185	res-ltng-max		7	8											tors														0
Cold		1	1	1	25		20				100	10186	res-cold-max		1	2											tors														0
Cold		1	1	1	45		35				100	10186	res-cold-max		3	4											tors														0
Cold		1	1	1	65		55				100	10186	res-cold-max		5	6											tors														0
Cold		1	1	1	85		75				100	10186	res-cold-max		7	8											tors														0
Fire		1	1	1	25		20				100	10187	res-fire-max		1	2											tors														0
Fire		1	1	1	45		35				100	10187	res-fire-max		3	4											tors														0
Fire		1	1	1	65		55				100	10187	res-fire-max		5	6											tors														0
Fire		1	1	1	85		75				100	10187	res-fire-max		7	8											tors														0
Poison		1	1	1	25		20				100	10188	res-pois-max		1	2											tors														0
Poison		1	1	1	45		35				100	10188	res-pois-max		3	4											tors														0
Poison		1	1	1	65		55				100	10188	res-pois-max		5	6											tors														0
Poison		1	1	1	85		75				100	10188	res-pois-max		7	8											tors														0
Poison		1	1	1	40		35				200	10189	res-all-max		1	1											tors														0
Poison		1	1	1	80		70				200	10189	res-all-max		2	2											tors														0
Blood Letting		1	1	1	1	26	1				100	10190	heal-kill		1	3											tors														0
Murderous		1	1	1	26		20				100	10190	heal-kill		4	10											tors														0
Blood Sucking		1	1	1	50		40				100	10190	heal-kill		11	25											tors														0
Triumphant		1	1	1	1	26	1				100	10191	mana-kill		1	2											tors														0
Victorious		1	1	1	26		20				100	10191	mana-kill		3	4											tors														0
Aureolin		1	1	1	50		40				100	10191	mana-kill		5	6											tors														0
Bulky		1	1	1	25		20				100	10192	red-dmg%		5	8											tors														0
Bulky		1	1	1	40		30				100	10192	red-dmg%		9	12											tors														0
Bulky		1	1	1	55		35				100	10192	red-dmg%		13	16											tors														0
Bulky		1	1	1	70		40				100	10192	red-dmg%		17	20											tors														0
Skillful		1	1	1	30		30				5	10193	skill	6	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	7	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	8	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	9	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	10	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	11	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	12	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	13	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	14	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	15	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	16	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	17	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	18	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	19	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	20	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	21	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	22	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	23	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	24	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	25	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	26	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	27	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	28	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	29	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	30	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	31	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	32	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	33	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	34	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	35	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	36	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	37	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	38	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	39	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	40	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	41	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	42	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	43	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	44	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	45	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	46	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	47	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	48	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	49	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	50	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	51	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	52	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	53	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	54	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	55	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	56	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	57	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	58	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	59	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	60	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	61	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	62	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	63	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	64	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	65	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	66	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	67	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	68	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	69	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	70	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	71	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	72	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	73	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	74	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	75	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	76	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	77	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	78	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	79	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	80	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	81	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	82	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	83	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	84	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	85	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	86	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	87	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	88	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	89	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	90	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	91	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	92	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	93	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	94	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	95	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	96	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	97	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	98	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	99	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	100	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	101	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	102	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	103	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	104	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	105	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	106	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	107	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	108	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	109	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	110	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	111	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	112	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	113	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	114	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	115	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	116	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	117	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	118	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	119	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	120	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	121	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	122	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	123	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	124	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	125	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	126	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	128	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	130	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	131	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	132	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	133	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	134	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	135	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	137	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	138	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	139	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	140	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	141	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	142	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	143	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	144	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	145	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	146	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	147	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	148	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	149	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	150	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	151	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	152	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	153	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	154	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	155	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	221	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	222	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	223	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	224	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	225	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	226	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	227	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	228	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	229	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	230	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	231	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	232	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	233	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	234	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	235	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	236	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	237	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	238	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	239	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	240	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	241	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	242	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	243	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	244	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	245	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	246	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	247	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	248	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	249	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	250	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	251	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	252	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	253	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	254	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	255	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	256	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	257	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	258	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	259	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	260	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	261	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	262	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	263	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	264	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	265	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	266	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	267	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	268	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	269	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	270	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	271	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	272	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	273	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	274	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	275	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	276	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	277	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	278	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	279	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	280	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	364	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	365	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	366	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	367	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	368	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	369	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	370	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	371	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	374	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	376	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	378	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	380	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	381	1	2											tors														0
Skillful		1	1	1	30		30				5	10193	skill	383	1	2											tors														0
Bronze		1	1	1	1		1				100	10194	att	0	25	50											tors														0
Iron		1	1	1	15		10				100	10194	att	0	51	75											tors														0
Steel		1	1	1	25		20				100	10194	att	0	76	100											tors														0
Silver		1	1	1	35		30				100	10194	att	0	101	125											tors														0
Gold		1	1	1	45		40				100	10194	att	0	126	150											tors														0
Platinum		1	1	1	55		50				100	10194	att	0	151	175											tors														0
Meteoric		1	1	1	65		60				100	10194	att	0	176	200											tors														0
Balancing		1	1	1	1		1				100	10198	balance1		10	20											tors														0
Stable		1	1	1	30		25				100	10198	balance1		21	30											tors														0
Maiden's		1	1	1	30		25	ama			100	10123	ama		1	1											tors														0
Monk's		1	1	1	30		25	pal			100	10123	pal		1	1											tors														0
Summoner's		1	1	1	30		25	nec			100	10123	nec		1	1											tors														0
Angel's		1	1	1	30		25	sor			100	10123	sor		1	1											tors														0
Slayer's		1	1	1	30		25	bar			100	10123	bar		1	1											tors														0
Shaman's		1	1	1	30		25	dru			100	10123	dru		1	1											tors														0
Magekiller's		1	1	1	30		25	ass			100	10123	ass		1	1											tors														0
Maiden's		1	1	1	60		40	ama			100	10123	ama		2	2											tors														0
Monk's		1	1	1	60		40	pal			100	10123	pal		2	2											tors														0
Summoner's		1	1	1	60		40	nec			100	10123	nec		2	2											tors														0
Angel's		1	1	1	60		40	sor			100	10123	sor		2	2											tors														0
Slayer's		1	1	1	60		40	bar			100	10123	bar		2	2											tors														0
Shaman's		1	1	1	60		40	dru			100	10123	dru		2	2											tors														0
Magekiller's		1	1	1	60		40	ass			100	10123	ass		2	2											tors														0
Apprentice’s		1	1	1	1		1				100	10132	cast1		5	15											tors														0
Magus’s		1	1	1	50		40				100	10132	cast1		16	30											tors														0
Mechanist's		1	1	1	1		1				100	10101	sock		1	1											tors														0
Artificer's		1	1	1	33		25				100	10101	sock		2	2											tors														0
Jeweler's		1	1	1	55		47				100	10101	sock		3	3											tors														0
Jagged		1	1	1	1		1				100	10161	dmg%	0	25	50											shld														0
Deadly		1	1	1	15		10				100	10161	dmg%	0	51	75											shld														0
Vicious		1	1	1	30		25				100	10161	dmg%	0	76	100											shld														0
Brutal		1	1	1	45		35				100	10161	dmg%	0	101	125											shld														0
Massive		1	1	1	60		40				100	10161	dmg%	0	126	150											shld														0
Savage		1	1	1	75		45				100	10161	dmg%	0	151	175											shld														0
Rampaging		1	1	1	85		50				100	10161	dmg%	0	176	200											shld														0
Savage		1	1	1	20		15				100	10162	deadly		5	10											shld														0
Devastating		1	1	1	40		35				100	10162	deadly		11	15											shld														0
Havoc		1	1	1	60		55				100	10162	deadly		16	20											shld														0
Rookie’s		1	1	1	1		1				200	10166	addxp		3	6											shld														0
Student’s		1	1	1	20		15				200	10166	addxp		7	10											shld														0
Lucky		1	1	1	1		1				100	10168	mag%		15	25											shld														0
Lucky		1	1	1	20		15				100	10168	mag%		26	35											shld														0
Lucky		1	1	1	35		30				100	10168	mag%		36	45											shld														0
Greedy		1	1	1	1		1				100	10169	gold%		40	80											shld														0
Greedy		1	1	1	20		15				100	10169	gold%		81	120											shld														0
Greedy		1	1	1	35		30				100	10169	gold%		121	160											shld														0
Tangerine		1	1	1	1		1				100	10170	res-ltng		10	20											shld														0
Ocher		1	1	1	25		20				100	10170	res-ltng		21	30											shld														0
Coral		1	1	1	45		40				100	10170	res-ltng		31	40											shld														0
Amber		1	1	1	65		60				100	10170	res-ltng		41	50											shld														0
Azure		1	1	1	1		1				100	10171	res-cold		10	20											shld														0
Lapis		1	1	1	25		20				100	10171	res-cold		21	30											shld														0
Cobalt		1	1	1	45		40				100	10171	res-cold		31	40											shld														0
Sapphire		1	1	1	65		60				100	10171	res-cold		41	50											shld														0
Crimson		1	1	1	1		1				100	10172	res-fire		10	20											shld														0
Burgundy		1	1	1	25		20				100	10172	res-fire		21	30											shld														0
Garnet		1	1	1	45		40				100	10172	res-fire		31	40											shld														0
Ruby		1	1	1	65		60				100	10172	res-fire		41	50											shld														0
Beryl		1	1	1	1		1				100	10173	res-pois		10	20											shld														0
Jade		1	1	1	25		20				100	10173	res-pois		21	30											shld														0
Viridian		1	1	1	45		40				100	10173	res-pois		31	40											shld														0
Emerald		1	1	1	65		60				100	10173	res-pois		41	50											shld														0
Prismatic		1	1	1	1		1				100	10174	res-all		4	6											shld														0
Prismatic		1	1	1	25		20				100	10174	res-all		7	9											shld														0
Prismatic		1	1	1	45		40				100	10174	res-all		10	12											shld														0
Prismatic		1	1	1	65		60				100	10174	res-all		13	15											shld														0
Tank’s		1	1	1	25		20				100	10175	hp%		3	4											shld														0
Tank’s		1	1	1	40		30				100	10175	hp%		5	6											shld														0
Tank’s		1	1	1	55		35				100	10175	hp%		7	8											shld														0
Tank’s		1	1	1	70		40				100	10175	hp%		9	10											shld														0
Life’s		1	1	1	1	26	1				100	10176	hp		10	25											shld														0
Jackal’s		1	1	1	15		10				100	10176	hp		26	40											shld														0
Fox’s		1	1	1	25		20				100	10176	hp		41	55											shld														0
Wolf’s		1	1	1	35		30				100	10176	hp		56	70											shld														0
Tiger’s		1	1	1	45		40				100	10176	hp		71	85											shld														0
Mammoth’s		1	1	1	55		50				100	10176	hp		86	100											shld														0
Colosuss’s		1	1	1	65		60				100	10176	hp		101	115											shld														0
Whale’s		1	1	1	75		70				100	10176	hp		116	130											shld														0
Lizard's		1	1	1	1	26	1				100	10177	mana		10	20											shld														0
Snake's		1	1	1	15		10				100	10177	mana		21	35											shld														0
Serpent's		1	1	1	25		20				100	10177	mana		36	55											shld														0
Drake's		1	1	1	35		30				100	10177	mana		56	80											shld														0
Dragon's		1	1	1	45		40				100	10177	mana		81	110											shld														0
Conduit		1	1	1	1		1				100	10181	extra-ltng		10	20											shld														0
Conduit		1	1	1	30		25				100	10181	extra-ltng		21	30											shld														0
Numbing		1	1	1	1		1				100	10181	extra-cold		10	20											shld														0
Numbing		1	1	1	30		25				100	10181	extra-cold		21	30											shld														0
Inferno		1	1	1	1		1				100	10181	extra-fire		10	20											shld														0
Inferno		1	1	1	30		25				100	10181	extra-fire		21	30											shld														0
Infectious		1	1	1	1		1				100	10181	extra-pois		10	20											shld														0
Infectious		1	1	1	30		25				100	10181	extra-pois		21	30											shld														0
Scintillating		1	1	1	1		1				100	10181	extra-magi		10	20											shld														0
Scintillating		1	1	1	30		25				100	10181	extra-magi		21	30											shld														0
Discharging		1	1	1	1		1				100	10182	pierce-ltng		4	6											shld														0
Discharging		1	1	1	30		25				100	10182	pierce-ltng		7	9											shld														0
Frigid		1	1	1	1		1				100	10182	pierce-cold		4	6											shld														0
Frigid		1	1	1	30		25				100	10182	pierce-cold		7	9											shld														0
Wildfire		1	1	1	1		1				100	10182	pierce-fire		4	6											shld														0
Wildfire		1	1	1	30		25				100	10182	pierce-fire		7	9											shld														0
Malicious		1	1	1	1		1				100	10182	pierce-pois		4	6											shld														0
Malicious		1	1	1	30		25				100	10182	pierce-pois		7	9											shld														0
Lethal		1	1	1	1		1				100	10182	pierce-phys		4	6											shld														0
Lethal		1	1	1	30		25				100	10182	pierce-phys		7	9											shld														0
Superior		1	1	1	50		42				5	10183	allskills		1	1											shld														0
Warm		1	1	1	10		7				500	10184	half-freeze		1	1											shld														0
Lightning		1	1	1	25		20				100	10185	res-ltng-max		1	2											shld														0
Lightning		1	1	1	45		35				100	10185	res-ltng-max		3	4											shld														0
Lightning		1	1	1	65		55				100	10185	res-ltng-max		5	6											shld														0
Lightning		1	1	1	85		75				100	10185	res-ltng-max		7	8											shld														0
Cold		1	1	1	25		20				100	10186	res-cold-max		1	2											shld														0
Cold		1	1	1	45		35				100	10186	res-cold-max		3	4											shld														0
Cold		1	1	1	65		55				100	10186	res-cold-max		5	6											shld														0
Cold		1	1	1	85		75				100	10186	res-cold-max		7	8											shld														0
Fire		1	1	1	25		20				100	10187	res-fire-max		1	2											shld														0
Fire		1	1	1	45		35				100	10187	res-fire-max		3	4											shld														0
Fire		1	1	1	65		55				100	10187	res-fire-max		5	6											shld														0
Fire		1	1	1	85		75				100	10187	res-fire-max		7	8											shld														0
Poison		1	1	1	25		20				100	10188	res-pois-max		1	2											shld														0
Poison		1	1	1	45		35				100	10188	res-pois-max		3	4											shld														0
Poison		1	1	1	65		55				100	10188	res-pois-max		5	6											shld														0
Poison		1	1	1	85		75				100	10188	res-pois-max		7	8											shld														0
Poison		1	1	1	40		35				200	10189	res-all-max		1	1											shld														0
Poison		1	1	1	80		70				200	10189	res-all-max		2	2											shld														0
Blood Letting		1	1	1	1	26	1				100	10190	heal-kill		1	3											shld														0
Murderous		1	1	1	26		20				100	10190	heal-kill		4	10											shld														0
Blood Sucking		1	1	1	50		40				100	10190	heal-kill		11	25											shld														0
Triumphant		1	1	1	1	26	1				100	10191	mana-kill		1	2											shld														0
Victorious		1	1	1	26		20				100	10191	mana-kill		3	4											shld														0
Aureolin		1	1	1	50		40				100	10191	mana-kill		5	6											shld														0
Bulky		1	1	1	25		20				100	10192	red-dmg%		5	8											shld														0
Bulky		1	1	1	40		30				100	10192	red-dmg%		9	12											shld														0
Bulky		1	1	1	55		35				100	10192	red-dmg%		13	16											shld														0
Bulky		1	1	1	70		40				100	10192	red-dmg%		17	20											shld														0
Skillful		1	1	1	30		30				5	10193	skill	6	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	7	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	8	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	9	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	10	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	11	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	12	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	13	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	14	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	15	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	16	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	17	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	18	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	19	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	20	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	21	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	22	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	23	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	24	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	25	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	26	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	27	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	28	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	29	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	30	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	31	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	32	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	33	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	34	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	35	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	36	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	37	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	38	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	39	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	40	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	41	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	42	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	43	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	44	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	45	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	46	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	47	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	48	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	49	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	50	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	51	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	52	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	53	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	54	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	55	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	56	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	57	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	58	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	59	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	60	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	61	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	62	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	63	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	64	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	65	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	66	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	67	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	68	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	69	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	70	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	71	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	72	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	73	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	74	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	75	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	76	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	77	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	78	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	79	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	80	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	81	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	82	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	83	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	84	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	85	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	86	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	87	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	88	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	89	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	90	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	91	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	92	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	93	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	94	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	95	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	96	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	97	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	98	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	99	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	100	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	101	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	102	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	103	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	104	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	105	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	106	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	107	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	108	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	109	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	110	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	111	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	112	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	113	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	114	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	115	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	116	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	117	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	118	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	119	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	120	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	121	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	122	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	123	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	124	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	125	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	126	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	128	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	130	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	131	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	132	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	133	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	134	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	135	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	137	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	138	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	139	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	140	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	141	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	142	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	143	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	144	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	145	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	146	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	147	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	148	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	149	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	150	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	151	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	152	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	153	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	154	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	155	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	221	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	222	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	223	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	224	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	225	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	226	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	227	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	228	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	229	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	230	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	231	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	232	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	233	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	234	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	235	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	236	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	237	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	238	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	239	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	240	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	241	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	242	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	243	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	244	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	245	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	246	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	247	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	248	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	249	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	250	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	251	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	252	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	253	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	254	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	255	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	256	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	257	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	258	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	259	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	260	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	261	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	262	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	263	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	264	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	265	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	266	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	267	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	268	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	269	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	270	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	271	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	272	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	273	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	274	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	275	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	276	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	277	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	278	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	279	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	280	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	364	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	365	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	366	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	367	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	368	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	369	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	370	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	371	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	374	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	376	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	378	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	380	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	381	1	2											shld							ashd							0
Skillful		1	1	1	30		30				5	10193	skill	383	1	2											shld							ashd							0
Bronze		1	1	1	1		1				100	10194	att	0	25	50											shld														0
Iron		1	1	1	15		10				100	10194	att	0	51	75											shld														0
Steel		1	1	1	25		20				100	10194	att	0	76	100											shld														0
Silver		1	1	1	35		30				100	10194	att	0	101	125											shld														0
Gold		1	1	1	45		40				100	10194	att	0	126	150											shld														0
Platinum		1	1	1	55		50				100	10194	att	0	151	175											shld														0
Meteoric		1	1	1	65		60				100	10194	att	0	176	200											shld														0
Balancing		1	1	1	1		1				100	10198	balance1		10	20											shld														0
Stable		1	1	1	30		25				100	10198	balance1		21	30											shld														0
Maiden's		1	1	1	30		25	ama			100	10123	ama		1	1											shld							ashd							0
Monk's		1	1	1	30		25	pal			100	10123	pal		1	1											shld														0
Summoner's		1	1	1	30		25	nec			100	10123	nec		1	1											shld							ashd							0
Angel's		1	1	1	30		25	sor			100	10123	sor		1	1											shld							ashd							0
Slayer's		1	1	1	30		25	bar			100	10123	bar		1	1											shld							ashd							0
Shaman's		1	1	1	30		25	dru			100	10123	dru		1	1											shld							ashd							0
Magekiller's		1	1	1	30		25	ass			100	10123	ass		1	1											shld							ashd							0
Maiden's		1	1	1	60		40	ama			100	10123	ama		2	2											shld							ashd							0
Monk's		1	1	1	60		40	pal			100	10123	pal		2	2											shld														0
Summoner's		1	1	1	60		40	nec			100	10123	nec		2	2											shld							ashd							0
Angel's		1	1	1	60		40	sor			100	10123	sor		2	2											shld							ashd							0
Slayer's		1	1	1	60		40	bar			100	10123	bar		2	2											shld							ashd							0
Shaman's		1	1	1	60		40	dru			100	10123	dru		2	2											shld							ashd							0
Magekiller's		1	1	1	60		40	ass			100	10123	ass		2	2											shld							ashd							0
Apprentice’s		1	1	1	1		1				100	10132	cast1		5	15											shld														0
Magus’s		1	1	1	50		40				100	10132	cast1		16	30											shld														0
Mechanist's		1	1	1	1		1				100	10101	sock		1	1											shld														0
Artificer's		1	1	1	33		25				100	10101	sock		2	2											shld														0
Jeweler's		1	1	1	55		47				100	10101	sock		3	3											shld														0
Jagged		1	1	1	1		1				100	10101	dmg%	0	10	15											belt														0
Deadly		1	1	1	15		10				100	10101	dmg%	0	16	20											belt														0
Vicious		1	1	1	30		25				100	10101	dmg%	0	21	25											belt														0
Brutal		1	1	1	45		40				100	10101	dmg%	0	26	30											belt														0
Massive		1	1	1	60		55				100	10101	dmg%	0	31	40											belt														0
Savage		1	1	1	20		15				100	10102	deadly		5	10											belt														0
Ready		1	1	1	1		1				100	10103	swing1		5	7											belt														0
Swift		1	1	1	30		25				100	10103	swing2		8	10											belt														0
Red		1	1	1	1		1				100	10104	dmg-min		1	3											belt														0
Sanguinary		1	1	1	15		10				100	10104	dmg-min		4	6											belt														0
Bloody		1	1	1	30		25				100	10104	dmg-min		7	9											belt														0
Scarlet		1	1	1	50		45				100	10104	dmg-min		10	12											belt														0
Jagged		1	1	1	1		1				100	10105	dmg-max		1	3											belt														0
Forked		1	1	1	15		10				100	10105	dmg-max		4	6											belt														0
Serrated		1	1	1	30		25				100	10105	dmg-max		7	9											belt														0
Vermillion		1	1	1	50		45				100	10105	dmg-max		10	12											belt														0
Rookie’s		1	1	1	1		1				100	10106	addxp		3	5											belt														0
Student’s		1	1	1	20		15				100	10106	addxp		6	9											belt														0
Scholar’s		1	1	1	35		30				100	10106	addxp		10	15											belt														0
Lucky		1	1	1	1		1				100	10107	mag%		15	25											belt														0
Lucky		1	1	1	20		15				100	10107	mag%		26	35											belt														0
Lucky		1	1	1	35		30				100	10107	mag%		36	45											belt														0
Greedy		1	1	1	1		1				100	10108	gold%		40	60											belt														0
Greedy		1	1	1	20		15				100	10108	gold%		61	80											belt														0
Greedy		1	1	1	35		30				100	10108	gold%		81	100											belt														0
Bronze		1	1	1	1		1				100	10109	att	0	20	40											belt														0
Iron		1	1	1	15		10				100	10109	att	0	41	60											belt														0
Steel		1	1	1	25		20				100	10109	att	0	61	80											belt														0
Silver		1	1	1	35		30				100	10109	att	0	81	100											belt														0
Gold		1	1	1	45		40				100	10109	att	0	101	120											belt														0
Platinum		1	1	1	55		50				100	10109	att	0	121	140											belt														0
Meteoric		1	1	1	65		60				100	10109	att	0	141	160											belt														0
Tangerine		1	1	1	1		1				100	10110	res-ltng		10	20											belt														0
Ocher		1	1	1	25		20				100	10110	res-ltng		21	30											belt														0
Coral		1	1	1	45		40				100	10110	res-ltng		31	40											belt														0
Azure		1	1	1	1		1				100	10111	res-cold		10	20											belt														0
Lapis		1	1	1	25		20				100	10111	res-cold		21	30											belt														0
Cobalt		1	1	1	45		40				100	10111	res-cold		31	40											belt														0
Crimson		1	1	1	1		1				100	10112	res-fire		10	20											belt														0
Burgundy		1	1	1	25		20				100	10112	res-fire		21	30											belt														0
Garnet		1	1	1	45		40				100	10112	res-fire		31	40											belt														0
Beryl		1	1	1	1		1				100	10113	res-pois		10	20											belt														0
Jade		1	1	1	25		20				100	10113	res-pois		21	30											belt														0
Viridian		1	1	1	45		40				100	10113	res-pois		31	40											belt														0
Prismatic		1	1	1	1		1				100	10114	res-all		4	6											belt														0
Prismatic		1	1	1	25		20				100	10114	res-all		7	9											belt														0
Prismatic		1	1	1	45		40				100	10114	res-all		10	12											belt														0
Tank’s		1	1	1	25		20				100	10175	hp%		2	3											belt														0
Tank’s		1	1	1	50		45				100	10175	hp%		4	5											belt														0
Life’s		1	1	1	1	26	1				100	10176	hp		10	20											belt														0
Jackal’s		1	1	1	15		10				100	10176	hp		21	30											belt														0
Fox’s		1	1	1	25		20				100	10176	hp		31	40											belt														0
Wolf’s		1	1	1	35		30				100	10176	hp		41	50											belt														0
Tiger’s		1	1	1	45		40				100	10176	hp		51	60											belt														0
Mammoth’s		1	1	1	55		50				100	10176	hp		61	70											belt														0
Colosuss’s		1	1	1	65		60				100	10176	hp		71	80											belt														0
Whale’s		1	1	1	75		70				100	10176	hp		81	90											belt														0
Ember		1	1	1	1	26	1				100	10118	fire-min		5	6	fire-max		10	12							belt														0
Smoldering		1	1	1	35		26				100	10118	fire-min		30	35	fire-max		40	50							belt														0
Smoking		1	1	1	47		37				100	10118	fire-min		80	90	fire-max		120	135							belt														0
Flaming		1	1	1	61		51				100	10118	fire-min		180	200	fire-max		250	280							belt														0
Static		1	1	1	1	26	1				100	10119	ltng-min		1	1	ltng-max		14	17							belt														0
Glowing		1	1	1	35		26				100	10119	ltng-min		1	1	ltng-max		69	84							belt														0
Buzzing		1	1	1	47		37				100	10119	ltng-min		1	1	ltng-max		199	224							belt														0
Arcing		1	1	1	61		51				100	10119	ltng-min		1	1	ltng-max		429	479							belt														0
Cold		1	1	1	1	26	1				100	10120	cold-len		50	50	cold-min		5	6	cold-max		10	12			belt														0
Snowflake		1	1	1	35		26				100	10120	cold-len		50	50	cold-min		30	35	cold-max		40	50			belt														0
Shivering		1	1	1	47		37				100	10120	cold-len		50	50	cold-min		80	90	cold-max		120	135			belt														0
Boreal		1	1	1	61		51				100	10120	cold-len		50	50	cold-min		180	200	cold-max		250	280			belt														0
Conduit		1	1	1	1		1				100	10121	extra-ltng		5	10											belt														0
Conduit		1	1	1	30		25				100	10121	extra-ltng		11	15											belt														0
Conduit		1	1	1	50		45				100	10121	extra-ltng		16	20											belt														0
Numbing		1	1	1	1		1				100	10121	extra-cold		5	10											belt														0
Numbing		1	1	1	30		25				100	10121	extra-cold		11	15											belt														0
Numbing		1	1	1	50		45				100	10121	extra-cold		16	20											belt														0
Inferno		1	1	1	1		1				100	10121	extra-fire		5	10											belt														0
Inferno		1	1	1	30		25				100	10121	extra-fire		11	15											belt														0
Inferno		1	1	1	50		45				100	10121	extra-fire		16	20											belt														0
Infectious		1	1	1	1		1				100	10121	extra-pois		5	10											belt														0
Infectious		1	1	1	30		25				100	10121	extra-pois		11	15											belt														0
Infectious		1	1	1	50		45				100	10121	extra-pois		16	20											belt														0
Scintillating		1	1	1	1		1				100	10121	extra-magi		5	10											belt														0
Scintillating		1	1	1	30		25				100	10121	extra-magi		11	15											belt														0
Scintillating		1	1	1	50		45				100	10121	extra-magi		16	20											belt														0
Discharging		1	1	1	1		1				100	10122	pierce-ltng		2	3											belt														0
Discharging		1	1	1	30		25				100	10122	pierce-ltng		4	5											belt														0
Discharging		1	1	1	50		45				100	10122	pierce-ltng		6	7											belt														0
Frigid		1	1	1	1		1				100	10122	pierce-cold		2	3											belt														0
Frigid		1	1	1	30		25				100	10122	pierce-cold		4	5											belt														0
Frigid		1	1	1	50		45				100	10122	pierce-cold		6	7											belt														0
Wildfire		1	1	1	1		1				100	10122	pierce-fire		2	3											belt														0
Wildfire		1	1	1	30		25				100	10122	pierce-fire		4	5											belt														0
Wildfire		1	1	1	50		45				100	10122	pierce-fire		6	7											belt														0
Malicious		1	1	1	1		1				100	10122	pierce-pois		2	3											belt														0
Malicious		1	1	1	30		25				100	10122	pierce-pois		4	5											belt														0
Malicious		1	1	1	50		45				100	10122	pierce-pois		6	7											belt														0
Lethal		1	1	1	1		1				100	10122	pierce-phys		2	3											belt														0
Lethal		1	1	1	30		25				100	10122	pierce-phys		4	5											belt														0
Lethal		1	1	1	50		45				100	10122	pierce-phys		6	7											belt														0
Maiden's		1	1	1	30		25	ama			100	10123	ama		1	1											belt														0
Monk's		1	1	1	30		25	pal			100	10123	pal		1	1											belt														0
Summoner's		1	1	1	30		25	nec			100	10123	nec		1	1											belt														0
Angel's		1	1	1	30		25	sor			100	10123	sor		1	1											belt														0
Slayer's		1	1	1	30		25	bar			100	10123	bar		1	1											belt														0
Shaman's		1	1	1	30		25	dru			100	10123	dru		1	1											belt														0
Magekiller's		1	1	1	30		25	ass			100	10123	ass		1	1											belt														0
Warm		1	1	1	10		7				300	10124	half-freeze		1	1											belt														0
Leech		1	1	1	6		4				100	10125	lifesteal		3	5											belt														0
Locust		1	1	1	20		15				100	10125	lifesteal		6	8											belt														0
Bat		1	1	1	6		4				100	10126	manasteal		3	5											belt														0
Vampire		1	1	1	20		15				100	10126	manasteal		6	8											belt														0
Lightning		1	1	1	25		20				100	10127	res-ltng-max		1	2											belt														0
Lightning		1	1	1	45		35				100	10127	res-ltng-max		3	4											belt														0
Cold		1	1	1	25		20				100	10128	res-cold-max		1	2											belt														0
Cold		1	1	1	45		35				100	10128	res-cold-max		3	4											belt														0
Fire		1	1	1	25		20				100	10129	res-fire-max		1	2											belt														0
Fire		1	1	1	45		35				100	10129	res-fire-max		3	4											belt														0
Poison		1	1	1	25		20				100	10130	res-pois-max		1	2											belt														0
Poison		1	1	1	45		35				100	10130	res-pois-max		3	4											belt														0
Prismatic		1	1	1	40		35				200	10131	res-all-max		1	1											belt														0
Apprentice’s		1	1	1	1		1				100	10132	cast1		5	10											belt														0
Magus’s		1	1	1	50		40				100	10132	cast1		11	15											belt														0
Blood Letting		1	1	1	1	26	1				100	10133	heal-kill		1	2											belt														0
Murderous		1	1	1	26		20				100	10133	heal-kill		3	7											belt														0
Blood Sucking		1	1	1	50		40				100	10133	heal-kill		8	15											belt														0
Triumphant		1	1	1	1	26	1				100	10134	mana-kill		1	1											belt														0
Victorious		1	1	1	26		20				100	10134	mana-kill		2	2											belt														0
Aureolin		1	1	1	50		40				100	10134	mana-kill		3	3											belt														0
Bulky		1	1	1	25		20				100	10192	red-dmg%		5	6											belt														0
Bulky		1	1	1	40		30				100	10192	red-dmg%		7	8											belt														0
Bulky		1	1	1	55		35				100	10192	red-dmg%		9	10											belt														0
Bulky		1	1	1	70		40				100	10192	red-dmg%		11	12											belt														0
Balancing		1	1	1	1		1				100	10198	balance1		10	20											belt														0
Stable		1	1	1	30		25				100	10198	balance1		21	30											belt														0
Jagged		1	1	1	1		1				100	10064	dmg%	0	50	100											weap														0
Deadly		1	1	1	15		10				100	10064	dmg%	0	101	150											weap														0
Vicious		1	1	1	25		25				100	10064	dmg%	0	151	200											weap														0
Brutal		1	1	1	35		40				100	10064	dmg%	0	201	250											weap														0
Massive		1	1	1	45		55				100	10064	dmg%	0	251	300											weap														0
Savage		1	1	1	55		70				50	10064	dmg%	0	301	350											weap														0
Savage		1	1	1	65		70				20	10064	dmg%	0	351	400											weap														0
Savage		1	1	1	75		70				10	10064	dmg%	0	401	450											weap														0
Savage		1	1	1	85		70				5	10064	dmg%	0	451	500											weap														0
Savage		1	1	1	20		15				100	10065	deadly		10	15											weap														0
Devastating		1	1	1	40		35				100	10065	deadly		16	20											weap														0
Havoc		1	1	1	60		55				100	10065	deadly		21	25											weap														0
Ready		1	1	1	1		1				100	10066	swing1		10	20											weap														0
Swift		1	1	1	20		15				100	10066	swing2		21	30											weap														0
Quick		1	1	1	40		25				100	10066	swing2		31	40											weap														0
Quick		1	1	1	60		35				50	10066	swing2		41	50											weap														0
Quick		1	1	1	80		45				20	10066	swing2		51	60											weap														0
Red		1	1	1	1		1				100	10067	dmg-min		3	6											weap														0
Sanguinary		1	1	1	15		10				100	10067	dmg-min		7	15											weap														0
Bloody		1	1	1	30		25				100	10067	dmg-min		16	25											weap														0
Scarlet		1	1	1	50		45				100	10067	dmg-min		26	40											weap														0
Jagged		1	1	1	1		1				100	10167	dmg-max		3	6											weap														0
Forked		1	1	1	15		10				100	10167	dmg-max		7	15											weap														0
Serrated		1	1	1	30		25				100	10167	dmg-max		16	25											weap														0
Vermillion		1	1	1	50		45				100	10167	dmg-max		26	40											weap														0
Rookie’s		1	1	1	1		1				100	10068	addxp		4	7											weap														0
Student’s		1	1	1	20		15				100	10068	addxp		8	11											weap														0
Scholar’s		1	1	1	35		30				100	10068	addxp		12	15											weap														0
Lucky		1	1	1	1		1				100	10069	mag%		15	25											weap														0
Lucky		1	1	1	20		15				100	10069	mag%		26	35											weap														0
Lucky		1	1	1	35		30				100	10069	mag%		36	45											weap														0
Greedy		1	1	1	1		1				100	10070	gold%		40	80											weap														0
Greedy		1	1	1	20		15				100	10070	gold%		81	120											weap														0
Greedy		1	1	1	35		30				100	10070	gold%		121	160											weap														0
Bronze		1	1	1	1		1				100	10071	att	0	20	40											weap														0
Iron		1	1	1	15		10				100	10071	att	0	41	80											weap														0
Steel		1	1	1	25		20				100	10071	att	0	81	150											weap														0
Silver		1	1	1	35		30				100	10071	att	0	151	250											weap														0
Gold		1	1	1	45		40				50	10071	att	0	251	400											weap														0
Platinum		1	1	1	55		50				20	10071	att	0	401	600											weap														0
Meteoric		1	1	1	65		60				10	10071	att	0	601	900											weap														0
Pacing		1	1	1	20		15				100	10080	move2		5	10											weap														0
Haste		1	1	1	35		25				100	10080	move2		11	15											weap														0
Haste		1	1	1	50		35				100	10080	move2		16	20											weap														0
Ember		1	1	1	1	26	1				100	10081	fire-min		5	6	fire-max		10	12							weap														0
Smoldering		1	1	1	35		26				100	10081	fire-min		50	60	fire-max		70	100							weap														0
Smoking		1	1	1	47		37				100	10081	fire-min		150	200	fire-max		280	350							weap														0
Flaming		1	1	1	61		51				100	10081	fire-min		500	600	fire-max		700	800							weap														0
Scorching		1	1	1	77		67				100	10081	fire-min		1200	1400	fire-max		1600	1900							weap														0
Static		1	1	1	1	26	1				100	10082	ltng-min		1	1	ltng-max		14	17							weap														0
Glowing		1	1	1	35		26				100	10082	ltng-min		1	1	ltng-max		119	159							weap														0
Buzzing		1	1	1	47		37				100	10082	ltng-min		1	1	ltng-max		429	549							weap														0
Arcing		1	1	1	61		51				100	10082	ltng-min		1	1	ltng-max		1199	1399							weap														0
Shocking		1	1	1	77		67				100	10082	ltng-min		1	1	ltng-max		2799	3299							weap														0
Cold		1	1	1	1	26	1				100	10083	cold-len		50	50	cold-min		5	6	cold-max		10	12			weap														0
Snowflake		1	1	1	35		26				100	10083	cold-len		50	50	cold-min		50	60	cold-max		70	100			weap														0
Shivering		1	1	1	47		37				100	10083	cold-len		50	50	cold-min		150	200	cold-max		280	350			weap														0
Boreal		1	1	1	61		51				100	10083	cold-len		50	50	cold-min		500	600	cold-max		700	800			weap														0
Hibernal		1	1	1	77		67				100	10083	cold-len		50	50	cold-min		1200	1400	cold-max		1600	1900			weap														0
Conduit		1	1	1	1		1				100	10084	extra-ltng		10	20											weap														0
Conduit		1	1	1	30		25				100	10084	extra-ltng		21	30											weap														0
Conduit		1	1	1	50		45				100	10084	extra-ltng		31	40											weap														0
Conduit		1	1	1	70		60				100	10084	extra-ltng		41	50											weap														0
Numbing		1	1	1	1		1				100	10084	extra-cold		10	20											weap														0
Numbing		1	1	1	30		25				100	10084	extra-cold		21	30											weap														0
Numbing		1	1	1	50		45				100	10084	extra-cold		31	40											weap														0
Numbing		1	1	1	70		60				100	10084	extra-cold		41	50											weap														0
Inferno		1	1	1	1		1				100	10084	extra-fire		10	20											weap														0
Inferno		1	1	1	30		25				100	10084	extra-fire		21	30											weap														0
Inferno		1	1	1	50		45				100	10084	extra-fire		31	40											weap														0
Inferno		1	1	1	70		60				100	10084	extra-fire		41	50											weap														0
Infectious		1	1	1	1		1				100	10084	extra-pois		10	20											weap														0
Infectious		1	1	1	30		25				100	10084	extra-pois		21	30											weap														0
Infectious		1	1	1	50		45				100	10084	extra-pois		31	40											weap														0
Infectious		1	1	1	70		60				100	10084	extra-pois		41	50											weap														0
Scintillating		1	1	1	1		1				100	10084	extra-magi		10	20											weap														0
Scintillating		1	1	1	30		25				100	10084	extra-magi		21	30											weap														0
Scintillating		1	1	1	50		45				100	10084	extra-magi		31	40											weap														0
Scintillating		1	1	1	70		60				100	10084	extra-magi		41	50											weap														0
Discharging		1	1	1	1		1				100	10085	pierce-ltng		4	6											weap														0
Discharging		1	1	1	30		25				100	10085	pierce-ltng		7	9											weap														0
Discharging		1	1	1	50		45				100	10085	pierce-ltng		10	12											weap														0
Discharging		1	1	1	70		60				100	10085	pierce-ltng		13	15											weap														0
Frigid		1	1	1	1		1				100	10085	pierce-cold		4	6											weap														0
Frigid		1	1	1	30		25				100	10085	pierce-cold		7	9											weap														0
Frigid		1	1	1	50		45				100	10085	pierce-cold		10	12											weap														0
Frigid		1	1	1	70		60				100	10085	pierce-cold		13	15											weap														0
Wildfire		1	1	1	1		1				100	10085	pierce-fire		4	6											weap														0
Wildfire		1	1	1	30		25				100	10085	pierce-fire		7	9											weap														0
Wildfire		1	1	1	50		45				100	10085	pierce-fire		10	12											weap														0
Wildfire		1	1	1	70		60				100	10085	pierce-fire		13	15											weap														0
Malicious		1	1	1	1		1				100	10085	pierce-pois		4	6											weap														0
Malicious		1	1	1	30		25				100	10085	pierce-pois		7	9											weap														0
Malicious		1	1	1	50		45				100	10085	pierce-pois		10	12											weap														0
Malicious		1	1	1	70		60				100	10085	pierce-pois		13	15											weap														0
Lethal		1	1	1	1		1				100	10085	pierce-phys		4	6											weap														0
Lethal		1	1	1	30		25				100	10085	pierce-phys		7	9											weap														0
Lethal		1	1	1	50		45				100	10085	pierce-phys		10	12											weap														0
Lethal		1	1	1	70		60				100	10085	pierce-phys		13	15											weap														0
Maiden's		1	1	1	30		25	ama			100	10087	ama		1	1											weap														0
Valkyrie's		1	1	1	80		70	ama			100	10087	ama		2	2											weap														0
Monk's		1	1	1	30		25	pal			100	10087	pal		1	1											weap														0
Priest's		1	1	1	80		70	pal			100	10087	pal		2	2											weap														0
Summoner's		1	1	1	30		25	nec			100	10087	nec		1	1											weap														0
Necromancer's		1	1	1	80		70	nec			100	10087	nec		2	2											weap														0
Angel's		1	1	1	30		25	sor			100	10087	sor		1	1											weap														0
Arch-Angel's		1	1	1	80		70	sor			100	10087	sor		2	2											weap														0
Slayer's		1	1	1	30		25	bar			100	10087	bar		1	1											weap														0
Berserker's		1	1	1	80		70	bar			100	10087	bar		2	2											weap														0
Shaman's		1	1	1	30		25	dru			100	10087	dru		1	1											weap														0
Hierophant's		1	1	1	80		70	dru			100	10087	dru		2	2											weap														0
Magekiller's		1	1	1	30		25	ass			100	10087	ass		1	1											weap														0
Witch-hunter's		1	1	1	80		70	ass			100	10087	ass		2	2											weap														0
Fletcher's		1	1	1	20		15	ama			100	10087	skilltab	0	1	1											weap														0
Bowyer's		1	1	1	40		30	ama			100	10087	skilltab	0	2	2											weap														0
Acrobat's		1	1	1	20		15	ama			100	10087	skilltab	1	1	1											weap														0
Gymnast's		1	1	1	40		30	ama			100	10087	skilltab	1	2	2											weap														0
Harpoonist's		1	1	1	20		15	ama			100	10087	skilltab	2	1	1											weap														0
Spearmaiden's		1	1	1	40		30	ama			100	10087	skilltab	2	2	2											weap														0
Burning		1	1	1	20		15	sor			100	10087	skilltab	3	1	1											weap														0
Blazing		1	1	1	40		30	sor			100	10087	skilltab	3	2	2											weap														0
Sparking		1	1	1	20		15	sor			100	10087	skilltab	4	1	1											weap														0
Charged		1	1	1	40		30	sor			100	10087	skilltab	4	2	2											weap														0
Chilling		1	1	1	20		15	sor			100	10087	skilltab	5	1	1											weap														0
Freezing		1	1	1	40		30	sor			100	10087	skilltab	5	2	2											weap														0
Hexing		1	1	1	20		15	nec			100	10087	skilltab	6	1	1											weap														0
Blighting		1	1	1	40		30	nec			100	10087	skilltab	6	2	2											weap														0
Fungal		1	1	1	20		15	nec			100	10087	skilltab	7	1	1											weap														0
Noxious		1	1	1	40		30	nec			100	10087	skilltab	7	2	2											weap														0
Graverobber's		1	1	1	20		15	nec			100	10087	skilltab	8	1	1											weap														0
Vodoun		1	1	1	40		30	nec			100	10087	skilltab	8	2	2											weap														0
Lion Branded		1	1	1	20		15	pal			100	10087	skilltab	9	1	1											weap														0
Hawk Branded		1	1	1	40		30	pal			100	10087	skilltab	9	2	2											weap														0
Captain's		1	1	1	20		15	pal			100	10087	skilltab	10	1	1											weap														0
Commander's		1	1	1	40		30	pal			100	10087	skilltab	10	2	2											weap														0
Preserver's		1	1	1	20		15	pal			100	10087	skilltab	11	1	1											weap														0
Warder's		1	1	1	40		30	pal			100	10087	skilltab	11	2	2											weap														0
Expert's		1	1	1	20		15	bar			100	10087	skilltab	12	1	1											weap														0
Veteran's		1	1	1	40		30	bar			100	10087	skilltab	12	2	2											weap														0
Fanatic		1	1	1	20		15	bar			100	10087	skilltab	13	1	1											weap														0
Raging		1	1	1	40		30	bar			100	10087	skilltab	13	2	2											weap														0
Sounding		1	1	1	20		15	bar			100	10087	skilltab	14	1	1											weap														0
Resonant		1	1	1	40		30	bar			100	10087	skilltab	14	2	2											weap														0
Trainer's		1	1	1	20		15	dru			100	10087	skilltab	15	1	1											weap														0
Caretaker's		1	1	1	40		30	dru			100	10087	skilltab	15	2	2											weap														0
Spiritual		1	1	1	20		15	dru			100	10087	skilltab	16	1	1											weap														0
Feral		1	1	1	40		30	dru			100	10087	skilltab	16	2	2											weap														0
Nature's		1	1	1	20		15	dru			100	10087	skilltab	17	1	1											weap														0
Terra's		1	1	1	40		30	dru			100	10087	skilltab	17	2	2											weap														0
Entrapping		1	1	1	20		15	ass			100	10087	skilltab	18	1	1											weap														0
Trickster's		1	1	1	40		30	ass			100	10087	skilltab	18	2	2											weap														0
Mentalist's		1	1	1	20		15	ass			100	10087	skilltab	19	1	1											weap														0
Psychic		1	1	1	40		30	ass			100	10087	skilltab	19	2	2											weap														0
Shogukusha's		1	1	1	20		15	ass			100	10087	skilltab	20	1	1											weap														0
Sensei's		1	1	1	40		30	ass			100	10087	skilltab	20	2	2											weap														0
Superior		1	1	1	50		42				100	10088	allskills		1	1											weap														0
Leech		1	1	1	6		4				200	10090	lifesteal		4	7											weap														0
Locust		1	1	1	20		15				200	10090	lifesteal		8	10											weap														0
Bat		1	1	1	6		4				200	10091	manasteal		4	7											weap														0
Vampire		1	1	1	20		15				200	10091	manasteal		8	10											weap														0
Crushing		1	1	1	25		20				200	10092	crush		10	20											weap														0
Apprentice’s		1	1	1	1		1				100	10098	cast1		10	20											weap														0
Magus’s		1	1	1	30		20				100	10098	cast1		21	30											weap														0
Magus’s		1	1	1	50		30				100	10098	cast1		31	40											weap														0
Magus’s		1	1	1	70		40				100	10098	cast1		41	50											weap														0
Blood Letting		1	1	1	1	26	1				100	10099	heal-kill		1	3											weap														0
Murderous		1	1	1	26		20				100	10099	heal-kill		4	10											weap														0
Blood Sucking		1	1	1	50		40				100	10099	heal-kill		11	25											weap														0
Triumphant		1	1	1	1	26	1				100	10100	mana-kill		1	2											weap														0
Victorious		1	1	1	26		20				100	10100	mana-kill		3	4											weap														0
Aureolin		1	1	1	50		40				100	10100	mana-kill		5	6											weap														0
Mechanist's		1	1	1	1		1				100	10101	sock		1	1											weap														0
Artificer's		1	1	1	33		25				100	10101	sock		2	2											weap														0
Jeweler's		1	1	1	55		47				100	10101	sock		3	3											weap														0
Cultist's		1	1	1	28		25				100	10102	openwounds		20	40	deep-wounds		150	250							weap														0
Bloodthirster's		1	1	1	48		45				100	10102	openwounds		20	40	deep-wounds		400	600							weap														0
Gorelust's		1	1	1	68		65				100	10102	openwounds		20	40	deep-wounds		800	1100							weap														0
Jagged		1	1	1	1		1				100	10064	dmg%	0	15	20											jewl														0
Deadly		1	1	1	15		10				100	10064	dmg%	0	21	25											jewl														0
Vicious		1	1	1	25		25				100	10064	dmg%	0	26	30											jewl														0
Brutal		1	1	1	35		40				100	10064	dmg%	0	31	35											jewl														0
Massive		1	1	1	45		55				100	10064	dmg%	0	36	40											jewl														0
Savage		1	1	1	55		70				100	10064	dmg%	0	41	45											jewl														0
Ready		1	1	1	1		1				100	10066	swing1		5	10											jewl														0
Swift		1	1	1	40		25				100	10066	swing2		10	15											jewl														0
Red		1	1	1	1		1				100	10067	dmg-min		3	6											jewl														0
Sanguinary		1	1	1	15		10				100	10067	dmg-min		7	10											jewl														0
Bloody		1	1	1	30		25				100	10067	dmg-min		11	14											jewl														0
Scarlet		1	1	1	50		45				100	10067	dmg-min		15	18											jewl														0
Jagged		1	1	1	1		1				100	10167	dmg-max		3	6											jewl														0
Forked		1	1	1	15		10				100	10167	dmg-max		7	10											jewl														0
Serrated		1	1	1	30		25				100	10167	dmg-max		11	14											jewl														0
Vermillion		1	1	1	50		45				100	10167	dmg-max		15	18											jewl														0
Rookie’s		1	1	1	1		1				100	10068	addxp		3	5											jewl														0
Student’s		1	1	1	20		15				100	10068	addxp		6	8											jewl														0
Scholar’s		1	1	1	35		30				100	10068	addxp		9	11											jewl														0
Lucky		1	1	1	1		1				100	10069	mag%		10	15											jewl														0
Lucky		1	1	1	20		15				100	10069	mag%		16	20											jewl														0
Lucky		1	1	1	35		30				100	10069	mag%		21	25											jewl														0
Bronze		1	1	1	1		1				100	10071	att	0	20	40											jewl														0
Iron		1	1	1	15		10				100	10071	att	0	41	60											jewl														0
Steel		1	1	1	25		20				100	10071	att	0	61	80											jewl														0
Silver		1	1	1	35		30				100	10071	att	0	81	100											jewl														0
Gold		1	1	1	45		40				100	10071	att	0	101	120											jewl														0
Platinum		1	1	1	55		50				100	10071	att	0	121	140											jewl														0
Meteoric		1	1	1	65		60				100	10071	att	0	141	160											jewl														0
Ember		1	1	1	1	26	1				100	10081	fire-min		3	4	fire-max		5	6							jewl														0
Smoldering		1	1	1	35		26				100	10081	fire-min		15	17	fire-max		23	25							jewl														0
Smoking		1	1	1	47		37				100	10081	fire-min		25	28	fire-max		35	38							jewl														0
Flaming		1	1	1	61		51				100	10081	fire-min		42	46	fire-max		52	56							jewl														0
Scorching		1	1	1	77		67				100	10081	fire-min		59	64	fire-max		79	84							jewl														0
Static		1	1	1	1	26	1				100	10082	ltng-min		1	1	ltng-max		7	9							jewl														0
Glowing		1	1	1	35		26				100	10082	ltng-min		1	1	ltng-max		37	41							jewl														0
Buzzing		1	1	1	47		37				100	10082	ltng-min		1	1	ltng-max		59	65							jewl														0
Arcing		1	1	1	61		51				100	10082	ltng-min		1	1	ltng-max		93	101							jewl														0
Shocking		1	1	1	77		67				100	10082	ltng-min		1	1	ltng-max		137	147							jewl														0
Cold		1	1	1	1	26	1				100	10083	cold-len		50	50	cold-min		3	4	cold-max		5	6			jewl														0
Snowflake		1	1	1	35		26				100	10083	cold-len		50	50	cold-min		15	17	cold-max		23	25			jewl														0
Shivering		1	1	1	47		37				100	10083	cold-len		50	50	cold-min		25	28	cold-max		35	38			jewl														0
Boreal		1	1	1	61		51				100	10083	cold-len		50	50	cold-min		42	46	cold-max		52	56			jewl														0
Hibernal		1	1	1	77		67				100	10083	cold-len		50	50	cold-min		59	64	cold-max		79	84			jewl														0
Conduit		1	1	1	1		1				100	10084	extra-ltng		2	3											jewl														0
Conduit		1	1	1	30		25				100	10084	extra-ltng		4	5											jewl														0
Conduit		1	1	1	50		45				100	10084	extra-ltng		6	7											jewl														0
Conduit		1	1	1	70		60				100	10084	extra-ltng		8	9											jewl														0
Numbing		1	1	1	1		1				100	10084	extra-cold		2	3											jewl														0
Numbing		1	1	1	30		25				100	10084	extra-cold		4	5											jewl														0
Numbing		1	1	1	50		45				100	10084	extra-cold		6	7											jewl														0
Numbing		1	1	1	70		60				100	10084	extra-cold		8	9											jewl														0
Inferno		1	1	1	1		1				100	10084	extra-fire		2	3											jewl														0
Inferno		1	1	1	30		25				100	10084	extra-fire		4	5											jewl														0
Inferno		1	1	1	50		45				100	10084	extra-fire		6	7											jewl														0
Inferno		1	1	1	70		60				100	10084	extra-fire		8	9											jewl														0
Infectious		1	1	1	1		1				100	10084	extra-pois		2	3											jewl														0
Infectious		1	1	1	30		25				100	10084	extra-pois		4	5											jewl														0
Infectious		1	1	1	50		45				100	10084	extra-pois		6	7											jewl														0
Infectious		1	1	1	70		60				100	10084	extra-pois		8	9											jewl														0
Scintillating		1	1	1	1		1				100	10084	extra-magi		2	3											jewl														0
Scintillating		1	1	1	30		25				100	10084	extra-magi		4	5											jewl														0
Scintillating		1	1	1	50		45				100	10084	extra-magi		6	7											jewl														0
Scintillating		1	1	1	70		60				100	10084	extra-magi		8	9											jewl														0
Discharging		1	1	1	1		1				100	10085	pierce-ltng		1	1											jewl														0
Discharging		1	1	1	30		25				100	10085	pierce-ltng		2	2											jewl														0
Discharging		1	1	1	50		45				100	10085	pierce-ltng		3	3											jewl														0
Discharging		1	1	1	70		60				100	10085	pierce-ltng		4	4											jewl														0
Frigid		1	1	1	1		1				100	10085	pierce-cold		1	1											jewl														0
Frigid		1	1	1	30		25				100	10085	pierce-cold		2	2											jewl														0
Frigid		1	1	1	50		45				100	10085	pierce-cold		3	3											jewl														0
Frigid		1	1	1	70		60				100	10085	pierce-cold		4	4											jewl														0
Wildfire		1	1	1	1		1				100	10085	pierce-fire		1	1											jewl														0
Wildfire		1	1	1	30		25				100	10085	pierce-fire		2	2											jewl														0
Wildfire		1	1	1	50		45				100	10085	pierce-fire		3	3											jewl														0
Wildfire		1	1	1	70		60				100	10085	pierce-fire		4	4											jewl														0
Malicious		1	1	1	1		1				100	10085	pierce-pois		1	1											jewl														0
Malicious		1	1	1	30		25				100	10085	pierce-pois		2	2											jewl														0
Malicious		1	1	1	50		45				100	10085	pierce-pois		3	3											jewl														0
Malicious		1	1	1	70		60				100	10085	pierce-pois		4	4											jewl														0
Lethal		1	1	1	1		1				100	10085	pierce-phys		1	1											jewl														0
Lethal		1	1	1	30		25				100	10085	pierce-phys		2	2											jewl														0
Lethal		1	1	1	50		45				100	10085	pierce-phys		3	3											jewl														0
Lethal		1	1	1	70		60				100	10085	pierce-phys		4	4											jewl														0
Apprentice’s		1	1	1	1		1				100	10098	cast1		1	2											jewl														0
Magus’s		1	1	1	30		20				100	10098	cast1		2	3											jewl														0
Magus’s		1	1	1	50		30				100	10098	cast1		3	4											jewl														0
Magus’s		1	1	1	70		40				100	10098	cast1		4	5											jewl														0
Blood Letting		1	1	1	1	26	1				100	10099	heal-kill		2	3											jewl														0
Murderous		1	1	1	26		20				100	10099	heal-kill		4	8											jewl														0
Blood Sucking		1	1	1	50		40				100	10099	heal-kill		9	15											jewl														0
Triumphant		1	1	1	1	26	1				100	10100	mana-kill		1	1											jewl														0
Victorious		1	1	1	26		20				100	10100	mana-kill		2	3											jewl														0
Aureolin		1	1	1	50		40				100	10100	mana-kill		4	5											jewl														0
Cultist's		1	1	1	28	68	25				100	10101	openwounds		5	10	deep-wounds		50	60							jewl														0
Bloodthirster's		1	1	1	48		45				100	10101	openwounds		5	10	deep-wounds		80	100							jewl														0
Gorelust's		1	1	1	68		65				100	10101	openwounds		5	10	deep-wounds		120	150							jewl														0
Jagged		1	1	1	1		1				100	10064	dmg%	0	20	35											misl														0
Deadly		1	1	1	15		10				100	10064	dmg%	0	36	50											misl														0
Vicious		1	1	1	25		25				100	10064	dmg%	0	51	65											misl														0
Brutal		1	1	1	35		40				100	10064	dmg%	0	66	80											misl														0
Savage		1	1	1	20		15				100	10065	deadly		10	15											misl														0
Devastating		1	1	1	40		35				100	10065	deadly		16	20											misl														0
Havoc		1	1	1	60		55				100	10065	deadly		21	25											misl														0
Ready		1	1	1	1		1				100	10066	swing1		5	10											misl														0
Swift		1	1	1	20		15				100	10066	swing2		11	15											misl														0
Quick		1	1	1	40		25				100	10066	swing2		16	20											misl														0
Quick		1	1	1	60		35				100	10066	swing2		21	25											misl														0
Quick		1	1	1	80		45				100	10066	swing2		26	30											misl														0
Red		1	1	1	1		1				100	10067	dmg-min		3	6											misl														0
Sanguinary		1	1	1	15		10				100	10067	dmg-min		7	15											misl														0
Bloody		1	1	1	30		25				100	10067	dmg-min		16	25											misl														0
Jagged		1	1	1	1		1				100	10167	dmg-max		3	6											misl														0
Forked		1	1	1	15		10				100	10167	dmg-max		7	15											misl														0
Serrated		1	1	1	30		25				100	10167	dmg-max		16	25											misl														0
Rookie’s		1	1	1	1		1				100	10068	addxp		3	6											misl														0
Student’s		1	1	1	20		15				100	10068	addxp		7	10											misl														0
Lucky		1	1	1	1		1				100	10069	mag%		15	25											misl														0
Lucky		1	1	1	20		15				100	10069	mag%		26	35											misl														0
Lucky		1	1	1	35		30				100	10069	mag%		36	45											misl														0
Greedy		1	1	1	1		1				100	10070	gold%		40	80											misl														0
Greedy		1	1	1	20		15				100	10070	gold%		81	120											misl														0
Greedy		1	1	1	35		30				100	10070	gold%		121	160											misl														0
Bronze		1	1	1	1		1				100	10071	att	0	25	50											misl														0
Iron		1	1	1	15		10				100	10071	att	0	51	75											misl														0
Steel		1	1	1	25		20				100	10071	att	0	76	100											misl														0
Silver		1	1	1	35		30				100	10071	att	0	101	125											misl														0
Gold		1	1	1	45		40				50	10071	att	0	126	150											misl														0
Platinum		1	1	1	55		50				20	10071	att	0	151	175											misl														0
Meteoric		1	1	1	65		60				10	10071	att	0	176	200											misl														0
Pacing		1	1	1	20		15				100	10080	move2		5	10											misl														0
Haste		1	1	1	35		25				100	10080	move2		11	15											misl														0
Haste		1	1	1	50		35				100	10080	move2		16	20											misl														0
Ember		1	1	1	1	26	1				100	10081	fire-min		5	6	fire-max		10	12							misl														0
Smoldering		1	1	1	35		26				100	10081	fire-min		50	60	fire-max		70	100							misl														0
Smoking		1	1	1	47		37				100	10081	fire-min		150	200	fire-max		280	350							misl														0
Flaming		1	1	1	61		51				100	10081	fire-min		500	600	fire-max		700	800							misl														0
Cold		1	1	1	1	26	1				100	10083	cold-len		50	50	cold-min		5	6	cold-max		10	12			misl														0
Snowflake		1	1	1	35		26				100	10083	cold-len		50	50	cold-min		50	60	cold-max		70	100			misl														0
Shivering		1	1	1	47		37				100	10083	cold-len		50	50	cold-min		150	200	cold-max		280	350			misl														0
Boreal		1	1	1	61		51				100	10083	cold-len		50	50	cold-min		500	600	cold-max		700	800			misl														0
Numbing		1	1	1	1		1				100	10084	extra-cold		10	20											misl														0
Numbing		1	1	1	30		25				100	10084	extra-cold		21	30											misl														0
Numbing		1	1	1	50		45				100	10084	extra-cold		31	40											misl														0
Inferno		1	1	1	1		1				100	10084	extra-fire		10	20											misl														0
Inferno		1	1	1	30		25				100	10084	extra-fire		21	30											misl														0
Inferno		1	1	1	50		45				100	10084	extra-fire		31	40											misl														0
Scintillating		1	1	1	1		1				100	10084	extra-magi		10	20											misl														0
Scintillating		1	1	1	30		25				100	10084	extra-magi		21	30											misl														0
Scintillating		1	1	1	50		45				100	10084	extra-magi		31	40											misl														0
Frigid		1	1	1	1		1				100	10085	pierce-cold		4	6											misl														0
Frigid		1	1	1	30		25				100	10085	pierce-cold		7	9											misl														0
Frigid		1	1	1	50		45				100	10085	pierce-cold		10	12											misl														0
Wildfire		1	1	1	1		1				100	10085	pierce-fire		4	6											misl														0
Wildfire		1	1	1	30		25				100	10085	pierce-fire		7	9											misl														0
Wildfire		1	1	1	50		45				100	10085	pierce-fire		10	12											misl														0
Lethal		1	1	1	1		1				100	10085	pierce-phys		4	6											misl														0
Lethal		1	1	1	30		25				100	10085	pierce-phys		7	9											misl														0
Lethal		1	1	1	50		45				100	10085	pierce-phys		10	12											misl														0
Superior		1	1	1	50		42				100	10088	allskills		1	1											misl														0
Leech		1	1	1	6		4				200	10090	lifesteal		4	7											misl														0
Locust		1	1	1	20		15				200	10090	lifesteal		8	10											misl														0
Bat		1	1	1	6		4				200	10091	manasteal		4	7											misl														0
Vampire		1	1	1	20		15				200	10091	manasteal		8	10											misl														0
Crushing		1	1	1	25		20				200	10092	crush		10	20											misl														0
Blood Letting		1	1	1	1	26	1				100	10099	heal-kill		1	3											misl														0
Murderous		1	1	1	26		20				100	10099	heal-kill		4	10											misl														0
Blood Sucking		1	1	1	50		40				100	10099	heal-kill		11	25											misl														0
Triumphant		1	1	1	1	26	1				100	10100	mana-kill		1	2											misl														0
Victorious		1	1	1	26		20				100	10100	mana-kill		3	4											misl														0
Aureolin		1	1	1	50		40				100	10100	mana-kill		5	6											misl														0
Penetrating		1	1	1	15		10				100	10102	pierce		5	10											misl														0
Puncturing		1	1	1	30		25				100	10102	pierce		11	20											misl														0
Piercing		1	1	1	45		40				100	10102	pierce		21	30											misl														0
Impaling		1	1	1	60		55				100	10102	pierce		31	40											misl														0
Specialist		1	1	1	40		30				100	10103	oskill	6	25	35											misl														0
Specialist		1	1	1	60		40				100	10103	oskill	6	36	45											misl														0
Specialist		1	1	1	40		30				100	10103	oskill	12	25	35											misl														0
Specialist		1	1	1	60		40				100	10103	oskill	12	36	45											misl														0
Specialist		1	1	1	40		30				100	10103	oskill	16	25	35											misl														0
Specialist		1	1	1	60		40				100	10103	oskill	16	36	45											misl														0
Specialist		1	1	1	40		30				100	10103	oskill	21	25	35											misl														0
Specialist		1	1	1	60		40				100	10103	oskill	21	36	45											misl														0
Specialist		1	1	1	40		30				100	10103	oskill	22	25	35											misl														0
Specialist		1	1	1	60		40				100	10103	oskill	22	36	45											misl														0
Specialist		1	1	1	40		30				100	10103	oskill	26	25	35											misl														0
Specialist		1	1	1	60		40				100	10103	oskill	26	36	45											misl														0
Specialist		1	1	1	40		30				100	10103	oskill	27	25	35											misl														0
Specialist		1	1	1	60		40				100	10103	oskill	27	36	45											misl														0
Specialist		1	1	1	40		30				100	10103	oskill	31	25	35											misl														0
Specialist		1	1	1	60		40				100	10103	oskill	31	36	45											misl														0
Acrobat's		1	1	1	20		15	ama			100	125	skilltab	1	1	1											ajav														0
Gymnast's		1	1	1	40		30	ama			100	125	skilltab	1	2	2											ajav														0
Harpoonist's		1	1	1	20		15	ama			100	125	skilltab	2	1	1											ajav														0
Spearmaiden's		1	1	1	40		30	ama			100	125	skilltab	2	2	2											ajav														0
Acrobat's		1	1	1	20		15	ama			100	125	skilltab	1	1	1											aspe														0
Gymnast's		1	1	1	40		30	ama			100	125	skilltab	1	2	2											aspe														0
Harpoonist's		1	1	1	20		15	ama			100	125	skilltab	2	1	1											aspe														0
Spearmaiden's		1	1	1	40		30	ama			100	125	skilltab	2	2	2											aspe														0
Fletcher's		1	1	1	20		15	ama			100	125	skilltab	0	1	1											abow														0
Bowyer's		1	1	1	40		30	ama			100	125	skilltab	0	2	2											abow														0
Acrobat's		1	1	1	20		15	ama			100	125	skilltab	1	1	1											abow														0
Gymnast's		1	1	1	40		30	ama			100	125	skilltab	1	2	2											abow														0
Burning		1	1	1	20		15	sor			100	125	skilltab	3	1	1											staf														0
Blazing		1	1	1	40		30	sor			100	125	skilltab	3	2	2											staf														0
Sparking		1	1	1	20		15	sor			100	125	skilltab	4	1	1											staf														0
Charged		1	1	1	40		30	sor			100	125	skilltab	4	2	2											staf														0
Chilling		1	1	1	20		15	sor			100	125	skilltab	5	1	1											staf														0
Freezing		1	1	1	40		30	sor			100	125	skilltab	5	2	2											staf														0
Burning		1	1	1	20		15	sor			100	125	skilltab	3	1	1											orb														0
Blazing		1	1	1	40		30	sor			100	125	skilltab	3	2	2											orb														0
Sparking		1	1	1	20		15	sor			100	125	skilltab	4	1	1											orb														0
Charged		1	1	1	40		30	sor			100	125	skilltab	4	2	2											orb														0
Chilling		1	1	1	20		15	sor			100	125	skilltab	5	1	1											orb														0
Freezing		1	1	1	40		30	sor			100	125	skilltab	5	2	2											orb														0
Hexing		1	1	1	20		15	nec			100	125	skilltab	6	1	1											wand														0
Blighting		1	1	1	40		30	nec			100	125	skilltab	6	2	2											wand														0
Fungal		1	1	1	20		15	nec			100	125	skilltab	7	1	1											wand														0
Noxious		1	1	1	40		30	nec			100	125	skilltab	7	2	2											wand														0
Graverobber's		1	1	1	20		15	nec			100	125	skilltab	8	1	1											wand														0
Vodoun		1	1	1	40		30	nec			100	125	skilltab	8	2	2											wand														0
Hexing		1	1	1	20		15	nec			100	125	skilltab	6	1	1											head														0
Blighting		1	1	1	40		30	nec			100	125	skilltab	6	2	2											head														0
Fungal		1	1	1	20		15	nec			100	125	skilltab	7	1	1											head														0
Noxious		1	1	1	40		30	nec			100	125	skilltab	7	2	2											head														0
Graverobber's		1	1	1	20		15	nec			100	125	skilltab	8	1	1											head														0
Vodoun		1	1	1	40		30	nec			100	125	skilltab	8	2	2											head														0
Fungal		1	1	1	20		15	nec			100	125	skilltab	7	1	1											knif							tkni							0
Noxious		1	1	1	40		30	nec			100	125	skilltab	7	2	2											knif							tkni							0
Lion Branded		1	1	1	20		15	pal			100	125	skilltab	9	1	1											scep														0
Hawk Branded		1	1	1	40		30	pal			100	125	skilltab	9	2	2											scep														0
Captain's		1	1	1	20		15	pal			100	125	skilltab	10	1	1											scep														0
Commander's		1	1	1	40		30	pal			100	125	skilltab	10	2	2											scep														0
Lion Branded		1	1	1	20		15	pal			100	125	skilltab	9	1	1											2hsw														0
Hawk Branded		1	1	1	40		30	pal			100	125	skilltab	9	2	2											2hsw														0
Captain's		1	1	1	20		15	pal			100	125	skilltab	10	1	1											2hsw														0
Commander's		1	1	1	40		30	pal			100	125	skilltab	10	2	2											2hsw														0
Lion Branded		1	1	1	20		15	pal			100	125	skilltab	9	1	1											ashd														0
Hawk Branded		1	1	1	40		30	pal			100	125	skilltab	9	2	2											ashd														0
Captain's		1	1	1	20		15	pal			100	125	skilltab	10	1	1											ashd														0
Commander's		1	1	1	40		30	pal			100	125	skilltab	10	2	2											ashd														0
Expert's		1	1	1	20		15	bar			100	125	skilltab	12	1	1											phlm														0
Veteran's		1	1	1	40		30	bar			100	125	skilltab	12	2	2											phlm														0
Fanatic		1	1	1	20		15	bar			100	125	skilltab	13	1	1											phlm														0
Raging		1	1	1	40		30	bar			100	125	skilltab	13	2	2											phlm														0
Sounding		1	1	1	20		15	bar			100	125	skilltab	14	1	1											phlm														0
Resonant		1	1	1	40		30	bar			100	125	skilltab	14	2	2											phlm														0
Trainer's		1	1	1	20		15	dru			100	125	skilltab	15	1	1											club														0
Caretaker's		1	1	1	40		30	dru			100	125	skilltab	15	2	2											club														0
Spiritual		1	1	1	20		15	dru			100	125	skilltab	16	1	1											club														0
Feral		1	1	1	40		30	dru			100	125	skilltab	16	2	2											club														0
Nature's		1	1	1	20		15	dru			100	125	skilltab	17	1	1											club														0
Terra's		1	1	1	40		30	dru			100	125	skilltab	17	2	2											club														0
Trainer's		1	1	1	20		15	dru			100	125	skilltab	15	1	1											pelt														0
Caretaker's		1	1	1	40		30	dru			100	125	skilltab	15	2	2											pelt														0
Spiritual		1	1	1	20		15	dru			100	125	skilltab	16	1	1											pelt														0
Feral		1	1	1	40		30	dru			100	125	skilltab	16	2	2											pelt														0
Nature's		1	1	1	20		15	dru			100	125	skilltab	17	1	1											pelt														0
Terra's		1	1	1	40		30	dru			100	125	skilltab	17	2	2											pelt														0
Entrapping		1	1	1	20		15	ass			100	125	skilltab	18	1	1											h2h														0
Trickster's		1	1	1	40		30	ass			100	125	skilltab	18	2	2											h2h														0
Mentalist's		1	1	1	20		15	ass			100	125	skilltab	19	1	1											h2h														0
Psychic		1	1	1	40		30	ass			100	125	skilltab	19	2	2											h2h														0
Shogukusha's		1	1	1	20		15	ass			100	125	skilltab	20	1	1											h2h														0
Sensei's		1	1	1	40		30	ass			100	125	skilltab	20	2	2											h2h														0
Entrapping		1	1	1	20		15	ass			100	125	skilltab	18	1	1											knif							tkni							0
Trickster's		1	1	1	40		30	ass			100	125	skilltab	18	2	2											knif							tkni							0
Mentalist's		1	1	1	20		15	ass			100	125	skilltab	19	1	1											knif							tkni							0
Psychic		1	1	1	40		30	ass			100	125	skilltab	19	2	2											knif							tkni							0
Shogukusha's		1	1	1	20		15	ass			100	125	skilltab	20	1	1											knif							tkni							0
Sensei's		1	1	1	40		30	ass			100	125	skilltab	20	2	2											knif							tkni							0
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
of Health	0	0	1	1	7		5					1	red-dmg		1	1											tors	helm	shld	ring	amul										0
of Protection	1	0	1	1	18		13					1	red-dmg		2	2											ring	amul													0
of Absorption	2	0	1	1	26		19					1	red-dmg		3	3											amul														0
of Life	3	0	1	1	35		26					1	red-dmg		4	4									1	dblu	amul														0
	4		1																																						0
of Warding	5	0	1	1	7		5					2	red-mag		1	1											tors	helm	shld	ring	amul										0
of the Sentinel	6	0	1	1	18		13					2	red-mag		2	2											ring	amul													0
of Guarding	7	0	1	1	26		19					2	red-mag		3	3											amul														0
of Negation	8	0	1	1	35		26					2	red-mag		4	4											amul														0
	9																																								0
of Piercing	10	0	1	1	25		18					3	ignore-ac		1	1											rod														0
of Bashing	11	0	1	1	16		12					4	dmg-ac		-25	-40											mele							wand	staf						0
of Puncturing	12	0	1	1	6		4					4	dmg-ac		-10	-20											mele							wand	staf						0
of Thorns	13	0	1	1	14		10					5	thorns		1	3											tors	helm	shld	belt											0
of Spikes	14	0	1	1	21		15					5	thorns		2	6									1	oran	tors	helm	shld	belt											0
of Readiness	15	0	1	1	1		1					6	swing1		10	10											weap	glov													0
of Alacrity	16	0	1	1	8		6					6	swing2		20	20											weap														0
of Swiftness	17	0	1	1	19		14					6	swing2		30	30											mele	miss						wand	staf						0
of Quickness	18	0	1	1	25		18					6	swing3		40	40									1	dyel	mele	miss						wand	staf						0
of Blocking	19	0	1	1	1		1					7	block		10	10											shld														0
of Deflecting	20	0	1	1	11		8					7	block		20	20											shld														0
of the Apprentice	21	0	1	1	5		3					8	cast1		10	10											rod	ring	amul												0
of the Magus	22	0	1	1	17		12					8	cast3		20	20											rod														0
of Frost	23	0	1	1	4		3					9	cold-min		1	1	cold-max		1	4	cold-len		125	125			weap														0
of the Glacier	24	0	1	1	18		13					9	cold-min		4	4	cold-max		4	12	cold-len		150	150			mele														0
of Frost	25	0	1	1	55		41					9	cold-min		1	1	cold-max		1	4	cold-len		125	125			belt	amul													0
of Warmth	26	0	1	1	10		7					10	half-freeze		1	1											shld	boot	glov	ring	amul										0
of Flame	27	0	1	1	4		3					11	fire-min		1	1	fire-max		2	6							weap														0
of Fire	28	0	1	1	15		11					11	fire-min		2	2	fire-max		6	11							weap														0
of Burning	29	0	1	1	25		18					11	fire-min		10	10	fire-max		10	20					1	dred	weap														0
of Flame	30	0	1	1	40		30					11	fire-min		1	1	fire-max		2	6							glov	ring	amul												0
of Shock	31	0	1	1	4		3					12	ltng-min		1	1	ltng-max		8	8							weap														0
of Lightning	32	0	1	1	15		11					12	ltng-min		1	1	ltng-max		16	16							weap														0
of Thunder	33	0	1	1	25		18					12	ltng-min		1	1	ltng-max		32	32					1	dyel	weap														0
of Shock	34	0	1	1	50		37					12	ltng-min		1	1	ltng-max		8	8							boot	ring	amul	weap				miss	rod						0
of Craftsmanship	35	0	1	1	1		1					13	dmg-max		1	2											weap	ring	amul												0
of Quality	36	0	1	1	4		3					13	dmg-max		2	2											weap														0
of Maiming	37	0	1	1	7		5					13	dmg-max		3	4											weap														0
of Slaying	38	0	1	1	11		8					13	dmg-max		5	7											weap														0
of Gore	39	0	1	1	14		10					13	dmg-max		8	10											weap														0
of Carnage	40	0	1	1	19		14					13	dmg-max		11	14									1	blac	weap							wand	staf						0
of Slaughter	41	0	1	1	25		18					13	dmg-max		15	20									1	blac	weap							wand	staf						0
of Maiming	42	0	1	1	42		31					13	dmg-max		3	4											shld	ring	amul												0
of Worth	43	0	1	1	2		1					14	dmg-min		1	1											weap							rod							0
of Measure	44	0	1	1	6		4					14	dmg-min		2	2											weap														0
of Excellence	45	0	1	1	12		9					14	dmg-min		3	3											weap	ring	amul												0
of Performance	46	0	1	1	18		13					14	dmg-min		4	5									1	blac	weap														0
of Measure	47	0	1	1	37		27					14	dmg-min		2	2											tors	helm	ring	amul											0
of Blight	48	0	1	1	5		3					15	pois-min		8	8	pois-max		35	35	pois-len		50	50			weap							scep							0
of Venom	49	0	1	1	15		11					15	pois-min		16	16	pois-max		105	105	pois-len		50	50			weap							scep							0
of Pestilence	50	0	1	1	25		18					15	pois-min		32	32	pois-max		300	300	pois-len		50	50	1	dgrn	weap							scep							0
of Blight	51	0	1	1	45		33					15	pois-min		8	8	pois-max		795	795	pois-len		50	50			ring	amul													0
of Dexterity	52	0	1	1	4		3					16	dex		1	1											ring	amul													0
of Dexterity	53	0	1	1	5		3					16	dex		1	3											scep	miss	boot	glov	ring	amul									0
of Skill	54	0	1	1	10		7					16	dex		4	6											scep	miss	boot	glov	ring	amul									0
of Skill	55	0	1	1	45		33					16	dex		4	6											armo							boot	glov						0
of Accuracy	56	0	1	1	18		13					16	dex		7	10											scep	miss	boot	glov	ring	amul									0
of Precision	57	0	1	1	22		16					16	dex		11	15											scep	miss	amul												0
of Precision	58	0	1	1	60		45					16	dex		11	15											armo	ring													0
of Perfection	59	0	1	1	30		22					16	dex		16	20									1	dgld	miss	glov	amul												0
of Balance	60	0	1	1	5		3					17	balance1		10	10											armo							glov							0
of Stability	61	0	1	1	9		6					17	balance3		20	20									1	dyel	armo							glov							0
	62																																								0
of Regeneration	63	0	1	1	10		7					19	regen		3	3											scep	belt	ring	amul											0
of Regeneration	64	0	1	1	40		30					19	regen		3	3											shld	glov													0
of Regeneration	65	0	1	1	70		52					19	regen		3	3											tors	helm	weap	boot				scep							0
of Regrowth	66	0	1	1	17		12					19	regen		5	5									1	cred	scep	amul													0
of Regrowth	67	0	1	1	55		41					19	regen		5	5									1	cred	belt	ring													0
of Vileness	68	0	1	1	9		6					20	noheal		1	1											mele							scep							0
	69																																								0
of Greed	70	0	1	1	2		1					22	gold%		40	60											ring	amul													0
of Wealth	71	0	1	1	17		12					22	gold%		80	120									1	lgld	boot	glov	belt	amul											0
of Chance	72	0	1	1	12		9					23	mag%		10	19											ring	amul													0
of Fortune	73	0	1	1	16		12					23	mag%		20	35									1	lgld	boot	glov	amul												0
of Energy	74	0	1	1	4		3					24	mana		1	1											ring	amul													0
of Energy	75	0	1	1	5		3					24	mana		1	5											rod	ring	amul												0
of the Mind	76	0	1	1	10		7					24	mana		6	10											rod	ring	amul												0
of Brilliance	77	0	1	1	18		13					24	mana		11	15											rod	ring	amul												0
of Sorcery	78	0	1	1	22		16					24	mana		16	20									1	dgld	rod	amul													0
of Wizardry	79	0	1	1	30		22					24	mana		21	30									1	dgld	rod	ring	amul												0
of the Bear	80	0	1	1	8		6					25	knock		1	1											mele														0
of Light	81	0	1	1	6		4					26	light		1	1											armo	rod	miss	ring	amul										0
of Radiance	82	0	1	1	15		11					26	light		3	3											rod	miss	ring	amul											0
of the Sun	83	0	1	1	17		12					26	light		5	5											rod	miss	glov	ring	amul										0
of Life	84	0	1	1	23		17					27	hp		5	5											tors	helm	shld	belt	amul										0
of the Jackal	85	0	1	1	3		2					27	hp		1	5											armo	rod	ring	amul											0
of the Fox	86	0	1	1	6		4					27	hp		5	10											armo	rod	ring	amul											0
of the Wolf	87	0	1	1	14		10					27	hp		11	20											armo	rod	ring	amul											0
of the Wolf	88	0	1	1	45		33					27	hp		11	20											weap							rod							0
of the Tiger	89	0	1	1	20		15					27	hp		21	30											armo	ring	amul												0
of the Mammoth	90	0	1	1	24		18					27	hp		31	40									1	cred	tors	helm	shld	ring	amul										0
of the Mammoth	91	0	1	1	60		45					27	hp		31	40									1	cred	mele	glov	belt					rod							0
of the Colosuss	92	0	1	1	30		22					27	hp		41	60									1	cred	tors	helm	shld	belt	amul										0
of the Leech	93	0	1	1	6		4					28	lifesteal		4	7											weap	ring	amul												0
of the Locust	94	0	1	1	20		15					28	lifesteal		8	10									1	cred	mele														0
of the Bat	95	0	1	1	6		4					29	manasteal		4	8											weap	ring	amul												0
of the Vampire	96	0	1	1	20		15					29	manasteal		9	12									1	cblu	mele														0
of Defiance	97	0	1	1	25		18					30	res-pois-len		75	75									1	dred	tors	helm	shld	amul											0
of Amelioration	98	0	1	1	18		13					30	res-pois-len		50	50											tors	helm	shld	amul											0
of Remedy	99	0	1	1	7		5					30	res-pois-len		25	25											armo	ring	amul												0
	100																																								0
of Simplicity	101	0	1	1	25		18					32	ease		-40	-40											tors	helm	weap	shld				rod							0
of Ease	102	0	1	1	15		11					32	ease		-20	-20											tors	helm	weap	shld				rod							0
	103																																								0
of Strength	104	0	1	1	5		3					34	str		1	3											belt	ring	amul												0
of Might	105	0	1	1	10		7					34	str		4	6											mele	shld	ring	amul				wand	staf						0
of the Ox	106	0	1	1	18		13					34	str		7	10											mele	belt	ring	amul				wand	staf						0
of the Ox	107	0	1	1	47		35					34	str		7	10											shld	boot	glov												0
of the Giant	108	0	1	1	22		16					34	str		11	15									1	dgld	mele	belt	amul					wand	staf						0
of the Giant	109	0	1	1	62		46					34	str		11	15									1	dgld	boot	glov	ring	shld											0
of the Titan	110	0	1	1	30		22					34	str		16	20									1	dgld	boot	belt	amul												0
of Pacing	111	0	1	1	2		1					35	move1		10	10											boot														0
of Haste	112	0	1	1	12		9					35	move2		20	20											boot														0
of Speed	113	0	1	1	22		16					35	move3		30	30											boot														0
Expansion	114																																								
of Health	115	1	1	1	7	47	5				0	1	red-dmg		1	1											tors	shld	ring	amul	circ	misl									0
of Protection	116	1	1	1	18	48	13				0	1	red-dmg		2	2											ring	amul	circ	misl											0
of Absorption	117	1	1	1	26	66	19				0	1	red-dmg		3	3											amul	circ	misl												0
of Life	118	1	1	1	35		26				0	1	red-dmg		4	4									1	dblu	amul	circ	misl												0
of Life Everlasting	119	100	1		45		37				0	1	red-dmg		10	25											amul	circ													0
of Protection	120	1	1	1	24	64	18				0	1	red-dmg		2	2											tors	shld	circ												0
of Absorption	121	1	1	1	32	72	24				0	1	red-dmg		3	3											tors	shld	circ	ring											0
of Life	122	1	1	1	41		33				0	1	red-dmg		4	7											tors	shld	circ	ring											0
of Anima	123	100	1	1	51		43				0	1	red-dmg		8	15											tors	shld	circ	amu											0
of Warding	124	1	1	1	7	47	5				0	2	red-mag		1	2											tors	shld	ring	amul	orb	circ	misl								0
of the Sentinel	125	1	1	1	18		12				0	2	red-mag		2	4											ring	amul	orb	circ	misl										0
of Guarding	126	1	1	1	26		19				0	2	red-mag		3	6											amul	orb	circ	misl											0
of Negation	127	100	1	1	42		35				0	2	red-mag		8	12											amul	orb	circ	misl											0
of the Sentinel	128	1	1	1	24		18				0	2	red-mag		2	4											tors	shld	circ												0
of Guarding	129	1	1	1	32		24				0	2	red-mag		3	6											tors	shld	circ	ring											0
of Negation	130	100	1		41		33				0	2	red-mag		8	12											tors	shld	circ												0
of Coolness	131	100		1	11		8				0	3	abs-fire		2	2											tors	shld	boot	circ											0
of Incombustibility	132	100		1	19		14				0	3	abs-fire		3	3											tors	shld	boot	circ											0
of Amianthus	133	100		1	28		21				0	3	abs-fire		4	5											tors	shld	boot	circ											0
of Fire Quenching	134	100			38		30				0	3	abs-fire		6	8											tors	shld	boot	circ											0
of Coolness	135	100		1	13		9				0	3	abs-fire		2	2											ring	amul	orb	circ											0
of Incombustibility	136	100		1	22		16				0	3	abs-fire		3	3											amul	orb	circ												0
of Amianthus	137	100		1	33		25				0	3	abs-fire		4	5											amul	orb	circ												0
of Fire Quenching	138	100			46		38				0	3	abs-fire		6	8											amul	orb	circ												0
of Faith	139	100		1	23		17				0	3	abs-fire		1	2											jewl														0
of Resistance	140	100		1	11		8				0	3	abs-ltng		2	2											tors	shld	boot	circ											0
of Insulation	141	100		1	19		14				0	3	abs-ltng		3	3											tors	shld	boot	circ											0
of Grounding	142	100		1	28		21				0	3	abs-ltng		4	5											tors	shld	boot	circ											0
of the Dynamo	143	100			38		30				0	3	abs-ltng		6	8											tors	shld	boot	circ											0
of Resistance	144	100		1	13		9				0	3	abs-ltng		2	2											ring	amul	orb	circ											0
of Insulation	145	100		1	22		16				0	3	abs-ltng		3	3											amul	orb	circ												0
of Grounding	146	100		1	33		25				0	3	abs-ltng		4	5											amul	orb	circ												0
of the Dynamo	147	100			46		38				0	3	abs-ltng		6	8											amul	orb	circ												0
of Stoicism	148	100		1	22		16				0	3	abs-ltng		1	2											jewl														0
of Warming	149	100		1	11		8				0	3	abs-cold		2	2											tors	shld	boot	circ											0
of Thawing	150	100		1	19		14				0	3	abs-cold		3	3											tors	shld	boot	circ	misl										0
of the Dunes	151	100		1	28		21				0	3	abs-cold		4	5											tors	shld	boot	circ											0
of the Sirocco	152	100			38		30				0	3	abs-cold		6	8											tors	shld	boot	circ											0
of Warming	153	100		1	13		9				0	3	abs-cold		2	2											ring	amul	orb	circ											0
of Thawing	154	100		1	22		16				0	3	abs-cold		3	3											amul	orb	circ												0
of the Dunes	155	100		1	33		25				0	3	abs-cold		4	5											amul	orb	circ												0
of the Sirocco	156	100			46		38				0	3	abs-cold		6	8											amul	orb	circ												0
of Desire	157	100		1	23		17				0	3	abs-cold		1	2											jewl														0
of Piercing	158	1	1	1	25		18				2	4	ignore-ac		1	1											rod	knif	h2h												0
of Bashing	159	100		1	16		12				4	5	dmg-ac		-25	-40											blun							wand	staf	orb					0
of Puncturing	160	100		1	6		4				4	5	dmg-ac		-10	-20											spea	knif	h2h												0
of Thorns	161	1	1	1	14	54	10				0	6	thorns		3	6											tors	shld	belt	circ											0
of Spikes	162	1	1	1	21	61	15				0	6	thorns		8	12									1	oran	tors	shld	belt	circ											0
of Razors	163	100	1	1	34	74	26				0	6	thorns		31	40									1	oran	tors	shld	circ												0
of Swords	164	100	1	1	47		39				0	6	thorns		80	160									1	oran	tors	shld	circ												0
of Malice	165	100	1	1	37		29				0	6	thorns		30	40											jewl														0
of Readiness	166	1	1	1	5		3				6	7	swing1		6	20											weap	misl						wand	orb						0
of Alacrity	167	1	1	1	25		17				6	7	swing2		21	30											weap	misl						wand	orb						0
of Swiftness	168	1	1	1	34		26				6	7	swing2		31	45											mele	miss						wand	staf	orb					0
of Quickness	169	1	1	1	46		38				5	7	swing3		46	60									1	dyel	mele	miss						wand	staf	orb					0
of Alacrity	170	100	1	1	43		35				4	9	swing2		16	25									1	dyel	glov														0
of Fervor	171	100	1		39		31				4	7	swing1		10	20											jewl														0
of Blocking	172	1	1	1	1		1				7	8	block		10	10	block2		15	15							shld														0
of Deflecting	173	1	1	1	11		8				6	8	block		20	20	block2		30	30							shld														0
of the Apprentice	174	1	1	1	5		3				6	9	cast1		6	15											rod	ring	amul	orb	circ										0
of the Magus	175	1	1	1	29		21				5	9	cast3		16	25											rod	orb	circ												0
of Frost	176	1	1	1	4	29	3				5	10	cold-min		1	1	cold-max		1	2	cold-len		50	50			weap	misl						wand	orb						0
of the Icicle	177	100	1	1	13	38	9				4	10	cold-min		3	4	cold-max		12	16	cold-len		75	75			weap	misl						wand	orb						0
of the Glacier	178	1	1	1	27		20				3	10	cold-min		14	21	cold-max		45	71	cold-len		100	100	1	dblu	weap	misl						wand	orb						0
of Winter	179	100	1	1	45		37				2	10	cold-min		44	60	cold-max		126	246	cold-len		150	150	1	dblu	mele	misl						wand	orb						0
of Frost	180	1	1	1	45	70	37				2	10	cold-min		1	1	cold-max		3	6	cold-len		50	50			belt	amul													0
of Frigidity	181	100	1	1	16		12				2	10	cold-min		1	1	cold-max		3	5	cold-len		50	50	1	dblu	jewl														0
of Warmth	182	1	1	1	10		7				4	11	half-freeze		1	1											shld	boot	glov	ring	amul	circ	orb								0
of Flame	183	1	1	1	4	29	3				5	12	fire-min		1	1	fire-max		2	5							weap	misl						wand	orb						0
of Fire	184	1	1	1	15	40	11				4	12	fire-min		2	8	fire-max		12	22							weap	misl						wand	orb						0
of Burning	185	1	1	1	25	50	18				3	12	fire-min		20	30	fire-max		37	72					1	dred	weap	misl						wand	orb						0
of Incineration	186	100	1	1	43		35				2	12	fire-min		57	90	fire-max		102	146					1	dred	mele	misl						wand	orb						0
of Flame	187	100	1	1	40	65	30				0	12	fire-min		1	1	fire-max		2	6							glov	ring	amul												0
of Passion	188	100	1	1	15		11				2	12	fire-min		1	3	fire-max		6	10					1	dred	jewl														0
of Shock	189	1	1	1	4	29	3				5	13	ltng-min		1	1	ltng-max		3	8							weap	misl						wand	orb						0
of Lightning	190	1	1	1	15	40	11				4	13	ltng-min		1	1	ltng-max		14	24							weap	misl						wand	orb						0
of Thunder	191	1	1	1	25		18				3	13	ltng-min		1	1	ltng-max		34	84					1	dyel	weap	misl						wand	orb						0
of Storms	192	100	1	1	34		26				2	13	ltng-min		1	6	ltng-max		85	126					1	dyel	mele	misl						wand	orb						0
of Shock	193	100	1	1	45	70	37				0	13	ltng-min		1	1	ltng-max		11	23							boot	ring	amul												0
of Ennui	194	100	1	1	15		11				2	13	ltng-min		1	1	ltng-max		10	20					1	dyel	jewl														0
of Craftsmanship	195	1	1	1	1	26	1				8	14	dmg-max		1	1											weap	ring	amul					wand	staf	orb					0
of Quality	196	1	1	1	4	29	3				8	14	dmg-max		2	2											weap							wand	staf	orb					0
of Maiming	197	1	1	1	7	32	5				7	14	dmg-max		3	4											weap							wand	staf	orb					0
of Slaying	198	1	1	1	11	36	8				7	14	dmg-max		5	7											weap							wand	staf	orb					0
of Gore	199	1	1	1	14		10				6	14	dmg-max		8	10											weap							wand	staf	orb					0
of Carnage	200	1	1	1	19		14				6	14	dmg-max		11	14									1	blac	weap							wand	staf	orb					0
of Slaughter	201	1	1	1	25		18				5	14	dmg-max		15	20									1	blac	weap							wand	staf	orb					0
of Butchery	202	100	1	1	35		27				5	14	dmg-max		21	40									1	blac	weap							wand	staf	orb					0
of Evisceration	203	100	1	1	45		37				4	14	dmg-max		41	63									1	blac	weap							wand	staf	orb					0
of Maiming	204	1	1	1	42		34				4	14	dmg-max		3	4											shld	ring	amul												0
of Craftsmanship	205	100	1	1	1	7	1				4	14	dmg-max		1	2											circ	helm													0
of Craftsmanship	206	100	1	1	8	14	6				4	14	dmg-max		2	3											circ	helm													0
of Craftsmanship	207	100	1	1	15	55	11				4	14	dmg-max		4	5											circ	helm													0
of Quality	208	100	1	1	23	29	17				4	14	dmg-max		6	7											circ	helm													0
of Quality	209	100	1	1	30	70	22				4	14	dmg-max		7	8											circ	helm													0
of Maiming	210	100	1		37	44	29				4	14	dmg-max		9	10											circ	helm													0
of Maiming	211	100	1		45		37				4	14	dmg-max		11	12											circ	helm													0
of Craftsmanship	212	100	0	1	8	17	6				4	14	dmg-max		1	1											mcha														0
of Craftsmanship	213	100	0	1	18		13				4	14	dmg-max		2	2											mcha														0
of Quality	214	100	0	1	28	37	21				4	14	dmg-max		3	4											mcha														0
of Quality	215	100	0	1	38		30				4	14	dmg-max		5	6											mcha														0
of Maiming	216	100	0		48		40				4	14	dmg-max		7	8											mcha														0
of Craftsmanship	217	100	0	1	21		15				4	14	dmg-max		1	1											scha														0
of Quality	218	100	0	1	36		28				4	14	dmg-max		2	2											scha														0
of Maiming	219	100	0		51		43				4	14	dmg-max		3	4											scha														0
of Ire	220	100	1	1	4		3				4	14	dmg-max		2	5											jewl														0
of Wrath	221	100	1	1	11		8				4	14	dmg-max		6	9									1	blac	jewl														0
of Carnage	222	100	1	1	25		18				4	14	dmg-max		11	15									1	blac	jewl														0
of Worth	223	1	1	1	1	26	1				8	15	dmg-min		1	2											weap							staf	wand	orb					0
of Measure	224	1	1	1	12	37	9				7	15	dmg-min		3	4											weap							staf	wand	orb					0
of Excellence	225	1	1	1	24		18				6	15	dmg-min		5	8											weap							staf	wand	orb					0
of Performance	226	1	1	1	48		40				5	15	dmg-min		9	14									1	blac	weap							staf	wand	orb					0
of Transcendence	227	100	1	1	76		68				4	15	dmg-min		15	20									1	blac	weap							staf	wand	orb					0
of Worth	228	1	1	1	15	40	11				4	15	dmg-min		2	3											ring	amul	circ	helm											0
of Measure	229	1	1	1	37	62	29				4	15	dmg-min		4	5											ring	amul	circ	helm											0
of Excellence	230	1	1	1	59		51				4	15	dmg-min		6	9											ring	amul	circ	helm											0
of Performance	231	100	1	1	81		63				2	15	dmg-min		10	13											ring	amul	circ	helm											0
of Joyfulness	232	100	1	1	5		3				4	15	dmg-min		1	4									1	whit	jewl														0
of Bliss	233	100	1	1	43		37				4	15	dmg-min		5	10									1	whit	jewl														0
of Blight	234	1	1	1	5	30	3				5	16	dmg-pois	75	24	24											weap	circ	misl					rod	orb						0
of Venom	235	1	1	1	15	40	11				4	16	dmg-pois	100	54	54											weap	circ	misl					rod	orb						0
of Pestilence	236	1	1	1	25		18				3	16	dmg-pois	125	103	103									1	dgrn	weap	circ	misl					rod	orb						0
of Anthrax	237	100	1	1	33		25				2	16	dmg-pois	150	171	171									1	dgrn	weap	misl						rod	orb						0
of Blight	238	100	1	1	45	70	33				2	16	dmg-pois	75	171	171											ring	amul													0
of Envy	239	100	1	1	1		1				2	16	dmg-pois	50	103	103									1	dgrn	jewl														0
of Dexterity	240	1	1	1	1	26	1				4	17	dex		1	2											amul	miss	circ												0
of Skill	241	1	1	1	11	36	8				3	17	dex		3	5											amul	miss	circ	misl											0
of Accuracy	242	1	1	1	27		20				3	17	dex		6	9											amul	miss	circ	misl											0
of Precision	243	1	1	1	43		35				3	17	dex		10	15											amul	miss	circ	misl											0
of Perfection	244	1	1	1	59		51				3	17	dex		16	20									1	dgld	amul	miss	circ	tors	shld										0
of Nirvana	245	100	1	1	72		64				3	17	dex		21	30									1	dgld	amul	miss	circ												0
of Dexterity	246	1	1	1	6	31	4				4	17	dex		1	2											ring	glov													0
of Skill	247	1	1	1	22		16				3	17	dex		3	5											ring	glov	boot												0
of Accuracy	248	1	1	1	39		31				3	17	dex		6	9											ring	glov													0
of Precision	249	1	1	1	56		48				3	17	dex		10	15											ring	glov													0
of Perfection	250	100	1	1	75		67				3	17	dex		16	20									1	dgld	ring	glov													0
of Dexterity	251	1	1	1	13	38	9				3	17	dex		2	3											tors	boot						glov							0
of Skill	252	1	1	1	34	59	26				3	17	dex		4	5											tors							glov							0
of Accuracy	253	1	1	1	46		38				3	17	dex		6	9											tors	boot						glov							0
of Precision	254	100	1	1	60		52				3	17	dex		10	15									1	dgld	tors	boot	shld					glov							0
of Dexterity	255	100	1	1	1		1				4	31	dex		3	4											lcha														0
of Dexterity	256	100	1	1	3		2				4	31	dex		2	3											mcha														0
of Dexterity	257	100	1	1	7		5				4	31	dex		1	1											scha														0
of Dexterity	258	100	1	1	14		10				4	31	dex		5	6											lcha														0
of Dexterity	259	100	1	1	18		13				4	31	dex		4	5											mcha														0
of Dexterity	260	100	1	1	22		16				4	31	dex		2	2											scha														0
of Daring	261	100	1	1	7		5				3	17	dex		1	3											jewl														0
of Balance	262	1	1	1	5		3				4	18	balance1		8	15											armo							glov							0
of Equilibrium	263	1	1	1	9		6				4	18	balance2		16	20											tors	belt	shld												0
of Stability	264	1	1	1	18		13				4	18	balance3		21	30									1	dyel	tors	belt													0
of Balance	265	100	1	1	1		1				4	18	balance3		9	16											lcha														0
of Balance	266	100	1	1	19		14				4	18	balance2		5	10											mcha														0
of Balance	267	100	1	1	37		29				4	18	balance1		3	6											scha														0
of Truth	268	100	1	1	44		36				4	18	balance1		7	7											jewl														0
of Regeneration	269	1	1	1	10		7				0	19	regen		3	5											scep	belt	ring	amul	circ										0
of Regeneration	270	1	1	1	40		30				0	19	regen		3	5											shld	glov													0
of Regeneration	271	1	1	1	70		52				0	19	regen		3	5											tors	weap	boot					scep							0
of Regrowth	272	1	1	1	17		12				0	19	regen		6	10									1	cred	scep	amul	circ												0
of Regrowth	273	1	1	1	55		41				0	19	regen		6	9									1	cred	belt	ring													0
of Revivification	274	100	1	1	38		30				0	19	regen		11	15									1	cred	scep	amul	circ												0
of Honor	275	100	1	1	47		35				0	19	regen		1	4											jewl														0
of Vileness	276	1	1	1	9		6				3	20	noheal		1	1											mele	misl						rod	orb						0
of Greed	277	1	1	1	1		1				4	21	gold%		50	80											ring	amul	circ	misl											0
of Wealth	278	1	1	1	17		12				4	21	gold%		81	160									1	lgld	boot	glov	belt	amul	circ	misl									0
of Greed	279	100	1	1	1		1				4	21	gold%		20	40											lcha														0
of Greed	280	100	1	1	7		5				4	21	gold%		41	80											lcha														0
of Greed	281	100	1	1	19		14				4	21	gold%		81	160											lcha														0
of Greed	282	100	1	1	1		5				4	21	gold%		10	20											mcha														0
of Greed	283	100	1	1	20		15				4	21	gold%		21	44											mcha														0
of Greed	284	100	1	1	1		15				4	21	gold%		10	20											scha														0
of Avarice	285	100	1	1	1		1				4	21	gold%		20	60											jewl														0
of Chance	286	1	1	1	12		9				4	22	mag%		5	15											boot	glov	ring	amul	circ	helm	misl								0
of Fortune	287	1	1	1	16		12				4	22	mag%		16	25									1	lgld	boot	glov	amul	circ	helm	misl									0
of Fortune	288	1	1	1	42		31				2	22	mag%		16	25									1	lgld	ring														0
of Luck	289	100	1	1	26		19				4	22	mag%		26	35									1	lgld	boot	amul	circ	misl											0
of Fortune	290	100	1	1	31		18				3	22	mag%		3	5											scha														0
of Good Luck	291	100	1		47		33				2	22	mag%		6	7											scha														0
of Prosperity	292	100	1	1	26		19				2	22	mag%		10	20											jewl														0
of Energy	293	1	1	1	1	26	1				4	23	enr		1	3											amul	orb	circ	wand	staf										0
of the Mind	294	1	1	1	7	32	3				4	23	enr		4	6											misl	orb	circ	wand	staf										0
of Brilliance	295	1	1	1	13		9				3	23	enr		7	10											amul	orb	circ	wand	staf	misl									0
of Sorcery	296	1	1	1	21		16				3	23	enr		11	15											amul	orb	circ	wand	staf	misl									0
of Wizardry	297	1	1	1	31		23				3	23	enr		16	20									1	dgld	amul	orb	circ	wand	staf										0
of Enlightenment	298	100	1	1	41		33				3	23	enr		21	30									1	dgld	amul	orb	circ	wand	staf										0
of Energy	299	1	1	1	7	32	5				4	23	enr		1	3											ring														0
of the Mind	300	1	1	1	13		9				3	23	enr		4	6											ring	amul													0
of Brilliance	301	1	1	1	21		16				3	23	enr		7	10											ring														0
of Sorcery	302	1	1	1	31		23				3	23	enr		11	15											ring														0
of Wizardry	303	100	1		41		33				3	23	enr		16	20									1	dgld	ring														0
of Energy	304	1	1	1	4	29	3				3	23	enr		1	3											helm	scep													0
of the Mind	305	1	1	1	10	35	7				3	23	enr		4	6											helm	scep													0
of Brilliance	306	1	1	1	16		12				3	23	enr		7	10											helm	scep													0
of Sorcery	307	100	1		26		21				3	23	enr		11	15									1	dgld	helm	scep													0
of Knowledge	308	100	1	1	9		6				3	23	enr		1	5											jewl														0
of the Bear	309	1	1	1	8		6				0	24	knock		1	1											mele														0
of Light	310	1	1	1	6	46	4				0	25	light		1	1	att		15	30							armo	rod	ring	amul	misl										0
of Radiance	311	1	1	1	15		11				0	25	light		3	3	att		30	60							ring	amul													0
of the Sun	312	1	1	1	17		12				0	25	light		5	5	att%		5	5							rod	miss	glov	ring	amul	helm	tors	misl							0
of the Jackal	313	1	1	1	1	26	1				3	26	hp		1	5											tors	belt	amul	phlm	circ	boot	glov								0
of the Fox	314	1	1	1	7	32	5				3	26	hp		6	10											tors	belt	amul	phlm	circ	misl	boot	glov							0
of the Wolf	315	1	1	1	15	40	11				3	26	hp		11	20											tors	misl	phlm	circ	boot	glov									0
of the Tiger	316	1	1	1	20		15				3	26	hp		21	30											tors	belt	amul	phlm	circ	misl	boot	glov							0
of the Mammoth	317	1	1	1	25		18				3	26	hp		31	40									1	cred	tors	belt	amul	phlm	circ	misl	boot	glov							0
of the Colosuss	318	1	1	1	30		22				3	26	hp		41	60									1	cred	tors	belt	amul	phlm	circ	boot	glov								0
of the Squid	319	100	1	1	40		30				3	26	hp		61	80									1	cred	amul														0
of the Whale	320	100	1	1	50		37				3	26	hp		81	100									1	cred	amul														0
of the Jackal	321	100	1	1	4	29	3				3	26	hp		1	5											shld	pelt													0
of the Fox	322	100	1	1	11	36	8				3	26	hp		6	10											shld	pelt													0
of the Wolf	323	100	1	1	27	52	20				3	26	hp		11	20											shld	pelt													0
of the Tiger	324	100	1	1	43		35				3	26	hp		21	30											shld	pelt													0
of the Mammoth	325	100	1	1	59		51				3	26	hp		31	40									1	cred	shld	pelt													0
of the Colosuss	326	100	1	1	75		67				3	26	hp		41	60									1	cred	shld	pelt													0
of the Jackal	327	1	1	1	8	33	6				3	26	hp		1	5											club	hamm	mace	ring	helm										0
of the Fox	328	1	1	1	17	42	13				3	26	hp		6	10											club	hamm	mace	helm											0
of the Wolf	329	1	1	1	34	59	26				3	26	hp		11	20											club	hamm	mace	helm											0
of the Tiger	330	1	1	1	51		43				3	26	hp		21	30											club	hamm	mace	ring	helm										0
of the Mammoth	331	1	1	1	68		60				3	26	hp		31	40									1	cred	club	hamm	mace	ring	helm										0
of Life	332	100	1	1	1		1				4	26	hp		5	10											lcha														0
of Life	333	100	1	1	9		6				4	26	hp		11	15											lcha														0
of Life	334	100	1	1	19		14				4	26	hp		16	20											lcha														0
of Substinence	335	100	1	1	31		23				4	26	hp		21	25											lcha														0
of Substinence	336	100	1	1	45		37				4	26	hp		26	30											lcha														0
of Substinence	337	100	1	1	61		53				4	26	hp		31	35											lcha														0
of Vita	338	100	1		77		69				4	26	hp		36	40											lcha														0
of Vita	339	100	1		91		83				4	26	hp		41	45											lcha														0
of Vita	340	100	1		110		97				4	26	hp		46	50											lcha														0
of Life	341	100	1	1	1		9				4	26	hp		6	10											mcha														0
of Life	342	100	1	1	12		9				4	26	hp		11	15											mcha														0
of Substinence	343	100	1	1	26		19				4	26	hp		16	20											mcha														0
of Substinence	344	100	1	1	42		34				4	26	hp		21	25											mcha														0
of Vita	345	100	1		58		50				4	26	hp		26	30											mcha														0
of Vita	346	100	1		74		66				4	26	hp		31	35											mcha														0
of Life	347	100	1	1	1		14				4	26	hp		5	10											scha														0
of Substinence	348	100	1	1	23		17				4	26	hp		11	15											scha														0
of Vita	349	100	1		47		39				4	26	hp		16	20											scha														0
of Spirit	350	100	1	1	1		1				4	26	hp		3	8											jewl														0
of Hope	351	100	1		45		37				4	26	hp		9	20											jewl														0
of the Leech	352	1	1	1	6		4				7	27	lifesteal		4	5											weap	misl						orb							0
of the Locust	353	1	1	1	20		15				7	27	lifesteal		6	7									1	cred	mele	misl						orb							0
of the Lamprey	354	100	1	1	55		43				7	27	lifesteal		8	9									1	cred	mele							orb							0
of the Leech	355	1	1	1	14		10				4	27	lifesteal		3	4											ring	circ	helm												0
of the Locust	356	1	1	1	47		35				4	27	lifesteal		5	6											ring	circ													0
of the Lamprey	357	100	1	1	77		65				4	27	lifesteal		7	8									1	cred	ring	circ													0
of the Leech	358	1	1	1	34		26				4	27	lifesteal		3	3									1	cred	glov														0
of the Bat	359	1	1	1	7		4				7	28	manasteal		4	5											weap	misl						orb							0
of the Wraith	360	1	1	1	21		16				7	28	manasteal		6	7									1	cred	mele	misl													0
of the Vampire	361	100	1	1	56		48				7	28	manasteal		8	9									1	cred	mele														0
of the Bat	362	1	1	1	15		11				4	28	manasteal		3	4											amul	circ	helm												0
of the Wraith	363	1	1	1	58		40				4	28	manasteal		5	6											amul	circ													0
of the Vampire	364	100	1	1	78		66				4	28	manasteal		7	8									1	cred	amul	circ													0
of the Bat	365	1	1	1	35		27				4	28	manasteal		3	3									1	cred	glov														0
of Defiance	366	1	1	1	25		18				2	29	res-pois-len		75	75									1	dred	tors	shld	amul	circ	misl										0
of Amelioration	367	1	1	1	18		13				3	29	res-pois-len		50	50											tors	shld	amul	circ	misl										0
of Remedy	368	100	1	1	7		5				3	29	res-pois-len		25	25											armo	ring	amul	circ	misl										0
of Simplicity	369	1	1	1	25		18				0	30	ease		-30	-30											tors	weap	shld					rod	orb						0
of Ease	370	1	1	1	15		11				0	30	ease		-20	-20											tors	weap	shld					rod	orb						0
of Freedom	371	100	1	1	1		1				3	30	ease		-15	-15											jewl														0
of Strength	372	1	1	1	1	26	1				4	31	str		1	2											amul	belt	club	hamm	circ										0
of Might	373	1	1	1	10	35	8				3	31	str		3	5											misl	belt	club	hamm	circ										0
of the Ox	374	1	1	1	26		19				3	31	str		6	9											amul	belt	club	hamm	circ	misl									0
of the Giant	375	1	1	1	42		34				3	31	str		10	15											amul	belt	club	hamm	circ	misl									0
of the Titan	376	1	1	1	58		50				3	31	str		16	20									1	dgld	amul	belt	club	hamm	circ										0
of Atlus	377	100	1	1	71		63				3	31	str		21	30									1	dgld	amul	belt	club	hamm	circ										0
of Strength	378	1	1	1	5	30	3				4	31	str		1	2											ring	scep	mace	tors											0
of Might	379	1	1	1	21	46	15				3	31	str		3	5											tors	scep	mace												0
of the Ox	380	1	1	1	38		30				3	31	str		6	9											ring	scep	mace	tors											0
of the Giant	381	1	1	1	55		47				3	31	str		10	15											ring	scep	mace	tors	shld										0
of the Titan	382	100	1	1	74		66				3	31	str		16	20									1	dgld	ring	scep	mace	tors	shld										0
of Strength	383	1	1	1	12	37	8				3	31	str		1	2											mele	glov	shld					blun							0
of Might	384	1	1	1	33	58	25				3	31	str		3	5											mele	shld						blun							0
of the Ox	385	1	1	1	45		37				3	31	str		6	9											mele	glov	shld					blun							0
of the Giant	386	100	1	1	59		51				3	31	str		10	15									1	dgld	mele	glov						blun							0
of Strength	387	100	1	1	1		1				4	31	str		3	4											lcha														0
of Strength	388	100	1	1	3		2				4	31	str		2	3											mcha														0
of Strength	389	100	1	1	7		5				4	31	str		1	1											scha														0
of Strength	390	100	1	1	14		10				4	31	str		5	6											lcha														0
of Strength	391	100	1	1	18		13				4	31	str		4	5											mcha														0
of Strength	392	100	1	1	22		16				4	31	str		2	2											scha														0
of Virility	393	100	1	1	18		13				4	31	str		1	4											jewl														0
of Pacing	394	1	1	1	12		8				3	35	move1		8	15											boot	circ													0
of Haste	395	1	1	1	22		16				4	35	move2		16	25											boot	circ													0
of Speed	396	1	1	1	37		29				4	35	move3		26	35											boot	circ													0
of Traveling	397	100	1	1	65		57				0	35	move3		26	35	stamdrain		80	90							boot														0
of Acceleration	398	100	1		51		43				4	35	move3		36	45											boot														0
of Inertia	399	100	1	1	19		14				4	35	move3		7	9											lcha														0
of Inertia	400	100	1	1	24		18				4	35	move2		5	7											mcha														0
of Inertia	401	100	1		35		27				4	35	move1		3	5											scha														0
of Self-Repair	402	100	1	1	3		1				3	37	rep-dur	3													weap	armo						thro	miss						0
of Fast Repair	403	100	1	1	20		12				2	37	rep-dur	5													weap	armo						thro	miss						0
of Ages	404	100	1		50		42				1	39	indestruct														weap	armo						thro	miss						0
of Replenishing	405	100	0		5		3				0	39	rep-quant	5													thro														0
of Propogation	406	100	0		24		18				0	39	rep-quant	10													thro														0
of the Kraken	407	100	1		20		1				0	41	hp/lvl	6											1	cred	amul														0
of Memory	408	100	1	1	20		1				0	41	mana/lvl	6											1	cred	circ	amul	pelt												0
of the Elephant	409	100	1	1	37		7				0	41	hp/lvl	4			mana/lvl	2							1	cred	circ	pelt													0
of Power	410	100			1		1				1	42	str/lvl	3											1	dgld	belt	amul													0
of Grace	411	100			1		1				1	42	dex/lvl	3											1	dgld	helm	amul													0
of Grace and Power	412	100			1		1				1	42	str/lvl	1			dex/lvl	1							1	dgld	amul														0
of the Yeti	413	100			1		1				1	43	res-cold/lvl	3											1	lblu	tors	glov	amul												0
of the Phoenix	414	100			1		1				1	43	res-fire/lvl	3											1	cred	shld	helm	amul												0
of the Efreeti	415	100			1		1				1	43	res-ltng/lvl	3											1	cblu	glov	boot	ring												0
of the Cobra	416	100			1		1				1	43	res-pois/lvl	3											1	dyel	belt	ring	amul												0
of the Elements	417	100			1		1				10	43	res-cold/lvl	1			res-fire/lvl	1			res-ltng/lvl	1			1	dgld	circ														0
of Firebolts	418	100	1	1	16	36	12				1	44	hit-skill	36	10	8											weap							miss							0
of Firebolts	419	100		1	6		4				1	44	att-skill	36	5	3											weap							miss							0
of Firebolts	420	100		1	20		15				1	44	att-skill	36	10	4											weap							miss							0
of Charged Shield	421	100	1	1	6		4				0	44	gethit-skill	38	10	3											armo	ring	amul												0
of Charged Shield	422	100	1	1	16		12				0	44	gethit-skill	38	12	4											armo	ring	amul												0
of Charged Shield	423	100	1	1	26		19				0	44	gethit-skill	38	14	5											armo	ring	amul												0
of Icebolt	424	100		1	6		4				1	44	att-skill	39	5	3									1	lblu	weap							miss							0
of Frozen Armor	425	100										44																													0
of Static Field	426	100										44																													0
of Telekinesis	427	100	1	1								44																													0
of Frost Shield	428	100	1	1	12		9				0	44	gethit-skill	44	5	3									1	lblu	armo	amul													0
of Ice Blast	429	100										44																													0
of Blaze	430	100										44																													0
of Fire Ball	431	100										44																													0
of Nova	432	100	1	1	12	36	9				1	44	hit-skill	48	10	3									1	cblu	weap							miss							0
of Nova	433	100	1	1	18	36	14				1	44	hit-skill	48	12	4									1	cblu	weap							miss							0
of Nova Shield	434	100	1	1	18		13				0	44	gethit-skill	48	10	3									1	cblu	armo	ring													0
of Nova Shield	435	100	1	1	28		21				0	44	gethit-skill	48	12	4									1	cblu	armo	ring													0
of Nova Shield	436	100	1	1	38		28				0	44	gethit-skill	48	14	5									1	cblu	armo	ring													0
of Lightning	437	100		1	18		13				1	44	att-skill	49	5	3									1	cblu	weap							miss							0
of Lightning	438	100			12		18		sor	9	1	44	charged	49	50	1									1	cblu	weap														0
of Shiver Armor	439	100										44																													0
of Fire Wall	440	100										44																													0
of Enchant	441	100										44																													0
of Chain Lightning	442	100		1	25		18				1	44	att-skill	53	5	3											weap	ring	amul					miss							0
of Chain Lightning	443	100		1	35		26				1	44	att-skill	53	8	3											weap	ring	amul					miss							0
of Chain Lightning	444	100		1	45		33				1	44	att-skill	53	8	5											weap	ring	amul					miss							0
of Teleport Shield	445	100			25		18				1	44	gethit-skill	54	10	3									1	whit	armo	ring	amul												0
of Teleport Shield	446	100			35		26				1	44	gethit-skill	54	14	3									1	whit	armo	ring	amul												0
of Teleport Shield	447	100			45		33				1	44	gethit-skill	54	18	3									1	whit	armo	ring	amul												0
of Glacial Spike	448	100										44																													0
of Meteor	449	100										44																													0
of Thunder Storm	450	100										44																													0
of Energy Shield	451	100										44																													0
of Blizzard	452	100										44																													0
of Chilling Armor	453	100										44																													0
of Hydra Shield	454	100	1	1	40		30				0	44	gethit-skill	62	10	3									1	cred	amul														0
of Frozen Orb	455	100										44																													0
of Dawn	456	100			30		22				0	45	ac/time	3	10	40																									0
of Sunlight	457	100			30		22				0	45	ac/time	0	-10	60																									0
of Magic Arrows	458	100		1	12		11		ama	1	1	44	charged	6	-30	-10											miss	abow													0
of Magic Arrows	459	100			35		28		ama	3	1	44	charged	6	-20	-6											glov														0
of Fire Arrows	460	100			13		12		ama	1	1	44	charged	7	-30	-10											miss	abow													0
of Fire Arrows	461	100		1	40		32		ama	3	1	44	charged	7	-20	-6											glov														0
of Inner Sight	462	100		1	18		14		ama	2	1	44	charged	8	-30	-6											amul	amaz	circ												0
of Inner Sight	463	100		1	50		42		ama	5	1	44	charged	8	-20	-4											glov														0
of Jabbing	464	100			24		18		ama	3	1	44	charged	10	-60	-7											spea	aspe													0
of Jabbing	465	100			50		42		ama	5	1	44	charged	10	-20	-4											glov														0
of Cold Arrows	466	100		1	15		16		ama	6	1	44	charged	11	-30	-8											miss	abow													0
of Cold Arrows	467	100		1	47		39		ama	9	1	44	charged	11	-20	-5											glov														0
of Multiple Shot	468	100		1	18		19		ama	6	1	44	charged	12	-30	-8											miss	abow													0
of Multiple Shot	469	100		1	63		55		ama	12	1	44	charged	12	-20	-4											glov														0
of Power Strike	470	100		1	12		13		ama	6	1	44	charged	14	-60	-6											spea	aspe													0
of Power Strike	471	100		1	55		47		ama	9	1	44	charged	14	-20	-4											glov														0
of Poison Jab	472	100			17		18		ama	6	1	44	charged	15	-60	-6											amul	circ													0
of Poison Jab	473	100			67		59		ama	13	1	44	charged	15	-20	-3											glov														0
of Exploding Arrows	474	100		1	30		26		ama	12	1	44	charged	16	-30	-6											miss	abow													0
of Exploding Arrows	475	100		1	69		61		ama	17	1	44	charged	16	-20	-4											glov														0
of Slow Missiles	476	100			33		27		ama	12	1	44	charged	17	-30	-5											amaz														0
of Slow Missiles	477	100			68		60		ama	15	1	44	charged	17	-20	-3											glov	amul													0
of Impaling Strike	478	100			24		18		ama	12	1	44	charged	19	-60	-6											spea	aspe													0
of Impaling Strike	479	100			59		51		ama	15	1	44	charged	19	-20	-4											glov														0
of Lightning Javelin	480	100			25		18		ama	12	1	44	charged	20	-60	-6											amul	circ													0
of Lightning Javelin	481	100			70		62		ama	17	1	44	charged	20	-20	-3											glov														0
of Ice Arrows	482	100		1	36		28		ama	18	1	44	charged	21	-30	-5											miss	abow													0
of Ice Arrows	483	100		1	72		64		ama	22	1	44	charged	21	-20	-3											glov														0
of Guided Arrows	484	100			34		26		ama	18	1	44	charged	22	-30	-5											miss	abow													0
of Guided Arrows	485	100			69		61		ama	21	1	44	charged	22	-20	-3											glov														0
of Charged Strike	486	100		1	33		25		ama	18	1	44	charged	24	-60	-5											spea	aspe													0
of Charged Strike	487	100		1	68		60		ama	21	1	44	charged	24	-20	-3											glov														0
of Plague Jab	488	100			35		27		ama	18	1	44	charged	25	-60	-5											amul	circ													0
of Plague Jab	489	100			71		63		ama	22	1	44	charged	25	-20	-3											glov														0
of Immolating Arrows	490	100			42		36		ama	24	1	44	charged	27	-30	-4											miss	abow													0
of Immolating Arrows	491	100			85		77		ama	27	1	44	charged	27	-20	-2											glov														0
of Fending	492	100			41		35		ama	24	1	44	charged	30	-60	-5											spea	aspe													0
of Fending	493	100			83		75		ama	26	1	44	charged	30	-20	-3											glov														0
of Freezing Arrows	494	100		1	50		42		ama	30	1	44	charged	31	-30	-4											miss	abow													0
of Freezing Arrows	495	100		1	94		86		ama	33	1	44	charged	31	-20	-2											glov														0
of Lightning Strike	496	100		1	47		39		ama	30	1	44	charged	34	-60	-4											spea	aspe													0
of Lightning Strike	497	100		1	90		82		ama	32	1	44	charged	34	-20	-2											glov														0
of Lightning Fury	498	100			49		41		ama	30	1	44	charged	35	-60	-4											amul	circ													0
of Lightning Fury	499	100			92		84		ama	33	1	44	charged	35	-20	-2											glov														0
of Fire Bolts	500	100		1	7		7		sor	1	1	44	charged	36	-30	-10											staf	orb													0
of Fire Bolts	501	100		1	14		14		sor	1	1	44	charged	36	-20	-6											swor	ring	circ												0
of Charged Bolts	502	100		1	7		7		sor	1	1	44	charged	38	-30	-10											staf	orb													0
of Charged Bolts	503	100		1	14		14		sor	1	1	44	charged	38	-20	-6											hamm	mace	scep	ring	circ										0
of Ice Bolts	504	100		1	7		7		sor	1	1	44	charged	39	-30	-10											staf	orb													0
of Ice Bolts	505	100		1	14		14		sor	1	1	44	charged	39	-20	-6											knif														0
of Frozen Armor	506	100			7		7		sor	1	1	44	charged	40	-30	-10											staf	orb													0
of Frozen Armor	507	100			14		14		sor	1	1	44	charged	40	-20	-6											knif	tors													0
of Static Field	508	100			12		12		sor	6	1	44	charged	42	-30	-8											staf	orb													0
of Static Field	509	100			24		24		sor	6	1	44	charged	42	-20	-5											hamm	mace	scep	ring	circ										0
of Telekinesis	510	100		1	12		12		sor	6	1	44	charged	43	-30	-8											staf	orb													0
of Telekinesis	511	100	1	1	24		24		sor	6	0	44	charged	43	-20	-5											ring														0
of Frost Novas	512	100		1	12		12		sor	6	1	44	charged	44	-30	-8											staf	orb													0
of Frost Novas	513	100		1	24		24		sor	6	1	44	charged	44	-20	-5											knif	amul	circ												0
of Ice Blasts	514	100		1	12		12		sor	6	1	44	charged	45	-30	-8											staf	orb													0
of Ice Blasts	515	100		1	24		24		sor	6	1	44	charged	45	-20	-5											hamm	mace	scep	ring	circ										0
of Blazing	516	100			18		18		sor	12	1	44	charged	46	-30	-7											staf	orb													0
of Blazing	517	100			36		36		sor	12	1	44	charged	46	-20	-4											boot														0
of Fire Balls	518	100		1	18		18		sor	12	1	44	charged	47	-30	-7											staf	orb													0
of Fire Balls	519	100		1	36		36		sor	12	1	44	charged	47	-20	-4											spea	wand													0
of Novas	520	100		1	18		18		sor	12	1	44	charged	48	-30	-7											staf	orb													0
of Novas	521	100		1	36		36		sor	12	1	44	charged	48	-20	-4											shld														0
of Lightning	522	100		1	18		18		sor	12	1	44	charged	49	-30	-7											staf	orb													0
of Lightning	523	100		1	36		36		sor	12	1	44	charged	49	-20	-4											axe	hamm													0
of Shiver Armor	524	100			18		18		sor	12	1	44	charged	50	-30	-7											staf	orb													0
of Shiver Armor	525	100			36		36		sor	12	1	44	charged	50	-20	-4											knif	tors													0
of Fire Walls	526	100			24		24		sor	18	1	44	charged	51	-30	-6											staf	orb													0
of Fire Walls	527	100			48		48		sor	18	1	44	charged	51	-20	-3											pole														0
of Enchantment	528	100		1	24		24		sor	18	1	44	charged	52	-20	-3											staf	orb													0
of Enchantment	529	100		1	48		48		sor	18	1	44	charged	52	-10	-1											mele														0
of Chain Lightning	530	100		1	24		24		sor	18	1	44	charged	53	-30	-6											staf	orb													0
of Chain Lightning	531	100		1	48		48		sor	18	1	44	charged	53	-20	-3											spea														0
of Teleportation	532	100	1	1	24		24		sor	18	0	44	charged	54	-30	-6											staf	orb													0
of Teleportation	533	100	1	1	48		48		sor	18	0	44	charged	54	-20	-3											amul	circ													0
of Glacial Spikes	534	100		1	24		24		sor	18	1	44	charged	55	-30	-6											staf	orb													0
of Glacial Spikes	535	100		1	48		48		sor	18	1	44	charged	55	-20	-3											knif														0
of Meteors	536	100		1	30		30		sor	24	1	44	charged	56	-30	-5											staf	orb													0
of Meteors	537	100		1	60		60		sor	24	1	44	charged	56	-20	-2											knif	club													0
of Thunder Storm	538	100			30		30		sor	24	1	44	charged	57	-30	-5											staf	orb													0
of Thunder Storm	539	100			60		60		sor	24	1	44	charged	57	-20	-2											hamm	club													0
of Energy Shield	540	100			30		30		sor	24	1	44	charged	58	-30	-5											staf	orb													0
of Energy Shield	541	100			60		60		sor	24	1	44	charged	58	-20	-2											helm														0
of Blizzards	542	100		1	30		30		sor	24	1	44	charged	59	-30	-5											staf	orb													0
of Blizzards	543	100		1	60		60		sor	24	1	44	charged	59	-20	-2											knif														0
of Chilling Armor	544	100			30		30		sor	24	1	44	charged	60	-30	-5											staf	orb													0
of Chilling Armor	545	100			60		60		sor	24	1	44	charged	60	-20	-2											tors														0
of Hydras	546	100			36		36		sor	30	1	44	charged	62	-30	-3											staf	orb													0
of Hydras	547	100			72		72		sor	30	1	44	charged	62	-20	-1											club														0
of Frozen Orbs	548	100		1	36		36		sor	30	1	44	charged	64	-30	-3											staf	orb													0
of Frozen Orbs	549	100		1	72		72		sor	30	1	44	charged	64	-20	-1											knif														0
of Amplify Damage	550	100			7		7		nec	1	1	44	charged	442	-60	-10											wand	knif	head												0
of Amplify Damage	551	100			14		14		nec	1	1	44	charged	442	-20	-6											blun														0
of Teeth	552	100		1	7		7		nec	1	1	44	charged	67	-60	-10											wand	knif	head												0
of Teeth	553	100		1	14		14		nec	1	1	44	charged	67	-20	-6											swor														0
of Bone Armor	554	100			7		7		nec	1	1	44	charged	68	-60	-10											wand	knif	head												0
of Bone Armor	555	100			14		14		nec	1	1	44	charged	68	-20	-6											tors														0
of Raise Skeletons	556	100			7		7		nec	1	1	44	charged	70	-60	-10											wand	knif	head												0
of Raise Skeletons	557	100			14		14		nec	1	1	44	charged	70	-20	-6											amul	circ													0
of Dim Vision	558	100		1	12		12		nec	6	1	44	charged	71	-60	-8											wand	knif	head												0
of Dim Vision	559	100		1	24		24		nec	6	1	44	charged	71	-20	-5											ring	circ													0
of Weaken	560	100		1	12		12		nec	6	1	44	charged	443	-60	-8											wand	knif	head												0
of Weaken	561	100		1	24		24		nec	6	1	44	charged	443	-20	-5											glov														0
of Poison Dagger	562	100		1	12		12		nec	6	1	44	charged	73	-60	-8											knif	head													0
of Poison Dagger	563	100		1	24		24		nec	6	1	44	charged	73	-20	-5											glov	ring	circ												0
of Corpse Explosions	564	100			12		12		nec	6	1	44	charged	74	-60	-8											wand	knif	head												0
of Corpse Explosions	565	100			24		24		nec	6	1	44	charged	74	-20	-5											club														0
of Clay Golem Summoning	566	100			12		12		nec	6	1	44	charged	75	-60	-8											wand	knif	head												0
of Clay Golem Summoning	567	100			24		24		nec	6	1	44	charged	75	-20	-5											amul	circ													0
of Iron Maiden	568	100			18		18		nec	12	1	44	charged	444	-60	-7											wand	knif	head												0
of Iron Maiden	569	100			36		36		nec	12	1	44	charged	444	-20	-4											shld														0
of Terror	570	100		1	18		18		nec	12	1	44	charged	77	-60	-7											wand	knif	head												0
of Terror	571	100		1	36		36		nec	12	1	44	charged	77	-20	-4											shld														0
of Bone Walls	572	100			18		18		nec	12	1	44	charged	78	-60	-7											wand	knif	head												0
of Bone Walls	573	100			36		36		nec	12	1	44	charged	78	-20	-4											club	mace	scep												0
of Raise Skeletal Mages	574	100			18		18		nec	12	1	44	charged	80	-60	-7											wand	knif	head												0
of Raise Skeletal Mages	575	100			36		36		nec	12	1	44	charged	80	-20	-4											amul	circ													0
of Confusion	576	100		1	24		24		nec	18	1	44	charged	81	-60	-6											wand	knif	head												0
of Confusion	577	100		1	48		48		nec	18	1	44	charged	81	-20	-3											ring	circ													0
of Life Tap	578	100	1	1	24		24		nec	18	0	44	charged	445	-60	1											wand	knif	head												0
of Life Tap	579	100	1	1	48		48		nec	18	0	44	charged	445	-20	1											axe														0
of Poison Explosion	580	100			24		24		nec	18	1	44	charged	83	-60	-6											wand	knif	head												0
of Poison Explosion	581	100			48		48		nec	18	1	44	charged	83	-20	-3											blun														0
of Bone Spears	582	100		1	24		24		nec	18	1	44	charged	84	-60	-6											wand	knif	head												0
of Bone Spears	583	100		1	48		48		nec	18	1	44	charged	84	-20	-3											spea														0
of Blood Golem Summoning	584	100			24		24		nec	18	1	44	charged	85	-60	-6											wand	knif	head												0
of Blood Golem Summoning	585	100			48		48		nec	18	1	44	charged	85	-20	-3											axe														0
of Attraction	586	100		1	30		30		nec	24	1	44	charged	86	-60	-5											wand	knif	head												0
of Attraction	587	100		1	60		60		nec	24	1	44	charged	86	-20	-2											ring	amul	circ												0
of Decrepification	588	100			30		30		nec	24	1	44	charged	446	-60	-5											wand	knif	head												0
of Decrepification	589	100			60		60		nec	24	1	44	charged	446	-20	-2											shld														0
of Bone Imprisonment	590	100			30		30		nec	24	1	44	charged	88	-60	-5											wand	knif	head												0
of Bone Imprisonment	591	100			60		60		nec	24	1	44	charged	88	-20	-2											mace	scep													0
of Iron Golem Creation	592	100			30		30		nec	24	1	44	charged	90	-60	-5											wand	knif	head												0
of Iron Golem Creation	593	100			60		60		nec	24	1	44	charged	90	-20	-2											swor														0
of Lower Resistance	594	100	1	1	36		36		nec	30	0	44	charged	447	-28	15											wand	knif	head												0
of Lower Resistance	595	100	1	1	72		72		nec	30	0	44	charged	447	-28	15											staf														0
of Poison Novas	596	100		1	36		36		nec	30	1	44	charged	92	-60	-3											wand	knif	head												0
of Poison Novas	597	100		1	72		72		nec	30	1	44	charged	92	-20	-1											glov														0
of Bone Spirits	598	100		1	36		36		nec	30	1	44	charged	93	-60	-3											wand	knif	head												0
of Bone Spirits	599	100		1	72		72		nec	30	1	44	charged	93	-20	-1											amul	circ													0
of Fire Golem Summoning	600	100			36		36		nec	30	1	44	charged	94	-60	-3											wand	knif	head												0
of Fire Golem Summoning	601	100			72		72		nec	30	1	44	charged	94	-20	-1											hamm														0
of Revivification	602	100			36		36		nec	30	1	44	charged	95	-60	-3											wand	knif	head												0
of Revivification	603	100			72		72		nec	30	1	44	charged	95	-20	-1											pole														0
of Sacrifice	604	100		1	7		7		pal	1	1	44	charged	96	-30	-10											scep	ashd													0
of Sacrifice	605	100		1	14		14		pal	1	1	44	charged	96	-20	-6											mele							scep							0
of Holy Bolts	606	100		1	12		12		pal	6	1	44	charged	101	-30	-8											scep	ashd													0
of Holy Bolts	607	100		1	24		24		pal	6	1	44	charged	101	-20	-5											amul	circ													0
of Zeal	608	100		1	18		18		pal	12	1	44	charged	106	-30	-7											scep	ashd													0
of Zeal	609	100		1	36		36		pal	12	1	44	charged	106	-20	-4											mele							scep							0
of Vengeance	610	100		1	24		24		pal	18	1	44	charged	111	-30	-6											scep	ashd													0
of Vengeance	611	100		1	48		48		pal	18	1	44	charged	111	-20	-3											swor	axe													0
of Blessed Hammers	612	100		1	24		24		pal	18	1	44	charged	112	-30	-6											scep	ashd													0
of Blessed Hammers	613	100		1	48		48		pal	18	1	44	charged	112	-20	-3											hamm														0
of Conversion	614	100			30		30		pal	24	1	44	charged	116	-30	-5											scep	ashd													0
of Conversion	615	100			60		60		pal	24	1	44	charged	116	-20	-2											blun							scep							0
of Fist of the Heavens	616	100			36		36		pal	30	1	44	charged	121	-30	-3											scep	ashd													0
of Fist of the Heavens	617	100			72		72		pal	30	1	44	charged	121	-20	-1											glov														0
of Bashing	618	100		1	7		7		bar	1	1	44	charged	126	-60	-10											phlm														0
of Bashing	619	100		1	14		14		bar	1	1	44	charged	126	-20	-6											mele							staf	wand	orb					0
of Howling	620	100			7		7		bar	1	1	44	charged	130	-60	-10											phlm														0
of Howling	621	100			14		14		bar	1	1	44	charged	130	-20	-6																									0
of Potion Finding	622	100			7		7		bar	1	1	44	charged	131	-60	-10											phlm														0
of Potion Finding	623	100			14		14		bar	1	1	44	charged	131	-20	-6																									0
of Taunting	624	100			12		12		bar	6	1	44	charged	137	-60	-8											phlm														0
of Taunting	625	100			24		24		bar	6	1	44	charged	137	-20	-5																									0
of Shouting	626	100			12		12		bar	6	1	44	charged	138	-60	-8											phlm														0
of Shouting	627	100			24		24		bar	6	1	44	charged	138	-20	-5																									0
of Stunning	628	100		1	18		18		bar	12	1	44	charged	139	-60	-7											phlm							staf	wand	orb					0
of Stunning	629	100		1	36		36		bar	12	1	44	charged	139	-20	-4											mele														0
of Item Finding	630	100			18		18		bar	12	1	44	charged	142	-60	-7											phlm														0
of Item Finding	631	100			36		36		bar	12	1	44	charged	142	-20	-4																									0
of Concentration	632	100		1	24		24		bar	18	1	44	charged	144	-60	-6											phlm														0
of Concentration	633	100		1	48		48		bar	18	1	44	charged	144	-20	-3											mele							staf	wand	orb					0
of Battle Cry	634	100			24		24		bar	18	1	44	charged	146	-60	-6											phlm														0
of Battle Cry	635	100			48		48		bar	18	1	44	charged	146	-20	-3																									0
of Battle Orders	636	100			30		30		bar	24	1	44	charged	149	-60	-5											phlm														0
of Battle Orders	637	100			60		60		bar	24	1	44	charged	149	-20	-2																									0
of Grim Ward	638	100		1	30		30		bar	24	1	44	charged	150	-60	-5											phlm														0
of Grim Ward	639	100		1	60		60		bar	24	1	44	charged	150	-20	-2											amul														0
of War Cry	640	100			36		36		bar	30	1	44	charged	154	-60	-3											phlm														0
of War Cry	641	100			72		72		bar	30	1	44	charged	154	-20	-1																									0
of Battle Command	642	100			36		36		bar	30	1	44	charged	155	-60	-3											phlm														0
of Battle Command	643	100			72		72		bar	30	1	44	charged	155	-20	-1																									0
of Firestorms	644	100		1	7		7		dru	1	1	44	charged	225	-30	-10											club														0
of Firestorms	645	100		1	14		14		dru	1	1	44	charged	225	-20	-6											staf														0
of Molten Boulders	646	100			12		12		dru	6	1	44	charged	229	-30	-8											club														0
of Molten Boulders	647	100			24		24		dru	6	1	44	charged	229	-20	-5											mace														0
of Eruption	648	100		1	18		18		dru	12	1	44	charged	234	-30	-7											club														0
of Eruption	649	100		1	36		36		dru	12	1	44	charged	234	-20	-4											staf														0
of Cyclone Armor	650	100			18		18		dru	12	1	44	charged	235	-30	-7											club														0
of Cyclone Armor	651	100			36		36		dru	12	1	44	charged	235	-20	-4											tors														0
of Twister	652	100		1	24		24		dru	18	1	44	charged	240	-30	-6											club														0
of Twister	653	100		1	48		48		dru	18	1	44	charged	240	-20	-3											amul	circ													0
of Volcano	654	100		1	30		30		dru	24	1	44	charged	244	-30	-6											club														0
of Volcano	655	100		1	60		60		dru	24	1	44	charged	244	-20	-3											hamm														0
of Tornado	656	100		1	30		30		dru	24	1	44	charged	245	-30	-5											club														0
of Tornado	657	100		1	60		60		dru	24	1	44	charged	245	-20	-2											amul	circ													0
of Armageddon	658	100			36		36		dru	30	1	44	charged	249	-30	-3											club														0
of Armageddon	659	100			72		72		dru	30	1	44	charged	249	-20	-1											staf														0
of Hurricane	660	100			36		36		dru	30	1	44	charged	250	-30	-3											club														0
of Hurricane	661	100			72		72		dru	30	1	44	charged	250	-20	-1											amul	circ													0
of Damage Amplification	662	100		1	15	55	15				1	44	hit-skill	442	8	15											weap							orb							0
of the Icicle	663	100	1	1	37		29				2	10	cold-min		2	3	cold-max		6	10	cold-len		50	50	1	dblu	jewl														0
of the Glacier	664	100	1		58		50				2	10	cold-min		4	5	cold-max		11	15	cold-len		50	50	1	dblu	jewl														0
of Fire	665	100	1	1	36		28				2	12	fire-min		4	10	fire-max		11	30					1	dred	jewl														0
of Burning	666	100	1	1	57		49				2	12	fire-min		11	25	fire-max		31	50					1	dred	jewl														0
of Lightning	667	100	1	1	36		28				2	13	ltng-min		1	1	ltng-max		21	60					1	dyel	jewl														0
of Thunder	668	100	1	1	57		49				2	13	ltng-min		1	1	ltng-max		61	100					1	dyel	jewl														0
of Daring	669	100	1	1	19		14				3	17	dex		4	6											jewl														0
of Daring	670	100	1	1	36		28				3	17	dex		7	9											jewl														0
of Knowledge	671	100	1	1	24		18				3	23	enr		4	6											jewl														0
of Knowledge	672	100	1	1	41		33				3	23	enr		7	9											jewl														0
of Virility	673	100	1	1	33		25				4	31	str		5	6											jewl														0
of Virility	674	100	1	1	50		42				4	31	str		7	9											jewl														0
of Readiness	675	1	1	1	20		15				2	9	swing1		5	15											glov														0
of Craftsmanship	676	100	1	1	1		1				4	14	dmg-max		1	1											lcha														0
of Quality	677	100	1	1	41		33				4	14	dmg-max		2	2											lcha														0
of Maiming	678	100	1		71		63				4	14	dmg-max		3	4											lcha														0
of Craftsmanship	679	100	1	1	26		19				4	14	dmg-max		1	1											mcha														0
of Quality	680	100	1		56		48				4	14	dmg-max		2	2											mcha														0
of Craftsmanship	681	100	1	1	85		77				4	14	dmg-max		1	1											scha														0
of Blight	682	100	1	1	9		6				2	16	dmg-pois	50	55	55											lcha														0
of Venom	683	100	1	1	20		15				1	16	dmg-pois	50	95	95											lcha														0
of Pestilence	684	100	1	1	32		24				1	16	dmg-pois	50	165	165									1	dgrn	lcha														0
of Anthrax	685	100	1		44		36				1	16	dmg-pois	50	790	790									1	dgrn	lcha														0
of Blight	686	100	1	1	5		3				2	16	dmg-pois	50	40	40											mcha														0
of Venom	687	100	1	1	13		9				1	16	dmg-pois	50	70	70											mcha														0
of Pestilence	688	100	1	1	23		17				1	16	dmg-pois	50	135	135									1	dgrn	mcha														0
of Anthrax	689	100	1		33		25				1	16	dmg-pois	50	215	215									1	dgrn	mcha														0
of Blight	690	100	1	1	1		1				2	16	dmg-pois	50	20	20											scha														0
of Venom	691	100	1	1	6		4				1	16	dmg-pois	50	35	35											scha														0
of Pestilence	692	100	1	1	14		10				1	16	dmg-pois	50	65	65											scha														0
of Anthrax	693	100	1		21		15				1	16	dmg-pois	50	105	105											scha														0
of Frost	694	100	1	1	14		10				2	10	cold-min		3	3	cold-max		4	5	cold-len		25	25			lcha														0
of the Icicle	695	100	1	1	21		15				1	10	cold-min		5	5	cold-max		8	13	cold-len		25	25			lcha														0
of the Glacier	696	100	1	1	33		25				1	10	cold-min		11	11	cold-max		16	22	cold-len		25	25	1	dblu	lcha														0
of Winter	697	100	1		46		38				1	10	cold-min		16	19	cold-max		27	35	cold-len		25	25	1	dblu	lcha														0
of Frost	698	100	1	1	9		6				2	10	cold-min		2	2	cold-max		3	4	cold-len		25	25			mcha														0
of the Icicle	699	100	1	1	15		11				1	10	cold-min		4	4	cold-max		6	10	cold-len		25	25			mcha														0
of the Glacier	700	100	1	1	25		18				1	10	cold-min		8	8	cold-max		12	16	cold-len		25	25	1	dblu	mcha														0
of Winter	701	100	1		35		27				1	10	cold-min		12	14	cold-max		20	26	cold-len		25	25	1	dblu	mcha														0
of Frost	702	100	1	1	5		3				2	10	cold-min		1	1	cold-max		2	2	cold-len		25	25			scha														0
of the Icicle	703	100	1	1	8		6				1	10	cold-min		2	2	cold-max		3	5	cold-len		25	25			scha														0
of the Glacier	704	100	1	1	15		11				1	10	cold-min		4	4	cold-max		6	8	cold-len		25	25			scha														0
of Winter	705	100	1		23		17				1	10	cold-min		6	7	cold-max		10	13	cold-len		25	25			scha														0
of Flame	706	100	1	1	11		8				2	12	fire-min		2	3	fire-max		5	6							lcha														0
of Fire	707	100	1	1	20		15				1	12	fire-min		5	5	fire-max		8	13							lcha														0
of Burning	708	100	1	1	32		24				1	12	fire-min		9	15	fire-max		19	24					1	dred	lcha														0
of Incineration	709	100	1		45		37				1	12	fire-min		16	22	fire-max		27	41					1	dred	lcha														0
of Flame	710	100	1	1	7		5				2	12	fire-min		2	2	fire-max		4	4							mcha														0
of Fire	711	100	1	1	14		10				1	12	fire-min		4	4	fire-max		6	10							mcha														0
of Burning	712	100	1	1	24		18				1	12	fire-min		6	10	fire-max		14	18					1	dred	mcha														0
of Incineration	713	100	1		34		26				1	12	fire-min		12	16	fire-max		20	30					1	dred	mcha														0
of Flame	714	100	1	1	3		2				2	12	fire-min		1	1	fire-max		2	2							scha														0
of Fire	715	100	1	1	8		6				1	12	fire-min		2	2	fire-max		3	5							scha														0
of Burning	716	100	1	1	14		10				1	12	fire-min		3	5	fire-max		7	9							scha														0
of Incineration	717	100	1		22		16				1	12	fire-min		6	8	fire-max		10	15							scha														0
of Shock	718	100	1	1	12		9				2	13	ltng-min		1	1	ltng-max		8	14							lcha														0
of Lightning	719	100	1	1	21		15				1	13	ltng-min		1	1	ltng-max		16	32							lcha														0
of Thunder	720	100	1	1	33		25				1	13	ltng-min		1	1	ltng-max		27	43					1	dyel	lcha														0
of Storms	721	100	1		45		37				1	13	ltng-min		1	1	ltng-max		46	68					1	dyel	lcha														0
of Shock	722	100	1	1	7		5				2	13	ltng-min		1	1	ltng-max		6	10							mcha														0
of Lightning	723	100	1	1	14		10				1	13	ltng-min		1	1	ltng-max		12	18							mcha														0
of Thunder	724	100	1	1	24		18				1	13	ltng-min		1	1	ltng-max		20	32					1	dyel	mcha														0
of Storms	725	100	1		34		26				1	13	ltng-min		1	1	ltng-max		34	50					1	dyel	mcha														0
of Shock	726	100	1	1	4		3				2	13	ltng-min		1	1	ltng-max		3	5							scha														0
of Lightning	727	100	1	1	7		5				1	13	ltng-min		1	1	ltng-max		6	9							scha														0
of Thunder	728	100	1	1	15		11				1	13	ltng-min		1	1	ltng-max		10	16							scha														0
of Storms	729	100	1		22		16				1	13	ltng-min		1	1	ltng-max		17	25							scha														0
of Dexterity	730	1	1	1	1	12	1				4	17	dex		1	1											boot	glov													0
of Dexterity	731	1	1	1	1	5	1				4	17	dex		1	1											ring														0
of Strength	732	1	1	1	1	11	1				4	31	str		1	1											glov														0
of Strength	733	1	1	1	1	4	1				4	31	str		1	1											ring														0
of Thorns	734	1	1	1	1	13	1				0	6	thorns		1	1											tors	belt	shld												0
of Frost	735	1	1	1	1	3	1				4	10	dmg-cold	25	1	1											weap							staf	wand	orb					0
of Flame	736	1	1	1	1	3	1				4	12	dmg-fire		1	2											weap							staf	wand	orb					0
of Blight	737	1	1	1	1	4	1				4	16	dmg-pois	50	8	8											weap							scep	staf	orb					0
of Shock	738	1	1	1	1	3	1				4	13	dmg-ltng		1	3											weap							staf	wand	orb					0
of Regeneration	739	1	1	1	1	9	1				0	19	regen		2	2											amul	circ													0
of Energy	740	1	1	1	1	4	1				4	23	enr		1	1											amul	orb	circ	wand	staf	helm	ring								0
of Light	741	1	1	1	1	5	1				4	25	light		1	1	att		10	10							ring	amul													0
of the Leech	742	100	1	1	24		20				2	27	lifesteal		2	3											amul														0
of the Locust	743	100	1	1	57		45				2	27	lifesteal		4	5											amul														0
of the Lamprey	744	100	1	1	75		63				2	27	lifesteal		6	6									1	cred	amul														0
of the Bat	745	1	1	1	25		21				2	28	manasteal		2	3											ring														0
of the Wraith	746	1	1	1	58		46				2	28	manasteal		4	5											ring														0
of the Vampire	747	100	1	1	76		64				2	28	manasteal		6	6									1	cred	ring														0
	748																																								0
of Sturdiness	749	1	1	1	1		1				4	157	map-mon-ac%		50	100	map-play-addxp		3	4	map-play-mag-gold%		10	15			t1m	t2m	t3m												0
of Stability	750	1	1	1	1		1				4	157	map-mon-ac%		100	150	map-play-addxp		4	5	map-play-mag-gold%		25	30			t2m	t3m													0
of Vigor	751	1	1	1	1		1				4	157	map-mon-ac%		150	200	map-play-addxp		5	6	map-play-mag-gold%		40	45			t3m	t4m													0
of Crimson	752	1	1	1	1		1				4	158	map-mon-abs-fire%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m	t3m												0
of Crimson	753	1	1	1	1		1				4	158	map-mon-abs-fire%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Crimson	754	1	1	1	1		1				4	158	map-mon-abs-fire%		8	10	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
of Tangerine	755	1	1	1	1		1				4	159	map-mon-abs-ltng%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m	t3m												0
of Tangerine	756	1	1	1	1		1				4	159	map-mon-abs-ltng%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Tangerine	757	1	1	1	1		1				4	159	map-mon-abs-ltng%		8	10	map-glob-density		20	25	map-play-addxp		5	6			t3m	t4m													0
of Opal	758	1	1	1	1		1				4	160	map-mon-abs-mag%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m	t3m												0
of Opal	759	1	1	1	1		1				4	160	map-mon-abs-mag%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Opal	760	1	1	1	1		1				4	160	map-mon-abs-mag%		8	10	map-glob-density		20	25	map-play-addxp		5	6			t3m	t4m													0
of Azure	761	1	1	1	1		1				4	161	map-mon-abs-cold%		4	6	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m	t3m												0
of Azure	762	1	1	1	1		1				4	161	map-mon-abs-cold%		6	8	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
of Azure	763	1	1	1	1		1				4	161	map-mon-abs-cold%		8	10	map-glob-density		18	25	map-play-addxp		5	6			t3m	t4m													0
of Protection	764	1	1	1	1		1				4	306	map-mon-red-dmg		100	200	map-glob-density		13	15	map-play-mag-gold%		15	20			t1m	t2m	t3m												0
of Security	765	1	1	1	1		1				4	306	map-mon-red-dmg		300	400	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
of Safety	766	1	1	1	1		1				4	306	map-mon-red-dmg		500	600	map-glob-density		18	23	map-play-mag-gold%		45	50			t3m	t4m													0
of Swiftness	767	1	1	1	1		1				4	307	map-mon-velocity%		20	30	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m	t3m												0
of Quickness	768	1	1	1	1		1				4	307	map-mon-velocity%		30	40	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
of Velocity	769	1	1	1	1		1				4	307	map-mon-velocity%		40	50	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
of Regeneration	770	1	1	1	1		1				4	308	map-mon-regen		1024	1560	map-play-addxp		3	4	map-play-mag-gold%		20	25			t1m	t2m	t3m												0
of Renewal	771	1	1	1	1		1				4	308	map-mon-regen		1560	2048	map-play-addxp		4	5	map-play-mag-gold%		35	40			t2m	t3m													0
of Rebirth	772	1	1	1	1		1				4	308	map-mon-regen		2048	2560	map-play-addxp		5	6	map-play-mag-gold%		50	55			t3m	t4m													0
of the Leech	773	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		10	15	map-glob-density		13	15	map-play-addxp		5	6			t1m	t2m	t3m												0
of the Parasite	774	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		15	20	map-glob-density		15	20	map-play-addxp		6	7			t2m	t3m													0
of the Bloodsucker	775	1	1	1	1		1				4	309	map-mon-lifesteal-hp%		20	25	map-glob-density		18	20	map-play-addxp		7	8			t3m	t4m													0
of Resilience	776	1	1	1	1		1				4	310	map-mon-balance1		40	60	map-glob-density		15	20	map-play-mag-gold%		10	15			t1m	t2m	t3m												0
of Hardiness	777	1	1	1	1		1				4	310	map-mon-balance1		60	80	map-glob-density		20	25	map-play-mag-gold%		25	30			t2m	t3m													0
of Fortitude	778	1	1	1	1		1				4	310	map-mon-balance1		80	100	map-glob-density		25	30	map-play-mag-gold%		40	45			t3m	t4m													0
of Health	779	1	1	1	1		1				2	316	map-mon-hp%		5	15	map-glob-density		15	20	map-play-addxp		6	8			t1m	t2m	t3m												0
of Vitality	780	1	1	1	1		1				2	316	map-mon-hp%		15	25	map-glob-density		20	25	map-play-addxp		8	10			t2m	t3m													0
of Vim	781	1	1	1	1		1				2	316	map-mon-hp%		25	35	map-glob-density		25	30	map-play-addxp		10	12			t3m	t4m													0
of Imbalance	782	1	1	1	1		1				4	313	map-play-balance1		-20	-10	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m	t3m												0
of Inequality	783	1	1	1	1		1				4	313	map-play-balance1		-30	-20	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
of Uneveness	784	1	1	1	1		1				4	313	map-play-balance1		-40	-30	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
of Warding	785	1	1	1	1		1				4	164	map-mon-curseresist-hp%		20	40	map-play-addxp		5	6	map-play-mag-gold%		20	25			t1m	t2m	t3m												0
of Guarding	786	1	1	1	1		1				4	164	map-mon-curseresist-hp%		40	60	map-play-addxp		6	7	map-play-mag-gold%		35	40			t2m	t3m													0
of Preservation	787	1	1	1	1		1				4	164	map-mon-curseresist-hp%		60	80	map-play-addxp		7	8	map-play-mag-gold%		50	55			t3m														0
of Hindrance	788	1	1	1	1		1				4	166	map-play-res-all		-15	-10	map-play-addxp		4	5	map-play-mag-gold%		15	20			t1m	t2m	t3m												0
of Aversion	789	1	1	1	1		1				4	166	map-play-res-all		-20	-15	map-play-addxp		5	6	map-play-mag-gold%		30	35			t2m	t3m													0
of Permeability	790	1	1	1	1		1				4	166	map-play-res-all		-25	-20	map-play-addxp		6	7	map-play-mag-gold%		50	55			t3m	t4m													0
of Cracking	791	1	1	1	1		1				4	165	map-play-ac%		-30	-20	map-glob-density		13	18	map-play-mag-gold%		15	20			t1m	t2m	t3m												0
of Crumbling	792	1	1	1	1		1				4	165	map-play-ac%		-40	-30	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
of Disintegration	793	1	1	1	1		1				4	165	map-play-ac%		-50	-40	map-glob-density		18	20	map-play-mag-gold%		45	50			t3m	t4m													0
of Fumbling	794	1	1	1	1		1				4	314	map-play-block		-20	-10	map-glob-density		13	18	map-play-mag-gold%		15	20			t1m	t2m	t3m												0
of Bumbling	795	1	1	1	1		1				4	314	map-play-block		-30	-20	map-glob-density		18	23	map-play-mag-gold%		30	35			t2m	t3m													0
of Blundering	796	1	1	1	1		1				4	314	map-play-block		-40	-30	map-glob-density		23	25	map-play-mag-gold%		40	50			t3m	t4m													0
of Defending	797	100	1	1	45		20				1	251	red-dmg%		5	10											tors	shld													20000
of Defending	798	100	1	1	65		40				1	251	red-dmg%		5	10											belt														20000
of Protecting	799	100	1	1	65		40				1	251	red-dmg%		10	15											tors	shld													35000
of Guardianship	800	100	1	1	85		60				1	251	red-dmg%		15	20											tors	shld													65000
of Savagery	801	100	1	1	18	43	15				2	252	deadly		5	10											weap	misl						staf	wand	orb					0
of Devastation	802	100	1	1	28	53	25				2	252	deadly		10	15											weap	misl						staf	wand	orb					0
of Havoc	803	100	1	1	38		35				2	252	deadly		15	20											weap	misl						staf	wand	orb					0
of Destruction	804	100	1	1	48		45				2	252	deadly		20	25											weap	misl						staf	wand	orb					0
of Desolation	805	100	1	1	58		55				2	252	deadly		25	30											weap	misl						staf	wand	orb					0
of Bleeding	806	100	1	1	18	43	15				2	252	openwounds		10	10	Deep-Wounds		8	12							weap	misl						staf	wand	orb					0
of Siphoning	807	100	1	1	28	53	25				2	252	openwounds		10	10	Deep-Wounds		15	20							weap	misl						staf	wand	orb					0
of Gory	808	100	1	1	38		35				2	252	openwounds		10	10	Deep-Wounds		30	42							weap	misl						staf	wand	orb					0
of Sanguinary	809	100	1	1	48		45				2	252	openwounds		10	10	Deep-Wounds		68	95							weap	misl						staf	wand	orb					0
of Hematic	810	100	1	1	58		55				2	252	openwounds		10	10	Deep-Wounds		112	155							weap	misl						staf	wand	orb					0
of Chipping	811	100	1	1	18	43	15				2	252	crush		5	10											weap	misl						staf	wand	orb					0
of Crumbling	812	100	1	1	28	53	25				2	252	crush		10	15											weap	misl						staf	wand	orb					0
of Breaking	813	100	1	1	38		35				2	252	crush		15	20											weap	misl						staf	wand	orb					0
of Crushing	814	100	1	1	48		45				2	252	crush		20	25											weap	misl						staf	wand	orb					0
of Pulverizing	815	100	1	1	58		55				2	252	crush		25	30											weap	misl						staf	wand	orb					0
of the Apprentice	816	1	1	1	17		20				4	9	cast1		6	15											tors	shld	ashd												10000
of the Apprentice	817	1	1	1	25		29				4	9	cast1		6	15											glov	belt													35000
of the Magus	818	1	1	1	25		29				2	9	cast3		16	25											tors	shld	ashd												65000
of the Squid	819	100	1	1	40		30				3	26	hp		61	80									1	cred	tors	belt	phlm	circ	shld										0
of the Whale	820	100	1	1	50		37				3	26	hp		81	100									1	cred	tors	belt	phlm	circ	shld										0
of the Kraken	821	100	1	1	20		1				0	41	hp/lvl	6											1	cred	tors	pelt	phlm	shld											0
of Clarity	822	1	1	1	25		21				1	25	light		4	4	att		60	120							rod	miss	amul	helm	tors	ring									0
of Divinity	823	1	1	1	50		42				1	25	light		5	5	att		120	240							rod	miss	amul	tors											0
of the Dawn	824	1	1	1	27		22				0	25	light		5	5	att%		10	10							rod	miss	glov	ring	amul	helm	tors								0
of Pacing	825	1	1	1	12		8				2	35	move1		8	15											amaz	misl													0
of Haste	826	1	1	1	22		16				2	35	move2		16	25											amaz	misl													0
of Evisceration	827	100	1	1	45		37				3	14	dmg-max		41	63									1	blac	miss														0
of Carnage	828	100	1	1	71		58				2	14	dmg-max		11	14											ring	amul	circ	helm											0
of Darkness	829	1			1		1					317	map-play-lightradius		-100	-80	map-glob-density		5	8	map-play-mag-gold%		15	20			t1m	t2m	t3m												0
of Darkness	830	1			1		1					317	map-play-lightradius		-140	-100	map-glob-density		8	10	map-play-mag-gold%		25	30			t2m	t3m													0
of Darkness	831	1			1		1					317	map-play-lightradius		-180	-140	map-glob-density		10	13	map-play-mag-gold%		35	40			t3m	t4m													0
Dclone Clout	832	100	0																						1	dred															0
Maxlevel Clout	833	100	0																						1	dgrn															0
of the Bear	834	1	1	1	30		24				0	24	knock		1	1											misl														0
of the Lamprey	835	100	1		55		43				7	27	lifesteal		6	9									1	cred	misl							orb							0
of the Vampire	836	100	1		56		48				7	28	manasteal		6	9									1	cred	misl														0
of the Jeweler	837				1		1				1	319	map-mon-dropjewelry		1	1											t1m	t2m	t3m												0
of the Jeweler	838				1		1				1	319	map-mon-dropjewelry		2	2											t2m	t3m													0
of the Jeweler	839				1		1				1	319	map-mon-dropjewelry		3	3											t3m														0
of the Smith	840	1	1	1	1		1				2	318	map-mon-dropweapons		1	1											t1m	t2m	t3m												0
of the Smith	841	1	1	1	1		1				2	318	map-mon-dropweapons		2	2											t2m	t3m													0
of the Smith	842	1	1	1	1		1				2	318	map-mon-dropweapons		3	3											t3m														0
of the Armorer	843	1	1	1	1		1				2	318	map-mon-droparmor		1	1											t1m	t2m	t3m												0
of the Armorer	844	1	1	1	1		1				2	318	map-mon-droparmor		2	2											t2m	t3m													0
of the Armorer	845	1	1	1	1		1				2	318	map-mon-droparmor		3	3											t3m														0
of the Crafter	846	1	1	1	1		1				1	318	map-mon-dropcrafting		1	1											t1m	t2m	t3m												0
of the Crafter	847	1	1	1	1		1				1	318	map-mon-dropcrafting		2	2											t2m	t3m													0
of the Crafter	848	1	1	1	1		1				1	318	map-mon-dropcrafting		3	3											t3m														0
of the Adventurer	849	1	1	1	1		1				2	320	map-glob-arealevel		1	1											t1m	t2m	t3m	t4m											0
of Radiance	850	1	1	1	15	40	11				0	25	light		3	3	att		30	60							rod	miss	helm	tors	misl										0
of the Fox	851	1	1	1	17		13				3	26	hp		6	10											ring														0
of Might	852	1	1	1	10		8				3	31	str		3	5											amul	ring	glov												0
of the Wolf	853	1	1	1	15		11				3	26	hp		11	20											belt	amul													0
of the Wolf	854	1	1	1	34		26				3	26	hp		11	20											ring														0
of the Dawn	855	1	1	1	34		26				0	25	light		5	8	att%		10	10							rod	miss	glov	ring	amul	helm	tors	misl							0
of Fireball	856	100	1	1	36		27				1	44	cast-skill	47	14	18											staf														0
of Fireball	857	100	1	1	56		42				1	44	cast-skill	47	14	24											staf														0
of Fireball	858	100	1	1	76		57				1	44	cast-skill	47	14	30											staf														0
of Fireball	859	100	1	1	36		27				1	44	hit-skill	47	16	18											weap							staf	wand	orb					0
of Fireball	860	100	1	1	56		42				1	44	hit-skill	47	16	24											weap							staf	wand	orb					0
of Fireball	861	100	1	1	76		57				1	44	hit-skill	47	16	30											weap							staf	wand	orb					0
of Lightning	862	100	1	1	36	56	27				1	44	cast-skill	49	14	18											staf														0
of Lightning	863	100	1	1	56	76	42				1	44	cast-skill	49	14	24											staf														0
of Lightning	864	100	1	1	76		57				1	44	cast-skill	49	14	30											staf														0
of Lightning	865	100	1	1	36	56	27				1	44	hit-skill	49	16	18											weap							staf	wand	orb					0
of Lightning	866	100	1	1	56	76	42				1	44	hit-skill	49	16	24											weap							staf	wand	orb					0
of Lightning	867	100	1	1	76		57				1	44	hit-skill	49	16	30											weap							staf	wand	orb					0
of Nova	868	100	1	1	36	56	27				1	44	cast-skill	48	14	18											staf														0
of Nova	869	100	1	1	56	76	42				1	44	cast-skill	48	14	24											staf														0
of Nova	870	100	1	1	76		57				1	44	cast-skill	48	14	30											staf														0
of Nova	871	100	1	1	36	56	27				1	44	hit-skill	48	16	18											weap							staf	wand	orb					0
of Nova	872	100	1	1	56	76	42				1	44	hit-skill	48	16	24											weap							staf	wand	orb					0
of Nova	873	100	1	1	76		57				1	44	hit-skill	48	16	30											weap							staf	wand	orb					0
of Chain Lightning	874	100	1	1	36	56	27				1	44	cast-skill	53	12	18											staf														0
of Chain Lightning	875	100	1	1	56	76	42				1	44	cast-skill	53	12	24											staf														0
of Chain Lightning	876	100	1	1	76		57				1	44	cast-skill	53	12	30											staf														0
of Chain Lightning	877	100	1	1	36	56	27				1	44	hit-skill	53	14	18											weap							staf	wand	orb					0
of Chain Lightning	878	100	1	1	56	76	42				1	44	hit-skill	53	14	24											weap							staf	wand	orb					0
of Chain Lightning	879	100	1	1	76		57				1	44	hit-skill	53	14	30											weap							staf	wand	orb					0
of Charged Bolt	880	100	1	1	36	56	27				1	44	cast-skill	38	18	18											staf														0
of Charged Bolt	881	100	1	1	56	76	42				1	44	cast-skill	38	18	24											staf														0
of Charged Bolt	882	100	1	1	76		57				1	44	cast-skill	38	18	30											staf														0
of Charged Bolt	883	100	1	1	36	56	27				1	44	hit-skill	38	20	18											weap							staf	wand	orb					0
of Charged Bolt	884	100	1	1	56	76	42				1	44	hit-skill	38	20	24											weap							staf	wand	orb					0
of Charged Bolt	885	100	1	1	76		57				1	44	hit-skill	38	20	30											weap							staf	wand	orb					0
of Frost Nova	886	100	1	1	36	56	27				1	44	cast-skill	44	16	18											staf														0
of Frost Nova	887	100	1	1	56	76	42				1	44	cast-skill	44	16	24											staf														0
of Frost Nova	888	100	1	1	76		57				1	44	cast-skill	44	16	30											staf														0
of Frost Nova	889	100	1	1	36	56	27				1	44	hit-skill	44	18	18											weap							staf	wand	orb					0
of Frost Nova	890	100	1	1	56	76	42				1	44	hit-skill	44	18	24											weap							staf	wand	orb					0
of Frost Nova	891	100	1	1	76		57				1	44	hit-skill	44	18	30											weap							staf	wand	orb					0
of Ice Barrage	892	100	1	1	36	56	27				1	44	cast-skill	369	10	18											staf														0
of Ice Barrage	893	100	1	1	56	76	42				1	44	cast-skill	369	10	24											staf														0
of Ice Barrage	894	100	1	1	76		57				1	44	cast-skill	369	10	30											staf														0
of Ice Barrage	895	100	1	1	36	56	27				1	44	hit-skill	369	12	18											weap							staf	wand	orb					0
of Ice Barrage	896	100	1	1	56	76	42				1	44	hit-skill	369	12	24											weap							staf	wand	orb					0
of Ice Barrage	897	100	1	1	76		57				1	44	hit-skill	369	12	30											weap							staf	wand	orb					0
of Damage Amplification	898	100	1	1	36	76	27				1	44	hit-skill	442	10	23											weap							staf	wand	orb					0
of Damage Amplification	899	100	1	1	76		57				1	44	hit-skill	442	12	31											weap							staf	wand	orb					0
of Swords	900	100	1	1	67		50				0	6	thorns		200	400									1	oran	tors	shld	circ												0
of Gory	901	100			38	58	35				2	252	openwounds		5	5	Deep-Wounds		15	20							jewl														0
of Sanguinary	902	100			48		45				4	252	openwounds		5	5	Deep-Wounds		26	35							jewl														0
of Hematic	903	100			58		55				4	252	openwounds		5	5	Deep-Wounds		38	50							jewl														0
of Damage Amplification	904	100	1	1	15	55	15				1	44	cast-skill	442	8	15											staf														0
of Damage Amplification	905	100	1	1	36	76	27				1	44	cast-skill	442	10	23											staf														0
of Damage Amplification	906	100	1	1	76		57				1	44	cast-skill	442	12	31											staf														0
of Lower Resist	907	100	1	1	15	55	15				1	44	hit-skill	447	8	5											weap							staf	wand	orb					0
of Lower Resist	908	100	1	1	36	76	27				1	44	hit-skill	447	10	10											weap							staf	wand	orb					0
of Lower Resist	909	100	1	1	76		57				1	44	hit-skill	447	12	15											weap							staf	wand	orb					0
of Lower Resist	910	100	1	1	15	55	15				1	44	cast-skill	447	8	5											staf														0
of Lower Resist	911	100	1	1	36	76	27				1	44	cast-skill	447	10	10											staf														0
of Lower Resist	912	100	1	1	76		57				1	44	cast-skill	447	12	15											staf														0
of Decay	913	0	1	1	70		53					15	pois-min		8	8	pois-max		2580	2580	pois-len		50	50			ring	amul													0
of Hypothermia	914	100	1	1	70		53				2	10	cold-min		63	118	cold-max		238	365	cold-len		150	150	1	dblu	mele	misl						wand	orb						0
of Ashes	915	100	1	1	70		53				2	12	fire-min		152	214	fire-max		228	302					1	dred	mele	misl						wand	orb						0
of Maelstrom	916	100	1	1	70		53				2	13	ltng-min		1	6	ltng-max		303	403					1	dyel	mele	misl						wand	orb						0
of Life	917	100	1	1	1		14				1	26	hp		10	10											schp														0
of Life	918	100	1	1	9		17				4	26	hp		15	15											schp	lchp	mchp												0
of Life	919	100	1	1	9		39				4	26	hp		20	20											schp														0
of Balance	920	100	1	1	37		29				4	18	balance1		5	5											schp														0
of Superiority	921	100	1	1	40		30				1	1000	allskills		1	1									1	blac	amul	shld													0
of Damage	922	100	1	1	1		1				3	1001	dmg%		10	20											amul	ring	glov												0
of Damage	923	100	1	1	20		15				3	1001	dmg%		21	40											amul	ring	glov												0
of Damage	924	100	1	1	40		35				3	1001	dmg%		41	60											amul	ring	glov												0
of Damage	925	100	1	1	60		55				3	1001	dmg%		61	80											amul														0
of Deadly Strike	926	100	1	1	20		15				3	1002	deadly		5	15											amul	glov													0
of Deadly Strike	927	100	1	1	50		45				3	1002	deadly		16	25											amul														0
of Fire	928	100	1	1	20		15				2	1003	extra-fire		5	10											amul	ring	shld	glov	helm	tors									0
of Fire	929	100	1	1	40		35				2	1003	extra-fire		11	20											amul	ring	shld	glov	helm	tors									0
of Fire	929	100	1	1	60		55				2	1003	extra-fire		21	30											amul	shld	tors												0
of Cold	930	100	1	1	20		15				2	1003	extra-cold		5	10											amul	ring	shld	glov	helm	tors									0
of Cold	931	100	1	1	40		35				2	1003	extra-cold		11	20											amul	ring	shld	glov	helm	tors									0
of Cold	932	100	1	1	60		55				2	1003	extra-cold		21	30											amul	shld	tors												0
of Lightning	933	100	1	1	20		15				2	1003	extra-ltng		5	10											amul	ring	shld	glov	helm	tors									0
of Lightning	934	100	1	1	40		35				2	1003	extra-ltng		11	20											amul	ring	shld	glov	helm	tors									0
of Lightning	935	100	1	1	60		55				2	1003	extra-ltng		21	30											amul	shld	tors												0
of Poison 	936	100	1	1	20		15				2	1003	extra-pois		5	10											amul	ring	shld	glov	helm	tors									0
of Poison 	937	100	1	1	40		35				2	1003	extra-pois		11	20											amul	ring	shld	glov	helm	tors									0
of Poison 	938	100	1	1	60		55				2	1003	extra-pois		21	30											amul	shld	tors												0
of Attack Speed	939	100	1	1	30		25				4	1004	swing2		10	20											amul														0
of Crushing Blow	940	100	1	1	30		25				4	1005	crush		5	15											amul														0
of Fire Resistance	941	100	1	1	40		25				1	1006	res-fire-max		1	3											amul	shld	boot	tors											0
of Fire Resistance	942	100	1	1	60		25				1	1006	res-fire-max		4	6											amul	shld	tors												0
of Cold Resistance	943	100	1	1	40		25				1	1007	res-cold-max		1	3											amul	shld	boot	tors											0
of Cold Resistance	944	100	1	1	60		25				1	1007	res-cold-max		4	6											amul	shld	tors												0
of Lightning Resistance	945	100	1	1	40		25				1	1008	res-ltng-max		1	3											amul	shld	boot	tors											0
of Lightning Resistance	946	100	1	1	60		25				1	1008	res-ltng-max		4	6											amul	shld	tors												0
of Poison Resistance	947	100	1	1	40		25				1	1009	res-pois-max		1	3											amul	shld	boot	tors											0
of Poison Resistance	948	100	1	1	60		25				1	1009	res-pois-max		4	6											amul	shld	tors												0
of Attack Speed	949	100	1	1	30		25				6	1010	swing2		5	10											ring														0
of the Apprentice	950	1	1	1	5		3				4	9	cast1		2	4											jewl														0
of the Fletcher	951	100	1		50		42	ama			1	125	skilltab	0	1	1											lcha														0
of the Acrobat	952	100	1		50		42	ama			1	125	skilltab	1	1	1											lcha														0
of the Harpoonist	953	100	1		50		42	ama			1	125	skilltab	2	1	1											lcha														0
of Burning	954	100	1		50		42	sor			1	125	skilltab	3	1	1											lcha														0
of Sparking	955	100	1		50		42	sor			1	125	skilltab	4	1	1											lcha														0
of Chilling	956	100	1		50		42	sor			1	125	skilltab	5	1	1											lcha														0
of Hexing	957	100	1		50		42	nec			1	125	skilltab	6	1	1											lcha														0
of Fungal	958	100	1		50		42	nec			1	125	skilltab	7	1	1											lcha														0
of the Graverobber	959	100	1		50		42	nec			1	125	skilltab	8	1	1											lcha														0
of the Lion Branded	960	100	1		50		42	pal			1	125	skilltab	9	1	1											lcha														0
of the Captain	961	100	1		50		42	pal			1	125	skilltab	10	1	1											lcha														0
of the Preserver	962	100	1		50		42	pal			1	125	skilltab	11	1	1											lcha														0
of the Expert	963	100	1		50		42	bar			1	125	skilltab	12	1	1											lcha														0
of the Fanatic	964	100	1		50		42	bar			1	125	skilltab	13	1	1											lcha														0
of Sounding	965	100	1		50		42	bar			1	125	skilltab	14	1	1											lcha														0
of the Trainer	966	100	1		50		42	dru			1	125	skilltab	15	1	1											lcha														0
of the Spiritual	967	100	1		50		42	dru			1	125	skilltab	16	1	1											lcha														0
of the Nature	968	100	1		50		42	dru			1	125	skilltab	17	1	1											lcha														0
of Entrapping	969	100	1		50		42	ass			1	125	skilltab	18	1	1											lcha														0
of the Mentalist	970	100	1		50		42	ass			1	125	skilltab	19	1	1											lcha														0
of Shogukusha	971	100	1		50		42	ass			1	125	skilltab	20	1	1											lcha														0
of Luck	972	100	1		21	46	15				4	1011	mag%		1	4											lcha														0
of Luck	973	100	1		38		30				4	1011	mag%		5	7											lcha														0
of Luck	974	100	1		55		45				4	1011	mag%		8	12											lcha														0
of the Tank	975	100	1		50		40				2	1012	hp%		5	8											armo														0
of the Tank	976	100	1		65		50				2	1012	hp%		9	12											tors	shld													0
of Resist Fire	977	100	1		40		35				1	1013	aura	resist fire	1	1											helm	shld													0
of Resist Cold	978	100	1		40		35				1	1014	aura	resist cold	1	1											helm	shld													0
of Resist Lightning	979	100	1		40		35				1	1015	aura	resist lightning	1	1											helm	shld													0
of Vigor	980	100	1		18		18				1	1016	aura	vigor	1	1											boot														0
of Meditation	981	100	1		40		35				1	1017	aura	meditation	1	1											helm														0
of Blessed Aim	982	100	1		40		35				1	1018	aura	blessed aim	1	1											helm														0
of Holy Freeze	983	100	1		40		35				1	1019	aura	holy freeze	1	1											shld														0
of Telekinesis	984	100	1		40		35				1	1020	oskill	telekinesis	1	1											helm	glov													0
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
    new ItemType('Grand Charm', ['lcha'])
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
