import { Form, Validators } from "@angular/forms";

interface FormField {
    name?: string;
    label: string;
    type: 'text' | 'date' | 'select' | 'textarea' | 'section-header'; // Ajout de 'section-header'
    options?: Array<{ value: string, label: string, template?: string }>;
    validators?: Validators[];
    uppercase?: boolean;
    capitalize?: boolean; // Nouvelle propriété
    getTemplate?: (value: string) => string;
}

export const FORM_DEFINITIONS = {
    test_alcolemie: [
        { type: 'section-header', label: '1. Informations personnelles' } as FormField,

        { name: 'nom', label: 'Veuillez saisir votre nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'surn', label: 'Indiquez votre prénom', type: 'text', validators: [Validators.required], capitalize: true },
        { name: 'dateNaissance', label: 'Indiquez votre date de naissance', type: 'date', validators: [Validators.required] },
        {
            name: 'genre', label: 'Sélectionnez votre sexe', type: 'select', options: [
                { value: 'M', label: 'Homme' },
                { value: 'F', label: 'Femme' }
            ], validators: [Validators.required], uppercase: true
        },

        { type: 'section-header', label: '2. Demande de test' } as FormField,

        { name: 'dateSouhaitee', label: 'Indiquez la date à laquelle vous souhaitez passer votre test alcoolémie (attention aux dimanches et jours fériés)', type: 'date', validators: [Validators.required] },

        { type: 'section-header', label: '3. Coordonnées et adresse' } as FormField,

        { name: 'nRue', label: 'Indiquez le numéro de rue de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        {
            name: 'typeRue', label: 'Choisissez le type de voie', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'nmRue', label: 'Indiquez le nom de la rue de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'codePostal', label: 'Saisissez le code postal de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'nmVille', label: 'Indiquez le nom de la ville ou commune où vous résidez', type: 'text', validators: [Validators.required], uppercase: true }
    ],

    test_stup_urinaire: [
        { type: 'section-header', label: '1. Informations personnelles' } as FormField,

        { name: 'blazeeeeeeeeeeeeee', label: 'Veuillez saisir votre nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'suuuuuuuuuuuuuuurn', label: 'Indiquez votre prénom', type: 'text', validators: [Validators.required], capitalize: true },
        { name: 'dateNaissance', label: 'Indiquez votre date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'agg', label: 'Veuillez indiquer votre âge en chiffres', type: 'text', validators: [Validators.required] },
        {
            name: 'binaire', label: 'Sélectionnez votre sexe', type: 'select', options: [
                { value: 'M', label: 'Homme' },
                { value: 'F', label: 'Femme' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'mrM', label: 'Choisissez si vous êtes Monsieur ou Madame', type: 'select', options: [
                { value: 'MR.', label: 'Monsieur' },
                { value: 'MME', label: 'Madame' }
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'villeNaissance', label: 'Indiquez la ville où vous êtes né(e)', type: 'text', validators: [Validators.required], uppercase: true },

        { type: 'section-header', label: '2. Demande de test' } as FormField,

        { name: 'dateTest', label: 'Veuillez indiquer la date à laquelle vous souhaitez passer votre test stupéfiant (attention aux dimanches et jours fériés)', type: 'date', validators: [Validators.required] },
        { name: 'lendemainDateTest', label: 'Indiquez la date du jour suivant celle choisie ci-dessus (exemple au dessus  01/02/2025 ici mettre 02/02/2025)', type: 'date', validators: [Validators.required] },

        { type: 'section-header', label: '3. Coordonnées et adresse' } as FormField,

        { name: 'numeroRue', label: 'Indiquez le numéro de rue de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        {
            name: 'typeRue', label: 'Choisissez le type de voie', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'nomRue', label: 'Indiquez le nom de la rue de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'codePostal', label: 'Saisissez le code postal de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'ville', label: 'Indiquez le nom de la ville ou commune où vous résidez', type: 'text', validators: [Validators.required], uppercase: true },
    ],

    test_stup_sanguin: [
        { type: 'section-header', label: '1. Informations personnelles' } as FormField,

        { name: 'blazeeeeeeeeeeeeee', label: 'Veuillez saisir votre nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'suuuuuuuuuuuuuuurn', label: 'Indiquez votre prénom', type: 'text', validators: [Validators.required], capitalize: true },
        { name: 'dateNaissance', label: 'Indiquez votre date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'agg', label: 'Veuillez indiquer votre âge en chiffres', type: 'text', validators: [Validators.required] },
        {
            name: 'binaire', label: 'Sélectionnez votre sexe', type: 'select', options: [
                { value: 'M', label: 'Homme' },
                { value: 'F', label: 'Femme' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'mrM', label: 'Choisissez si vous êtes Monsieur ou Madame', type: 'select', options: [
                { value: 'MR.', label: 'Monsieur' },
                { value: 'MME', label: 'Madame' }
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'villeNaissance', label: 'Indiquez la ville où vous êtes né(e)', type: 'text', validators: [Validators.required], uppercase: true },

        { type: 'section-header', label: '2. Demande de test' } as FormField,

        { name: 'dateTest', label: 'Veuillez indiquer la date à laquelle vous souhaitez passer votre test stupéfiant (attention aux dimanches et jours fériés)', type: 'date', validators: [Validators.required] },
        { name: 'lendemainDateTest', label: 'Indiquez la date du jour suivant celle choisie ci-dessus', type: 'date', validators: [Validators.required] },

        { type: 'section-header', label: '3. Coordonnées et adresse' } as FormField,

        { name: 'numeroRue', label: 'Indiquez le numéro de rue de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        {
            name: 'typeRue', label: 'Choisissez le type de voie', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required], uppercase: true
        },
        { name: 'nomRue', label: 'Indiquez le nom de la rue de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'codePostal', label: 'Saisissez le code postal de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'ville', label: 'Indiquez le nom de la ville ou commune où vous résidez', type: 'text', validators: [Validators.required], uppercase: true },
    ],

    test_psycho: [
        { type: 'section-header', label: '1. Informations personnelles' } as FormField,

        { name: 'name', label: 'Veuillez saisir votre nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'blaze', label: 'Veuillez saisir votre nom (confirmation)', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'surn', label: 'Indiquez votre prénom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'dateNaissance', label: 'Veuillez indiquer votre date de naissance', type: 'date', validators: [Validators.required] },
        {
            name: 'bin', label: 'Sélectionnez votre sexe', type: 'select', options: [
                { value: 'M', label: 'Homme' },
                { value: 'F', label: 'Femme' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'mrMadame', label: 'Choisissez si vous êtes Monsieur ou Madame', type: 'select', options: [
                { value: 'Monsieur', label: 'Monsieur' },
                { value: 'Madame', label: 'Madame' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'iel', label: 'Choisissez si vous êtes il ou elle', type: 'select', options: [
                { value: 'Il', label: 'Il' },
                { value: 'Elle', label: 'Elle' }
            ], validators: [Validators.required], uppercase: true
        },

        { type: 'section-header', label: '2. Situation familiale et professionnelle' } as FormField,

        { name: 'job', label: 'Mentionnez votre profession actuelle', type: 'text', validators: [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)], uppercase: true },
        {
            name: 'situationFamiliale', label: 'Sélectionnez votre situation familiale', type: 'select', options: [
                { value: 'celibataire', label: 'Célibataire' },
                { value: 'marie(e)', label: 'Marié(e)' }
            ], validators: [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)], uppercase: true
        },

        { type: 'section-header', label: '3. Coordonnées et adresse' } as FormField,

        { name: 'nRu', label: 'Indiquez le numéro de rue de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        {
            name: 'tpue', label: 'Choisissez le type de voie de votre adresse', type: 'select', options: [
                { value: 'Rue', label: 'Rue', template: 'template_psycho_rue.docx' },
                { value: 'Avenue', label: 'Avenue', template: 'template_psycho_avenue.docx' },
                { value: 'Boulevard', label: 'Boulevard', template: 'template_psycho_boulevard.docx' },
                { value: 'Impasse', label: 'Impasse', template: 'template_psycho_impasse.docx' },
                { value: 'Place', label: 'Place', template: 'template_psycho_place.docx' },
                { value: 'Chemin', label: 'Chemin', template: 'template_psycho_chemin.docx' },
                { value: 'Allée', label: 'Allée', template: 'template_psycho_allee.docx' },
            ],
            validators: [Validators.required],
            uppercase: true,
            getTemplate: function (value: string) {
                const option = this.options.find((opt: { value: string, label: string, template: string }) => opt.value === value);
                return option ? option.template : 'template_default.docx';
            }
        },
        { name: 'nmRue', label: 'Indiquez le nom de votre rue', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'zipCd', label: 'Saisissez le code postal de votre adresse', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'nmVille', label: 'Indiquez le nom de votre ville ou commune', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'numeroTelephone', label: 'Veuillez fournir un numéro de téléphone où nous pouvons vous joindre', type: 'text', validators: [Validators.required], uppercase: true },

        { type: 'section-header', label: '4. Informations sur votre permis' } as FormField,

        {
            name: 'typeSanction', label: 'Sélectionnez la sanction à laquelle vous avez été soumis', type: 'select', options: [
                { value: 'Suspension administrative', label: 'Suspension administrative' },
                { value: 'Annulation du permis de conduire', label: 'Annulation du permis de conduire' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'dureeSanction', label: 'Inscrivez la durée de la sanction', type: 'select', options: [
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
        { name: 'dateSanction', label: 'Indiquez la date à laquelle votre permis a été retiré (approximation acceptée)', type: 'date', validators: [Validators.required] },

        { type: 'section-header', label: '5. Visite médicale et demande de test' } as FormField,
        {
            name: 'preff', label: 'Sélectionnez la préfecture où vous effectuez votre demande', type: 'select', options: [
                { value: 'Toulon', label: 'Toulon' },
                { value: 'Draguignan', label: 'Draguignan' },
                { value: 'Marseille', label: 'Marseille' },
                { value: 'Nice', label: 'Nice' },
                { value: 'Paris', label: 'Paris' },
            ], validators: [Validators.required]
        },
        { name: 'dateVisitePref', label: 'Veuillez indiquer la date de votre visite médicale', type: 'date', validators: [Validators.required] },
        { name: 'dateSouhaiteeTest', label: 'Indiquez la date à laquelle vous souhaitez passer votre test psychotechnique', type: 'date', validators: [Validators.required] },
    ],

    assr_2: [
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'blaze', label: 'Prénom', type: 'text', validators: [Validators.required], capitalize: true },
        { name: 'dateBirth', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'wantedSess', label: 'Session souhaitée', type: 'date', validators: [Validators.required] },
        { name: 'cityBirth', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
    ],

    journee_appel: [
        {
            name: 'genre', label: 'Genre', type: 'select', options: [
                { value: 'Monsieur', label: 'Monsieur' },
                { value: 'Madame', label: 'Madame' }
            ], validators: [Validators.required]
        },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required], capitalize: true },
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
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required], capitalize: true },
        { name: 'numeroLigne', label: 'Numéro de téléphone', type: 'text', validators: [Validators.required, Validators.pattern(/^\d{10}$/)] },
        { name: 'email', label: 'Adresse mail', type: 'text', validators: [Validators.required] },
        { name: 'dateFacture', label: 'Date de la facture', type: 'date', validators: [Validators.required] },
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
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required], capitalize: true },
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

    cdi_developpeur: [
        { name: 'blaze', label: 'Nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'surn', label: 'Prénom', type: 'text', validators: [Validators.required], capitalize: true },
        { name: 'dateBirth', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'cityBirth', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
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
        { name: 'nmRue', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'nRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        { name: 'zipCde', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'nmVille', label: 'Ville', type: 'text', validators: [Validators.required] },
        { name: 'socNbr', label: 'Numéro de sécurité sociale', type: 'text', validators: [Validators.required] },
        {
            name: 'mrMadame', label: 'M/MME', type: 'select', options: [
                { value: 'MR.', label: 'Monsieur' },
                { value: 'MME', label: 'Madame' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'mapesa', label: 'Salaire', type: 'select', options: [
                { value: '1867,50', label: '1867,50€ (1494€ net)' },
                { value: '2705', label: '2705€ (2164€ net)' },
                { value: '3580', label: '3580€ (2864€ net)' },
            ], validators: [Validators.required], uppercase: true
        },
    ],

    cdi_livreur: [
        { name: 'blaze', label: 'Nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'surn', label: 'Prénom', type: 'text', validators: [Validators.required], capitalize: true },
        { name: 'dateBirth', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'cityBirth', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
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
        { name: 'nmRue', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'nRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        { name: 'zipCde', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'nmVille', label: 'Ville', type: 'text', validators: [Validators.required] },
        { name: 'socNbr', label: 'Numéro de sécurité sociale', type: 'text', validators: [Validators.required] },
        {
            name: 'mrMadame', label: 'M/MME', type: 'select', options: [
                { value: 'MR.', label: 'Monsieur' },
                { value: 'MME', label: 'Madame' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'mapesa', label: 'Salaire', type: 'select', options: [
                { value: '1867,50', label: '1867,50€ (1494€ net)' },
                { value: '2705', label: '2705€ (2164€ net)' },
                { value: '3580', label: '3580€ (2864€ net)' },
            ], validators: [Validators.required], uppercase: true
        },
    ],
    cdi_plombier: [
        { name: 'blaze', label: 'Nom', type: 'text', validators: [Validators.required], uppercase: true },
        { name: 'surn', label: 'Prénom', type: 'text', validators: [Validators.required], capitalize: true },
        { name: 'dateBirth', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'cityBirth', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
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
        { name: 'nmRue', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'nRue', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        { name: 'zipCde', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'nmVille', label: 'Ville', type: 'text', validators: [Validators.required] },
        { name: 'socNbr', label: 'Numéro de sécurité sociale', type: 'text', validators: [Validators.required] },
        {
            name: 'mrMadame', label: 'M/MME', type: 'select', options: [
                { value: 'MR.', label: 'Monsieur' },
                { value: 'MME', label: 'Madame' }
            ], validators: [Validators.required], uppercase: true
        },
        {
            name: 'mapesa', label: 'Salaire', type: 'select', options: [
                { value: '1867,50', label: '1867,50€ (1494€ net)' },
                { value: '2705', label: '2705€ (2164€ net)' },
                { value: '3580', label: '3580€ (2864€ net)' },
            ], validators: [Validators.required], uppercase: true
        },
    ],
};

// À la fin du fichier form-definitions-custom.ts
function transformToUppercase(formDefinitions: any) {
    for (const formGroupKey in formDefinitions) {
        if (formDefinitions.hasOwnProperty(formGroupKey)) {
            const formGroup = formDefinitions[formGroupKey];

            formGroup.forEach((field: any) => {
                if (field.uppercase) {
                    field.transformValue = (value: string) => {
                        return value ? value.toUpperCase() : value;
                    };
                }
                if (field.capitalize) {
                    field.transformValue = (value: string) => {
                        if (!value) return value;
                        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                    };
                }
            });
        }
    }
}

// Appliquer la transformation à FORM_DEFINITIONS_CUSTOM
transformToUppercase(FORM_DEFINITIONS);
