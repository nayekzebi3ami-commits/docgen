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
};