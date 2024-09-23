import { Validators } from "@angular/forms";

export const FORM_DEFINITIONS_CUSTOM = {
    cheque_bancaire: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        { name: 'adresseComplete', label: 'Adresse complète', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        {
            name: 'banqueSouhaitee',
            label: 'Banque souhaitée',
            type: 'select',
            options: [
                { value: 'BNP Paribas', label: 'BNP Paribas' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'Société Générale', label: 'Société Générale' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'adresseLiv', label: 'Adresse de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_pro: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        {
            name: 'typeSociete',
            label: 'Type de société',
            type: 'select',
            options: [
                { value: 'SARL', label: 'SARL (Société à Responsabilité Limitée)' },
                { value: 'EURL', label: 'EURL (Entreprise Unipersonnelle à Responsabilité Limitée)' },
                { value: 'SA', label: 'SA (Société Anonyme)' },
                { value: 'SAS', label: 'SAS (Société par Actions Simplifiée)' },
                { value: 'SASU', label: 'SASU (Société par Actions Simplifiée Unipersonnelle)' },
                { value: 'SNC', label: 'SNC (Société en Nom Collectif)' },
                { value: 'SCI', label: 'SCI (Société Civile Immobilière)' },
                { value: 'SCOP', label: 'SCOP (Société Coopérative et Participative)' },
                { value: 'SCP', label: 'SCP (Société Civile Professionnelle)' },
                { value: 'Entreprise individuelle', label: 'Entreprise individuelle' },
                { value: 'Auto-entrepreneur', label: 'Auto-entrepreneur' },
                { value: 'EIRL', label: 'EIRL (Entreprise Individuelle à Responsabilité Limitée)' }
            ],
            validators: [Validators.required]
        },
        { name: 'nomSociete', label: 'Nom de la société', type: 'text', validators: [Validators.required] },
        { name: 'adresseSociete', label: 'Adresse de la société', type: 'text', validators: [Validators.required] },
        {
            name: 'banqueSouhaitee',
            label: 'Banque souhaitée',
            type: 'select',
            options: [
                { value: 'BNP Paribas', label: 'BNP Paribas' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'Société Générale', label: 'Société Générale' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'adresseLiv', label: 'Adresse de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_super_pro: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nomRecepteur', label: 'Nom du récepteur', type: 'text', validators: [Validators.required] },
        {
            name: 'banqueRecepteur',
            label: 'Banque du récepteur',
            type: 'select',
            options: [
                { value: 'BNP Paribas', label: 'BNP Paribas' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'Société Générale', label: 'Société Générale' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'montant', label: 'Montant', type: 'number', validators: [Validators.required] },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'adresseLiv', label: 'Adresse de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_de_banque: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nomRecepteur', label: 'Nom du récepteur', type: 'text', validators: [Validators.required] },
        {
            name: 'banqueRecepteur',
            label: 'Banque du récepteur',
            type: 'select',
            options: [
                { value: 'BNP Paribas', label: 'BNP Paribas' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'Société Générale', label: 'Société Générale' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'montant', label: 'Montant', type: 'number', validators: [Validators.required] },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'adresseLiv', label: 'Adresse de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de livraison', type: 'text', validators: [Validators.required] }
    ],

    carte_identite: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Nationalité',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Lieu de naissance', type: 'text', validators: [Validators.required] },
        { name: 'adressePostale', label: 'Adresse postale', type: 'text', validators: [Validators.required] },
        { name: 'sexe', label: 'Sexe', type: 'text', validators: [Validators.required] },
        { name: 'taille', label: 'Taille', type: 'text', validators: [Validators.required] },
    ],
    permis: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Nationalité',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Lieu de naissance', type: 'text', validators: [Validators.required] },
        { name: 'adressePostale', label: 'Adresse postale', type: 'text', validators: [Validators.required] },
        { name: 'sexe', label: 'Sexe', type: 'text', validators: [Validators.required] },
        { name: 'taille', label: 'Taille', type: 'text', validators: [Validators.required] },
        {
            name: 'prefectureSouhaitee', label: 'Préfecture souhaitée', type: 'select', options: [
                { value: 'Préfecture de Toulon', label: 'Préfecture de Toulon' },
                { value: 'Préfecture de Draguignan', label: 'Préfecture de Draguignan' },
                { value: 'Préfecture de Marseille', label: 'Préfecture de Marseille' },
                { value: 'Préfecture de Nice', label: 'Préfecture de Nice' },
                { value: 'Préfecture de Paris', label: 'Préfecture de Paris' },
            ], validators: [Validators.required]
        },
        {
            name: 'permisSouhaite',
            label: 'Permis souhaité',
            type: 'select',
            options: [
                { value: 'AM', label: 'AM' },
                { value: 'A1', label: 'A1' },
                { value: 'A2', label: 'A2' },
                { value: 'A', label: 'A' },
                { value: 'B1', label: 'B1' },
                { value: 'B', label: 'B' },
                { value: 'C1', label: 'C1' },
                { value: 'C', label: 'C' },
                { value: 'D1', label: 'D1' },
                { value: 'D', label: 'D' },
                { value: 'Be', label: 'Be' },
                { value: 'C1E', label: 'C1E' },
                { value: 'Ce', label: 'Ce' },
                { value: 'D1e', label: 'D1e' },
                { value: 'De', label: 'De' }
            ],
            validators: [Validators.required]
        },],
    passeport: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Nationalité',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Lieu de naissance', type: 'text', validators: [Validators.required] },
        { name: 'adressePostale', label: 'Adresse postale', type: 'text', validators: [Validators.required] },
        { name: 'sexe', label: 'Sexe', type: 'text', validators: [Validators.required] },
        { name: 'taille', label: 'Taille', type: 'text', validators: [Validators.required] },
    ],
    visa: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Nationalité',
            type: 'select',
            options: [
                { value: '🇫🇷 Française', label: '🇫🇷 Française' },
                { value: '🇪🇸 Espagnole', label: '🇪🇸 Espagnole' },
                { value: '🇮🇹 Italienne', label: '🇮🇹 Italienne' },
                { value: '🇵🇹 Portugaise', label: '🇵🇹 Portugaise' },
                { value: '🇧🇪 Belge', label: '🇧🇪 Belge' },
                { value: '🇨🇭 Suisse', label: '🇨🇭 Suisse' },
                { value: '🇮🇱 Israélienne', label: '🇮🇱 Israélienne' },
                { value: '🇳🇱 Hollandaise', label: '🇳🇱 Hollandaise' }
            ],
            validators: [Validators.required]
        },
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        { name: 'lieuNaissance', label: 'Lieu de naissance', type: 'text', validators: [Validators.required] },
        { name: 'adressePostale', label: 'Adresse postale', type: 'text', validators: [Validators.required] },
        { name: 'sexe', label: 'Sexe', type: 'text', validators: [Validators.required] },
        { name: 'taille', label: 'Taille', type: 'text', validators: [Validators.required] },
    ],
};