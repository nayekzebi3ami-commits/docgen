import { Validators } from "@angular/forms";

export const FORM_DEFINITIONS_CUSTOM = {
    cheque_bancaire: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
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
        { name: 'dateNaissance', label: 'Date de naissance', type: 'date', validators: [Validators.required] },
        {
            name: 'banqueSouhaitee',
            label: 'Banque souhaitée',
            type: 'select',
            options: [
                { value: 'BNP', label: 'BNP' },
                { value: 'Monabanq', label: 'Monabanq' },
                { value: 'Orange Bank', label: 'Orange Bank' },
                { value: 'HSBC', label: 'HSBC' },
                { value: 'AXA', label: 'AXA' },
                { value: 'BRED', label: 'BRED' },
                { value: 'CIC', label: 'CIC' },
                { value: 'LCL', label: 'LCL' },
                { value: 'Banque Postale', label: 'Banque Postale' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'SG', label: 'SG' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueLiv', label: 'Numéro de rue (Livraison)', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueLiv', label: 'Type de rue (Livraison)', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueLiv', label: 'Nom de rue (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'codePostalLiv', label: 'Code postal (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'villeLiv', label: 'Ville (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de téléphone de la livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_pro: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
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
        { name: 'numeroRueSociete', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueSociete', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueSociete', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalSociete', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villeSociete', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'banqueSouhaitee',
            label: 'Banque souhaitée',
            type: 'select',
            options: [
                { value: 'BNP', label: 'BNP' },
                { value: 'Monabanq', label: 'Monabanq' },
                { value: 'Orange Bank', label: 'Orange Bank' },
                { value: 'HSBC', label: 'HSBC' },
                { value: 'AXA', label: 'AXA' },
                { value: 'BRED', label: 'BRED' },
                { value: 'CIC', label: 'CIC' },
                { value: 'LCL', label: 'LCL' },
                { value: 'Banque Postale', label: 'Banque Postale' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'SG', label: 'SG' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueLiv', label: 'Numéro de rue (Livraison)', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueLiv', label: 'Type de rue (Livraison)', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueLiv', label: 'Nom de rue (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'codePostalLiv', label: 'Code postal (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'villeLiv', label: 'Ville (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de téléphone de la livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_super_pro: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
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
                { value: 'BNP', label: 'BNP' },
                { value: 'Monabanq', label: 'Monabanq' },
                { value: 'Orange Bank', label: 'Orange Bank' },
                { value: 'HSBC', label: 'HSBC' },
                { value: 'AXA', label: 'AXA' },
                { value: 'BRED', label: 'BRED' },
                { value: 'CIC', label: 'CIC' },
                { value: 'LCL', label: 'LCL' },
                { value: 'Banque Postale', label: 'Banque Postale' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'SG', label: 'SG' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'montant', label: 'Montant', type: 'number', validators: [Validators.required] },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueLiv', label: 'Numéro de rue (Livraison)', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueLiv', label: 'Type de rue (Livraison)', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueLiv', label: 'Nom de rue (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'codePostalLiv', label: 'Code postal (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'villeLiv', label: 'Ville (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de téléphone de la livraison', type: 'text', validators: [Validators.required] }
    ],
    cheque_de_banque: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
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
                { value: 'BNP', label: 'BNP' },
                { value: 'Monabanq', label: 'Monabanq' },
                { value: 'Orange Bank', label: 'Orange Bank' },
                { value: 'HSBC', label: 'HSBC' },
                { value: 'AXA', label: 'AXA' },
                { value: 'BRED', label: 'BRED' },
                { value: 'CIC', label: 'CIC' },
                { value: 'LCL', label: 'LCL' },
                { value: 'Banque Postale', label: 'Banque Postale' },
                { value: 'Crédit Agricole', label: 'Crédit Agricole' },
                { value: 'SG', label: 'SG' },
                { value: 'Banque Populaire', label: 'Banque Populaire' },
                { value: 'Caisse d\'Epargne', label: 'Caisse d\'Epargne' }
            ],
            validators: [Validators.required]
        },
        { name: 'montant', label: 'Montant', type: 'number', validators: [Validators.required] },
        { name: 'nomLiv', label: 'Nom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'prenomLiv', label: 'Prénom de livraison', type: 'text', validators: [Validators.required] },
        { name: 'numeroRueLiv', label: 'Numéro de rue (Livraison)', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRueLiv', label: 'Type de rue (Livraison)', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRueLiv', label: 'Nom de rue (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'codePostalLiv', label: 'Code postal (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'villeLiv', label: 'Ville (Livraison)', type: 'text', validators: [Validators.required] },
        { name: 'numeroLiv', label: 'Numéro de téléphone de la livraison', type: 'text', validators: [Validators.required] }
    ],

    carte_identite: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Nationalité du permis souhaité',
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
        { name: 'numeroRuePostale', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'Homme', label: 'Homme' },
                { value: 'Femme', label: 'Femme' },
            ], validators: [Validators.required]
        },
        { name: 'taille', label: 'Taille (en cm)', type: 'text', validators: [Validators.required] },
    ],
    permis: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
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
        { name: 'numeroRuePostale', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'Homme', label: 'Homme' },
                { value: 'Femme', label: 'Femme' },
            ], validators: [Validators.required]
        },
        { name: 'taille', label: 'Taille (en cm)', type: 'text', validators: [Validators.required] },
        { name: 'prefectureSouhaitee', label: 'Préfecture de délivrance du permis souhaité', type: 'text', validators: [Validators.required] },
        {
            name: 'permisSouhaite',
            label: 'Catégorie du permis souhaité',
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
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
        {
            name: 'nationalite',
            label: 'Nationalité du passeport souhaité',
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
        { name: 'numeroRuePostale', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'Homme', label: 'Homme' },
                { value: 'Femme', label: 'Femme' },
            ], validators: [Validators.required]
        },
        { name: 'taille', label: 'Taille (en cm)', type: 'text', validators: [Validators.required] },
    ],
    visa: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
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
        { name: 'numeroRuePostale', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Ville', type: 'text', validators: [Validators.required] },
        {
            name: 'sexe', label: 'Sexe', type: 'select', options: [
                { value: 'Homme', label: 'Homme' },
                { value: 'Femme', label: 'Femme' },
            ], validators: [Validators.required]
        },
        { name: 'taille', label: 'Taille (en cm)', type: 'text', validators: [Validators.required] },
    ],
    amende: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
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
        { name: 'numeroRuePostale', label: 'Numéro de rue', type: 'text', validators: [Validators.required] },
        {
            name: 'typeRuePostale', label: 'Type de rue', type: 'select', options: [
                { value: 'Rue', label: 'Rue' },
                { value: 'Avenue', label: 'Avenue' },
                { value: 'Boulevard', label: 'Boulevard' },
                { value: 'Impasse', label: 'Impasse' },
                { value: 'Place', label: 'Place' },
                { value: 'Chemin', label: 'Chemin' },
                { value: 'Allée', label: 'Allée' }
            ], validators: [Validators.required]
        },
        { name: 'nomRuePostale', label: 'Nom de rue', type: 'text', validators: [Validators.required] },
        { name: 'codePostalPostale', label: 'Code postal', type: 'text', validators: [Validators.required] },
        { name: 'villePostale', label: 'Ville', type: 'text', validators: [Validators.required] },
        { name: 'numeroPermis', label: 'Numéro de permis', type: 'text', validators: [Validators.required] },
        { name: 'numeroContravention', label: 'Numéro de contravention', type: 'text', validators: [Validators.required] },
        { name: 'nomPrenomContravention', label: 'Nom prénom contravention', type: 'text', validators: [Validators.required] },
        { name: 'dateContravention', label: 'Date contravention', type: 'date', validators: [Validators.required] },
        { name: 'heureContravention', label: 'Heure contravention', type: 'time', validators: [Validators.required] },
    ],
    pare_brise: [
        {
            name: 'reseau',
            label: 'Réseau social pour vous contacter',
            type: 'select',
            options: [
                { value: 'Snapchat', label: 'Snapchat' },
                { value: 'Whatsapp', label: 'Whatsapp' },
                { value: 'Telegram', label: 'Telegram' },
            ],
            validators: [Validators.required]
        },
        { name: 'pseudoReseau', label: 'Pseudonyme sur le réseau', type: 'text', validators: [Validators.required] },
        { name: 'nom', label: 'Nom', type: 'text', validators: [Validators.required] },
        { name: 'prenom', label: 'Prénom', type: 'text', validators: [Validators.required] },
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
        { name: 'marque', label: 'Marque du véhicule', type: 'text', validators: [Validators.required] },
        { name: 'modele', label: 'Modèle du véhicule', type: 'text', validators: [Validators.required] },
        { name: 'immatriculation', label: 'Numéro d\'immatriculation du véhicule', type: 'text', validators: [Validators.required] },
        { name: 'kilometrage', label: 'Kilométrage du véhicule', type: 'text', validators: [Validators.required] },
    ],
};