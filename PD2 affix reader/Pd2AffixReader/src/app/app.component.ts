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
Sturdy	1	0	1	1	4		3				0	101	ac%		20	30											armo														0
Strong	2	0	1	1	9		6				0	101	ac%		31	40											armo														0
Glorious	3	0	1	1	19		14				0	101	ac%		41	50											armo														0
Blessed	4	0	1	1	25		18				0	101	ac%		51	65											armo														0
Saintly	5	0	1	1	31		23				0	101	ac%		66	80									1	dgld	armo														0
Holy	6	0	1	1	36		27				0	101	ac%		81	100									1	dgld	armo														0
Devious	7	0	1	1	7		5				0	103	red-mag	0	1	1									1	dblu	shld														0
Fortified	8	0	1	1	14		10				0	103	red-mag	0	2	2									1	dblu	shld														0
	9																																								0
	10																																								0
	11																																								0
Jagged	12	0	1	1	1		1				0	106	dmg%	0	10	20											weap														0
Deadly	13	0	1	1	5		3				0	106	dmg%	0	21	30											weap														0
Vicious	14	0	1	1	8		6				0	106	dmg%	0	31	40											weap														0
Brutal	15	0	1	1	14		10				0	106	dmg%	0	41	50											weap														0
Massive	16	0	1	1	20		15				0	106	dmg%	0	51	65									1	dgld	weap														0
Savage	17	0	1	1	26		19				0	106	dmg%	0	66	80									1	dgld	weap							staf	wand						0
Merciless	18	0	1	1	32		24				0	106	dmg%	0	81	100									1	dgld	weap							staf	wand						0
Vulpine	19	0	1	1	9		6				0	107	dmg-to-mana	0	10	10									1	cblu	shld	amul													0
	20																																								0
	21																																								0
	22																																								0
	23																																								0
Tireless	24	0	1	1	14		10				0	109	regen-stam	0	50	50											boot														0
Rugged	25	0	0	1	14		10				0	110	stam	0	5	10											boot	glov	belt	ring	amul										0
Bronze	26	0	1	1	1		1				0	111	att	0	10	20											weap	ring	glov	amul											0
Iron	27	0	1	1	4		3				0	111	att	0	21	40											weap	ring													0
Steel	28	0	1	1	8		6				0	111	att	0	41	60											weap	ring													0
Silver	29	0	1	1	12		9				0	111	att	0	61	80											weap	ring													0
	30																																								0
Gold	31	0	1	1	17		12				0	111	att	0	81	100									1	lgld	weap														0
Platinum	32	0	1	1	22		16				0	111	att	0	101	120									1	lgld	weap	ring													0
Meteoric	33	0	1	1	27		20				0	111	att	0	121	150									1	lgld	weap	ring						staf	wand						0
Sharp	34	0	1	1	5		3				0	112	att	0	10	20	dmg%	0	10	20							weap														0
Fine	35	0	1	1	9		6				0	112	att	0	21	40	dmg%	0	21	30							weap														0
Warrior's	36	0	1	1	15		11				0	112	att	0	41	60	dmg%	0	31	40							weap														0
Soldier's	37	0	1	1	21		15				0	112	att	0	61	80	dmg%	0	41	50							weap														0
Knight's	38	0	1	1	25		18				0	112	att	0	81	100	dmg%	0	51	65					1	dgld	weap														0
Lord's	39	0	1	1	30		22				0	112	att	0	101	120	dmg%	0	66	80					1	dgld	weap							staf	wand						0
King's	40	0	1	1	35		26				0	112	att	0	121	150	dmg%	0	81	100					1	dgld	weap							staf	wand						0
Howling	41	0	1	1	16		12				0	113	howl	0	128	128									1	oran	weap							miss							0
Fortuitous	42	0	1	1	5		3				0	114	mag%	0	10	15											ring	amul													0
	43																																								0
	44																																								0
	45																																								0
	46																																								0
	47																																								0
Glimmering	48	0	1	1	1		1				0	116	light	0	1	1											armo	wand	staf	ring	amul										0
Glowing	49	0	1	1	6		4				0	116	light	0	2	2									1	lyel	armo	wand	staf	ring	amul										0
	50																																								0
	51																																								0
Lizard's	52	0	1	1	3		2				0	118	mana	0	1	5											armo	ring	amul	rod				boot	glov						0
	53																																								0
Snake's	54	0	1	1	6		4				0	118	mana	0	5	10											shld	rod	belt	ring	amul										0
Serpent's	55	0	1	1	14		10				0	118	mana	0	11	20											shld	rod	belt	ring	amul										0
Serpent's	56	0	1	1	37		27				0	118	mana	0	11	20											tors	helm	boot	glov	mele			h2h	rod						0
Drake's	57	0	1	1	20		15				0	118	mana	0	21	30									1	cblu	rod	ring	amul	belt											0
Dragon's	58	0	1	1	24		18				0	118	mana	0	31	40									1	cblu	rod	ring	amul												0
Dragon's	59	0	1	1	52		39				0	118	mana	0	31	40									1	cblu	tors	helm	boot	glov											0
Wyrm's	60	0	1	1	30		22				0	118	mana	0	41	60									1	cblu	rod	ring	amul												0
	61																																								0
	62																																								0
Prismatic	63	0	1	1	27		20				0	120	res-all	0	15	25									1	lpur	amul														0
Prismatic	64	0	1	1	62		46				0	120	res-all	0	15	15									1	lpur	ring														0
Azure	65	0	1	1	5		3				0	121	res-cold	0	5	10											armo	rod	miss	ring	amul										0
Lapis	66	0	1	1	12		9				0	121	res-cold	0	11	20											armo	ring	amul	rod											0
Lapis	67	0	1	1	35		26				0	121	res-cold	0	11	20											weap	glov						rod							0
Cobalt	68	0	1	1	18		13				0	121	res-cold	0	21	30											armo	ring	amul	rod				glov							0
Cobalt	69	0	1	1	55		41				0	121	res-cold	0	21	30											weap	glov						rod							0
	70																																								0
Sapphire	71	0	1	1	25		18				0	121	res-cold	0	31	50									1	lblu	rod	boot	ring	amul	miss			scep							0
	72																																								0
	73																																								0
Crimson	74	0	1	1	5		3				0	122	res-fire	0	5	10											armo	rod	miss	ring	amul	amul									0
Burgundy	75	0	1	1	12		9				0	122	res-fire	0	11	20											armo	rod	ring	amul	amul										0
Burgundy	76	0	1	1	35		26				0	122	res-fire	0	11	20											weap							rod							0
Garnet	77	0	1	1	18		13				0	122	res-fire	0	21	30											armo	rod	ring	amul				glov							0
Garnet	78	0	1	1	55		41				0	122	res-fire	0	21	30											weap	glov						rod							0
	79																																								0
Ruby	80	0	1	1	25		18				0	122	res-fire	0	31	50									1	lred	wand	staf	boot	ring	amul										0
	81																																								0
	82																																								0
Ocher	83	0	1	1	5		3				0	123	res-ltng	0	5	10											armo	rod	ring	amul	miss										0
Tangerine	84	0	1	1	12		9				0	123	res-ltng	0	11	20											armo	ring	amul	rod											0
Tangerine	85	0	1	1	35		26				0	123	res-ltng	0	11	20											weap							rod							0
Coral	86	0	1	1	18		13				0	123	res-ltng	0	21	30											armo	ring	amul	rod				glov							0
Coral	87	0	1	1	55		41				0	123	res-ltng	0	21	30											weap	glov						rod							0
	88																																								0
Amber	89	0	1	1	25		18				0	123	res-ltng	0	31	50									1	lyel	armo	ring	amul	staf	wand			shld	glov						0
	90																																								0
	91																																								0
Beryl	92	0	1	1	5		3				0	124	res-pois	0	5	10											armo	ring	amul	scep	staf	miss									0
Jade	93	0	1	1	12		9				0	124	res-pois	0	11	20											armo	ring	amul	scep	staf										0
Jade	94	0	1	1	35		26				0	124	res-pois	0	11	20											weap	ring						staf	scep						0
Viridian	95	0	1	1	18		13				0	124	res-pois	0	21	30											tors	helm	shld	scep	staf	ring	amul								0
Viridian	96	0	1	1	55		41				0	124	res-pois	0	21	30											weap	boot	glov	belt				staf	scep						0
	97																																								0
Emerald	98	0	1	1	25		18				0	124	res-pois	0	31	50									1	lgrn	scep	ring	amul												0
	99																																								0
Fletcher's	100	0	1	1	30		22				0	125	ama	0	1	1											miss	amul													0
Archer's	101	0	1	1	40		30				0	125	ama	0	2	2									1	cgrn	miss														0
Archer's	102	0	1	1	90		67				0	125	ama	0	2	2									1	cgrn	amul														0
Monk's	103	0	1	1	30		22				0	126	pal	0	1	1											scep	amul													0
Priest's	104	0	1	1	40		30				0	126	pal	0	2	2									1	cgrn	scep														0
Priest's	105	0	1	1	90		67				0	126	pal	0	2	2									1	cgrn	amul														0
Summoner's	106	0	1	1	30		22				0	127	nec	0	1	1											wand	amul													0
Necromancer's	107	0	1	1	40		30				0	127	nec	0	2	2									1	cgrn	wand														0
Necromancer's	108	0	1	1	90		67				0	127	nec	0	2	2									1	cgrn	amul														0
Angel's	109	0	1	1	30		22				0	128	sor	0	1	1											staf	amul													0
Arch-Angel's	110	0	1	1	40		30				0	128	sor	0	2	2									1	cgrn	staf														0
Arch-Angel's	111	0	1	1	90		67				0	128	sor	0	2	2									1	cgrn	amul														0
Slayer's	112	0	1	1	30		22				0	129	bar	0	1	1											mele	amul						rod	h2h						0
Berserker's	113	0	1	1	40		30				0	129	bar	0	2	2									1	cgrn	mele							rod	h2h						0
Berserker's	114	0	1	1	90		67				0	129	bar	0	2	2									1	cgrn	amul														0
	115																																								0
	116																																								0
