/*
Pour récupérer les resourcesId, vous pouvez lancer ce code dans l'inspecteur quand vous êtes sur ADE

for (let el of document.querySelectorAll(".x-tree3-node")){
	console.log(el.id.split("_")[1], el.innerText)
}
*/

export let salles = [
	{
		name: "INSA Rennes",
		"rootURL": "https://ade.insa-rennes.fr",
		"buildings": [] // ajoutez des ressources
	},
	{
		name: "ENSC Rennes",
		"rootURL": "https://planning.ensc-rennes.fr",
		"buildings": [] // ajoutez des ressources
	},
	{
		name: "Université de Rennes",
		"rootURL": "https://planning.univ-rennes1.fr",
		"buildings": [
			{
				name: "B40",
				"rooms": [
					{ projectId: "1", resourceId: "18444", name: "007" },
					{ projectId: "1", resourceId: "18341", name: "009" },
					{ projectId: "1", resourceId: "21029", name: "011" },
					{ projectId: "1", resourceId: "22246", name: "013" }
				]
			},
			{
				name: "B41",
				"rooms": [
					{ projectId: "1", resourceId: "22873", name: "001" },
					{ projectId: "1", resourceId: "22874", name: "002" },
					{ projectId: "1", resourceId: "22875", name: "003" },
					{ projectId: "1", resourceId: "22876", name: "004" },
					{ projectId: "1", resourceId: "22877", name: "101" },
					{ projectId: "1", resourceId: "22878", name: "102" },
					{ projectId: "1", resourceId: "22879", name: "103" },
					{ projectId: "1", resourceId: "22880", name: "104" }
				]
			},
			{
				name: "B41B",
				"rooms": [
					{ projectId: "1", resourceId: "22883", name: "Salle de réunion" }
				]
			},
			{
				name: "B42",
				"rooms": [
					{ projectId: "1", resourceId: "22886", name: "Amphi L" },
					{ projectId: "1", resourceId: "22887", name: "Amphi M" },
					{ projectId: "1", resourceId: "22888", name: "Amphi N" },
				]
			},
			{
				name: "B02B",
				"rooms": [
					{ projectId: "1", resourceId: "21887", name: "E003" },
					{ projectId: "1", resourceId: "21888", name: "E005" },
					{ projectId: "1", resourceId: "21889", name: "E007" },
					{ projectId: "1", resourceId: "21890", name: "E008" },
					{ projectId: "1", resourceId: "21892", name: "E010" },
					{ projectId: "1", resourceId: "21893", name: "E103" },
					{ projectId: "1", resourceId: "21898", name: "E105" },
					{ projectId: "1", resourceId: "21899", name: "E107" },
					{ projectId: "1", resourceId: "21900", name: "E108" },
					{ projectId: "1", resourceId: "21901", name: "E110" },
					{ projectId: "1", resourceId: "21902", name: "E206" },
					{ projectId: "1", resourceId: "21904", name: "E208" },
					{ projectId: "1", resourceId: "21905", name: "E209" },
					{ projectId: "1", resourceId: "21906", name: "E210" },
					{ projectId: "1", resourceId: "21909", name: "E211" },
					{ projectId: "1", resourceId: "21910", name: "E212" },
					{ projectId: "1", resourceId: "21914", name: "E214" },
				]
			},
			{
				name: "B02A",
				"rooms": [
					{ projectId: "1", resourceId: "21721", name: "Amphi A" },
					{ projectId: "1", resourceId: "21722", name: "Amphi B" },
					{ projectId: "1", resourceId: "21725", name: "Amphi C" },
					{ projectId: "1", resourceId: "21726", name: "Amphi D" },
					{ projectId: "1", resourceId: "22725", name: "Amphi E" },
					{ projectId: "1", resourceId: "21734", name: "Amphi L" },
					{ projectId: "1", resourceId: "21756", name: "011" },
					{ projectId: "1", resourceId: "21757", name: "012" },
					{ projectId: "1", resourceId: "21758", name: "013" },
					{ projectId: "1", resourceId: "21759", name: "014" },
					{ projectId: "1", resourceId: "21760", name: "015" },
					{ projectId: "1", resourceId: "21761", name: "016" },
					{ projectId: "1", resourceId: "21762", name: "017" },
					{ projectId: "1", resourceId: "21763", name: "018" },
					{ projectId: "1", resourceId: "21765", name: "202" },
					{ projectId: "1", resourceId: "21766", name: "203" },
					{ projectId: "1", resourceId: "21768", name: "204" },
					{ projectId: "1", resourceId: "21771", name: "205" },
					{ projectId: "1", resourceId: "21772", name: "206" },
					{ projectId: "1", resourceId: "21773", name: "207" },
					{ projectId: "1", resourceId: "21775", name: "208" },
					{ projectId: "1", resourceId: "21776", name: "209" },
					{ projectId: "1", resourceId: "21777", name: "302" },
					{ projectId: "1", resourceId: "21778", name: "303" },
					{ projectId: "1", resourceId: "21781", name: "304" },
					{ projectId: "1", resourceId: "21786", name: "305" },
					{ projectId: "1", resourceId: "21789", name: "306" },
					{ projectId: "1", resourceId: "21794", name: "307" },
					{ projectId: "1", resourceId: "21798", name: "313" },
					{ projectId: "1", resourceId: "21799", name: "314" },
					{ projectId: "1", resourceId: "21808", name: "316" },
					{ projectId: "1", resourceId: "21814", name: "318" },
					{ projectId: "1", resourceId: "21818", name: "319" },
					{ projectId: "1", resourceId: "21820", name: "320" },
					{ projectId: "1", resourceId: "21826", name: "322 et 323" },
					{ projectId: "1", resourceId: "21827", name: "324" },
					{ projectId: "1", resourceId: "21837", name: "327" },
					{ projectId: "1", resourceId: "21839", name: "329" },
					{ projectId: "1", resourceId: "21846", name: "D122" },
					{ projectId: "1", resourceId: "21858", name: "D20" },
					{ projectId: "1", resourceId: "21859", name: "D22" },
					{ projectId: "1", resourceId: "21863", name: "D24" },
					{ projectId: "1", resourceId: "21867", name: "D26" },
					{ projectId: "1", resourceId: "21871", name: "D28" },
					{ projectId: "1", resourceId: "21882", name: "Info Maths (120)" },
					{ projectId: "1", resourceId: "21883", name: "Info Maths (121)" },
					{ projectId: "1", resourceId: "21751", name: "Windows SVE (250)" },
					{ projectId: "1", resourceId: "21795", name: "Windows SVE (308)" },
					{ projectId: "1", resourceId: "21797", name: "Windows SVE (309)" },
				]
			},
			{
				name: "B12D",
				"rooms": [
					{ projectId: "1", resourceId: "22468", name: "Amphi P" },
					{ projectId: "1", resourceId: "22530", name: "Salle Guernesey (903)" },
					{ projectId: "1", resourceId: "22531", name: "Salle Jersey (901)" },
					{ projectId: "1", resourceId: "22536", name: "i-213/ i217 Anglais (213)" },
					{ projectId: "1", resourceId: "14894", name: "i-216 (216)" },
					{ projectId: "1", resourceId: "22508", name: "i-50" },
					{ projectId: "1", resourceId: "22509", name: "i-51" },
					{ projectId: "1", resourceId: "22513", name: "i-52" },
					{ projectId: "1", resourceId: "22515", name: "i-53" },
					{ projectId: "1", resourceId: "22517", name: "i-54" },
					{ projectId: "1", resourceId: "22518", name: "i-55" },
					{ projectId: "1", resourceId: "22519", name: "i-56" },
					{ projectId: "1", resourceId: "22520", name: "i-57" },
					{ projectId: "1", resourceId: "22523", name: "i-58" },
					{ projectId: "1", resourceId: "22525", name: "i-59" },
					{ projectId: "1", resourceId: "22526", name: "i-60" },
					{ projectId: "1", resourceId: "22545", name: "i-211" },
					{ projectId: "1", resourceId: "22548", name: "i-219" },
					{ projectId: "1", resourceId: "22550", name: "i-221" },
					{ projectId: "1", resourceId: "22553", name: "i-225" },
					{ projectId: "1", resourceId: "22557", name: "i-227" },
					{ projectId: "1", resourceId: "22534", name: "i-202" },
					{ projectId: "1", resourceId: "22486", name: "i-203" },
					{ projectId: "1", resourceId: "22569", name: "i-204" },
					{ projectId: "1", resourceId: "22570", name: "i-205" },
					{ projectId: "1", resourceId: "22572", name: "i-206" },
					{ projectId: "1", resourceId: "22573", name: "i-207" },
					{ projectId: "1", resourceId: "22502", name: "i-210" },
					{ projectId: "1", resourceId: "22505", name: "i-214" },
				]
			}
		]
	}
]