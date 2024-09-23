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
        { name: 'dateSouhaitee', label: 'Date souhaitée', type: 'date', validators: [Validators.required] },
        { name: 'adresseComplete', label: 'Adresse complète', type: 'text', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'M', label: 'Homme' },
                { value: 'F', label: 'Femme' },
            ], validators: [Validators.required]
        },
    ],
    test_stup_urinaire: [
        {
            name: 'genre', label: 'Genre', type: 'select', options: [
                { value: 'Monsieur', label: 'Monsieur' },
                { value: 'Madame', label: 'Madame' }
            ], validators: [Validators.required]
        },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'dateSouhaitee', label: 'Date souhaitée', type: 'date', validators: [Validators.required] },
        { name: 'adresseComplete', label: 'Adresse complète', type: 'text', validators: [Validators.required] }
    ],
    test_stup_sanguin: [
        {
            name: 'genre', label: 'Genre', type: 'select', options: [
                { value: 'M', label: 'Monsieur' },
                { value: 'Mme', label: 'Madame' }
            ], validators: [Validators.required]
        },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'dateSouhaitee', label: 'Date souhaitée', type: 'date', validators: [Validators.required] },
        { name: 'adresseComplete', label: 'Adresse complète', type: 'text', validators: [Validators.required] }
    ],
    test_psycho: [
        {
            name: 'genre', label: 'Genre', type: 'select', options: [
                { value: 'Monsieur', label: 'Monsieur' },
                { value: 'Madame', label: 'Madame' }
            ], validators: [Validators.required]
        },
        {
            name: 'motif', label: 'Motif', type: 'select', options: [
                { value: 'Suspension du permis de conduire', label: 'Suspension du permis de conduire' },
                { value: 'Annulation du permis de conduire', label: 'Annulation du permis de conduire' },
                { value: 'Convocation justice', label: 'Convocation justice' },
            ], validators: [Validators.required]
        },
        {
            name: 'prefecture', label: 'Préfecture', type: 'select', options: [
                { value: 'Préfecture de Toulon', label: 'Préfecture de Toulon' },
                { value: 'Préfecture de Draguignan', label: 'Préfecture de Draguignan' },
                { value: 'Préfecture de Marseille', label: 'Préfecture de Marseille' },
                { value: 'Préfecture de Nice', label: 'Préfecture de Nice' },
                { value: 'Préfecture de Paris', label: 'Préfecture de Paris' },
            ], validators: [Validators.required]
        },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'dateSouhaitee', label: 'Date souhaitée', type: 'date', validators: [Validators.required] },
    ],

    assr_2: [
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'sessionSouhaitee', label: 'Session souhaitée', type: 'date', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Lieu de Naissance', type: 'text', validators: [Validators.required] }
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
        { name: 'moisNaissance', label: 'Mois de Naissance', type: 'text', validators: [Validators.required] },
        { name: 'villeNaissance', label: 'Ville de naissance', type: 'text', validators: [Validators.required] },
        { name: 'departementNaissance', label: 'Département de naissance', type: 'text', validators: [Validators.required] },
        { name: 'jourSouhaite', label: 'Jour d\'examen souhaité', type: 'text', validators: [Validators.required] },
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
        { name: 'numeroLigne', label: 'Numéro de ligne', type: 'text', validators: [Validators.required] },
        { name: 'email', label: 'Adresse mail', type: 'text', validators: [Validators.required] },
        { name: 'dateFacture', label: 'Date de la facture', type: 'date', validators: [Validators.required] },
        { name: 'rueNum', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        { name: 'rue', label: 'Nom de la rue', type: 'text', validators: [Validators.required] },
        { name: 'departement', label: 'Numéro du département', type: 'text', validators: [Validators.required] },
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
        { name: 'adresseComplete', label: 'Adresse complète', type: 'text', validators: [Validators.required] },
        { name: 'numSecuSociale', label: 'Numéro de sécurité sociale', type: 'text', validators: [Validators.required] },
        { name: 'numDateDebut', label: 'Jour du début du contrat', type: 'text', validators: [Validators.required] },
        { name: 'moisDateDebut', label: 'Mois du début du contrat', type: 'text', validators: [Validators.required] },
        { name: 'anneeDateDebut', label: 'Année du début du contrat', type: 'text', validators: [Validators.required] },
        { name: 'salaire', label: 'Salaire', type: 'text', validators: [Validators.required] },
    ],
};