Triumphant	117	0	1	1	3		2				0	132	mana-kill	0	1	1											mele	ring													0
Expansion	118																																								
Stout	119	100	1	1	1		1				4	101	ac		3	5											lcha														0
Stout	120	100	1	1	7		5				4	101	ac		6	9											lcha														0
Stout	121	100	1	1	12		9				4	101	ac		10	12											lcha														0
Burly	122	100	1	1	17		12				4	101	ac		13	15											lcha														0
Burly	123	100	1	1	22		16				4	101	ac		16	22											lcha														0
Burly	124	100	1	1	27		20				4	101	ac		23	30											lcha														0
Stalwart	125	100	1		32		24				4	101	ac		33	40											lcha														0
Stalwart	126	100	1		37		29				4	101	ac		44	50											lcha														0
Stalwart	127	100	1		42		34				4	101	ac		60	100											lcha														0
Stout	128	100	1	1	1		1				4	101	ac		2	3											mcha														0
Stout	129	100	1	1	14		10				4	101	ac		4	6											mcha														0
Stout	130	100	1	1	20		15				4	101	ac		8	12											mcha														0
Burly	131	100	1	1	26		19				4	101	ac		13	18											mcha														0
Burly	132	100	1	1	32		24				4	101	ac		20	30											mcha														0
Stalwart	133	100	1		38		30				4	101	ac		30	40											mcha														0
Stalwart	134	100	1		45		37				4	101	ac		45	60											mcha														0
Stout	135	100	1	1	1		1				4	101	ac		1	1											scha														0
Stout	136	100	1	1	21		15				4	101	ac		4	8											scha														0
Burly	137	100	1	1	36		28				4	101	ac		15	20											scha														0
Stalwart	138	100	1		48		40				4	101	ac		20	30											scha														0
Blanched	139	100	1	1	1		1				4	101	ac		5	8									1	whit	jewl														0
Eburin	140	100	1	1	16		12				4	101	ac		9	20									1	whit	jewl														0
Bone	141	100	1	1	32		24				4	101	ac		21	40									1	whit	jewl														0
Ivory	142	100	1		64		56				4	101	ac		41	64									1	whit	jewl														0
Sturdy	143	1	1	1	1	26	1				9	101	ac%		10	20											armo														0
Sturdy	144	1	1	1	4	29	3				9	101	ac%		21	30											armo														0
Strong	145	1	1	1	9	34	6				8	101	ac%		31	40											armo														0
Glorious	146	1	1	1	19	44	14				8	101	ac%		41	50											armo														0
Blessed	147	1	1	1	25		18				7	101	ac%		51	65											armo														0
Saintly	148	1	1	1	31		23				7	101	ac%		66	80									1	dgld	armo														0
Holy	149	1	1	1	36		27				6	101	ac%		81	100									1	dgld	armo														0
Godly	150	100	1		45		38				3	101	ac%		101	200									1	dgld	armo														0
Devious	151	1	0	1	7		5				0	102	red-mag		1	1											shld	circ	orb	wand	staf										0
Blank	152	1	0	1	14		10				0	102	red-mag		2	2											shld	circ	orb	wand	staf										0
Null	153	100	0	1	21		16				0	102	red-mag		3	5									1	dblu	shld	circ													0
Antimagic	154	100	0		28		21				0	102	red-mag		6	10									1	dblu	shld	circ													0
Red	155	100	0	1	4		3				4	103	dmg-min		1	2									1	dred	lcha														0
Red	156	100	0	1	16		12				4	103	dmg-min		3	3									1	dred	lcha														0
Sanguinary	157	100	0	1	28		21				4	103	dmg-min		4	4									1	dred	lcha														0
Sanguinary	158	100	0	1	40		32				4	103	dmg-min		5	6									1	dred	lcha														0
Bloody	159	100	0		52		46				4	103	dmg-min		7	8									1	dred	lcha														0
Red	160	100	0	1	11		8				4	103	dmg-min		1	2									1	dred	mcha														0
Sanguinary	161	100	0	1	33		25				4	103	dmg-min		3	3									1	dred	mcha														0
Bloody	162	100	0		55		47				4	103	dmg-min		4	4									1	dred	mcha														0
Red	163	100	0	1	24		16				4	103	dmg-min		1	1											scha														0
Sanguinary	164	100	0	1	41		33				4	103	dmg-min		2	2											scha														0
Bloody	165	100	0		58		50				4	103	dmg-min		3	3											scha														0
Scarlet	166	100	1	1	8		6				4	103	dmg-min		1	4									1	dred	jewl	misl													0
Crimson	167	100	1	1	38		30				4	103	dmg-min		5	8									1	dred	jewl														0
Jagged	168	100	0	1	3		2				4	104	dmg-max		1	2									1	blac	lcha														0
Jagged	169	100	0	1	10		7				4	104	dmg-max		3	4									1	blac	lcha														0
Jagged	170	100	0	1	17		12				4	104	dmg-max		5	6									1	blac	lcha														0
Forked	171	100	0	1	25		18				4	104	dmg-max		7	8									1	blac	lcha														0
Forked	172	100	0	1	32		24				4	104	dmg-max		9	10									1	blac	lcha														0
Serrated	173	100	0		39		31				4	104	dmg-max		11	12									1	blac	lcha														0
Serrated	174	100	0		47		39				4	104	dmg-max		13	14									1	blac	lcha														0
Jagged	175	100	0	1	10		7				4	104	dmg-max		1	1									1	blac	mcha														0
Jagged	176	100	0	1	20		15				4	104	dmg-max		2	2									1	blac	mcha														0
Forked	177	100	0	1	30		22				4	104	dmg-max		3	3									1	blac	mcha														0
Forked	178	100	0	1	40		32				4	104	dmg-max		4	5									1	blac	mcha														0
Serrated	179	100	0		50		42				4	104	dmg-max		6	7									1	blac	mcha														0
Jagged	180	100	0	1	23		17				4	104	dmg-max		1	1											scha														0
Forked	181	100	0	1	38		30				4	104	dmg-max		2	2											scha														0
Serrated	182	100	0		53		45				4	104	dmg-max		3	3											scha														0
Carbuncle	183	100	1	1	12		9				4	104	dmg-max		1	5									1	dred	jewl	misl													0
Carmine	184	100	1	1	35		27				4	104	dmg-max		6	9									1	dred	jewl	misl													0
Vermillion	185	100	1	1	58		50				4	104	dmg-max		11	15									1	dred	jewl	misl													0
Jagged	186	1	1	1	1	26	1				9	105	dmg%		10	20											weap	circ						staf	wand	orb					0
Deadly	187	1	1	1	5	30	3				9	105	dmg%		21	30											weap	circ						staf	wand	orb					0
Vicious	188	1	1	1	8	33	6				8	105	dmg%		31	40											weap							staf	wand	orb					0
Brutal	189	1	1	1	14	39	10				8	105	dmg%		41	50											weap							staf	wand	orb					0
Massive	190	1	1	1	20	45	15				7	105	dmg%		51	65									1	dgld	weap							staf	wand	orb					0
Savage	191	1	1	1	26		19				7	105	dmg%		66	80									1	dgld	weap							staf	wand	orb					0
Merciless	192	1	1	1	32		24				6	105	dmg%		81	100									1	dgld	weap							staf	wand	orb					0
Ferocious	193	100	1	1	41		33				6	105	dmg%		101	200									1	blac	weap							staf	wand	orb					0
Cruel	194	100	1		51		43				5	105	dmg%		201	300									1	blac	weap							staf	wand	orb					0
Cinnabar	195	100	1	1	1		1				4	105	dmg%		5	10									1	dred	jewl														0
Rusty	196	100	1	1	13		9				4	105	dmg%		11	20									1	dred	jewl														0
Realgar	197	100	1	1	45		37				4	105	dmg%		21	30									1	dred	jewl														0
Ruby	198	100	1	1	66		58				4	105	dmg%		31	40									1	dred	jewl														0
Vulpine	199	1	1	1	9		6				0	107	dmg-to-mana		7	12									1	cblu	shld	amul	orb	staf											0
Dun	200	100	1	1	7		5				0	107	dmg-to-mana		7	12											jewl														0
Tireless	201	1	1	1	6		4				0	108	regen-stam		25	25											boot														0
Tireless	202	100	1	1	14		10				0	108	regen-stam		50	50											boot														0
Brown	203	100	0	1	39		31				0	108	regen-stam		10	15											jewl														0
Rugged	204	100	0	1	1		1				0	109	stam		12	24											lcha														0
Rugged	205	100	0	1	7		5				0	109	stam		25	36											lcha														0
Rugged	206	100	0	1	21		15				0	109	stam		37	50											lcha														0
Rugged	207	100	0	1	1						0	109	stam		8	16											mcha														0
Rugged	208	100	0	1	7		5				0	109	stam		17	25											mcha														0
Rugged	209	100	0	1	21		15				0	109	stam		26	32											mcha														0
Rugged	210	100	0	1	1						0	109	stam		4	8											scha														0
Rugged	211	100	0	1	21		15				0	109	stam		9	16											scha														0
Rugged	212	1	0	1	1		1				0	109	stam		5	10											boot	glov	belt	ring	amul	circ									0
Rugged	213	1	0	1	8		6				0	109	stam		11	20											boot	belt													0
Rugged	214	1	0	1	8		6				0	109	stam		11	20											ring	amul	circ												0
Vigorous	215	100	0	1	16		12				0	109	stam		21	30											boot	belt													0
Chestnut	216	100	0	1	1		1				0	109	stam		10	15											jewl														0
Maroon	217	100	0	1	17		12				0	109	stam		16	25											jewl														0
Bronze	218	100	1	1	1		1				4	110	att		6	12											lcha														0
Bronze	219	100	1	1	7		5				4	110	att		13	27											lcha														0
Bronze	220	100	1	1	13		9				4	110	att		28	42											lcha														0
Iron	221	100	1	1	19		14				4	110	att		43	57											lcha														0
Iron	222	100	1	1	25		18				4	110	att		58	72											lcha														0
Iron	223	100	1	1	31		23				4	110	att		73	87											lcha														0
Steel	224	100	1		37		29				4	110	att		88	102											lcha														0
Steel	225	100	1		43		35				4	110	att		103	117											lcha														0
Steel	226	100	1		49		41				4	110	att		118	132											lcha														0
Bronze	227	100	1	1	1		1				4	110	att		4	8											mcha														0
Bronze	228	100	1	1	7		5				4	110	att		6	12											mcha														0
Bronze	229	100	1	1	16		12				4	110	att		13	25											mcha														0
Iron	230	100	1	1	25		18				4	110	att		26	38											mcha														0
Iron	231	100	1	1	34		26				4	110	att		39	51											mcha														0
Steel	232	100	1		43		36				4	110	att		52	64											mcha														0
Steel	233	100	1		52		44				4	110	att		65	77											mcha														0
Bronze	234	100	1	1	1		1				4	110	att		2	4											scha														0
Bronze	235	100	1	1	21		15				4	110	att		6	12											scha														0
Iron	236	100	1	1	39		31				4	110	att		13	24											scha														0
Steel	237	100	1		57		49				4	110	att		25	36											scha														0
Bronze	238	1	1	1	1	26	1				8	110	att		10	20											weap	ring	glov	amul	circ	helm	tors	staf	wand	orb					0
Iron	239	1	1	1	4	29	3				8	110	att		21	40											weap	ring	circ	glov	helm	tors		staf	wand	orb					0
Steel	240	1	1	1	8		6				7	110	att		41	60											weap	ring	circ	glov	helm	tors		staf	wand	orb					0
Silver	241	1	1	1	12		9				7	110	att		61	80											weap	ring	circ	glov	helm	tors	misl	staf	wand	orb					0
Gold	242	1	1	1	17		12				6	110	att		81	100									1	lgld	weap	ring	circ	glov	helm	tors	misl	staf	wand	orb					0
Platinum	243	1	1	1	22		16				6	110	att		101	120									1	lgld	weap	ring	circ	glov	helm	tors	misl	staf	wand	orb					0
Meteoric	244	1	1	1	27		20				5	110	att		121	150									1	lgld	weap	misl						staf	wand	orb					0
Strange	245	100	1	1	32		24				5	110	att		151	300									1	lgld	weap							staf	wand	orb					0
Weird	246	100	1		37		27				4	110	att		301	450									1	lgld	weap							staf	wand	orb					0
Nickel	247	100	1	1	1	26	1				4	110	att		10	20											jewl														0
Tin	248	100	1	1	8	33	6				4	110	att		21	40											jewl														0
Silver	249	100	1	1	25		18				4	110	att		41	60											jewl														0
Argent	250	100	1	1	44		36				4	110	att		61	100											jewl														0
Fine	251	100	1	1	15		11				4	111	att		10	20	dmg-max		1	3							lcha														0
Fine	252	100	1	1	22		16				4	111	att		21	48	dmg-max		4	6							lcha														0
Sharp	253	100	1	1	29		21				4	111	att		49	76	dmg-max		7	10							lcha														0
Fine	254	100	1	1	19		14				4	111	att		10	20	dmg-max		1	3							mcha														0
Sharp	255	100	1	1	28		21				4	111	att		21	48	dmg-max		4	6							mcha														0
Fine	256	100	1		28		21				4	111	att		10	20	dmg-max		1	3							scha														0
Sharp	257	1	1	1	5	30	3				9	111	att		10	20	dmg%		10	20							weap							staf	wand	orb					0
Fine	258	1	1	1	12	37	9				9	111	att		21	40	dmg%		21	30							weap							staf	wand	orb					0
Warrior's	259	1	1	1	19	44	13				8	111	att		41	60	dmg%		31	40							weap							staf	wand	orb					0
Soldier's	260	1	1	1	27		19				8	111	att		61	80	dmg%		41	50							weap							staf	wand	orb					0
Knight's	261	1	1	1	38		30				7	111	att		81	100	dmg%		51	65					1	dgld	weap							staf	wand	orb					0
Lord's	262	1	1	1	47		39				6	111	att		101	120	dmg%		66	80					1	dgld	weap							staf	wand	orb					0
King's	263	1	1	1	56		48				5	111	att		121	150	dmg%		81	100					1	dgld	weap							staf	wand	orb					0
Master's	264	100	1	1	56		48				5	111	att		151	250	dmg%		101	150					1	dgld	weap							staf	wand	orb					0
Grandmaster's	265	100	1	1	69		61				4	111	att		251	300	dmg%		151	200					1	dgld	weap							staf	wand	orb					0
Glimmering	266	1	1	1	1		1				0	112	light		1	1											armo	wand	staf	ring	amul	orb									0
Glowing	267	1	1	1	6		4				0	112	light		2	2									1	lyel	armo	wand	staf	ring	amul	orb									0
Bright	268	100	1	1	1		1				0	112	light		1	1	att		10	10							jewl														0
Screaming	269	100	1	1	10		7				0	113	howl		32	32									1	oran	weap							miss	swor	axe	pole	spea			0
Howling	270	1	1	1	16		12				0	113	howl		64	64									1	oran	weap							miss	swor	axe	pole	spea			0
Wailing	271	100	1	1	20		13				0	113	howl		128	128									1	oran	weap							miss	swor	axe	pole	spea			0
Screaming	272	100	1	1	10		7				0	113	howl		16	16									1	oran	miss														0
Howling	273	100	1	1	16		12				0	113	howl		24	24									1	oran	miss														0
Wailing	274	100	1		24		18				0	113	howl		32	32									1	oran	miss														0
Lucky	275	100	1	1	21	46					4	114	mag%		1	4											lcha														0
Lucky	276	100	1		38						4	114	mag%		5	7											lcha														0
Lucky	277	100	1		55						4	114	mag%		8	12											lcha														0
Lucky	278	100	1	1	34						4	114	mag%		1	1											mcha														0
Lucky	279	100	1		53						4	114	mag%		2	3											mcha														0
Lucky	280	100	1		51						4	114	mag%		4	6											mcha														0
Felicitous	281	100	1	1	5		3				4	114	mag%		10	20											ring	amul	circ	helm											0
Fortuitous	282	1	1	1	12		8				4	114	mag%		21	30											ring	amul	circ	helm											0
Emerald	283	100	1	1	16		12				4	114	mag%		10	20											jewl														0
Lizard's	284	100	1	1	1		1				4	115	mana		3	7											lcha														0
Lizard's	285	100	1	1	7		5				4	115	mana		8	13											lcha														0
Lizard's	286	100	1	1	13		9				4	115	mana		14	20											lcha														0
Snake's	287	100	1	1	19		14				4	115	mana		21	26											lcha														0
Snake's	288	100	1	1	25		18				4	115	mana		27	33											lcha														0
Snake's	289	100	1	1	31		23				4	115	mana		34	39											lcha														0
Serpent's	290	100	1	1	37		29				4	115	mana		40	46											lcha														0
Serpent's	291	100	1	1	43		35				4	115	mana		47	52											lcha														0
Serpent's	292	100	1	1	49		41				4	115	mana		53	59											lcha														0
Lizard's	293	100	1	1	1		1				4	115	mana		2	4											mcha														0
Lizard's	294	100	1	1	9		6				4	115	mana		5	7											mcha														0
Lizard's	295	100	1	1	17		12				4	115	mana		8	12											mcha														0
Snake's	296	100	1	1	25		18				4	115	mana		13	18											mcha														0
Snake's	297	100	1	1	33		25				4	115	mana		19	23											mcha														0
Serpent's	298	100	1	1	41		33				4	115	mana		24	29											mcha														0
Serpent's	299	100	1	1	49		41				4	115	mana		30	34											mcha														0
Lizard's	300	100	1	1	16		12				4	115	mana		1	2											scha														0
Lizard's	301	100	1	1	16		12				4	115	mana		3	7											scha														0
Snake's	302	100	1	1	32		24				4	115	mana		8	12											scha														0
Serpent's	303	100	1		48		40				4	115	mana		13	17											scha														0
Lizard's	304	1	1	1	3	28	2				4	115	mana		3	5											armo	ring	amul	rod	orb			boot	glov						0
Snake's	305	1	1	1	6	31	4				4	115	mana		5	10											shld	rod	belt	ring	amul	circ	misl								0
Serpent's	306	1	1	1	14	39	10				3	115	mana		11	20											shld	rod	circ	misl											0
Serpent's	307	1	1	1	37	62	27				2	115	mana		11	20											tors	weap	orb					rod							0
Drake's	308	1	1	1	20		15				2	115	mana		21	30									1	cblu	rod	ring	amul	orb	circ	misl									0
Dragon's	309	1	1	1	24		18				2	115	mana		31	40									1	cblu	rod	ring	amul	orb	circ	misl									0
Dragon's	310	1	1	1	52		39				2	115	mana		31	40									1	cblu	tors	boot	glov												0
Wyrm's	311	1	1	1	30		22				2	115	mana		41	60									1	cblu	rod	ring	amul	orb	circ										0
Great Wyrm's	312	100	1	1	37		29				2	115	mana		61	90									1	cblu	rod	ring	amul	orb	circ										0
Bahamut's	313	100	1	1	45		37				2	115	mana		91	120									1	cblu	rod	ring	amul	orb	circ										0
Zircon	314	100	1	1	3		2				2	115	mana		5	10									1	cblu	jewl														0
Jacinth	315	100	1	1	17		12				2	115	mana		11	15									1	cblu	jewl														0
Turquoise	316	100	1	1	29		21				2	115	mana		16	20									1	cblu	jewl														0
Shimmering	317	100	1		8		6				1	116	res-all		3	6									1	lpur	lcha													1280	500
Shimmering	318	100	1		14		10				1	116	res-all		8	12									1	lpur	lcha													1280	1500
Shimmering	319	100	1		35		27				1	116	res-all		13	15									1	lpur	lcha													1280	5000
Shimmering	320	100	1		17		12				1	116	res-all		3	5									1	lpur	mcha													1280	1500
Shimmering	321	100	1		34		26				1	116	res-all		6	8									1	lpur	mcha													1280	5000
Shimmering	322	100	1		33		25				1	116	res-all		3	5											scha													1280	10000
Shimmering	323	100	1	1	6	31	4				5	116	res-all		3	7									1	lpur	shld													1280	500
Rainbow	324	100	1	1	18		13				5	116	res-all		8	11									1	lpur	shld													1280	2000
Scintillating	325	100	1	1	28		21				5	116	res-all		12	15									1	lpur	shld													1280	4000
Prismatic	326	1	1	1	39		31				4	116	res-all		16	20									1	lpur	shld													1280	8000
Chromatic	327	100	1	1	50		42				4	116	res-all		21	30									1	lpur	shld													1280	16000
Shimmering	328	100	1	1	8	33	6				5	116	res-all		3	7									1	lpur	amul	circ												1280	3000
Rainbow	329	100	1	1	21		15				5	116	res-all		8	11									1	lpur	amul	circ												1280	6000
Scintillating	330	100	1	1	34		25				5	116	res-all		12	15									1	lpur	amul	circ	misl											1280	12000
Prismatic	331	1	1	1	42		31				4	116	res-all		16	20									1	lpur	amul	circ												1280	24000
Chromatic	332	100	1		55		41				3	116	res-all		21	30									1	lpur	amul	circ												1280	32000
Shimmering	333	100	1	1	45		37				3	116	res-all		3	7									1	lpur	ring													1280	4000
Rainbow	334	100	1	1	56		48				2	116	res-all		8	11									1	lpur	ring													1280	8000
Scintillating	335	100	1		67		59				2	116	res-all		12	15									1	lpur	ring													1280	16000
Shimmering	336	100	1	1	16		12				1	116	res-all		5	10									1	lpur	jewl	misl												1280	3000
Scintillating	337	100	1		34		26				1	116	res-all		11	15									1	lpur	jewl													1280	8000
Azure	338	100	1	1	1		1				2	117	res-cold		7	15											lcha														0
Lapis	339	100	1	1	10		7				2	117	res-cold		16	20											lcha														0
Cobalt	340	100	1	1	20		15				2	117	res-cold		21	25									1	lblu	lcha														0
Sapphire	341	100	1		30		22				2	117	res-cold		26	30									1	lblu	lcha														0
Azure	342	100	1	1	1		1				2	117	res-cold		4	7											mcha														0
Lapis	343	100	1	1	16		12				2	117	res-cold		8	10											mcha														0
Cobalt	344	100	1	1	25		18				2	117	res-cold		11	12									1	lblu	mcha														0
Sapphire	345	100	1		35		27				2	117	res-cold		13	15									1	lblu	mcha														0
Azure	346	100	1	1	1		1				2	117	res-cold		3	5											scha														0
Lapis	347	100	1	1	14		10				2	117	res-cold		6	7											scha														0
Cobalt	348	100	1	1	27		20				2	117	res-cold		8	9											scha														0
Sapphire	349	100	1		40		32				2	117	res-cold		10	11											scha														0
Azure	350	1	1	1	5	30	3				2	117	res-cold		5	10											armo	weap	ring	amul	orb	circ	misl								0
Lapis	351	1	1	1	12		9				4	117	res-cold		11	20											armo	ring	amul	orb	circ	misl									0
Lapis	352	1	1	1	35		26				2	117	res-cold		11	20											weap							orb							0
Cobalt	353	1	1	1	18		13				3	117	res-cold		21	30											armo	ring	amul	orb	circ	misl									0
Cobalt	354	1	1	1	55		41				2	117	res-cold		21	30											weap							orb							0
Sapphire	355	1	1	1	25		18				3	117	res-cold		31	40									1	lblu	rod	boot	amul	orb	circ										0
Lapis Lazuli	356	100	1	1	2		1				4	117	res-cold		5	15									1	lblu	jewl														0
Sapphire	357	100	1	1	19		14				4	117	res-cold		16	30									1	lblu	jewl														0
Crimson	358	100	1	1	1		1				2	118	res-fire		7	15											lcha														0
Russet	359	100	1	1	10		7				2	118	res-fire		16	20											lcha														0
Garnet	360	100	1	1	20		15				2	118	res-fire		21	25									1	lred	lcha														0
Ruby	361	100	1		30		22				2	118	res-fire		26	30									1	lred	lcha														0
Crimson	362	100	1	1	1		1				2	118	res-fire		4	7											mcha														0
Russet	363	100	1	1	16		12				2	118	res-fire		8	10											mcha														0
Garnet	364	100	1	1	25		18				2	118	res-fire		11	12									1	lred	mcha														0
Ruby	365	100	1		35		27				2	118	res-fire		13	15									1	lred	mcha														0
Crimson	366	100	1	1	1		1				2	118	res-fire		3	5											scha														0
Russet	367	100	1	1	14		10				2	118	res-fire		6	7											scha														0
Garnet	368	100	1		27		20				2	118	res-fire		8	9											scha														0
Ruby	369	100	1	1	40		32				2	118	res-fire		10	11											scha														0
Russet	370	1	1	1	12		9				4	118	res-fire		11	20											armo	ring	amul	orb	circ	misl									0
Russet	371	1	1	1	35		26				1	118	res-fire		11	20											weap							orb							0
Garnet	372	1	1	1	18		13				3	118	res-fire		21	30											armo	ring	amul	orb	circ	misl									0
Garnet	373	1	1	1	55		41				1	118	res-fire		21	30											weap							orb							0
Ruby	374	1	1	1	25		18				3	118	res-fire		31	40									1	lred	rod	boot	amul	orb	circ										0
Garnet	375	100	1	1	2		1				4	117	res-fire		5	15									1	lred	jewl														0
Ruby	376	100	1	1	18		13				4	117	res-fire		16	30									1	lred	jewl														0
Tangerine	377	100	1	1	1		1				2	119	res-ltng		7	15											lcha														0
Ocher	378	100	1	1	10		7				2	119	res-ltng		16	20											lcha														0
Coral	379	100	1	1	20		15				2	119	res-ltng		21	25									1	lyel	lcha														0
Amber	380	100	1		30		22				2	119	res-ltng		26	30									1	lyel	lcha														0
Tangerine	381	100	1	1	1		1				2	119	res-ltng		4	7											mcha														0
Ocher	382	100	1	1	16		12				2	119	res-ltng		8	10											mcha														0
Coral	383	100	1	1	25		18				2	119	res-ltng		11	12									1	lyel	mcha														0
Amber	384	100	1		35		27				2	119	res-ltng		13	15									1	lyel	mcha														0
Tangerine	385	100	1	1	1		1				2	119	res-ltng		3	5											scha														0
Ocher	386	100	1	1	14		10				2	119	res-ltng		6	7											scha														0
Coral	387	100	1	1	27		20				2	119	res-ltng		8	9											scha														0
Amber	388	100	1		40		32				2	119	res-ltng		10	11											scha														0
Tangerine	389	1	1	1	5	45	3				4	119	res-ltng		5	10											armo	weap	ring	amul	orb	circ	misl								0
Ocher	390	1	1	1	12		9				4	119	res-ltng		11	20											armo	ring	amul	orb	circ	misl									0
Ocher	391	1	1	1	35		26				1	119	res-ltng		11	20											weap							orb							0
Coral	392	1	1	1	18		13				3	119	res-ltng		21	30											armo	ring	amul	orb	circ	misl									0
Coral	393	1	1	1	55		41				1	119	res-ltng		21	30											weap							orb							0
Amber	394	1	1	1	25		18				3	119	res-ltng		31	40									1	lyel	rod	boot	amul	orb	circ										0
Camphor	395	100	1	1	2		1				4	117	res-ltng		5	15									1	lyel	jewl														0
Ambergris	396	100	1	1	19		14				4	117	res-ltng		16	30									1	lyel	jewl														0
Beryl	397	100	1	1	1		1				2	120	res-pois		7	15											lcha														0
Viridian	398	100	1	1	10		7				2	120	res-pois		16	20											lcha														0
Jade	399	100	1	1	20		15				2	120	res-pois		21	25									1	cgrn	lcha														0
Emerald	400	100	1		30		22				2	120	res-pois		26	30									1	cgrn	lcha														0
Beryl	401	100	1	1	1		1				2	120	res-pois		4	7											mcha														0
Viridian	402	100	1	1	16		12				2	120	res-pois		8	10											mcha														0
Jade	403	100	1	1	25		18				2	120	res-pois		11	12									1	cgrn	mcha														0
Emerald	404	100	1		35		27				2	120	res-pois		13	15									1	cgrn	mcha														0
Beryl	405	100	1	1	1		1				2	120	res-pois		3	5											scha														0
Viridian	406	100	1	1	14		10				2	120	res-pois		6	7											scha														0
Jade	407	100	1	1	27		20				2	120	res-pois		8	9											scha														0
Emerald	408	100	1		40		32				2	120	res-pois		10	11											scha														0
Beryl	409	1	1	1	5	45	3				4	120	res-pois		5	10											armo	weap	ring	amul	orb	circ	misl								0
Viridian	410	1	1	1	12		9				4	120	res-pois		11	20											armo	ring	amul	orb	circ	misl									0
Viridian	411	1	1	1	35		26				1	120	res-pois		11	20											weap							orb							0
Jade	412	1	1	1	18		13				3	120	res-pois		21	30											armo	ring	amul	orb	circ	misl									0
Jade	413	1	1	1	55		41				1	120	res-pois		21	30											weap							orb							0
Emerald	414	1	1	1	25		18				3	120	res-pois		31	40									1	cgrn	rod	boot	amul	orb	circ										0
Beryl	415	100	1	1	2		1				4	117	res-pois		5	15									1	cgrn	jewl														0
Jade	416	100	1	1	19		14				4	117	res-pois		16	30									1	cgrn	jewl														0
Triumphant	417	1	1	1	3		2				4	121	mana-kill		1	5											weap	ring	circ	tors	helm	shld	misl								0
Victorious	418	100	1	1	17		12				0	121	mana-kill		2	5											weap	circ	tors	helm	shld	misl									0
Aureolin	419	100	1	1	12		9				4	121	mana-kill		1	3											jewl														0
Mechanist's	420	100	1	1	10		7				3	122	sock		1	2											weap	shld	helm	tors	circ			thro							0
Artificer's	421	100	1		33		25				2	122	sock	3													weap	shld	helm	tors				thro							0
Jeweler's	422	100	1		55		47				1	122	sock	4													weap	shld	helm	tors				thro							0
Assamic	423	100	1	1	3	43	1				2	123	att-demon		25	50	dmg-demon		10	25							weap	circ						wand	orb						0
Arcadian	424	100	1	1	15	55	11				2	123	att-demon		51	100	dmg-demon		26	50							weap	circ	helm					wand	orb						0
Unearthly	425	100	1	1	25		18				1	123	att-demon		101	150	dmg-demon		51	100							weap							wand	orb						0
Astral	426	100	1	1	35		26				1	123	att-demon		151	200	dmg-demon		101	150							weap							wand	orb						0
Elysian	427	100	1	1	45		33				1	123	att-demon		201	300	dmg-demon		151	200					1	dgld	weap							wand	orb						0
Celestial	428	100	1	1	55		41				1	123	att-demon		301	400	dmg-demon		201	300					1	dgld	weap							wand	orb						0
Diamond	429	100	1	1	26		19				1	123	att-demon		25	50	dmg-demon		25	40							jewl														0
Fletcher's	430	100	1		50		42	ama			1	125	skilltab	0	1	1											lcha	lchp													0
Acrobat's	431	100	1		50		42	ama			1	125	skilltab	1	1	1											lcha	lchp													0
Harpoonist's	432	100	1		50		42	ama			1	125	skilltab	2	1	1											lcha	lchp													0
Fletcher's	433	100	1	1	20		15	ama			1	125	skilltab	0	1	1											miss	glov	circ	misl	amul										0
Bowyer's	434	100	1	1	40		30	ama			1	125	skilltab	0	2	2									1	lgld	miss	glov	circ	misl	amul										0
Archer's	435	100	1		60		45	ama			1	125	skilltab	0	3	3									1	lgld	miss	glov	circ	misl	amul										0
Acrobat's	436	100	1	1	20		15	ama			1	125	skilltab	1	1	1											glov	amul	circ	misl											0
Gymnast's	437	100	1	1	40		30	ama			1	125	skilltab	1	2	2									1	lgld	glov	amul	circ	misl											0
Athlete's	438	100	1		60		45	ama			1	125	skilltab	1	3	3									1	lgld	glov	amul	circ	misl											0
Harpoonist's	439	100	1	1	20		15	ama			1	125	skilltab	2	1	1											spea	glov	amul	circ											0
Spearmaiden's	440	100	1	1	40		30	ama			1	125	skilltab	2	2	2									1	lgld	spea	glov	amul	circ											0
Lancer's	441	100	1	1	60		45	ama			1	125	skilltab	2	3	3									1	lgld	spea														0
Burning	442	100	1	1	50		42	sor			1	125	skilltab	3	1	1											lcha	lchp													0
Sparking	443	100	1	1	50		42	sor			1	125	skilltab	4	1	1											lcha	lchp													0
Chilling	444	100	1	1	50		42	sor			1	125	skilltab	5	1	1											lcha	lchp													0
Burning	445	100	1	1	20		15	sor			1	125	skilltab	3	1	1											staf	orb	amul	circ											0
Blazing	446	100	1	1	40		30	sor			1	125	skilltab	3	2	2									1	lgld	staf	orb	amul	circ											0
Volcanic	447	100	1		60		45	sor			1	125	skilltab	3	3	3									1	lgld	staf	orb	amul	circ											0
Sparking	448	100	1	1	20		15	sor			1	125	skilltab	4	1	1											staf	orb	amul	circ											0
Charged	449	100	1	1	40		30	sor			1	125	skilltab	4	2	2									1	lgld	staf	orb	amul	circ											0
Powered	450	100	1		60		45	sor			1	125	skilltab	4	3	3									1	lgld	staf	orb	amul	circ											0
Chilling	451	100	1	1	20		15	sor			1	125	skilltab	5	1	1											staf	orb	amul	circ											0
Freezing	452	100	1	1	40		30	sor			1	125	skilltab	5	2	2									1	lgld	staf	orb	amul	circ											0
Glacial	453	100	1		60		45	sor			1	125	skilltab	5	3	3									1	lgld	staf	orb	amul	circ											0
Hexing	454	100	1	1	50		42	nec			1	125	skilltab	6	1	1											lcha	lchp													0
Fungal	455	100	1	1	50		42	nec			1	125	skilltab	7	1	1											lcha	lchp													0
Graverobber's	456	100	1	1	50		42	nec			1	125	skilltab	8	1	1											lcha	lchp													0
Hexing	457	100	1	1	20		15	nec			1	125	skilltab	6	1	1											wand	head	amul	circ											0
Blighting	458	100	1	1	40		30	nec			1	125	skilltab	6	2	2									1	lgld	wand	head	amul	circ											0
Accursed	459	100	1		60		45	nec			1	125	skilltab	6	3	3									1	lgld	wand	head	amul	circ											0
Fungal	460	100	1	1	20		15	nec			1	125	skilltab	7	1	1											wand	head	amul	knif	circ			tkni							0
Noxious	461	100	1	1	40		30	nec			1	125	skilltab	7	2	2									1	lgld	wand	head	amul	knif	circ			tkni							0
Venomous	462	100	1		60		45	nec			1	125	skilltab	7	3	3									1	lgld	wand	head	amul	knif	circ			tkni							0
Graverobber's	463	100	1	1	20		15	nec			1	125	skilltab	8	1	1											wand	head	amul	circ											0
Vodoun	464	100	1	1	40		30	nec			1	125	skilltab	8	2	2									1	lgld	wand	head	amul	circ											0
Golemlord's	465	100	1		60		45	nec			1	125	skilltab	8	3	3									1	lgld	wand	head	amul	circ											0
Lion Branded	466	100	1	1	50		42	pal			1	125	skilltab	9	1	1											lcha	lchp													0
Captain's	467	100	1	1	50		42	pal			1	125	skilltab	10	1	1											lcha	lchp													0
Preserver's	468	100	1	1	50		42	pal			1	125	skilltab	11	1	1											lcha	lchp													0
Lion Branded	469	100	1	1	20		15	pal			1	125	skilltab	9	1	1											scep	swor	mace	shld	ashd	amul	circ								0
Hawk Branded	470	100	1	1	40		30	pal			1	125	skilltab	9	2	2									1	lgld	scep	swor	mace	shld	ashd	amul	circ								0
Rose Branded	471	100	1		60		45	pal			1	125	skilltab	9	3	3									1	lgld	scep	swor	mace	shld	ashd	amul	circ								0
Captain's	472	100	1	1	20		15	pal			1	125	skilltab	10	1	1											scep	swor	mace	shld	ashd	amul	circ								0
Commander's	473	100	1	1	40		30	pal			1	125	skilltab	10	2	2									1	lgld	scep	swor	mace	shld	ashd	amul	circ								0
Marshal's	474	100	1		60		45	pal			1	125	skilltab	10	3	3									1	lgld	scep	swor	mace	shld	ashd	amul	circ								0
Preserver's	475	100	1	1	20		15	pal			1	125	skilltab	11	1	1											shld	ashd	amul	circ											0
Warder's	476	100	1	1	40		30	pal			1	125	skilltab	11	2	2									1	lgld	shld	ashd	amul	circ											0
Guardian's	477	100	1		60		45	pal			1	125	skilltab	11	3	3									1	lgld	shld	ashd	amul	circ											0
Expert's	478	100	1	1	50		42	bar			1	125	skilltab	12	1	1											lcha	lchp													0
Fanatic	479	100	1	1	50		42	bar			1	125	skilltab	13	1	1											lcha	lchp													0
Sounding	480	100	1	1	50		42	bar			1	125	skilltab	14	1	1											lcha	lchp													0
Expert's	481	100	1	1	20		15	bar			1	125	skilltab	12	1	1											phlm	weap	helm					miss	rod	knif					0
Veteran's	482	100	1	1	40		30	bar			1	125	skilltab	12	2	2									1	lgld	phlm	weap	helm					miss	rod	knif					0
Master's	483	100	1		60		45	bar			1	125	skilltab	12	3	3									1	lgld	phlm	weap	helm					miss	rod	knif					0
Fanatic	484	100	1	1	20		15	bar			1	125	skilltab	13	1	1											phlm	weap	amul					miss	rod	knif					0
Raging	485	100	1	1	40		30	bar			1	125	skilltab	13	2	2									1	lgld	phlm	weap	amul					miss	rod	knif					0
Furious	486	100	1		60		45	bar			1	125	skilltab	13	3	3									1	lgld	phlm	weap	amul					miss	rod	knif					0
Sounding	487	100	1	1	20		15	bar			1	125	skilltab	14	1	1											phlm	weap	amul					miss	rod	knif					0
Resonant	488	100	1	1	40		30	bar			1	125	skilltab	14	2	2									1	lgld	phlm	weap	amul					miss	rod	knif					0
Echoing	489	100	1		60		45	bar			1	125	skilltab	14	3	3									1	lgld	phlm	weap	amul					miss	rod	knif					0
Trainer's	490	100	1	1	50		42	dru			1	125	skilltab	15	1	1											lcha	lchp													0
Spiritual	491	100	1	1	50		42	dru			1	125	skilltab	16	1	1											lcha	lchp													0
Nature's	492	100	1	1	50		42	dru			1	125	skilltab	17	1	1											lcha	lchp													0
Trainer's	493	100	1	1	20		15	dru			1	125	skilltab	15	1	1											club	pelt	amul	circ											0
Caretaker's	494	100	1	1	40		30	dru			1	125	skilltab	15	2	2									1	lgld	club	pelt	amul	circ											0
Keeper's	495	100	1		60		45	dru			1	125	skilltab	15	3	3									1	lgld	club	pelt	amul	circ											0
Spiritual	496	100	1	1	20		15	dru			1	125	skilltab	16	1	1											club	pelt	amul	circ											0
Feral	497	100	1	1	40		30	dru			1	125	skilltab	16	2	2									1	lgld	club	pelt	amul	circ											0
Communal	498	100	1		60		45	dru			1	125	skilltab	16	3	3									1	lgld	club	pelt	amul	circ											0
Nature's	499	100	1	1	20		15	dru			1	125	skilltab	17	1	1											club	pelt	amul	circ											0
Terra's	500	100	1	1	40		30	dru			1	125	skilltab	17	2	2									1	lgld	club	pelt	amul	circ											0
Gaea's	501	100	1		60		45	dru			1	125	skilltab	17	3	3									1	lgld	club	pelt	amul	circ											0
Entrapping	502	100	1	1	50		42	ass			1	125	skilltab	18	1	1											lcha	lchp													0
Mentalist's	503	100	1	1	50		42	ass			1	125	skilltab	19	1	1											lcha	lchp													0
Shogukusha's	504	100	1	1	50		42	ass			1	125	skilltab	20	1	1											lcha	lchp													0
Entrapping	505	100	1	1	20		15	ass			1	125	skilltab	18	1	1											h2h	amul	circ	knif				tkni							0
Trickster's	506	100	1	1	40		30	ass			1	125	skilltab	18	2	2									1	lgld	h2h	amul	circ	knif				tkni							0
Cunning	507	100	1		60		45	ass			1	125	skilltab	18	3	3									1	lgld	h2h	amul	circ	knif				tkni							0
Mentalist's	508	100	1	1	20		15	ass			1	125	skilltab	19	1	1											h2h	amul	helm	circ	knif			tkni							0
Psychic	509	100	1	1	40		30	ass			1	125	skilltab	19	2	2									1	lgld	h2h	amul	helm	circ	knif			tkni							0
Shadow	510	100	1		60		45	ass			1	125	skilltab	19	3	3									1	lgld	h2h	amul	helm	circ	knif			tkni							0
Shogukusha's	511	100	1	1	20		15	ass			1	125	skilltab	20	1	1											h2h	amul	glov	circ	knif			tkni							0
Sensei's	512	100	1	1	40		30	ass			1	125	skilltab	20	2	2									1	lgld	h2h	amul	glov	circ	knif			tkni							0
Kenshi's	513	100	1		60		45	ass			1	125	skilltab	20	3	3									1	lgld	h2h	amul	glov	circ	knif			tkni							0
Miocene	514	100			1		1				0	101	ac/lvl	6											1	whit	tors														0
Miocene	515	100		1	1		1				0	101	ac/lvl	1											1	whit	glov	boot	belt	shld											0
Oligocene	516	100		1	10		7				0	101	ac/lvl	9											1	whit	tors														0
Oligocene	517	100		1	10		7				0	101	ac/lvl	2											1	whit	glov	boot	belt	shld											0
Eocene	518	100		1	20		15				0	101	ac/lvl	18											1	whit	tors														0
Eocene	519	100		1	20		15				0	101	ac/lvl	3											1	whit	glov	boot	belt	shld											0
Paleocene	520	100	1	1	30		22				0	101	ac/lvl	24											1	whit	tors														0
Paleocene	521	100	1	1	30		22				0	101	ac/lvl	4											1	whit	glov	boot	belt	shld											0
Knave's	522	100			1		1				1	111	dmg/lvl	1			att/lvl	10							1	whit	weap							staf	wand	orb					0
Jack's	523	100		1	10		7				1	111	dmg/lvl	2			att/lvl	15							1	whit	weap							staf	wand	orb					0
Jester's	524	100		1	20		15				1	111	dmg/lvl	3			att/lvl	22							1	whit	weap							staf	wand	orb					0
Joker's	525	100		1	35		26				1	111	dmg/lvl	4			att/lvl	33							1	whit	weap							staf	wand	orb					0
Trump	526	100	1	1	50		37				7	111	dmg/lvl	4			att/lvl	33							1	whit	weap							staf	wand	orb					0
Loud	527	100			1		1				1	105	dmg/lvl	2											1	whit	weap							staf	wand	orb					0
Calling	528	100		1	10		7				1	105	dmg/lvl	3											1	whit	weap							staf	wand	orb					0
Yelling	529	100		1	20		15				1	105	dmg/lvl	4											1	whit	weap							staf	wand	orb					0
Shouting	530	100		1	35		26				1	105	dmg/lvl	5											1	whit	weap							staf	wand	orb					0
Gritty	531	100	1	1	50		37				7	105	dmg/lvl	6											1	whit	weap							staf	wand	orb					0
Paradox	532	100		1	25		18				1	101	ac%/lvl	12											1	whit	tors														0
Paradox	533	100		1	25		18				1	105	dmg%/lvl	12											1	whit	weap							staf	wand	orb					0
Robineye	534	100			1		1				1	111	att/lvl	4											1	whit	weap							staf	wand	orb					0
Sparroweye	535	100			10		7				1	111	att/lvl	6											1	whit	weap							staf	wand	orb					0
Falconeye	536	100			20		15				1	111	att/lvl	8											1	whit	weap							staf	wand	orb					0
Hawkeye	537	100	1		35		26				0	111	att/lvl	12											1	whit	weap							staf	wand	orb					0
Eagleeye	538	100			50		37				1	111	att/lvl	16											1	whit	weap							staf	wand	orb					0
Visionary	539	100	1	1	25		18				0	111	att%/lvl	2											1	whit	helm	miss													0
Mnemonic	540	100	1	1	25		18				0	115	mana/lvl	6											1	cblu	helm														0
Snowflake	541	100	1	1	25	50	18				3	137	cold-len		25	25	cold-min		20	30	cold-max		64	101	1	lblu	weap	misl													0
Shivering	542	100	1	1	35	60	26				2	137	cold-len		50	50	cold-min		37	56	cold-max		115	166	1	lblu	weap	misl													0
Boreal	543	100	1	1	50		40				1	137	cold-len		75	75	cold-min		46	62	cold-max		131	256	1	lblu	weap	misl													0
Hibernal	544	100	1	1	70		60				1	137	cold-len		100	100	cold-min		60	112	cold-max		226	348	1	lblu	weap	misl													0
Ember	545	100	1	1	25	50	18				3	138	fire-min		28	43	fire-max		53	103					1	dred	weap	misl													0
Smoldering	546	100	1	1	35	60	26				2	138	fire-min		47	72	fire-max		109	161					1	dred	weap	misl													0
Smoking	547	100	1	1	47		37				1	138	fire-min		81	128	fire-max		145	208					1	dred	weap	misl													0
Flaming	548	100	1	1	61		51				1	138	fire-min		138	204	fire-max		224	306					1	dred	weap	misl													0
Scorching	549	100	1	1	77		67				1	138	fire-min		217	306	fire-max		325	432					1	dred	weap	misl													0
Static	550	100	1	1	25	50	18				3	139	ltng-min		1	1	ltng-max		49	120					1	lyel	weap	circ	misl												0
Glowing	551	100	1	1	34	60	25				2	139	ltng-min		1	1	ltng-max		121	180					1	lyel	weap	misl													0
Buzzing	552	100	1	1	46		36				1	139	ltng-min		1	1	ltng-max		181	260					1	lyel	weap	misl													0
Arcing	553	100	1	1	60		50				1	139	ltng-min		1	1	ltng-max		287	396					1	lyel	weap	misl													0
Shocking	554	100	1	1	76		66				1	139	ltng-min		1	1	ltng-max		433	576					1	lyel	weap	misl													0
Septic	555	100	1	1	1	41	1				3	140	dmg-pois	50	31	31									1	dgrn	weap	circ	misl												0
Envenomed	556	100	1	1	10	35	7				2	140	dmg-pois	50	123	123									1	dgrn	weap	misl													0
Corosive	557	100	1	1	20	45	15				1	140	dmg-pois	50	400	400									1	dgrn	weap	misl													0
Toxic	558	100	1	1	35		26				1	140	dmg-pois	50	1160	1160									1	dgrn	weap	misl													0
Pestilent	559	100	1	1	50		37				1	140	dmg-pois	50	1970	1970									1	dgrn	weap	misl													0
Maiden's	560	1	1	1	36		27	ama			4	125	ama		1	1											amul	circ													0
Valkyrie's	561	1	1	1	90		67	ama			2	125	ama		2	2									1	cgrn	amul	circ													0
Maiden's	562	1	1	1	30		22	ama			4	125	ama		1	1											miss	spea													0
Valkyrie's	563	1	1	1	50		42	ama			2	125	ama		2	2									1	cgrn	miss	spea													0
Monk's	564	1	1	1	36		27	pal			4	125	pal		1	1											amul	circ													0
Priest's	565	1	1	1	90		67	pal			2	125	pal		2	2									1	cgrn	amul	circ													0
Monk's	566	1	1	1	30		22	pal			4	125	pal		1	1											scep	ashd													0
Priest's	567	1	1	1	50		42	pal			2	125	pal		2	2									1	cgrn	scep	ashd													0
Monk's	568	1	1	1	35		27	pal			4	125	pal		1	1											swor	mace	hamm	shld											0
Priest's	569	1	1	1	65		58	pal			2	125	pal		2	2									1	cgrn	swor	mace	hamm	shld											0
Summoner's	570	1	1	1	36		27	nec			4	125	nec		1	1											amul	circ													0
Necromancer's	571	1	1	1	90		67	nec			2	125	nec		2	2									1	cgrn	amul	circ													0
Summoner's	572	1	1	1	30		22	nec			4	125	nec		1	1											wand	knif	head					tkni							0
Necromancer's	573	1	1	1	50		42	nec			2	125	nec		2	2									1	cgrn	wand	knif	head					tkni							0
Angel's	574	1	1	1	36		27	sor			4	125	sor		1	1											amul	circ													0
Arch-Angel's	575	1	1	1	90		67	sor			2	125	sor		2	2									1	cgrn	amul	circ													0
Angel's	576	1	1	1	30		22	sor			4	125	sor		1	1											staf	orb													0
Arch-Angel's	577	1	1	1	50		42	sor			2	125	sor		2	2									1	cgrn	staf	orb													0
Slayer's	578	1	1	1	36		27	bar			4	125	bar		1	1											amul	circ													0
Berserker's	579	1	1	1	90		67	bar			2	125	bar		2	2									1	cgrn	amul	circ													0
Slayer's	580	1	1	1	30		22	bar			4	125	bar		1	1											tkni	axe	spea	club	swor	hamm	mace	jave							0
Berserker's	581	1	1	1	50		42	bar			1	125	bar		2	2									1	cgrn	tkni	axe	spea	club	swor	hamm	mace	jave							0
Slayer's	582	100	1	1	30		22	bar			4	125	bar		1	1											phlm														0
Berserker's	583	100	1	1	50		42	bar			2	125	bar		2	2									1	cgrn	phlm														0
Shaman's	584	100	1	1	36		27	dru			4	125	dru		1	1											amul	circ													0
Hierophant's	585	100	1	1	90		67	dru			2	125	dru		2	2									1	cgrn	amul	circ													0
Shaman's	586	100	1	1	30		22	dru			4	125	dru		1	1											club	pelt													0
Hierophant's	587	100	1	1	50		42	dru			2	125	dru		2	2									1	cgrn	club	pelt													0
Magekiller's	588	100	1	1	36		27	ass			4	125	ass		1	1											amul	circ													0
Witch-hunter's	589	100	1	1	90		67	ass			2	125	ass		2	2									1	cgrn	amul	circ													0
Magekiller's	590	100	1	1	30		22	ass			4	125	ass		1	1											h2h	knif						tkni							0
Witch-hunter's	591	100	1	1	50		42	ass			2	125	ass		2	2									1	cgrn	h2h	knif						tkni							0
Compact	592	100			1		1				0	141	stack		20	40											thro														0
Thin	593	100			17		12				0	141	stack		41	80											thro														0
Dense	594	100			38		30				0	141	stack		81	120											thro														0
Consecrated	595	100	1	1	1	26	1				4	142	att-undead		25	75	dmg-undead		25	75							weap							wand	orb						0
Pure	596	100	1	1	15	40	11				3	142	att-undead		76	175	dmg-undead		76	125						lgld	weap							wand	orb						0
Sacred	597	100	1	1	25		18				2	142	att-undead		175	250	dmg-undead		126	200						lgld	weap							wand	orb						0
Hallowed	598	100	1	1	35		27				1	142	att-undead		251	325	dmg-undead		201	275						lgld	weap							wand	orb						0
Divine	599	100	1	1	45		37				1	142	att-undead		326	450	dmg-undead		276	350						lgld	weap							wand	orb						0
Pearl	600	100	1	1	18		13				1	142	att-undead		25	50	dmg-undead		25	50							jewl														0
Crimson	601	1	1	1	5	30	3				4	118	res-fire		5	10											armo	ring	amul	orb	circ	weap	misl								0
Red	602	100	1	1	15	40	11				4	103	dmg-min		1	1									1	dred	lcha														0
Sanguinary	603	100	1	1	45		37				4	103	dmg-min		2	2									1	dred	lcha														0
Bloody	604	100	1		75		67				4	103	dmg-min		3	3									1	dred	lcha														0
Red	605	100	1	1	30		22				4	103	dmg-min		1	1									1	dred	mcha														0
Sanguinary	606	100	1		60		52				4	103	dmg-min		2	2									1	dred	mcha														0
Red	607	100	1	1	90		82				4	103	dmg-min		1	1											scha														0
Jagged	608	100	1	1	7	32	5				4	104	dmg-max		1	1									1	blac	lcha														0
Forked	609	100	1	1	37		29				4	104	dmg-max		2	2									1	blac	lcha														0
Serrated	610	100	1		67		59				4	104	dmg-max		3	3									1	blac	lcha														0
Jagged	611	100	1	1	22		16				4	104	dmg-max		1	1									1	blac	mcha														0
Forked	612	100	1		52		44				4	104	dmg-max		2	2									1	blac	mcha														0
Jagged	613	100	1	1	81		73				4	104	dmg-max		1	1											scha														0
Snowflake	614	100	1	1	27	52	20				2	137	cold-len		25	25	cold-min		3	5	cold-max		5	11			lcha														0
Shivering	615	100	1	1	42		34				1	137	cold-len		25	25	cold-min		8	11	cold-max		12	22			lcha														0
Boreal	616	100	1	1	66		58				1	137	cold-len		25	25	cold-min		11	16	cold-max		27	43	1	lblu	lcha														0
Hibernal	617	100	1		91		83				1	137	cold-len		25	25	cold-min		30	35	cold-max		54	73	1	lblu	lcha														0
Snowflake	618	100	1	1	18	43	13				2	137	cold-len		25	25	cold-min		2	4	cold-max		4	8			mcha														0
Shivering	619	100	1	1	29		21				1	137	cold-len		25	25	cold-min		6	8	cold-max		10	16			mcha														0
Boreal	620	100	1	1	49		41				1	137	cold-len		25	25	cold-min		12	16	cold-max		20	30	1	lblu	mcha														0
Hibernal	621	100	1		69		61				1	137	cold-len		25	25	cold-min		22	26	cold-max		40	54	1	lblu	mcha														0
Snowflake	622	100	1	1	9	34	6				2	137	cold-len		25	25	cold-min		1	2	cold-max		2	4			scha														0
Shivering	623	100	1	1	15		11				1	137	cold-len		25	25	cold-min		3	4	cold-max		5	8			scha														0
Boreal	624	100	1	1	30		22				1	137	cold-len		25	25	cold-min		6	8	cold-max		10	16			scha														0
Hibernal	625	100	1		45		38				1	137	cold-len		25	25	cold-min		11	13	cold-max		20	27			scha														0
Ember	626	100	1	1	21	46	15				2	138	fire-min		1	1	fire-max		2	3							lcha														0
Smoldering	627	100	1	1	40		32				1	138	fire-min		5	8	fire-max		11	27							lcha														0
Smoking	628	100	1	1	64		56				1	138	fire-min		11	24	fire-max		30	51					1	lred	lcha														0
Flaming	629	100	1		89		81				1	138	fire-min		27	51	fire-max		54	78					1	lred	lcha														0
Ember	630	100	1	1	13	38	9				2	138	fire-min		2	2	fire-max		4	6							mcha														0
Smoldering	631	100	1	1	27		20				1	138	fire-min		4	6	fire-max		8	20							mcha														0
Smoking	632	100	1	1	47		39				1	138	fire-min		8	18	fire-max		22	38					1	lred	mcha														0
Flaming	633	100	1		67		59				1	138	fire-min		20	38	fire-max		40	58					1	lred	mcha														0
Ember	634	100	1	1	5	30	3				2	138	fire-min		1	1	fire-max		2	3							scha														0
Smoldering	635	100	1	1	15		11				1	138	fire-min		2	3	fire-max		4	10							scha														0
Smoking	636	100	1	1	28		21				1	138	fire-min		4	9	fire-max		11	19							scha														0
Flaming	637	100	1		43		35				1	138	fire-min		10	19	fire-max		20	29							scha														0
Static	638	100	1	1	23	48	17				2	139	ltng-min		1	1	ltng-max		16	30							lcha														0
Glowing	639	100	1	1	41		33				1	139	ltng-min		1	1	ltng-max		22	46							lcha														0
Arcing	640	100	1	1	65		57				1	139	ltng-min		1	1	ltng-max		46	81					1	whit	lcha														0
Shocking	641	100	1		90		82				1	139	ltng-min		1	1	ltng-max		84	135					1	whit	lcha														0
Static	642	100	1	1	14	39	10				2	139	ltng-min		1	1	ltng-max		12	22							mcha														0
Glowing	643	100	1	1	28		20				1	139	ltng-min		1	1	ltng-max		16	34							mcha														0
Arcing	644	100	1	1	48		40				1	139	ltng-min		1	1	ltng-max		34	60					1	whit	mcha														0
Shocking	645	100	1		68		60				1	139	ltng-min		1	1	ltng-max		62	100					1	whit	mcha														0
Static	646	100	1	1	7	32	5				2	139	ltng-min		1	1	ltng-max		6	11							scha														0
Glowing	647	100	1	1	14		10				1	139	ltng-min		1	1	ltng-max		8	17							scha														0
Arcing	648	100	1	1	29		21				1	139	ltng-min		1	1	ltng-max		17	30							scha														0
Shocking	649	100	1		44		36				1	139	ltng-min		1	1	ltng-max		31	50							scha														0
Septic	650	100	1	1	18	43	13				2	140	dmg-pois	50	70	70											lcha														0
Envenomed	651	100	1	1	39		31				1	140	dmg-pois	50	185	185											lcha														0
Toxic	652	100	1	1	63		55				1	140	dmg-pois	50	350	350									1	dgrn	lcha														0
Pestilent	653	100	1		88		80				1	140	dmg-pois	50	895	895									1	dgrn	lcha														0
Septic	654	100	1	1	9	34	6				2	140	dmg-pois	50	50	50											mcha														0
Envenomed	655	100	1	1	26		19				1	140	dmg-pois	50	135	135											mcha														0
Toxic	656	100	1	1	46		38				1	140	dmg-pois	50	255	255									1	dgrn	mcha														0
Pestilent	657	100	1		66		58				1	140	dmg-pois	50	665	665									1	dgrn	mcha														0
Septic	658	100	1	1	1	26	1				2	140	dmg-pois	50	25	25											scha														0
Envenomed	659	100	1	1	12		9				1	140	dmg-pois	50	68	68											scha														0
Toxic	660	100	1	1	27		20				1	140	dmg-pois	50	128	128											scha														0
Pestilent	661	100	1		42		34				1	140	dmg-pois	50	335	335											scha														0
Tireless	662	1	1	1	1	5	1				0	108	regen-stam		10	10											boot														0
Lizard's	663	1	1	1	1	2	1				4	115	mana		1	2											armo	ring	amul	rod	orb			boot	glov						0
Azure	664	1	1	1	1	4	1				3	117	res-cold		5	5											armo	ring	amul	orb	circ										0
Crimson	665	1	1	1	1	4	1				3	118	res-fire		5	5											armo	ring	amul	orb	circ										0
Tangerine	666	1	1	1	1	4	1				3	119	res-ltng		5	5											armo	ring	amul	orb	circ										0
Beryl	667	1	1	1	1	4	1				3	120	res-pois		5	5											armo	ring	amul	orb	circ										0
Godly	668	100	1	1	50		43				1	101	ac%		101	200									1	dgld	armo														0
Cruel	669	100	1	1	56		48				1	105	dmg%		201	300									1	blac	weap							staf	wand	orb					0
	670																																								0
