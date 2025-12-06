/*
Pour récupérer les resourcesId, vous pouvez lancer ce code dans l'inspecteur quand vous êtes sur ADE

for (let el of document.querySelectorAll(".x-tree3-node")){
	console.log(el.id.split("_")[1], el.innerText)
}
*/

export let salles = [
	{
	    "name": "INSA Rennes",
	    "rootURL": "https://ade.insa-rennes.fr",
	    "buildings":[] // ajoutez des ressources
	},
	{
	    "name": "ENSC Rennes",
	    "rootURL": "https://planning.ensc-rennes.fr",
	    "buildings":[] // ajoutez des ressources
	},
	{
	    "name": "Université de Rennes",
	    "rootURL": "https://planning.univ-rennes1.fr",
	    "buildings": [
			{
	            "name": "B40",
	            "rooms": [
	                { "name": "007", "projectId": "1", "resourceId": "18444" },
	                { "name": "009", "projectId": "1", "resourceId": "18341" },
	                { "name": "011", "projectId": "1", "resourceId": "21029" },
	                { "name": "013", "projectId": "1", "resourceId": "22246" }
	            ]
	        },
	        {
	            "name": "B41",
	            "rooms": [
	                { "name": "001", "projectId": "1", "resourceId": "22873" },
	                { "name": "002", "projectId": "1", "resourceId": "22874" },
	                { "name": "003", "projectId": "1", "resourceId": "22875" },
	                { "name": "004", "projectId": "1", "resourceId": "22876" },
	                { "name": "101", "projectId": "1", "resourceId": "22877" },
	                { "name": "102", "projectId": "1", "resourceId": "22878" },
	                { "name": "103", "projectId": "1", "resourceId": "22879" },
	                { "name": "104", "projectId": "1", "resourceId": "22880" }
	            ]
	        },
	        {
	            "name": "B41B",
	            "rooms": [
	                { "name": "Salle de réunion", "projectId": "1", "resourceId": "22883" }
	            ]
	        },
	        {
	            "name": "B42",
	            "rooms": [
	                { "resourceId": "22886", "name": "Amphi L", "projectId": "1" },
	                { "resourceId": "22887", "name": "Amphi M", "projectId": "1" },
	                { "resourceId": "22888", "name": "Amphi N", "projectId": "1" },
	            ]
	        },
	        {
	            "name": "B02B",
	            "rooms": [
	                { "resourceId": "21887", "name": "E003", "projectId": "1" },
	                { "resourceId": "21888", "name": "E005", "projectId": "1" },
	                { "resourceId": "21889", "name": "E007", "projectId": "1" },
	                { "resourceId": "21890", "name": "E008", "projectId": "1" },
	                { "resourceId": "21892", "name": "E010", "projectId": "1" },
	                { "resourceId": "21893", "name": "E103", "projectId": "1" },
	                { "resourceId": "21898", "name": "E105", "projectId": "1" },
	                { "resourceId": "21899", "name": "E107", "projectId": "1" },
	                { "resourceId": "21900", "name": "E108", "projectId": "1" },
	                { "resourceId": "21901", "name": "E110", "projectId": "1" },
	                { "resourceId": "21902", "name": "E206", "projectId": "1" },
	                { "resourceId": "21904", "name": "E208", "projectId": "1" },
	                { "resourceId": "21905", "name": "E209", "projectId": "1" },
	                { "resourceId": "21906", "name": "E210", "projectId": "1" },
	                { "resourceId": "21909", "name": "E211", "projectId": "1" },
	                { "resourceId": "21910", "name": "E212", "projectId": "1" },
	                { "resourceId": "21914", "name": "E214", "projectId": "1" },
	            ]
	        }
	    ]
	}
]
