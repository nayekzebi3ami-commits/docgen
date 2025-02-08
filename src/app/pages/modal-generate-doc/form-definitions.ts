import { Validators } from "@angular/forms";

export const FORM_DEFINITIONS = {
    test_alcolemie: [
        {
            name: 'genre', label: 'Genre', type: 'select', options: [
                { value: 'M', label: 'Monsieur' },
                { value: 'Mme', label: 'Madame' }
            ], validators: [Validators.required]
        },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'dateSouhaitee', label: 'Date souhaitée sur votre test laboratoire', type: 'date', validators: [Validators.required] },
        { name: 'numeroRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRue', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRue', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostal', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'ville', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'M', label: 'Homme' },
                { value: 'F', label: 'Femme' },
            ], validators: [Validators.required]
        },
    ],
    test_stup_urinaire: [
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'M', label: 'M' },
                { value: 'F', label: 'F' }
            ], validators: [Validators.required]
        },
        { name: 'villeNaissance', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
        {
            name: 'mrMadame', label: 'MR./MME', type: 'select', options: [
                { value: 'MR.', label: 'MR.' },
                { value: 'MME', label: 'MME' }
            ]
            , validators: [Validators.required]
        },
        { name: 'dateTest', label: 'Date souhaitée sur votre test laboratoire', type: 'date', validators: [Validators.required] },
        { name: 'lendemainDateTest', label: 'Lendemain de la date souhaitée', type: 'date', validators: [Validators.required] },
        { name: 'numeroRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRue', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRue', label: 'Nom de la rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostal', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'ville', label: 'Ville', type: 'text', validators: [Validators.required] },
    ],
    test_stup_sanguin: [
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'M', label: 'M' },
                { value: 'F', label: 'F' }
            ], validators: [Validators.required]
        },
        { name: 'villeNaissance', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
        {
            name: 'mrMadame', label: 'MR./MME', type: 'select', options: [
                { value: 'MR.', label: 'MR.' },
                { value: 'MME', label: 'MME' }
            ]
            , validators: [Validators.required]
        },
        { name: 'dateTest', label: 'Date souhaitée sur votre test laboratoire', type: 'date', validators: [Validators.required] },
        { name: 'lendemainDateTest', label: 'Lendemain de la date souhaitée', type: 'date', validators: [Validators.required] },
        { name: 'numeroRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRue', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRue', label: 'Nom de la rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostal', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'ville', label: 'Ville', type: 'text', validators: [Validators.required] },
    ],
    test_psycho: [
        {
            name: 'prefecture', label: 'Préfecture', type: 'select', options: [
                { value: 'Toulon', label: 'Toulon' },
                { value: 'Draguignan', label: 'Draguignan' },
                { value: 'Marseille', label: 'Marseille' },
                { value: 'Nice', label: 'Nice' },
                { value: 'Paris', label: 'Paris' },
            ], validators: [Validators.required]
        },
        { name: 'dateVisitePref', label: 'Date visite médicale', type: 'date', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'profession', label: 'Profession', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        {
            name: 'situationFamiliale', label: 'Situation Familiale', type: 'select', options: [
                { value: 'célibataire', label: 'Célibataire' },
                { value: 'marié', label: 'Marié(e)' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'M', label: 'Masculin' },
                { value: 'F', label: 'Féminin' }
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'numeroRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required], uppercase: true },
        {
            name: 'typeRue', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'nomRue', label: 'Nom de rue', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'codePostal', label: 'Code postal', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'nomVille', label: 'Ville', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'numeroTelephone', label: 'Numéro de téléphone', type: 'text', validators: [Validators.required], uppercase: true },
        {
            name: 'typeSanction', label: 'Sanction', type: 'select', options: [
                { value: 'Suspension administrative', label: 'Suspension administrative' },
                { value: 'Annulation du permis de conduire', label: 'Annulation du permis de conduire' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'dureeSanction', label: 'Durée', type: 'select', options: [
                { value: '1 Mois', label: '1 Mois' },
                { value: '2 Mois', label: '2 Mois' },
                { value: '3 Mois', label: '3 Mois' },
                { value: '4 Mois', label: '4 Mois' },
                { value: '5 Mois', label: '5 Mois' },
                { value: '6 Mois', label: '6 Mois' },
                { value: '7 Mois', label: '7 Mois' },
                { value: '8 Mois', label: '8 Mois' },
                { value: '9 Mois', label: '9 Mois' },
                { value: '10 Mois', label: '10 Mois' },
                { value: '11 Mois', label: '11 Mois' },
                { value: '12 Mois', label: '12 Mois' }
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'dateSouhaiteeTest', label: 'Date souhaitée pour le test', type: 'date', validators: [Validators.required] },
        {
            name: 'mrMadame', label: 'Monsieur/Madame', type: 'select', options: [
                { value: 'Monsieur', label: 'Monsieur' },
                { value: 'Madame', label: 'Madame' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'jesuis', label: 'Je suis', type: 'select', options: [
                { value: 'Il', label: 'Il' },
                { value: 'Elle', label: 'Elle' }
            ], validators: [Validators.required], uppercase: true
        },
    ],

    assr_2: [
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'sessionSouhaitee', label: 'Session souhaitée', type: 'date', validators: [Validators.required] },
        { name: 'villeNaissance', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
    ],

    journee_appel: [
        {
            name: 'genre', label: 'Genre', type: 'select', options: [
                { value: 'Monsieur', label: 'Monsieur' },
                { value: 'Madame', label: 'Madame' }
            ], validators: [Validators.required]
        },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'jourNaissance', label: 'Jour de naissance', type: 'text', validators: [Validators.required] },
        {
            name: 'moisNaissance', label: 'Mois de naissance', type: 'select', options: [
                { value: 'Janvier', label: 'Janvier' },
                { value: 'Février', label: 'Février' },
                { value: 'Mars', label: 'Mars' },
                { value: 'Avril', label: 'Avril' },
                { value: 'Mai', label: 'Mai' },
                { value: 'Juin', label: 'Juin' },
                { value: 'Juillet', label: 'Juillet' },
                { value: 'Août', label: 'Août' },
                { value: 'Septembre', label: 'Septembre' },
                { value: 'Octobre', label: 'Octobre' },
                { value: 'Novembre', label: 'Novembre' },
                { value: 'Décembre', label: 'Décembre' },
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'villeNaissance', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
        {
            name: 'departementNaissance',
            label: 'Département de naissance (83/13 etc)',
            type: 'text',
            validators: [Validators.required, Validators.pattern(/^\d{2}$/), Validators.required, Validators.maxLength(2)],

        }, { name: 'jourSouhaite', label: 'Jour d\'examen souhaité', type: 'text', validators: [Validators.required] },
        { name: 'moisSouhaite', label: 'Mois d\'examen souhaité', type: 'text', validators: [Validators.required] },
        { name: 'anneeSouhaitee', label: 'Année d\'examen souhaitée', type: 'text', validators: [Validators.required] },
    ],

    facture_sfr: [
        {
            name: 'genre', label: 'Genre', type: 'select', options: [
                { value: 'MR', label: 'Monsieur' },
                { value: 'MME', label: 'Madame' }
            ], validators: [Validators.required]
        },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'numeroLigne', label: 'Numéro de téléphone', type: 'text', validators: [Validators.required, Validators.pattern(/^\d{10}$/)] },
        { name: 'email', label: 'Adresse mail', type: 'text', validators: [Validators.required] },
        { name: 'dateFacture', label: 'Date de la facture', type: 'date', validators: [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)] },
        { name: 'rueNum', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        { name: 'rue', label: 'Nom de la rue', type: 'text', validators: [Validators.required] },
        { name: 'departement', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'ville', label: 'Ville', type: 'text', validators: [Validators.required] },

    ],
    cdi_sncf: [
        {
            name: 'genre', label: 'Genre', type: 'select', options: [
                { value: 'Monsieur', label: 'Monsieur' },
                { value: 'Madame', label: 'Madame' }
            ], validators: [Validators.required]
        },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'jourNaissance', label: 'Jour de naissance', type: 'text', validators: [Validators.required] },
        { name: 'moisNaissance', label: 'Mois de naissance', type: 'text', validators: [Validators.required] },
        { name: 'anneeNaissance', label: 'Année de naissance', type: 'text', validators: [Validators.required] },
        { name: 'villeNaissance', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
        { name: 'numeroRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRue', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRue', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostal', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'ville', label: 'Ville', type: 'text', validators: [Validators.required] },
        { name: 'numSecuSociale', label: 'Numéro de sécurité sociale', type: 'text', validators: [Validators.required] },
        { name: 'numDateDebut', label: 'Jour du début du contrat', type: 'text', validators: [Validators.required] },
        { name: 'moisDateDebut', label: 'Mois du début du contrat', type: 'text', validators: [Validators.required] },
        { name: 'anneeDateDebut', label: 'Année du début du contrat', type: 'text', validators: [Validators.required] },
        { name: 'salaire', label: 'Salaire', type: 'text', validators: [Validators.required] },
    ],
};

function transformToUppercase(formDefinitions: any) {
    // Parcourir chaque groupe de formulaires
    for (const formGroupKey in formDefinitions) {
        if (formDefinitions.hasOwnProperty(formGroupKey)) {
            const formGroup = formDefinitions[formGroupKey];

            // Parcourir chaque champ dans le groupe de formulaires
            formGroup.forEach((field: any) => {
                if (field.uppercase) {
                    // Applique la transformation en majuscule à ce champ
                    field.transformValue = (value: string) => {
                        return value ? value.toUpperCase() : value;
                    };
                }
            });
        }
    }
}

// Appliquer la transformation à tous les champs dans FORM_DEFINITIONS
transformToUppercase(FORM_DEFINITIONS);