Champion's	671	1	1	1	1		1				2	150	map-glob-monsterrarity		30	40											t1m	t2m	t3m												0
Flaming	672	1	1	1	1		1				2	151	map-mon-extra-fire		5	10	map-glob-density		13	18	map-play-addxp		3	4			t1m	t2m	t3m												0
Ember	673	1	1	1	1		1				2	151	map-mon-extra-fire		10	15	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
Smoldering	674	1	1	1	1		1				2	151	map-mon-extra-fire		15	20	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
Hibernal	675	1	1	1	1		1				2	152	map-mon-extra-cold		5	10	map-glob-density		13	15	map-play-mag-gold%		15	20			t1m	t2m	t3m												0
Snowflake	676	1	1	1	1		1				2	152	map-mon-extra-cold		10	15	map-glob-density		15	18	map-play-mag-gold%		25	30			t2m	t3m													0
Shivering	677	1	1	1	1		1				2	152	map-mon-extra-cold		15	20	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Static	678	1	1	1	1		1				2	153	map-mon-extra-ltng		5	10	map-glob-density		13	20	map-play-addxp		3	4			t1m	t2m	t3m												0
Glowing	679	1	1	1	1		1				2	153	map-mon-extra-ltng		10	15	map-glob-density		18	23	map-play-addxp		4	5			t2m	t3m													0
Arcing	680	1	1	1	1		1				2	153	map-mon-extra-ltng		15	20	map-glob-density		23	25	map-play-addxp		5	6			t3m	t4m													0
Toxic	681	1	1	1	1		1				2	154	map-mon-extra-pois		5	10	map-glob-density		15	20	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Pestilent	682	1	1	1	1		1				2	154	map-mon-extra-pois		10	15	map-glob-density		20	25	map-play-mag-gold%		15	20			t2m	t3m													0
Septic	683	1	1	1	1		1				2	154	map-mon-extra-pois		15	20	map-glob-density		25	30	map-play-mag-gold%		25	30			t3m	t4m													0
Magic	684	1	1	1	1		1				2	155	map-mon-extra-mag		5	10	map-glob-density		13	18	map-play-mag-gold%		10	15																	0
Arcane	685	1	1	1	1		1				2	155	map-mon-extra-mag		10	15	map-glob-density		18	23	map-play-mag-gold%		15	20																	0
Ancient	686	1	1	1	1		1				2	155	map-mon-extra-mag		15	20	map-glob-density		23	25	map-play-mag-gold%		20	25																	0
Promoted	687	1	1	1	1		1				2	300	map-glob-arealevel		1	1	map-play-addxp		3	4	map-play-mag-gold%		15	20																	0
Elevated	688	1	1	1	1		1				2	300	map-glob-arealevel		1	1	map-play-addxp		4	5	map-play-mag-gold%		20	25																	0
Ascended	689	1	1	1	1		1				2	300	map-glob-arealevel		1	1	map-play-addxp		5	6	map-play-mag-gold%		30	35																	0
Silver	690	1	1	1	1		1				2	156	map-mon-att-pierce		30	50	map-glob-density		8	10	map-play-mag-gold%		15	20			t1m	t2m	t3m												0
Shining	691	1	1	1	1		1				2	156	map-mon-att-pierce		50	70	map-glob-density		15	18	map-play-mag-gold%		30	35			t2m	t3m													0
Opulent	692	1	1	1	1		1				2	156	map-mon-att-pierce		70	90	map-glob-density		18	20	map-play-mag-gold%		45	50			t3m	t4m													0
Fast	693	1	1	1	1		1				2	305	map-mon-att-cast-speed		40	60	map-glob-density		15	20	map-play-addxp		3	4			t1m	t2m	t3m												0
Speedy	694	1	1	1	1		1				2	305	map-mon-att-cast-speed		60	80	map-glob-density		20	25	map-play-addxp		4	5			t2m	t3m													0
Ludicrous	695	1	1	1	1		1				2	305	map-mon-att-cast-speed		80	100	map-glob-density		25	30	map-play-addxp		5	6			t3m	t4m													0
Large	696	1	1	1	1		1				1	311	map-mon-hp%		5	15	map-glob-density		15	20	map-play-addxp		6	8			t1m	t2m	t3m												0
Huge	697	1	1	1	1		1				1	311	map-mon-hp%		15	25	map-glob-density		20	25	map-play-addxp		8	10			t2m	t3m													0
Colossal	698	1	1	1	1		1				1	311	map-mon-hp%		25	35	map-glob-density		25	30	map-play-addxp		10	12			t3m	t4m													0
Strong	699	1	1	1	1		1				2	158	map-mon-ed%		10	15	map-play-addxp		4	5	map-play-mag-gold%		10	15			t1m	t2m	t3m												0
Mighty	700	1	1	1	1		1				2	158	map-mon-ed%		15	20	map-play-addxp		5	6	map-play-mag-gold%		25	30			t2m	t3m													0
Formidable	701	1	1	1	1		1				2	158	map-mon-ed%		20	25	map-play-addxp		6	7	map-play-mag-gold%		40	45			t3m	t4m													0
Splashing	702	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		8	13	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Splashing	703	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		18	23	map-play-mag-gold%		20	25			t2m	t3m													0
Splashing	704	1	1	1	1		1				2	157	map-mon-splash	358	100	1	map-glob-density		23	25	map-play-mag-gold%		35	40			t3m	t4m													0
Bloody	705	1	1	1	1		1				2	312	map-mon-openwounds		5	10	map-play-addxp		4	5	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Gory	706	1	1	1	1		1				2	312	map-mon-openwounds		10	15	map-play-addxp		5	6	map-play-mag-gold%		20	25			t2m	t3m													0
Sanguinary	707	1	1	1	1		1				2	312	map-mon-openwounds		15	20	map-play-addxp		6	7	map-play-mag-gold%		35	40			t3m	t4m													0
Unhealthy	708	1	1	1	1		1				2	315	map-play-regen		-40	-30	map-play-addxp		3	4	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Sickly	709	1	1	1	1		1				2	315	map-play-regen		-60	-50	map-play-addxp		4	5	map-play-mag-gold%		20	25			t2m	t3m													0
Diseased	710	1	1	1	1		1				2	315	map-play-regen		-80	-70	map-play-addxp		5	6	map-play-mag-gold%		35	40			t3m	t4m													0
Crushing	711	1	1	1	1		1				2	163	map-mon-crush		15	25	map-glob-density		8	10	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Smashing	712	1	1	1	1		1				2	163	map-mon-crush		25	35	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Obliterating	713	1	1	1	1		1				2	163	map-mon-crush		35	45	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Sparking	714	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Shocking	715	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Thunderous	716	1	1	1	1		1				2	164	map-mon-phys-as-extra-ltng		80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Chilling	717	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Boreal	718	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Glacial	719	1	1	1	1		1				2	165	map-mon-phys-as-extra-cold	25	80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Smoking	720	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		60	80	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Molten	721	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		70	90	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Volcanic	722	1	1	1	1		1				2	166	map-mon-phys-as-extra-fire		80	100	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Poisonous	723	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	123	163	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Envenomed	724	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	143	184	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Plagued	725	1	1	1	1		1				2	167	map-mon-phys-as-extra-pois	125	163	205	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Runic	726	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		8	10	map-glob-density		13	15	map-play-mag-gold%		5	10			t1m	t2m	t3m												0
Taboo	727	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		10	12	map-glob-density		15	18	map-play-mag-gold%		20	25			t2m	t3m													0
Occult	728	1	1	1	1		1				2	168	map-mon-phys-as-extra-mag		12	14	map-glob-density		18	20	map-play-mag-gold%		35	40			t3m	t4m													0
Stygian	729	1	1	1	1		1				1	169	map-glob-add-mon-doll		690	690	map-glob-density		25	30	map-play-mag-gold%		40	45			t1m	t2m	t3m					t4m							0
Lustful	730	1	1	1	1		1				1	169	map-glob-add-mon-succ		885	885	map-glob-density		25	30	map-play-mag-gold%		45	50			t1m	t2m	t3m					t4m							0
Vampiric	731	1	1	1	1		1				1	169	map-glob-add-mon-vamp		697	697	map-glob-density		18	20	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Bovine	732	1	1	1	1		1				1	169	map-glob-add-mon-cow		391	391	map-glob-density		25	30	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Reanimated	733	1	1	1	1		1				1	169	map-glob-add-mon-horde		698	698	map-glob-density		25	30	map-play-mag-gold%		35	40			t1m	t2m	t3m					t4m							0
Ghastly	734	1	1	1	1		1				1	169	map-glob-add-mon-ghost		1111	1111	map-glob-density		18	20	map-play-mag-gold%		15	20			t1m	t2m	t3m					t4m							0
Blood Letting	735	1	1	1	13		12				2	200	heal-kill		1	5											weap	ring	circ	tors	helm	shld	misl								0
Murderous	736	100	1	1	51		44				0	200	heal-kill		2	5											weap	circ	tors	helm	shld	misl									0
Blood Sucking	737	100	1	1	32		26				2	200	heal-kill		1	3											jewl														0
Channeling	738	100	1	1	14		14				3	201	extra-ltng		2	2											mcha	mchp													0
Cold	739	100	1	1	14		14				3	201	extra-cold		2	2											mcha	mchp													0
Cinder	740	100	1	1	14		14				3	201	extra-fire		2	2											mcha	mchp													0
Morbid	741	100	1	1	14		14				3	201	extra-pois		2	2											mcha	mchp													0
Sparkling	742	100	1	1	14		14				3	201	extra-magi		2	2											mcha	mchp													0
Discharging	743	100	1	1	28		28				3	201	extra-ltng		2	3											mcha														0
Frigid	744	100	1	1	28		28				3	201	extra-cold		2	3											mcha														0
Wildfire	745	100	1	1	28		28				3	201	extra-fire		2	3											mcha														0
Malicious	746	100	1	1	28		28				3	201	extra-pois		2	3											mcha														0
Effervescent	747	100	1	1	28		28				3	201	extra-magi		2	3											mcha														0
Conduit	748	100	1	1	42		42				2	201	extra-ltng		3	3											mcha														0
Numbing	749	100	1	1	42		42				2	201	extra-cold		3	3											mcha														0
Inferno	750	100	1	1	42		42				2	201	extra-fire		3	3											mcha														0
Infectious	751	100	1	1	42		42				2	201	extra-pois		3	3											mcha														0
Scintillating	752	100	1	1	42		42				2	201	extra-magi		3	3											mcha														0
Visceral	753	100	1	1	75		69				1	105	dmg%		301	400									1	blac	weap							staf	wand	orb					0
Divine	754	100	1	1	45		37				0	142	att-undead		326	450	dmg-undead		276	350						lgld	miss														0
Celestial	755	100	1	1	55		41				0	123	att-demon		301	400	dmg-demon		201	300					1	dgld	miss														0
Grandmaster's	756	100	1	1	69		61				0	111	att		251	300	dmg%		151	200					1	dgld	miss														0
Supporting	757	1	1	1	25	50	18				2	105	dmg%		10	20											tors	shld													0
Reinforcing	758	1	1	1	35	60	28				2	105	dmg%		20	40											tors	shld													0
Empowering	759	1	1	1	45		38				2	105	dmg%		40	60											tors	shld													0
Bolstering	760	1	1	1	55		48				2	105	dmg%		60	80											tors	shld													0
Fortifying	761	1	1	1	65		58				2	105	dmg%		80	120											tors	shld													0
Embattled	762	1	1	1	75		68				2	105	dmg%		120	160											tors	shld													0
Rampaging	763	1	1	1	85		78				1	105	dmg%		160	200											tors														0
Lancer's	764	100	1	1	60		45	ama			1	125	skilltab	2	3	3									1	lgld	aspe														0
Archer's	765	100	1	1	60		45	ama			1	125	skilltab	0	3	3									1	lgld	miss														0
Artificer's	766	100	1	1	33		25				2	122	sock	3													weap	shld	tors					thro							0
Artificer's	767	100	1		33		25				2	122	sock	3													weap	shld	helm	tors				thro							0
Lancer's	768	100	1		60		45	ama			1	125	skilltab	2	3	3									1	lgld	circ	glov													0
Maiden's	769	1	1	1	36		27	ama			1	125	ama		1	1											tors	shld	helm												95000
Monk's	770	1	1	1	36		27	pal			1	125	pal		1	1											tors	shld	helm												95000
Summoner's	771	1	1	1	36		27	nec			1	125	nec		1	1											tors	shld	helm												95000
Angel's	772	1	1	1	36		27	sor			1	125	sor		1	1											tors	shld	helm												95000
Slayer's	773	1	1	1	36		27	bar			1	125	bar		1	1											tors	shld	helm												95000
Shaman's	774	100	1	1	36		27	dru			1	125	dru		1	1											tors	shld	helm												95000
Magekiller's	775	100	1	1	36		27	ass			1	125	ass		1	1											tors	shld	helm												95000
Cerulean	776	100	1	1	49		41				2	115	mana		21	30									1	cblu	jewl														0
Lancer's	777	100	1		60		45	ama			1	125	skilltab	2	3	3									1	lgld	amul														0
Souless	778	1	1	1	1		1				1	169	map-glob-add-mon-souls		918	918	map-glob-density		25	30	map-play-mag-gold%		50	60			t1m	t2m	t3m					t4m							0
Shamanic	779	1	1	1	1		1				1	169	map-glob-add-mon-fetish		785	785	map-glob-density		20	25	map-play-mag-gold%		25	30			t1m	t2m	t3m					t4m							0
Strange	780	100	1		32		24				5	110	att		151	300									1	lgld	misl														0
Unearthly	781	100	1		25		18				1	123	att-demon		101	150	dmg-demon		51	100							misl														0
Plague	782	100	1	1	50		37				1	140	dmg-pois	150	626	626									1	dgrn	weap	misl													0
Savage	783	1	1		26		19				7	105	dmg%		66	80									1	dgld	misl														0
Cardinal	784	100	1	1	38		30				4	103	dmg-min		10	14									1	dred	jewl	misl													0
Penetrating	785	100	1	1	15		10				4	143	pierce		5	10											misl														0
Puncturing	786	100	1	1	30		25				3	143	pierce		11	20											misl														0
Piercing	787	100	1	1	45		40				2	143	pierce		21	30											misl														0
Impaling	788	100	1		60		55				2	143	pierce		31	40											misl														0
Devout	789	100	1	1	3		1				4	142	att-undead		25	50	dmg-undead		10	25							misl														0
Consecrated	790	100	1	1	15		11				4	142	att-undead		25	75	dmg-undead		25	75							misl														0
Pure	791	100	1		25		18				3	142	att-undead		76	175	dmg-undead		76	125						lgld	misl														0
Duplicated	792	1	1	1	1		1				1	169	map-glob-extra-boss		1	1											t1m	t2m	t3m												0
Champion's	793	1	1	1	1		1				2	150	map-glob-monsterrarity		40	50											t2m	t3m													0
Champion's	794	1	1	1	1		1				2	150	map-glob-monsterrarity		50	60											t3m	t4m													0
Shrieking	795	1	1	1	1		1				1	169	map-glob-add-mon-shriek		1047	1047	map-glob-density		25	30	map-play-mag-gold%		20	30			t1m	t2m	t3m					t4m							0
Crimson	796	100	1	1	38		30				4	103	dmg-min		5	8									1	dred	misl														0
Serpent's	797	1	1	1	14		10				3	115	mana		11	20											ring	amul	belt												0
Serpent's	798	1	1	1	37		27				2	115	mana		11	20											boot	glov													0
Jagged	799	1	1	1	1		1				9	105	dmg%		10	20											misl							staf	wand	orb					0
Deadly	800	1	1	1	5		3				9	105	dmg%		21	30											misl							staf	wand	orb					0
Vicious	801	1	1	1	8		6				8	105	dmg%		31	40											misl							staf	wand	orb					0
Brutal	802	1	1	1	14		10				8	105	dmg%		41	50											misl							staf	wand	orb					0
Massive	803	1	1	1	20		15				7	105	dmg%		51	65									1	dgld	misl							staf	wand	orb					0
Assamic	804	100	1	1	3	28	1				2	123	att-demon		25	50	dmg-demon		10	25							misl							wand	orb						0
Arcadian	805	100	1	1	15	40	11				2	123	att-demon		51	100	dmg-demon		26	50							misl							wand	orb						0
Cultist's	806	100	1	1	28	53	25				4	170	openwounds		20	20	deep-wounds		30	40							weap	misl						staf	wand	orb					0
Bloodthirster's	807	100	1	1	48		45				4	170	openwounds		20	20	deep-wounds		136	190							weap	misl						staf	wand	orb					0
Gorelust's	808	100	1	1	68		65				4	170	openwounds		20	20	deep-wounds		224	310							weap	misl						staf	wand	orb					0
Cultist's	809	100	1	1	28	53	25				3	170	openwounds		5	5	deep-wounds		30	40							jewl														0
Bloodthirster's	810	100	1	1	48		45				3	170	openwounds		5	5	deep-wounds		65	85							jewl														0
Gorelust's	811	100	1	1	68		65				3	170	openwounds		5	5	deep-wounds		95	125							jewl														0
Ember	812	100	1	1	25	50	18				3	138	fire-min		16	25	fire-max		31	60					1	dred	circ														0
Snowflake	813	100	1	1	25	50	18				3	137	cold-len		25	25	cold-min		6	9	cold-max		19	30	1	lblu	circ														0
Virulent	814	100	1	1	76		66				1	140	dmg-pois	50	3780	3780									1	dgrn	weap	misl													0
Infectious	815	100	1	1	76		66				1	140	dmg-pois	50	4535	4535									1	dgrn	knif	sc9						tkni							0
Fine	816	100	1		28		21				4	111	att		10	10	dmg-max		2	2							schp														0
Shimmering	817	100	1		33		25				1	116	res-all		3	3											schp														0
Lapis	818	100	1	1	14		10				2	117	res-cold		7	7											schp														0
Russet	819	100	1	1	14		10				2	118	res-fire		7	7											schp														0
Ocher	820	100	1	1	14		10				2	119	res-ltng		7	7											schp														0
Viridian	821	100	1	1	14		10				2	120	res-pois		7	7											schp														0
Sizzling	822	100	1	1	10	29	8				2	171	pierce-fire		2	4											miss	scep	crys	orb	assn										0
Singeing	823	100	1	1	30	59	26				2	171	pierce-fire		4	6											miss	scep	crys	orb	assn										0
Infernal	824	100	1	1	60		53				2	171	pierce-fire		6	10											miss	scep	crys	orb	assn										0
Frigid	825	100	1	1	10	29	8				2	171	pierce-cold		2	4											miss	scep	crys	orb	assn										0
Frostbitten	826	100	1	1	30	59	26				2	171	pierce-cold		4	6											miss	scep	crys	orb	assn										0
Subzero	827	100	1	1	60		53				2	171	pierce-cold		6	10											miss	scep	crys	orb	assn										0
Crackling	828	100	1	1	10	29	8				2	171	pierce-ltng		2	4											jave	scep	crys	orb	assn										0
Jolting	829	100	1	1	30	59	26				2	171	pierce-ltng		4	6											jave	scep	crys	orb	assn										0
Surging	830	100	1	1	60		53				2	171	pierce-ltng		6	10											jave	scep	crys	orb	assn										0
Decaying	831	100	1	1	10	29	9				2	171	pierce-pois		2	4											jave	wand	assn												0
Festering	832	100	1	1	30	59	26				2	171	pierce-pois		4	6											jave	wand	assn												0
Necrotic	833	100	1	1	60		53				2	171	pierce-pois		6	10											jave	wand	assn												0
Sizzling	822	100	1	1	10	29	8				2	171	pierce-fire		3	6											staf														0
Singeing	823	100	1	1	30	59	26				2	171	pierce-fire		6	10											staf														0
Infernal	824	100	1	1	60		53				2	171	pierce-fire		10	15											staf														0
Frigid	825	100	1	1	10	29	8				2	171	pierce-cold		3	6											staf														0
Frostbitten	826	100	1	1	30	59	26				2	171	pierce-cold		6	10											staf														0
Subzero	827	100	1	1	60		53				2	171	pierce-cold		10	15											staf														0
Crackling	828	100	1	1	10	29	8				2	171	pierce-ltng		3	6											staf	aspe													0
Jolting	829	100	1	1	30	59	26				2	171	pierce-ltng		6	10											staf	aspe													0
Surging	830	100	1	1	60		53				2	171	pierce-ltng		10	15											staf	aspe													0
Maiden's	831	1	1	1	60		53	ama			1	125	ama		1	1											ring														0
Monk's	832	1	1	1	60		53	pal			1	125	pal		1	1											ring														0
Summoner's	833	1	1	1	60		53	nec			1	125	nec		1	1											ring														0
Angel's	834	1	1	1	60		53	sor			1	125	sor		1	1											ring														0
Slayer's	835	1	1	1	60		53	bar			1	125	bar		1	1											ring														0
Shaman's	836	100	1	1	60		53	dru			1	125	dru		1	1											ring														0
Magekiller's	837	100	1	1	60		53	ass			1	125	ass		1	1											ring														0
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
of Flame	187	100	1	1	40	65	30				2	12	fire-min		1	1	fire-max		2	6							glov	ring	amul												0
of Passion	188	100	1	1	15		11				2	12	fire-min		1	3	fire-max		6	10					1	dred	jewl														0
of Shock	189	1	1	1	4	29	3				5	13	ltng-min		1	1	ltng-max		3	8							weap	misl						wand	orb						0
of Lightning	190	1	1	1	15	40	11				4	13	ltng-min		1	1	ltng-max		14	24							weap	misl						wand	orb						0
of Thunder	191	1	1	1	25		18				3	13	ltng-min		1	1	ltng-max		34	84					1	dyel	weap	misl						wand	orb						0
of Storms	192	100	1	1	34		26				2	13	ltng-min		1	6	ltng-max		85	126					1	dyel	mele	misl						wand	orb						0
of Shock	193	100	1	1	45	70	37				2	13	ltng-min		1	1	ltng-max		11	23							boot	ring	amul												0
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
of the Jackal	313	1	1	1	1	26	1				3	26	hp		1	5											tors	belt	amul	phlm	circ										0
of the Fox	314	1	1	1	7	32	5				3	26	hp		6	10											tors	belt	amul	phlm	circ	misl									0
of the Wolf	315	1	1	1	15	40	11				3	26	hp		11	20											tors	misl	phlm	circ											0
of the Tiger	316	1	1	1	20		15				3	26	hp		21	30											tors	belt	amul	phlm	circ	misl									0
of the Mammoth	317	1	1	1	25		18				3	26	hp		31	40									1	cred	tors	belt	amul	phlm	circ	misl									0
of the Colosuss	318	1	1	1	30		22				3	26	hp		41	60									1	cred	tors	belt	amul	phlm	circ										0
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
of Traveling	397	100	1	1	65		57				4	35	move3		26	35	stamdrain		80	90							boot														0
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
of Readiness	675	1	1	1	20		15				2	9	swing1		10	10											glov														0
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
of Damage	922	100	1	1	1		1				3	1001	dmg%		10	20											amul	ring													0
of Damage	923	100	1	1	20		15				3	1001	dmg%		21	40											amul	ring													0
of Damage	924	100	1	1	40		35				3	1001	dmg%		41	60											amul	ring													0
of Damage	925	100	1	1	60		55				3	1001	dmg%		61	80											amul														0
of Deadly Strike	926	100	1	1	20		15				3	1002	deadly		5	15											amul														0
of Deadly Strike	927	100	1	1	50		45				3	1002	deadly		16	25											amul														0
of Fire	928	100	1	1	20		15				2	1003	extra-fire		5	10											amul	ring	shld												0
of Fire	929	100	1	1	40		35				2	1003	extra-fire		11	20											amul	ring	shld												0
of Fire	929	100	1	1	60		55				2	1003	extra-fire		21	30											amul	shld													0
of Cold	930	100	1	1	20		15				2	1003	extra-cold		5	10											amul	ring	shld												0
of Cold	931	100	1	1	40		35				2	1003	extra-cold		11	20											amul	ring	shld												0
of Cold	932	100	1	1	60		55				2	1003	extra-cold		21	30											amul	shld													0
of Lightning	933	100	1	1	20		15				2	1003	extra-ltng		5	10											amul	ring	shld												0
of Lightning	934	100	1	1	40		35				2	1003	extra-ltng		11	20											amul	ring	shld												0
of Lightning	935	100	1	1	60		55				2	1003	extra-ltng		21	30											amul	shld													0
of Poison 	936	100	1	1	20		15				2	1003	extra-pois		5	10											amul	ring	shld												0
of Poison 	937	100	1	1	40		35				2	1003	extra-pois		11	20											amul	ring	shld												0
of Poison 	938	100	1	1	60		55				2	1003	extra-pois		21	30											amul	shld													0
of Attack Speed	939	100	1	1	30		25				4	1004	swing2		10	20											amul														0
of Crushing Blow	940	100	1	1	30		25				4	1005	crush		5	15											amul														0
of Fire Resistance	941	100	1	1	40		25				1	1006	res-fire-max		1	3											amul	shld													0
of Fire Resistance	942	100	1	1	60		25				1	1006	res-fire-max		4	6											amul	shld													0
of Cold Resistance	943	100	1	1	40		25				1	1007	res-cold-max		1	3											amul	shld													0
of Cold Resistance	944	100	1	1	60		25				1	1007	res-cold-max		4	6											amul	shld													0
of Lightning Resistance	945	100	1	1	40		25				1	1008	res-ltng-max		1	3											amul	shld													0
of Lightning Resistance	946	100	1	1	60		25				1	1008	res-ltng-max		4	6											amul	shld													0
of Poison Resistance	947	100	1	1	40		25				1	1009	res-pois-max		1	3											amul	shld													0
of Poison Resistance	948	100	1	1	60		25				1	1009	res-pois-max		4	6											amul	shld													0
of Attack Speed	949	100	1	1	30		25				4	1010	swing2		5	10											ring														0
of the Apprentice	174	1	1	1	5		3				4	9	cast1		2	4											jewl														0
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
      throw Error('Must load prefixes before showing information');
    }
    var includedPrefixes = this.allPrefixes.filter(affix => this.isAffixIncluded(affix));
    var includedSuffixes = this.allSuffixes.filter(affix => this.isAffixIncluded(affix));
    var prefixTotalWeight = includedPrefixes.map(a => a.frequency).reduce((a,b)=>a+b);
    var suffixTotalWeight = includedSuffixes.map(a => a.frequency).reduce((a,b)=>a+b);
    this.output = 'Prefixes (' + prefixTotalWeight + '):\n' + includedPrefixes.map(p => p.toString()).join('\n')
      + '\n\nSuffixes (' + suffixTotalWeight + '):\n' + includedSuffixes.map(p => p.toString()).join('\n');
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
        return new Affix(
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
